# Portfolio Repo Usage Prompt

Use this prompt when working with this repository or asking an AI to modify/customize it.

---

## Context

This is a Next.js portfolio template inspired by **[Minh Pham](https://minhpham.design/)**. The design, UX patterns, and creative direction belong to Minh Pham.

## Attribution Requirement

**Always credit Minh Pham** when:
- Forking or reusing this repo
- Deploying or publishing derivative work
- Documenting or showcasing the design
- Sharing prompts or guides based on this template

Example attribution: *"UI design inspired by Minh Pham"* or *"Design by [Minh Pham](https://minhpham.design/)"*

## Tech Stack

- Next.js 15, React 18
- Framer Motion, framer-motion-3d
- Three.js, @react-three/fiber
- Plain CSS (no Tailwind)

## Key Features

- Cursor-driven text reveals (main layer + red overlay)
- Layered heading masks
- 3D Earth section
- Preloader, sound toggle
- Dark theme, minimalist aesthetic

## Where to Edit

| What | File | Notes |
|------|------|-------|
| Project titles & descriptions | `src/components/PortfolioBody.tsx` | Main layer + red layer `data-reveal` |
| Alter texts (hover descriptions) | `PortfolioBody.tsx` | Edit `<p className="mb-0 desc">` and matching `data-reveal` |
| Styles | `src/app/globals.css` | Mobile breakpoints, sections |
| Contact info | `PortfolioBody.tsx` | Email, phone, social links |
| New projects | `PortfolioBody.tsx` | Copy AI-BUDDY block in main + red layer |

## Prompt for AI Assistants

> "I'm using a Next.js portfolio repo based on Minh Pham's design. When editing content or structure, preserve the attribution to Minh Pham. The main content lives in `PortfolioBody.tsx`; alter texts need changes in both the main layer and the red layer's `data-reveal` attributes. Always credit the original creator Minh Pham (https://minhpham.design/)."

---

**Original design:** [Minh Pham](https://minhpham.design/)
