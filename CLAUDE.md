# CLAUDE.md — Portfolio Webpage

## Project overview

Personal portfolio site for Nico Ramos, deployed on Netlify at [itsnico.dev](https://itsnico.dev). Single-page React + Vite app. No backend, no database, no UI framework. Plain CSS with custom properties; one `.jsx` + one `.css` per component folder.

---

## Stack

- React 18 + Vite 6
- Tailwind CSS v3 + plain CSS custom properties (dark-only theme, no toggle)
- Framer Motion for scroll-triggered entrance animations + Lenis for smooth scroll
- Three.js for the hero particle canvas
- Google Fonts (Inter + Playfair Display) and Font Awesome via CDN (declared in `index.html`)
- Netlify hosting (auto-deploy from `main`, build to `dist/`)

---

## File structure

```
index.html             Vite HTML entry — loads /src/main.jsx
vite.config.js         Vite config
package.json
netlify.toml           Build, headers, CSP, redirects
netlify/functions/     Serverless functions (orphaned; not wired into the React app)
public/img/            Static assets served at /img/

src/
  main.jsx             React entry
  App.jsx              Composes all sections
  App.css              Animated underline styles for nav + content links
  index.css            Global tokens (CSS custom properties, dark-only), base typography, scroll-fade keyframes
  hooks/
    useScrollFade.js   IntersectionObserver-based reveal for `.scroll-fade`
  components/
    Navbar/            Fixed nav, hamburger (no theme toggle)
    ScrollVelocity/    Framer Motion velocity-based parallax marquee
    StarBorder/        CSS conic-gradient animated border for CTA buttons
    Hero/              Three.js particle canvas + intro
    About/             4-card grid
    Projects/          Project cards (data array in component)
    Skills/            Skill category cards
    Travel/            Travel cards
    Contact/           Social links
    Footer/            Dynamic copyright year
```

---

## Theming

Dark-only. `data-theme="dark"` is hardcoded on `<html>` in `index.html`. CSS custom properties are defined on `:root` in `src/index.css`. No toggle, no localStorage theme logic.

---

## Animations

- **Framer Motion** — `whileInView` + `staggerChildren` on About, Projects, Skills sections
- **Lenis** — smooth scroll (1.2s ease), mounted in `App.jsx`, disabled on `prefers-reduced-motion`
- **StarBorder** — rotating conic-gradient border on Hero CTA buttons
- **scroll-fade** — CSS transition reveal via `useScrollFade` (IntersectionObserver adds `.visible`)

---

## Content Security Policy

Defined in `netlify.toml`. Allowed external origins:

- `cdnjs.cloudflare.com` — Font Awesome
- `fonts.googleapis.com` / `fonts.gstatic.com` — Google Fonts

If you add a new external dependency, update the CSP before deploying.

---

## Deployment

Netlify auto-deploys from `main`.

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Functions directory | `netlify/functions` |

Local: `npm run dev` for the dev server, `npm run build` to produce `dist/`, `npm run preview` to serve the build.
