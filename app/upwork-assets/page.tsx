"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { RefinedLogo, RefinedIcon } from '@/components/Branding/RefinedLogo';
import { Download, Info } from 'lucide-react';

/* ─── TYPES ─────────────────────────────────────────────────────────────── */
type ActiveMode = 'uw-hero' | 'uw-before-after' | 'uw-process' | 'uw-pricing';

interface UpworkData {
    tag: string;
    headline: string;
    highlight: string;
    subtext: string;
    name: string;
    role: string;
    website: string;
}



/* ─── PRESETS ────────────────────────────────────────────────────────────── */
const PRESETS: Record<string, Partial<UpworkData>> = {
    'ERP Setup': {
        tag: 'Official Manager.io Partner',
        headline: 'Manager.io ERP',
        highlight: 'Setup & Data Migration',
        subtext: 'Clean COA  ·  Zero-Loss Migration  ·  Audit-Ready Reports',
    },
    'Data Migration': {
        tag: 'Zero-Loss Data Migration',
        headline: 'Clean Migration',
        highlight: 'from QuickBooks · Tally · Excel',
        subtext: 'Full audit trail  ·  Opening balance verification  ·  0.1% tolerance',
    },
    'BPMN Mapping': {
        tag: 'BPMN 2.0 · Process Architecture',
        headline: 'Business Processes',
        highlight: 'Made Clear',
        subtext: 'As-Is / To-Be  ·  Swim-Lane Diagrams  ·  SOPs  ·  Automation-Ready',
    },
    'Dashboard': {
        tag: 'Audit-Ready Financial Reports',
        headline: 'Your KPI Dashboard',
        highlight: 'Built Right',
        subtext: 'P&L  ·  Balance Sheet  ·  Cash Flow  ·  Management Reports',
    },
};

/* ─── SIDEBAR INPUT ──────────────────────────────────────────────────────── */
const SidebarInput = ({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) => (
    <div>
        <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-2">{label}</label>
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00D2FF] text-white transition-colors placeholder:text-gray-600"
        />
    </div>
);

/* ─── PROCESS STEPS DATA ─────────────────────────────────────────────────── */
const PROCESS_STEPS = [
    { num: '01', emoji: '🔍', title: 'AUDIT',     color: '#00D2FF', sub: 'Understand your business' },
    { num: '02', emoji: '✏️', title: 'DESIGN',    color: '#FFD700', sub: 'Build your Chart of Accounts' },
    { num: '03', emoji: '🔄', title: 'MIGRATION', color: '#22c55e', sub: 'Configure & migrate data' },
    { num: '04', emoji: '🎓', title: 'TRAINING',  color: '#00D2FF', sub: 'Train, verify, launch' },
];

/* ─── PRICING TIERS ──────────────────────────────────────────────────────── */
const PRICING_TIERS = [
    {
        name: 'Starter',
        featured: false,
        items: ['Company setup', 'COA design', 'Basic reports', '5-day delivery'],
    },
    {
        name: 'Standard',
        featured: true,
        items: ['Full setup + migration', 'Key reports configured', 'Training session', 'Opening balance verification', '12-day delivery'],
    },
    {
        name: 'Advanced',
        featured: false,
        items: ['Multi-entity setup', 'Custom dashboards', 'Inter-company billing', '90-day support'],
    },
];

/* ═══════════════════════════════════════════════════════════════════════════
   UPWORK PORTFOLIO ASSET STUDIO — V2.2
   INSPIRON TECH · MD ABU HASAN
   4 canvas modes · 1600×1200px · JPG 0.95 export
   FIX V2.2: Hero canvas layout — reduced font sizes, fixed text collision,
             whiteSpace nowrap on highlight, removed subtext border artifact,
             replaced Tailwind className flex with inline styles in canvas
   ═══════════════════════════════════════════════════════════════════════════ */

export default function UpworkAssetsStudio() {
    const [activeMode, setActiveMode] = useState<ActiveMode>('uw-hero');
    const [isExporting, setIsExporting] = useState(false);

    const [uwData, setUwData] = useState<UpworkData>({
        tag: 'Official Manager.io Partner',
        headline: 'Manager.io ERP',
        highlight: 'Setup & Data Migration',
        subtext: 'Clean COA  ·  Zero-Loss Migration  ·  Audit-Ready Reports',
        name: 'MD ABU HASAN',
        role: 'Founder & ERP Architect',
        website: 'inspiron.tech',
    });

    const [scale, setScale] = useState(0.38);
    const containerRef = useRef<HTMLDivElement>(null);

    const calculateScale = useCallback(() => {
        if (!containerRef.current) return;
        const c = containerRef.current;
        const pad = 80;
        const sx = (c.clientWidth - pad) / 1600;
        const sy = (c.clientHeight - pad) / 1200;
        setScale(Math.max(0.15, Math.min(sx, sy, 0.85)));
    }, []);

    useEffect(() => {
        calculateScale();
        window.addEventListener('resize', calculateScale);
        return () => window.removeEventListener('resize', calculateScale);
    }, [calculateScale]);

    const handleExport = async () => {
        setIsExporting(true);
        try {
            const el = document.getElementById('data-export-canvas');
            if (!el) return;

            const orbs = el.querySelectorAll<HTMLElement>('[data-blur-orb]');
            orbs.forEach(o => (o.style.display = 'none'));

            const { default: html2canvas } = await import('html2canvas');
            const canvas = await html2canvas(el, {
                scale: window.devicePixelRatio || 2,
                useCORS: true,
                backgroundColor: '#010409',
                width: 1600,
                height: 1200,
                windowWidth: 1600,   // CRITICAL: prevents reflow into narrow viewport
                windowHeight: 1200,
                logging: false,
                onclone: (_clonedDoc, clonedEl) => {
                    // html2canvas measures custom @font-face space glyphs as 0px wide.
                    // Replacing U+0020 with U+00A0 (NBSP) forces a measurable glyph.
                    const walk = (node: Node) => {
                        if (node.nodeType === Node.TEXT_NODE) {
                            node.textContent = node.textContent?.replace(/ /g, '\u00A0') ?? null;
                        } else {
                            node.childNodes.forEach(walk);
                        }
                    };
                    walk(clonedEl);
                },
            });
            const dataUrl = canvas.toDataURL('image/jpeg', 0.95);

            orbs.forEach(o => (o.style.display = ''));

            if (dataUrl) {
                const a = document.createElement('a');
                a.download = `inspiron_${activeMode}_1x_${Date.now()}.jpg`;
                a.href = dataUrl;
                a.click();
            }
        } catch (err) {
            console.error('Export failed:', err);
        } finally {
            setIsExporting(false);
        }
    };

    const applyPreset = (key: string) => {
        const p = PRESETS[key];
        if (p) setUwData(prev => ({ ...prev, ...p }));
    };

    /* ─── CANVAS RENDERERS ────────────────────────────────────────────────── */

    /* ── HERO (V2.2 FIXED) ──────────────────────────────────────────────────
       Changes vs V2.1:
       • Headline font-size: 110px → 88px  (prevents overflow at 1600px width)
       • Headline marginBottom: 16px → 32px (clear gap before highlight)
       • Headline whiteSpace: nowrap
       • Highlight font-size: 85px → 68px  (fits without wrapping)
       • Highlight whiteSpace: nowrap, border: none, background: none, padding: 0
       • Subtext font-size: 30px → 26px, border: none, background: none, padding: 0
       • Logo wordmark: Tailwind className → inline style (safe for export canvas)
       • Tag badge: whiteSpace: nowrap added
    ────────────────────────────────────────────────────────────────────────── */
    const renderHero = () => (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}>
            {/* Logo + Wordmark — inline only, no Tailwind inside canvas */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
                <RefinedIcon size={64} />
                <div style={{ display: 'flex', alignItems: 'baseline' }}>
                    <span style={{ fontSize: '28px', fontWeight: 500, textTransform: 'lowercase', color: '#FFFFFF' }}>inspiron</span>
                    <span style={{ fontSize: '26px', fontWeight: 300, textTransform: 'uppercase', color: '#FFD700', marginLeft: '6px' }}>TECH</span>
                </div>
            </div>

            {/* Tag Badge */}
            <div style={{
                padding: '14px 40px',
                border: '1px solid rgba(0,210,255,0.35)',
                backgroundColor: 'rgba(0,210,255,0.07)',
                color: '#00D2FF',
                fontWeight: 700,
                textTransform: 'uppercase',
                borderRadius: '9999px',
                marginBottom: '48px',
                fontSize: '18px',
                whiteSpace: 'nowrap',
            }}>
                {uwData.tag}
            </div>

            {/* Headline — FIX: 88px, gap 32px, nowrap */}
            <h1 style={{
                fontSize: '88px',
                fontWeight: 900,
                color: '#FFFFFF',
                lineHeight: 1.05,
                marginBottom: '32px',
                whiteSpace: 'nowrap',
            }}>
                {uwData.headline}
            </h1>

            {/* Highlight — FIX: 68px, nowrap, border none */}
            <h2 style={{
                fontSize: '68px',
                fontWeight: 300,
                color: '#FFD700',
                lineHeight: 1.2,
                marginBottom: '48px',
                fontStyle: 'italic',
                whiteSpace: 'nowrap',
                border: 'none',
                background: 'none',
                padding: 0,
            }}>
                {uwData.highlight}
            </h2>

            {/* Subtext — FIX: 26px, border none, padding 0 */}
            <p style={{
                fontSize: '26px',
                color: '#9CA3AF',
                maxWidth: '1100px',
                lineHeight: 1.6,
                marginBottom: '56px',
                border: 'none',
                background: 'none',
                padding: 0,
            }}>
                {uwData.subtext}
            </p>

            {/* Bottom Cards */}
            <div style={{ display: 'flex', gap: '28px' }}>
                {[
                    { icon: '📊', label: 'P&L Statement', sub: 'Revenue  ·  Expenses  ·  Net' },
                    { icon: '🏦', label: 'Balance Sheet',  sub: 'Assets  ·  Liabilities  ·  Equity' },
                    { icon: '💸', label: 'Cash Flow',      sub: 'Inflow  ·  Outflow  ·  Reserves' },
                ].map(c => (
                    <div key={c.label} style={{
                        backgroundColor: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(0,210,255,0.2)',
                        borderRadius: '16px',
                        padding: '28px 44px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '10px',
                        boxShadow: '0 0 24px rgba(0,210,255,0.08)',
                        minWidth: '260px',
                    }}>
                        <span style={{ fontSize: '34px' }}>{c.icon}</span>
                        <span style={{ fontSize: '22px', color: '#00D2FF', fontWeight: 600 }}>{c.label}</span>
                        <span style={{ fontSize: '13px', color: '#6B7280' }}>{c.sub}</span>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderBeforeAfter = () => (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '24px', opacity: 0.6 }}>
                <RefinedIcon size={36} />
                <div style={{ display: 'flex', alignItems: 'baseline' }}>
                    <span style={{ fontSize: '18px', fontWeight: 500, textTransform: 'lowercase', color: '#FFFFFF' }}>inspiron</span>
                    <span style={{ fontSize: '16px', fontWeight: 300, textTransform: 'uppercase', color: '#FFD700', marginLeft: '4px' }}>TECH</span>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', flex: 1, alignContent: 'center', alignItems: 'stretch' }}>
                {/* BEFORE */}
                <div style={{ backgroundColor: 'rgba(10,5,5,0.8)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '24px', padding: '56px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, right: '32px', transform: 'translateY(-50%)', backgroundColor: 'rgba(127,29,29,0.9)', color: '#FFFFFF', padding: '12px 32px', borderRadius: '9999px', fontWeight: 700, textTransform: 'uppercase', border: '1px solid rgba(239,68,68,0.5)', fontSize: '18px', zIndex: 10 }}>Before</div>
                    <h3 style={{ fontSize: '36px', fontWeight: 300, color: '#f87171', marginBottom: '32px', marginTop: '16px' }}>
                        Spreadsheets &amp; broken ERP
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', opacity: 0.6 }}>
                        {Array.from({ length: 9 }).map((_, i) => (
                            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                <div style={{ width: '96px', height: '20px', backgroundColor: 'rgba(107,114,128,0.3)', borderRadius: '4px' }} />
                                <div style={{ width: '64px', height: '20px', backgroundColor: 'rgba(107,114,128,0.2)', borderRadius: '4px' }} />
                                <div style={{ flex: 1, height: '20px', backgroundColor: 'rgba(107,114,128,0.15)', borderRadius: '4px' }} />
                                <div style={{ width: '80px', height: '20px', backgroundColor: 'rgba(234,179,8,0.2)', borderRadius: '4px' }} />
                            </div>
                        ))}
                    </div>
                    <p style={{ fontSize: '18px', color: '#6B7280', marginTop: '32px', border: 'none' }}>??? errors  ·  no audit trail</p>
                </div>

                {/* AFTER */}
                <div style={{ backgroundColor: 'rgba(0,210,255,0.04)', border: '1px solid rgba(0,210,255,0.3)', borderRadius: '24px', padding: '56px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, right: '32px', transform: 'translateY(-50%)', backgroundColor: '#00D2FF', color: '#010409', padding: '12px 32px', borderRadius: '9999px', fontWeight: 900, textTransform: 'uppercase', fontSize: '18px', zIndex: 10, boxShadow: '0 0 20px rgba(0,210,255,0.4)' }}>After</div>
                    <h3 style={{ fontSize: '36px', fontWeight: 300, color: '#00D2FF', marginBottom: '40px', marginTop: '16px' }}>
                        Stable Manager.io accounting core
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {[
                            { icon: '📈', label: 'P&L Statement', status: 'Synced',      color: '#22c55e' },
                            { icon: '🏦', label: 'Balance Sheet',  status: 'Audit-Ready', color: '#00D2FF' },
                            { icon: '💸', label: 'Cash Flow',      status: 'Accurate',    color: '#FFD700' },
                        ].map(r => (
                            <div key={r.label} style={{ backgroundColor: '#050a10', border: '1px solid rgba(0,210,255,0.2)', borderRadius: '16px', padding: '28px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 0 16px rgba(0,210,255,0.06)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                    <span style={{ fontSize: '36px' }}>{r.icon}</span>
                                    <span style={{ fontSize: '24px', color: '#FFFFFF', fontWeight: 500 }}>{r.label}</span>
                                </div>
                                <span style={{ padding: '8px 24px', borderRadius: '9999px', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', backgroundColor: `${r.color}20`, color: r.color, border: `1px solid ${r.color}40` }}>{r.status}</span>
                            </div>
                        ))}
                    </div>
                    <p style={{ fontSize: '18px', color: 'rgba(0,210,255,0.6)', marginTop: '32px', border: 'none' }}>0 errors  ·  full reconciliation</p>
                </div>
            </div>
        </div>
    );

    const renderProcess = () => (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}>
            <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '32px', opacity: 0.8 }}>
                    <RefinedIcon size={52} />
                    <div style={{ display: 'flex', alignItems: 'baseline' }}>
                        <span style={{ fontSize: '22px', fontWeight: 500, textTransform: 'lowercase', color: '#FFFFFF' }}>inspiron</span>
                        <span style={{ fontSize: '20px', fontWeight: 300, textTransform: 'uppercase', color: '#FFD700', marginLeft: '4px' }}>TECH</span>
                    </div>
                </div>
                <div style={{ color: '#9CA3AF', fontWeight: 700, textTransform: 'uppercase', marginBottom: '24px', fontSize: '18px' }}>DELIVERY PROTOCOL</div>
                <h1 style={{ fontSize: '72px', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.1, borderBottom: '2px solid #00D2FF', paddingBottom: '16px', display: 'inline-block' }}>
                    Your Setup in 4 Clear Steps
                </h1>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', width: '100%', flex: 1, alignItems: 'center', paddingTop: '48px', paddingBottom: '32px' }}>
                {PROCESS_STEPS.map(s => (
                    <div key={s.num} style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '48px', textAlign: 'center', position: 'relative' }}>
                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: `2px solid ${s.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', fontWeight: 900, position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', color: s.color, backgroundColor: `${s.color}15` }}>
                            {s.num}
                        </div>
                        <div style={{ fontSize: '70px', marginTop: '24px', marginBottom: '24px' }}>{s.emoji}</div>
                        <h3 style={{ fontSize: '30px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '12px', color: s.color }}>{s.title}</h3>
                        <p style={{ fontSize: '20px', color: '#9CA3AF' }}>{s.sub}</p>
                    </div>
                ))}
            </div>

            <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px 56px', fontSize: '20px', color: '#FFFFFF' }}>
                Zero-Loss Protocol  ·  0.1% Error Tolerance  ·  Every Stage Verified
            </div>
        </div>
    );

    const renderPricing = () => (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', paddingTop: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '24px', opacity: 0.8 }}>
                <RefinedIcon size={52} />
                <div style={{ display: 'flex', alignItems: 'baseline' }}>
                    <span style={{ fontSize: '22px', fontWeight: 500, textTransform: 'lowercase', color: '#FFFFFF' }}>inspiron</span>
                    <span style={{ fontSize: '20px', fontWeight: 300, textTransform: 'uppercase', color: '#FFD700', marginLeft: '4px' }}>TECH</span>
                </div>
            </div>
            <h1 style={{ fontSize: '68px', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.1, marginBottom: '8px' }}>
                Choose Your <span style={{ color: '#00D2FF' }}>ERP Package</span>
            </h1>
            <p style={{ fontSize: '24px', color: '#9CA3AF', marginBottom: '56px', border: 'none', padding: 0 }}>{uwData.subtext}</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', width: '100%', alignItems: 'stretch', flex: 1, maxHeight: '750px' }}>
                {PRICING_TIERS.map(tier => (
                    <div
                        key={tier.name}
                        style={{
                            borderRadius: '24px',
                            padding: '48px',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            ...(tier.featured
                                ? { background: 'linear-gradient(to bottom, rgba(0,210,255,0.1), transparent)', border: '2px solid rgba(0,210,255,0.5)', marginTop: '-16px', paddingBottom: '64px' }
                                : { backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', marginTop: '24px' }
                            ),
                        }}
                    >
                        {tier.featured && (
                            <div style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#00D2FF', color: '#010409', padding: '10px 32px', borderRadius: '9999px', fontWeight: 900, textTransform: 'uppercase', fontSize: '14px', whiteSpace: 'nowrap' }}>
                                Most Popular
                            </div>
                        )}
                        <h3 style={{ fontSize: '36px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '32px', color: tier.featured ? '#00D2FF' : '#FFFFFF' }}>
                            {tier.name}
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
                            {tier.items.map(item => (
                                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                    <span style={{ color: '#FFD700', fontSize: '24px', marginTop: '2px' }}>✓</span>
                                    <span style={{ fontSize: '20px', color: '#D1D5DB' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '32px', textAlign: 'center' }}>
                <p style={{ fontSize: '18px', color: '#9CA3AF', border: 'none' }}>{uwData.website}  ·  {uwData.name}  ·  {uwData.role}</p>
            </div>
        </div>
    );

    /* ─── MODE BUTTONS ────────────────────────────────────────────────────── */
    const modes: { id: ActiveMode; label: string }[] = [
        { id: 'uw-hero',         label: 'Hero' },
        { id: 'uw-before-after', label: 'Before / After' },
        { id: 'uw-process',      label: 'Process' },
        { id: 'uw-pricing',      label: 'Pricing' },
    ];

    /* ═══════════════════════════════════════════════════════════════════════
       RENDER
       ═══════════════════════════════════════════════════════════════════════ */
    return (
        <div className="min-h-screen bg-deep-navy-black text-institutional-white font-institutional selection:bg-electric-cyan selection:text-black flex flex-col overflow-hidden">

            {/* ─── HUD NAV ──────────────────────────────────────────────── */}
            <nav className="sticky top-0 z-50 bg-deep-navy-black/90 backdrop-blur-lg border-b border-white/10 shrink-0 h-14 flex items-center justify-between px-6">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3 pr-6 border-r border-white/10">
                        <RefinedLogo size={22} />
                    </div>
                    <Link href="/" className="text-gray-500 hover:text-white text-[10px] font-mono tracking-widest transition-colors hidden md:block">← HOME</Link>
                    <Link href="/social-assets" className="text-gray-500 hover:text-white text-[10px] font-mono tracking-widest transition-colors hidden sm:block">Social Studio →</Link>
                    <Link href="/pitch-deck/upwork-portfolio" className="text-gray-500 hover:text-white text-[10px] font-mono tracking-widest transition-colors hidden sm:block">Pitch Deck →</Link>
                </div>
                <div className="text-[10px] text-gray-600 font-mono tracking-widest hidden lg:block">
                    UPWORK PORTFOLIO STUDIO // V2.2 // ACTIVE
                </div>
                <div className="flex gap-1.5">
                    {modes.map(m => (
                        <button
                            key={m.id}
                            onClick={() => setActiveMode(m.id)}
                            className={`px-4 py-2 rounded text-[10px] font-bold uppercase tracking-widest transition-all ${
                                activeMode === m.id
                                    ? 'bg-[#14a800] text-white shadow-[0_0_12px_rgba(20,168,0,0.3)]'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                            }`}
                        >
                            {m.label}
                        </button>
                    ))}
                </div>
            </nav>

            {/* ─── MAIN ─────────────────────────────────────────────────── */}
            <main className="flex-1 flex flex-col lg:flex-row h-[calc(100vh-56px)] overflow-hidden min-w-0">

                {/* ─── SIDEBAR CONTROLS ──────────────────────────────────── */}
                <aside className="w-full lg:w-[420px] bg-deep-navy-black border-r border-white/10 overflow-y-auto shrink-0 z-10 p-6 flex flex-col">
                    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#14a800] mb-6 border-b border-white/10 pb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#14a800] animate-pulse" />
                        Upwork Canvas Editor
                    </h2>

                    {/* Presets */}
                    <div className="mb-6">
                        <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-3">Quick Presets</label>
                        <div className="grid grid-cols-2 gap-2">
                            {Object.keys(PRESETS).map(k => (
                                <button
                                    key={k}
                                    onClick={() => applyPreset(k)}
                                    className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300 hover:border-[#14a800]/50 hover:text-white transition-all text-left"
                                >
                                    {k}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-5 flex-1">
                        <SidebarInput label="Tag / Eyebrow" value={uwData.tag}      onChange={v => setUwData(p => ({ ...p, tag: v }))} />
                        <SidebarInput label="Headline"      value={uwData.headline} onChange={v => setUwData(p => ({ ...p, headline: v }))} />
                        <div>
                            <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-2">Highlight (Gold)</label>
                            <input
                                type="text"
                                value={uwData.highlight}
                                onChange={e => setUwData(p => ({ ...p, highlight: e.target.value }))}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#FFD700] text-[#FFD700] transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-2">Subtext</label>
                            <textarea
                                value={uwData.subtext}
                                onChange={e => setUwData(p => ({ ...p, subtext: e.target.value }))}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00D2FF] text-white transition-colors resize-none"
                                rows={3}
                            />
                        </div>
                        <div className="border-t border-white/5 pt-5">
                            <SidebarInput label="Name"    value={uwData.name}    onChange={v => setUwData(p => ({ ...p, name: v }))} />
                        </div>
                        <SidebarInput label="Role"    value={uwData.role}    onChange={v => setUwData(p => ({ ...p, role: v }))} />
                        <SidebarInput label="Website" value={uwData.website} onChange={v => setUwData(p => ({ ...p, website: v }))} />
                    </div>

                    {/* System Note */}
                    <div className="mt-6 bg-[#14a800]/10 border border-[#14a800]/30 rounded-lg px-4 py-3 text-[11px] text-[#14a800] font-mono">
                        &gt;&gt; EXPORT: JPG 0.95q — dom-to-image-more (SVG engine)<br />
                        &gt;&gt; CANVAS: 1600×1200px · 4:3 · Blur orbs hidden on export<br />
                        &gt;&gt; V2.2: Hero layout fix — font sizes, nowrap, no border artifact
                    </div>

                    {/* Pro tip */}
                    <div className="mt-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[11px] text-gray-400">
                        <div className="flex items-start gap-2">
                            <Info size={14} className="text-[#00D2FF] mt-0.5 shrink-0" />
                            <div>
                                <span className="text-[#00D2FF] font-bold">Cleanest export:</span> Right-click the canvas → Inspect → select the <code className="text-[#FFD700]">#data-export-canvas</code> node → right-click → <span className="text-white">Capture node screenshot</span>. Uses browser&apos;s native renderer — perfect text every time.
                            </div>
                        </div>
                    </div>

                    {/* Export Button */}
                    <button
                        onClick={handleExport}
                        disabled={isExporting}
                        className="mt-6 w-full bg-[#14a800] hover:bg-[#14a800]/90 text-white font-bold uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-3 transition-all disabled:opacity-50 shadow-[0_0_20px_rgba(20,168,0,0.2)]"
                    >
                        {isExporting ? <span className="animate-spin text-xl">◌</span> : <Download size={18} />}
                        {isExporting ? 'Exporting...' : 'Export JPG (0.95)'}
                    </button>
                </aside>

                {/* ─── CANVAS STAGE ──────────────────────────────────────── */}
                <section
                    ref={containerRef}
                    className="flex-1 bg-deep-navy-black flex items-center justify-center overflow-hidden relative"
                    style={{
                        backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.02) 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                    }}
                >
                    <div className="absolute top-4 right-4 text-[10px] font-mono text-gray-600 z-10">
                        {(scale * 100).toFixed(0)}% · 1600×1200
                    </div>

                    <div style={{ transform: `scale(${scale})` }} className="origin-center transition-transform duration-300 ease-out">
                        {/* ═══ THE EXPORT CANVAS ═══ */}
                        <div
                            id="data-export-canvas"
                            className="font-institutional"
                            style={{ width: '1600px', height: '1200px', backgroundColor: '#010409', padding: '64px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', border: '1px solid rgba(255,255,255,0.05)', wordSpacing: '0.15em' }}
                        >
                            {/* Grid Overlay */}
                            <div style={{
                                position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
                                backgroundImage: 'linear-gradient(to right, rgba(0,210,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,210,255,0.03) 1px, transparent 1px)',
                                backgroundSize: '40px 40px',
                            }} />

                            {/* Blur Orbs (hidden on export) */}
                            <div data-blur-orb style={{ position: 'absolute', top: '-300px', right: '-300px', width: '900px', height: '900px', backgroundColor: '#00D2FF', borderRadius: '50%', opacity: 0.07, pointerEvents: 'none', zIndex: 0, filter: 'blur(200px)' }} />
                            <div data-blur-orb style={{ position: 'absolute', bottom: '-300px', left: '-300px', width: '800px', height: '800px', backgroundColor: '#FFD700', borderRadius: '50%', opacity: 0.04, pointerEvents: 'none', zIndex: 0, filter: 'blur(200px)' }} />

                            {/* Watermark Logo */}
                            <div style={{ position: 'absolute', bottom: '48px', right: '48px', zIndex: 50, opacity: 0.5 }}>
                                <RefinedIcon size={72} />
                            </div>

                            {/* Website Watermark */}
                            <div style={{ position: 'absolute', bottom: '56px', left: '64px', zIndex: 50, color: '#9CA3AF', opacity: 0.4, fontSize: '18px' }}>
                                {uwData.website}
                            </div>

                            {/* Horizontal accent line */}
                            <div style={{ position: 'absolute', bottom: '120px', left: '64px', right: '64px', height: '1px', backgroundColor: 'rgba(0,210,255,0.15)', zIndex: 5 }} />

                            {/* ─── DYNAMIC CONTENT ─── */}
                            <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', height: '100%' }}>
                                {activeMode === 'uw-hero'         && renderHero()}
                                {activeMode === 'uw-before-after' && renderBeforeAfter()}
                                {activeMode === 'uw-process'      && renderProcess()}
                                {activeMode === 'uw-pricing'      && renderPricing()}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
