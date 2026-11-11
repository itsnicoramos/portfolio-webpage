import { siGithub, siInstagram, siThreads, siTiktok } from 'simple-icons'
import type { ReactNode } from 'react'
import type { IconName } from '@/content/site'

// Brand marks come from Simple Icons (CC0). LinkedIn was removed from Simple
// Icons at LinkedIn's request, so its mark is the last CC0 path they shipped.
const brand: Partial<Record<IconName, string>> = {
  github: siGithub.path,
  instagram: siInstagram.path,
  threads: siThreads.path,
  tiktok: siTiktok.path,
  linkedin:
    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
}

// Interface glyphs, drawn on a 24px grid with 1.75px strokes.
const glyph: Partial<Record<IconName, ReactNode>> = {
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  external: <path d="M8 16 16 8m-6 0h6v6" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.2-4.2" />
    </>
  ),
  copy: (
    <>
      <rect x="8" y="8" width="12" height="12" rx="2.5" />
      <path d="M16 8V6.5A2.5 2.5 0 0 0 13.5 4h-7A2.5 2.5 0 0 0 4 6.5v7A2.5 2.5 0 0 0 6.5 16H8" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
}

type IconProps = {
  name: IconName
  className?: string
  /** Decorative by default. Pass a title only when the icon stands alone. */
  title?: string
}

export function Icon({ name, className = 'size-5', title }: IconProps) {
  const a11y = title ? { role: 'img', 'aria-label': title } : { 'aria-hidden': true as const }
  const path = brand[name]
  if (path) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} focusable="false" {...a11y}>
        <path d={path} />
      </svg>
    )
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      focusable="false"
      {...a11y}
    >
      {glyph[name]}
    </svg>
  )
}
