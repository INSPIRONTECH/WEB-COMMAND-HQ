<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!--  WEB-COMMAND-HQ · INSPIRON TECH · README v2026.1                      -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

<div align="center">

```
██╗███╗   ██╗███████╗██████╗ ██╗██████╗  ██████╗ ███╗   ██╗
██║████╗  ██║██╔════╝██╔══██╗██║██╔══██╗██╔═══██╗████╗  ██║
██║██╔██╗ ██║███████╗██████╔╝██║██████╔╝██║   ██║██╔██╗ ██║
██║██║╚██╗██║╚════██║██╔═══╝ ██║██╔══██╗██║   ██║██║╚██╗██║
██║██║ ╚████║███████║██║     ██║██║  ██║╚██████╔╝██║ ╚████║
╚═╝╚═╝  ╚═══╝╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝

████████╗███████╗ ██████╗██╗  ██╗
╚══██╔══╝██╔════╝██╔════╝██║  ██║
   ██║   █████╗  ██║     ███████║
   ██║   ██╔══╝  ██║     ██╔══██║
   ██║   ███████╗╚██████╗██║  ██║
   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝
```

**"I do not install software. I architect logic."**

[![Status](https://img.shields.io/badge/STATUS-LIVE-00D2FF?style=for-the-badge&labelColor=010409)](https://inspiron.tech)
[![Framework](https://img.shields.io/badge/Next.js-15.1-white?style=for-the-badge&logo=next.js&labelColor=010409)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&labelColor=010409)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&labelColor=010409)](https://typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38BDF8?style=for-the-badge&logo=tailwindcss&labelColor=010409)](https://tailwindcss.com)
[![Deploy](https://img.shields.io/badge/Vercel-DEPLOYED-FFD700?style=for-the-badge&logo=vercel&labelColor=010409)](https://vercel.com/inspirontech)

**Architect:** MD ABU HASAN · Official Manager.io Partner · DHAKA, BD

</div>

---

## 01 · Overview

**WEB-COMMAND-HQ** is the production codebase for [INSPIRON TECH](https://inspiron.tech) — Bangladesh's only listed Manager.io advisor. This repository is not a template. It is a precision-engineered web system built to convert institutional authority into verifiable client outcomes.

Every component, route, and design token follows the **n-Law Protocol** — a set of geometric and operational rules governing pixel integrity, brand consistency, and zero-approximation logic.

---

## 02 · Technology Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | `^15.1.0` |
| UI Runtime | React | `^19.0.0` |
| Language | TypeScript | `^5` |
| Styling | Tailwind CSS | `^3.4.1` |
| Animation | Framer Motion | `^11.0.24` |
| Icons | Lucide React | `^0.363.0` |
| Charts | Chart.js + react-chartjs-2 | `^4.5.1` / `^5.3.1` |
| Screenshot | html2canvas | `^1.4.1` |
| Class Utility | clsx + tailwind-merge | `^2.1.0` / `^2.2.2` |
| Deployment | Vercel | — |

---

## 03 · Repository Structure

```
WEB-COMMAND-HQ/
│
├── app/
│   ├── (main)/                      # Route group — GlobalHeader + GlobalFooter
│   │   ├── layout.tsx               # Shell: GlobalHeader + main + GlobalFooter
│   │   ├── page.tsx                 # / · Command Center (Home)
│   │   ├── about/                   # /about
│   │   ├── audit-vault/             # /audit-vault · Gated Sales Asset
│   │   ├── case-studies/            # /case-studies
│   │   ├── client-feedback/         # /client-feedback
│   │   ├── contact/                 # /contact
│   │   ├── n-law/                   # /n-law · Brand Geometry Lab
│   │   ├── precision-audit/         # /precision-audit · Evidence Vault
│   │   ├── pricing/                 # /pricing
│   │   ├── privacy/                 # /privacy
│   │   └── services/                # /services
│   │
│   ├── api/                         # API Routes
│   ├── globals.css                  # Global styles + custom utility classes
│   ├── icon.png                     # System favicon (source of truth)
│   └── layout.tsx                   # Root layout (SEO metadata)
│
├── components/
│   ├── Branding/
│   │   └── RefinedLogo.tsx          # ⚠ SINGLE SOURCE OF TRUTH for the logo
│   ├── Footer/
│   │   └── GlobalFooter.tsx         # Site-wide footer
│   ├── Navigation/
│   │   ├── GlobalHeader.tsx         # Desktop nav + mobile hamburger trigger
│   │   └── TerminalDatapad.tsx      # Mobile drawer (85vw slide-in)
│   ├── InstitutionalHero.tsx        # Home page hero section
│   └── ui/                          # Primitive UI components
│
├── public/
│   └── fonts/                       # Neo Sans Pro (local, self-hosted)
│
├── docs/
│   └── THE_n_LAW.md                 # Geometric & operational constitution
│
├── tailwind.config.ts               # Brand design tokens
├── tsconfig.json
└── package.json
```

---

## 04 · Key Routes

| Route | Classification | Purpose |
|---|---|---|
| `/` | **Public** | Command Center — primary conversion surface |
| `/services` | **Public** | Service protocol catalogue |
| `/case-studies` | **Public** | Evidence-based case library |
| `/pricing` | **Public** | Pricing matrix |
| `/about` | **Public** | Founder & institutional bio |
| `/contact` | **Public** | Contact + consultation intake |
| `/n-law` | **Public** | Brand geometry + operational law documentation |
| `/precision-audit` | **Public** | Case study evidence vault |
| `/audit-vault` | **Public** | Gated sales asset |
| `/client-feedback` | **Public** | Client testimonial archive |
| `/privacy` | **Legal** | Privacy protocol |

---

## 05 · Brand Design Tokens

Defined in `tailwind.config.ts`. **Never use raw hex. Always reference tokens.**

```ts
// tailwind.config.ts — Kinetic Palette · Sovereign Brand Manual v1.2.0
colors: {
  "action-gold":         "#FFD700",   // Primary Accent — Gold Indicator Node
  "electric-cyan":       "#00D2FF",   // Core Brand — Operational Signal
  "deep-navy-black":     "#010409",   // Canvas Foundation
  "institutional-white": "#FFFFFF",   // Typographic Base
  // Legacy aliases (backward compat only)
  navy: "#002147",
  gold: "#FFD700",
  aqua: "#00D2FF",
}
```

**Typography:** `Neo Sans Pro` → `font-institutional` (self-hosted, `/public/fonts/`)

---

## 06 · Component Architecture

### `RefinedLogo.tsx` — The Single Source of Truth

```
components/Branding/RefinedLogo.tsx
```

This is the **only** component authorised to render the INSPIRON TECH logotype. Do not inline SVG logo paths anywhere else. Always import `<RefinedLogo />`.

### `GlobalHeader.tsx` + `TerminalDatapad.tsx`

- `GlobalHeader` owns desktop navigation and the mobile hamburger button.
- `TerminalDatapad` is the mobile drawer (85vw slide-in from left). It lives *inside* `GlobalHeader` — not in the layout.
- `MobileCommandMenu.tsx` is **deprecated** — do not use, pending deletion.

### Route Group `app/(main)/`

All public routes use this group. The layout wraps every child with `<GlobalHeader />` + `<main className="pt-24">` + `<GlobalFooter />`.

---

## 07 · Local Development

```bash
# 1. Clone
git clone https://github.com/INSPIRON-TECH-BD/WEB-COMMAND-HQ.git
cd WEB-COMMAND-HQ

# 2. Install
npm install

# 3. Dev server
npm run dev
# → http://localhost:3000

# 4. Build + start
npm run build
npm run start

# 5. Lint
npm run lint
```

> **Fonts:** Neo Sans Pro is self-hosted in `public/fonts/`. Ensure the files are present before running a production build.

---

## 08 · Deployment

Auto-deployed via **Vercel** on every push to `main`.

| Environment | URL |
|---|---|
| Production | [inspiron.tech](https://inspiron.tech) |
| Dev | `localhost:3000` |

No environment variables required for baseline operation. API routes (if active) may require `.env.local` — see `app/api/` for specifics.

---

## 09 · The n-Law Protocol

The **n-Law** is INSPIRON TECH's operational and geometric constitution. Every design and engineering decision is measured against it. Full text: `docs/THE_n_LAW.md`.

| Law | Title | Principle |
|---|---|---|
| **01** | Zero Approximation | No manual entry without systematic audit. Discrepancy > 0.01% = re-verify. |
| **02** | Pure Vectoring | Brand icon is SVG-only for institutional assets. No raster exports. |
| **03** | No Silicone Solutions | Every implementation is a sovereign client asset. Zero vendor lock-in. |
| **04** | Persistent Audit | Every automated workflow has a logging node. Root cause identifiable in < 120s. |

**Logo Geometry Lock:** `viewBox="0 0 358.846 350.3"` · Golden Dot anchored at `cx="321.346" cy="37.5" r="37.5"` · Vertical spine locked at `X = 321.346` · Tolerance `±0.001px`.

---

## 10 · Commit Protocol

```bash
# Format: type(scope): message
feat(services):    # New feature on services page
fix(mobile):       # Mobile layout fix
fix(n-law):        # n-law page correction
docs(readme):      # Documentation update
chore(deps):       # Dependency update
refactor(nav):     # Navigation refactor
```

---

## 11 · Contact

| Channel | Detail |
|---|---|
| **WhatsApp** | [+880 1719-300849](https://wa.me/8801719300849) |
| **Upwork** | [upwork.com/freelancers/~011085e2a7cde3f437](https://www.upwork.com/freelancers/~011085e2a7cde3f437) |
| **Manager.io** | [manager.io/advisors](https://www.manager.io/advisors) |

---

<div align="center">

```
© 2026 INSPIRON TECH · ALL LOGIC ARCHITECTED IN DHAKA, BD
OFFICIAL MANAGER.IO PARTNER · UTC+06
```

</div>
