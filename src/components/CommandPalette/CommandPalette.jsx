import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './CommandPalette.css'

const ITEMS = [
  { id: 'home', type: 'section', label: 'Home', icon: 'fas fa-house', href: '#home' },
  { id: 'about', type: 'section', label: 'About', icon: 'fas fa-user', href: '#about' },
  { id: 'projects', type: 'section', label: 'Projects', icon: 'fas fa-code', href: '#projects' },
  { id: 'founder-brief', type: 'section', label: 'Founder Brief', icon: 'fas fa-bullseye', href: '#founder-brief' },
  { id: 'skills', type: 'section', label: 'Skills', icon: 'fas fa-toolbox', href: '#skills' },
  { id: 'certifications', type: 'section', label: 'Certifications', icon: 'fas fa-certificate', href: '#certifications' },
  { id: 'travel', type: 'section', label: 'Travel', icon: 'fas fa-plane', href: '#travel' },
  { id: 'contact', type: 'section', label: 'Contact', icon: 'fas fa-envelope', href: '#contact' },
  { id: 'looply', type: 'project', label: 'Looply', icon: 'fas fa-rocket' },
  { id: 'applykit', type: 'project', label: 'ApplyKit', icon: 'fas fa-briefcase' },
  { id: 'chainmind', type: 'project', label: 'ChainMind', icon: 'fas fa-link' },
  { id: 'portfolio', type: 'project', label: 'Portfolio Website', icon: 'fas fa-globe' },
  { id: 'resume', type: 'action', label: 'View Resume', icon: 'fas fa-file', hint: 'Opens LinkedIn' },
  { id: 'email', type: 'action', label: 'Email Me', icon: 'fas fa-paper-plane', hint: 'mailto' },
]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef(null)
  const listRef = useRef(null)

  const filtered = ITEMS.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  )

  const execute = useCallback((item) => {
    setOpen(false)
    setQuery('')
    if (item.type === 'section') {
      const el = document.querySelector(item.href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else if (item.type === 'project') {
      const el = document.querySelector('#projects')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else if (item.id === 'email') {
      window.location.href = 'mailto:nicco97r@gmail.com'
    } else if (item.id === 'resume') {
      window.open('https://www.linkedin.com/in/nico-ramos28', '_blank')
    }
  }, [])

  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
      if (e.key === 'Escape') {
        setOpen(false)
        setQuery('')
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => (i + 1) % filtered.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length)
    } else if (e.key === 'Enter' && filtered[activeIndex]) {
      e.preventDefault()
      execute(filtered[activeIndex])
    }
  }

  useEffect(() => {
    if (listRef.current) {
      const active = listRef.current.querySelector('.cmd-item--active')
      if (active) active.scrollIntoView({ block: 'nearest' })
    }
  }, [activeIndex])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="cmd-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={() => { setOpen(false); setQuery('') }}
          role="dialog"
          aria-label="Command palette"
          aria-modal="true"
        >
          <motion.div
            className="cmd-panel"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cmd-input-wrap">
              <i className="fas fa-magnifying-glass cmd-search-icon"></i>
              <input
                ref={inputRef}
                type="text"
                className="cmd-input"
                placeholder="Type a command or search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                aria-label="Search commands"
              />
              <kbd className="cmd-kbd">ESC</kbd>
            </div>
            <ul className="cmd-list" ref={listRef} role="listbox">
              {filtered.map((item, i) => (
                <li
                  key={item.id}
                  className={`cmd-item ${i === activeIndex ? 'cmd-item--active' : ''}`}
                  onClick={() => execute(item)}
                  role="option"
                  aria-selected={i === activeIndex}
                >
                  <i className={`${item.icon} cmd-item-icon`}></i>
                  <span className="cmd-item-label">{item.label}</span>
                  {item.hint && <span className="cmd-item-hint">{item.hint}</span>}
                </li>
              ))}
              {filtered.length === 0 && (
                <li className="cmd-empty">No results found</li>
              )}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
