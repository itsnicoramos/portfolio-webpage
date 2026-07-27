import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './FounderBrief.css'

// To post a new founder brief, add an object to this array with a new `date`
// (ISO YYYY-MM-DD) and `body` (one string per paragraph). Order in the array
// doesn't matter; entries are sorted by date so the newest always lands on top.
const BRIEFS = [
  {
    title: 'The high velocity Execution Archetype',
    date: '2026-05-19',
    body: [
      'I build high velocity software at the intersection of AI, cybersecurity, and maybe developing my own social platform that other platforms do not have yet. At 28 y/o, my primary interest is a specialization in artificial intelligence (AI), a trajectory I have been on since I taught myself Python when I was 16 y/o. My focus is entirely on technical execution and relentless iteration to find market fit. Currently studying Quantitative Finance and Computer Science at Vancouver Island University, I divide my time between deep academic theory and shipping production ready code.',
    ],
  },
  {
    title: 'The 4.0 Trap: Arbitraging My GPA for Shipping Velocity',
    subtitle: 'Academic perfection is an employee metric',
    date: '2026-05-22',
    body: [
      "When I see someone optimizing for a 4.0 GPA, all I see is someone signaling to the market that they are exceptional at executing someone else’s roadmap. They are training to be a highly compliant asset for someone like me. This is the first post on my site, so I am setting the baseline right now: I view optimizing for the Dean's List as a massive misallocation of my bandwidth. I refuse to pour hundreds of hours into a legacy syllabus just to flex a vanity metric that zero users, investors, or technical co-founders actually care about.",
      "For me, taking a C isn't a failure of intelligence; it is a calculated resource allocation. As a founder, my most constrained asset is time. The delta between a 75% and a 95% in a theoretical prerequisite costs dozens of hours. I see that as an arbitrage opportunity. I refuse to pay that tax. I take those hours and route them directly into my CLI.",
    ],
    bullets: [
      "Proof of Capacity > Proof of Compliance: Look at my transcript. I took a C in Calculus I. Then, I turned around and dropped an A- in Calculus II, universally recognized as the hardest weed-out class in the sequence. I don't lack the compute to get an A; I just refuse to allocate it unless the underlying mechanics actually matter to what I'm building. Calc II math scales to the LLMs I work with. Calc I syllabus quizzes do not. That A- proves I can dominate complex mechanics when the ROI is there. Grinding for baseline A's is just wasted bandwidth to me.",
      "The Market Has No Syllabus: Academia rewards me for staying inside the sandbox. I know startups reward me for breaking it. Prototyping my AI product demands product-first logic, rapid iteration, and ruthless execution. A classroom cannot test for my agency.",
      "Asymmetric Leverage: While the rest is memorizing syntax for a final exam, I am living inside Claude Code. I am wiring up custom agent skills, testing local-first architectures, and pushing the boundaries of what AI can execute in my real-world codebase. I don't memorize code; I direct it. I am building infrastructure while they are building study guides.",
    ],
    outro: [
      'The valedictorian they are going to graduate with a framed piece of paper, a flawless transcript, and a resume begging for permission to build. I am graduating with a portfolio of shipped software, a network of builders, and an intuition for the tools that will render their future job obsolete.',
      'My degree is just a hedge. My shipped product is the thesis.',
      'Day 1 of building a $1B company using Claude Code without writing a single line of code.'
    ],
  },
  {
    title: 'The Static Tool Trap: Why Logging Is Not Coaching',
    subtitle: 'Every fitness app records what you did. None of them decides what you do next.',
    date: '2026-07-27',
    body: [
      'I took a break between high school and university because traditional education was not resonating with me. I tried to apply in 2020, the COVID lockdowns wiped that timeline out, and honestly I did not feel like it. I have never liked taking classes, especially university courses disconnected from building real things. Even now, finishing my Computer Science degree, my filter for efficiency is ruthless: if a system wastes my time, I drop it. Aura is that filter turned into a product.',
      'Because that is exactly what a workout logger is, a system that wastes your time. Hevy, Strong, Fitbod: they give you a clean interface for recording sets and reps, then hand the entire cognitive load of progression, troubleshooting, and programming straight back to you. They are built to record what you already did. They are not built to tell you what to do next.',
      'The obvious objection is that the AI strength category already exists. It does. JuggernautAI runs periodized powerlifting blocks at $35 a month. Fitbod auto-regulates progressive overload. Dr. Muscle automates deloads. Hevy shipped its own adaptive trainer in February 2026. I am not claiming nobody thought of applying AI to lifting. I am claiming all of them shipped the same limited thing: a closed algorithm that hands you a program you cannot interrogate.',
    ],
    outro: [
      'The AI fitness market is compounding at roughly 20% a year, and the entire category is still shipping digital spreadsheets with an algorithm bolted on.',
      'I am not building a better logger. I am building the thing that reads the log and makes the call.',
    ],
    sources: [
      {
        label: 'MyFitnessPal has acquired Cal AI, the viral calorie app built by teens (TechCrunch)',
        url: 'https://techcrunch.com/2026/03/02/myfitnesspal-has-acquired-cal-ai-the-viral-calorie-app-built-by-teens/',
      },
      {
        label: 'This U30 kept launching apps until one worked, then sold it to MyFitnessPal (Forbes)',
        url: 'https://www.forbes.com/sites/zoyahasan/2026/03/06/this-u30-kept-launching-apps-until-one-worked-then-sold-it-to-myfitnesspal/',
      },
      {
        label: 'How a teenage CEO built a fast-growing calorie-tracking app (CNBC)',
        url: 'https://www.cnbc.com/2025/09/06/cal-ai-how-a-teenage-ceo-built-a-fast-growing-calorie-tracking-app.html',
      },
      {
        label: 'AI Personal Trainer Market Size and Share Report (Grand View Research)',
        url: 'https://www.grandviewresearch.com/industry-analysis/ai-personal-trainer-market-report',
      },
      {
        label: 'AI in Fitness and Wellness Market analysis (InsightAce Analytic)',
        url: 'https://www.insightaceanalytic.com/report/ai-in-fitness-and-wellness-market/2744',
      },
      {
        label: 'Hevy vs Strong 2026, including the February 2026 Hevy Trainer release (SensAI)',
        url: 'https://www.sensai.fit/blog/hevy-vs-strong-2026',
      },
      {
        label: 'JuggernautAI Review 2026, AI powerlifting coach (Agent Finder)',
        url: 'https://agent-finder.co/reviews/juggernautai',
      },
    ],
  },
]

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
