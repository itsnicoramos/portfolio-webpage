import type { Handler, HandlerEvent } from '@netlify/functions';
import { SYSTEM_PROMPT } from './site-context';

// ── Config ────────────────────────────────────────────────────────────────────
const ALLOWED_ORIGINS = [
  'https://itsnico.dev',
  'https://itsnicoramos-website.netlify.app',
  'http://localhost:8888',
  'http://localhost:3000',
  'http://127.0.0.1:8888',
  'http://127.0.0.1:3000',
];

const MAX_MESSAGE_LENGTH = 1000;
const MAX_HISTORY_TURNS = 8;
const RATE_LIMIT_PER_MIN = 10;
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

type Turn = { role: 'user' | 'assistant'; content: string };
type ChatMessage = { role: 'system' | Turn['role']; content: string };
type ChatCompletionResponse = {
  error?: { message?: string };
  choices?: Array<{ message?: { content?: string | null } }>;
};

// ── In-memory rate limiter ─────────────────────────────
const rateLimiter = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now   = Date.now();
  const window = 60_000;
  const hits  = (rateLimiter.get(ip) ?? []).filter(t => t > now - window);
  if (hits.length >= RATE_LIMIT_PER_MIN) return false;
  hits.push(now);
  rateLimiter.set(ip, hits);
  return true;
}

// ── CORS helpers ──────────────────────────────────────────────────────────────
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

function sanitizeReply(text: string) {
  const cleaned = text
    .replace(/\*\*(.*?)\*\*/gs, '$1')
    .replace(/\*(.*?)\*/gs, '$1')
    .replace(/\*/g, '')
    .replace(/\s*[—–]\s*/g, ', ')
    .replace(/\n{3,}/g, '\n\n');

  return cleaned
    .split('\n')
    .map(line => line.trim())
    .join('\n')
    .trim();
}

// ── Handler ───────────────────────────────────────────────────────────────────
export const handler: Handler = async (event: HandlerEvent) => {
  const origin = event.headers['origin'] ?? event.headers['Origin'] ?? '';

  // Preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders(origin), body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method not allowed' }, origin);
  }

  // Origin check (skip for direct/server-side calls with no origin header)
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return json(403, { error: 'Forbidden' }, origin);
  }

  // Rate limit
  const ip =
    event.headers['x-forwarded-for']?.split(',')[0]?.trim() ??
    event.headers['client-ip'] ??
    'unknown';

  if (!checkRateLimit(ip)) {
    return json(429, { error: 'Too many requests — please wait a minute.' }, origin);
  }

  // Parse body
  let body: { message?: unknown; history?: unknown };
  try {
    body = JSON.parse(event.body ?? '{}');
  } catch {
    return json(400, { error: 'Invalid JSON' }, origin);
  }

  // Validate message
  const message = body.message;
  if (typeof message !== 'string' || message.trim().length === 0) {
    return json(400, { error: 'Message is required' }, origin);
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return json(400, { error: `Message too long (max ${MAX_MESSAGE_LENGTH} chars)` }, origin);
  }

  // Build conversation history
  const rawHistory = Array.isArray(body.history) ? body.history : [];
  const history: Turn[] = rawHistory
    .filter((t): t is Turn => {
      if (typeof t !== 'object' || t === null) {
        return false;
      }

      const candidate = t as { role?: unknown; content?: unknown };
      return (
        (candidate.role === 'user' || candidate.role === 'assistant') &&
        typeof candidate.content === 'string'
      );
    })
    .slice(-MAX_HISTORY_TURNS);

  const messages: ChatMessage[] = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...history.map(t => ({ role: t.role, content: t.content })),
    { role: 'user', content: message.trim() },
  ];

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error('Missing OPENAI_API_KEY');
    return json(500, { error: 'AI service not configured.' }, origin);
  }

  // Call OpenAI
  try {
    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-5.4',
        messages,
        max_completion_tokens: 512,
      }),
    });

    if (response.status === 429) {
      return json(429, { error: 'AI service rate limited — try again shortly.' }, origin);
    }

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', response.status, errorText);
      return json(502, { error: 'AI service temporarily unavailable.' }, origin);
    }

    const data = await response.json() as ChatCompletionResponse;
    if (data.error) {
      console.error('OpenAI API error:', data.error.message ?? data.error);
      return json(502, { error: 'AI service temporarily unavailable.' }, origin);
    }

    const content = data.choices?.[0]?.message?.content;
    const reply = typeof content === 'string' ? sanitizeReply(content) : '';

    if (!reply) {
      return json(502, { error: 'Empty response from AI' }, origin);
    }

    return json(200, { reply }, origin);
  } catch (err) {
    console.error('Unexpected error:', err);
    return json(500, { error: 'Something went wrong. Please try again.' }, origin);
  }
};
