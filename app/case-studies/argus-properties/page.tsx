"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RefinedLogo, RefinedIcon } from "@/components/Branding/RefinedLogo";
import { Download } from "lucide-react";

/* ─── BRAND TOKENS ─────────────────────────────────────────────────────────── */
const CYAN  = "#00D2FF";
const GOLD  = "#FFD700";
const NAVY  = "#010409";
const WHITE = "#FFFFFF";
const GRAY  = "#9CA3AF";

/* ─── SLIDE DATA ───────────────────────────────────────────────────────────── */
const SLIDES = [
    {
        id: "cover",
        label: "Cover",
        tag: "CASE STUDY — REAL ESTATE · PAKISTAN",
        headline: ["FROM CHAOS TO CLARITY:", "4-DIVISION ERP", "IN 30 DAYS"],
        sub: "ARGUS PROPERTIES & MARKETING — POWERED BY INSPIRON TECH",
        checks: [
            "4 Divisions · 15+ Schemes · 30 Agents",
            "PKR + AED Dual-Currency Accounting",
            "Custom Invoice Themes — Zero Manual Work",
        ],
        quote: '"Before this, we had no idea where our commissions were going."',
    },
    {
        id: "complexity",
        label: "Complexity",
        badge: "THE COMPLEXITY",
        headline: "WHAT 'STANDARD\nSOFTWARE' CANNOT SOLVE",
        body: "Argus Properties operates across 4 cities and 2 currencies at a scale generic tools break on:",
        bullets: [
            "4 Divisions: Karachi, Islamabad, Bahria Town, Dubai",
            "15+ Active Real Estate Schemes (per-invoice tagging)",
            "30 Agents: Unified supplier ledger + advance tracking",
            "PKR invoicing (Karachi) + AED invoicing (Dubai)",
            "500+ Historical Entries to migrate without data loss",
            "Commission Income vs Service Income (COA split required)",
        ],
        bottom: { icon: "⚠", text: "Generic Software = Accounting Blackhole", red: true },
    },
    {
        id: "root-cause",
        label: "Root Cause",
        badge: "ROOT CAUSE",
        headline: "WHY THEIR OLD SYSTEM FAILED",
        before: [
            "Commissions manually calculated in Excel",
            "No division-level P&L visibility",
            "Single currency — no AED support",
            "Income types mixed in one account",
        ],
        after: [
            "Agent ledger auto-tracks all advances",
            "4 separate division P&L reports",
            "PKR + AED with correct tax handling",
            "Commission vs Service Income split COA",
        ],
        quote: '"If your accounting system can\'t split Commission from Service income, it\'s not a real ERP."',
    },
    {
        id: "solution",
        label: "Solution",
        badge: "THE SOLUTION",
        headline: "MANAGER.IO —\nARCHITECTED FOR ARGUS",
        steps: [
            { num: "01", emoji: "🔍", title: "AUDIT",    sub: "Understand divisions, schemes, agents" },
            { num: "02", emoji: "✏️", title: "DESIGN",   sub: "COA split + project tagging structure" },
            { num: "03", emoji: "🔄", title: "MIGRATE",  sub: "500+ entries, zero loss, 0.1% tolerance" },
            { num: "04", emoji: "🎓", title: "DELIVER",  sub: "Custom themes, training, go-live" },
        ],
    },
    {
        id: "coa",
        label: "COA",
        badge: "COA ARCHITECTURE",
        headline: "INCOME SPLIT\nTHAT ACTUALLY WORKS",
        tree: [
            { label: "INCOME", level: 0, color: WHITE },
            { label: "Commission Income", level: 1, color: CYAN },
            { label: "Karachi Division", level: 2, color: GRAY },
            { label: "Islamabad Division", level: 2, color: GRAY },
            { label: "Bahria Town Karachi", level: 2, color: GRAY },
            { label: "Dubai Division", level: 2, color: GRAY },
            { label: "Service Income", level: 1, color: GOLD },
            { label: "Consultancy Fees", level: 2, color: GRAY },
            { label: "Admin Charges", level: 2, color: GRAY },
        ],
        bottom: "Every rupee tracked. Every division accountable.",
    },
    {
        id: "agents",
        label: "Agents",
        badge: "30-AGENT LEDGER",
        headline: "UNIFIED SUPPLIER LEDGER\nFOR ALL 30 AGENTS",
        agents: [
            { name: "AHMED ALI",   advance: "PKR 45,000", balance: "PKR 12,000",  ok: true },
            { name: "SARA KHAN",   advance: "PKR 30,000", balance: "PKR 0",       ok: true },
            { name: "FAISAL BEG",  advance: "PKR 60,000", balance: "PKR 18,500",  ok: true },
        ],
        stat: "30 agents · Real-time balances · Zero manual reconciliation",
    },
    {
        id: "invoice",
        label: "Invoices",
        badge: "CUSTOM INVOICE THEMES",
        headline: "PKR + AED —\nTWO MARKETS, ONE SYSTEM",
        invoices: [
            { flag: "🇵🇰", label: "KARACHI OFFICE", currency: "PKR Invoice", note: "Argus Properties branding", color: CYAN },
            { flag: "🇦🇪", label: "DUBAI OFFICE",   currency: "AED Invoice", note: "Arabic-ready layout",       color: GOLD },
        ],
        bottom: "HTML/CSS themes — print-perfect every time",
    },
    {
        id: "schemes",
        label: "Schemes",
        badge: "15+ SCHEMES",
        headline: "EVERY INVOICE\nTAGGED BY PROJECT",
        tags: [
            "Bahria Town Phase 8", "DHA City Karachi", "Capital Smart City",
            "Gulberg Islamabad", "Blue World City", "Nova City",
            "Rudn Enclave", "Kingdom Valley", "Al-Haram City",
            "Park View City", "Mumtaz City", "New Metro City",
            "Top City-1", "Faisal Town Phase 2", "Silver City",
        ],
        bottom: "Filter any report by scheme instantly",
    },
    {
        id: "migration",
        label: "Migration",
        badge: "MIGRATION COMPLETE",
        headline: "500+ ENTRIES.\nZERO LOSS. 30 DAYS.",
        stats: [
            { icon: "📊", value: "500+",  label: "Historical entries migrated" },
            { icon: "✅", value: "0.1%",  label: "Maximum error tolerance" },
            { icon: "⚡", value: "30",    label: "Days from zero to live" },
        ],
        bars: [
            { label: "Before", fill: 0.25, color: "#ef4444", desc: "Manual spreadsheets · No audit trail" },
            { label: "After",  fill: 1.0,  color: CYAN,      desc: "Manager.io live · Full reconciliation" },
        ],
        quote: '"Opening balances matched to the last rupee."',
    },
    {
        id: "results",
        label: "Results",
        badge: "THE OUTCOME",
        headline: "ARGUS NOW RUNS ON\nREAL ACCOUNTING",
        results: [
            "4-Division P&L — live",
            "30-Agent ledger — reconciled",
            "PKR + AED invoicing — active",
            "15+ schemes — tagged",
        ],
        cta: {
            title: "NEED THIS FOR YOUR REAL ESTATE BUSINESS?",
            contact: "inspiron.tech  ·  hello@inspiron.tech  ·  +880 1719-300849",
            badge: "Manager.io Official Partner · Pakistan · Bangladesh · UAE",
        },
    },
];

const TOTAL = SLIDES.length;

/* ─── SLIDE CANVAS ──────────────────────────────────────────────────────────── */
function SlideCanvas({ slide, idx }: { slide: typeof SLIDES[0]; idx: number }) {
    const s = slide as any;
    const num = String(idx + 1).padStart(2, "0");

    return (
        <div
            id={`slide-canvas-${idx}`}
            style={{
                width: 670,
                height: 660,
                backgroundColor: NAVY,
                position: "relative",
                overflow: "hidden",
                flexShrink: 0,
                fontFamily: "Inter, sans-serif",
            }}
        >
            {/* Grid */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                backgroundImage: `linear-gradient(to right,rgba(0,210,255,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(0,210,255,0.04) 1px,transparent 1px)`,
                backgroundSize: "32px 32px",
            }} />

            {/* Blur orb */}
            <div style={{
                position: "absolute",
                ...(idx % 2 === 0
                    ? { top: -200, right: -200, backgroundColor: CYAN }
                    : { bottom: -200, left: -200, backgroundColor: GOLD }),
                width: 500, height: 500, borderRadius: "50%",
                opacity: 0.07, filter: "blur(120px)", pointerEvents: "none",
            }} />

            {/* Header */}
            <div style={{ position: "absolute", top: 22, left: 24, right: 24, display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 10 }}>
                <RefinedIcon size={28} />
                <div style={{ fontFamily: "monospace", fontSize: 11, color: GRAY, border: `1px solid rgba(0,210,255,0.3)`, borderRadius: 9999, padding: "4px 12px" }}>
                    {num} / {String(TOTAL).padStart(2, "0")}
                </div>
            </div>

            {/* Accent line */}
            <div style={{ position: "absolute", bottom: 44, left: 24, right: 24, height: 1, backgroundColor: "rgba(0,210,255,0.15)", zIndex: 5 }} />

            {/* Watermark */}
            <div style={{ position: "absolute", bottom: 14, right: 24, opacity: 0.3, fontSize: 10, fontFamily: "monospace", color: GRAY, zIndex: 10 }}>
                inspiron.tech
            </div>

            {/* Content */}
            <div style={{ position: "relative", zIndex: 10, padding: "60px 28px 56px", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
                {s.id === "cover"       && <CoverContent s={s} />}
                {s.id === "complexity"  && <ComplexityContent s={s} />}
                {s.id === "root-cause"  && <RootCauseContent s={s} />}
                {s.id === "solution"    && <SolutionContent s={s} />}
                {s.id === "coa"         && <COAContent s={s} />}
                {s.id === "agents"      && <AgentsContent s={s} />}
                {s.id === "invoice"     && <InvoiceContent s={s} />}
                {s.id === "schemes"     && <SchemesContent s={s} />}
                {s.id === "migration"   && <MigrationContent s={s} />}
                {s.id === "results"     && <ResultsContent s={s} />}
            </div>
        </div>
    );
}

/* ─── INDIVIDUAL SLIDE LAYOUTS ──────────────────────────────────────────────── */

function Badge({ text, red }: { text: string; red?: boolean }) {
    return (
        <div style={{ display: "inline-block", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", padding: "5px 16px", border: `1px solid ${red ? "rgba(239,68,68,0.4)" : "rgba(0,210,255,0.35)"}`, borderRadius: 9999, color: red ? "#ef4444" : CYAN, backgroundColor: red ? "rgba(239,68,68,0.07)" : "rgba(0,210,255,0.07)", marginBottom: 14 }}>
            {text}
        </div>
    );
}

function CoverContent({ s }: { s: any }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, textAlign: "center", justifyContent: "center" }}>
            <Badge text={s.tag} />
            <h1 style={{ fontSize: 38, fontWeight: 900, color: WHITE, lineHeight: 1.1, margin: "8px 0 10px", textTransform: "uppercase" }}>
                {s.headline.join("\n")}
            </h1>
            <p style={{ fontSize: 11, fontWeight: 700, color: GOLD, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 16 }}>{s.sub}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%", maxWidth: 540 }}>
                {s.checks.map((c: string, i: number) => (
                    <div key={i} style={{ backgroundColor: "rgba(0,210,255,0.07)", border: "1px solid rgba(0,210,255,0.2)", borderRadius: 10, padding: "10px 16px", display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ color: CYAN, fontWeight: 700, fontSize: 14 }}>✓</span>
                        <span style={{ fontSize: 13, color: WHITE }}>{c}</span>
                    </div>
                ))}
            </div>
            <p style={{ fontSize: 12, color: GOLD, fontStyle: "italic", marginTop: 14 }}>{s.quote}</p>
        </div>
    );
}

function ComplexityContent({ s }: { s: any }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Badge text={s.badge} />
            <h1 style={{ fontSize: 26, fontWeight: 900, color: WHITE, textTransform: "uppercase", lineHeight: 1.15, marginBottom: 8, whiteSpace: "pre-line" }}>{s.headline}</h1>
            <p style={{ fontSize: 12, color: GRAY, marginBottom: 12 }}>{s.body}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 7, flex: 1 }}>
                {s.bullets.map((b: string, i: number) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8, padding: "8px 12px" }}>
                        <span style={{ color: CYAN, fontSize: 12, marginTop: 1 }}>→</span>
                        <span style={{ fontSize: 12, color: WHITE }}>{b}</span>
                    </div>
                ))}
            </div>
            <div style={{ marginTop: 10, backgroundColor: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: 8, padding: "8px 14px", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 14 }}>{s.bottom.icon}</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#ef4444" }}>{s.bottom.text}</span>
            </div>
        </div>
    );
}

function RootCauseContent({ s }: { s: any }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Badge text={s.badge} />
            <h1 style={{ fontSize: 26, fontWeight: 900, color: WHITE, textTransform: "uppercase", lineHeight: 1.15, marginBottom: 14, whiteSpace: "pre-line" }}>{s.headline}</h1>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, flex: 1 }}>
                <div style={{ backgroundColor: "rgba(10,5,5,0.8)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 14, padding: "16px", position: "relative" }}>
                    <div style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#ef4444", marginBottom: 12, borderBottom: "1px solid rgba(239,68,68,0.15)", paddingBottom: 8 }}>Before</div>
                    {s.before.map((b: string, i: number) => (
                        <div key={i} style={{ display: "flex", gap: 8, marginBottom: 10, fontSize: 11, color: "#d1d5db", alignItems: "flex-start" }}>
                            <span style={{ color: "#ef4444", fontWeight: 700 }}>✗</span>{b}
                        </div>
                    ))}
                </div>
                <div style={{ backgroundColor: "rgba(0,210,255,0.04)", border: "1px solid rgba(0,210,255,0.3)", borderRadius: 14, padding: "16px" }}>
                    <div style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: CYAN, marginBottom: 12, borderBottom: "1px solid rgba(0,210,255,0.15)", paddingBottom: 8 }}>After</div>
                    {s.after.map((a: string, i: number) => (
                        <div key={i} style={{ display: "flex", gap: 8, marginBottom: 10, fontSize: 11, color: WHITE, alignItems: "flex-start" }}>
                            <span style={{ color: CYAN, fontWeight: 700 }}>✓</span>{a}
                        </div>
                    ))}
                </div>
            </div>
            <p style={{ fontSize: 11, color: GOLD, fontStyle: "italic", marginTop: 12, textAlign: "center" }}>{s.quote}</p>
        </div>
    );
}

function SolutionContent({ s }: { s: any }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Badge text={s.badge} />
            <h1 style={{ fontSize: 26, fontWeight: 900, color: WHITE, textTransform: "uppercase", lineHeight: 1.15, marginBottom: 20, whiteSpace: "pre-line" }}>{s.headline}</h1>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, flex: 1 }}>
                {s.steps.map((step: any, i: number) => (
                    <div key={i} style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "20px 16px", textAlign: "center", position: "relative", paddingTop: 36 }}>
                        <div style={{ position: "absolute", top: -16, left: "50%", transform: "translateX(-50%)", width: 32, height: 32, borderRadius: "50%", border: `2px solid ${CYAN}`, backgroundColor: `rgba(0,210,255,0.1)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 900, color: CYAN, fontFamily: "monospace" }}>
                            {step.num}
                        </div>
                        <div style={{ fontSize: 28, marginBottom: 8 }}>{step.emoji}</div>
                        <div style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: CYAN, marginBottom: 6 }}>{step.title}</div>
                        <div style={{ fontSize: 11, color: GRAY }}>{step.sub}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function COAContent({ s }: { s: any }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Badge text={s.badge} />
            <h1 style={{ fontSize: 26, fontWeight: 900, color: WHITE, textTransform: "uppercase", lineHeight: 1.15, marginBottom: 20, whiteSpace: "pre-line" }}>{s.headline}</h1>
            <div style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "16px 20px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", fontFamily: "monospace" }}>
                {s.tree.map((node: any, i: number) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", marginBottom: 7, paddingLeft: node.level * 20 }}>
                        {node.level > 0 && <span style={{ color: "rgba(0,210,255,0.3)", marginRight: 6, fontSize: 11 }}>{node.level === 1 ? "├──" : "│  ├──"}</span>}
                        <span style={{ fontSize: node.level === 0 ? 16 : node.level === 1 ? 13 : 11, fontWeight: node.level === 0 ? 900 : node.level === 1 ? 700 : 400, color: node.color }}>{node.label}</span>
                    </div>
                ))}
            </div>
            <p style={{ fontSize: 11, color: GOLD, textAlign: "center", marginTop: 12 }}>{s.bottom}</p>
        </div>
    );
}

function AgentsContent({ s }: { s: any }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Badge text={s.badge} />
            <h1 style={{ fontSize: 24, fontWeight: 900, color: WHITE, textTransform: "uppercase", lineHeight: 1.15, marginBottom: 20, whiteSpace: "pre-line" }}>{s.headline}</h1>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1, justifyContent: "center" }}>
                {s.agents.map((a: any, i: number) => (
                    <div key={i} style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(0,210,255,0.2)", borderRadius: 12, padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div>
                            <div style={{ fontSize: 13, fontWeight: 700, color: WHITE, marginBottom: 4, fontFamily: "monospace" }}>{a.name}</div>
                            <div style={{ fontSize: 11, color: GRAY }}>Advance: <span style={{ color: GOLD }}>{a.advance}</span></div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <div style={{ fontSize: 11, color: GRAY }}>Balance</div>
                            <div style={{ fontSize: 14, fontWeight: 700, color: CYAN }}>{a.balance}</div>
                            {a.ok && <span style={{ fontSize: 10, color: "#22c55e" }}>✓ Reconciled</span>}
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ marginTop: 14, backgroundColor: "rgba(0,210,255,0.06)", border: "1px solid rgba(0,210,255,0.2)", borderRadius: 8, padding: "10px 14px", textAlign: "center", fontSize: 11, color: CYAN, fontFamily: "monospace" }}>
                {s.stat}
            </div>
        </div>
    );
}

function InvoiceContent({ s }: { s: any }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Badge text={s.badge} />
            <h1 style={{ fontSize: 26, fontWeight: 900, color: WHITE, textTransform: "uppercase", lineHeight: 1.15, marginBottom: 20, whiteSpace: "pre-line" }}>{s.headline}</h1>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, flex: 1 }}>
                {s.invoices.map((inv: any, i: number) => (
                    <div key={i} style={{ border: `2px solid ${inv.color}40`, borderRadius: 16, padding: "24px 20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, backgroundColor: `${inv.color}07` }}>
                        <span style={{ fontSize: 36 }}>{inv.flag}</span>
                        <div style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: inv.color }}>{inv.label}</div>
                        <div style={{ fontSize: 20, fontWeight: 900, color: WHITE }}>{inv.currency}</div>
                        <div style={{ fontSize: 11, color: GRAY }}>{inv.note}</div>
                        {/* Invoice mockup lines */}
                        <div style={{ width: "100%", marginTop: 8, display: "flex", flexDirection: "column", gap: 4 }}>
                            {[80, 60, 90, 50].map((w, j) => (
                                <div key={j} style={{ height: 6, borderRadius: 3, backgroundColor: `${inv.color}25`, width: `${w}%` }} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <p style={{ fontSize: 11, color: GOLD, textAlign: "center", marginTop: 12 }}>{s.bottom}</p>
        </div>
    );
}

function SchemesContent({ s }: { s: any }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Badge text={s.badge} />
            <h1 style={{ fontSize: 26, fontWeight: 900, color: WHITE, textTransform: "uppercase", lineHeight: 1.15, marginBottom: 16, whiteSpace: "pre-line" }}>{s.headline}</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, flex: 1, alignContent: "center" }}>
                {s.tags.map((tag: string, i: number) => (
                    <div key={i} style={{ padding: "6px 14px", borderRadius: 9999, fontSize: 11, fontWeight: 600, backgroundColor: i % 3 === 0 ? "rgba(0,210,255,0.1)" : i % 3 === 1 ? "rgba(255,215,0,0.1)" : "rgba(255,255,255,0.05)", border: `1px solid ${i % 3 === 0 ? "rgba(0,210,255,0.3)" : i % 3 === 1 ? "rgba(255,215,0,0.3)" : "rgba(255,255,255,0.1)"}`, color: i % 3 === 0 ? CYAN : i % 3 === 1 ? GOLD : WHITE }}>
                        {tag}
                    </div>
                ))}
            </div>
            <p style={{ fontSize: 11, color: GRAY, textAlign: "center", marginTop: 12 }}>{s.bottom}</p>
        </div>
    );
}

function MigrationContent({ s }: { s: any }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Badge text={s.badge} />
            <h1 style={{ fontSize: 26, fontWeight: 900, color: WHITE, textTransform: "uppercase", lineHeight: 1.15, marginBottom: 16, whiteSpace: "pre-line" }}>{s.headline}</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 14 }}>
                {s.stats.map((st: any, i: number) => (
                    <div key={i} style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(0,210,255,0.15)", borderRadius: 12, padding: "14px", textAlign: "center" }}>
                        <div style={{ fontSize: 24 }}>{st.icon}</div>
                        <div style={{ fontSize: 28, fontWeight: 900, color: CYAN, fontFamily: "monospace", margin: "6px 0 4px" }}>{st.value}</div>
                        <div style={{ fontSize: 10, color: GRAY }}>{st.label}</div>
                    </div>
                ))}
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10, justifyContent: "center" }}>
                {s.bars.map((bar: any, i: number) => (
                    <div key={i}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                            <span style={{ fontSize: 11, fontWeight: 700, color: bar.color }}>{bar.label}</span>
                            <span style={{ fontSize: 10, color: GRAY }}>{bar.desc}</span>
                        </div>
                        <div style={{ height: 10, backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 5, overflow: "hidden" }}>
                            <div style={{ height: "100%", width: `${bar.fill * 100}%`, backgroundColor: bar.color, borderRadius: 5 }} />
                        </div>
                    </div>
                ))}
            </div>
            <p style={{ fontSize: 11, color: GOLD, fontStyle: "italic", textAlign: "center", marginTop: 12 }}>{s.quote}</p>
        </div>
    );
}

function ResultsContent({ s }: { s: any }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Badge text={s.badge} />
            <h1 style={{ fontSize: 26, fontWeight: 900, color: WHITE, textTransform: "uppercase", lineHeight: 1.15, marginBottom: 16, whiteSpace: "pre-line" }}>{s.headline}</h1>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
                {s.results.map((r: string, i: number) => (
                    <div key={i} style={{ backgroundColor: "rgba(0,210,255,0.07)", border: "1px solid rgba(0,210,255,0.25)", borderRadius: 12, padding: "14px 16px", display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ color: "#22c55e", fontSize: 16, fontWeight: 700 }}>✅</span>
                        <span style={{ fontSize: 12, color: WHITE, fontWeight: 600 }}>{r}</span>
                    </div>
                ))}
            </div>
            <div style={{ border: `1px solid rgba(255,215,0,0.3)`, borderRadius: 14, padding: "16px 20px", backgroundColor: "rgba(255,215,0,0.05)", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", gap: 8 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: GOLD, textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.cta.title}</div>
                <div style={{ fontSize: 12, color: WHITE, fontFamily: "monospace" }}>{s.cta.contact}</div>
                <div style={{ fontSize: 10, color: CYAN, textTransform: "uppercase", letterSpacing: "0.15em", marginTop: 4 }}>{s.cta.badge}</div>
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════════════════════ */
export default function ArgusPropertiesCaseStudy() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [exporting, setExporting] = useState(false);

    const exportSlide = async (idx: number) => {
        setExporting(true);
        try {
            const el = document.getElementById(`slide-canvas-${idx}`);
            if (!el) return;

            const orbs = el.querySelectorAll<HTMLElement>("[data-blur-orb]");
            orbs.forEach(o => (o.style.display = "none"));

            let dataUrl: string | null = null;
            try {
                const dti = await import("dom-to-image-more");
                dataUrl = await dti.default.toPng(el, {
                    width: 670, height: 660,
                    style: { transform: "none" },
                });
            } catch {
                const { default: html2canvas } = await import("html2canvas");
                const canvas = await html2canvas(el, {
                    scale: 1, useCORS: true, backgroundColor: NAVY,
                    width: 670, height: 660,
                });
                dataUrl = canvas.toDataURL("image/png");
            }

            orbs.forEach(o => (o.style.display = ""));

            if (dataUrl) {
                const a = document.createElement("a");
                a.download = `argus-slide-${String(idx + 1).padStart(2, "0")}.png`;
                a.href = dataUrl;
                a.click();
            }
        } catch (e) {
            console.error("Export failed:", e);
        } finally {
            setExporting(false);
        }
    };

    const exportAll = async () => {
        for (let i = 0; i < TOTAL; i++) {
            setActiveSlide(i);
            await new Promise(r => setTimeout(r, 400));
            await exportSlide(i);
            await new Promise(r => setTimeout(r, 200));
        }
    };

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#050a10", color: WHITE, fontFamily: "Inter, sans-serif" }}>

            {/* ─── NAV ─── */}
            <nav style={{ position: "sticky", top: 0, zIndex: 50, backgroundColor: "rgba(1,4,9,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.07)", height: 52, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <RefinedLogo size={20} />
                    <Link href="/" style={{ fontSize: 10, fontFamily: "monospace", color: GRAY, textDecoration: "none", letterSpacing: "0.2em" }}>← HOME</Link>
                    <span style={{ fontSize: 10, fontFamily: "monospace", color: "#374151", letterSpacing: "0.15em" }}>ARGUS PROPERTIES · CASE STUDY</span>
                </div>

                {/* Slide tabs */}
                <div style={{ display: "flex", gap: 4 }}>
                    {SLIDES.map((sl, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveSlide(i)}
                            style={{ padding: "4px 10px", borderRadius: 6, fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", border: "none", cursor: "pointer", transition: "all 0.15s", backgroundColor: activeSlide === i ? CYAN : "transparent", color: activeSlide === i ? NAVY : GRAY }}
                        >
                            {String(i + 1).padStart(2, "0")}
                        </button>
                    ))}
                </div>

                <div style={{ display: "flex", gap: 8 }}>
                    <button
                        onClick={() => exportSlide(activeSlide)}
                        disabled={exporting}
                        style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 8, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", border: `1px solid ${CYAN}40`, backgroundColor: `${CYAN}10`, color: CYAN, cursor: "pointer" }}
                    >
                        <Download size={12} /> Export Slide
                    </button>
                    <button
                        onClick={exportAll}
                        disabled={exporting}
                        style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 8, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", border: "none", backgroundColor: GOLD, color: NAVY, cursor: "pointer" }}
                    >
                        {exporting ? "Exporting..." : "Export All 10"}
                    </button>
                </div>
            </nav>

            {/* ─── CANVAS STAGE ─── */}
            <main style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "32px 20px" }}>

                {/* Slide label */}
                <div style={{ marginBottom: 16, fontSize: 10, fontFamily: "monospace", color: GRAY, textTransform: "uppercase", letterSpacing: "0.2em" }}>
                    {String(activeSlide + 1).padStart(2, "0")} / {TOTAL} — {SLIDES[activeSlide].label}
                </div>

                {/* Active canvas preview */}
                <div style={{ boxShadow: `0 0 60px rgba(0,210,255,0.12), 0 0 0 1px rgba(0,210,255,0.1)`, borderRadius: 4 }}>
                    <SlideCanvas slide={SLIDES[activeSlide]} idx={activeSlide} />
                </div>

                {/* Hidden canvases for export */}
                <div style={{ position: "absolute", left: -9999, top: 0, visibility: "hidden" }}>
                    {SLIDES.map((sl, i) => i !== activeSlide && (
                        <SlideCanvas key={i} slide={sl} idx={i} />
                    ))}
                </div>

                {/* Slide grid thumbnails */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32, justifyContent: "center", maxWidth: 740 }}>
                    {SLIDES.map((sl, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveSlide(i)}
                            style={{ border: `2px solid ${activeSlide === i ? CYAN : "rgba(255,255,255,0.08)"}`, borderRadius: 8, backgroundColor: "transparent", cursor: "pointer", padding: 4, transition: "border-color 0.15s" }}
                        >
                            <div style={{ width: 100, height: 98, backgroundColor: NAVY, borderRadius: 4, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 }}>
                                <span style={{ fontSize: 9, fontFamily: "monospace", color: activeSlide === i ? CYAN : GRAY }}>{String(i + 1).padStart(2, "0")}</span>
                                <span style={{ fontSize: 8, color: GRAY, textTransform: "uppercase", letterSpacing: "0.1em" }}>{sl.label}</span>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Instructions */}
                <div style={{ marginTop: 24, maxWidth: 670, backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "14px 20px", fontSize: 11, color: GRAY, fontFamily: "monospace", lineHeight: 1.6 }}>
                    {">> EXPORT: Click \"Export Slide\" to save the current slide as PNG"}<br />
                    {">> BULK: Click \"Export All 10\" to auto-download all slides sequentially"}<br />
                    {">> SAVE TO: public/case-studies/argus-properties/export/argus-slide-01.png"}<br />
                    {">> PRO TIP: Right-click canvas → Inspect → #slide-canvas-N → Capture node screenshot"}
                </div>

            </main>
        </div>
    );
}
