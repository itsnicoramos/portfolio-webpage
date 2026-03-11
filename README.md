# Nico Ramos | Personal Portfolio Website

A personal portfolio website built from scratch using HTML5, CSS3, and vanilla JavaScript. The site is designed as a single-page application with anchor-based navigation, presenting a complete picture of my background, technical work, writing, and travel.

Live site: [itsnico.dev](https://itsnico.dev)

---

## Architecture Overview

The project is a static website with no build step or framework dependency. All content is served from a single `index.html` file, with styles isolated in `styles.css` and interactivity handled in `script.js`. A separate `/blog` directory holds individual blog post pages as standalone HTML files, keeping long-form content decoupled from the main page.

```
portfolio-webpage/
  index.html          Main single-page layout
  styles.css          All styling, including theme variables and responsive rules
  script.js           Theme toggle, scroll animations, nav behavior, Google Translate
  /blog               Individual blog post pages
  /img                Local assets (profile image)
```

**Rendering approach:** No JavaScript framework. The page renders instantly with no hydration overhead. Scroll-triggered fade animations are handled via `IntersectionObserver`. The hero section uses Three.js for a canvas-based background effect.

**Theming:** Light and dark mode are implemented using CSS custom properties scoped to a `data-theme` attribute on the root element. The active theme is persisted in `localStorage` and applied before the first paint to prevent flash.

**Responsive design:** Layout adapts across breakpoints using CSS Grid and Flexbox. Navigation collapses to a hamburger menu on mobile.

**Internationalization:** Google Translate is integrated via a custom language search widget in the footer, allowing visitors to translate the page without leaving the site.

---

## Sections

| Section | Description |
|---|---|
| Home | Hero with animated canvas background, profile image, and call-to-action buttons |
| About | Four cards covering education, technical expertise, entrepreneurship, and global mobility |
| Projects | Grid of startup projects and university course work with tech tags and live links |
| Blog | Preview of recent posts linking to standalone pages in the `/blog` directory |
| Travel | Instagram reel embeds (portrait format) with informational cards about travel interests |
| Skills | Skill cards by category plus an infinite-scroll tech logo marquee |
| Contact | Social links grouped by professional and personal context |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3, CSS custom properties |
| Scripting | Vanilla JavaScript |
| 3D / Canvas | Three.js (r128) |
| Icons | Font Awesome 6.5 |
| Fonts | Inter, IBM Plex Sans via Google Fonts |
| Hosting | Netlify (primary), GitHub Pages |

---

## Blog

Blog posts live in the `/blog` directory as individual HTML files. Each post is a self-contained page with its own layout, sharing the same stylesheet as the main site. New posts are added manually and linked from the Blog section on the main page.

---

## Travel Section

The Travel section is designed to support embedded Instagram reels in a portrait (9:16) card format. Each reel slot contains a placeholder that can be replaced with a standard Instagram embed block when content is ready. No third-party social widgets beyond the embed itself are loaded, and there are no like, comment, or share elements on the page.

---

## Local Development

No build tools required. Open `index.html` directly in a browser or serve with any static file server.

```bash
npx serve .
```

---

## Connect

**Professional**

- LinkedIn: [linkedin.com/in/nico-ramos28](https://www.linkedin.com/in/nico-ramos28)
- GitHub: [github.com/itsnicoramos](https://github.com/itsnicoramos)

**Personal and Travel**

- Instagram: [instagram.com/itsnicoramos__](https://www.instagram.com/itsnicoramos__)
- TikTok: [tiktok.com/@itsnicoramos_](https://www.tiktok.com/@itsnicoramos_)
- Threads: [threads.net/itsnicoramos__](https://threads.net/itsnicoramos__)
