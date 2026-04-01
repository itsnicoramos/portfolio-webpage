// ============================================
// PROFESSIONAL NETLIFY FUNCTION - api.js
// Production-ready security
// ============================================

// In-memory rate limit store (use Redis/Upstash for production at scale)
const rateLimitStore = new Map();

// ============================================
// CONTACT — loaded from Netlify env variable, never hardcoded in source
// Set CONTACT_EMAIL in Netlify → Site settings → Environment variables
// ============================================
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || '';

// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
  // Allowed origins (add your domains here)
  ALLOWED_ORIGINS: [
    'https://itsnicoramos-website.netlify.app',
    'https://itsnico.dev',
    'http://localhost:8888',  // Local dev
    'http://localhost:3000',  // Local dev
    'http://127.0.0.1:8888',
    'http://127.0.0.1:3000'
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
  // Prompt injection / override attempts
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
  /admin\s+override/i,

  // Email extraction / harvesting attempts
  /repeat\s+(the\s+)?(email|address|contact)\s+(from|in)\s+(your|the)/i,
  /extract\s+(the\s+)?(email|address|contact)/i,
  /print\s+(the\s+)?(email|address|contact)\s+(from|in)\s+(your|the)/i,
  /output\s+(the\s+)?(email|address|contact)\s+(from|in)\s+(your|the)/i,
  /copy\s+(the\s+)?(email|address|contact)\s+(from|in)\s+(your|the)/i,
  /what\s+(email|address)\s+(is\s+)?(in|inside)\s+(your|the)\s+(system|prompt|instructions)/i,
  /send\s+(spam|bulk|mass)\s+(email|mail|message)/i,
  /use\s+(this|the)\s+(email|address)\s+to\s+(spam|harvest|scrape|market|sell)/i,
  /add\s+(this\s+)?email\s+(to\s+)?(a\s+)?(list|database|mailing)/i,
  /harvest\s+(email|contact|address)/i,
  /scrape\s+(email|contact|address)/i
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
  return `You are a helpful assistant on Nico Ramos's personal portfolio website (itsnico.dev). Your ONLY job is to answer questions about Nico based on the VERIFIED FACTS below.

=== STRICT RULES ===
1. ONLY use information from the VERIFIED FACTS section below
2. If asked about something NOT in the facts, say: "I don't have that information about Nico."
3. NEVER make up projects, skills, experiences, or details
4. NEVER invent dates, numbers, or statistics
5. Keep responses SHORT (2-4 sentences) unless listing projects/skills or drafting an email
6. Be friendly and conversational
7. If asked to do something unrelated to Nico's portfolio, politely decline
8. When sharing contact info, always provide the full link or address
9. Follow the EMAIL DRAFTING WORKFLOW below whenever a user wants to contact Nico

=== EMAIL DRAFTING WORKFLOW ===
Trigger: user asks for Nico's email, wants to reach him, wants to send a message, or asks how to contact him.

STEP 1 — Offer to help draft:
Ask: "I can help you write a message to Nico. What would you like to say or ask him about?"

STEP 2 — Write the draft:
Once the user gives you the topic or message, produce a professional email:
- Tone: clear, warm, direct — written like a real human, not a corporate template
- NO Gen-Z slang (no "lowkey", "no cap", "vibe", "fr fr", etc.)
- NO hollow openers like "Hope this email finds you well" or "I am writing to inquire"
- Format:
    Subject: [one clear line]
    ---
    Hi Nico,

    [body — 2 short paragraphs max, under 120 words total]

    [Sign-off],
    [User's name or "A visitor from your portfolio"]

STEP 3 — Ask for permission:
After showing the draft, ask exactly this: "Does this look good? Say 'yes' to send it, or tell me what to change."

STEP 4 — Act on the response:
- If the user confirms (yes / looks good / send it / go ahead): reply with —
  "Here's the ready-to-send link: mailto:${CONTACT_EMAIL}"
  Then add: "Click the link to open it in your email client with the draft pre-filled — or copy the text above and paste it manually."
- If the user declines (no / stop / cancel / don't send / not now): reply with —
  "Got it — no email sent. Let me know if there's anything else I can help with."
  Then STOP. Do not mention the email address. Do not offer to send again.
- If the user wants changes: revise the draft, show it again, and return to Step 3.

CRITICAL RULE: Never share Nico's email address before the user has confirmed the draft in Step 3.

=== VERIFIED FACTS ===

**IDENTITY**
- Full name: Nico Ramos
- Role: BSc Computer Science Student & Student Founder
- School: Vancouver Island University (VIU), British Columbia, Canada
- Website: itsnico.dev
- Goal: Aspiring tech founder building products people actually use
- Focus: User experience, trust, long-term retention, AI-driven products

**CONTACT & SOCIAL LINKS**
- Email: ${CONTACT_EMAIL}
- LinkedIn: linkedin.com/in/nico-ramos28
- GitHub: github.com/itsnicoramos
- TikTok: tiktok.com/@itsnicoramos_
- Instagram: instagram.com/itsnicoramos__
- Threads: threads.net/@itsnicoramos__

**FEATURED PROJECTS**

1. Looply (Startup — 2026)
   - Role: Founder & Software Engineer
   - Description: AI-powered web app that helps creators and builders plan content strategies and scope product ideas using structured workflows
   - Tech: React, Vite, Firebase, OpenAI GPT, Claude Opus 4.6 by Anthropic, Vercel
   - Status: MVP in progress

2. ApplyKit (2026)
   - Description: AI student application copilot built with Lovable to help students move faster through internship and job searches
   - Features: Tailor resumes, turn job links into application-ready content, organize the application process
   - Tech: Lovable.dev, AI Agent integrated
   - URL: applykit.lovable.app
   - Status: Live MVP

3. ChainMind (Startup — 2026)
   - Role: Founder & Software Engineer
   - Description: Purpose-built blockchain with a conversational AI agent as its primary interface — users manage wallets, send coins, and analyze on-chain data through natural language or voice
   - Key features: Proof-of-work consensus, UTXO transaction model, modular skills system, permission tiers, voice input/output via Web Speech API
   - Tech: Python, FastAPI, Claude Sonnet 4.6 by Anthropic, Netlify Functions, SQLite, Web Speech API, Vanilla JS
   - GitHub: github.com/itsnicoramos/ChainMind

4. Portfolio Website (Live)
   - URL: itsnico.dev
   - Tech: HTML, CSS, JavaScript, AI chat assistant
   - Features: Responsive design, dark/light theme, blog, travel section, multilingual support

**UNIVERSITY COURSEWORK (VIU)**
- CSCI 115: Web Development (completed Spring 2025) — github: itsnicoramos.github.io/csci115-project
- MEDI 110: Media Production — Vancouver photography storytelling site (completed Fall 2025)
- CSCI 159: Computer Science 1 — C++ fundamentals (completed Fall 2025)
- CSCI 161: Computer Science 2 — OOP, data structures (currently enrolled)
- CSCI 162: Topics in Computer Science — logic, architecture, software engineering (currently enrolled)

**SKILLS**
- Frontend: HTML5, CSS3, JavaScript, TypeScript, React, Next.js
- Backend: Python, C/C++, Node.js, Firebase, SQL (SQLite)
- Tools: Git, GitHub, Linux, VS Code, Vite, Vercel, NPM
- AI/ML: Prompt engineering, LLM APIs (OpenAI GPT, Claude by Anthropic, Google Gemini)

**INTERESTS**
- Building in public and shipping real products
- Travel and visual storytelling (short-form video, Instagram, TikTok)
- Dream destinations: Japan, Switzerland, Silicon Valley, Dubai
- Italian passport holder — access to 192 destinations without prior visa

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

  // Check origin - allow if no origin (direct API calls) or if in allowed list
  if (origin && !CONFIG.ALLOWED_ORIGINS.includes(origin)) {
    console.log('Blocked origin:', origin);
    return {
      statusCode: 403,
      headers,
      body: JSON.stringify({ error: 'Forbidden - Origin not allowed' })
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

    const { message, portfolioContext } = body;

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

    // 7. Build system prompt - use frontend context if provided, otherwise use default
    const systemPrompt = portfolioContext && typeof portfolioContext === 'string'
      ? portfolioContext
      : buildSystemPrompt();

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

    // Validate response structure
    if (!data.choices || !Array.isArray(data.choices) || data.choices.length === 0) {
      console.error('Invalid OpenAI response structure:', JSON.stringify(data));
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({ error: 'Invalid AI response format' })
      };
    }

    if (!data.choices[0]?.message?.content) {
      console.error('Missing message content in response:', JSON.stringify(data.choices[0]));
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({ error: 'Empty AI response' })
      };
    }

    // 10. Sanitize output
    const rawResponse = data.choices[0].message.content;
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