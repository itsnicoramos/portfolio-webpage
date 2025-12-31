// ============================================
// PROFESSIONAL NETLIFY FUNCTION - api.js
// Production-ready security
// ============================================

// In-memory rate limit store (use Redis/Upstash for production at scale)
const rateLimitStore = new Map();

// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
  // Allowed origins (add your domains here)
  ALLOWED_ORIGINS: [
    'https://itsnicoramos-website.netlify.app',
    'https://itsnicoramos.com',
    'http://localhost:8888',  // Local dev
    'http://localhost:3000'   // Local dev
  ],
  
  // Request limits
  MAX_BODY_SIZE: 2048,        // 2KB max request body
  MAX_MESSAGE_LENGTH: 500,
  MIN_MESSAGE_LENGTH: 2,
  
  // Rate limiting
  RATE_LIMIT_WINDOW_MS: 60000,
  RATE_LIMIT_MAX_REQUESTS: 10,
  RATE_LIMIT_HOUR_WINDOW_MS: 3600000,
  RATE_LIMIT_HOUR_MAX: 50,
  
  // OpenAI
  MAX_TOKENS: 500,
  MODEL: 'gpt-4o-mini',
  TEMPERATURE: 0.7,
  API_TIMEOUT_MS: 15000       // 15 second timeout
};

// ============================================
// SECURITY HEADERS
// ============================================
function getSecurityHeaders(origin) {
  const allowedOrigin = CONFIG.ALLOWED_ORIGINS.includes(origin) ? origin : CONFIG.ALLOWED_ORIGINS[0];
  
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin'
  };
}

// ============================================
// 1. MAX BODY SIZE CHECK
// ============================================
function checkBodySize(body) {
  if (!body) {
    return { valid: false, error: 'Request body is required' };
  }
  
  const bodySize = Buffer.byteLength(body, 'utf8');
  
  if (bodySize > CONFIG.MAX_BODY_SIZE) {
    return { valid: false, error: 'Request too large' };
  }
  
  return { valid: true };
}

// ============================================
// 2. INPUT VALIDATION
// ============================================
function validateInput(message) {
  if (!message || typeof message !== 'string') {
    return { valid: false, error: 'Message is required' };
  }

  const trimmed = message.trim();

  if (trimmed.length < CONFIG.MIN_MESSAGE_LENGTH) {
    return { valid: false, error: 'Message is too short' };
  }

  if (trimmed.length > CONFIG.MAX_MESSAGE_LENGTH) {
    return { valid: false, error: `Message too long (max ${CONFIG.MAX_MESSAGE_LENGTH} characters)` };
  }

  const sanitized = trimmed
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    .replace(/\s{10,}/g, ' ');

  return { valid: true, sanitized };
}

// ============================================
// 3. RATE LIMITING BY IP
// ============================================
function checkRateLimit(ip) {
  const now = Date.now();
  const key = `rate_${ip}`;
  
  let data = rateLimitStore.get(key) || { minute: [], hour: [], blocked: null };

  if (data.blocked && now < data.blocked) {
    const seconds = Math.ceil((data.blocked - now) / 1000);
    return { allowed: false, error: `Too many requests. Try again in ${seconds} seconds.` };
  }

  data.minute = data.minute.filter(t => t > now - CONFIG.RATE_LIMIT_WINDOW_MS);
  data.hour = data.hour.filter(t => t > now - CONFIG.RATE_LIMIT_HOUR_WINDOW_MS);

  if (data.minute.length >= CONFIG.RATE_LIMIT_MAX_REQUESTS) {
    data.blocked = now + CONFIG.RATE_LIMIT_WINDOW_MS;
    rateLimitStore.set(key, data);
    return { allowed: false, error: 'Too many requests. Please wait a minute.' };
  }

  if (data.hour.length >= CONFIG.RATE_LIMIT_HOUR_MAX) {
    data.blocked = now + CONFIG.RATE_LIMIT_WINDOW_MS * 5;
    rateLimitStore.set(key, data);
    return { allowed: false, error: 'Hourly limit reached. Please try again later.' };
  }

  data.minute.push(now);
  data.hour.push(now);
  data.blocked = null;
  rateLimitStore.set(key, data);

  return { allowed: true };
}

// ============================================
// 4. AI GUARDRAILS
// ============================================
const BLOCKED_PATTERNS = [
  /ignore\s+(previous|all|above)\s+(instructions?|prompts?)/i,
  /disregard\s+(previous|all|above)/i,
  /forget\s+(everything|all|previous)/i,
  /you\s+are\s+now\s+/i,
  /new\s+instructions?:/i,
  /system\s*:\s*/i,
  /assistant\s*:\s*/i,
  /\[INST\]/i,
  /\[\/INST\]/i,
  /<\|im_start\|>/i,
  /<\|im_end\|>/i,
  /pretend\s+(you('re|are)|to\s+be)/i,
  /act\s+as\s+(if|a|an)\s+different/i,
  /roleplay\s+as/i,
  /jailbreak/i,
  /bypass\s+(filter|safety|restriction)/i,
  /ignore\s+safety/i,
  /override\s+(system|safety)/i,
  /reveal\s+(system|your)\s+prompt/i,
  /what\s+is\s+your\s+(system\s+)?prompt/i,
  /show\s+(me\s+)?(your\s+)?instructions/i,
  /repeat\s+(the\s+)?(above|previous|system)/i,
  /DAN\s*mode/i,
  /developer\s*mode/i,
  /sudo\s+/i,
  /admin\s+override/i
];

function checkAIGuardrails(message) {
  for (const pattern of BLOCKED_PATTERNS) {
    if (pattern.test(message)) {
      return { safe: false, error: "I can only answer questions about Nico's portfolio!" };
    }
  }
  return { safe: true };
}

// ============================================
// 5. CONTENT SAFETY
// ============================================
function checkContentSafety(message) {
  const capsRatio = (message.match(/[A-Z]/g) || []).length / message.length;
  if (message.length > 20 && capsRatio > 0.7) {
    return { safe: false, error: 'Please avoid excessive caps.' };
  }

  if (/(.)\1{9,}/.test(message)) {
    return { safe: false, error: 'Message contains too much repetition.' };
  }

  const specialRatio = (message.match(/[^a-zA-Z0-9\s]/g) || []).length / message.length;
  if (message.length > 10 && specialRatio > 0.5) {
    return { safe: false, error: 'Message contains too many special characters.' };
  }

  if ((message.match(/https?:\/\//g) || []).length > 2) {
    return { safe: false, error: 'Too many URLs in message.' };
  }

  return { safe: true };
}

// ============================================
// 6. STRIP PII
// ============================================
function stripPII(message) {
  return message
    .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '[email]')
    .replace(/(\+?1[-.\s]?)?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}/g, '[phone]')
    .replace(/\b\d{3}[-.\s]?\d{2}[-.\s]?\d{4}\b/g, '[number]')
    .replace(/\b(?:\d{4}[-.\s]?){3}\d{4}\b/g, '[number]');
}

// ============================================
// 7. SYSTEM PROMPT (Anti-Hallucination)
// ============================================
function buildSystemPrompt() {
  return `You are a helpful assistant for Nico Ramos's portfolio website. Your ONLY job is to answer questions about Nico based on the VERIFIED FACTS below.

=== STRICT RULES ===
1. ONLY use information from the VERIFIED FACTS section below
2. If asked about something NOT in the facts, say: "I don't have that information about Nico."
3. NEVER make up projects, skills, experiences, or details
4. NEVER invent dates, numbers, or statistics
5. Keep responses SHORT (2-4 sentences) unless listing projects/skills
6. Be friendly and conversational
7. If asked to do something unrelated to Nico's portfolio, politely decline

=== VERIFIED FACTS ===

**IDENTITY**
- Name: Nico Ramos
- Role: BSc Computer Science Student
- School: Vancouver Island University (VIU)
- Goal: Aspiring tech founder
- Focus: User experience, trust, long-term retention

**FEATURED PROJECTS**
1. Portfolio Website
   - Status: Live
   - URL: itsnicoramos-website.netlify.app
   - Tech: HTML, CSS, JavaScript, AI integration
   - Features: Responsive design, animations, AI assistant

2. FusionAI (Startup)
   - Status: In Development
   - Description: Campus-first social app with video introductions
   - Tech: React, Supabase, AI/ML
   - Launch plan: Campus-by-campus, starting with VIU
   
3. Neurosky: Experimental Python AI assistant (exploring supervised/unsupervised learning)

**University Projects that are done as academic work as a student**
- Neurosky: Experimental Python AI assistant (exploring supervised/unsupervised learning)
- CSCI 115: Web Development course project
- MEDI 110: Media Production (Vancouver photography)
- CSCI 159: Computer Science 1 (C++ fundamentals)
- CSCI 161: Coming soon
- CSCI 162: Coming soon

**SKILLS**
- Languages: C++, Python, JavaScript, TypeScript, HTML, CSS, Excel VBA
- Frameworks: React, Next.js, Prisma, Zod, shadcn/ui, Redux Toolkit, Node.js, Express.js
- Databases: MongoDB
- Tools: Git, GitHub, VS Code, Linux, Terminal, NPM, Vite
- AI/ML: Prompt engineering, LLM APIs (OpenAI, Gemini, Claude, DeepSeek)

**LEARNING (Udemy Courses - In Progress)**
- Hands-on React: 25+ projects, Next.js, TypeScript, Prisma, etc.
- Real-Time AI Chatbot: Multi-model API integration
- Master MongoDB: CRUD, indexes, aggregation

**SOCIAL LINKS**
- TikTok: @itsnicoramos_
- Instagram: @itsnicoramos__
- Threads: @itsnicoramos__
- LinkedIn: nico-ramos28
- GitHub: itsnicoramos

**INTERESTS**
- Building in public
- Travel and visual storytelling
- Dream destinations: Japan, Switzerland, Silicon Valley

=== END VERIFIED FACTS ===

Remember: If it's not in the facts above, say you don't have that information. Never guess or make things up.`;
}

// ============================================
// 8. SANITIZE OUTPUT
// ============================================
function sanitizeOutput(text) {
  if (!text || typeof text !== 'string') return '';
  
  return text
    .replace(/<[^>]*>/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .trim();
}

// ============================================
// 9. FETCH WITH TIMEOUT
// ============================================
async function fetchWithTimeout(url, options, timeoutMs) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      throw new Error('Request timed out');
    }
    throw error;
  }
}

// ============================================
// MAIN HANDLER
// ============================================
exports.handler = async (event, context) => {
  const origin = event.headers.origin || event.headers.Origin || '';
  const headers = getSecurityHeaders(origin);

  // CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Check origin
  if (origin && !CONFIG.ALLOWED_ORIGINS.includes(origin)) {
    return {
      statusCode: 403,
      headers,
      body: JSON.stringify({ error: 'Forbidden' })
    };
  }

  try {
    // 1. Check body size FIRST
    const bodySizeCheck = checkBodySize(event.body);
    if (!bodySizeCheck.valid) {
      return {
        statusCode: 413,
        headers,
        body: JSON.stringify({ error: bodySizeCheck.error })
      };
    }

    // Get client IP
    const clientIP = event.headers['x-forwarded-for']?.split(',')[0]?.trim() 
      || event.headers['client-ip'] 
      || 'unknown';

    // 2. Rate limit check
    const rateCheck = checkRateLimit(clientIP);
    if (!rateCheck.allowed) {
      return {
        statusCode: 429,
        headers,
        body: JSON.stringify({ error: rateCheck.error })
      };
    }

    // Parse body
    let body;
    try {
      body = JSON.parse(event.body);
    } catch (e) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid JSON' })
      };
    }

    const { message } = body;

    // 3. Validate input
    const inputCheck = validateInput(message);
    if (!inputCheck.valid) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: inputCheck.error })
      };
    }

    // 4. Content safety
    const contentCheck = checkContentSafety(inputCheck.sanitized);
    if (!contentCheck.safe) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: contentCheck.error })
      };
    }

    // 5. AI guardrails
    const aiCheck = checkAIGuardrails(inputCheck.sanitized);
    if (!aiCheck.safe) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: aiCheck.error })
      };
    }

    // 6. Strip PII
    const cleanMessage = stripPII(inputCheck.sanitized);

    // 7. Build system prompt
    const systemPrompt = buildSystemPrompt();

    // 8. Call OpenAI with timeout
    let response;
    try {
      response = await fetchWithTimeout(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
          },
          body: JSON.stringify({
            model: CONFIG.MODEL,
            messages: [
              { role: 'system', content: systemPrompt },
              { role: 'user', content: cleanMessage }
            ],
            max_tokens: CONFIG.MAX_TOKENS,
            temperature: CONFIG.TEMPERATURE
          })
        },
        CONFIG.API_TIMEOUT_MS
      );
    } catch (error) {
      console.error('OpenAI fetch error:', error.message);
      return {
        statusCode: 504,
        headers,
        body: JSON.stringify({ error: 'AI service timed out. Please try again.' })
      };
    }

    // 9. Check response.ok
    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', response.status, errorText);
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({ error: 'AI service temporarily unavailable' })
      };
    }

    const data = await response.json();

    // Check for API-level errors
    if (data.error) {
      console.error('OpenAI API error:', data.error);
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({ error: 'AI service error' })
      };
    }

    // 10. Sanitize output
    const rawResponse = data.choices?.[0]?.message?.content || '';
    const sanitizedResponse = sanitizeOutput(rawResponse);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        choices: [{
          message: {
            content: sanitizedResponse
          }
        }]
      })
    };

  } catch (error) {
    console.error('Server error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Something went wrong. Please try again.' })
    };
  }
};