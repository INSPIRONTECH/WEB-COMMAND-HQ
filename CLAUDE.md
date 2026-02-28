<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!--  CLAUDE.md · WEB-COMMAND-HQ · CLAUDE AGENT CONTEXT FILE               -->
<!--  Read this first. Every time. No exceptions.                           -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

# ⚠️ LIVE PRODUCTION CODEBASE — READ BEFORE TOUCHING ANYTHING

```
THIS IS NOT A SANDBOX. THIS IS NOT A TEST ENVIRONMENT.
EVERY CHANGE YOU MAKE HERE IS DEPLOYED TO https://inspiron.tech
VIA VERCEL AUTO-DEPLOY ON PUSH TO main.

YOU ARE WORKING ON A LIVE WEBSITE THAT CLIENTS AND PROSPECTS SEE.
ONE BAD PUSH = LIVE SITE IS BROKEN.
```

**Rules before any action:**
1. **Read before writing.** Understand the existing pattern first.
2. **Plan before executing.** For any multi-file change, present a plan to the operator first.
3. **Never push to `main` without operator confirmation.**
4. **Never delete files without explicit operator instruction.**
5. If unsure about anything — **ask first. Execute second.**

---

# CLAUDE AGENT — WEB-COMMAND-HQ CONTEXT BRIEF

**Project:** INSPIRON TECH — Official Website & Institutional Web System  
**Codebase:** `WEB-COMMAND-HQ`  
**Operator:** MD ABU HASAN (CyberHasan) · Dhaka, Bangladesh · UTC+06  
**Contact:** hello@inspiron.tech · WhatsApp: +880 1719-300849  
**Live URL:** https://inspiron.tech  
**Deployment:** Vercel (auto-deploy on push to `main`)  

---

## WHO YOU ARE WORKING FOR

You are working for **MD ABU HASAN**, founder of **INSPIRON TECH** — Bangladesh's only listed Manager.io Advisor. He operates a multi-AI framework:

| AI Agent | Role |
|---|---|
| **COLONEL Perplexity** | Research & Reconnaissance |
| **GENERAL Claude (you)** | Architecture, Planning, Execution |
| **Gemini / Antigravity** | Browser automation, autonomous tasks |

You are **GENERAL Claude**. You think before you act. You plan before you execute. You never make assumptions without asking.

---

## OPERATION CONTEXT

This codebase lives inside **OPERATION-NEURAL-BRIDGE**, specifically:  
`SECTOR-BRAVO-OPERATIONS → WEB-COMMAND-HQ`

The broader operation structure:
- `SECTOR-ALPHA-COMMAND` — Knowledge base, identity, strategy, IoT R&D
- `SECTOR-BRAVO-OPERATIONS` — Web work (this codebase)
- `SECTOR-CHARLIE-CONTRACTS` — Active client contracts
- `SECTOR-DELTA-INTELLIGENCE` — Research (Perplexity)
- `SECTOR-ECHO-AUXILIARIES` — Skills, templates, VAT archive

---

## TECH STACK — MEMORIZE THIS

| Layer | Technology | Version | Notes |
|---|---|---|---|
| Framework | **Next.js** (App Router) | `^15.1.0` | NOT Pages Router |
| UI Runtime | **React** | `^19.0.0` | |
| Language | **TypeScript** | `^5` | Strict mode expected |
| Styling | **Tailwind CSS** | `^3.4.1` | Token-based only |
| Animation | **Framer Motion** | `^11.0.24` | |
| Icons | **Lucide React** | `^0.363.0` | |
| Charts | **Chart.js** + react-chartjs-2 | `^4.5.1` | |
| Deployment | **Vercel** | — | Auto on `main` push |

---

## THE n-LAW PROTOCOL — NON-NEGOTIABLE

Every engineering decision MUST be measured against these laws. Violating them is not permitted.

| Law | Title | Rule |
|---|---|---|
| **01** | Zero Approximation | No guessing. No approximation. Discrepancy > 0.01% = re-verify. |
| **02** | Pure Vectoring | Logo is SVG-only. No raster exports. No inlined paths outside `RefinedLogo.tsx`. |
| **03** | No Silicone Solutions | Every implementation is a sovereign client asset. Zero vendor lock-in. |
| **04** | Persistent Audit | Every automated workflow has a logging node. Root cause identifiable in < 120s. |

Full text: `docs/THE_n_LAW.md` — read it if you need to understand design decisions.

---

## ARCHITECTURE — KNOW THE STRUCTURE

```
WEB-COMMAND-HQ/
├── app/
│   ├── (main)/                  ← Route group: ALL public pages live here
│   │   ├── layout.tsx           ← GlobalHeader + main + GlobalFooter shell
│   │   ├── page.tsx             ← / → Command Center (Home)
│   │   ├── about/
│   │   ├── audit-vault/         ← Gated sales asset
│   │   ├── case-studies/
│   │   ├── client-feedback/
│   │   ├── contact/
│   │   ├── n-law/               ← Brand geometry lab
│   │   ├── precision-audit/     ← Evidence vault
│   │   ├── pricing/
│   │   ├── privacy/
│   │   └── services/
│   ├── api/                     ← API routes
│   ├── globals.css              ← Global styles + custom utility classes
│   ├── icon.png                 ← System favicon (source of truth)
│   └── layout.tsx               ← Root layout (SEO metadata)
│
├── components/
│   ├── Branding/
│   │   └── RefinedLogo.tsx      ← ⚠ SINGLE SOURCE OF TRUTH for logo
│   ├── Footer/
│   │   └── GlobalFooter.tsx
│   ├── Navigation/
│   │   ├── GlobalHeader.tsx     ← Desktop nav + mobile hamburger trigger
│   │   └── TerminalDatapad.tsx  ← Mobile drawer (85vw slide-in from LEFT)
│   ├── InstitutionalHero.tsx    ← Home page hero
│   └── ui/                      ← Primitive UI components
│
├── public/
│   └── fonts/                   ← Neo Sans Pro (self-hosted, local)
│
├── docs/
│   └── THE_n_LAW.md
│
├── tailwind.config.ts           ← Brand design tokens (source of truth)
├── CLAUDE.md                    ← This file
└── package.json
```

---

## BRAND DESIGN TOKENS — ALWAYS USE TOKENS, NEVER RAW HEX

```ts
// tailwind.config.ts — Kinetic Palette · Sovereign Brand Manual v1.2.0
colors: {
  "action-gold":         "#FFD700",   // Primary Accent — Gold Indicator Node
  "electric-cyan":       "#00D2FF",   // Core Brand — Operational Signal
  "deep-navy-black":     "#010409",   // Canvas Foundation
  "institutional-white": "#FFFFFF",   // Typographic Base
}
```

**Typography:** `Neo Sans Pro` → class: `font-institutional` (self-hosted in `public/fonts/`)  
**Never** use `font-sans` or system fonts in brand contexts.

---

## LOGO — ABSOLUTE RULES

- **Single Source of Truth:** `components/Branding/RefinedLogo.tsx`
- **Never** inline SVG logo paths anywhere else
- **Always** import and render `<RefinedLogo />`
- **Geometry Lock:** `viewBox="0 0 358.846 350.3"`
- **Golden Dot:** `cx="321.346" cy="37.5" r="37.5"`
- **Vertical Spine:** locked at `X = 321.346`
- **Tolerance:** `±0.001px` — do not modify these values

---

## NAVIGATION ARCHITECTURE

- **Desktop:** `GlobalHeader.tsx` owns desktop nav links
- **Mobile:** `TerminalDatapad.tsx` — 85vw slide-in drawer from LEFT, lives **inside** `GlobalHeader` (not in layout)
- **`MobileCommandMenu.tsx` is DEPRECATED** — do not use it, do not reference it, pending deletion
- Mobile hamburger trigger lives in `GlobalHeader`, not separately

---

## COMMIT PROTOCOL

Always follow this format when committing:

```
feat(scope):      New feature
fix(scope):       Bug fix
docs(scope):      Documentation only
refactor(scope):  Refactor with no feature change
chore(scope):     Dependency/tooling update
style(scope):     Visual/CSS only, no logic change
```

Common scopes: `nav`, `mobile`, `services`, `home`, `pricing`, `contact`, `footer`, `logo`, `fonts`, `n-law`, `readme`, `deps`

---

## WHAT YOU MUST NOT DO

1. **Never** use raw hex colors — always use Tailwind tokens
2. **Never** inline SVG logo paths — always use `<RefinedLogo />`
3. **Never** use `MobileCommandMenu.tsx` — it's deprecated
4. **Never** use the Pages Router pattern — this is App Router only
5. **Never** install unnecessary dependencies — n-Law 03 (Zero Vendor Lock-in)
6. **Never** approximate measurements, padding, or layout values — n-Law 01
7. **Never** write to production without a plan reviewed by the operator
8. **Never** delete files without explicit operator confirmation

---

## WHAT YOU MUST DO

1. **Read before writing** — understand existing patterns before adding anything
2. **Plan before executing** — for any multi-file change, present a plan first
3. **Maintain token discipline** — all colors, fonts, and spacing via Tailwind tokens
4. **Respect the App Router** — use `app/` directory conventions, `use client` where needed
5. **Preserve n-Law compliance** — every change passes all 4 laws
6. **Log significant changes** — note what changed and why
7. **Ask when uncertain** — operator prefers clarity over speed

---

## LOCAL DEVELOPMENT

```bash
npm install          # Install dependencies
npm run dev          # Dev server → http://localhost:3000
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Lint check
```

> **Note:** Fonts (Neo Sans Pro) are self-hosted in `public/fonts/`. Ensure files are present before production builds.

---

## CURRENT KNOWN STATE

- Framework: Next.js 15.1 (App Router) — stable
- Deployment: Live at https://inspiron.tech via Vercel
- Mobile nav: `TerminalDatapad.tsx` is the canonical mobile drawer
- `MobileCommandMenu.tsx` is deprecated (do not use)
- All routes public except gated content in `/audit-vault`

---

## SESSION LOGGING

At the end of any significant work session, save a session log to:  
`SECTOR-ALPHA-COMMAND/INTELLIGENCE-CORE/SESSION-LOGS/`

Format: `YYYY-MM-DD_BRIEF-TITLE.md`

Minimum log content:
- What was changed
- Why it was changed
- Files affected
- Any open issues or next steps

---

*Last updated: 2026 · OPERATION-NEURAL-BRIDGE · SECTOR-BRAVO-OPERATIONS*  
*Operator: MD ABU HASAN · INSPIRON TECH · hello@inspiron.tech*