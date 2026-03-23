Reading break isn't a vacation for me. It's a reset. I'm using it to move my startup forward without letting it mess up my programming + math grind.

This week I've been experimenting with **Claude Opus 4.6** as a "pair builder" for front end work. Not in a "copy-paste and pray" way. More like: I write the product intent, it helps me scaffold, refactor, and unblock decisions so I can ship faster.

And yeah… it made my jaw drop a couple times.

## What surprised me (in a good way)

The win wasn't just code generation. It was how well it handled the _thinking_ part of front end:

- It can take a messy idea and turn it into a clean UI plan: sections, states, empty/loading cases, and what the user actually sees.
- It's strong at refactoring. When my component starts turning into spaghetti, it can split it into something readable and reusable.
- It catches UI logic issues early, like double-submits, missing error states, or "this will flash on slow connections."
- It actually understands the codebase. Not just the file you paste, but the context around it. It can follow the data flow, spot how components connect, and give suggestions that fit the existing structure instead of fighting it.

## Plot twist: it helped with backend too

I didn't expect this part to matter as much, but it did.

Claude helped me **draft** the "glue" layer by generating serverless function code so the UI can call real services without me building a whole backend from scratch.

In my setup that meant:

- A Vercel-style serverless endpoint that receives requests from the client
- Input validation + basic guardrails (so the function doesn't accept nonsense)
- Calling Firebase for the actual work (auth, database, whatever service layer I need)
- Returning a clean response back to the client

This is the difference between "a nice looking site" and "a product that actually behaves." That bridge is where I usually lose time, and it helped me move through it faster.

## It can actually architect, not just code

What I respect the most: it doesn't only spit out components. It can think in systems.

When I asked for help, it proposed architecture choices that felt founder-friendly:

- Where state should live so the app doesn't become fragile
- How to structure API routes so it stays clean as features grow
- How to keep secrets off the client and avoid obvious security mistakes
- A file structure that doesn't collapse the moment you add version 2 features

It felt less like "generate a page" and more like "help me build something I can keep shipping on."

## The real lesson: prompts matter more than any model

When I wrote a clear spec like: _"build a landing page with a hero, 3 feature cards, pricing, and a waitlist form. Use a clean component structure. Keep it minimal. Explain file structure, state, and edge cases."_ the output was instantly better.

So now my workflow is:

1. Write the request like a product spec
2. Ask for a component breakdown first
3. Generate the code
4. Ask for a cleanup/refactor pass

## What it's not doing for me

It won't replace taste. If I don't know what the product should feel like, it'll guess. And I still review everything because AI can be confident and wrong in subtle ways.

## How I'm using it without getting lazy

I'm using Claude to speed up execution, but I'm still forcing myself to understand the structure, props, state, and data flow. The goal is momentum, not dependency.

## What I'm doing next

I'm going to keep using it for:

- UI scaffolding
- Component refactors
- Serverless "glue" functions for real integrations
- Copy tweaks and micro-interactions

But the goal stays the same: ship clean, readable code that I actually understand.

Honestly, I think I found an AI tool that actually works for me: **Claude Opus 4.6**.

---

**Mini takeaway:** Claude helped me move faster, but I still had to make product decisions, validate inputs, and keep secrets on the server. The model is a multiplier, not a replacement. [Back to the blog](./).
