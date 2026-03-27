import type { Handler, HandlerEvent } from '@netlify/functions';

const ALLOWED_ORIGINS = [
  'https://itsnico.dev',
  'https://itsnicoramos-website.netlify.app',
  'http://localhost:8888',
  'http://localhost:3000',
  'http://127.0.0.1:8888',
  'http://127.0.0.1:3000',
];

const MAX_AUDIO_BYTES = 8 * 1024 * 1024;
const RATE_LIMIT_PER_MIN = 6;
const OPENAI_TRANSCRIPTION_URL = 'https://api.openai.com/v1/audio/transcriptions';

type TranscriptionResponse = {
  text?: string;
  error?: { message?: string };
};

const rateLimiter = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60_000;
  const hits = (rateLimiter.get(ip) ?? []).filter(t => t > now - windowMs);

  if (hits.length >= RATE_LIMIT_PER_MIN) {
    return false;
  }

  hits.push(now);
  rateLimiter.set(ip, hits);
  return true;
}

function corsHeaders(origin: string) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];

  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  };
}

function json(statusCode: number, body: object, origin: string) {
  return { statusCode, headers: corsHeaders(origin), body: JSON.stringify(body) };
}

function sanitizeMimeType(value: string) {
  if (/^audio\/webm/i.test(value)) {
    return 'audio/webm';
  }

  if (/^audio\/(?:mp4|m4a|x-m4a)/i.test(value)) {
    return 'audio/mp4';
  }

  if (/^audio\/ogg/i.test(value)) {
    return 'audio/ogg';
  }

  if (/^audio\/(?:wav|wave|x-wav)/i.test(value)) {
    return 'audio/wav';
  }

  return 'audio/webm';
}

function extensionForMimeType(mimeType: string) {
  switch (mimeType) {
    case 'audio/mp4':
      return 'm4a';
    case 'audio/ogg':
      return 'ogg';
    case 'audio/wav':
      return 'wav';
    default:
      return 'webm';
  }
}

function decodeAudioBase64(audioBase64: string) {
  const trimmed = audioBase64.trim();
  const match = trimmed.match(/^data:([^;]+);base64,(.+)$/);

  if (match) {
    return {
      mimeType: sanitizeMimeType(match[1]),
      bytes: Buffer.from(match[2], 'base64'),
    };
  }

  return {
    mimeType: 'audio/webm',
    bytes: Buffer.from(trimmed, 'base64'),
  };
}

export const handler: Handler = async (event: HandlerEvent) => {
  const origin = event.headers.origin ?? event.headers.Origin ?? '';

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders(origin), body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method not allowed' }, origin);
  }

  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return json(403, { error: 'Forbidden' }, origin);
  }

  const ip =
    event.headers['x-forwarded-for']?.split(',')[0]?.trim() ??
    event.headers['client-ip'] ??
    'unknown';

  if (!checkRateLimit(ip)) {
    return json(429, { error: 'Too many voice requests. Please wait a minute.' }, origin);
  }

  let body: { audioBase64?: unknown; mimeType?: unknown };
  try {
    body = JSON.parse(event.body ?? '{}');
  } catch {
    return json(400, { error: 'Invalid JSON' }, origin);
  }

  if (typeof body.audioBase64 !== 'string' || body.audioBase64.trim().length === 0) {
    return json(400, { error: 'Audio is required' }, origin);
  }

  let decoded: { mimeType: string; bytes: Buffer };
  try {
    decoded = decodeAudioBase64(body.audioBase64);
  } catch {
    return json(400, { error: 'Invalid audio payload' }, origin);
  }

  if (!decoded.bytes.length) {
    return json(400, { error: 'Audio is empty' }, origin);
  }

  if (decoded.bytes.length > MAX_AUDIO_BYTES) {
    return json(400, { error: 'Audio file is too large' }, origin);
  }

  const safeMimeType = typeof body.mimeType === 'string' && body.mimeType
    ? sanitizeMimeType(body.mimeType)
    : decoded.mimeType;
  const fileExtension = extensionForMimeType(safeMimeType);
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    console.error('Missing OPENAI_API_KEY');
    return json(500, { error: 'AI service not configured.' }, origin);
  }

  try {
    const formData = new FormData();
    formData.append(
      'file',
      new Blob([decoded.bytes], { type: safeMimeType }),
      `voice-message.${fileExtension}`,
    );
    formData.append('model', 'gpt-4o-mini-transcribe');

    const response = await fetch(OPENAI_TRANSCRIPTION_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      body: formData,
    });

    if (response.status === 429) {
      return json(429, { error: 'Voice service rate limited. Try again shortly.' }, origin);
    }

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI transcription error:', response.status, errorText);
      return json(502, { error: 'Voice transcription is temporarily unavailable.' }, origin);
    }

    const data = await response.json() as TranscriptionResponse;
    if (data.error) {
      console.error('OpenAI transcription error:', data.error.message ?? data.error);
      return json(502, { error: 'Voice transcription is temporarily unavailable.' }, origin);
    }

    const text = typeof data.text === 'string' ? data.text.trim() : '';
    if (!text) {
      return json(502, { error: 'Voice transcription returned no text.' }, origin);
    }

    return json(200, { text }, origin);
  } catch (error) {
    console.error('Unexpected transcription error:', error);
    return json(500, { error: 'Something went wrong. Please try again.' }, origin);
  }
};
