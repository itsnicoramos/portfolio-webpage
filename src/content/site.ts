// Site-wide facts. Contact details come from the GitHub profile README
// (github.com/itsnicoramos/Itsnicoramos), which is the source of truth.
// Do not add a handle or address here that is not listed there.

export const site = {
  name: 'Nico Ramos',
  url: 'https://itsnico.dev',
  title: 'Nico Ramos · Curiosity, engineered.',
  description:
    'Nico Ramos is a Computer Engineering student building AI learning tools, agent skills, and hardware experiments. ProofLab, hardware-bringup, CyberBank, and more.',
  locale: 'en_CA',
} as const

export type ContactLink = {
  id: string
  label: string
  handle: string
  href: string
  icon: IconName
  external: boolean
}

export type IconName =
  | 'mail'
  | 'github'
  | 'linkedin'
  | 'instagram'
  | 'tiktok'
  | 'threads'
  | 'arrow'
  | 'external'
  | 'search'
  | 'copy'
  | 'check'

export const email = 'itsnicoramos@gmail.com'

export const primaryContacts: readonly ContactLink[] = [
  {
    id: 'email',
    label: 'Email',
    handle: email,
    href: `mailto:${email}`,
    icon: 'mail',
    external: false,
  },
  {
    id: 'github',
    label: 'GitHub',
    handle: 'itsnicoramos',
    href: 'https://github.com/itsnicoramos',
    icon: 'github',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'nico-ramos28',
    href: 'https://www.linkedin.com/in/nico-ramos28',
    icon: 'linkedin',
    external: true,
  },
]

export const socialContacts: readonly ContactLink[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@itsnicoramos__',
    href: 'https://www.instagram.com/itsnicoramos__/',
    icon: 'instagram',
    external: true,
  },
  {
    id: 'tiktok-itsnicoramos',
    label: 'TikTok',
    handle: '@itsnicoramos_',
    href: 'https://www.tiktok.com/@itsnicoramos_',
    icon: 'tiktok',
    external: true,
  },
  {
    id: 'tiktok-sirnico',
    label: 'TikTok',
    handle: '@sirnico__',
    href: 'https://www.tiktok.com/@sirnico__',
    icon: 'tiktok',
    external: true,
  },
  {
    id: 'threads',
    label: 'Threads',
    handle: '@itsnicoramos__',
    // threads.net/itsnicoramos__/ (profile README) redirects here.
    href: 'https://www.threads.com/@itsnicoramos__',
    icon: 'threads',
    external: true,
  },
]

export type NavItem = { id: string; label: string; short: string }

// Order matches the page. `id` is the section's anchor.
export const nav: readonly NavItem[] = [
  { id: 'prooflab', label: 'ProofLab', short: 'ProofLab' },
  { id: 'ai-systems', label: 'AI systems', short: 'AI' },
  { id: 'hardware', label: 'Hardware lab', short: 'Hardware' },
  { id: 'engineering', label: 'Engineering & CS', short: 'Engineering' },
  { id: 'photography', label: 'Photography', short: 'Photos' },
  { id: 'about', label: 'About me', short: 'About' },
  { id: 'archive', label: 'Learning archive', short: 'Archive' },
  { id: 'contact', label: 'Contact', short: 'Contact' },
]
