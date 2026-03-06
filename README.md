# Personal Portfolio

A modern portfolio website built with **Next.js 15**, **React 18**, **Framer Motion**, and **Three.js**. Features cursor-driven reveals, layered text effects, 3D Earth, and a minimalist dark aesthetic.

## Tech Stack

- **Framework:** Next.js 15
- **UI:** React 18
- **Animation:** Framer Motion, framer-motion-3d
- **3D:** Three.js, @react-three/fiber
- **Styling:** CSS (globals.css)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles, responsive tweaks
│   ├── layout.js        # Root layout, fonts
│   └── page.js          # Home page (renders PortfolioBody)
├── components/
│   ├── PortfolioBody.tsx    # Main content: hero, projects, experience, contact
│   ├── Loader.tsx           # Preloader
│   ├── ShopPOSAnimation.tsx # Shop POS section animation
│   ├── SoundToggle.tsx      # Sound on/off
│   ├── Earth/               # 3D Earth (Three.js)
│   └── CursorProvider.tsx   # Custom cursor, Lenis, masking
```

## Customization

### Alter Texts (Project Descriptions on Cursor Hover)

Each project shows a description when the cursor hovers. To edit:

1. **Main layer** – `src/components/PortfolioBody.tsx` – find the project block (e.g. `{/* ——— PROJECT 3: AI-BUDDY ——— */}`) and update the `<p className="mb-0 desc">` text.
2. **Red layer** – Same file, search for the project in the red layer section (e.g. `layer__red`, `client__red`). Update both `data-reveal="..."` values to match.

Keep main layer and red layer text **identical**.

### Adding a New Project

1. Copy an existing project block (e.g. AI-BUDDY) in the main layer.
2. Copy the same project block in the red layer.
3. Update title, description, and `data-reveal` values.

### Contact Info

Edit email, phone, and social links in `PortfolioBody.tsx` (search for `contact_info`, `sami.vh`, etc.).

## Attribution

This portfolio's design, UX patterns, and creative direction are inspired by **[Minh Pham](https://minhpham.design/)**. Cursor reveals, layered text effects, and layout structure are derived from his work. Please credit Minh Pham when using or forking this template.

---

Built with inspiration from Minh Pham's portfolio.
