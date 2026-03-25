# ARGUS PROPERTIES — CASE STUDY SLIDE GENERATION INSTRUCTIONS
**For:** Antigravity (Gemini Image Generation)
**Output path:** `public/case-studies/argus-properties/export/`
**Format:** PNG, 670×660px, square, dark navy background (#010409)
**Total slides:** 10 (matching nobin-agro pattern)
**Brand tokens:** electric-cyan #00D2FF | action-gold #FFD700 | deep-navy #010409 | white #FFFFFF

---

## BRAND TEMPLATE (apply to ALL slides)

```
TOP-LEFT:  inspiron TECH logo (α icon + wordmark — lowercase "inspiron" white, "TECH" gold)
TOP-RIGHT: slide counter pill — "01 / 10" (cyan border, dark bg, monospace)
BOTTOM:    gold accent line + quote OR label
BACKGROUND: #010409 with subtle cyan grid lines (opacity 3%)
```

---

## SLIDE CONTENT SPECS

### SLIDE 01 — COVER / HOOK
**Tag badge (cyan pill, centered):** `CASE STUDY — REAL ESTATE · PAKISTAN`
**Headline (white, bold, large):**
```
FROM CHAOS TO
CLARITY: 4-DIVISION
ERP IN 30 DAYS
```
**Sub (gold, uppercase):** `ARGUS PROPERTIES & MARKETING — POWERED BY INSPIRON TECH`
**3 Checkboxes (cyan bg):**
- 4 Divisions · 15+ Schemes · 30 Agents
- PKR + AED Dual-Currency Accounting
- Custom Invoice Themes — Zero Manual Work
**Bottom quote (gold):** `"Before this, we had no idea where our commissions were going."`

---

### SLIDE 02 — THE COMPLEXITY
**Tag badge:** `THE COMPLEXITY`
**Headline:** `WHAT 'STANDARD SOFTWARE' CANNOT SOLVE`
**Body text:** `Argus Properties operates across 4 cities and 2 currencies at a scale generic tools break on:`
**Bullet arrows (cyan →):**
- 4 Divisions: Karachi, Islamabad, Bahria Town, Dubai
- 15+ Active Real Estate Schemes (tagging per invoice)
- 30 Agents: Unified supplier ledger with advance tracking
- PKR invoicing (Karachi) + AED invoicing (Dubai)
- 500+ Historical Entries to migrate
- Commission Income vs. Service Income (COA split)
**Bottom badge (red):** `⚠ Generic Software = Accounting Blackhole`

---

### SLIDE 03 — ROOT CAUSE (Before/After Grid)
**Tag badge:** `ROOT CAUSE`
**Headline:** `WHY THEIR OLD SYSTEM FAILED`
**2-column grid (red ✗ left | cyan ✓ right):**
| ✗ Before | ✓ After |
|---|---|
| Commissions manually calculated | Agent ledger auto-tracks advances |
| No division-level P&L | 4 separate division reports |
| Single currency only | PKR + AED with correct tax |
| Mixed income types | Commission vs Service split COA |
| No scheme tagging | Every invoice tagged by project |
**Bottom quote (gold):** `"If your accounting system can't split Commission from Service income, it's not a real ERP."`

---

### SLIDE 04 — OUR SOLUTION
**Tag badge:** `THE SOLUTION`
**Headline:** `MANAGER.IO — ARCHITECTED FOR ARGUS`
**4 process cards (horizontal row, numbered):**
- 01 🔍 AUDIT — Understand divisions, schemes, agents
- 02 ✏️ DESIGN — COA split + project tagging structure
- 03 🔄 MIGRATE — 500+ entries, zero loss, 0.1% tolerance
- 04 🎓 DELIVER — Custom themes, training, launch

---

### SLIDE 05 — CHART OF ACCOUNTS ARCHITECTURE
**Tag badge:** `COA ARCHITECTURE`
**Headline:** `INCOME SPLIT THAT ACTUALLY WORKS`
**Tree diagram structure:**
```
INCOME
├── Commission Income
│   ├── Karachi Division
│   ├── Islamabad Division
│   ├── Bahria Town Karachi
│   └── Dubai Division
└── Service Income
    ├── Consultancy Fees
    └── Admin Charges
```
**Bottom label:** `Every rupee tracked. Every division accountable.`

---

### SLIDE 06 — AGENT LEDGER SYSTEM
**Tag badge:** `30-AGENT LEDGER`
**Headline:** `UNIFIED SUPPLIER LEDGER FOR ALL 30 AGENTS`
**Visual: 3 agent cards (dark bg, cyan border):**
- Agent: AHMED ALI | Advance: PKR 45,000 | Balance: PKR 12,000 ✓
- Agent: SARA KHAN | Advance: PKR 30,000 | Balance: PKR 0 ✓
- Agent: FAISAL BEG | Advance: PKR 60,000 | Balance: PKR 18,500 ✓
**Bottom stat:** `30 agents · Real-time balances · Zero manual reconciliation`

---

### SLIDE 07 — DUAL CURRENCY INVOICE THEMES
**Tag badge:** `CUSTOM INVOICE THEMES`
**Headline:** `PKR + AED — TWO MARKETS, ONE SYSTEM`
**2 side-by-side invoice mockup cards:**
- LEFT (cyan border): 🇵🇰 KARACHI OFFICE — PKR Invoice — Argus Properties branding
- RIGHT (gold border): 🇦🇪 DUBAI OFFICE — AED Invoice — Arabic-ready layout
**Bottom label:** `HTML/CSS themes — print-perfect every time`

---

### SLIDE 08 — PROJECT/SCHEME TAGGING
**Tag badge:** `15+ SCHEMES`
**Headline:** `EVERY INVOICE TAGGED BY PROJECT`
**Visual: scheme tag pills in a grid:**
`Bahria Town Phase 8` · `DHA City Karachi` · `Capital Smart City` · `Gulberg Islamabad` · `Blue World City` · `Nova City` · `Rudn Enclave` · `Kingdom Valley` · `Al-Haram City` · `Park View City` · `Mumtaz City` · `New Metro City` · `Top City-1` · `Faisal Town Phase 2` · `Silver City`
**Bottom label:** `Filter any report by scheme instantly`

---

### SLIDE 09 — MIGRATION RESULTS
**Tag badge:** `MIGRATION COMPLETE`
**Headline:** `500+ ENTRIES. ZERO LOSS. 30 DAYS.`
**3 stat cards (horizontal):**
- 📊 `500+` Historical entries migrated
- ✅ `0.1%` Maximum error tolerance
- ⚡ `30` Days from zero to live
**Comparison bar (before/after):**
- Before: ████ Manual spreadsheets · No audit trail
- After: ████████████ Manager.io live · Full reconciliation
**Bottom quote (gold):** `"Opening balances matched to the last rupee."`

---

### SLIDE 10 — RESULTS + CTA
**Tag badge:** `THE OUTCOME`
**Headline:** `ARGUS NOW RUNS ON REAL ACCOUNTING`
**4 result pills (2×2 grid, cyan):**
- ✅ 4-Division P&L — live
- ✅ 30-Agent ledger — reconciled
- ✅ PKR + AED invoicing — active
- ✅ 15+ schemes — tagged
**Divider**
**CTA block (gold border):**
```
NEED THIS FOR YOUR REAL ESTATE BUSINESS?
inspiron.tech  ·  hello@inspiron.tech
WhatsApp: +880 1719-300849
```
**Bottom:** `Manager.io Official Partner · Pakistan · Bangladesh · UAE`

---

## GENERATION COMMAND FOR ANTIGRAVITY

For each slide, use the `generate_image` tool with this prompt template:

```
Professional case study slide for INSPIRON TECH, dark navy background (#010409),
electric-cyan (#00D2FF) and action-gold (#FFD700) accents, subtle cyan grid overlay,
inspiron TECH logo top-left (α icon + "inspiron TECH" wordmark), slide counter top-right,
[SLIDE-SPECIFIC CONTENT FROM SPECS ABOVE],
square format 670x660, clean modern sans-serif, premium business aesthetic
```

Save each output to:
`public/case-studies/argus-properties/export/slide-01.png` through `slide-10.png`

---

## FOLDER STRUCTURE TO CREATE

```
public/
└── case-studies/
    └── argus-properties/
        ├── GENERATE-SLIDES.md     ← THIS FILE
        └── export/
            ├── slide-01.png
            ├── slide-02.png
            ├── slide-03.png
            ├── slide-04.png
            ├── slide-05.png
            ├── slide-06.png
            ├── slide-07.png
            ├── slide-08.png
            ├── slide-09.png
            └── slide-10.png
```
