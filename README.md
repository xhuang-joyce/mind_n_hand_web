# Heads & Hands in Research — Website

Marketing / recruitment landing page for the **Heads & Hands in Research** study
(MIT DUSP, M3S Lab). Built with Next.js 14 (App Router) + Tailwind CSS +
TypeScript and exported as a fully static site for GitHub Pages.

---

## Tech stack

- **Next.js 14** (App Router, `output: 'export'` static HTML)
- **React 18** + **TypeScript 5**
- **Tailwind CSS 3**
- **Recharts** (for the `ArchetypeRadar` teaser in S2)
- **Open Sans** via `next/font/google` (weights 400, 500)

No animation libraries — the hero canvas (particles + breathing glow) and the
scroll-reveal effects are vanilla JS via `requestAnimationFrame` and
`IntersectionObserver`. `prefers-reduced-motion` is honored globally.

---

## Project layout

```
.
├── .github/workflows/deploy.yml      # GitHub Pages CI
├── public/pics/                      # Static image assets (served at /pics/*)
│   ├── background.png
│   ├── m3s_logo.png
│   ├── 2.png
│   └── 7.png
├── pics/                             # Original asset folder (kept for reference)
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout, loads Open Sans
│   │   ├── page.tsx                  # Composes S1–S6
│   │   └── globals.css               # Tailwind + reveal/hero animation utilities
│   └── components/
│       ├── ArchetypeRadar.tsx        # Verbatim from the survey app
│       ├── HeroCanvas.tsx            # Layer 1+2 — particles + breathing glow
│       ├── HeroSection.tsx           # S1
│       ├── DiscoverSection.tsx       # S2
│       ├── HowItWorksSection.tsx     # S3
│       ├── AboutSection.tsx          # S4
│       ├── FinalCTASection.tsx       # S5
│       ├── Footer.tsx                # S6
│       └── Reveal.tsx                # IntersectionObserver scroll-in helper
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── package.json
```

All asset paths are relative and prefixed with `process.env.NEXT_PUBLIC_BASE_PATH`
so the same build works at a domain root *and* under a GitHub Pages project URL.

---

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To preview the production static export locally:

```bash
npm run build
npx serve out
```

---

## Deployment — GitHub Pages

1. Push this repo to GitHub.
2. In the repo settings → **Pages** → **Build and deployment**, set the source
   to **GitHub Actions**.
3. Push to `main` (or run the workflow manually). The workflow at
   [.github/workflows/deploy.yml](./.github/workflows/deploy.yml) will:
   - install deps with `npm ci`
   - detect whether this is a user/org page (`<owner>.github.io`) or a project
     page (`<owner>.github.io/<repo>`) and set `NEXT_PUBLIC_BASE_PATH`
     accordingly
   - run `npm run build` (Next.js writes the static site to `./out`)
   - drop a `.nojekyll` so GitHub Pages serves `_next/` assets correctly
   - upload and deploy the artifact

### Custom domain

If you point a custom domain at this site, leave `NEXT_PUBLIC_BASE_PATH`
unset (the workflow auto-detects this for `<owner>.github.io` repos; for a CNAME
on a project repo, set the env var to an empty string in the workflow).

### Manual / other hosts

The static output in `./out` is portable — drop it on Netlify, Vercel
(static export), Cloudflare Pages, S3 + CloudFront, or any plain web host.

---

## TODOs left in the code

Search for `TODO:` to find them. As of writing:

- `// TODO: replace '#' with live survey URL` — in [HeroSection.tsx](./src/components/HeroSection.tsx) and [FinalCTASection.tsx](./src/components/FinalCTASection.tsx)
- `// TODO: confirm researcher contact email` — same two files
- `// TODO: confirm final deployment domain for og:url and canonical` — in [layout.tsx](./src/app/layout.tsx)
- `// TODO: project lead to confirm m3s_logo.png placement / sizing` — in [HeroSection.tsx](./src/components/HeroSection.tsx) and [AboutSection.tsx](./src/components/AboutSection.tsx)
- `// TODO: project lead to confirm which archetype image (2.png or 7.png) to use in S2` — in [DiscoverSection.tsx](./src/components/DiscoverSection.tsx)

