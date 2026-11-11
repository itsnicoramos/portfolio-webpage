// Every claim below was checked against the linked repository on 2026-11-10.
// `sources` lists the files each entry was verified from, so the next edit can
// re-check them instead of trusting this file. Keep it that way: if a repo
// changes, update the claim, not just the wording.

export type LinkRef = { label: string; href: string }

export type Status = {
  label: string
  tone: 'live' | 'active' | 'early' | 'complete' | 'empty'
}

export type Project = {
  id: string
  name: string
  repo: string
  tagline: string
  summary: string
  points: readonly { title: string; body: string }[]
  stack: readonly string[]
  status: Status
  license: string
  links: readonly LinkRef[]
  sources: readonly string[]
}

const gh = (repo: string) => `https://github.com/itsnicoramos/${repo}`

export const prooflab: Project = {
  id: 'prooflab',
  name: 'ProofLab',
  repo: gh('ProofLab'),
  tagline: 'The AI teaches. The checker grades.',
  summary:
    'ProofLab checks university math work one step at a time. It tells you which step went wrong and why, with hints written as rules, not generated text.',
  points: [
    {
      title: 'Verdicts without AI',
      body: 'Every verdict comes from SymPy, numeric evaluation and hand-written rules. The same input always gets the same verdict.',
    },
    {
      title: 'A tutor inside your coding agent',
      body: 'Type /tutor in Claude Code, Codex or another agent. It teaches all 14 chapters of Book of Proof from ProofLab’s own lesson notes, and the checker grades every exercise in Chapters 1 to 10.',
    },
    {
      title: 'Courses are data',
      body: 'A course is a small pack file, so one tutor, one rule set and one memory serve MATH 123 today and MATH 223 once its content lands.',
    },
    {
      title: 'Practice beyond proofs',
      body: 'Precalculus and Calculus 1 to 4 are written and checked through the API, along with practice tests, multiple choice and flashcards.',
    },
  ],
  stack: ['Python', 'FastAPI', 'SymPy', 'Next.js', 'TypeScript', 'PostgreSQL', 'SQLite', 'Docker', 'Vercel'],
  status: {
    label: 'Live. Explainer site and checker API on Vercel',
    tone: 'live',
  },
  license: 'MIT',
  links: [
    { label: 'Visit the site', href: 'https://prooflab-ruby.vercel.app' },
    { label: 'View on GitHub', href: gh('ProofLab') },
  ],
  sources: ['ProofLab/README.md', 'ProofLab/LICENSE', 'ProofLab/frontend/package.json', 'ProofLab/backend/pyproject.toml'],
}

// The real /check response for calc1.derivatives.product-rule, taken from the
// ProofLab README. The animated demo replays it; nothing here is invented.
export const prooflabCheckSample = {
  problemId: 'calc1.derivatives.product-rule',
  prompt: 'f(x) = x² sin x. Find f′(x).',
  submitted: '2x cos(x)',
  stepStatus: 'error',
  stepMessage: 'This step isn’t equal to f′(x).',
  answerMessage: 'Not quite. That isn’t the correct answer.',
  hints: [
    { code: 'PRODUCT_RULE', message: 'Check the product rule: (uv)′ = u′v + uv′, not u′v′.' },
    { code: 'AUTHORED_HINT', message: 'Hint 1: f is a product u·v with u = x² and v = sin x.' },
  ],
} as const

export const prooflabHarness = {
  title: 'ProofLab tutor harness',
  repo: gh('ProofLab'),
  summary:
    'The tutor runs inside an agent the learner already uses, so the harness around it does the trust work.',
  points: [
    'A session guard blocks reading exercise files or .env, starting servers, touching a database directly and writing files.',
    'Recorded sessions are graded against the tutor’s rules with prooflab-tutor audit.',
    'Nine scripted learners test whether the tutor checks before judging, treats instructions hidden in a learner’s work as data, and holds back the solution.',
    'Memory lives in a local Postgres. Without it, the tutor still teaches and checks.',
  ],
  stack: ['Claude Code skill', 'AGENTS.md', 'Python CLI', 'PostgreSQL'],
  sources: ['ProofLab/README.md#guardrails-and-evals'],
} as const

export const hardwareBringup: Project = {
  id: 'hardware-bringup',
  name: 'hardware-bringup',
  repo: gh('Spec-to-ship'),
  tagline: 'A Claude Code skill that stops coding agents from lying about hardware.',
  summary:
    'An agent that writes servo firmware has never seen the servo. This skill makes it treat the human at the bench as its only instrument, and report what was observed separately from what was not.',
  points: [
    {
      title: 'Three states, never two',
      body: 'Every claim is verified-host (a test it ran), verified-bench (something you observed) or unverified. The count of each heads every report.',
    },
    {
      title: 'Host tests before flashing',
      body: 'Parsing, state machines, limit clamping and protocol framing are tested on the host before anything touches a board.',
    },
    {
      title: 'Bench cards for the human',
      body: 'Numbered steps with the exact setup, the expected reading and what failure looks like. One measurement at a time, ordered by risk.',
    },
    {
      title: 'Preflight before first power',
      body: 'Current budget against stall current, per-pin limits, bonded grounds and an E-stop in series with the load rail. A failed item is a stop.',
    },
  ],
  stack: ['Claude Code skill', 'Supabase', 'PostgreSQL + RLS', 'Next.js', 'TypeScript'],
  status: {
    label: 'Early. In use on a 4-DOF Arduino arm',
    tone: 'early',
  },
  license: 'None chosen yet',
  links: [{ label: 'View on GitHub', href: gh('Spec-to-ship') }],
  sources: [
    'Spec-to-ship/README.md',
    'Spec-to-ship/skill/SKILL.md',
    'Spec-to-ship/evals/',
    'Spec-to-ship/supabase/migrations/',
    'Spec-to-ship/supabase/tests/',
  ],
}

// What is and is not in the hardware-bringup repo today. The README describes
// apps/console/ and skill/references/, but neither is committed yet.
export const hardwareBringupProgress = [
  { label: 'Skill and preflight', state: 'Written, in use' },
  { label: 'Trigger and pressure evals', state: 'Written' },
  { label: 'Bench console schema, RLS and database tests', state: 'Written' },
  { label: 'Bench console phone app', state: 'Not in the repo yet' },
  { label: 'Per-toolchain host harnesses and symptom tables', state: 'Being filled in' },
] as const

// A real bench card step from the hardware-bringup README.
export const benchCard = {
  id: 'B-03',
  title: 'Bond check: PCA9685 ground reference',
  rows: [
    { k: 'Setup', v: 'USB unplugged. Meter in continuity mode.' },
    { k: 'Do', v: 'One probe on Arduino GND, one on PCA9685 GND.' },
    { k: 'Expect', v: 'Beep / < 1 Ω.' },
    { k: 'If not', v: 'Grounds are not bonded. Add a jumper between them. Do not power up.' },
    { k: 'Why', v: 'Without a shared reference the PWM edges mean nothing to the servos.' },
  ],
} as const

export const bringupPipeline = [
  'Detect toolchain',
  'Classify',
  'Preflight',
  'Host tests',
  'Bench card',
  'Operator gate',
  'Record',
  'Report',
] as const

export const toolchains = [
  { signal: 'sketch.yaml, *.ino', name: 'Arduino CLI' },
  { signal: 'platformio.ini', name: 'PlatformIO' },
  { signal: 'CMakeLists.txt + sdkconfig', name: 'ESP-IDF' },
  { signal: 'west.yml, prj.conf', name: 'Zephyr' },
  { signal: '*.ioc, Core/Src/', name: 'STM32Cube' },
  { signal: 'libgpiod, gpiozero', name: 'Linux SBC' },
] as const

export const arduinoUno = {
  name: 'ArduinoUNO',
  repo: gh('ArduinoUNO'),
  board: 'Arduino Uno',
  summary:
    'A new repository for standalone Arduino Uno experiments, with an Uno R4 WiFi on the bench. It was created in September 2026 and has no commits yet, so there is nothing to show until the first sketch lands.',
  status: { label: 'Empty repository. Work in progress', tone: 'empty' } satisfies Status,
  sources: ['GitHub API: itsnicoramos/ArduinoUNO (size 0)', 'Itsnicoramos/README.md (A bit more)'],
} as const

export const cyberbank: Project = {
  id: 'cyberbank',
  name: 'CyberBank',
  repo: gh('CyberBank'),
  tagline: 'A banking engine you can read in one sitting.',
  summary:
    'A two-part banking simulator: a dependency-free C++11 engine that models the domain end to end, and a zero-dependency Node.js web client for the same flows.',
  points: [
    {
      title: 'PIN hashing from first principles',
      body: 'SHA-256 written in pure C++. Each PIN gets a 16-byte random salt and 100,000 hash iterations. The plain-text PIN never touches the disk.',
    },
    {
      title: 'Pluggable storage',
      body: 'A Storage interface with two backends: a versioned flat file by default, or SQLite when built with make SQLITE=1.',
    },
    {
      title: 'The full ledger',
      body: 'Deposits, withdrawals with overdraft protection, transfers with paired ledger entries, a payee directory, pro-rata interest and CSV export.',
    },
    {
      title: 'A web client with no dependencies',
      body: 'One Node.js server on node:http serves the page and a JSON API, with scrypt for credentials and hand-rolled HMAC-SHA256 session tokens.',
    },
  ],
  stack: ['C++11', 'GNU Make', 'SQLite', 'Node.js', 'HTML', 'CSS', 'JavaScript'],
  status: { label: 'Complete', tone: 'complete' },
  license: 'MIT',
  links: [{ label: 'View on GitHub', href: gh('CyberBank') }],
  sources: ['CyberBank/README.md', 'CyberBank/Crypto.cpp', 'CyberBank/Storage.h', 'CyberBank/server.js', 'CyberBank/LICENSE'],
}

// This site. Claims are about this repository and were checked against it.
export const portfolio: Project = {
  id: 'portfolio',
  name: 'itsnico.dev',
  repo: gh('portfolio-webpage'),
  tagline: 'The site you are reading, built like a product.',
  summary:
    'A single-page portfolio in Next.js and strict TypeScript. Every project claim on it is checked against its repository, and the checks are tests, not promises.',
  points: [
    {
      title: 'Server Components by default',
      body: 'The page is prerendered to static HTML. Only four small pieces run in the browser: the header, the command palette, the copy-email button and the ProofLab replay.',
    },
    {
      title: 'Claims with sources',
      body: 'Copy lives in typed data files, each project lists the repo files it was verified from, and unit tests pin the contacts to my GitHub profile README.',
    },
    {
      title: 'Keyboard first',
      body: 'A ⌘K / Ctrl K command palette on a native dialog with an ARIA combobox, a skip link, and a visible focus ring on every dark and light section.',
    },
    {
      title: 'Tested in a real browser',
      body: 'Playwright on desktop and a Pixel 7 runs axe accessibility checks, keyboard flows and security-header checks, and fails on horizontal scroll from 320 to 1440px.',
    },
  ],
  stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Playwright', 'axe-core', 'Netlify'],
  status: { label: 'Live at itsnico.dev', tone: 'live' },
  license: 'None chosen yet',
  links: [
    { label: 'View on GitHub', href: gh('portfolio-webpage') },
  ],
  sources: [
    'portfolio-webpage/src/app/',
    'portfolio-webpage/src/content/',
    'portfolio-webpage/tests/',
    'portfolio-webpage/package.json',
  ],
}

// Not my project: an open-source curriculum by Rohit Ghumare (rohitg00),
// MIT-licensed. itsnicoramos/AI-Engineering is an unmodified copy I study
// from (no commits of mine as of 2026-11-10). Say so wherever it appears.
export const aiEngineering: Project = {
  id: 'ai-engineering-from-scratch',
  name: 'AI Engineering from Scratch',
  repo: 'https://github.com/rohitg00/ai-engineering-from-scratch',
  tagline: 'The open-source curriculum I am learning AI engineering from.',
  summary:
    'A free, MIT-licensed course by Rohit Ghumare (rohitg00). I am working through it to learn how models, retrieval and agents are built from the inside. The course is his work; my GitHub copy tracks it.',
  points: [
    {
      title: '542 lessons, 20 phases',
      body: 'From setup and tooling through model internals, retrieval pipelines and agent runtimes.',
    },
    {
      title: 'Build, test, inspect',
      body: 'Each lesson implements the thing, tests it, inspects the failures, and keeps the code and the evaluation results.',
    },
    {
      title: 'Five languages',
      body: 'Python, TypeScript, Rust, Julia and Go, picked per lesson for the job at hand.',
    },
    {
      title: 'Free and open source',
      body: 'MIT-licensed. Learn on the course website, with a coding agent, or by running the code locally.',
    },
  ],
  stack: ['Python', 'TypeScript', 'Rust', 'Julia', 'Go', 'LLMs', 'RAG', 'Agents'],
  status: { label: 'Studying, ongoing', tone: 'active' },
  license: 'MIT, by Rohit Ghumare',
  links: [
    { label: 'View the course', href: 'https://github.com/rohitg00/ai-engineering-from-scratch' },
    { label: 'My copy', href: gh('AI-Engineering') },
  ],
  sources: [
    'rohitg00/ai-engineering-from-scratch/README.md',
    'GitHub API: rohitg00 (name, license MIT)',
    'GitHub API: itsnicoramos/AI-Engineering commits (none by itsnicoramos)',
  ],
}
