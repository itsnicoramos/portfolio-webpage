# CLAUDE.md - Portfolio Webpage

## Project overview

Personal portfolio site for Nico Ramos, deployed on Netlify at [itsnico.dev](https://itsnico.dev). Single-page React + Vite app with Tailwind CSS, Framer Motion animations, and an atomic component system. Dark-only theme.

---

## Stack

- React 18 + Vite 6
- Tailwind CSS v3 + CSS custom properties (dark-only, no toggle)
- Framer Motion for entrance animations, micro-interactions, and scroll-driven effects
- Lenis for smooth scroll (1.2s, disabled on `prefers-reduced-motion`)
- Three.js for the hero particle canvas
- Google Fonts (Inter + Playfair Display) and Font Awesome via CDN (declared in `index.html`)
- Netlify hosting (auto-deploy from `main`, build to `dist/`)

---

## File structure

```
index.html             Vite HTML entry, loads /src/main.jsx
vite.config.js         Vite config
tailwind.config.js     Tailwind: custom colors, keyframes, dark mode via data-theme
postcss.config.js      PostCSS: tailwind + autoprefixer
package.json
netlify.toml           Build, headers, CSP, redirects
netlify/functions/     Serverless functions (orphaned; not wired into the React app)
public/img/            Static assets served at /img/

src/
  main.jsx             React entry
  App.jsx              Mounts Lenis, CommandPalette, and all sections
  App.css              Animated underline styles, interactivity layer
  index.css            Tailwind directives + global tokens (CSS custom properties), scroll-fade keyframes

  hooks/
    useTheme.js        Light/dark toggle with localStorage + data-theme attribute
    useScrollFade.js   IntersectionObserver-based reveal for `.scroll-fade`
    useInteractive.js  Cursor glow, scroll progress bar, hero parallax, card tilt, magnetic buttons

  components/
    Navbar/            Fixed nav with glassmorphism, hamburger, motion tap feedback on links
    ScrollVelocity/    Framer Motion velocity-based parallax marquee
    StarBorder/        CSS conic-gradient animated border for CTA buttons
    Hero/              Three.js particle canvas + BlurImage profile photo + StarBorder CTAs
    About/             BentoGrid layout with 4 cards and Framer Motion stagger
    Projects/          Project cards with skeleton loading state, badges, tech tags
    Skills/            Skill category cards with Framer Motion stagger
    Certifications/    Credential cards
    Travel/            Travel interest cards
    Contact/           Pressable social link cards
    Footer/            Dynamic copyright year
    CommandPalette/    Cmd+K keyboard navigation (fuzzy search, arrow keys, accessible)
    BentoGrid/         Asymmetric responsive grid (4-col desktop, 2-col tablet, 1-col mobile)
    ui/                Atomic design primitives
      Skeleton.jsx     Shimmer loading placeholders (text, circle, card, image)
      Skeleton.css
      BlurImage.jsx    Progressive blur-up image loading
      BlurImage.css
      Button.jsx       primary / outline / ghost variants, sm / md / lg sizes
      Card.jsx         Reusable card wrapper with hover lift and glass options
      Badge.jsx        Inline label (startup / featured / course / default)
      MicroInteraction.jsx  Pressable, FadeIn, SlideIn Framer Motion wrappers (<200ms)
      index.js         Barrel re-export of all UI primitives
```

---

## Theming

Dark-only. `data-theme="dark"` is hardcoded on `<html>` in `index.html`. CSS custom properties defined under `:root` in `src/index.css`. Tailwind's dark mode aligns via `darkMode: ['attribute', '[data-theme="dark"]']`.

---

## UX Patterns

### Perceived Speed
- Skeleton screens: shimmer placeholders for cards before content renders
- BlurImage: profile photo fades from blurred gradient to full clarity on load (no layout shift)

### Command Palette
- Cmd+K (Mac) / Ctrl+K (Windows) opens a modal with fuzzy search
- Navigates to sections, projects, or triggers actions (toggle theme, email)
- Full keyboard support: arrow keys + Enter, Escape to close
- Accessible: focus trap, role="dialog", aria-label

### Bento Box Grid
- About section uses asymmetric grid (featured cards span 2 columns)
- Responsive breakpoints: 4 cols > 1024px, 2 cols > 640px, 1 col below
- Gradient border hover effect on cards

### Micro-Interactions
- All under 200ms (spring stiffness 400, damping 17)
- Pressable: whileTap scale 0.97, whileHover scale 1.02
- FadeIn: opacity + y entrance (150ms)
- SlideIn: opacity + x entrance (180ms)
- Nav links have whileTap scale 0.95

---

## Animations

- **Framer Motion**: `whileInView` + `staggerChildren` on About, Projects, Skills sections
- **Lenis**: smooth scroll (1.2s ease), mounted in `App.jsx`, disabled on `prefers-reduced-motion`
- **StarBorder**: rotating conic-gradient border on Hero CTA buttons (accelerates on hover)
- **ScrollVelocity**: velocity-responsive parallax marquee between Hero and About
- **scroll-fade**: CSS transition reveal via `useScrollFade` (IntersectionObserver adds `.visible`)
- **Animated underlines**: CSS `scaleX` sweep on nav and content links

---

## Content Security Policy

Defined in `netlify.toml`. Allowed external origins:

- `cdnjs.cloudflare.com` - Font Awesome
- `fonts.googleapis.com` / `fonts.gstatic.com` - Google Fonts

If you add a new external dependency, update the CSP before deploying.

---

## Deployment

Netlify auto-deploys from `main`.

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Functions directory | `netlify/functions` |

Local: `npm run dev` or `npm start` for the dev server, `npm run build` to produce `dist/`, `npm run preview` to serve the build.
