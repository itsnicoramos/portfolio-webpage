'use client'

import { useCallback, useEffect, useId, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react'
import { commands, type Command } from '@/content/commands'
import { rankItems } from '@/lib/fuzzy'
import { Icon } from './Icon'

export const PALETTE_EVENT = 'palette:open'

/** Opens the palette from anywhere (the header button uses this). */
export function openPalette() {
  window.dispatchEvent(new Event(PALETTE_EVENT))
}

function goToSection(id: string) {
  const el = document.getElementById(id)
  // Not on the home page (for example the 404 page): go there instead.
  if (!el) {
    window.location.assign(id === 'home' ? '/' : `/#${id}`)
    return
  }
  el.scrollIntoView({ block: 'start' })
  el.focus({ preventScroll: true })
  history.replaceState(null, '', id === 'home' ? location.pathname : `#${id}`)
}

export function CommandPalette() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const [announcement, setAnnouncement] = useState('')
  const listId = useId()
  const optionId = (cmd: Command) => `${listId}-${cmd.id}`

  const results = useMemo(() => rankItems(query, commands), [query])
  const current = results[Math.min(active, results.length - 1)]

  const show = useCallback(() => {
    const dialog = dialogRef.current
    if (!dialog || dialog.open) return
    setQuery('')
    setActive(0)
    dialog.showModal()
    setOpen(true)
    inputRef.current?.focus()
  }, [])

  const hide = useCallback(() => dialogRef.current?.close(), [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && !e.altKey && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        if (dialogRef.current?.open) hide()
        else show()
      }
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener(PALETTE_EVENT, show)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener(PALETTE_EVENT, show)
    }
  }, [show, hide])

  // Keep the highlighted option visible while arrowing through a long list.
  useEffect(() => {
    if (!open || !current) return
    document.getElementById(optionId(current))?.scrollIntoView({ block: 'nearest' })
    // optionId is derived from a stable useId value.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, open])

  async function run(cmd: Command) {
    const { action } = cmd
    hide()
    if (action.type === 'section') {
      // Wait a frame so the dialog has released focus before we move it.
      requestAnimationFrame(() => goToSection(action.id))
    } else if (action.type === 'link') {
      if (action.href.startsWith('mailto:')) window.location.href = action.href
      else window.open(action.href, '_blank', 'noopener,noreferrer')
    } else {
      try {
        await navigator.clipboard.writeText(action.value)
        setAnnouncement(action.done)
      } catch {
        setAnnouncement(`Copy failed. The address is ${action.value}.`)
      }
      window.setTimeout(() => setAnnouncement(''), 4000)
    }
  }

  function onKeyDown(e: ReactKeyboardEvent<HTMLInputElement>) {
    const count = results.length
    if (count === 0) return
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setActive((i) => (i + 1) % count)
        break
      case 'ArrowUp':
        e.preventDefault()
        setActive((i) => (i - 1 + count) % count)
        break
      case 'Home':
        e.preventDefault()
        setActive(0)
        break
      case 'End':
        e.preventDefault()
        setActive(count - 1)
        break
      case 'Enter':
        e.preventDefault()
        if (current) void run(current)
        break
    }
  }

  return (
    <>
      <dialog
        ref={dialogRef}
        className="palette-dialog"
        aria-label="Search and jump"
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) hide()
        }}
      >
        <div className="flex items-center gap-3 border-b border-white/10 px-5">
          <Icon name="search" className="size-5 shrink-0 text-mist" />
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded={results.length > 0}
            aria-controls={listId}
            aria-autocomplete="list"
            aria-activedescendant={current ? optionId(current) : undefined}
            aria-label="Search sections, projects and contacts"
            placeholder="Search sections, projects, contacts…"
            autoComplete="off"
            spellCheck={false}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setActive(0)
            }}
            onKeyDown={onKeyDown}
            className="h-14 w-full bg-transparent text-[1.0625rem] text-snow placeholder:text-mist focus:outline-none"
          />
          <kbd className="hidden rounded-md border border-white/15 px-1.5 py-0.5 font-sans text-xs text-mist sm:block">esc</kbd>
        </div>

        <ul
          id={listId}
          role="listbox"
          aria-label="Results"
          tabIndex={-1}
          className="max-h-[min(26rem,62vh)] overflow-y-auto overscroll-contain p-2"
        >
          {results.map((cmd) => {
            const selected = cmd === current
            return (
              <li
                key={cmd.id}
                id={optionId(cmd)}
                role="option"
                aria-selected={selected}
                onMouseMove={() => setActive(results.indexOf(cmd))}
                onClick={() => void run(cmd)}
                className={`flex min-h-11 cursor-pointer items-center justify-between gap-4 rounded-xl px-3 py-2.5 text-[0.9375rem] ${
                  selected ? 'bg-sky text-black' : 'text-snow'
                }`}
              >
                <span className="truncate">{cmd.label}</span>
                <span className={`shrink-0 text-xs ${selected ? 'text-black/70' : 'text-mist'}`}>{cmd.group}</span>
              </li>
            )
          })}
        </ul>
        {results.length === 0 ? (
          <p className="px-5 pb-6 pt-2 text-[0.9375rem] text-mist">No matches for “{query}”.</p>
        ) : null}
        <p className="sr-only" aria-live="polite">
          {open ? `${results.length} result${results.length === 1 ? '' : 's'}` : ''}
        </p>
      </dialog>
      <p className="sr-only" role="status" aria-live="polite">
        {announcement}
      </p>
    </>
  )
}
