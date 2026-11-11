# CLAUDE.md - Portfolio Webpage

## Project overview

Personal portfolio for Nico Ramos, deployed on Netlify at [itsnico.dev](https://itsnico.dev). A single-page Next.js App Router site in strict TypeScript and Tailwind CSS v4. Cinematic dark sections alternate with deliberate light sections; there is no theme toggle. See README.md for the full architecture.

---

## Stack

- Next.js 16 (App Router), React 19, TypeScript strict
- Tailwind CSS v4 (`@import 'tailwindcss'` + `@theme` tokens in `src/app/globals.css`)
- Motion (`motion/react`) only in `ProofLabReplay.tsx`, with features lazy-loaded
- CSS scroll-driven animations (`.reveal`) for scroll reveals; no JS needed
- `next/font` (Inter, JetBrains Mono), self-hosted; icons are inline SVG
- Netlify hosting via its Next.js runtime (publish `.next`)

---

## Rules for changes

- **Server Components by default.** Only `SiteHeader`, `CommandPalette`, `ProofLabReplay` and `CopyEmailButton` are client components. Keep it that way unless interactivity requires otherwise.
- **Content lives in `src/content/`.** Never hard-code project claims in components.
- **Verify claims against the repo** before editing a project entry, and update its `sources` list. Do not invent features, stats, status or handles.
- **Contacts come from the GitHub profile README** (`itsnicoramos/Itsnicoramos`). `tests/unit/content.test.ts` pins the exact list.
- **No em dashes** in copy (a unit test enforces this for `src/content`).
- **Respect `prefers-reduced-motion`.** New animations go behind `@media (prefers-reduced-motion: no-preference)` or `useReducedMotion`.
- **No third-party runtime requests.** A new external origin needs a CSP change in `next.config.ts` and a reason.
- **Unit tests import with `.ts` extensions** (Node runs them with type stripping), so content modules must import each other with explicit `.ts` paths and use type-only imports for anything else.

---

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server on :3000 |
| `npm run build` / `npm start` | Production build and server |
| `npm run verify` | typecheck, lint, unit tests, build |
| `npm run test:e2e` | Playwright + axe (builds and serves on :3200) |
| `npm run check:links` | Fetch every external link in `src/content` |

---

## Claude Code tooling

`.claude/commands/ceo.md` defines a `/ceo` slash command, a gstack-inspired
CEO/founder-mode plan reviewer. Typing `/ceo <plan or idea>` runs a premise
challenge, six forcing questions, a four-mode scope review (Expansion / Selective
/ Hold / Reduction), and an 11-section rigor pass (architecture, errors, security,
edge cases, code quality, tests, performance, observability, deployment,
trajectory, design/UX), gating every change behind `AskUserQuestion`.

It is **advisory only**: it makes no code changes and is not part of the build
or the deployed site. Inspired by [garrytan/gstack](https://github.com/garrytan/gstack);
independently authored, not forked.

---

## Deployment

Netlify auto-deploys from `main`. Work on a feature branch and open a pull request for approval before merging.

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `.next` |
| Node | 24 (`netlify.toml`) |
