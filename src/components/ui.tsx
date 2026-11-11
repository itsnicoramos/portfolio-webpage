import type { ReactNode } from 'react'
import type { Status } from '@/content/projects'
import { Icon } from './Icon'

type Theme = 'dark' | 'graphite' | 'light' | 'white'

export function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(' ')
}

type SectionProps = {
  id: string
  theme: Theme
  children: ReactNode
  className?: string
}

/** A full-bleed page section. Its heading id is `${id}-title`. */
export function Section({ id, theme, children, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      tabIndex={-1}
      className={cx(`theme-${theme}`, 'py-24 outline-none sm:py-32 lg:py-40', className)}
    >
      <div className="container-page">{children}</div>
    </section>
  )
}

type HeaderProps = {
  id: string
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  tone?: 'dark' | 'light'
  eyebrowClassName?: string
  align?: 'left' | 'center'
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  lead,
  tone = 'dark',
  eyebrowClassName,
  align = 'left',
}: HeaderProps) {
  return (
    <header className={cx('reveal max-w-4xl', align === 'center' && 'mx-auto text-center')}>
      <p
        className={cx(
          'mb-4 text-sm font-semibold tracking-wide sm:text-base',
          eyebrowClassName ?? (tone === 'dark' ? 'text-mist' : 'text-slate'),
        )}
      >
        {eyebrow}
      </p>
      <h2 id={`${id}-title`} className="display-lg text-balance">
        {title}
      </h2>
      {lead ? (
        <p
          className={cx(
            'lead mt-6 max-w-2xl text-pretty',
            align === 'center' && 'mx-auto',
            tone === 'dark' ? 'text-mist' : 'text-slate',
          )}
        >
          {lead}
        </p>
      ) : null}
    </header>
  )
}

type ExternalLinkProps = {
  href: string
  children: ReactNode
  className?: string
  showIcon?: boolean
}

/** Opens in a new tab, says so to screen readers, and never leaks the opener. */
export function ExternalLink({ href, children, className, showIcon = true }: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      {showIcon ? <Icon name="external" className="ml-0.5 inline size-4 shrink-0 align-[-2px]" /> : null}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

export function Tag({ children, tone = 'dark' }: { children: ReactNode; tone?: 'dark' | 'light' }) {
  return (
    <li
      className={cx(
        'rounded-full px-3 py-1 text-[0.8125rem] font-medium',
        tone === 'dark' ? 'bg-white/[0.08] text-snow' : 'bg-ink/[0.06] text-ink',
      )}
    >
      {children}
    </li>
  )
}

export function TagList({ items, tone = 'dark', label }: { items: readonly string[]; tone?: 'dark' | 'light'; label: string }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label={label}>
      {items.map((item) => (
        <Tag key={item} tone={tone}>
          {item}
        </Tag>
      ))}
    </ul>
  )
}

const statusDot: Record<Status['tone'], string> = {
  live: 'bg-mint',
  active: 'bg-sky',
  early: 'bg-amber',
  complete: 'bg-mist',
  empty: 'bg-transparent ring-1 ring-current',
}

export function StatusPill({ status, tone = 'dark' }: { status: Status; tone?: 'dark' | 'light' }) {
  return (
    <p
      className={cx(
        'inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.8125rem] font-medium',
        tone === 'dark' ? 'bg-white/[0.06] text-snow' : 'bg-ink/[0.05] text-ink',
      )}
    >
      <span className={cx('size-2 rounded-full', statusDot[status.tone])} aria-hidden="true" />
      <span>
        <span className="sr-only">Status: </span>
        {status.label}
      </span>
    </p>
  )
}

type PillLinkProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  tone?: 'dark' | 'light'
  external?: boolean
}

/** Apple-style pill button rendered as a link. */
export function PillLink({ href, children, variant = 'primary', tone = 'dark', external = false }: PillLinkProps) {
  const className = cx(
    'inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full px-5 text-[0.9375rem] font-medium transition-[background-color,color,transform] duration-200 active:scale-[0.98]',
    variant === 'primary' && tone === 'dark' && 'bg-sky text-black hover:bg-[#4aa8ff]',
    variant === 'primary' && tone === 'light' && 'bg-cobalt text-white hover:bg-[#0071e3]',
    variant === 'secondary' && tone === 'dark' && 'text-sky ring-1 ring-sky/60 hover:bg-sky/10',
    variant === 'secondary' && tone === 'light' && 'text-cobalt ring-1 ring-cobalt/50 hover:bg-cobalt/5',
  )
  if (external) {
    return (
      <ExternalLink href={href} className={className}>
        {children}
      </ExternalLink>
    )
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}

/** Inline text link with an arrow, for secondary actions. */
export function ArrowLink({
  href,
  children,
  tone = 'dark',
  external = false,
}: {
  href: string
  children: ReactNode
  tone?: 'dark' | 'light'
  external?: boolean
}) {
  const className = cx(
    'group inline-flex min-h-11 items-center gap-1 text-[1.0625rem] font-medium underline-offset-4 hover:underline',
    tone === 'dark' ? 'text-sky' : 'text-cobalt',
  )
  if (external) {
    return (
      <ExternalLink href={href} className={className}>
        {children}
      </ExternalLink>
    )
  }
  return (
    <a href={href} className={className}>
      {children}
      <Icon name="arrow" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  )
}
