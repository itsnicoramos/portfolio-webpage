# Nico Ramos - Portfolio

Personal portfolio site for [itsnico.dev](https://itsnico.dev), built with **React + Vite**, **Tailwind CSS**, and modern animation libraries. Inspired by [MAHESHPPAI/Portfolio-website](https://github.com/MAHESHPPAI/Portfolio-website).

Live site: [itsnico.dev](https://itsnico.dev)

---

## Stack

| Layer | Tool |
|---|---|
| UI | React 18 |
| Build | Vite 6 |
| Styling | Tailwind CSS v3 + CSS custom properties (dark-only) |
| Animations | Framer Motion + CSS keyframes |
| Smooth Scroll | Lenis |
| 3D / Canvas | Three.js (hero particle system) |
| Fonts / Icons | Google Fonts (Inter + Playfair Display) + Font Awesome CDN |
| Hosting | Netlify (auto-deploy from `main`) |

---

## Architecture

```
portfolio-webpage/
├── public/
│   └── img/                     # Static assets served at /img/
├── src/
│   ├── components/
│   │   ├── Navbar/              # Navbar.jsx + Navbar.css
│   │   ├── Hero/                # Hero.jsx + Hero.css (Three.js particles + BlurImage)
│   │   ├── About/               # About.jsx + About.css (BentoGrid layout)
│   │   ├── Projects/            # Projects.jsx + Projects.css
│   │   ├── Skills/              # Skills.jsx + Skills.css
│   │   ├── Certifications/      # Certifications.jsx + Certifications.css
│   │   ├── Travel/              # Travel.jsx + Travel.css
│   │   ├── Contact/             # Contact.jsx + Contact.css (Pressable links)
│   │   ├── Footer/              # Footer.jsx + Footer.css
│   │   ├── ScrollVelocity/      # Framer Motion velocity-based parallax marquee
│   │   ├── StarBorder/          # CSS conic-gradient animated border for buttons
│   │   ├── CommandPalette/      # Cmd+K keyboard navigation palette
│   │   ├── BentoGrid/           # Asymmetric responsive grid layout
│   │   └── ui/                  # Atomic design primitives
│   │       ├── Skeleton.jsx     # Shimmer loading placeholders
│   │       ├── BlurImage.jsx    # Blur-up progressive image loading
│   │       ├── Button.jsx       # primary / outline / ghost variants
│   │       ├── Card.jsx         # Reusable card with hover and glass options
│   │       ├── Badge.jsx        # Inline label (startup / featured / course)
│   │       ├── MicroInteraction.jsx  # Pressable, FadeIn, SlideIn wrappers
│   │       └── index.js         # Barrel re-export
│   ├── hooks/
│   │   ├── useTheme.js          # Light/dark toggle with localStorage persistence
│   │   ├── useScrollFade.js     # IntersectionObserver scroll-reveal animations
│   │   └── useInteractive.js    # Cursor glow, scroll progress, hero parallax, card tilt, magnetic buttons
│   ├── App.jsx                  # Root component: Lenis + CommandPalette + all sections
│   ├── App.css                  # Interactivity layer styles
│   ├── main.jsx                 # React DOM entry point
│   └── index.css                # Tailwind directives + global CSS custom properties
├── netlify/                     # Netlify serverless functions
├── index.html                   # Vite HTML entry
├── vite.config.js
├── tailwind.config.js           # Tailwind config: preflight disabled, scans src/**
├── postcss.config.js
├── package.json
└── netlify.toml                 # Build: npm run build to dist/
```

Each component owns its styles. One `.jsx` and one `.css` per folder.

---

## UX Features

### Perceived Speed
- **Skeleton screens**: Shimmer placeholders for cards and images while content loads
- **Blur-up images**: Profile photo and media fade from a blurred gradient to full clarity on load, eliminating layout shifts

### Command Palette (Cmd+K)
Press `Cmd+K` (Mac) or `Ctrl+K` (Windows) to open a keyboard-driven navigation palette. Supports fuzzy search over sections, projects, and actions (toggle theme, email, resume). Navigate with arrow keys, select with Enter.

### Bento Box Grid
The About section uses an asymmetric bento layout (4 columns on desktop, 2 on tablet, 1 on mobile). Featured cards span multiple columns for visual hierarchy and scannability.

### Micro-Interactions
All interactive elements use sub-200ms Framer Motion spring animations:
- `Pressable`: whileTap scale-down + whileHover scale-up
- `FadeIn`: opacity + translateY entrance (150ms)
- `SlideIn`: opacity + translateX entrance (180ms)
- Nav links shrink on tap, social cards respond to press

### Atomic UI Primitives (`src/components/ui/`)
Reusable composable components:
- `Button` (primary, outline, ghost; sm, md, lg)
- `Card` (hover lift, glassmorphism option)
- `Badge` (startup, featured, course variants)
- `Skeleton` (text, circle, card, image variants)
- `BlurImage` (progressive image loading)

---

## Animations

### ScrollVelocity
Parallax marquee strip between the hero and About sections. Built with Framer Motion's `useScroll`, `useVelocity`, `useSpring`, and `useAnimationFrame`. Text speed responds to scroll velocity. Two rows run in opposite directions.

### StarBorder
CTA buttons on the hero use a rotating conic-gradient border (`@keyframes` + `conic-gradient`). The border spins continuously and accelerates on hover.

### Lenis Smooth Scroll
The whole page uses Lenis for physics-based smooth scrolling (1.2s duration). Disabled automatically when `prefers-reduced-motion` is set.

### Framer Motion Entrance Animations
About, Projects, and Skills sections use `motion.div` with `whileInView` and `staggerChildren`. Cards cascade in from below with a custom ease (`[0.22, 1, 0.36, 1]`) as they enter the viewport. All animations trigger once.

### Animated Underlines
Nav and content links use a CSS `scaleX` underline that sweeps left-to-right on hover.

---

## Development

```bash
npm install
npm run dev      # Start dev server (http://localhost:5173)
npm start        # Same as dev
npm run build    # Build to dist/
npm run preview  # Preview production build
```

---

## `/ceo` — founder-mode review command

A project-local [Claude Code](https://claude.com/claude-code) slash command lives
at `.claude/commands/ceo.md`. Type `/ceo` in Claude Code to invoke a CEO/founder
advisor that pressure-tests a plan before any code gets written:

```
/ceo add a contact form with spam protection
/ceo should I rebuild the chat assistant on Claude instead of OpenAI?
```

It challenges the premise, surfaces the 10-star version, runs six forcing
questions, commits to one of four scope modes (Expansion, Selective, Hold,
Reduction), then walks an 11-section rigor pass (architecture, errors, security,
edge cases, code quality, tests, performance, observability, deployment, long-term
trajectory, design/UX). It is **advisory only** — it never edits code, and every
scope change is an explicit opt-in.

Inspired by [Garry Tan's gstack](https://github.com/garrytan/gstack)
(`/plan-ceo-review` + `/office-hours`). Not forked — independently authored for
this repo.

---

## Theming

Dark-only. `data-theme="dark"` is hardcoded on `<html>` and CSS custom properties are defined under `:root`. Tailwind dark mode aligns via `darkMode: ['attribute', '[data-theme="dark"]']`. The theme is saved to `localStorage` and applied before first paint (inline script in `index.html`) to prevent flash.

---

## Sections

| Section | Component | Description |
|---|---|---|
| Nav | `Navbar` | Fixed glassmorphism nav, smooth scroll links, hamburger menu, motion tap feedback |
| Home | `Hero` | Three.js particle canvas, BlurImage profile, StarBorder CTAs, ScrollVelocity strip |
| About | `About` | BentoGrid layout with Framer Motion stagger entrance |
| Projects | `Projects` | Card grid with badges, skeleton loading state, staggered entrance |
| Skills | `Skills` | Skill category cards with Framer Motion stagger |
| Certifications | `Certifications` | Credentials and continued learning cards |
| Travel | `Travel` | Travel interest cards with Instagram link |
| Contact | `Contact` | Pressable social links grouped by Work/Build and Follow |
| Footer | `Footer` | Dynamic copyright year |

---

## Deployment

Netlify auto-deploys from the `main` branch:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Functions directory | `netlify/functions` |

---

## Connect

**Professional**
- LinkedIn: [linkedin.com/in/nico-ramos28](https://www.linkedin.com/in/nico-ramos28)
- GitHub: [github.com/itsnicoramos](https://github.com/itsnicoramos)

**Personal**
- Instagram: [instagram.com/itsnicoramos__](https://www.instagram.com/itsnicoramos__)
- TikTok: [tiktok.com/@itsnicoramos_](https://www.tiktok.com/@itsnicoramos_)
- Threads: [threads.net/itsnicoramos__](https://threads.net/itsnicoramos__)
