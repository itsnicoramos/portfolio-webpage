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
    window.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [menuOpen])

  const shortcut = isMac ? '⌘K' : 'Ctrl K'

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl backdrop-saturate-150"
    >
      <div className="container-page flex h-14 items-center justify-between gap-6">
        <Link href="/#home" className="shrink-0 text-[0.9375rem] font-semibold tracking-tight text-snow">
          Nico Ramos
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`/#${item.id}`}
                  aria-current={active === item.id ? 'location' : undefined}
                  className="text-[0.8125rem] text-mist transition-colors duration-200 hover:text-snow aria-[current=location]:text-snow"
                >
                  {item.short}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={openPalette}
            aria-keyshortcuts="Meta+K Control+K"
            className="flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full px-3 text-[0.8125rem] text-mist transition-colors duration-200 hover:bg-white/10 hover:text-snow"
          >
            <Icon name="search" className="size-4" />
            <span className="sr-only">Search and jump</span>
            <kbd className="hidden font-sans sm:inline" aria-hidden="true">
              {shortcut}
            </kbd>
          </button>

          <button
            ref={menuButtonRef}
            type="button"
            className="flex size-11 items-center justify-center rounded-full text-snow hover:bg-white/10 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" aria-hidden="true">
              {menuOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Primary"
        hidden={!menuOpen}
        className="max-h-[calc(100svh-3.5rem)] overflow-y-auto border-t border-white/10 lg:hidden"
      >
        <ul className="container-page py-4">
          {nav.map((item, i) => (
            <li key={item.id}>
              <a
                ref={i === 0 ? firstLinkRef : undefined}
                href={`/#${item.id}`}
                onClick={() => setMenuOpen(false)}
                aria-current={active === item.id ? 'location' : undefined}
                className="flex min-h-12 items-center border-b border-white/5 text-2xl font-semibold tracking-tight text-snow/85 hover:text-snow aria-[current=location]:text-sky"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
