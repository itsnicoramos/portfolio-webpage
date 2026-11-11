# portfolio-webpage

My personal site, live at [itsnico.dev](https://itsnico.dev). One page, nine sections, built with Next.js and deployed on Netlify.

## The problem

The old site was a React + Vite single page with a theme toggle, a Three.js particle hero, orphaned serverless functions and project copy that had drifted away from what the repos actually say. It looked busy, and it was hard to tell which claims were still true.

## What this does instead

- **Every project claim is checked against its repository.** Copy lives in typed data files under `src/content/`, and each project lists the repo files it was verified from. Unit tests fail if contacts drift from my GitHub profile README, if a link is not https, or if an empty repo is described as anything but empty.
- **Server Components by default.** The page is prerendered to static HTML. Only four small pieces run in the browser: the header, the command palette, the copy-email button and the ProofLab replay.
- **Cinematic dark sections and deliberate light sections**, large type, and motion that respects `prefers-reduced-motion`. Scroll reveals are pure CSS (scroll-driven animations), so nothing is hidden waiting on JavaScript.
- **Keyboard first.** <kbd>⌘K</kbd> / <kbd>Ctrl K</kbd> opens a command palette that jumps to any section, project or contact.
- **No backend, no database, no auth, no third-party requests at runtime.** Fonts are self-hosted by `next/font`, icons are inline SVG.

## Quick start

Needs Node.js 20.9 or newer (Netlify builds with Node 24).

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:3000.

Production build, served the way Netlify serves it:

```bash
npm run build && npm start
```

## Checks

| Command | What it does |
|---|---|
| `npm run typecheck` | Strict TypeScript, no emit |
| `npm run lint` | ESLint with the Next.js core-web-vitals and TypeScript rules |
| `npm test` | Unit tests (Node's built-in runner, TypeScript run directly): palette search, content integrity, contacts vs the profile README |
| `npm run test:e2e` | Playwright on desktop and Pixel 7 against the production build: axe (WCAG 2.2 AA), keyboard and palette flows, security headers, SEO tags, in-page anchors, no horizontal scroll from 320px to 1440px, no console errors, no third-party requests |
| `npm run check:links` | Fetches every external link in `src/content` and fails on anything broken |
| `npm run verify` | typecheck, lint, unit tests and build in one go |

The first e2e run needs a browser: `npx playwright install chromium`.

## How it works

```
src/
  app/
    layout.tsx           fonts, metadata, JSON-LD, skip link, header, palette, footer
    page.tsx             the nine sections, in order
    globals.css          Tailwind v4 theme tokens, section themes, CSS scroll reveal, reduced motion
    opengraph-image.tsx  social card, rendered to a static PNG at build time
    robots.ts, sitemap.ts, not-found.tsx
  components/
    sections/            Hero, ProofLab, AISystems, HardwareLab, Engineering,
                         Photography, About, LearningArchive, Contact (all Server Components)
    SiteHeader.tsx       client: active-section highlight, mobile menu
    CommandPalette.tsx   client: native <dialog>, ARIA combobox + listbox, fuzzy search
    ProofLabReplay.tsx   client: replays a real ProofLab /check response with Motion
    CopyEmailButton.tsx  client: clipboard with a live-region announcement
    Icon.tsx, ui.tsx     inline SVG icons, Section, SectionHeader, links, tags, status pills
  content/               all copy and links as typed data (the only place to edit content)
  lib/fuzzy.ts           the palette's matcher, dependency-free and unit tested
  assets/                images imported through next/image
tests/
  unit/                  node --test
  e2e/                   Playwright + axe
scripts/check-links.ts
```

Content hierarchy, top to bottom:

| # | Section | Theme | Source of truth |
|---|---|---|---|
| 1 | Hero: "Curiosity, engineered." | dark | |
| 2 | ProofLab | light | [ProofLab](https://github.com/itsnicoramos/ProofLab) README |
| 3 | AI systems: ProofLab tutor harness, hardware-bringup | dark | ProofLab and [Spec-to-ship](https://github.com/itsnicoramos/Spec-to-ship) READMEs |
| 4 | Hardware lab: bench cards, the 4-DOF arm loop, ArduinoUNO | light | Spec-to-ship README, [ArduinoUNO](https://github.com/itsnicoramos/ArduinoUNO) (empty so far) |
| 5 | Engineering & CS: CyberBank | dark | [CyberBank](https://github.com/itsnicoramos/CyberBank) source and README |
| 6 | Photography | dark | `src/content/photos.ts` |
| 7 | About me | light | my own copy, `src/content/about.ts` |
| 8 | Learning archive: CSCI 162, 161, 159 (Fall 2025, VIU), 115 and more | light | course repos and READMEs |
| 9 | Contact | dark | my [GitHub profile README](https://github.com/itsnicoramos/Itsnicoramos) |

### Editing content

- **Projects:** `src/content/projects.ts`. Re-read the repo before changing a claim, and update the `sources` list.
- **Contacts:** `src/content/site.ts`, and the expected list in `tests/unit/content.test.ts`. Both must match the GitHub profile README.
- **Photos:** drop the file in `public/photography/`, then add `{ src, alt, width, height }` to `src/content/photos.ts`. Until the list has entries the section shows an honest "in progress" state.
- **Section order:** `src/app/page.tsx` and `nav` in `src/content/site.ts`.

## Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 16, App Router | Server Components by default, static prerendering, built-in image, font and metadata handling |
| Language | TypeScript, strict (plus `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`) | Content is data, so the types catch a missing field before the page does |
| Styling | Tailwind CSS v4 with CSS theme tokens | One token set, two section themes, no runtime theme toggle |
| Motion | CSS scroll-driven animations, plus Motion for one replay | CSS covers reveals for free; Motion only where sequencing matters, with its engine lazy-loaded |
| Fonts | Inter and JetBrains Mono via `next/font` | Self-hosted at build time, no layout shift, no request to Google |
| Icons | Inline SVG (Simple Icons, CC0) | No icon font, no CDN, nothing to allow in the CSP |
| Tests | Node test runner, Playwright, axe-core | Fast unit checks on content, real-browser checks on behaviour and accessibility |
| Hosting | Netlify, Next.js runtime | Auto-deploys from `main`; `next/image` goes through Netlify's image CDN |

## Security

Headers are set in `next.config.ts` so they behave the same locally and on Netlify: a CSP that allows only this origin, `frame-ancestors 'none'`, HSTS, `nosniff`, a strict referrer policy and a locked-down permissions policy. `script-src` keeps `'unsafe-inline'` because Next.js hydrates with small inline scripts; removing it would mean per-request nonces and giving up static rendering. Every external link opens in a new tab with `rel="noopener noreferrer"`.

## Deployment

Netlify auto-deploys from `main`. Settings live in `netlify.toml`:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `.next` |
| Node | 24 |

Netlify detects Next.js and adds its runtime on its own. Changes go through a pull request first.

## Status

Live and maintained. The photography gallery is built but empty until I add photos. ArduinoUNO is shown as an empty repository, because it is one.

## License

No license chosen yet. The code is mine and default copyright applies; ask before reusing it. Project descriptions quote my own repositories.
