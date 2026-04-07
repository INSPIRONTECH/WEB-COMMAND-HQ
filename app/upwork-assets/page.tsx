"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { RefinedLogo, RefinedIcon } from "@/components/Branding/RefinedLogo";
import { Download } from "lucide-react";

/* ─── BRAND TOKENS ─────────────────────────────────────────────────────────── */
const CYAN  = "#00D2FF";
const GOLD  = "#FFD700";
const NAVY  = "#010409";
const WHITE = "#FFFFFF";
const GRAY  = "#9CA3AF";
const GREEN = "#22c55e";

/* ─── SLIDE DATA ────────────────────────────────────────────────────────────── */
const SLIDES = [
    {
        id: "a1-erp-hero",
        label: "A1 ERP Hero",
        type: "hero",
        tag: "ENTERPRISE CLOUD ERP · OFFICIAL MANAGER.IO PARTNER",
        headline: "Manager.io Accounting",
        highlight: "Complete Setup from Scratch",
        subtext: "Chart of Accounts · Zero-Loss Data Migration · Custom Dashboards · NBR/VAT Automation",
    },
    {
        id: "a2-erp-before-after",
        label: "A2 Before/After",
        type: "before-after",
        tag: "ERP IMPLEMENTATION",
        headline: "Manual Spreadsheets",
        highlight: "to Automated Cloud ERP",
        subtext: "Fragmented financial data → fully reconciled, audit-ready accounting core.",
    },
    {
        id: "a3-process",
        label: "A3 Process",
        type: "process",
        tag: "DEPLOYMENT METHODOLOGY · 30–60 DAY PROTOCOL",
        headline: "4-Phase Deployment",
        highlight: '"Zero Approximation" At Every Stage',
        subtext: "Zero-Loss Protocol Enforced at Every Stage",
    },
    {
        id: "b1-migration-hero",
        label: "B1 Migration",
        type: "migration",
        tag: "ZERO-LOSS DATA MIGRATION",
        headline: "Clean Migration",
        highlight: "from QuickBooks · Tally · Excel",
        subtext: "Full audit trail · 0.1% tolerance · Parallel run · Verified opening balances",
    },
    {
        id: "c1-bpmn-hero",
        label: "C1 BPMN Hero",
        type: "hero",
        tag: "BPMN 2.0 · PROCESS ARCHITECTURE",
        headline: "Business Processes",
        highlight: "Made Clear & Scalable",
        subtext: "As-Is / To-Be Mapping · Swim-Lane Diagrams · SOPs · Cross-Department Integration",
    },
    {
        id: "c2-bpmn-flow",
        label: "C2 BPMN Flow",
        type: "bpmn-flow",
        tag: "BPMN 2.0 · INVOICE APPROVAL FLOW",
        headline: "Invoice Approval",
        highlight: "End-to-End Automation",
        subtext: "Platform-agnostic. Manager.io, Odoo, Dynamics, or Sage.",
    },
    {
        id: "d1-dashboard-hero",
        label: "D1 Dashboard",
        type: "hero",
        tag: "AUDIT-READY FINANCIAL REPORTS",
        headline: "Your KPI Dashboard",
        highlight: "Built Right, First Time",
        subtext: "P&L · Balance Sheet · Cash Flow · VAT Reports · Management Dashboards",
    },
    {
        id: "e1-case-study",
        label: "E1 Case Study",
        type: "case-study",
        tag: "CASE STUDY · AQUACULTURE · ৳100+ CRORE",
        headline: "14,478 Transactions.",
        highlight: "Zero Errors. 6 Weeks.",
        subtext: "Nobin Agro Farm — 30 ponds, real-time pond-level profitability, ৳25–40 Lakhs annual savings.",
    },
    {
        id: "f1-proof-stats",
        label: "F1 Proof Stats",
        type: "proof-stats",
        tag: "VERIFIED CREDENTIALS · TRACK RECORD",
        headline: "Why Businesses",
        highlight: "Choose INSPIRON TECH",
        subtext: "14+ years inside manufacturing, ISP operations & medical warehouses before founding Bangladesh's only Official Manager.io practice.",
    },
    {
        id: "g1-contact-cta",
        label: "G1 Contact CTA",
        type: "contact-cta",
        tag: "READY TO TRANSFORM YOUR OPERATIONS?",
        headline: "Start Your ERP",
        highlight: "Architecture Today",
        subtext: "Discovery call → Scoping → Deployment. 30–60 days to operational clarity.",
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
            className="font-institutional"
            style={{
                width: 1600,
                height: 1200,
                backgroundColor: NAVY,
                position: "relative",
                overflow: "hidden",
                flexShrink: 0,
                boxSizing: "border-box" as const,
                padding: "80px",
                display: "flex",
                flexDirection: "column" as const,
                border: "0px solid transparent",
            }}
        >
            {/* Global Grid */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none" as const, zIndex: 0,
                backgroundImage: `linear-gradient(to right,rgba(0,210,255,0.08) 1px,transparent 1px),linear-gradient(to bottom,rgba(0,210,255,0.08) 1px,transparent 1px)`,
                backgroundSize: "40px 40px",
            }} />

            {/* Glow Orb */}
            <div data-blur-orb="true" style={{
                position: "absolute",
                ...(idx % 2 === 0 ? { top: -400, right: -400 } : { bottom: -300, left: -300 }),
                width: 1000, height: 1000, borderRadius: "50%",
                backgroundColor: idx % 3 === 2 ? GOLD : CYAN,
                opacity: 0.08, filter: "blur(200px)", pointerEvents: "none" as const, zIndex: 0,
            }} />

            {/* Watermark */}
            <div style={{ position: "absolute", bottom: 64, right: 64, opacity: 0.35, zIndex: 10 }}>
                <RefinedIcon size={72} />
            </div>

            {/* Content */}
            <div style={{ position: "relative", zIndex: 10, flex: 1, display: "flex", flexDirection: "column" as const, height: "100%", width: "100%" }}>
                {s.type === "hero"       && <HeroContent s={s} />}
                {s.type === "before-after" && <BeforeAfterContent s={s} />}
                {s.type === "process"    && <ProcessContent s={s} />}
                {s.type === "migration"  && <MigrationContent s={s} />}
                {s.type === "bpmn-flow"  && <BpmnFlowContent s={s} />}
                {s.type === "case-study" && <CaseStudyContent s={s} />}
                {s.type === "proof-stats" && <ProofStatsContent s={s} />}
                {s.type === "contact-cta" && <ContactCtaContent s={s} />}
            </div>
        </div>
    );
}

/* ─── SLIDE COMPONENTS ──────────────────────────────────────────────────────── */

function TagBadge({ text, color = CYAN }: { text: string; color?: string }) {
    return (
        <div style={{ display: "inline-block", padding: "14px 28px", border: `2px solid ${color}40`, backgroundColor: `${color}12`, color, fontWeight: 900, fontSize: 22, letterSpacing: "0.18em", textTransform: "uppercase" as const, borderRadius: 9999, marginBottom: 52 }}>
            {text}
        </div>
    );
}

function HeroContent({ s }: { s: any }) {
    return (
        <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", justifyContent: "center", height: "100%", width: "100%", textAlign: "center" }}>
            <TagBadge text={s.tag} />
            <h1 style={{ fontSize: 124, fontWeight: 900, color: WHITE, lineHeight: 1.15, marginBottom: 20, maxWidth: 1400, width: "100%" }}>
                {s.headline}
            </h1>
            <h2 style={{ fontSize: 88, fontWeight: 300, fontStyle: "italic" as const, color: GOLD, lineHeight: 1.2, marginBottom: 56, maxWidth: 1400, width: "100%" }}>
                {s.highlight}
            </h2>
            <p style={{ fontSize: 34, color: GRAY, maxWidth: 1100, lineHeight: 1.65, fontFamily: "monospace" }}>
                {s.subtext}
            </p>
            {/* Credential row */}
            <div style={{ display: "flex", gap: 32, marginTop: 80, justifyContent: "center" }}>
                {["Official Manager.io Partner", "14+ Years Experience", "0.1% Error Tolerance"].map((label, i) => (
                    <div key={i} style={{ padding: "16px 32px", border: `1px solid rgba(0,210,255,0.25)`, borderRadius: 9999, fontSize: 20, color: CYAN, backgroundColor: "rgba(0,210,255,0.06)", fontWeight: 700, letterSpacing: "0.1em" }}>
                        {label}
                    </div>
                ))}
            </div>
        </div>
    );
}

function BeforeAfterContent({ s }: { s: any }) {
    return (
        <div style={{ display: "flex", flexDirection: "column" as const, height: "100%", width: "100%" }}>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: 56 }}>
                <TagBadge text={s.tag} />
                <h1 style={{ fontSize: 76, fontWeight: 900, color: WHITE, lineHeight: 1.2 }}>
                    {s.headline} <span style={{ color: GOLD, fontStyle: "italic" as const, fontWeight: 300 }}>{s.highlight}</span>
                </h1>
            </div>
            {/* Two columns — explicit heights for html2canvas */}
            <div style={{ display: "flex", gap: 40, width: "100%", height: 640 }}>
                <div style={{ width: "calc(50% - 20px)", height: "100%", backgroundColor: "rgba(15,5,5,0.85)", border: "2px solid rgba(239,68,68,0.25)", borderRadius: 28, padding: "56px 48px", position: "relative", boxSizing: "border-box" as const }}>
                    <div style={{ position: "absolute", top: 0, left: 40, transform: "translateY(-50%)", backgroundColor: "rgba(127,29,29,0.95)", color: WHITE, padding: "10px 28px", borderRadius: 9999, fontWeight: 900, fontSize: 22, border: "1px solid rgba(239,68,68,0.5)" }}>
                        BEFORE INSPIRON
                    </div>
                    <div style={{ fontSize: 88, marginBottom: 24, color: "#ef4444", marginTop: 16 }}>⚠️</div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {[
                            "Manual Excel reconciliation across departments",
                            "No real-time financial visibility",
                            "Month-end closing takes 2+ weeks",
                            "NBR/VAT compliance done manually",
                            "Inter-company transactions untracked",
                        ].map((item, i) => (
                            <li key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 20, fontSize: 28, color: "#d1d5db" }}>
                                <span style={{ color: "#ef4444", fontWeight: 900, flexShrink: 0 }}>✗</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={{ width: "calc(50% - 20px)", height: "100%", backgroundColor: `${CYAN}0D`, border: `2px solid ${CYAN}50`, borderRadius: 28, padding: "56px 48px", position: "relative", boxSizing: "border-box" as const }}>
                    <div style={{ position: "absolute", top: 0, left: 40, transform: "translateY(-50%)", backgroundColor: CYAN, color: NAVY, padding: "10px 28px", borderRadius: 9999, fontWeight: 900, fontSize: 22, boxShadow: `0 0 24px ${CYAN}60` }}>
                        AFTER INSPIRON
                    </div>
                    <div style={{ fontSize: 88, marginBottom: 24, color: CYAN, marginTop: 16 }}>🛡️</div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {[
                            "Real-time P&L, balance sheet, cash flow",
                            "Automated NBR/VAT Mushak 6.3 reports",
                            "Month-end closing in under 1 day",
                            "Zero data loss — 0.1% error tolerance",
                            "Full audit trail on every transaction",
                        ].map((item, i) => (
                            <li key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 20, fontSize: 28, color: WHITE }}>
                                <span style={{ color: CYAN, fontWeight: 900, flexShrink: 0 }}>✓</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Bottom stat */}
            <div style={{ marginTop: 40, textAlign: "center" }}>
                <p style={{ fontSize: 28, color: GOLD, fontStyle: "italic" as const }}>{s.subtext}</p>
            </div>
        </div>
    );
}

function ProcessContent({ s }: { s: any }) {
    const steps = [
        { title: "Diagnostic & Audit", label: "PHASE 01", icon: "🔍", desc: "Interview every dept head. Map actual information flows. Identify single points of failure." },
        { title: "COA & Logic Design", label: "PHASE 02", icon: "✏️", desc: "Build RACI first. Design shared data objects. Map processes cross-departmentally." },
        { title: "Migration & Setup",  label: "PHASE 03", icon: "🔄", desc: "Parallel run with legacy system. Zero-loss migration. 0.1% error tolerance enforced." },
        { title: "Training & Go-Live", label: "PHASE 04", icon: "🎓", desc: "Role-based training. Plain-language SOPs. Business runs identically without founder." },
    ];

    return (
        <div style={{ display: "flex", flexDirection: "column" as const, height: "100%", width: "100%" }}>
            <div style={{ textAlign: "center", marginBottom: 80 }}>
                <TagBadge text={s.tag} color={GOLD} />
                <h1 style={{ fontSize: 96, fontWeight: 900, color: WHITE, lineHeight: 1.15 }}>{s.headline}</h1>
                <p style={{ fontSize: 40, color: GRAY, marginTop: 16, fontStyle: "italic" as const }}>"{s.highlight}"</p>
            </div>
            <div style={{ display: "flex", gap: 24, width: "100%", height: 500 }}>
                {steps.map((st, i) => (
                    <div key={i} style={{ width: "calc(25% - 18px)", height: "100%", background: "linear-gradient(to bottom right, rgba(15,23,42,1), rgba(2,6,23,1))", border: `2px solid ${i === 1 ? CYAN : i === 2 ? GOLD : "rgba(255,255,255,0.1)"}`, borderRadius: 28, padding: "56px 28px 40px", position: "relative", textAlign: "center", boxSizing: "border-box" as const }}>
                        <div style={{ position: "absolute", top: -36, left: "50%", marginLeft: -36, width: 72, height: 72, borderRadius: "50%", border: `2px solid ${CYAN}`, backgroundColor: `${CYAN}18`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 26, color: CYAN }}>
                            0{i + 1}
                        </div>
                        <div style={{ color: GOLD, fontWeight: 900, fontSize: 18, letterSpacing: "0.12em", marginTop: 12, marginBottom: 16 }}>{st.label}</div>
                        <div style={{ fontSize: 56, marginBottom: 20 }}>{st.icon}</div>
                        <div style={{ fontSize: 28, color: WHITE, fontWeight: 700, marginBottom: 20, lineHeight: 1.3 }}>{st.title}</div>
                        <div style={{ fontSize: 22, color: GRAY, lineHeight: 1.55 }}>{st.desc}</div>
                    </div>
                ))}
            </div>
            <div style={{ marginTop: 40, backgroundColor: `${CYAN}10`, border: `2px solid ${CYAN}25`, padding: "24px 48px", borderRadius: 20, textAlign: "center" }}>
                <p style={{ fontFamily: "monospace", color: WHITE, fontSize: 28 }}>{s.subtext}</p>
            </div>
        </div>
    );
}

function MigrationContent({ s }: { s: any }) {
    const stats = [
        { icon: "📊", value: "500+", label: "Historical entries migrated per project" },
        { icon: "✅", value: "0.1%", label: "Maximum error tolerance — industry-leading" },
        { icon: "⚡", value: "30–60", label: "Days from zero to fully live system" },
        { icon: "🔄", value: "100%", label: "Opening balance verification & match" },
    ];
    const steps = [
        { label: "Extract", icon: "📤", desc: "Raw data from QuickBooks / Tally / Excel / CSV" },
        { label: "Clean", icon: "🧹", desc: "Normalize, deduplicate, validate against source" },
        { label: "Map",   icon: "🗺️", desc: "Align legacy COA → new Manager.io structure" },
        { label: "Verify", icon: "✔️", desc: "Parallel run: old system vs new. Match every taka." },
        { label: "Live",  icon: "🚀", desc: "Cutover with zero downtime. Audit trail complete." },
    ];
    return (
        <div style={{ display: "flex", flexDirection: "column" as const, height: "100%", width: "100%" }}>
            <TagBadge text={s.tag} />
            <h1 style={{ fontSize: 80, fontWeight: 900, color: WHITE, lineHeight: 1.15, marginBottom: 8 }}>{s.headline}</h1>
            <h2 style={{ fontSize: 60, fontWeight: 300, fontStyle: "italic" as const, color: GOLD, marginBottom: 40 }}>{s.highlight}</h2>
            <div style={{ display: "flex", gap: 24, marginBottom: 36, width: "100%" }}>
                {stats.map((st, i) => (
                    <div key={i} style={{ flex: "0 0 calc(25% - 18px)", backgroundColor: "rgba(255,255,255,0.03)", border: `1px solid ${CYAN}25`, borderRadius: 20, padding: "28px 20px", textAlign: "center", boxSizing: "border-box" as const }}>
                        <div style={{ fontSize: 42 }}>{st.icon}</div>
                        <div style={{ fontSize: 48, fontWeight: 900, color: CYAN, fontFamily: "monospace", margin: "8px 0 6px" }}>{st.value}</div>
                        <div style={{ fontSize: 20, color: GRAY, lineHeight: 1.4 }}>{st.label}</div>
                    </div>
                ))}
            </div>
            {/* Migration pipeline */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "24px 28px", width: "100%", boxSizing: "border-box" as const }}>
                {steps.map((st, i) => (
                    <React.Fragment key={i}>
                        <div style={{ flex: 1, textAlign: "center" }}>
                            <div style={{ fontSize: 36 }}>{st.icon}</div>
                            <div style={{ fontSize: 22, fontWeight: 700, color: CYAN, margin: "6px 0 4px" }}>{st.label}</div>
                            <div style={{ fontSize: 17, color: GRAY, lineHeight: 1.4 }}>{st.desc}</div>
                        </div>
                        {i < steps.length - 1 && (
                            <div style={{ fontSize: 32, color: CYAN, fontWeight: 900, flexShrink: 0 }}>→</div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

function BpmnFlowContent({ s }: { s: any }) {
    const flow = [
        { step: "Capture", platform: "SharePoint", sub: "Document Library", icon: "📂", color: CYAN },
        { step: "Route",   platform: "Power Automate", sub: "Conditional Approval", icon: "⚙️", color: GOLD },
        { step: "Review",  platform: "Teams / Email", sub: "Multi-level Approval", icon: "✅", color: GREEN },
        { step: "Track",   platform: "Planner", sub: "Live Task Board", icon: "📋", color: CYAN },
        { step: "Post",    platform: "Manager.io ERP", sub: "Auto-create Payable", icon: "🔗", color: GOLD },
    ];
    return (
        <div style={{ display: "flex", flexDirection: "column" as const, height: "100%", width: "100%" }}>
            <TagBadge text={s.tag} color={GOLD} />
            <h1 style={{ fontSize: 88, fontWeight: 900, color: WHITE, lineHeight: 1.15, marginBottom: 12 }}>{s.headline}</h1>
            <h2 style={{ fontSize: 60, fontWeight: 300, fontStyle: "italic" as const, color: GOLD, marginBottom: 60 }}>{s.highlight}</h2>
            {/* Flow diagram */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, width: "100%", marginBottom: 56 }}>
                {flow.map((node, i) => (
                    <React.Fragment key={i}>
                        <div style={{ flex: 1, border: `2px solid ${node.color}40`, borderRadius: 20, padding: "32px 16px", textAlign: "center", backgroundColor: `${node.color}0D`, boxSizing: "border-box" as const }}>
                            <div style={{ fontSize: 52, marginBottom: 12 }}>{node.icon}</div>
                            <div style={{ fontSize: 20, fontWeight: 900, color: node.color, letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: 8 }}>{node.step}</div>
                            <div style={{ fontSize: 24, fontWeight: 700, color: WHITE, marginBottom: 4 }}>{node.platform}</div>
                            <div style={{ fontSize: 18, color: GRAY }}>{node.sub}</div>
                        </div>
                        {i < flow.length - 1 && (
                            <div style={{ fontSize: 36, color: CYAN, fontWeight: 900, flexShrink: 0 }}>→</div>
                        )}
                    </React.Fragment>
                ))}
            </div>
            <div style={{ display: "flex", gap: 32 }}>
                {[
                    { label: "Platform-agnostic", desc: "Same logic: Manager.io, Odoo, Dynamics, or Sage" },
                    { label: "Full audit trail", desc: "Every approval logged, timestamped, traceable" },
                    { label: "BPMN 2.0 standard", desc: "As-Is / To-Be diagrams delivered with every engagement" },
                ].map((item, i) => (
                    <div key={i} style={{ flex: 1, backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "24px 28px", boxSizing: "border-box" as const }}>
                        <div style={{ fontSize: 22, fontWeight: 700, color: CYAN, marginBottom: 8 }}>{item.label}</div>
                        <div style={{ fontSize: 20, color: GRAY }}>{item.desc}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function CaseStudyContent({ s }: { s: any }) {
    const results = [
        { icon: "🐟", label: "30 Ponds", sub: "Real-time per-pond P&L" },
        { icon: "📊", label: "14,478 Txns", sub: "Zero-error migration" },
        { icon: "💰", label: "৳25–40L", sub: "Annual savings impact" },
        { icon: "⚡", label: "6 Weeks", sub: "From chaos to live system" },
    ];
    return (
        <div style={{ display: "flex", flexDirection: "column" as const, height: "100%", width: "100%" }}>
            <TagBadge text={s.tag} color={GOLD} />
            <div style={{ display: "flex", gap: 60, flex: 1, width: "100%", minHeight: 0 }}>
                <div style={{ width: "55%", display: "flex", flexDirection: "column" as const }}>
                    <h1 style={{ fontSize: 76, fontWeight: 900, color: WHITE, lineHeight: 1.15, marginBottom: 8 }}>{s.headline}</h1>
                    <h2 style={{ fontSize: 60, fontWeight: 300, fontStyle: "italic" as const, color: GOLD, marginBottom: 32 }}>{s.highlight}</h2>
                    <p style={{ fontSize: 28, color: GRAY, lineHeight: 1.65, marginBottom: 32 }}>{s.subtext}</p>
                    {/* Before/After compact */}
                    <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
                        <div style={{ flex: 1, backgroundColor: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 16, padding: "20px 24px", boxSizing: "border-box" as const }}>
                            <div style={{ fontSize: 18, fontWeight: 700, color: "#ef4444", marginBottom: 12, textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Before</div>
                            {["Excel spreadsheets per pond", "No batch profitability", "Feed cost unallocated", "Supplier commissions lost"].map((item, i) => (
                                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8, fontSize: 20, color: "#d1d5db" }}>
                                    <span style={{ color: "#ef4444" }}>✗</span> {item}
                                </div>
                            ))}
                        </div>
                        <div style={{ flex: 1, backgroundColor: `${CYAN}0D`, border: `1px solid ${CYAN}35`, borderRadius: 16, padding: "20px 24px", boxSizing: "border-box" as const }}>
                            <div style={{ fontSize: 18, fontWeight: 700, color: CYAN, marginBottom: 12, textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>After</div>
                            {["Real-time pond cost center", "Per-batch profitability live", "Feed allocated via write-off", "৳10–22L commissions recovered"].map((item, i) => (
                                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8, fontSize: 20, color: WHITE }}>
                                    <span style={{ color: CYAN }}>✓</span> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Stats column */}
                <div style={{ width: "45%", display: "flex", flexDirection: "column" as const, gap: 20 }}>
                    {results.map((r, i) => (
                        <div key={i} style={{ flex: 1, backgroundColor: `${GOLD}08`, border: `1px solid ${GOLD}30`, borderRadius: 20, padding: "24px 28px", display: "flex", alignItems: "center", gap: 24, boxSizing: "border-box" as const }}>
                            <div style={{ fontSize: 52 }}>{r.icon}</div>
                            <div>
                                <div style={{ fontSize: 44, fontWeight: 900, color: GOLD, fontFamily: "monospace", lineHeight: 1 }}>{r.label}</div>
                                <div style={{ fontSize: 22, color: GRAY, marginTop: 6 }}>{r.sub}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ProofStatsContent({ s }: { s: any }) {
    const stats = [
        { value: "20+",  label: "Businesses Transformed", color: GOLD },
        { value: "14+",  label: "Years IT Infrastructure", color: CYAN },
        { value: "0.1%", label: "Error Tolerance Standard", color: GREEN },
        { value: "15+",  label: "Industries Architected", color: GOLD },
        { value: "100+", label: "Migrations Completed", color: CYAN },
        { value: "5.0★", label: "Upwork Rating", color: GOLD },
    ];
    const creds = [
        "Official Manager.io Partner — Bangladesh",
        "Listed Manager.io Accountant & Developer",
        "BASIS Registered · TRADE-DSCC-0045632025",
        "ID Verified Upwork Freelancer",
        "Active Forum Contributor — Global Community",
    ];
    return (
        <div style={{ display: "flex", flexDirection: "column" as const, height: "100%", width: "100%" }}>
            <TagBadge text={s.tag} color={GOLD} />
            <h1 style={{ fontSize: 88, fontWeight: 900, color: WHITE, lineHeight: 1.15, marginBottom: 8 }}>{s.headline}</h1>
            <h2 style={{ fontSize: 64, fontWeight: 300, fontStyle: "italic" as const, color: GOLD, marginBottom: 40 }}>{s.highlight}</h2>
            <p style={{ fontSize: 28, color: GRAY, marginBottom: 40, maxWidth: 900 }}>{s.subtext}</p>
            {/* Stats grid */}
            <div style={{ display: "flex", gap: 20, marginBottom: 40, width: "100%" }}>
                {stats.map((st, i) => (
                    <div key={i} style={{ flex: 1, backgroundColor: "rgba(255,255,255,0.03)", border: `1px solid ${st.color}30`, borderRadius: 20, padding: "24px 16px", textAlign: "center", boxSizing: "border-box" as const }}>
                        <div style={{ fontSize: 52, fontWeight: 900, color: st.color, fontFamily: "monospace", lineHeight: 1 }}>{st.value}</div>
                        <div style={{ fontSize: 19, color: GRAY, marginTop: 10, lineHeight: 1.35 }}>{st.label}</div>
                    </div>
                ))}
            </div>
            {/* Credentials */}
            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 16 }}>
                {creds.map((cred, i) => (
                    <div key={i} style={{ padding: "12px 24px", border: `1px solid ${CYAN}30`, borderRadius: 9999, fontSize: 20, color: CYAN, backgroundColor: `${CYAN}0A`, fontWeight: 600 }}>
                        ✓ {cred}
                    </div>
                ))}
            </div>
        </div>
    );
}

function ContactCtaContent({ s }: { s: any }) {
    return (
        <div style={{ display: "flex", flexDirection: "column" as const, height: "100%", width: "100%", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <TagBadge text={s.tag} color={GOLD} />
            <h1 style={{ fontSize: 120, fontWeight: 900, color: WHITE, lineHeight: 1.1, marginBottom: 8, maxWidth: 1200 }}>{s.headline}</h1>
            <h2 style={{ fontSize: 88, fontWeight: 300, fontStyle: "italic" as const, color: GOLD, marginBottom: 40 }}>{s.highlight}</h2>
            <p style={{ fontSize: 32, color: GRAY, maxWidth: 900, lineHeight: 1.65, marginBottom: 64 }}>{s.subtext}</p>

            {/* Contact cards */}
            <div style={{ display: "flex", gap: 32, marginBottom: 56 }}>
                {[
                    { icon: "✉️", label: "hello@inspiron.tech", sub: "Email Response: 24hrs" },
                    { icon: "📱", label: "+880 1719-300849", sub: "WhatsApp: Instant" },
                    { icon: "🌐", label: "inspiron.tech", sub: "Portfolio & Case Studies" },
                ].map((item, i) => (
                    <div key={i} style={{ backgroundColor: "rgba(255,255,255,0.04)", border: `1px solid ${GOLD}35`, borderRadius: 20, padding: "28px 36px", minWidth: 320, boxSizing: "border-box" as const }}>
                        <div style={{ fontSize: 48, marginBottom: 12 }}>{item.icon}</div>
                        <div style={{ fontSize: 28, fontWeight: 700, color: WHITE, marginBottom: 6 }}>{item.label}</div>
                        <div style={{ fontSize: 20, color: GRAY }}>{item.sub}</div>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <div style={{ backgroundColor: GOLD, color: NAVY, padding: "28px 80px", borderRadius: 20, fontSize: 30, fontWeight: 900, textTransform: "uppercase" as const, letterSpacing: "0.2em", boxShadow: `0 0 60px ${GOLD}40` }}>
                BOOK FREE DISCOVERY CALL →
            </div>

            {/* Footer credentials */}
            <div style={{ marginTop: 40, display: "flex", gap: 24, justifyContent: "center" }}>
                {["Official Manager.io Partner", "ID Verified · Upwork", "BASIS Registered"].map((item, i) => (
                    <div key={i} style={{ padding: "10px 24px", border: `1px solid ${CYAN}30`, borderRadius: 9999, fontSize: 20, color: CYAN, backgroundColor: `${CYAN}0A` }}>
                        ✓ {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   MAIN STUDIO
   ═══════════════════════════════════════════════════════════════════════════════ */
export default function UpworkAssetsStudio() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [exporting, setExporting] = useState(false);
    const [exportProgress, setExportProgress] = useState(0);
    const [scale, setScale] = useState(0.4);
    const stageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const calc = () => {
            if (!stageRef.current) return;
            const pad = 64;
            const scaleX = (stageRef.current.clientWidth - pad) / 1600;
            const scaleY = (stageRef.current.clientHeight - pad) / 1200;
            setScale(Math.min(scaleX, scaleY, 0.85));
        };
        calc();
        setTimeout(calc, 600);
        window.addEventListener("resize", calc);
        return () => window.removeEventListener("resize", calc);
    }, []);

    const exportSlide = async (idx: number) => {
        setExporting(true);
        try {
            const el = document.getElementById(`slide-canvas-${idx}`);
            if (!el) return;

            // Hide blur orbs for clean export
            const orbs = el.querySelectorAll<HTMLElement>("[data-blur-orb]");
            orbs.forEach(o => { o.style.display = "none"; });

            await new Promise(r => setTimeout(r, 80));

            const { default: html2canvas } = await import("html2canvas");
            const canvas = await html2canvas(el, {
                scale: 2,                    // ← 2x = 3200×2400 crisp output
                useCORS: true,
                backgroundColor: NAVY,
                logging: false,
                width: 1600,
                height: 1200,
                windowWidth: 1600,
                windowHeight: 1200,
            });

            orbs.forEach(o => { o.style.display = ""; });

            const url = canvas.toDataURL("image/jpeg", 0.95);
            const a = document.createElement("a");
            a.download = `upwork-${SLIDES[idx].id}.jpg`;
            a.href = url;
            a.click();
        } catch (e) {
            console.error("Export failed:", e);
        } finally {
            setExporting(false);
        }
    };

    const exportAll = async () => {
        setExporting(true);
        for (let i = 0; i < TOTAL; i++) {
            setActiveSlide(i);
            setExportProgress(Math.round((i / TOTAL) * 100));
            await new Promise(r => setTimeout(r, 450));
            await exportSlide(i);
            await new Promise(r => setTimeout(r, 150));
        }
        setExportProgress(100);
        setTimeout(() => { setExporting(false); setExportProgress(0); }, 800);
    };

    return (
        <div className="font-institutional" style={{ height: "100vh", backgroundColor: "#050a10", color: WHITE, display: "flex", flexDirection: "column", overflow: "hidden" }}>

            {/* ─── NAV ─── */}
            <nav style={{ flexShrink: 0, zIndex: 50, backgroundColor: "rgba(1,4,9,0.96)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.07)", height: 58, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                    <RefinedLogo size={24} />
                    <Link href="/" style={{ fontSize: 11, fontFamily: "monospace", color: GRAY, textDecoration: "none", letterSpacing: "0.2em" }}>← HOME</Link>
                    <span style={{ fontSize: 11, fontFamily: "monospace", color: "#374151", letterSpacing: "0.15em" }}>UPWORK ASSET STUDIO V4.0 · {TOTAL} SLIDES</span>
                </div>

                {/* Slide tabs */}
                <div style={{ display: "flex", gap: 4, overflowX: "auto" as const }}>
                    {SLIDES.map((sl, i) => (
                        <button key={i} onClick={() => setActiveSlide(i)}
                            style={{ padding: "5px 12px", borderRadius: 7, fontSize: 10, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em", border: "none", cursor: "pointer", transition: "all 0.15s", backgroundColor: activeSlide === i ? CYAN : "transparent", color: activeSlide === i ? NAVY : GRAY, whiteSpace: "nowrap" as const }}>
                            {String(i + 1).padStart(2, "0")} — {sl.label}
                        </button>
                    ))}
                </div>

                <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
                    <button onClick={() => exportSlide(activeSlide)} disabled={exporting}
                        style={{ display: "flex", alignItems: "center", gap: 7, padding: "7px 16px", borderRadius: 8, fontSize: 11, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em", border: `1px solid ${CYAN}40`, backgroundColor: `${CYAN}10`, color: CYAN, cursor: "pointer" }}>
                        <Download size={13} /> Export 2× JPG
                    </button>
                    <button onClick={exportAll} disabled={exporting}
                        style={{ display: "flex", alignItems: "center", gap: 7, padding: "7px 16px", borderRadius: 8, fontSize: 11, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em", border: "none", backgroundColor: exporting ? `${GOLD}60` : GOLD, color: NAVY, cursor: "pointer" }}>
                        {exporting ? `${exportProgress}% …` : `Export All ${TOTAL}`}
                    </button>
                </div>
            </nav>

            {/* Progress bar */}
            {exporting && exportProgress > 0 && (
                <div style={{ height: 3, backgroundColor: "rgba(0,0,0,0.5)", flexShrink: 0 }}>
                    <div style={{ height: "100%", width: `${exportProgress}%`, backgroundColor: GOLD, transition: "width 0.3s" }} />
                </div>
            )}

            {/* ─── CANVAS STAGE ─── */}
            <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

                {/* Visual Stage */}
                <div ref={stageRef} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#020610", overflow: "hidden" }}>
                    <div style={{ width: 1600, height: 1200, transform: `scale(${scale})`, transformOrigin: "center center", boxShadow: `0 0 80px ${CYAN}10, 0 0 0 1px ${CYAN}15`, borderRadius: 16, overflow: "hidden", flexShrink: 0 }}>
                        <SlideCanvas slide={SLIDES[activeSlide]} idx={activeSlide} />
                    </div>
                </div>

                {/* Hidden canvases for bulk export */}
                <div style={{ position: "absolute", left: -9999, top: 0, visibility: "hidden" }}>
                    {SLIDES.map((sl, i) => i !== activeSlide && (
                        <SlideCanvas key={i} slide={sl} idx={i} />
                    ))}
                </div>

                {/* Thumbnails strip */}
                <div style={{ height: 130, backgroundColor: "rgba(1,4,9,0.96)", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, padding: "0 24px", flexShrink: 0, overflowX: "auto" as const }}>
                    {SLIDES.map((sl, i) => (
                        <button key={i} onClick={() => setActiveSlide(i)}
                            style={{ border: `2px solid ${activeSlide === i ? CYAN : "rgba(255,255,255,0.05)"}`, borderRadius: 10, backgroundColor: "transparent", cursor: "pointer", padding: 3, transition: "all 0.2s", transform: activeSlide === i ? "translateY(-4px)" : "none", boxShadow: activeSlide === i ? `0 8px 24px ${CYAN}20` : "none", flexShrink: 0 }}>
                            <div style={{ width: 128, height: 96, backgroundColor: NAVY, borderRadius: 7, display: "flex", flexDirection: "column" as const, alignItems: "center", justifyContent: "center", gap: 6, overflow: "hidden" }}>
                                <span style={{ fontSize: 13, fontFamily: "monospace", color: activeSlide === i ? CYAN : GRAY, fontWeight: 700 }}>{String(i + 1).padStart(2, "0")}</span>
                                <span style={{ fontSize: 9, color: GRAY, textTransform: "uppercase" as const, letterSpacing: "0.1em", textAlign: "center" as const, padding: "0 6px" }}>{sl.label}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </main>
        </div>
    );
}
