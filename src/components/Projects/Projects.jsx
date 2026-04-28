import './Projects.css'

const PROJECTS = [
  {
    title: 'Looply',
    badge: 'STARTUP',
    role: 'Founder & Software Engineer',
    date: '2026 · Remote',
    desc: 'Full-stack AI web app to help users plan content strategies and scope MVP applications. Designed persistent memory to store user context (goals, niches, progress) across sessions.',
    bullets: [
      'Designed, built, and deployed a full-stack AI web application for content strategy and MVP scoping',
      'Developed a performant React + Vite frontend with emphasis on clean rendering and responsive design',
      'Integrated AI models to power structured, task-oriented workflows rather than generic chat interactions',
      'Owned the full software lifecycle: architecture, development, debugging, deployment, and iteration',
    ],
    tech: ['React', 'Vite', 'Firebase', 'GPT by OpenAI', 'Claude by Anthropic', 'Vercel'],
    links: {},
    status: 'MVP in progress',
  },
  {
    title: 'ApplyKit',
    badge: 'FEATURED',
    role: 'Built with Lovable.dev',
    date: '2026 · Remote',
    desc: 'An AI student application copilot MVP built to help students move faster through the internship and job search process with tailored application support.',
    bullets: [
      'Tailor resumes to specific opportunities',
      'Turn job links into application-ready content',
      'Prototype a smarter, student-first way to apply',
    ],
    tech: ['Lovable.dev', 'AI Agent', 'MVP'],
    links: { live: 'https://applykit.lovable.app' },
  },
  {
    title: 'ChainMind',
    badge: 'STARTUP',
    role: 'Founder & Software Engineer',
    date: '2026 · Remote',
    desc: 'A purpose-built blockchain with a conversational AI agent as its primary interface. Users manage wallets, send coins, and analyze on-chain data through natural language or voice.',
    bullets: [
      'Architected across three layers: static frontend on Netlify CDN, serverless AI functions, and a Python/FastAPI blockchain backend',
      'Implemented proof-of-work consensus, UTXO transaction model, and automatic peer-to-peer chain sync',
      'Built a modular skills system. New agent capabilities are added by dropping a folder.',
      'Integrated voice input and output via the Web Speech API with zero external dependencies',
    ],
    tech: ['Python', 'FastAPI', 'Claude Sonnet 4.6', 'Netlify Functions', 'SQLite', 'Vanilla JS'],
    links: { github: 'https://github.com/itsnicoramos/ChainMind' },
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
    desc: '. A single-page React + Vite app written from scratch with no UI framework or CSS library, focused on a fast, hand-tuned feel.',
    bullets: [
      'Component-per-folder architecture: each section owns its own .jsx and .css with no shared stylesheets',
      'Light/dark theming via CSS custom properties on a data-theme attribute, applied pre-paint to avoid flashing',
      'Three.js particle canvas in the hero, performance-tuned with intersection and visibility observers',
      'Custom interactivity hook drives the cursor glow, scroll-progress bar, hero parallax, card tilt, and magnetic buttons in a single rAF loop',
      'Hosted on Netlify with a strict Content-Security-Policy and security headers configured in netlify.toml',
    ],
    tech: ['React', 'Vite', 'Plain CSS', 'Three.js', 'Netlify'],
    links: { live: 'https://itsnico.dev' },
    status: 'Live',
  },
  {
    title: 'CSCI 115: Web Development',
    badge: 'COURSE',
    role: 'Student',
    date: 'Spring 2025 · VIU',
    desc: 'Course project demonstrating foundational web development skills using HTML, CSS, and JavaScript.',
    bullets: [],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    links: { live: 'https://itsnicoramos.github.io/csci115-project/' },
    status: 'Completed',
  },
  {
    title: 'MEDI 110: Media Production',
    badge: 'COURSE',
    role: 'Student',
    date: 'Fall 2025 · VIU',
    desc: 'Storytelling-based website showcasing Vancouver through photography, editing techniques, and responsive web design.',
    bullets: [],
    tech: ['HTML5', 'CSS3', 'Responsive Design'],
    links: { live: 'https://itsnicoramos.github.io/MEDI110finalProject/' },
    status: 'Completed',
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
    date: 'In Progress · VIU',
    desc: 'Topics include OOP (encapsulation, inheritance, polymorphism), dynamic data structures (arrays, linked lists, trees), and abstract data types.',
    bullets: [],
    tech: ['C++', 'OOP', 'Data Structures'],
    links: {},
    status: 'In Progress',
  },
  {
    title: 'CSCI 162: Topics in Computer Science',
    badge: 'COURSE',
    role: 'Student',
    date: 'In Progress · VIU',
    desc: 'Applied and theoretical topics: digital logic, programming paradigms, computer architecture, system software, and theory of computation.',
    bullets: [],
    tech: ['C++', 'Architecture', 'Logic'],
    links: {},
    status: 'In Progress',
  },
]

const BADGE_CLASS = {
  STARTUP: 'badge--startup',
  FEATURED: 'badge--featured',
  COURSE: 'badge--course',
}

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title scroll-fade">Projects</h2>
        <p className="section-subtitle scroll-fade">
          Real products and course projects I've built and shipped.
        </p>
        <div className="project-grid">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className={`project-card scroll-fade${p.badge === 'STARTUP' ? ' project-card--startup' : ''}${p.badge === 'FEATURED' ? ' project-card--featured' : ''}`}
            >
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
