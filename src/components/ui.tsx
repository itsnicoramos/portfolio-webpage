import type { ElementType, HTMLAttributes, ReactNode, Ref } from 'react'
import type { Status } from '@/content/projects'
import { Icon } from './Icon'

type Theme = 'dark' | 'graphite' | 'light' | 'white'
type Tone = 'dark' | 'light'

export function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(' ')
}

type SectionProps = {
  id: string
  theme: Theme
  children: ReactNode
  className?: string
  /** `compact` for short sections that should not take a full screen. */
  density?: 'default' | 'compact'
  /** Set false to render full-bleed children that bring their own container. */
  contained?: boolean
}

/** A full-bleed page section. Its heading id is `${id}-title`. */
export function Section({ id, theme, children, className, density = 'default', contained = true }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      tabIndex={-1}
      className={cx(
        `theme-${theme}`,
        'outline-none',
        density === 'compact' ? 'py-16 sm:py-24' : 'py-24 sm:py-32 lg:py-40',
        className,
      )}
    >
      {contained ? <div className="container-page">{children}</div> : children}
    </section>
  )
}

type HeaderProps = {
  id: string
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  tone?: Tone
  eyebrowClassName?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  lead,
  tone = 'dark',
  eyebrowClassName,
  align = 'left',
  className,
}: HeaderProps) {
  return (
    <header className={cx('reveal max-w-4xl', align === 'center' && 'mx-auto text-center', className)}>
      <p className={cx('eyebrow mb-5', eyebrowClassName ?? muted(tone))}>{eyebrow}</p>
      <h2 id={`${id}-title`} className="display-lg">
        {title}
      </h2>
      {lead ? (
        <p className={cx('lead mt-6 max-w-2xl text-pretty', align === 'center' && 'mx-auto', muted(tone))}>{lead}</p>
      ) : null}
    </header>
  )
}

/** Muted text colour for a tone. Both clear 6:1 on their surfaces. */
export function muted(tone: Tone = 'dark') {
  return tone === 'dark' ? 'text-fg-muted' : 'text-ink-muted'
}

/** Link colour for a tone. */
export function linkColor(tone: Tone = 'dark') {
  return tone === 'dark' ? 'text-accent' : 'text-link-light'
}

// ── Card ────────────────────────────────────────────────────────────────────

const surfaces = {
  /** A dark card on a dark section. */
  raised: 'rounded-card bg-surface ring-1 ring-line',
  /** A smaller tile nested inside a raised card. */
  tile: 'rounded-tile bg-surface-2 ring-1 ring-line',
  /** A deep dark panel; `on-dark` keeps accent focus rings inside light sections. */
  inset: 'on-dark rounded-card bg-bg-deep text-fg ring-1 ring-line',
  /** A paper card on a white section. */
  paper: 'rounded-card bg-paper',
  /** A white sheet card on a paper section. */
  sheet: 'rounded-card bg-sheet ring-1 ring-line-light',
} as const

const pads = {
  none: '',
  /** A list row inside a card. */
  row: 'px-4 py-3.5',
  xs: 'p-4',
  sm: 'p-6',
  /** Contact cards: a touch roomier than sm, no breakpoint step. */
  snug: 'p-7',
  md: 'p-7 sm:p-10',
  lg: 'p-7 sm:p-12',
} as const

const elevations = {
  none: '',
  elevated: 'shadow-elevated',
  glow: 'shadow-glow',
} as const

type CardTag = 'article' | 'div' | 'section' | 'li' | 'aside' | 'figure'

type CardProps = {
  as?: CardTag
  surface?: keyof typeof surfaces
  pad?: keyof typeof pads
  elevation?: keyof typeof elevations
  className?: string
  children: ReactNode
  ref?: Ref<HTMLElement>
} & Omit<HTMLAttributes<HTMLElement>, 'className' | 'children'>

/** The one card surface on the site. Pass `as` for the right semantics. */
export function Card({
  as = 'div',
  surface = 'raised',
  pad = 'md',
  elevation = 'none',
  className,
  children,
  ...rest
}: CardProps) {
  // A union of intrinsic tags; widen it so `ref` can be HTMLElement for all.
  const Tag = as as ElementType
  return (
    <Tag className={cx(surfaces[surface], pads[pad], elevations[elevation], className)} {...rest}>
      {children}
    </Tag>
  )
}

/** A small mono label above a card heading. */
export function CardEyebrow({ children, tone = 'dark' }: { children: ReactNode; tone?: Tone }) {
  return <p className={cx('eyebrow', muted(tone))}>{children}</p>
}

// ── Links ───────────────────────────────────────────────────────────────────

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

// ── Tags and status ─────────────────────────────────────────────────────────

export function Tag({ children, tone = 'dark' }: { children: ReactNode; tone?: Tone }) {
  return (
    <li
      className={cx(
        'rounded-tile px-2.5 py-1 font-mono text-meta',
        tone === 'dark' ? 'bg-fill text-fg' : 'bg-fill-ink text-ink',
      )}
    >
      {children}
    </li>
  )
}

type TagListProps = {
  items: readonly string[]
  tone?: Tone
  label: string
  /** `inline` renders a dense dot-separated mono list instead of chips. */
  variant?: 'chips' | 'inline'
}

export function TagList({ items, tone = 'dark', label, variant = 'chips' }: TagListProps) {
  if (variant === 'inline') {
    return (
      <ul className={cx('flex flex-wrap gap-x-2 font-mono text-meta', muted(tone))} aria-label={label}>
        {items.map((item, i) => (
          <li key={item}>
            {i > 0 ? (
              <span className="mr-2" aria-hidden="true">
                ·
              </span>
            ) : null}
            {item}
          </li>
        ))}
      </ul>
    )
  }
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

/** Status dot colours. Hue means the same thing everywhere on the site. */
export function statusDot(tone: Status['tone'], theme: Tone = 'dark') {
  const dark: Record<Status['tone'], string> = {
    live: 'bg-accent',
    active: 'bg-warn',
    early: 'bg-warn',
    complete: 'bg-fg-muted',
    empty: 'bg-transparent ring-1 ring-current',
  }
  const light: Record<Status['tone'], string> = {
    live: 'bg-link-light',
    active: 'bg-warn-ink',
    early: 'bg-warn-ink',
    complete: 'bg-ink-muted',
    empty: 'bg-transparent ring-1 ring-current',
  }
  return (theme === 'dark' ? dark : light)[tone]
}

export function StatusPill({ status, tone = 'dark' }: { status: Status; tone?: Tone }) {
  return (
    <p
      className={cx(
        'inline-flex items-center gap-2 rounded-tile px-2.5 py-1 font-mono text-meta',
        tone === 'dark' ? 'bg-fill text-fg' : 'bg-fill-ink text-ink',
      )}
    >
      <span className={cx('size-2 shrink-0', statusDot(status.tone, tone))} aria-hidden="true" />
      <span>
        <span className="sr-only">Status: </span>
        {status.label}
      </span>
    </p>
  )
}

// ── Buttons ─────────────────────────────────────────────────────────────────

type PillLinkProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  tone?: Tone
  external?: boolean
}

/** A pill-shaped button rendered as a link. */
export function PillLink({ href, children, variant = 'primary', tone = 'dark', external = false }: PillLinkProps) {
  const className = cx(
    'inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full px-5 text-ui font-medium transition-[background-color,color,transform] duration-200 active:scale-[0.98]',
    variant === 'primary' && tone === 'dark' && 'bg-accent text-bg hover:bg-accent-hover',
    variant === 'primary' && tone === 'light' && 'bg-link-light text-sheet hover:bg-link-light-hover',
    variant === 'secondary' && tone === 'dark' && 'text-accent ring-1 ring-accent hover:bg-accent-wash',
    variant === 'secondary' && tone === 'light' && 'text-link-light ring-1 ring-link-light hover:bg-link-wash',
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
  tone?: Tone
  external?: boolean
}) {
  const className = cx(
    'group inline-flex min-h-11 items-center gap-1 text-body font-medium underline-offset-4 hover:underline active:underline-offset-2',
    linkColor(tone),
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
