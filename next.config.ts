import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

// Next.js injects small inline scripts to hydrate the App Router, so script-src
// needs 'unsafe-inline' unless every page opts into per-request nonces (which
// would force dynamic rendering for a fully static site). Everything else is
// locked to this origin: fonts are self-hosted by next/font, icons are inline
// SVG, and images go through the Netlify Image CDN on the same origin.
//
// The one exception: Netlify injects its real-user-monitoring script
// (/.netlify/scripts/rum, same origin) and it posts page-performance data to
// Netlify's collector. Allowed on purpose so Netlify analytics works.
const NETLIFY_RUM = 'https://ingesteer.services-prod.nsvcs.net'

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isProd ? '' : " 'unsafe-eval'"}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self' ${NETLIFY_RUM}${isProd ? '' : ' ws:'}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(isProd ? ['upgrade-insecure-requests'] : []),
].join('; ')

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
]

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 828, 1080, 1440, 1920],
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
}

export default nextConfig
