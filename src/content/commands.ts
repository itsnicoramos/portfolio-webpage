import { email, nav, primaryContacts, socialContacts } from './site.ts'
import type { Searchable } from '../lib/fuzzy.ts'

export type CommandAction =
  | { type: 'section'; id: string }
  | { type: 'link'; href: string }
  | { type: 'copy'; value: string; done: string }

export type Command = Searchable & {
  id: string
  group: 'Sections' | 'Projects' | 'Contact'
  action: CommandAction
}

const gh = (repo: string) => `https://github.com/itsnicoramos/${repo}`

export const commands: readonly Command[] = [
  { id: 'go-home', label: 'Home', group: 'Sections', keywords: ['top', 'hero', 'start'], action: { type: 'section', id: 'home' } },
  ...nav.map(
    (item): Command => ({
      id: `go-${item.id}`,
      label: item.label,
      group: 'Sections',
      keywords: [item.short, item.id],
      action: { type: 'section', id: item.id },
    }),
  ),
  {
    id: 'paper-attention',
    label: 'Attention Is All You Need (paper)',
    group: 'Projects',
    keywords: ['ml', 'transformer', 'arxiv', 'first build'],
    action: { type: 'link', href: 'https://arxiv.org/pdf/1706.03762v7' },
  },
  {
    id: 'open-prooflab-site',
    label: 'ProofLab website',
    group: 'Projects',
    keywords: ['math', 'tutor', 'proofs', 'vercel'],
    action: { type: 'link', href: 'https://prooflab-ruby.vercel.app' },
  },
  { id: 'repo-prooflab', label: 'ProofLab on GitHub', group: 'Projects', keywords: ['repo', 'sympy', 'fastapi'], action: { type: 'link', href: gh('ProofLab') } },
  {
    id: 'repo-bringup',
    label: 'hardware-bringup on GitHub',
    group: 'Projects',
    keywords: ['spec-to-ship', 'arduino', 'claude code skill', 'bench'],
    action: { type: 'link', href: gh('Spec-to-ship') },
  },
  { id: 'repo-cyberbank', label: 'CyberBank on GitHub', group: 'Projects', keywords: ['c++', 'bank', 'sha-256'], action: { type: 'link', href: gh('CyberBank') } },
  { id: 'repo-csci159', label: 'CSCI 159 labs on GitHub', group: 'Projects', keywords: ['c++', 'course', 'viu'], action: { type: 'link', href: gh('csci159-labs') } },
  { id: 'repo-portfolio', label: 'This site’s source on GitHub', group: 'Projects', keywords: ['portfolio', 'next.js', 'source'], action: { type: 'link', href: gh('portfolio-webpage') } },
  {
    id: 'copy-email',
    label: 'Copy email address',
    group: 'Contact',
    keywords: [email, 'clipboard'],
    action: { type: 'copy', value: email, done: 'Email address copied to the clipboard.' },
  },
  ...[...primaryContacts, ...socialContacts].map(
    (c): Command => ({
      id: `contact-${c.id}`,
      label: c.id === 'email' ? 'Send an email' : `${c.label} ${c.handle}`,
      group: 'Contact',
      keywords: [c.label, c.handle],
      action: { type: 'link', href: c.href },
    }),
  ),
]
