'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { nav } from '@/content/site'
import { openPalette } from './CommandPalette'
import { Icon } from './Icon'

function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      // A thin band across the middle of the viewport decides the active section.
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const id of ['home', ...ids]) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [ids])
  return active
}

function useIsMac() {
  const [isMac, setIsMac] = useState(true)
  useEffect(() => {
    // Read once after mount so the server render (⌘) never mismatches.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMac(/Mac|iPhone|iPad|iPod/.test(navigator.userAgent))
  }, [])
  return isMac
}

const ids = nav.map((n) => n.id)

export function SiteHeader() {
  const active = useActiveSection(ids)
  const isMac = useIsMac()
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    firstLinkRef.current?.focus()
    function onKey(e: KeyboardEvent) {
      // The command palette handles its own Escape; don't fight it for focus.
      if (e.key !== 'Escape' || document.querySelector('dialog[open]')) return
      setMenuOpen(false)
      menuButtonRef.current?.focus()
    }
    // Close when the visitor taps or clicks anywhere outside the header.
    function onPointerDown(e: PointerEvent) {
      if (!headerRef.current?.contains(e.target as Node)) setMenuOpen(false)
    }
    // Disclosure pattern: when keyboard focus leaves the header (Tab past the
    // last link), close the menu so it never covers the focused element.
    function onFocusOut(e: FocusEvent) {
      const next = e.relatedTarget as Node | null
      if (next && !headerRef.current?.contains(next)) setMenuOpen(false)
    }
    const header = headerRef.current
    window.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointerDown)
    header?.addEventListener('focusout', onFocusOut)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointerDown)
      header?.removeEventListener('focusout', onFocusOut)
    }
  }, [menuOpen])

  const shortcut = isMac ? '⌘K' : 'Ctrl K'

  return (
    // A full-width, click-through rail; only the glass panes take pointer input.
    <header ref={headerRef} className="pointer-events-none fixed inset-x-0 top-0 z-50 pt-2.5">
      {/* The panes overhang the content column by exactly their left padding,
          so the wordmark lines up with every section's left edge. */}
      <div className="container-page">
        <div className="glass pointer-events-auto -mx-3 flex h-14 items-center justify-between gap-4 rounded-full pl-3 pr-1.5 sm:-mx-5 sm:pl-5">
          <Link href="/#home" className="inline-flex min-h-11 shrink-0 items-center font-display text-ui text-fg">
            Nico Ramos
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`/#${item.id}`}
                    aria-current={active === item.id ? 'location' : undefined}
                    className="inline-flex min-h-9 items-center rounded-full px-2.5 font-mono text-meta text-fg transition-colors duration-200 hover:bg-fill-strong aria-[current=location]:bg-accent-wash aria-[current=location]:text-accent"
                  >
                    {item.short}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={openPalette}
              aria-keyshortcuts="Meta+K Control+K"
              className="glass-chip flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full px-3 font-mono text-meta text-fg transition-colors duration-200"
            >
              <Icon name="search" className="size-4" />
              <span className="sr-only">Search and jump</span>
              <kbd className="hidden font-mono sm:inline" aria-hidden="true">
                {shortcut}
              </kbd>
            </button>

            <button
              ref={menuButtonRef}
              type="button"
              className="glass-chip flex size-11 items-center justify-center rounded-full text-fg transition-colors duration-200 lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" aria-hidden="true">
                {menuOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 9h16M4 15h16" />}
              </svg>
            </button>
          </div>
        </div>

        <nav
          id="mobile-menu"
          aria-label="Primary"
          hidden={!menuOpen}
          className="glass glass-sheet pointer-events-auto -mx-3 mt-2 max-h-[calc(100svh-5.5rem)] overflow-y-auto rounded-card p-2 sm:-mx-5 lg:hidden"
        >
          <ul>
            {nav.map((item, i) => (
              <li key={item.id}>
                <a
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={`/#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active === item.id ? 'location' : undefined}
                  className="flex min-h-12 items-center justify-between rounded-tile border-l-2 border-transparent px-3 font-display text-lg text-fg transition-colors duration-200 hover:bg-fill-strong aria-[current=location]:border-accent aria-[current=location]:bg-accent-wash aria-[current=location]:text-accent"
                >
                  {item.label}
                  <span className="font-mono text-xs text-fg" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
