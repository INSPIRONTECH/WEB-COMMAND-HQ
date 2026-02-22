"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Scale, Layout, Monitor, Users, Activity, Settings, RefreshCcw,
    Maximize2, Smartphone, BadgeCheck, Download, Sun, Moon, Grid, ShieldCheck
} from 'lucide-react';

/**
 * ─── ASSET COMMAND NODE: INSTITUTIONAL EQUILIBRIUM EDITION ──────────────────
 * REV 2026.12 - Fixed: Shared State, FB Subtext, Audit Weight Test,
 *               Scale Init, Flex Overflow/Centering.
 */

const LINKEDIN_PRESETS = [
    { id: "architect", label: "The Architect", headline: "Deploy Your", highlight: "Architecture", sub: "We architect the accounting logic other consultants walk away from." },
    { id: "outcomes", label: "Zero Fluff", headline: "Stop Buying Software.", highlight: "Buy Outcomes.", sub: "We don't have account managers. We have architects." },
    { id: "forensics", label: "Financial Forensics", headline: "Find The Leak.", highlight: "Plug The Gap.", sub: "Your ledger is bleeding capital. We know exactly where." },
    { id: "complexity", label: "Complexity Challenge", headline: "Simple Shop?", highlight: "Use Excel.", sub: "Multi-entity manufacturing with inter-company billing? Call us." },
    { id: "execution", label: "The Execution", headline: "Theory is Free.", highlight: "Logic is Expensive.", sub: "Deploy Your Logic. 0.1% Error Tolerance." },
];

type ActiveMode =
    | 'linkedin' | 'linkedin-profile' | 'linkedin-page' | 'linkedin-page-logo' | 'linkedin-post'
    | 'facebook' | 'facebook-personal' | 'facebook-page' | 'facebook-group' | 'facebook-post'
    | 'instagram' | 'instagram-profile' | 'whatsapp' | 'whatsapp-business' | 'whatsapp-business-cover'
    | 'profile' | 'audit';


const PLATFORMS = [
    // Core
    { id: 'linkedin', icon: Layout, label: 'LI Banner', canvas: '1584×396' },
    { id: 'facebook-personal', icon: Monitor, label: 'FB Cover', canvas: '820×360' },
    { id: 'whatsapp', icon: Smartphone, label: 'WA Status', canvas: '1080×1920' },
    { id: 'profile', icon: Users, label: 'Universal Profile', canvas: '400×400' },

    // Facebook
    { id: 'facebook-page', icon: Monitor, label: 'FB Page', canvas: '820×360' },
    { id: 'facebook-group', icon: Monitor, label: 'FB Group', canvas: '820×360' },
    { id: 'facebook-post', icon: Monitor, label: 'FB Post', canvas: '1200×630' },

    // LinkedIn
    { id: 'linkedin-profile', icon: Users, label: 'LI Profile', canvas: '400×400' },
    { id: 'linkedin-page', icon: Layout, label: 'LI Page', canvas: '1128×191' },
    { id: 'linkedin-page-logo', icon: Users, label: 'LI Logo', canvas: '400×400' },
    { id: 'linkedin-post', icon: Monitor, label: 'LI Post', canvas: '1200×627' },

    // Instagram
    { id: 'instagram', icon: Grid, label: 'IG Post', canvas: '1080×1080' },
    { id: 'instagram-profile', icon: Users, label: 'IG Profile', canvas: '1080×1080' },

    // WhatsApp
    { id: 'whatsapp-business', icon: Smartphone, label: 'WA Biz Pic', canvas: '500×500' },
    { id: 'whatsapp-business-cover', icon: Monitor, label: 'WA Biz Cover', canvas: '1211×681' },

    // Audit
    { id: 'audit', icon: Activity, label: 'Audit', canvas: 'Variable' },
] as const;

type RenderMode = 'dark' | 'light' | 'blueprint';


const MODE_SCALES: Record<ActiveMode, number> = {
    linkedin: 0.4,
    'linkedin-profile': 0.8,
    'linkedin-page': 0.7,
    'linkedin-page-logo': 0.8,
    'linkedin-post': 0.5,
    facebook: 0.65,
    'facebook-personal': 0.65,
    'facebook-page': 0.65,
    'facebook-group': 0.65,
    'facebook-post': 0.5,
    instagram: 0.4,
    'instagram-profile': 0.4,
    whatsapp: 0.28,
    'whatsapp-business': 0.8,
    'whatsapp-business-cover': 0.45,
    profile: 0.8,
    audit: 0.7,
};



// ─── SHARED UI PRIMITIVES ──────────────────────────────────────────────────
const TechInput = ({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) => (
    <div className="space-y-1 group">
        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold font-mono group-hover:text-electric-cyan transition-colors">{label}</label>
        <input type="text" value={value} onChange={e => onChange(e.target.value)} spellCheck={false}
            className="w-full bg-black/40 border border-white/10 rounded px-3 py-3 text-xs text-white focus:outline-none focus:border-electric-cyan focus:bg-electric-cyan/5 font-mono transition-all" />
    </div>
);

const TechTextArea = ({ label, value, onChange, rows }: { label: string; value: string; onChange: (v: string) => void; rows: number }) => (
    <div className="space-y-1 group">
        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold font-mono group-hover:text-electric-cyan transition-colors">{label}</label>
        <textarea value={value} onChange={e => onChange(e.target.value)} rows={rows} spellCheck={false}
            className="w-full bg-black/40 border border-white/10 rounded px-3 py-3 text-xs text-white focus:outline-none focus:border-electric-cyan focus:bg-electric-cyan/5 font-mono transition-all resize-none" />
    </div>
);


export default function SocialAssetsPage() {

    // ─── STATE ARCHITECTURE ─────────────────────────────────────────────────
    const [activeMode, setActiveMode] = useState<ActiveMode>('linkedin');
    const [renderMode, setRenderMode] = useState<RenderMode>('dark');

    // FIX 4: Scale derived from mode, synced via useEffect
    const [scale, setScale] = useState(MODE_SCALES['linkedin']);
    useEffect(() => {
        setScale(MODE_SCALES[activeMode]);
    }, [activeMode]);

    // FIX 2: Isolated state per platform — no more shared mutation
    const [linkedinData, setLinkedinData] = useState({
        tag: "Official Partner",
        headline: "Deploy Your",
        highlight: "Architecture",
        subtext: "We architect the accounting logic other consultants walk away from.",
        website: "inspiron.tech/architect",
        name: "MD ABU HASAN",
        role: "Founder & Chief Architect",
        metric1Val: "14+", metric1Lbl: "Years Exp",
        metric2Val: "0.1%", metric2Lbl: "Tolerance",
    });

    const [facebookData, setFacebookData] = useState({
        badge: "Official Manager.io Advisor",
        headline: "Institutional-Grade\nFinancial Architecture",
        subtext: "We don't have account managers. We have architects.",
        cta: "inspiron.tech/manager-bd",
    });

    const [whatsappData, setWhatsappData] = useState({
        badge: "INSPIRON TECH",
        headline: "Manager.io\nBangladesh",
        highlight: "Architecture", // Added back
        subtext: "Cloud Accounting | Custom Dashboards | NBR Compliance",
        cta: "inspiron.tech/architect", // shared for old status
        cta1: "Start Demo →",
        cta2: "01719-300849",
        tag: "Official Partner", // shared for old status
        name: "MD ABU HASAN", // shared for old status
        role: "Founder & Chief Architect", // shared for old status
    });

    const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');
    const [isMac, setIsMac] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsMac(navigator.userAgent.includes('Mac') || navigator.userAgent.includes('Macintosh'));
        }
    }, []);

    const [profileData, setProfileData] = useState({
        initials: "IT",
        role: "Chief Architect",
    });

    const [instagramData, setInstagramData] = useState({
        headline: "Deploy Your",
        highlight: "Architecture",
        subtext: "We architect the accounting logic other consultants walk away from.",
        cta: "inspiron.tech/architect",
    });

    const [auditState, setAuditState] = useState({
        grid: true,
        spine: true,
        weight: 500 as 300 | 500 | 700,
    });

    // ─── LOGIC HANDLERS ─────────────────────────────────────────────────────
    const loadPreset = (preset: typeof LINKEDIN_PRESETS[0]) => {
        setLinkedinData(prev => ({
            ...prev,
            headline: preset.headline,
            highlight: preset.highlight,
            subtext: preset.sub,
        }));
    };

    const getTheme = () => {
        switch (renderMode) {
            case 'light': return {
                bg: 'bg-slate-100', text: 'text-[#002147]', sub: 'text-slate-500',
                border: 'border-slate-200', metricBg: 'bg-white',
                grid: 'opacity-[0.05] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)]'
            };
            case 'blueprint': return {
                bg: 'bg-[#002147]', text: 'text-white', sub: 'text-slate-300',
                border: 'border-white/20', metricBg: 'bg-[#00152e]',
                grid: 'opacity-[0.15] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]'
            };
            default: return {
                bg: 'bg-[#010409]', text: 'text-white', sub: 'text-gray-300',
                border: 'border-white/10', metricBg: 'bg-white/5',
                grid: 'opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]'
            };
        }
    };
    const theme = getTheme();

    const MasterLogo = ({ idSuffix }: { idSuffix: string }) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 358.846 350.3" className="w-full h-full">
            <defs>
                <mask id={`inspiron-gap-${idSuffix}`} x="-1075.154" y="-1075" width="3000" height="3000" maskUnits="userSpaceOnUse">
                    <path fill="#fff" d="M-1075.154-1075h3000v3000h-3000z" />
                    <path d="M321.346 350c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5-49.2-81.1-52.8-87.8-52.6-88.4 5.5-8.8 19.4-31.2 27.4-43.8 3.3-5.4 5.7-9 6-9.4 1.6 2.7 27.4 45.3 49.4 81.8 17 28.2 31.9 52.8 32.2 53.5 4.2 7 4.2 15.2 0 22.5-5.2 9-15.4 14.9-25.6 14.9h-.8z" style={{ fill: 'none', stroke: '#000', strokeWidth: '24px' }} />
                </mask>
            </defs>
            <g mask={`url(#inspiron-gap-${idSuffix})`}>
                <path d="M87.046 349.3c-30.8 0-57.9-14.8-74.3-40.9-15.4-24.2-16.9-55-4.2-80.5 7.8-14.2 32.9-53.9 57.4-92.4 15.1-23.7 29.3-46.1 39.3-62.6 2.7-4.3 4.8-7.8 8.4-11.5 11.4-13.1 28.1-20.6 45.6-20.6s33.8 8.1 43.8 22.1c5.5 7.8,9.1,16.9,10.3 26.4.3 2.5-.4 4.8-2.1 7.5-1.9 3.3-21.8 34.6-21.8 34.6-.6.9-1.2 1.9-1.8 2.8-1.3 2.2-2.4 4.2-3.9 4.2s-1.2-.3-1.8-.9c-4.2-4.9-8.2-11.5-12-18-2.4-4-4.5-7.9-6.9-11.2-1.8-2.8-4.8-4.5-7.8-4.5s-4.2 1-5.8 3c-5.2 8.1-27.5 43.8-45.6 72.7-11.8 18.9-22.1 35.3-25.4 40.4-2.2 3.6-5.2 8.1-7.9 12.5-1.6 2.7-3.3 5.4-4.8 7.8-.6 1-1.3 2.1-1.9 3.1-2.5 4-4.6 7.5-6.1 11.1-5.2 12.4-.4 27.3 10.9 34.6,5.5 3.6 11.4 5.4 17.5 5.4 12.3 0,25-7.6,32.9-20,5.5-8.1,23.6-37,45-70.6,31.7-50.4 67.9-107.5 76.1-118.7 6.3-6.7 14.5-10.8 22.7-10.8 9.3 0,18.2 5.1,23.2 13.1,4.8 7.9 5.4 16.8 1 24.7-3.6 7-6.6 11.3-10.9 18-3.1 4.9-7.3 11.2-13 20.6-14.4 22.5-31 48.7-47 74.2-24.4 38.9-47.7 75.7-55.3 86.8-17.5 24.1-45.5 38.6-75.1 38.6z" fill="#00D2FF" />
            </g>
            <path d="M321.346 350c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5-49.2-81.1-52.8-87.8-52.6-88.4 5.5-8.8 19.4-31.2 27.4-43.8 3.3-5.4 5.7-9 6-9.4 1.6 2.7 27.4 45.3 49.4 81.8 17 28.2 31.9 52.8 32.2 53.5 4.2 7 4.2 15.2 0 22.5-5.2 9-15.4 14.9-25.6 14.9h-.8z" fill="#00D2FF" />
            <circle cx="321.346" cy="37.5" r="37.5" fill="#FFD700" />
        </svg>
    );

    return (
        <div className="min-h-screen bg-[#010409] text-white font-institutional selection:bg-electric-cyan selection:text-black flex flex-col overflow-hidden">

            {/* ─── HUD ───────────────────────────────────────────────────── */}
            <nav className="sticky top-0 z-50 bg-[#010409]/80 backdrop-blur-md border-b border-white/10 h-16 shrink-0">
                <div className="max-w-[1920px] mx-auto px-6 h-full flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="hidden md:flex items-center gap-2 text-gray-500 hover:text-white text-[10px] font-mono tracking-widest transition-colors mr-4">
                            ← HOME
                        </Link>
                        <div className="w-8 h-8 bg-action-gold/10 rounded flex items-center justify-center border border-action-gold/20">
                            <Scale className="text-action-gold" size={16} />
                        </div>
                        <div>
                            <div className="text-xs font-bold tracking-[0.2em] uppercase text-white">Brand Asset Command</div>
                            <div className="text-[10px] text-gray-500 font-mono tracking-widest">MD ABU HASAN // STATUS: ACTIVE</div>
                        </div>
                    </div>
                    <div className="flex gap-1 bg-white/5 p-1 rounded-lg border border-white/5 overflow-x-auto scrollbar-none">
                        {(PLATFORMS as readonly typeof PLATFORMS[number][]).map((mode) => (
                            <button
                                key={mode.id}
                                onClick={() => setActiveMode(mode.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded text-[10px] font-bold uppercase tracking-widest transition-all ${activeMode === mode.id
                                    ? 'bg-electric-cyan text-deep-navy-black shadow-[0_0_20px_rgba(0,210,255,0.2)]'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <mode.icon size={14} />
                                <span className="hidden md:inline">{mode.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* ─── MAIN THEATER ──────────────────────────────────────────── */}
            {/* FIX 5: min-w-0 on main prevents flex children from overflowing */}
            <main className="flex-1 flex flex-col lg:flex-row lg:h-[calc(100vh-64px)] lg:overflow-hidden min-w-0">

                {/* ─── CONTROLS ──────────────────────────────────────────── */}
                <aside className="w-full max-h-[50vh] lg:max-h-none lg:w-[420px] bg-[#050a10] border-r border-white/10 overflow-y-auto custom-scrollbar flex flex-col shrink-0 z-10">
                    <div className="p-6 space-y-8">
                        <div className="flex items-center gap-2 pb-4 border-b border-white/10">
                            <Settings className="text-electric-cyan" size={16} />
                            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">Parameter Configuration</h2>
                        </div>

                        {/* LINKEDIN CONTROLS */}
                        {activeMode.startsWith('linkedin') && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-action-gold font-bold flex items-center gap-2">
                                        <RefreshCcw size={10} /> Strategic Presets
                                    </label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {LINKEDIN_PRESETS.map(preset => (
                                            <button key={preset.id} onClick={() => loadPreset(preset)}
                                                className="text-left px-3 py-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-electric-cyan/30 rounded text-[10px] text-gray-300 transition-all truncate">
                                                {preset.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="h-px bg-white/10" />
                                <TechInput label="Badge Tag" value={linkedinData.tag} onChange={v => setLinkedinData({ ...linkedinData, tag: v })} />
                                <TechInput label="Headline" value={linkedinData.headline} onChange={v => setLinkedinData({ ...linkedinData, headline: v })} />
                                <TechInput label="Gold Highlight" value={linkedinData.highlight} onChange={v => setLinkedinData({ ...linkedinData, highlight: v })} />
                                <TechTextArea label="Sub-Narrative" value={linkedinData.subtext} onChange={v => setLinkedinData({ ...linkedinData, subtext: v })} rows={3} />
                                <div className="h-px bg-white/10" />
                                <div className="grid grid-cols-2 gap-3">
                                    <TechInput label="Name" value={linkedinData.name} onChange={v => setLinkedinData({ ...linkedinData, name: v })} />
                                    <TechInput label="Role" value={linkedinData.role} onChange={v => setLinkedinData({ ...linkedinData, role: v })} />
                                    <TechInput label="Metric 1 Val" value={linkedinData.metric1Val} onChange={v => setLinkedinData({ ...linkedinData, metric1Val: v })} />
                                    <TechInput label="Metric 1 Lbl" value={linkedinData.metric1Lbl} onChange={v => setLinkedinData({ ...linkedinData, metric1Lbl: v })} />
                                    <TechInput label="Metric 2 Val" value={linkedinData.metric2Val} onChange={v => setLinkedinData({ ...linkedinData, metric2Val: v })} />
                                    <TechInput label="Metric 2 Lbl" value={linkedinData.metric2Lbl} onChange={v => setLinkedinData({ ...linkedinData, metric2Lbl: v })} />
                                </div>
                                <div className="h-px bg-white/10" />
                                <TechInput label="Website / CTA" value={linkedinData.website} onChange={v => setLinkedinData({ ...linkedinData, website: v })} />
                            </div>
                        )}

                        {/* FACEBOOK CONTROLS */}
                        {activeMode.startsWith('facebook') && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                                <div className="grid grid-cols-3 gap-2 mb-4">
                                    {(['personal', 'page', 'group'] as const).map(v => (
                                        <button key={v} onClick={() => setActiveMode(`facebook-${v}` as ActiveMode)}
                                            className={`p-3 rounded text-[10px] font-bold uppercase tracking-widest transition-all ${activeMode === `facebook-${v}` ? 'bg-electric-cyan text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>
                                            {v}
                                        </button>
                                    ))}
                                </div>
                                <TechInput label="Top Badge" value={facebookData.badge} onChange={v => setFacebookData({ ...facebookData, badge: v })} />
                                <TechTextArea label="Headline (\\n = new line)" value={facebookData.headline} onChange={v => setFacebookData({ ...facebookData, headline: v })} rows={3} />
                                <TechTextArea label="Sub-Narrative" value={facebookData.subtext} onChange={v => setFacebookData({ ...facebookData, subtext: v })} rows={2} />
                                <TechInput label="CTA Button" value={facebookData.cta} onChange={v => setFacebookData({ ...facebookData, cta: v })} />
                            </div>
                        )}

                        {/* WHATSAPP CONTROLS */}
                        {activeMode.startsWith('whatsapp') && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                                <div className="p-3 bg-white/5 border border-white/10 rounded text-[10px] text-gray-400 font-mono uppercase tracking-widest">
                                    MODE: {activeMode.replace(/-/g, ' ')}
                                </div>
                                <TechInput label="Badge / Tag" value={activeMode === 'whatsapp' ? whatsappData.tag : whatsappData.badge}
                                    onChange={v => activeMode === 'whatsapp' ? setWhatsappData({ ...whatsappData, tag: v }) : setWhatsappData({ ...whatsappData, badge: v })} />
                                <TechInput label="Headline" value={whatsappData.headline} onChange={v => setWhatsappData({ ...whatsappData, headline: v })} />
                                <TechInput label="Gold Highlight" value={whatsappData.highlight} onChange={v => setWhatsappData({ ...whatsappData, highlight: v })} />
                                <TechTextArea label="Sub-Narrative" value={whatsappData.subtext} onChange={v => setWhatsappData({ ...whatsappData, subtext: v })} rows={4} />

                                {activeMode === 'whatsapp' && (
                                    <>
                                        <div className="h-px bg-white/10" />
                                        <TechInput label="Name" value={whatsappData.name} onChange={v => setWhatsappData({ ...whatsappData, name: v })} />
                                        <TechInput label="Role" value={whatsappData.role} onChange={v => setWhatsappData({ ...whatsappData, role: v })} />
                                        <TechInput label="Bottom CTA" value={whatsappData.cta} onChange={v => setWhatsappData({ ...whatsappData, cta: v })} />
                                    </>
                                )}

                                {activeMode === 'whatsapp-business-cover' && (
                                    <>
                                        <div className="h-px bg-white/10" />
                                        <TechInput label="CTA 1 (Primary)" value={whatsappData.cta1} onChange={v => setWhatsappData({ ...whatsappData, cta1: v })} />
                                        <TechInput label="CTA 2 (Secondary)" value={whatsappData.cta2} onChange={v => setWhatsappData({ ...whatsappData, cta2: v })} />
                                    </>
                                )}
                            </div>
                        )}

                        {/* INSTAGRAM CONTROLS */}
                        {activeMode.startsWith('instagram') && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                                <TechInput label="Headline" value={instagramData.headline}
                                    onChange={v => setInstagramData({ ...instagramData, headline: v })} />
                                <TechInput label="Gold Highlight" value={instagramData.highlight}
                                    onChange={v => setInstagramData({ ...instagramData, highlight: v })} />
                                <TechTextArea label="Sub-Narrative" value={instagramData.subtext}
                                    onChange={v => setInstagramData({ ...instagramData, subtext: v })} rows={3} />
                                <TechInput label="CTA" value={instagramData.cta}
                                    onChange={v => setInstagramData({ ...instagramData, cta: v })} />
                            </div>
                        )}

                        {/* PROFILE CONTROLS (Universal) */}
                        {activeMode === 'profile' && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                                <TechInput label="Initials" value={profileData.initials} onChange={v => setProfileData({ ...profileData, initials: v })} />
                                <TechInput label="Role Badge" value={profileData.role} onChange={v => setProfileData({ ...profileData, role: v })} />
                                <div className="p-4 bg-action-gold/5 border border-action-gold/20 rounded text-[10px] text-action-gold/80 font-mono leading-relaxed">
                                    &gt;&gt; SYSTEM NOTE: Generates BRAND CONTAINER (400×400). Overlay transparent PNG headshot in post-production.
                                </div>
                            </div>
                        )}

                        {/* AUDIT CONTROLS — FIX 3: weight test re-added */}
                        {activeMode === 'audit' && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                                <div className="p-3 bg-electric-cyan/5 border border-electric-cyan/20 rounded text-[10px] text-electric-cyan font-mono">STATUS: GEOMETRIC INTEGRITY CHECK</div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/5">
                                        <span className="text-xs text-gray-400 uppercase tracking-widest">Coordinate Grid</span>
                                        <button onClick={() => setAuditState(s => ({ ...s, grid: !s.grid }))}
                                            className={`w-8 h-4 rounded-full relative transition-colors ${auditState.grid ? 'bg-electric-cyan' : 'bg-gray-700'}`}>
                                            <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${auditState.grid ? 'left-[18px]' : 'left-0.5'}`} />
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/5">
                                        <span className="text-xs text-gray-400 uppercase tracking-widest">Structural Spine</span>
                                        <button onClick={() => setAuditState(s => ({ ...s, spine: !s.spine }))}
                                            className={`w-8 h-4 rounded-full relative transition-colors ${auditState.spine ? 'bg-action-gold' : 'bg-gray-700'}`}>
                                            <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${auditState.spine ? 'left-[18px]' : 'left-0.5'}`} />
                                        </button>
                                    </div>
                                </div>
                                <div className="h-px bg-white/10" />
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Type Weight Stress Test</label>
                                    <div className="grid grid-cols-3 gap-2">
                                        {([300, 500, 700] as const).map(w => (
                                            <button key={w} onClick={() => setAuditState(s => ({ ...s, weight: w }))}
                                                className={`py-2 border rounded text-xs font-mono transition-all ${auditState.weight === w ? 'bg-white text-black border-white' : 'bg-transparent text-gray-500 border-white/10'}`}>
                                                {w}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="mt-auto p-6 border-t border-white/10 text-[10px] text-gray-600 font-mono text-center">
                        INSPIRON_SOCIAL_GENERATOR_V2.13
                    </div>
                </aside>

                {/* ─── RIGHT: LIVE CANVAS ─────────────────────────────────── */}
                {/* FIX 5: min-w-0 prevents overflow; w-fit mx-auto centers canvas */}
                <div className="flex-1 bg-[#0a0a0a] relative flex flex-col items-center justify-center overflow-hidden min-w-0">

                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

                    {/* Toolbar */}
                    <div className="absolute top-6 right-6 z-20 flex gap-4">
                        <div className="flex gap-1 bg-black/60 backdrop-blur border border-white/10 p-1 rounded-full">
                            {(['desktop', 'mobile'] as const).map(p => (
                                <button key={p} onClick={() => setPreviewMode(p)}
                                    className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${previewMode === p ? 'bg-electric-cyan text-deep-navy-black' : 'text-gray-500 hover:text-white'}`}>
                                    {p === 'desktop' ? '🖥️ Desktop' : '📱 Mobile'}
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-1 bg-black/60 backdrop-blur border border-white/10 p-1 rounded-full">
                            {([{ id: 'dark', icon: Moon }, { id: 'light', icon: Sun }, { id: 'blueprint', icon: Grid }] as { id: RenderMode; icon: React.ElementType }[]).map(m => (
                                <button key={m.id} onClick={() => setRenderMode(m.id)}
                                    className={`p-2 rounded-full transition-all ${renderMode === m.id ? 'bg-electric-cyan text-deep-navy-black' : 'text-gray-500 hover:text-white'}`}>
                                    <m.icon size={14} />
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-2 bg-black/60 backdrop-blur border border-white/10 rounded-full px-4 py-1.5">
                            <Maximize2 size={12} className="text-electric-cyan" />
                            <input type="range" min="0.15" max="1" step="0.05" value={scale}
                                onChange={e => setScale(parseFloat(e.target.value))}
                                className="w-24 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-electric-cyan" />
                            <span className="text-[10px] font-mono text-electric-cyan w-8 text-right">{Math.round(scale * 100)}%</span>
                        </div>
                    </div>

                    {/* ─── RENDER STAGE ──────────────────────────────────── */}
                    <div className="w-full h-full flex items-center justify-center p-4 md:p-10 lg:p-20 overflow-auto custom-scrollbar">

                        {/* 1. LINKEDIN (1584 × 396) */}
                        {activeMode === 'linkedin' && (
                            <div style={{ transform: `scale(${scale})` }} className="transition-transform duration-200 ease-out shadow-2xl origin-center flex-shrink-0 w-fit">
                                <div className={`w-[1584px] h-[396px] ${theme.bg} relative overflow-hidden flex items-center justify-between px-24 ring-1 ring-white/5 transition-colors duration-500`}>
                                    <div className={`absolute inset-0 ${theme.grid} [background-size:24px_24px]`} />
                                    <div className="absolute right-0 top-0 w-[600px] h-[600px] blur-[120px] rounded-full opacity-20" style={{ backgroundColor: '#00D2FF' }} />
                                    <div className="relative z-10 w-2/3">
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="px-3 py-1 border text-xl font-bold rounded uppercase tracking-widest"
                                                style={{ borderColor: '#00D2FF', color: '#00D2FF', backgroundColor: 'rgba(0,210,255,0.05)' }}>
                                                {linkedinData.tag}
                                            </span>
                                            <span className={`${theme.sub} text-xl font-light`}>|</span>
                                            <span className={`${theme.text} text-xl font-bold tracking-wider`}>Manager.io</span>
                                        </div>
                                        <h1 className={`text-7xl font-black ${theme.text} uppercase tracking-tight leading-[0.9] mb-6 font-institutional`}>
                                            {linkedinData.headline}<br />
                                            <span style={{ color: '#FFD700' }}>{linkedinData.highlight}</span>
                                        </h1>
                                        <p className={`${theme.sub} text-2xl font-light max-w-2xl font-institutional leading-relaxed tracking-wide`}>
                                            {linkedinData.subtext}
                                        </p>
                                    </div>
                                    <div className="relative z-10 text-right space-y-8 w-1/3">
                                        <div>
                                            <div className="font-mono text-xl mb-2 tracking-wide" style={{ color: '#00D2FF' }}>{linkedinData.website}</div>
                                            <div className={`${theme.text} font-bold text-3xl font-institutional`}>{linkedinData.name}</div>
                                            <div className={`${theme.sub} uppercase tracking-widest text-sm`}>{linkedinData.role}</div>
                                        </div>
                                        <div className="flex gap-4 justify-end">
                                            <div className={`${theme.metricBg} px-6 py-3 rounded-xl ${theme.border} border backdrop-blur-sm`}>
                                                <div className="font-bold text-2xl font-mono" style={{ color: '#FFD700' }}>{linkedinData.metric1Val}</div>
                                                <div className={`text-[10px] ${theme.sub} uppercase tracking-widest`}>{linkedinData.metric1Lbl}</div>
                                            </div>
                                            <div className={`${theme.metricBg} px-6 py-3 rounded-xl ${theme.border} border backdrop-blur-sm`}>
                                                <div className="font-bold text-2xl font-mono" style={{ color: '#00D2FF' }}>{linkedinData.metric2Val}</div>
                                                <div className={`text-[10px] ${theme.sub} uppercase tracking-widest`}>{linkedinData.metric2Lbl}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-center text-xs text-gray-500 font-mono opacity-50">1584 × 396 PX // LINKEDIN_BANNER</div>
                            </div>
                        )}

                        {/* 2. FACEBOOK COVER (820 × 360) */}
                        {activeMode.startsWith('facebook') && activeMode !== 'facebook-post' && (
                            <div style={{ transform: `scale(${scale * (previewMode === 'mobile' ? 0.78 : 1)})` }} className="transition-transform duration-200 ease-out shadow-2xl origin-center flex-shrink-0 w-fit">
                                <div className={`w-[820px] h-[360px] ${theme.bg} relative overflow-hidden flex items-center justify-center text-center ${theme.border} border transition-colors duration-500`}>
                                    <div className={`absolute inset-0 ${theme.grid} [background-size:20px_20px]`} />

                                    {/* SAFE AREA OVERLAY — Critical for mobile */}
                                    <div className="absolute inset-0 pointer-events-none z-20">
                                        <div className="absolute left-1/2 top-1/2 w-[640px] h-[360px] -translate-x-1/2 -translate-y-1/2 border-4 border-red-500/50 rounded-lg" />
                                        <div className="absolute left-0 top-0 w-[90px] h-full bg-red-500/10" /> {/* Left crop simulation */}
                                        <div className="absolute right-0 top-0 w-[90px] h-full bg-red-500/10" /> {/* Right crop simulation */}
                                    </div>

                                    <div className="relative z-10 px-16 py-12 max-w-[640px]">
                                        <div className="inline-flex items-center gap-2 text-lg font-bold uppercase tracking-[0.2em] mb-6" style={{ color: '#FFD700' }}>
                                            <BadgeCheck size={20} /> {facebookData.badge}
                                        </div>
                                        <h2 className={`text-5xl font-black ${theme.text} uppercase tracking-tight mb-6 whitespace-pre-line leading-tight font-institutional`}>
                                            {facebookData.headline}
                                        </h2>
                                        <p className={`${theme.sub} text-base font-light mb-8 max-w-lg mx-auto font-institutional leading-relaxed`}>
                                            {facebookData.subtext}
                                        </p>
                                        <div className="inline-block px-10 py-4 font-bold uppercase tracking-widest text-sm rounded-full shadow-[0_0_20px_rgba(0,210,255,0.4)]"
                                            style={{ backgroundColor: '#00D2FF', color: '#010409' }}>
                                            {facebookData.cta}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-center text-xs text-gray-500 font-mono opacity-50">
                                    820 × 360 PX // FB {activeMode.split('-')[1]?.toUpperCase() || 'COVER'} (Safe Area: 640×360 Center) ✨
                                </div>
                            </div>
                        )}

                        {/* 2b. FACEBOOK POST (1200 × 630) */}
                        {activeMode === 'facebook-post' && (
                            <div style={{ transform: `scale(${scale})` }} className="transition-transform duration-200 ease-out shadow-2xl origin-center flex-shrink-0 w-fit">
                                <div className={`w-[1200px] h-[630px] ${theme.bg} relative overflow-hidden flex items-center justify-center text-center ${theme.border} border transition-colors duration-500`}>
                                    <div className={`absolute inset-0 ${theme.grid} [background-size:30px_30px]`} />
                                    <div className="relative z-10 px-24">
                                        <div className="w-24 h-24 mx-auto mb-8"><MasterLogo idSuffix="fb-post" /></div>
                                        <h2 className={`text-6xl font-black ${theme.text} uppercase tracking-tight mb-8 whitespace-pre-line font-institutional`}>
                                            {facebookData.headline}
                                        </h2>
                                        <p className={`${theme.sub} text-2xl font-light mb-12 max-w-2xl mx-auto font-institutional`}>
                                            {facebookData.subtext}
                                        </p>
                                        <div className="px-12 py-5 bg-electric-cyan text-black font-black uppercase tracking-widest text-xl rounded-xl inline-block">
                                            {facebookData.cta}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-center text-xs text-gray-500 font-mono opacity-50">1200 × 630 PX // FB_POST</div>
                            </div>
                        )}

                        {/* 3. WHATSAPP (1080 × 1920) — FIX 2: isolated whatsappData */}
                        {activeMode === 'whatsapp' && (
                            <div style={{ transform: `scale(${scale})` }} className="transition-transform duration-200 ease-out shadow-2xl origin-center flex-shrink-0 w-fit">
                                <div className={`w-[1080px] h-[1920px] ${theme.bg} relative overflow-hidden flex flex-col justify-between p-32 ring-1 ring-white/5 transition-colors duration-500`}>
                                    <div className={`absolute inset-0 ${theme.grid} [background-size:40px_40px]`} />
                                    <div className="absolute top-0 right-0 w-[800px] h-[800px] blur-[150px] rounded-full opacity-10" style={{ backgroundColor: '#00D2FF' }} />
                                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] blur-[150px] rounded-full opacity-10" style={{ backgroundColor: '#FFD700' }} />
                                    <div className="relative z-10">
                                        <div className="w-32 h-32 mb-12"><MasterLogo idSuffix="wa" /></div>
                                        <div className="inline-flex items-center gap-3 mb-8">
                                            <span className="px-4 py-2 border text-2xl font-bold rounded uppercase tracking-widest"
                                                style={{ borderColor: '#00D2FF', color: '#00D2FF' }}>
                                                {whatsappData.tag}
                                            </span>
                                        </div>
                                        <h1 className={`text-8xl font-black ${theme.text} uppercase tracking-tight leading-[0.9] mb-8 font-institutional`}>
                                            {whatsappData.headline}<br />
                                            <span style={{ color: '#FFD700' }}>{whatsappData.highlight}</span>
                                        </h1>
                                        <p className={`${theme.sub} text-4xl font-light font-institutional leading-relaxed`}>
                                            {whatsappData.subtext}
                                        </p>
                                    </div>
                                    <div className="relative z-10">
                                        <div className="w-full h-px bg-white/10 mb-12" />
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <div className={`${theme.text} font-bold text-4xl font-institutional mb-2`}>{whatsappData.name}</div>
                                                <div className={`${theme.sub} uppercase tracking-widest text-xl`}>{whatsappData.role}</div>
                                            </div>
                                            <div className="px-10 py-4 rounded-full text-2xl font-bold uppercase tracking-widest text-[#010409]"
                                                style={{ backgroundColor: '#00D2FF' }}>
                                                {whatsappData.cta}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-center text-xs text-gray-500 font-mono opacity-50">1080 × 1920 PX // WHATSAPP_STATUS</div>
                            </div>
                        )}

                        {/* 4. PROFILE VARIANTS (400, 500, 1080) */}
                        {(activeMode === 'profile' || activeMode === 'linkedin-profile' || activeMode === 'whatsapp-business' || activeMode === 'instagram-profile' || activeMode === 'linkedin-page-logo') && (
                            <div style={{ transform: `scale(${scale})` }} className="transition-transform duration-200 ease-out shadow-2xl origin-center flex-shrink-0 w-fit">
                                <div className={`relative ${activeMode === 'whatsapp-business' ? 'w-[500px] h-[500px]' :
                                    activeMode === 'instagram-profile' ? 'w-[1080px] h-[1080px]' :
                                        'w-[400px] h-[400px]'
                                    } ${activeMode === 'linkedin-page-logo' ? 'rounded-none' : 'rounded-full'} overflow-hidden ${theme.bg} border-4 shadow-2xl flex items-center justify-center transition-colors duration-500`}
                                    style={{ borderColor: '#FFD700' }}>
                                    <div className="absolute inset-0 bg-[radial-gradient(#00C2FF_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
                                    <div className="z-10 text-center flex flex-col items-center">
                                        <div className={`${activeMode === 'instagram-profile' ? 'text-[300px]' : 'text-9xl'} font-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none font-institutional ${renderMode === 'light' ? 'text-black/5' : 'text-white/5'}`}>
                                            {profileData.initials}
                                        </div>
                                        <div className={`${activeMode === 'instagram-profile' ? 'w-96 h-96' : 'w-48 h-48'} rounded-full flex items-center justify-center mb-6 border-2 border-white/10 mx-auto overflow-hidden p-8 bg-gray-800/50 backdrop-blur-sm`}>
                                            <MasterLogo idSuffix="profile-v" />
                                        </div>
                                        <div className="px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest inline-block shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                                            style={{ backgroundColor: '#FFD700', color: '#010409' }}>
                                            {activeMode === 'whatsapp-business' ? whatsappData.badge : profileData.role}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-center text-xs text-gray-500 font-mono opacity-50 uppercase tracking-widest">
                                    {activeMode === 'whatsapp-business' ? '500 × 500' :
                                        activeMode === 'instagram-profile' ? '1080 × 1080' : '400 × 400'} PX // {activeMode.replace(/-/g, '_').toUpperCase()}
                                </div>
                            </div>
                        )}


                        {/* 5. LINKEDIN PAGE (1128 × 191) */}
                        {activeMode === 'linkedin-page' && (
                            <div style={{ transform: `scale(${scale})` }} className="transition-transform duration-200 ease-out shadow-2xl origin-center flex-shrink-0 w-fit">
                                <div className={`w-[1128px] h-[191px] ${theme.bg} relative overflow-hidden flex items-center px-12 ${theme.border} border transition-colors duration-500`}>
                                    <div className={`absolute inset-0 ${theme.grid} [background-size:20px_20px]`} />
                                    <div className="relative z-10 flex items-center gap-12 w-full">
                                        <div className="w-24 h-24 shrink-0"><MasterLogo idSuffix="li-page" /></div>
                                        <div>
                                            <h2 className={`text-4xl font-black ${theme.text} uppercase tracking-tight font-institutional`}>
                                                {linkedinData.headline} <span style={{ color: '#FFD700' }}>{linkedinData.highlight}</span>
                                            </h2>
                                            <p className={`${theme.sub} text-sm font-light uppercase tracking-[0.2em] mt-2`}>
                                                {linkedinData.subtext.substring(0, 60)}...
                                            </p>
                                        </div>
                                        <div className="ml-auto font-mono text-xl text-electric-cyan">{linkedinData.website}</div>
                                    </div>
                                </div>
                                <div className="mt-2 text-center text-xs text-gray-500 font-mono opacity-50">1128 × 191 PX // LI_PAGE_BANNER</div>
                            </div>
                        )}

                        {/* 6. LINKEDIN POST / INSTAGRAM (Standard Squares/Landscape) */}
                        {(activeMode === 'linkedin-post' || activeMode === 'instagram') && (
                            <div style={{ transform: `scale(${scale})` }} className="transition-transform duration-200 ease-out shadow-2xl origin-center flex-shrink-0 w-fit">
                                <div className={`${activeMode === 'instagram' ? 'w-[1080px] h-[1080px]' : 'w-[1200px] h-[627px]'} ${theme.bg} relative overflow-hidden flex items-center justify-center text-center p-24 ${theme.border} border transition-colors duration-500`}>
                                    <div className={`absolute inset-0 ${theme.grid} [background-size:40px_40px]`} />
                                    <div className="relative z-10">
                                        <div className="w-32 h-32 mx-auto mb-10"><MasterLogo idSuffix="social-post" /></div>
                                        <h2 className={`text-7xl font-black ${theme.text} uppercase tracking-tight mb-8 leading-tight font-institutional`}>
                                            {activeMode === 'instagram' ? instagramData.headline : linkedinData.headline}<br />
                                            <span style={{ color: '#FFD700' }}>{activeMode === 'instagram' ? instagramData.highlight : linkedinData.highlight}</span>
                                        </h2>
                                        <p className={`${theme.sub} text-2xl font-light mb-12 max-w-2xl mx-auto font-institutional leading-relaxed`}>
                                            {activeMode === 'instagram' ? instagramData.subtext : linkedinData.subtext}
                                        </p>
                                        <div className="px-12 py-5 bg-electric-cyan text-black font-black uppercase tracking-widest text-xl rounded-2xl inline-block shadow-lg">
                                            {activeMode === 'instagram' ? instagramData.cta : linkedinData.website}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-center text-xs text-gray-500 font-mono opacity-50">
                                    {activeMode === 'instagram' ? '1080 × 1080' : '1200 × 627'} PX // {activeMode.toUpperCase()}
                                </div>
                            </div>
                        )}

                        {/* 7. WHATSAPP BUSINESS COVER (1211 × 681) */}
                        {activeMode === 'whatsapp-business-cover' && (
                            <div style={{ transform: `scale(${scale})` }} className="w-fit transition-transform duration-200 ease-out shadow-2xl origin-center flex-shrink-0">
                                <div className={`w-[1211px] h-[681px] ${theme.bg} relative overflow-hidden flex items-center justify-center text-center ${theme.border} border rounded-xl`}>
                                    <div className="absolute inset-0 bg-gradient-to-r from-electric-cyan/20 via-transparent to-emerald-400/20" />
                                    <div className={`absolute inset-0 ${theme.grid} [background-size:30px_30px]`} />

                                    <div className="relative z-10 px-20 py-16 max-w-4xl mx-auto">
                                        <div className="inline-flex items-center gap-3 text-xl font-bold uppercase tracking-wide mb-8" style={{ color: '#25D366' }}>
                                            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                                <span className="text-white font-bold text-lg">B</span>
                                            </div>
                                            {whatsappData.badge}
                                        </div>
                                        <h2 className={`text-7xl font-black uppercase tracking-tight mb-8 leading-tight ${theme.text} font-institutional whitespace-pre-line`}>
                                            {whatsappData.headline}
                                        </h2>

                                        <p className={`${theme.sub} text-2xl font-light mb-12 max-w-2xl mx-auto leading-relaxed font-institutional`}>
                                            {whatsappData.subtext}
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                            <div className="inline-block px-12 py-5 font-bold uppercase tracking-widest text-lg rounded-2xl bg-gradient-to-r from-electric-cyan to-emerald-400 text-black shadow-[0_0_30px_rgba(0,210,255,0.3)]">
                                                {whatsappData.cta1}
                                            </div>
                                            <div className={`px-10 py-5 font-bold uppercase tracking-wide text-lg rounded-2xl border ${theme.border} backdrop-blur-sm`}>
                                                {whatsappData.cta2}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
                                </div>
                                <div className="mt-4 text-center text-sm text-gray-500 font-mono opacity-70">
                                    1211 × 681 PX (Recommended) or 1920 × 1080 PX (16:9) // WhatsApp Business Cover Photo ✨
                                </div>
                            </div>
                        )}

                        {/* 5. AUDIT — FIX 3: type weight stress test restored */}
                        {activeMode === 'audit' && (
                            <div style={{ transform: `scale(${scale})` }} className="transition-transform duration-200 ease-out origin-center flex-shrink-0 w-fit">
                                <div className={`bg-black/80 backdrop-blur ${theme.border} border rounded-2xl p-16 flex flex-col items-center gap-12 relative overflow-hidden`}>
                                    {auditState.grid && (
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00D2FF10_1px,transparent_1px),linear-gradient(to_bottom,#00D2FF10_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none z-0" />
                                    )}
                                    {/* Logo + Spine Overlay */}
                                    <div className="relative z-10 w-[400px] h-[400px]">
                                        <MasterLogo idSuffix="audit" />
                                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                            {auditState.spine && (
                                                <>
                                                    <line x1="321.346" y1="0" x2="321.346" y2="400" stroke="#FFD700" strokeWidth="1" strokeDasharray="5,5" />
                                                    <text x="330" y="390" fill="#FFD700" fontSize="12" fontFamily="monospace" style={{ writingMode: 'vertical-rl' }}>X = 321.346</text>
                                                    <line x1="321.346" y1="37.5" x2="400" y2="37.5" stroke="#FF0000" strokeWidth="1" />
                                                    <text x="345" y="30" fill="#FF0000" fontSize="10" fontFamily="monospace">r = 37.5</text>
                                                </>
                                            )}
                                        </svg>
                                    </div>
                                    {/* FIX 3: Type Weight Stress Test canvas block */}
                                    <div className="relative z-10 text-center w-full">
                                        <div className="text-[10px] text-gray-500 uppercase tracking-widest font-mono mb-4 border-b border-white/10 pb-2">
                                            Typographic Stress Test
                                        </div>
                                        <div className="text-6xl text-white font-institutional tracking-tight" style={{ fontWeight: auditState.weight }}>
                                            inspiron <span style={{ fontWeight: auditState.weight === 700 ? 700 : 300 }}>TECH</span>
                                        </div>
                                        <div className="mt-4 text-xs font-mono" style={{ color: '#00D2FF' }}>
                                            Rendering Weight: {auditState.weight}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Export Hint */}
                        <div className="absolute bottom-6 flex items-center gap-4">
                            <button
                                onClick={() => alert("Please use OS screenshot tools to capture the asset. A native export module is under development.")}
                                className="bg-[#00D2FF]/10 hover:bg-[#00D2FF]/20 border border-[#00D2FF]/30 text-[#00D2FF] px-6 py-3 rounded-full flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(0,210,255,0.1)] group">
                                <ShieldCheck size={14} className="group-hover:scale-110 transition-transform" />
                                EXPORT SYSTEM ASSET
                            </button>
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">
                                {isMac
                                    ? 'Cmd+Shift+4 for pixel-perfect capture'
                                    : 'Win+Shift+S for pixel-perfect capture'}
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

// ─── TECHNICAL COMPONENT PRIMITIVES ─────────────────────────────────────────
