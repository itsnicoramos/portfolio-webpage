import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './FounderBrief.css'

// To post a new founder brief, add an object to this array with a new `date`
// (ISO YYYY-MM-DD) and `body` (one string per paragraph). Order in the array
// doesn't matter; entries are sorted by date so the newest always lands on top.
const BRIEFS = []

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const entryVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

function formatDate(iso) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

// Stable anchor per brief, so a shared link lands on that exact entry.
function briefId(brief) {
  return `brief-${brief.date}`
}

// Copies via the async Clipboard API, falling back to a hidden textarea for
// browsers or non-secure contexts where it is unavailable.
async function copyToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      // fall through to the legacy path
    }
  }

  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.left = '-9999px'
  document.body.appendChild(textarea)
  textarea.select()

  let copied = false
  try {
    copied = document.execCommand('copy')
  } catch {
    copied = false
  }
  document.body.removeChild(textarea)
  return copied
}

// Each network gets a web intent URL. These are plain top-level navigations,
// so they are unaffected by the site's `form-action 'self'` CSP.
const SHARE_TARGETS = [
  {
    id: 'x',
    label: 'X',
    icon: 'fa-brands fa-x-twitter',
    build: (url, text) =>
      `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: 'fa-brands fa-linkedin',
    build: (url) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  {
    id: 'threads',
    label: 'Threads',
    icon: 'fa-brands fa-threads',
    build: (url, text) =>
      `https://www.threads.net/intent/post?text=${encodeURIComponent(`${text} ${url}`)}`,
  },
  {
    id: 'facebook',
    label: 'Facebook',
    icon: 'fa-brands fa-facebook',
    build: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    icon: 'fa-brands fa-whatsapp',
    build: (url, text) => `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`,
  },
  {
    id: 'reddit',
    label: 'Reddit',
    icon: 'fa-brands fa-reddit',
    build: (url, text) =>
      `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`,
  },
]

// Instagram and TikTok publish no web intent for sharing an arbitrary link, so
// there is nothing to pre-fill. These copy the link and open the platform, so
// the link can be pasted into a story, caption, or bio.
const MANUAL_TARGETS = [
  {
    id: 'instagram',
    label: 'Instagram',
    icon: 'fa-brands fa-instagram',
    open: 'https://www.instagram.com/',
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    icon: 'fa-brands fa-tiktok',
    open: 'https://www.tiktok.com/upload',
  },
]

function ShareButton({ brief }) {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState('idle')
  const [note, setNote] = useState('')
  const [canNativeShare, setCanNativeShare] = useState(false)
  const wrapRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    setCanNativeShare(typeof navigator !== 'undefined' && typeof navigator.share === 'function')
  }, [])

  useEffect(() => {
    if (status === 'idle') return undefined
    const timer = setTimeout(() => {
      setStatus('idle')
      setNote('')
    }, 2600)
    return () => clearTimeout(timer)
  }, [status])

  // Close the menu on outside click or Escape, returning focus to the trigger.
  useEffect(() => {
    if (!open) return undefined

    const onPointerDown = (event) => {
      if (!wrapRef.current?.contains(event.target)) setOpen(false)
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const shareUrl = () =>
    `${window.location.origin}${window.location.pathname}#${briefId(brief)}`
  const shareText = brief.subtitle ? `${brief.title} - ${brief.subtitle}` : brief.title

  const handleCopy = async () => {
    setNote('')
    setStatus((await copyToClipboard(shareUrl())) ? 'copied' : 'error')
    setOpen(false)
  }

  // Opens the platform first so the click's user activation is still live, then
  // copies, so the link is on the clipboard ready to paste.
  const handleManualShare = (target) => {
    setOpen(false)
    window.open(target.open, '_blank', 'noopener,noreferrer')
    copyToClipboard(shareUrl()).then((copied) => {
      setStatus(copied ? 'copied' : 'error')
      setNote(copied ? target.label : '')
    })
  }

  const handleNativeShare = async () => {
    setOpen(false)
    try {
      await navigator.share({ title: brief.title, text: shareText, url: shareUrl() })
    } catch (error) {
      // Dismissing the sheet is not a failure, so stay silent.
      if (error?.name === 'AbortError') return
      setStatus((await copyToClipboard(shareUrl())) ? 'copied' : 'error')
    }
  }

  const label =
    status === 'copied'
      ? note
        ? `Copied for ${note}`
        : 'Link copied'
      : status === 'error'
        ? 'Copy failed'
        : 'Share'
  const icon =
    status === 'copied' ? 'fa-check' : status === 'error' ? 'fa-triangle-exclamation' : 'fa-share-nodes'

  return (
    <div className="founder-share-wrap" ref={wrapRef}>
      <button
        type="button"
        ref={buttonRef}
        className="founder-share"
        onClick={() => setOpen((prev) => !prev)}
        data-status={status}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Share this brief: ${brief.title}`}
      >
        <i className={`fas ${icon}`} aria-hidden="true" />
        <span className="founder-share-label">{label}</span>
      </button>

      <span className="founder-share-live" role="status" aria-live="polite">
        {status === 'copied'
          ? note
            ? `Link copied. Paste it into ${note}.`
            : 'Link copied to clipboard'
          : status === 'error'
            ? 'Could not copy link'
            : ''}
      </span>

      {open && (
        <div className="founder-share-menu" role="menu" aria-label={`Share ${brief.title} to`}>
          {SHARE_TARGETS.map((target) => (
            <a
              key={target.id}
              role="menuitem"
              className="founder-share-item"
              href={target.build(shareUrl(), shareText)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              <i className={target.icon} aria-hidden="true" />
              <span>{target.label}</span>
            </a>
          ))}

          {MANUAL_TARGETS.map((target) => (
            <button
              key={target.id}
              type="button"
              role="menuitem"
              className="founder-share-item"
              onClick={() => handleManualShare(target)}
              title={`Copies the link and opens ${target.label}, ready to paste`}
            >
              <i className={target.icon} aria-hidden="true" />
              <span>{target.label}</span>
              <span className="founder-share-hint">copy + open</span>
            </button>
          ))}

          <button type="button" role="menuitem" className="founder-share-item" onClick={handleCopy}>
            <i className="fas fa-link" aria-hidden="true" />
            <span>Copy link</span>
          </button>

          {canNativeShare && (
            <button
              type="button"
              role="menuitem"
              className="founder-share-item"
              onClick={handleNativeShare}
            >
              <i className="fas fa-ellipsis" aria-hidden="true" />
              <span>More apps</span>
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default function FounderBrief() {
  const briefs = [...BRIEFS].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <section id="founder-brief" className="founder-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Founder Briefs
        </motion.h2>
        <motion.div
          className="founder-list"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {briefs.map((brief) => (
            <motion.article
              key={`${brief.date}-${brief.title}`}
              id={briefId(brief)}
              className="founder-entry"
              variants={entryVariants}
            >
              <div className="founder-updated">
                <span className="founder-updated-date">{formatDate(brief.date)}</span>
                <ShareButton brief={brief} />
              </div>
              <h3 className="founder-entry-title">{brief.title}</h3>
              {brief.subtitle && <p className="founder-subtitle">{brief.subtitle}</p>}
              <div className="founder-body">
                {brief.body.map((paragraph, i) => (
                  <p key={i} className="founder-text">{paragraph}</p>
                ))}
                {brief.bullets && brief.bullets.length > 0 && (
                  <ul className="founder-bullets">
                    {brief.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {brief.outro && brief.outro.map((paragraph, i) => (
                  <p key={`outro-${i}`} className="founder-text">{paragraph}</p>
                ))}
                {brief.sources && brief.sources.length > 0 && (
                  <div className="founder-sources">
                    <p className="founder-sources-label">Sources</p>
                    <ul>
                      {brief.sources.map((source) => (
                        <li key={source.url}>
                          <a href={source.url} target="_blank" rel="noreferrer">
                            {source.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
