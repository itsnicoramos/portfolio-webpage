# Nico Ramos - Portfolio

Personal portfolio site for [itsnico.dev](https://itsnico.dev), built with **React + Vite** and plain CSS. No framework UI libraries, no Tailwind.

Live site: [itsnico.dev](https://itsnico.dev)

---

## Stack

| Layer | Tool |
|---|---|
| UI | React 18 |
| Build | Vite 6 |
| Styling | Plain CSS (CSS custom properties, no framework) |
| 3D / Canvas | Three.js (hero particle animation) |
| Fonts / Icons | Google Fonts · Font Awesome CDN |
| Hosting | Netlify (auto-deploy from `main`) |

---

## Architecture

```
portfolio-webpage/
├── public/
│   └── img/                  # Static assets served at /img/
├── src/
│   ├── components/
│   │   ├── Navbar/           # Navbar.jsx + Navbar.css
│   │   ├── Hero/             # Hero.jsx + Hero.css
│   │   ├── About/            # About.jsx + About.css
│   │   ├── Projects/         # Projects.jsx + Projects.css
│   │   ├── Skills/           # Skills.jsx + Skills.css
│   │   ├── Certifications/   # Certifications.jsx + Certifications.css
│   │   ├── Travel/           # Travel.jsx + Travel.css
│   │   ├── Contact/          # Contact.jsx + Contact.css
│   │   └── Footer/           # Footer.jsx + Footer.css
│   ├── hooks/
│   │   ├── useTheme.js        # Light/dark toggle with localStorage persistence
│   │   ├── useScrollFade.js   # IntersectionObserver scroll-reveal animations
│   │   └── useInteractive.js  # Cursor glow, scroll progress, hero parallax, card tilt, magnetic buttons
│   ├── App.jsx               # Root component, composes all sections
│   ├── App.css               # Interactivity layer styles
│   ├── main.jsx              # React DOM entry point
│   └── index.css             # Global styles and CSS custom properties
├── netlify/                  # Netlify serverless functions
├── index.html                # Vite HTML entry
├── vite.config.js
├── package.json
└── netlify.toml              # Build: npm run build to dist/
```

Each component owns its styles. One `.jsx` and one `.css` per folder, no shared stylesheet between components.

---

## Development

```bash
npm install
npm run dev     
npm run build   
npm run preview  
```

---

## Theming

Light/dark mode is driven by a `data-theme` attribute on `<html>` (`light` | `dark`). CSS custom properties defined in `src/index.css` switch values between themes. The active theme is saved to `localStorage` and applied before first paint (inline script in `index.html`) to prevent any flash.

---

## Interactivity

The `useInteractive` hook (called once from `App.jsx`) layers in subtle motion that respects the existing color and font system:

- Accent-tinted **cursor glow** that follows the pointer
- Top **scroll-progress bar**
- Mild **parallax** on the hero content
- **Tilt + cursor-tracked spotlight** on project cards
- **Magnetic** primary buttons
- Animated **underlines** on nav and content links

Everything is automatically disabled on touch devices or when `prefers-reduced-motion: reduce` is set.

---

## Sections

| Section | Component | Description |
|---|---|---|
| Nav | `Navbar` | Fixed glassmorphism nav, smooth scroll links, theme toggle, hamburger menu |
| Home | `Hero` | Three.js particle canvas, intro text, CTA buttons, tech ticker |
| About | `About` | 4-card grid covering education, expertise, entrepreneurship, and global mobility |
| Projects | `Projects` | Card grid of startup and course projects with badges and tech tags |
| Skills | `Skills` | Skill category cards (Frontend, Backend, Tools, Learning) |
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
