import { motion } from 'framer-motion'
import './Projects.css'

const PROJECTS = [
  {
    title: 'Aura',
    badge: 'STARTUP',
    role: 'Founder',
    date: '2026 · iOS',
    images: [
      '/img/aura-today.jpeg',
      '/img/aura-progress.jpeg',
      '/img/aura-nutrition.jpeg',
      '/img/aura-feed.jpeg',
      '/img/aura-you.jpeg',
      '/img/aura-coach.jpeg',
    ],
    desc: 'What if Strava and a personal trainer had a baby? Aura is the AI training partner that actually knows you. It reads every workout, meal, and habit you log, then builds your week, catches plateaus before you feel them, and wraps it all in a social feed and streaks that keep you showing up.',
    bullets: [
      'AI Coach (Beta): a personal agent that learns from your logged training and remembers your chats — generates your week ahead, runs 28-day plateau checks, and answers in Quick, Coach, or Research modes',
      'Social by design: a Feed, daily coach briefs, and streak mechanics ("4 workouts to keep your streak") that turn consistency into a game',
      'Nutrition that logs itself: calorie and macro targets (protein / carbs / fat), barcode scanning, and camera-based "Read label" OCR to log food in seconds',
      'Guided programs: structured workout plans (5x/week starter and more) with per-exercise weight tracking and one-tap session start',
      'Cross-platform mobile app built with React Native + Expo in TypeScript, backed by Supabase and an LLM-powered coaching agent',
    ],
    tech: ['React Native', 'Expo', 'TypeScript', 'Python', 'Supabase', 'PostgreSQL', 'Swift', 'LLM AI Agent', 'iOS'],
    techImage: '/img/aura-languages.jpeg',
    links: { live: 'https://myaurafit.app' },
    status: 'In private beta',
  },
  {
    title: 'CyberBank',
    badge: 'FEATURED',
    role: 'Solo Project',
    date: '2026 ',
    desc: 'A solo-built C++ banking simulator designed to demonstrate object-oriented architecture, secure account authentication, transaction management, and persistent storage.',
    bullets: [
      'Account creation and PIN-based login with salted hashing',
      'Deposits, withdrawals, transfers, payee management, and interest accrual',
      'Transaction history and CSV export',
      'Configurable storage through a file-based backend with optional SQLite support',
      'Lightweight web demo extending the core banking logic beyond the CLI',
    ],
    tech: ['C++', 'OOP', 'SQLite', 'Node.js', 'JavaScript', 'HTML', 'CSS', 'GNU Make', 'SHA-256', 'HMAC'],
    links: { github: 'https://github.com/itsnicoramos/CyberBank' },
  },
  {
    title: 'Portfolio Website',
    badge: 'FEATURED',
    role: 'Designer & Developer',
    date: '2024',
    desc: 'The site you are looking at right now. Built with React 18 and Vite 6, styled with Tailwind CSS and CSS custom properties. Features Framer Motion animations, a Cmd+K command palette, bento grid layout, blur-up image loading, and an atomic component system. Deployed on Netlify with auto-deploy from GitHub.',
    bullets: [
      'React component-per-folder architecture with co-located CSS',
      'Tailwind CSS v3 with dark-only theme via CSS custom properties',
      'Framer Motion for scroll-triggered entrances and sub-200ms micro-interactions',
      'Command palette (Cmd+K) for keyboard-driven navigation',
      'Atomic UI primitives: Button, Card, Badge, Skeleton, BlurImage',
      'Hosted on Netlify with strict CSP headers and automatic deploys',
    ],
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Netlify'],
    links: { live: 'https://itsnico.dev' },
    status: 'Live',
  },
  {
    title: 'CSCI 159: Computer Science 1',
    badge: 'COURSE',
    role: 'Student',
    date: 'Fall 2025 · VIU',
    desc: 'First-year CS course covering structured programming, top-down design, recursion, and an introduction to dynamic data structures.',
    bullets: [],
    tech: ['C++', 'Problem Solving', 'Debugging'],
    links: { github: 'https://github.com/itsnicoramos/csci159-labs' },
    status: 'Completed',
  },
  {
    title: 'CSCI 161: Computer Science 2',
    badge: 'COURSE',
    role: 'Student',
    date: 'Spring 2026 · VIU',
    desc: 'Topics include OOP (encapsulation, inheritance, polymorphism), dynamic data structures (arrays, linked lists, trees), and abstract data types. All solutions are my own work, not my professor\u2019s.',
    bullets: [],
    tech: ['C++', 'OOP', 'Data Structures', 'Make', 'Recursion', 'Linked Lists', 'BST'],
    links: { live: 'https://itsnicoramos.github.io/csci-161/' },
    status: 'Completed',
  },
  {
    title: 'CSCI 162: Topics in Computer Science',
    badge: 'COURSE',
    role: 'Student',
    date: 'Spring 2026 · VIU',
    desc: 'Applied and theoretical topics: digital logic, programming paradigms, computer architecture, system software, and theory of computation. All solutions are my own work, not my professor\u2019s.',
    bullets: [],
    tech: ['C', 'MARIE Assembly', 'SQL', 'SQLite', 'GDB', 'Digital Logic', 'K-maps'],
    links: { live: 'https://itsnicoramos.github.io/csci-162/' },
    status: 'Completed',
  },
]

const BADGE_CLASS = {
  STARTUP: 'badge--startup',
  FEATURED: 'badge--featured',
  COURSE: 'badge--course',
}

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Projects
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Real products and course projects I've built and shipped.
        </motion.p>
        <motion.div
          className="project-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {PROJECTS.map((p) => (
            <motion.div
              key={p.title}
              className={`project-card${p.badge === 'STARTUP' ? ' project-card--startup' : ''}${p.badge === 'FEATURED' ? ' project-card--featured' : ''}`}
              variants={cardVariants}
            >
              {p.images && p.images.length > 0 && (
                <div className="project-gallery">
                  {p.images.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`${p.title} app screenshot ${i + 1}`}
                      className="project-shot"
                      loading="lazy"
                    />
                  ))}
                </div>
              )}
              {p.image && <img src={p.image} alt={p.title} className="project-screenshot" loading="lazy" />}
              <span className={`project-badge ${BADGE_CLASS[p.badge] || ''}`}>{p.badge}</span>
              <h3>{p.title}</h3>
              <div className="project-meta">
                <span className="project-role">{p.role}</span>
                <span className="project-date">{p.date}</span>
              </div>
              {p.status && <span className="project-status">{p.status}</span>}
              <p className="project-desc">{p.desc}</p>
              {p.bullets.length > 0 && (
                <ul className="project-bullets">
                  {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              )}
              <div className="tech-tags">
                {p.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
              </div>
              {p.techImage && (
                <img
                  src={p.techImage}
                  alt={`${p.title} language breakdown`}
                  className="project-tech-image"
                  loading="lazy"
                />
              )}
              <div className="project-links">
                {p.links.github && (
                  <a href={p.links.github} target="_blank" rel="noreferrer">
                    View on GitHub →
                  </a>
                )}
                {p.links.live && (
                  <a href={p.links.live} target="_blank" rel="noreferrer">
                    View Live →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
