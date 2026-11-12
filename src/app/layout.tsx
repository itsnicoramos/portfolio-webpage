import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Silkscreen } from 'next/font/google'
import type { ReactNode } from 'react'
import { BinaryRain } from '@/components/BinaryRain'
import { CommandPalette } from '@/components/CommandPalette'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { primaryContacts, site, socialContacts } from '@/content/site'
import { palette } from '@/lib/palette'
import './globals.css'

// Self-hosted at build time by next/font: no request to Google at runtime.
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  axes: ['opsz'],
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-code',
  weight: ['400', '600'],
  // The mono "evidence" voice starts in the hero eyebrow, so preload it.
})

// Bitmap display face for every heading.
const pixel = Silkscreen({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pixel',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    'Nico Ramos',
    'Computer Engineering',
    'ProofLab',
    'hardware-bringup',
    'Claude Code skill',
    'CyberBank',
    'portfolio',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: site.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
  },
  // The previous site deliberately shipped no favicon; keep it that way and
  // stop browsers from requesting /favicon.ico.
  icons: { icon: 'data:,' },
  formatDetection: { email: false, telephone: false, address: false },
}

export const viewport: Viewport = {
  themeColor: palette.bg,
  colorScheme: 'dark light',
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  url: site.url,
  description: 'Computer Engineering transfer student from Vancouver Island University.',
  sameAs: [...primaryContacts, ...socialContacts].filter((c) => c.external).map((c) => c.href),
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-CA" data-theme="dark" className={`${inter.variable} ${mono.variable} ${pixel.variable}`}>
      <body>
        <BinaryRain />
        <a
          href="#content"
          className="sr-only-focusable fixed left-4 top-3 z-[60] rounded-full bg-accent px-4 py-2 text-ui font-medium text-bg"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="content" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <SiteFooter />
        <CommandPalette />
        <script
          type="application/ld+json"
          // JSON.stringify output from static data; "<" is escaped so the
          // payload can never close the script element.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c') }}
        />
      </body>
    </html>
  )
}
