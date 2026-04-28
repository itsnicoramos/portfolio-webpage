# CLAUDE.md — Portfolio Webpage

## Project overview

Personal portfolio site for Nico Ramos, deployed on Netlify at [itsnico.dev](https://itsnico.dev). Single-page React + Vite app. No backend, no database, no UI framework. Plain CSS with custom properties; one `.jsx` + one `.css` per component folder.

---

## Stack

- React 18 + Vite 6
- Plain CSS (custom properties drive light/dark themes)
- Three.js for the hero particle canvas
- Google Fonts and Font Awesome via CDN (declared in `index.html`)
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
  App.css              Cursor glow, scroll-progress bar, card spotlight, magnetic button + animated underline styles
  index.css            Global tokens (CSS custom properties), base typography, scroll-fade keyframes
  hooks/
    useTheme.js        Light/dark toggle, persisted to localStorage
    useScrollFade.js   IntersectionObserver-based reveal for `.scroll-fade`
    useInteractive.js  Cursor glow, scroll progress, hero parallax, project-card tilt + spotlight, magnetic buttons
  components/
    Navbar/            Fixed nav, theme toggle, hamburger
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

`data-theme="light" | "dark"` on `<html>` switches CSS custom properties defined in `src/index.css`. Theme is read from `localStorage` and applied by an inline script in `index.html` before first paint to avoid FOUC.

---

## Interactivity

`useInteractive` (called from `App.jsx`) wires up everything in one rAF loop and one set of listeners:

- Cursor glow — fixed `.cursor-glow` element follows the pointer (mix-blend-mode: lighten)
- Scroll progress bar — top-fixed `.scroll-progress` width tracks scroll percentage
- Hero parallax — translates `.hero-content` slightly with scroll
- Project card tilt — `mousemove`-driven rotateX/rotateY plus a CSS spotlight via `--mx` / `--my`
- Magnetic buttons — `.btn` translates toward the cursor on hover

All effects are skipped when `prefers-reduced-motion: reduce` or `(hover: none)` (touch).

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
