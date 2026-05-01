# Nico Ramos — Portfolio

Personal portfolio site for [itsnico.dev](https://itsnico.dev), built with **React + Vite**, **Tailwind CSS**, and modern animation libraries. Inspired by [MAHESHPPAI/Portfolio-website](https://github.com/MAHESHPPAI/Portfolio-website).

Live site: [itsnico.dev](https://itsnico.dev)

---

## Stack

| Layer | Tool |
|---|---|
| UI | React 18 |
| Build | Vite 6 |
| Styling | Tailwind CSS v3 + CSS custom properties (dark-only) |
| Animations | Framer Motion · CSS keyframes |
| Smooth Scroll | Lenis |
| 3D / Canvas | Three.js (hero particle system) |
| Fonts / Icons | Google Fonts (Inter + Playfair Display) · Font Awesome CDN |
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
│   │   ├── Hero/                # Hero.jsx + Hero.css
│   │   ├── About/               # About.jsx + About.css
│   │   ├── Projects/            # Projects.jsx + Projects.css
│   │   ├── Skills/              # Skills.jsx + Skills.css
│   │   ├── Certifications/      # Certifications.jsx + Certifications.css
│   │   ├── Travel/              # Travel.jsx + Travel.css
│   │   ├── Contact/             # Contact.jsx + Contact.css
│   │   ├── Footer/              # Footer.jsx + Footer.css
│   │   ├── ScrollVelocity/      # Framer Motion velocity-based parallax marquee
│   │   └── StarBorder/          # CSS conic-gradient animated border for buttons
│   ├── hooks/
│   │   ├── useTheme.js          # Light/dark toggle with localStorage persistence
│   │   ├── useScrollFade.js     # IntersectionObserver scroll-reveal animations
│   │   └── useInteractive.js    # Cursor glow, scroll progress, hero parallax, card tilt, magnetic buttons
│   ├── App.jsx                  # Root component — mounts Lenis, composes all sections
│   ├── App.css                  # Interactivity layer styles
│   ├── main.jsx                 # React DOM entry point
│   └── index.css                # Tailwind directives + global CSS custom properties
├── netlify/                     # Netlify serverless functions
├── index.html                   # Vite HTML entry
├── vite.config.js
├── tailwind.config.js           # Tailwind — preflight disabled, scans src/**
├── postcss.config.js
├── package.json
└── netlify.toml                 # Build: npm run build to dist/
```

Each component owns its styles. One `.jsx` and one `.css` per folder.

---

## Animations

### ScrollVelocity
Parallax marquee strip between the hero and About sections. Built with Framer Motion's `useScroll`, `useVelocity`, `useSpring`, and `useAnimationFrame` — the text speed responds to how fast you scroll. Two rows run in opposite directions.

### StarBorder
CTA buttons on the hero use a rotating conic-gradient border (CSS `@keyframes` + `conic-gradient`). The border spins continuously and accelerates on hover.

### Lenis Smooth Scroll
The whole page uses Lenis for physics-based smooth scrolling (1.2s duration, ease `1.001 - 2^(-10t)`). Disabled automatically when `prefers-reduced-motion` is set.

### Framer Motion Entrance Animations
About, Projects, and Skills sections use `motion.div` with `whileInView` and `staggerChildren` — cards cascade in from below with a custom ease (`[0.22, 1, 0.36, 1]`) as they enter the viewport. All animations trigger once and respect the viewport margin.

### Animated underlines
Nav and content links use a CSS `scaleX` underline that sweeps left-to-right on hover.

---

## Development

```bash
npm install
npm run dev      # Start dev server
npm run build    # Build to dist/
npm run preview  # Preview production build
```

---

## Theming

Light/dark mode is driven by a `data-theme` attribute on `<html>` (`light` | `dark`). CSS custom properties defined in `src/index.css` switch values between themes. The active theme is saved to `localStorage` and applied before first paint (inline script in `index.html`) to prevent any flash.

The site is dark-only — no toggle. `data-theme="dark"` is hardcoded on `<html>` and CSS custom properties are defined under `:root`. Tailwind dark mode aligns via `darkMode: ['attribute', '[data-theme="dark"]']`.

---

## Sections

| Section | Component | Description |
|---|---|---|
| Nav | `Navbar` | Fixed glassmorphism nav, smooth scroll links, theme toggle, hamburger menu |
| Home | `Hero` | Three.js particle canvas, intro text, StarBorder CTA buttons, ScrollVelocity strip |
| About | `About` | 4-card grid with Framer Motion stagger entrance animations |
| Projects | `Projects` | Card grid of startup and course projects with staggered entrance |
| Skills | `Skills` | Skill category cards with Framer Motion stagger |
| Certifications | `Certifications` | Card grid of credentials and continued learning |
| Travel | `Travel` | Travel interest cards with Instagram link |
| Contact | `Contact` | Social links grouped by Work/Build and Follow |
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
