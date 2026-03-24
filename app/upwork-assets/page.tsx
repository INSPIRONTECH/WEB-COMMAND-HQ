"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { RefinedLogo, RefinedIcon } from '@/components/Branding/RefinedLogo';
import { Download, ChevronRight } from 'lucide-react';

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
        subtext: 'Clean COA · Zero-Loss Migration · Audit-Ready Reports',
    },
    'Data Migration': {
        tag: 'Zero-Loss Data Migration',
        headline: 'Clean Migration',
        highlight: 'from QuickBooks · Tally · Excel',
        subtext: 'Full audit trail · Opening balance verification · 0.1% tolerance',
    },
    'BPMN Mapping': {
        tag: 'BPMN 2.0 · Process Architecture',
        headline: 'Business Processes',
        highlight: 'Made Clear',
        subtext: 'As-Is / To-Be · Swim-Lane Diagrams · SOPs · Automation-Ready',
    },
    'Dashboard': {
        tag: 'Audit-Ready Financial Reports',
        headline: 'Your KPI Dashboard',
        highlight: 'Built Right',
        subtext: 'P&L · Balance Sheet · Cash Flow · Management Reports',
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
    { num: '01', emoji: '🔍', title: 'AUDIT', color: '#00D2FF', sub: 'Understand your business' },
    { num: '02', emoji: '✏️', title: 'DESIGN', color: '#FFD700', sub: 'Build your Chart of Accounts' },
    { num: '03', emoji: '🔄', title: 'MIGRATION', color: '#22c55e', sub: 'Configure & migrate data' },
    { num: '04', emoji: '🎓', title: 'TRAINING', color: '#00D2FF', sub: 'Train, verify, launch' },
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
   UPWORK PORTFOLIO ASSET STUDIO — V2.0
   INSPIRON TECH · MD ABU HASAN
   4 canvas modes · 1600×1200px · JPG 0.95 export
   ═══════════════════════════════════════════════════════════════════════════ */

export default function UpworkAssetsStudio() {
    const [activeMode, setActiveMode] = useState<ActiveMode>('uw-hero');
    const [isExporting, setIsExporting] = useState(false);

    const [uwData, setUwData] = useState<UpworkData>({
        tag: 'Official Manager.io Partner',
        headline: 'Manager.io ERP',
        highlight: 'Setup & Data Migration',
        subtext: 'Clean COA · Zero-Loss Migration · Audit-Ready Reports',
        name: 'MD ABU HASAN',
        role: 'Founder & ERP Architect',
        website: 'inspiron.tech',
    });

    // Canvas auto-scaling
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

    /* ─── EXPORT ──────────────────────────────────────────────────────────── */
    const handleExport = async () => {
        setIsExporting(true);
        try {
            const { default: html2canvas } = await import('html2canvas');
            const el = document.getElementById('data-export-canvas');
            if (!el) return;

            // Hide blur orbs — html2canvas renders them as solid blobs
            const orbs = el.querySelectorAll<HTMLElement>('[data-blur-orb]');
            orbs.forEach(o => (o.style.display = 'none'));

            const canvas = await html2canvas(el, {
                scale: 1,
                useCORS: true,
                backgroundColor: '#010409',
                allowTaint: true,
                logging: false,
            });

            // Restore orbs
            orbs.forEach(o => (o.style.display = ''));

            const a = document.createElement('a');
            a.download = `inspiron_${activeMode}_1x_${Date.now()}.jpg`;
            a.href = canvas.toDataURL('image/jpeg', 0.95);
            a.click();
        } catch (err) {
            console.error('Export failed:', err);
        } finally {
            setIsExporting(false);
        }
    };

    /* ─── PRESET LOADER ───────────────────────────────────────────────────── */
    const applyPreset = (key: string) => {
        const p = PRESETS[key];
        if (p) setUwData(prev => ({ ...prev, ...p }));
    };

    /* ─── CANVAS RENDERERS ────────────────────────────────────────────────── */

    const renderHero = () => (
        <div className="flex flex-col items-center justify-center h-full text-center">
            {/* Logo + Wordmark */}
            <div className="flex items-center gap-4 mb-10">
                <RefinedIcon size={64} />
                <div className="flex items-baseline">
                    <span className="text-[28px] font-medium lowercase text-white" style={{ fontFamily: 'Neo Sans Pro, sans-serif' }}>inspiron</span>
                    <span className="text-[26px] font-light uppercase text-[#FFD700] ml-1.5" style={{ fontFamily: 'Neo Sans Pro, sans-serif' }}>TECH</span>
                </div>
            </div>

            {/* Tag Badge */}
            <div className="inline-block px-10 py-4 border border-[#00D2FF]/30 bg-[#00D2FF]/8 text-[#00D2FF] font-bold tracking-[0.3em] uppercase rounded-full mb-14 text-xl backdrop-blur-sm">
                {uwData.tag}
            </div>

            {/* Headline */}
            <h1 className="text-[110px] font-black text-white leading-[1.05] tracking-tight mb-4" style={{ fontFamily: 'Neo Sans Pro, sans-serif' }}>
                {uwData.headline}
            </h1>
            <h2 className="text-[85px] font-light text-[#FFD700] leading-tight mb-14" style={{ fontFamily: 'Neo Sans Pro, sans-serif', fontStyle: 'italic' }}>
                {uwData.highlight}
            </h2>

            {/* Subtext */}
            <p className="text-3xl text-[#9CA3AF] max-w-[1000px] leading-relaxed mb-20">
                {uwData.subtext}
            </p>

            {/* Bottom Cards */}
            <div className="flex gap-8">
                {[
                    { icon: '📊', label: 'P&L Statement' },
                    { icon: '🏦', label: 'Balance Sheet' },
                    { icon: '💸', label: 'Cash Flow' },
                ].map(c => (
                    <div key={c.label} className="bg-white/[0.04] border border-[#00D2FF]/20 rounded-2xl px-14 py-8 flex items-center gap-5" style={{ boxShadow: '0 0 24px rgba(0,210,255,0.08)' }}>
                        <span className="text-4xl">{c.icon}</span>
                        <span className="text-2xl text-white font-medium">{c.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderBeforeAfter = () => (
        <div className="flex flex-col h-full">
            {/* Top watermark */}
            <div className="flex items-center justify-center gap-3 mb-6 opacity-60">
                <RefinedIcon size={36} />
                <div className="flex items-baseline">
                    <span className="text-[18px] font-medium lowercase text-white" style={{ fontFamily: 'Neo Sans Pro, sans-serif' }}>inspiron</span>
                    <span className="text-[16px] font-light uppercase text-[#FFD700] ml-1" style={{ fontFamily: 'Neo Sans Pro, sans-serif' }}>TECH</span>
                </div>
            </div>

            {/* Two Panels */}
            <div className="grid grid-cols-2 gap-10 flex-1">
                {/* BEFORE */}
                <div className="bg-[#0a0505]/80 border border-red-500/20 rounded-3xl p-14 relative overflow-hidden">
                    <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-red-500 rounded-full opacity-[0.04] blur-[200px] pointer-events-none" />
                    <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-red-900/90 text-white px-8 py-3 rounded-full font-bold tracking-widest uppercase border border-red-500/50 text-lg z-10">Before</div>

                    <h3 className="text-4xl font-light text-red-400 mb-8 mt-4" style={{ fontFamily: 'Neo Sans Pro, sans-serif' }}>
                        Spreadsheets &amp; broken ERP
                    </h3>

                    {/* Fake spreadsheet rows */}
                    <div className="space-y-3 opacity-60">
                        {Array.from({ length: 9 }).map((_, i) => (
                            <div key={i} className="flex gap-3 items-center">
                                <div className="w-24 h-5 bg-gray-600/30 rounded" />
                                <div className="w-16 h-5 bg-gray-600/20 rounded" />
                                <div className="flex-1 h-5 bg-gray-600/15 rounded" />
                                <div className="w-20 h-5 bg-yellow-500/20 rounded" />
                            </div>
                        ))}
                    </div>
                    <p className="text-lg text-gray-500 mt-8 font-mono">??? errors · no audit trail</p>
                </div>

                {/* AFTER */}
                <div className="bg-[#00D2FF]/[0.06] border border-[#00D2FF]/30 rounded-3xl p-14 relative overflow-hidden">
                    <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-[#00D2FF] rounded-full opacity-[0.06] blur-[200px] pointer-events-none" />
                    <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-[#00D2FF] text-[#010409] px-8 py-3 rounded-full font-black tracking-widest uppercase text-lg z-10" style={{ boxShadow: '0 0 20px rgba(0,210,255,0.4)' }}>After</div>

                    <h3 className="text-4xl font-light text-[#00D2FF] mb-10 mt-4" style={{ fontFamily: 'Neo Sans Pro, sans-serif' }}>
                        Stable Manager.io accounting core
                    </h3>

                    {/* Result cards */}
                    <div className="space-y-6">
                        {[
                            { icon: '📈', label: 'P&L Statement', status: 'Synced', color: '#22c55e' },
                            { icon: '🏦', label: 'Balance Sheet', status: 'Audit-Ready', color: '#00D2FF' },
                            { icon: '💸', label: 'Cash Flow', status: 'Accurate', color: '#FFD700' },
                        ].map(r => (
                            <div key={r.label} className="bg-[#050a10] border border-[#00D2FF]/20 rounded-2xl px-10 py-7 flex items-center justify-between" style={{ boxShadow: '0 0 16px rgba(0,210,255,0.06)' }}>
                                <div className="flex items-center gap-5">
                                    <span className="text-4xl">{r.icon}</span>
                                    <span className="text-2xl text-white font-medium">{r.label}</span>
                                </div>
                                <span className="px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest" style={{ backgroundColor: `${r.color}20`, color: r.color, border: `1px solid ${r.color}40` }}>{r.status}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-lg text-[#00D2FF]/60 mt-8 font-mono">0 errors · full reconciliation</p>
                </div>
            </div>
        </div>
    );

    const renderProcess = () => (
        <div className="flex flex-col items-center h-full justify-between">
            {/* Header */}
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-8 opacity-80">
                    <RefinedIcon size={52} />
                    <div className="flex items-baseline">
                        <span className="text-[22px] font-medium lowercase text-white" style={{ fontFamily: 'Neo Sans Pro, sans-serif' }}>inspiron</span>
                        <span className="text-[20px] font-light uppercase text-[#FFD700] ml-1" style={{ fontFamily: 'Neo Sans Pro, sans-serif' }}>TECH</span>
                    </div>
                </div>
                <div className="text-[#9CA3AF] font-bold tracking-[0.3em] uppercase mb-6 text-lg">DELIVERY PROTOCOL</div>
                <h1 className="text-[72px] font-black text-white leading-tight border-b-2 border-[#00D2FF] pb-4 inline-block" style={{ fontFamily: 'Neo Sans Pro, sans-serif' }}>
                    Your Setup in 4 Clear Steps
                </h1>
            </div>

            {/* 4-Step Grid */}
            <div className="grid grid-cols-4 gap-8 w-full flex-1 items-center py-8">
                {PROCESS_STEPS.map((s, i) => (
                    <React.Fragment key={s.num}>
                        <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-12 text-center relative">
                            {/* Step Number Circle */}
                            <div className="w-20 h-20 rounded-full border-2 flex items-center justify-center text-3xl font-black absolute -top-10 left-1/2 -translate-x-1/2" style={{ borderColor: s.color, color: s.color, backgroundColor: `${s.color}15` }}>
                                {s.num}
                            </div>
                            {/* Emoji */}
                            <div className="text-7xl mt-6 mb-6">{s.emoji}</div>
                            {/* Title */}
                            <h3 className="text-3xl font-bold uppercase tracking-widest mb-3" style={{ color: s.color }}>
                                {s.title}
                            </h3>
                            {/* Sub */}
                            <p className="text-xl text-[#9CA3AF]">{s.sub}</p>
                        </div>
                    </React.Fragment>
                ))}
            </div>

            {/* Bottom Badge */}
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl px-14 py-6 text-xl text-white font-mono tracking-wide">
                Zero-Loss Protocol · 0.1% Error Tolerance · Every Stage Verified
            </div>
        </div>
    );

    const renderPricing = () => (
        <div className="flex flex-col items-center h-full pt-8">
            {/* Header */}
            <div className="flex items-center justify-center gap-3 mb-6 opacity-80">
                <RefinedIcon size={52} />
                <div className="flex items-baseline">
                    <span className="text-[22px] font-medium lowercase text-white" style={{ fontFamily: 'Neo Sans Pro, sans-serif' }}>inspiron</span>
                    <span className="text-[20px] font-light uppercase text-[#FFD700] ml-1" style={{ fontFamily: 'Neo Sans Pro, sans-serif' }}>TECH</span>
                </div>
            </div>
            <h1 className="text-[68px] font-black text-white leading-tight mb-2" style={{ fontFamily: 'Neo Sans Pro, sans-serif' }}>
                Choose Your <span className="text-[#00D2FF]">ERP Package</span>
            </h1>
            <p className="text-2xl text-[#9CA3AF] mb-14">{uwData.subtext}</p>

            {/* 3-Tier Grid */}
            <div className="grid grid-cols-3 gap-8 w-full items-stretch flex-1 max-h-[750px]">
                {PRICING_TIERS.map(tier => (
                    <div
                        key={tier.name}
                        className={`rounded-3xl p-12 flex flex-col relative ${
                            tier.featured
                                ? 'bg-gradient-to-b from-[#00D2FF]/10 to-transparent border-2 border-[#00D2FF]/50 -mt-4 pb-16'
                                : 'bg-white/[0.03] border border-white/10 mt-6'
                        }`}
                    >
                        {tier.featured && (
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#00D2FF] text-[#010409] px-8 py-2.5 rounded-full font-black tracking-widest uppercase text-sm">
                                Most Popular
                            </div>
                        )}

                        <h3 className={`text-4xl font-bold uppercase tracking-wider mb-8 ${tier.featured ? 'text-[#00D2FF]' : 'text-white'}`}>
                            {tier.name}
                        </h3>

                        <div className="space-y-5 flex-1">
                            {tier.items.map(item => (
                                <div key={item} className="flex items-start gap-4">
                                    <span className="text-[#FFD700] text-2xl mt-0.5">✓</span>
                                    <span className="text-xl text-gray-300">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="mt-auto pt-8 text-center">
                <p className="text-lg text-[#9CA3AF] font-mono">{uwData.website} · {uwData.name} · {uwData.role}</p>
            </div>
        </div>
    );

    /* ─── MODE BUTTONS ────────────────────────────────────────────────────── */
    const modes: { id: ActiveMode; label: string }[] = [
        { id: 'uw-hero', label: 'Hero' },
        { id: 'uw-before-after', label: 'Before / After' },
        { id: 'uw-process', label: 'Process' },
        { id: 'uw-pricing', label: 'Pricing' },
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
                    UPWORK PORTFOLIO STUDIO // V2.0 // ACTIVE
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
                        <SidebarInput label="Tag / Eyebrow" value={uwData.tag} onChange={v => setUwData(p => ({ ...p, tag: v }))} />
                        <SidebarInput label="Headline" value={uwData.headline} onChange={v => setUwData(p => ({ ...p, headline: v }))} />
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
                            <SidebarInput label="Name" value={uwData.name} onChange={v => setUwData(p => ({ ...p, name: v }))} />
                        </div>
                        <SidebarInput label="Role" value={uwData.role} onChange={v => setUwData(p => ({ ...p, role: v }))} />
                        <SidebarInput label="Website" value={uwData.website} onChange={v => setUwData(p => ({ ...p, website: v }))} />
                    </div>

                    {/* System Note */}
                    <div className="mt-6 bg-[#14a800]/10 border border-[#14a800]/30 rounded-lg px-4 py-3 text-[11px] text-[#14a800] font-mono">
                        &gt;&gt; EXPORT: JPG 0.95q — enforced &lt;10MB Upwork compliance
                        <br />
                        &gt;&gt; CANVAS: 1600×1200px · 4:3 · Blur orbs hidden on export
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
                    {/* Scale indicator */}
                    <div className="absolute top-4 right-4 text-[10px] font-mono text-gray-600 z-10">
                        {(scale * 100).toFixed(0)}% · 1600×1200
                    </div>

                    <div style={{ transform: `scale(${scale})` }} className="origin-center transition-transform duration-300 ease-out">
                        {/* ═══ THE EXPORT CANVAS ═══ */}
                        <div
                            id="data-export-canvas"
                            className="w-[1600px] h-[1200px] relative overflow-hidden flex flex-col border border-white/5"
                            style={{ backgroundColor: '#010409', padding: '64px' }}
                        >
                            {/* Grid Overlay */}
                            <div
                                className="absolute inset-0 pointer-events-none z-0"
                                style={{
                                    backgroundImage: 'linear-gradient(to right, rgba(0,210,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,210,255,0.03) 1px, transparent 1px)',
                                    backgroundSize: '40px 40px',
                                }}
                            />

                            {/* Blur Orbs (hidden on export) */}
                            <div data-blur-orb className="absolute top-[-300px] right-[-300px] w-[900px] h-[900px] bg-[#00D2FF] rounded-full opacity-[0.07] pointer-events-none z-0" style={{ filter: 'blur(200px)' }} />
                            <div data-blur-orb className="absolute bottom-[-300px] left-[-300px] w-[800px] h-[800px] bg-[#FFD700] rounded-full opacity-[0.04] pointer-events-none z-0" style={{ filter: 'blur(200px)' }} />

                            {/* Watermark Logo */}
                            <div className="absolute bottom-12 right-12 z-50 opacity-50">
                                <RefinedIcon size={72} />
                            </div>

                            {/* Website Watermark */}
                            <div className="absolute bottom-14 left-16 z-50 text-[#9CA3AF] opacity-40 font-mono text-lg tracking-widest">
                                {uwData.website}
                            </div>

                            {/* ─── DYNAMIC CONTENT ─── */}
                            <div className="relative z-10 flex flex-col h-full">
                                {activeMode === 'uw-hero' && renderHero()}
                                {activeMode === 'uw-before-after' && renderBeforeAfter()}
                                {activeMode === 'uw-process' && renderProcess()}
                                {activeMode === 'uw-pricing' && renderPricing()}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
