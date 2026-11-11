# itsnico.dev — Next.js Portfolio Redesign Specification

## Objective
Rebuild the personal portfolio at https://itsnico.dev as an original, premium, product-storytelling website. Use the existing repository as a source for current assets and verify project claims against https://github.com/itsnicoramos. This document is the migration brief; it is not evidence that the migration is complete.

## Stack and migration
- Replace React + Vite tooling with **Next.js App Router**, **TypeScript (strict)**, **TSX**, and **Tailwind CSS**.
- React remains the rendering foundation of Next.js; do not preserve the old Vite application as an embedded wrapper.
- **No Framer Motion**. Remove the Framer Motion dependency and usages.
- Host on **Netlify**, retaining the current production domain and verifying compatibility with the Netlify Next.js adapter. Do not add a new database, authentication, or backend without a demonstrated need.
- Preserve usable original media and verified links, migrate content intentionally, retire stale/dist assets and obsolete JSX/CSS once replaced.
- Remove user-selectable dark/light theme toggles, theme provider/hooks, and obsolete theme attributes. Use intentional section-specific dark and light palettes.

## Creative direction
Original design inspired by premium technology storytelling: cinematic dark opening, alternating dark and light scenes, oversized expressive type, restrained editorial copy, broad whitespace, product-focused visuals, and excellent mobile layouts. Do not copy Apple's assets, trademarks, interface, animation code, exact layouts, or imagery.

### Motion language (do not use Framer Motion)
Build high-quality, original scroll-driven animations using progressively enhanced web platform APIs:
- Native CSS transitions, transforms and keyframes for microinteractions; use CSS scroll-driven animations where supported, with appropriate fallbacks.
- IntersectionObserver for viewport reveals; use requestAnimationFrame sparingly for effects truly requiring frame updates.
- Optional GSAP + ScrollTrigger only for complex pinned/scroll-scrubbed sequences where native solutions are impractical; only load for the client-side scene that needs it. Do not use Apple's animation code or attempt to exactly replicate its website.
- Typical effects: hero typography reveal, sticky product chapters, image scale/parallax with controlled movement, gentle depth changes and soft crossfades. Scroll should remain usable and never be hijacked.
- Support prefers-reduced-motion: reduce by disabling transforms, parallax, pinning, and scroll-scrubbing while keeping all content accessible and visible.
- Avoid expensive compositing, long main-thread scripts, CLS, and scroll-jank. Test on real mobile sizes.

## Content and routes
1. Home hero: **Curiosity, engineered.** Explain interests in intelligent systems and engineering, with meaningful calls to action.
2. ProofLab: featured mathematics learning and tutor project, based on the **current** README/source. Do not describe unverified live features or claim the AI grades answers when a deterministic checker does.
3. AI systems: ChainMind and other verified AI/agent repositories. Differentiate prototypes from shipped features.
4. Hardware lab: DUM-E/Arduino and Spec-to-ship; distinguish hardware goals from tested bench results.
5. Engineering projects: CyberBank and selected relevant repositories, based on current code.
6. Photography: real user-provided photography only; no invented photos or AI-generated project screenshots passed off as authentic.
7. About: professional biography, plus a compact humanizing fun-facts block.
8. Learning archive: technical notes and verified links, only if substantive content exists.
9. Contact: primary professional contacts and secondary social media from the GitHub profile README.

Use /projects/[slug] for detailed stories when actual material supports them; concise alternatives otherwise.

## About Me — proposed copy
### Curiosity Started It All.
My journey into technology began in 2011, at age 13, when I first started learning programming. What started as curiosity about how computers and software work developed into a lasting interest in engineering and problem-solving.

I am a university student studying Computer Science and exploring the intersection of software engineering, artificial intelligence, mathematics, and chemistry. **Confirm any formally declared Chemistry minor before stating it as a credential.**

The public release of ChatGPT in 2022 sharpened my interest in large language models, autonomous agents, and practical AI engineering. Outside coursework, I build experimental tools for mathematics learning, agent workflows, automation, and robotics. These projects help me turn unfamiliar concepts into working systems and develop technical judgment.

I value learning fundamentals, questioning assumptions, and making things that can be tested and improved. Outside engineering, I enjoy photography and documenting what I learn.

### Beyond Engineering
My relationship with mathematical proofs is complicated. Working through that frustration helped inspire ProofLab, an experiment in making mathematics practice more approachable.

### A Little Chemistry Humor
Elements **35** and **56** are bromine (**Br**) and barium (**Ba**): **BrBa**. A little humor belongs in science, too.

This About copy must not overstate experience or qualifications; confirm academic program/claims with the site owner before publishing.

## Contact — source of truth: GitHub profile README
- Primary: [Email](mailto:itsnicoramos@gmail.com), [GitHub](https://github.com/itsnicoramos), [LinkedIn](https://www.linkedin.com/in/nico-ramos28)
- Secondary: [Instagram](https://www.instagram.com/itsnicoramos__/), [TikTok](https://www.tiktok.com/@itsnicoramos_), [Second TikTok](https://www.tiktok.com/@sirnico__), [Threads](https://www.threads.net/itsnicoramos__/)
- Do not include additional X, forms, or social accounts solely because they occur in older site source. Verify destination availability and current ownership before publishing.
- No new form backend. Use accessible text links, visible focus states, appropriate external-link handling.

## Engineering and quality gates
- Next.js App Router metadata, canonical URL, descriptive titles, OG/Twitter previews, sitemap and robots as appropriate.
- Semantic section structure, keyboard-operable navigation, skip link, color contrast, focus management, accessible image alt text.
- Next.js optimized media and explicit image dimensions; responsive layouts, sensible mobile motion budget, no fake project imagery/metrics.
- Strict TypeScript, lint, build, link check, dependency audit, reduced-motion test and accessible-mobile review.
- Check for stale and insecure Netlify functions/API routes currently under `netlify/functions/`; remove unused public endpoints as part of migration only after validating that nothing depends on them. Avoid exposing keys or over-broad CORS.
- Verify deployment mode and Netlify-specific configuration for Next.js. Existing `netlify.toml` currently describes a Vite build and custom functions, and must be deliberately migrated.

## Multi-agent execution and review
1. Claude: audit repository and produce route map, verified content inventory, design system, and UX/motion specification.
2. Codex: implement complete Next.js/TSX migration on this feature branch, using repository assets and building reusable components.
3. Independent reviewer: inspect copy against repos, check reduced motion, keyboard navigation, mobile performance, link integrity, dependencies, and security.
4. Run checks, record actual results, open a PR with screenshots and migration risks. **Do not merge to main or deploy without explicit approval.**

## Definition of done
A coherent, original, accessible, verified GitHub-based portfolio; Vite and Framer Motion removed; Next.js TSX running on Netlify; no theme toggle; complete motion fallbacks; genuine photography and project evidence; clean independent review.
