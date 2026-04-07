"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { RefinedIcon } from '@/components/Branding/RefinedLogo';
import {
    Scale, Layout, Monitor, Users, Activity, Settings, RefreshCcw,
    Maximize2, Smartphone, BadgeCheck, Download, Sun, Moon, Grid, ShieldCheck,
    Layers, Circle, Crop, Code2
} from 'lucide-react';

type ExportBg      = 'transparent' | 'white' | 'black' | 'navy' | 'blueprint';
type ExportVariant = 'color' | 'bw' | 'white-on-dark' | 'black-on-light';

function getVariantFilter(variant: ExportVariant): string {
    switch (variant) {
        case 'bw':             return 'grayscale(100%)';
        case 'white-on-dark':  return 'brightness(0) invert(1)';
        case 'black-on-light': return 'brightness(0)';
        default:               return 'none';
    }
}

function getExportBgColor(bg: ExportBg): string | undefined {
    const map: Record<ExportBg, string | undefined> = {
        transparent: undefined,
        white:       '#FFFFFF',
        black:       '#000000',
        navy:        '#010409',
        blueprint:   '#002147',
    };
    return map[bg];
}

function downloadSVG(
    variant: 'color' | 'white' | 'black' | 'mono',
    logoFill: string,
    goldFill: string
) {
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 358.846 350.3">
  <defs>
    <mask id="inspiron-gap" x="-1075.154" y="-1075" width="3000" height="3000" maskUnits="userSpaceOnUse">
      <path fill="#fff" d="M-1075.154-1075h3000v3000h-3000z"/>
      <path d="M321.346 350c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5-49.2-81.1-52.8-87.8-52.6-88.4 5.5-8.8 19.4-31.2 27.4-43.8 3.3-5.4 5.7-9 6-9.4 1.6 2.7 27.4 45.3 49.4 81.8 17 28.2 31.9 52.8 32.2 53.5 4.2 7 4.2 15.2 0 22.5-5.2 9-15.4 14.9-25.6 14.9h-.8z" style="fill:none;stroke:#000;stroke-width:24px"/>
    </mask>
  </defs>
  <g mask="url(#inspiron-gap)">
    <path d="M87.046 349.3c-30.8 0-57.9-14.8-74.3-40.9-15.4-24.2-16.9-55-4.2-80.5 7.8-14.2 32.9-53.9 57.4-92.4 15.1-23.7 29.3-46.1 39.3-62.6 2.7-4.3 4.8-7.8 8.4-11.5 11.4-13.1 28.1-20.6 45.6-20.6s33.8 8.1 43.8 22.1c5.5 7.8,9.1,16.9,10.3 26.4.3 2.5-.4 4.8-2.1 7.5-1.9 3.3-21.8 34.6-21.8 34.6-.6.9-1.2 1.9-1.8 2.8-1.3 2.2-2.4 4.2-3.9 4.2s-1.2-.3-1.8-.9c-4.2-4.9-8.2-11.5-12-18-2.4-4-4.5-7.9-6.9-11.2-1.8-2.8-4.8-4.5-7.8-4.5s-4.2 1-5.8 3c-5.2 8.1-27.5 43.8-45.6 72.7-11.8 18.9-22.1 35.3-25.4 40.4-2.2 3.6-5.2 8.1-7.9 12.5-1.6 2.7-3.3 5.4-4.8 7.8-.6 1-1.3 2.1-1.9 3.1-2.5 4-4.6 7.5-6.1 11.1-5.2 12.4-.4 27.3 10.9 34.6,5.5 3.6 11.4 5.4 17.5 5.4 12.3 0,25-7.6,32.9-20,5.5-8.1,23.6-37,45-70.6,31.7-50.4 67.9-107.5 76.1-118.7 6.3-6.7 14.5-10.8 22.7-10.8 9.3 0,18.2 5.1,23.2 13.1,4.8 7.9 5.4 16.8 1 24.7-3.6 7-6.6 11.3-10.9 18-3.1 4.9-7.3 11.2-13 20.6-14.4 22.5-31 48.7-47 74.2-24.4 38.9-47.7 75.7-55.3 86.8-17.5 24.1-45.5 38.6-75.1 38.6z" fill="${logoFill}"/>
  </g>
  <path d="M321.346 350c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5-49.2-81.1-52.8-87.8-52.6-88.4 5.5-8.8 19.4-31.2 27.4-43.8 3.3-5.4 5.7-9 6-9.4 1.6 2.7 27.4 45.3 49.4 81.8 17 28.2 31.9 52.8 32.2 53.5 4.2 7 4.2 15.2 0 22.5-5.2 9-15.4 14.9-25.6 14.9h-.8z" fill="${logoFill}"/>
  <circle cx="321.346" cy="37.5" r="37.5" fill="${goldFill}"/>
</svg>`;
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = `inspiron-logo-${variant}.svg`;
    a.click();
    URL.revokeObjectURL(url);
}

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
    | 'profile' | 'audit'
    | 'upwork-hero' | 'upwork-before-after' | 'upwork-process' | 'upwork-pricing'
    | 'forum-header' | 'forum-card'
    | 'logo-square' | 'logo-round' | 'logo-custom' | 'logo-svg';


const PLATFORMS = [
    // Core
    { id: 'linkedin', icon: Layout, label: 'LI Banner', canvas: '1584×396' },
    { id: 'facebook-personal', icon: Monitor, label: 'FB Cover', canvas: '820×312' },
    { id: 'whatsapp', icon: Smartphone, label: 'WA Status', canvas: '1080×1920' },
    { id: 'profile', icon: Users, label: 'Universal Profile', canvas: '400×400' },

    // Facebook
    { id: 'facebook-page', icon: Monitor, label: 'FB Page', canvas: '820×360' },
    { id: 'facebook-group', icon: Monitor, label: 'FB Group', canvas: '1640×856' },
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
    // Upwork Portfolio
    { id: 'upwork-hero', icon: Monitor, label: 'UW Hero', canvas: '1600×1200' },
    { id: 'upwork-before-after', icon: Monitor, label: 'UW Before/After', canvas: '1600×1200' },
    { id: 'upwork-process', icon: Monitor, label: 'UW Process', canvas: '1600×1200' },
    { id: 'upwork-pricing', icon: Monitor, label: 'UW Pricing', canvas: '1600×1200' },
    // Manager.io Forum
    { id: 'forum-header', icon: Layout, label: 'Forum Header', canvas: '1110×300' },
    { id: 'forum-card', icon: Users, label: 'Forum Card', canvas: '590×300' },
    // Brand Logo
    { id: 'logo-square', icon: Layers, label: 'Logo Square', canvas: 'Custom' },
    { id: 'logo-round',  icon: Circle, label: 'Logo Round',  canvas: 'Custom' },
    { id: 'logo-custom', icon: Crop,   label: 'Logo Custom', canvas: 'Custom' },
    { id: 'logo-svg',    icon: Code2,  label: 'Logo SVG',    canvas: 'Vector' },
] as const;


const NAV_GROUPS = [
    {
        id: 'linkedin', label: 'LinkedIn', dot: '#0077B5',
        modes: ['linkedin', 'linkedin-profile', 'linkedin-page', 'linkedin-page-logo', 'linkedin-post'],
    },
    {
        id: 'facebook', label: 'Facebook', dot: '#1877F2',
        modes: ['facebook-personal', 'facebook-page', 'facebook-group', 'facebook-post'],
    },
    {
        id: 'instagram', label: 'Instagram', dot: '#E1306C',
        modes: ['instagram', 'instagram-profile'],
    },
    {
        id: 'whatsapp', label: 'WhatsApp', dot: '#25D366',
        modes: ['whatsapp', 'whatsapp-business', 'whatsapp-business-cover'],
    },
    {
        id: 'brand-tools', label: 'Brand Tools', dot: '#FFD700',
        modes: ['profile', 'audit'],
    },
    {
        id: 'upwork', label: 'Upwork', dot: '#14a800',
        modes: ['upwork-hero', 'upwork-before-after', 'upwork-process', 'upwork-pricing'],
    },
    {
        id: 'forum', label: 'Forum', dot: '#00D2FF',
        modes: ['forum-header', 'forum-card'],
    },
    {
        id: 'brand', label: 'Brand', dot: '#FFD700',
        modes: ['logo-square', 'logo-round', 'logo-custom', 'logo-svg'],
    },
] as const;

type RenderMode = 'dark' | 'light' | 'blueprint';


const MODE_SCALES: Record<ActiveMode, number> = {
    linkedin: 0.4,
    'linkedin-profile': 0.8,
    'linkedin-page': 0.7,
    'linkedin-page-logo': 0.8,
    'linkedin-post': 0.5,
    facebook: 0.65, // kept for compatibility — not a navigable mode, acts as shared scale
    'facebook-personal': 0.65,
    'facebook-page': 0.65,
    'facebook-group': 0.28,
    'facebook-post': 0.5,
    instagram: 0.4,
    'instagram-profile': 0.4,
    whatsapp: 0.28,
    'whatsapp-business': 0.8,
    'whatsapp-business-cover': 0.45,
    profile: 0.8,
    audit: 0.7,
    'upwork-hero': 0.38,
    'upwork-before-after': 0.38,
    'upwork-process': 0.38,
    'upwork-pricing': 0.38,
    'forum-header': 0.6,
    'forum-card': 0.9,
    'logo-square': 0.8,
    'logo-round':  0.8,
    'logo-custom': 0.7,
    'logo-svg':    0.8,
};

// ─── TECHNICAL COMPONENT PRIMITIVES ─────────────────────────────────────────

const InstitutionalInput = ({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) => (
    <div className="space-y-1 group">
        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold font-mono group-hover:text-electric-cyan transition-colors">{label}</label>
        <input type="text" value={value} onChange={e => onChange(e.target.value)} spellCheck={false}
            className="w-full bg-black/40 border border-white/10 rounded px-3 py-3 text-xs text-white focus:outline-none focus:border-electric-cyan focus:bg-electric-cyan/5 font-mono transition-all" />
    </div>
);

const InstitutionalTextArea = ({ label, value, onChange, rows }: { label: string; value: string; onChange: (v: string) => void; rows: number }) => (
    <div className="space-y-1 group">
        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold font-mono group-hover:text-electric-cyan transition-colors">{label}</label>
        <textarea value={value} onChange={e => onChange(e.target.value)} rows={rows} spellCheck={false}
            className="w-full bg-black/40 border border-white/10 rounded px-3 py-3 text-xs text-white focus:outline-none focus:border-electric-cyan focus:bg-electric-cyan/5 font-mono transition-all resize-none" />
    </div>
);

// ── MODULE SCOPE — React treats this as a stable reference across renders ─────
// (previously inside SocialAssetsPage which caused remount on every state change)
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

export default function SocialAssetsPage() {

    // ─── STATE ARCHITECTURE ─────────────────────────────────────────────────
    const [activeMode, setActiveMode] = useState<ActiveMode>('linkedin');
    const [renderMode, setRenderMode] = useState<RenderMode>('dark');
    const [showSafeZone, setShowSafeZone] = useState(true);

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


    const [isExporting, setIsExporting] = useState(false);
    const [activeGroup, setActiveGroup] = useState<string | null>(null);
    const [logoData, setLogoData] = useState({
        size: 500,
        customW: 500,
        customH: 500,
        variant: 'color' as 'color' | 'white' | 'black' | 'mono',
    });
    const [exportConfig, setExportConfig] = useState({
        bg:      'transparent' as ExportBg,
        variant: 'color'       as ExportVariant,
        scale:   2             as 1 | 2 | 3,
        padding: 0,
        format:  'png'         as 'png' | 'jpg' | 'svg',
    });

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

    const [upworkData, setUpworkData] = useState({
        tag: 'Official Manager.io Partner',
        headline: 'Manager.io ERP',
        highlight: 'Setup & Data Migration',
        subtext: 'Clean COA · Zero-Loss Migration · Audit-Ready Reports',
        name: 'MD ABU HASAN',
        role: 'Founder & ERP Architect',
        website: 'inspiron.tech',
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
    // ─── COMPUTED LOGO VALUES ────────────────────────────────────────────────
    const logoW = activeMode === 'logo-custom' ? logoData.customW :
                  logoData.size === 0 ? logoData.customW : logoData.size;
    const logoH = activeMode === 'logo-custom' ? logoData.customH :
                  logoData.size === 0 ? logoData.customH : logoData.size;
    const logoFill = logoData.variant === 'color' ? '#00D2FF'
                   : logoData.variant === 'white' ? '#FFFFFF'
                   : logoData.variant === 'black' ? '#000000'
                   : '#888888';
    const goldFill = logoData.variant === 'color' ? '#FFD700'
                   : logoData.variant === 'white' ? '#FFFFFF'
                   : logoData.variant === 'black' ? '#000000'
                   : '#CCCCCC';
    const logoBg = getExportBgColor(exportConfig.bg);

    // ─── EXPORT HANDLER ─────────────────────────────────────────────────────
    const handleExport = useCallback(async () => {
        // SVG vector path — bypasses html2canvas
        if (exportConfig.format === 'svg' && activeMode === 'logo-svg') {
            downloadSVG(logoData.variant, logoFill, goldFill);
            return;
        }

        const target = document.querySelector('[data-export-canvas]') as HTMLElement;
        if (!target) return;
        setIsExporting(true);

        const safeZones = document.querySelectorAll('[data-safezone]');
        safeZones.forEach(el => (el as HTMLElement).style.display = 'none');

        try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const html2canvas = (await import('html2canvas' as any)).default;

            // Apply variant filter temporarily
            const prevFilter = target.style.filter;
            target.style.filter = getVariantFilter(exportConfig.variant);

            // Apply padding
            const prevPadding = target.style.padding;
            if (exportConfig.padding > 0) target.style.padding = `${exportConfig.padding}px`;

            // Hide blur orbs (html2canvas renders CSS blur as solid blobs)
            const blurOrbs = Array.from(target.querySelectorAll<HTMLElement>('[class]')).filter(el => {
                const cls = typeof el.className === 'string' ? el.className : '';
                return cls.split(' ').some(token => token.startsWith('blur-['));
            });
            blurOrbs.forEach(el => el.style.setProperty('visibility', 'hidden', 'important'));

            const bgColor = getExportBgColor(exportConfig.bg);
            const isUpwork = activeMode.startsWith('upwork-');
            const isJpg = exportConfig.format === 'jpg' || isUpwork;

            const cvs = await html2canvas(target, {
                scale: exportConfig.scale,
                useCORS: true,
                backgroundColor: bgColor ?? null,
                logging: false,
                width: target.offsetWidth,
                height: target.offsetHeight,
            });

            // Restore
            target.style.filter = prevFilter;
            target.style.padding = prevPadding;
            blurOrbs.forEach(el => el.style.removeProperty('visibility'));

            let finalCanvas = cvs;

            if (activeMode === 'logo-round') {
                // Create a new canvas with same dimensions
                const circleCanvas = document.createElement('canvas');
                circleCanvas.width = cvs.width;
                circleCanvas.height = cvs.height;
                const ctx = circleCanvas.getContext('2d');
                if (ctx) {
                    const r = cvs.width / 2;
                    // Draw circular clip path
                    ctx.beginPath();
                    ctx.arc(r, r, r, 0, Math.PI * 2);
                    ctx.closePath();
                    ctx.clip();
                    // Draw the html2canvas output into the clipped circle
                    ctx.drawImage(cvs, 0, 0);
                    finalCanvas = circleCanvas;
                }
            }

            const ext = isJpg ? 'jpg' : 'png';
            const link = document.createElement('a');
            link.download = `inspiron_${activeMode}_${exportConfig.scale}x_${Date.now()}.${ext}`;
            link.href = finalCanvas.toDataURL(isJpg ? 'image/jpeg' : 'image/png', isJpg ? 0.95 : 1.0);
            link.click();
        } catch {
            alert('Export failed — ensure html2canvas is installed: npm i html2canvas');
        } finally {
            safeZones.forEach(el => (el as HTMLElement).style.display = '');
            setIsExporting(false);
        }
    }, [activeMode, exportConfig, logoData, logoFill, goldFill]);


    return (
        <div className="min-h-screen bg-deep-navy-black text-institutional-white font-institutional selection:bg-electric-cyan selection:text-black flex flex-col overflow-hidden">

            {/* ─── HUD ───────────────────────────────────────────────────── */}
            <nav className="sticky top-0 z-50 bg-deep-navy-black/90 backdrop-blur-md border-b border-white/10 shrink-0">
                <div className="max-w-[1920px] mx-auto px-6">
                    {/* Row 1: brand + category tabs */}
                    <div className="h-14 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 shrink-0">
                            <Link href="/" className="hidden md:flex items-center gap-2 text-gray-500 hover:text-white text-[10px] font-mono tracking-widest transition-colors mr-2">
                                ← HOME
                            </Link>
                            <div className="w-7 h-7 bg-action-gold/10 rounded flex items-center justify-center border border-action-gold/20">
                                <Scale className="text-action-gold" size={14} />
                            </div>
                            <div className="hidden sm:block">
                                <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-white leading-none">Brand Asset Command</div>
                                <div className="text-[9px] text-gray-500 font-mono tracking-widest mt-0.5">V2.14 // ACTIVE</div>
                            </div>
                        </div>
                        {/* Category tabs */}
                        <div className="flex gap-1 overflow-x-auto scrollbar-none">
                            {NAV_GROUPS.map((group) => {
                                const isActive = activeGroup === group.id;
                                return (
                                    <button
                                        key={group.id}
                                        onClick={() => {
                                            if (activeGroup === group.id) {
                                                setActiveGroup(null); // toggle off = show all
                                            } else {
                                                setActiveGroup(group.id);
                                                setActiveMode(group.modes[0] as ActiveMode);
                                            }
                                        }}
                                        className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap ${isActive
                                            ? 'text-white border-b-2'
                                            : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                                            }`}
                                        style={isActive ? { borderBottomColor: group.dot, backgroundColor: `${group.dot}15` } : {}}
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: group.dot }} />
                                        {group.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex gap-1 bg-white/5 p-1 rounded-lg border border-white/5 overflow-x-auto scrollbar-none">
                        {(PLATFORMS as readonly typeof PLATFORMS[number][]).filter(p => {
                            if (!activeGroup) return true; // show all when no category selected
                            const grp = NAV_GROUPS.find(g => g.id === activeGroup);
                            return grp?.modes.includes(p.id as never) ?? true;
                        }).map((mode) => (
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
            <main className="flex-1 flex flex-col lg:flex-row lg:h-[calc(100vh-96px)] lg:overflow-hidden min-w-0">

                {/* ─── CONTROLS ──────────────────────────────────────────── */}
                <aside className="w-full max-h-[50vh] lg:max-h-none lg:w-[420px] bg-deep-navy-black border-r border-white/10 overflow-y-auto custom-scrollbar flex flex-col shrink-0 z-10">
                    <div className="p-6 space-y-8">
                        <div className="flex items-center gap-2 pb-4 border-b border-white/10">
                            <Settings className="text-electric-cyan" size={16} />
                            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">Parameter Configuration</h2>
                        </div>

                        {/* LINKEDIN CONTROLS */}
                        {activeMode.startsWith('linkedin') && (
                            <div suppressHydrationWarning className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
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
                                <InstitutionalInput label="Badge Tag" value={linkedinData.tag} onChange={v => setLinkedinData({ ...linkedinData, tag: v })} />
                                <InstitutionalInput label="Headline" value={linkedinData.headline} onChange={v => setLinkedinData({ ...linkedinData, headline: v })} />
                                <InstitutionalInput label="Gold Highlight" value={linkedinData.highlight} onChange={v => setLinkedinData({ ...linkedinData, highlight: v })} />
                                <InstitutionalTextArea label="Sub-Narrative" value={linkedinData.subtext} onChange={v => setLinkedinData({ ...linkedinData, subtext: v })} rows={3} />
                                <div className="h-px bg-white/10" />
                                <div className="grid grid-cols-2 gap-3">
                                    <InstitutionalInput label="Name" value={linkedinData.name} onChange={v => setLinkedinData({ ...linkedinData, name: v })} />
                                    <InstitutionalInput label="Role" value={linkedinData.role} onChange={v => setLinkedinData({ ...linkedinData, role: v })} />
                                    <InstitutionalInput label="Metric 1 Val" value={linkedinData.metric1Val} onChange={v => setLinkedinData({ ...linkedinData, metric1Val: v })} />
                                    <InstitutionalInput label="Metric 1 Lbl" value={linkedinData.metric1Lbl} onChange={v => setLinkedinData({ ...linkedinData, metric1Lbl: v })} />
                                    <InstitutionalInput label="Metric 2 Val" value={linkedinData.metric2Val} onChange={v => setLinkedinData({ ...linkedinData, metric2Val: v })} />
                                    <InstitutionalInput label="Metric 2 Lbl" value={linkedinData.metric2Lbl} onChange={v => setLinkedinData({ ...linkedinData, metric2Lbl: v })} />
                                </div>
                                <div className="h-px bg-white/10" />
                                <InstitutionalInput label="Website / CTA" value={linkedinData.website} onChange={v => setLinkedinData({ ...linkedinData, website: v })} />
                            </div>
                        )}

                        {/* FACEBOOK CONTROLS */}
                        {activeMode.startsWith('facebook') && (
                            <div suppressHydrationWarning className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                                <div className="grid grid-cols-3 gap-2 mb-4">
                                    {(['personal', 'page', 'group'] as const).map(v => (
                                        <button key={v} onClick={() => setActiveMode(`facebook-${v}` as ActiveMode)}
                                            className={`p-3 rounded text-[10px] font-bold uppercase tracking-widest transition-all ${activeMode === `facebook-${v}` ? 'bg-electric-cyan text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>
                                            {v}
                                        </button>
                                    ))}
                                </div>
                                <InstitutionalInput label="Top Badge" value={facebookData.badge} onChange={v => setFacebookData({ ...facebookData, badge: v })} />
                                <InstitutionalTextArea label="Headline (\\n = new line)" value={facebookData.headline} onChange={v => setFacebookData({ ...facebookData, headline: v })} rows={3} />
                                <InstitutionalTextArea label="Sub-Narrative" value={facebookData.subtext} onChange={v => setFacebookData({ ...facebookData, subtext: v })} rows={2} />
                                <InstitutionalInput label="CTA Button" value={facebookData.cta} onChange={v => setFacebookData({ ...facebookData, cta: v })} />
                            </div>
                        )}

                        {/* WHATSAPP CONTROLS */}
                        {activeMode.startsWith('whatsapp') && (
                            <div suppressHydrationWarning className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                                <div className="p-3 bg-white/5 border border-white/10 rounded text-[10px] text-gray-400 font-mono uppercase tracking-widest">
                                    MODE: {activeMode.replace(/-/g, ' ')}
                                </div>
                                <InstitutionalInput label="Badge / Tag" value={activeMode === 'whatsapp' ? whatsappData.tag : whatsappData.badge}
                                    onChange={v => activeMode === 'whatsapp' ? setWhatsappData({ ...whatsappData, tag: v }) : setWhatsappData({ ...whatsappData, badge: v })} />
                                <InstitutionalInput label="Headline" value={whatsappData.headline} onChange={v => setWhatsappData({ ...whatsappData, headline: v })} />
                                <InstitutionalInput label="Gold Highlight" value={whatsappData.highlight} onChange={v => setWhatsappData({ ...whatsappData, highlight: v })} />
                                <InstitutionalTextArea label="Sub-Narrative" value={whatsappData.subtext} onChange={v => setWhatsappData({ ...whatsappData, subtext: v })} rows={4} />

                                {activeMode === 'whatsapp' && (
                                    <>
                                        <div className="h-px bg-white/10" />
                                        <InstitutionalInput label="Name" value={whatsappData.name} onChange={v => setWhatsappData({ ...whatsappData, name: v })} />
                                        <InstitutionalInput label="Role" value={whatsappData.role} onChange={v => setWhatsappData({ ...whatsappData, role: v })} />
                                        <InstitutionalInput label="Bottom CTA" value={whatsappData.cta} onChange={v => setWhatsappData({ ...whatsappData, cta: v })} />
                                    </>
                                )}

                                {activeMode === 'whatsapp-business-cover' && (
                                    <>
                                        <div className="h-px bg-white/10" />
                                        <InstitutionalInput label="CTA 1 (Primary)" value={whatsappData.cta1} onChange={v => setWhatsappData({ ...whatsappData, cta1: v })} />
                                        <InstitutionalInput label="CTA 2 (Secondary)" value={whatsappData.cta2} onChange={v => setWhatsappData({ ...whatsappData, cta2: v })} />
                                    </>
                                )}
                            </div>
                        )}

                        {/* INSTAGRAM CONTROLS */}
                        {activeMode.startsWith('instagram') && (
                            <div suppressHydrationWarning className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                                <InstitutionalInput label="Headline" value={instagramData.headline}
                                    onChange={v => setInstagramData({ ...instagramData, headline: v })} />
                                <InstitutionalInput label="Gold Highlight" value={instagramData.highlight}
                                    onChange={v => setInstagramData({ ...instagramData, highlight: v })} />
                                <InstitutionalTextArea label="Sub-Narrative" value={instagramData.subtext}
                                    onChange={v => setInstagramData({ ...instagramData, subtext: v })} rows={3} />
                                <InstitutionalInput label="CTA" value={instagramData.cta}
                                    onChange={v => setInstagramData({ ...instagramData, cta: v })} />
                            </div>
                        )}

                        {/* PROFILE CONTROLS (Universal) */}
                        {activeMode === 'profile' && (
                            <div suppressHydrationWarning className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                                <InstitutionalInput label="Initials" value={profileData.initials} onChange={v => setProfileData({ ...profileData, initials: v })} />
                                <InstitutionalInput label="Role Badge" value={profileData.role} onChange={v => setProfileData({ ...profileData, role: v })} />
                                <div className="p-4 bg-action-gold/5 border border-action-gold/20 rounded text-[10px] text-action-gold/80 font-mono leading-relaxed">
                                    &gt;&gt; SYSTEM NOTE: Generates BRAND CONTAINER (400×400). Overlay transparent PNG headshot in post-production.
                                </div>
                            </div>
                        )}

                        {/* AUDIT CONTROLS */}
                        {activeMode === 'audit' && (
                            <div suppressHydrationWarning className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
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

                        {/* UPWORK CONTROLS */}
                        {activeMode.startsWith('upwork') && (
                            <div suppressHydrationWarning className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                                <div className="p-3 bg-[#14a800]/10 border border-[#14a800]/30 rounded text-[10px] text-[#14a800] font-mono uppercase tracking-widest">Upwork Portfolio Assets // JPG Export</div>
                                <div className="grid grid-cols-2 gap-2">
                                    {(['upwork-hero', 'upwork-before-after', 'upwork-process', 'upwork-pricing'] as const).map(m => (
                                        <button key={m} onClick={() => setActiveMode(m)}
                                            className={`px-3 py-2 rounded text-[10px] font-bold uppercase tracking-widest transition-all ${activeMode === m ? 'bg-[#14a800] text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>
                                            {m.replace('upwork-', '')}
                                        </button>
                                    ))}
                                </div>
                                <div className="h-px bg-white/10" />
                                <InstitutionalInput label="Top Tag" value={upworkData.tag} onChange={v => setUpworkData({ ...upworkData, tag: v })} />
                                <InstitutionalInput label="Headline" value={upworkData.headline} onChange={v => setUpworkData({ ...upworkData, headline: v })} />
                                <InstitutionalInput label="Gold Highlight" value={upworkData.highlight} onChange={v => setUpworkData({ ...upworkData, highlight: v })} />
                                <InstitutionalTextArea label="Sub-Narrative" value={upworkData.subtext} onChange={v => setUpworkData({ ...upworkData, subtext: v })} rows={3} />
                                <div className="h-px bg-white/10" />
                                <InstitutionalInput label="Name" value={upworkData.name} onChange={v => setUpworkData({ ...upworkData, name: v })} />
                                <InstitutionalInput label="Role" value={upworkData.role} onChange={v => setUpworkData({ ...upworkData, role: v })} />
                                <InstitutionalInput label="Website" value={upworkData.website} onChange={v => setUpworkData({ ...upworkData, website: v })} />
                                <div className="p-4 bg-[#14a800]/5 border border-[#14a800]/20 rounded text-[10px] text-[#14a800]/80 font-mono leading-relaxed">
                                    &gt;&gt; EXPORT: JPG 0.95q — enforced &lt;10MB Upwork compliance
                                </div>
                            </div>
                        )}

                        {/* LOGO CONTROLS */}
                        {activeMode.startsWith('logo-') && (
                            <div suppressHydrationWarning className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-action-gold font-bold font-mono">Shape</label>
                                    <div className="grid grid-cols-3 gap-2">
                                        {(['logo-square', 'logo-round', 'logo-custom'] as const).map(m => (
                                            <button key={m} onClick={() => setActiveMode(m)}
                                                className={`py-2 rounded text-[10px] font-bold uppercase tracking-widest transition-all ${activeMode === m ? 'bg-electric-cyan text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>
                                                {m.replace('logo-', '')}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold font-mono">Size</label>
                                    <div className="grid grid-cols-4 gap-2">
                                        {[500, 1000, 2000, 0].map(s => (
                                            <button key={s} onClick={() => setLogoData(prev => ({ ...prev, size: s }))}
                                                className={`py-2 rounded text-[10px] font-bold font-mono transition-all ${logoData.size === s ? 'bg-electric-cyan text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>
                                                {s === 0 ? 'Cust' : s}
                                            </button>
                                        ))}
                                    </div>
                                    {logoData.size === 0 && (
                                        <div className="grid grid-cols-2 gap-3">
                                            <InstitutionalInput label="Width px" value={String(logoData.customW)}
                                                onChange={v => setLogoData(prev => ({ ...prev, customW: parseInt(v) || 500 }))} />
                                            <InstitutionalInput label="Height px" value={String(logoData.customH)}
                                                onChange={v => setLogoData(prev => ({ ...prev, customH: parseInt(v) || 500 }))} />
                                        </div>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold font-mono">Variant</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {(['color', 'white', 'black', 'mono'] as const).map(v => (
                                            <button key={v} onClick={() => setLogoData(prev => ({ ...prev, variant: v }))}
                                                className={`py-2 rounded text-[10px] font-bold uppercase tracking-widest transition-all ${logoData.variant === v ? 'bg-action-gold text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>
                                                {v}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                {activeMode === 'logo-svg' && (
                                    <div className="p-3 bg-action-gold/5 border border-action-gold/20 rounded text-[10px] text-action-gold/80 font-mono leading-relaxed">
                                        &gt;&gt; SVG MODE: Export downloads true vector file. No html2canvas used.
                                    </div>
                                )}
                            </div>
                        )}

                    </div>

                        {/* FORUM CONTROLS */}
                        {(activeMode === 'forum-header' || activeMode === 'forum-card') && (
                            <div suppressHydrationWarning className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-300 px-6 pb-4">
                                <div className="p-4 bg-electric-cyan/5 border border-electric-cyan/20 rounded text-[10px] text-electric-cyan font-mono uppercase tracking-widest leading-relaxed">
                                    ✓ Forum Header: 1110 × 300 px<br/>
                                    ✓ Forum Card: 590 × 300 px<br/>
                                    ✓ Content is brand-locked — export ready<br/>
                                    ○ For editable copy, use LinkedIn mode
                                </div>
                                <div className="p-3 bg-action-gold/5 border border-action-gold/20 rounded text-[10px] text-action-gold/80 font-mono leading-relaxed">
                                    &gt;&gt; TIP: Export PNG 2× for forum upload.<br/>
                                    &gt;&gt; Manager.io Forum profile header: 1110×300<br/>
                                    &gt;&gt; User card background: 590×300
                                </div>
                            </div>
                        )}

                    {/* ─── EXPORT CONFIG PANEL (always visible) ─── */}
                    <div className="p-6 border-t-2 border-white/20 space-y-5">
                        <div className="flex items-center gap-2">
                            <Download className="text-action-gold" size={16} />
                            <h2 className="text-xs font-bold uppercase tracking-widest text-action-gold">Export Config</h2>
                        </div>
                        {/* Background */}
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold font-mono">Background</label>
                            <div className="grid grid-cols-5 gap-1.5">
                                {([
                                    { id: 'transparent', label: '◻', title: 'Transparent', bg: undefined },
                                    { id: 'white',       label: 'WHT', title: 'White',       bg: '#FFFFFF' },
                                    { id: 'black',       label: 'BLK', title: 'Black',       bg: '#111111' },
                                    { id: 'navy',        label: 'NVY', title: 'Navy',        bg: '#010409' },
                                    { id: 'blueprint',   label: 'BLU', title: 'Blueprint',   bg: '#002147' },
                                ] as { id: ExportBg; label: string; title: string; bg?: string }[]).map(opt => (
                                    <button key={opt.id} title={opt.title}
                                        onClick={() => setExportConfig(prev => ({ ...prev, bg: opt.id }))}
                                        className={`h-8 rounded text-[9px] font-bold font-mono uppercase transition-all border ${exportConfig.bg === opt.id ? 'border-electric-cyan text-electric-cyan' : 'border-white/10 text-gray-500 hover:border-white/30'}`}
                                        style={{ backgroundColor: opt.bg ? opt.bg + '55' : 'transparent' }}>
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* Variant */}
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold font-mono">Variant Filter</label>
                            <div className="grid grid-cols-2 gap-2">
                                {([{ id: 'color', label: 'Color' }, { id: 'bw', label: 'B&W' }, { id: 'white-on-dark', label: 'White' }, { id: 'black-on-light', label: 'Black' }] as { id: ExportVariant; label: string }[]).map(v => (
                                    <button key={v.id} onClick={() => setExportConfig(prev => ({ ...prev, variant: v.id }))}
                                        className={`py-2 rounded text-[10px] font-bold uppercase tracking-widest transition-all ${exportConfig.variant === v.id ? 'bg-action-gold text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>
                                        {v.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* Scale */}
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold font-mono">Export Scale</label>
                            <div className="grid grid-cols-3 gap-2">
                                {([1, 2, 3] as const).map(s => (
                                    <button key={s} onClick={() => setExportConfig(prev => ({ ...prev, scale: s }))}
                                        className={`py-2 rounded text-[10px] font-bold font-mono transition-all ${exportConfig.scale === s ? 'bg-electric-cyan text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>
                                        {s}×{s === 2 ? ' (def)' : s === 3 ? ' 4K' : ''}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* Padding */}
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold font-mono">Padding — {exportConfig.padding}px</label>
                            <input type="range" min={0} max={80} value={exportConfig.padding}
                                onChange={e => setExportConfig(prev => ({ ...prev, padding: parseInt(e.target.value) }))}
                                className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-electric-cyan" />
                        </div>
                        {/* Format */}
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold font-mono">Format</label>
                            <div className="grid grid-cols-3 gap-2">
                                {(['png', 'jpg', 'svg'] as const).map(f => {
                                    const disabled = f === 'svg' && activeMode !== 'logo-svg';
                                    return (
                                        <button key={f} disabled={disabled}
                                            onClick={() => !disabled && setExportConfig(prev => ({ ...prev, format: f }))}
                                            className={`py-2 rounded text-[10px] font-bold uppercase font-mono tracking-widest transition-all ${disabled ? 'opacity-30 cursor-not-allowed bg-white/5 text-gray-600' : exportConfig.format === f ? 'bg-electric-cyan text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>
                                            {f.toUpperCase()}{f === 'svg' ? '*' : ''}
                                        </button>
                                    );
                                })}
                            </div>
                            {activeMode === 'logo-svg' && <p className="text-[9px] text-gray-600 font-mono">* SVG only in Logo SVG mode</p>}
                        </div>
                    </div>

                    <div className="p-4 border-t border-white/10 text-[10px] text-gray-600 font-mono text-center">
                        BRAND_ASSET_STUDIO_V3.0
                    </div>
                </aside>

                {/* ─── RIGHT: LIVE CANVAS ─────────────────────────────────── */}
                {/* FIX 5: min-w-0 prevents overflow; w-fit mx-auto centers canvas */}
                <div className="flex-1 bg-[#0a0a0a] relative flex flex-col items-center justify-center overflow-hidden min-w-0">

                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

                    {/* Toolbar */}
                    <div className="absolute top-6 right-6 z-20 flex gap-4">
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

                        <button
                            onClick={() => setShowSafeZone(!showSafeZone)}
                            className={`flex items-center gap-2 px-4 py-1.5 rounded-full border transition-all ${showSafeZone ? 'bg-orange-500/20 border-orange-500/50 text-orange-400' : 'bg-black/40 border-white/10 text-gray-400 hover:text-white'}`}
                        >
                            <ShieldCheck size={14} />
                            <span className="text-[10px] font-mono uppercase tracking-widest hidden md:inline">Safe Zone</span>
                        </button>
                    </div>

                    {/* ─── RENDER STAGE ──────────────────────────────────── */}
                    <div className="w-full h-full flex items-center justify-center p-4 md:p-10 lg:p-20 overflow-auto custom-scrollbar">

                        {/* 1. LINKEDIN (1584 × 396) */}
                        {activeMode === 'linkedin' && (
                            <div style={{ transform: `scale(${scale})` }} className="transition-transform duration-200 ease-out shadow-2xl origin-center flex-shrink-0 w-fit relative">
                                {/* SAFE ZONE toggle overlay */}
                                {showSafeZone && (
                                    <div data-safezone className="absolute inset-0 pointer-events-none z-30">
                                        <div className="absolute left-[8%] bottom-0 w-[240px] h-[160px] border-2 border-dashed border-orange-500 bg-orange-500/10 flex items-center justify-center">
                                            <span className="text-orange-500 font-mono text-[10px] font-bold tracking-widest text-center px-2">MOBILE PROFILE<br/>OVERLAP</span>
                                        </div>
                                    </div>
                                )}
                                <div data-export-canvas className={`w-[1584px] h-[396px] ${theme.bg} relative overflow-hidden flex items-center justify-between px-24 ring-1 ring-white/5 transition-colors duration-500`}>
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

                        {/* 2a. FACEBOOK PERSONAL COVER (820 x 312) */}
                        {activeMode === 'facebook-personal' && (
                            <div style={{ transform: `scale(${scale})` }} className="transition-transform duration-200 ease-out shadow-2xl origin-center flex-shrink-0 w-fit">
                                {/* SAFE ZONE toggle overlay */}
                                {showSafeZone && (
                                    <div data-safezone className="absolute inset-0 pointer-events-none z-30">
                                        <div className="absolute left-1/2 top-1/2 w-[640px] h-[230px] -translate-x-1/2 -translate-y-1/2 border-2 border-dashed border-orange-500/40 bg-orange-500/5 rounded flex items-center justify-center">
                                            <span className="text-orange-500/40 font-mono text-[8px] font-bold tracking-widest uppercase">Safe Content Area (Mobile)</span>
                                        </div>
                                        <div className="absolute bottom-0 left-8 w-[168px] h-[168px] rounded-full border-2 border-dashed border-orange-500 bg-black/40 flex items-center justify-center backdrop-blur-sm shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                                            <span className="text-[10px] text-orange-400 font-mono font-bold tracking-widest text-center px-2">AVATAR<br/>OVERLAP</span>
                                        </div>
                                    </div>
                                )}
                                <div data-export-canvas className={`w-[820px] h-[312px] ${theme.bg} relative overflow-hidden flex items-center justify-center text-center ${theme.border} border transition-colors duration-500`}>
                                    <div className={`absolute inset-0 ${theme.grid} [background-size:20px_20px]`} />
                                    <div className="relative z-10 px-12 py-6 max-w-[580px]">
                                        <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] mb-4" style={{ color: '#FFD700' }}>
                                            <BadgeCheck size={16} /> {facebookData.badge}
                                        </div>
                                        <h2 className={`text-4xl font-black ${theme.text} uppercase tracking-tight mb-4 whitespace-pre-line leading-tight font-institutional`}>
                                            {facebookData.headline}
                                        </h2>
                                        <p className={`${theme.sub} text-sm font-light mb-5 max-w-md mx-auto font-institutional leading-relaxed`}>
                                            {facebookData.subtext}
                                        </p>
                                        <div className="inline-block px-8 py-3 font-bold uppercase tracking-widest text-xs rounded-full shadow-[0_0_20px_rgba(255,215,0,0.4)]"
                                            style={{ backgroundColor: '#00D2FF', color: '#010409' }}>
                                            {facebookData.cta}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-center text-xs text-gray-500 font-mono opacity-50">820 × 312 PX // FB_PERSONAL_COVER</div>
                            </div>
                        )}

                        {/* 2b. FACEBOOK PAGE COVER (820 x 360) */}
                        {activeMode === 'facebook-page' && (
                            <div style={{ transform: `scale(${scale})` }} className="transition-transform duration-200 ease-out shadow-2xl origin-center flex-shrink-0 w-fit">
                                {/* SAFE ZONE toggle overlay */}
                                {showSafeZone && (
                                    <div data-safezone className="absolute inset-0 pointer-events-none z-30">
                                        <div className="absolute left-1/2 top-1/2 w-[640px] h-[240px] -translate-x-1/2 -translate-y-1/2 border-2 border-dashed border-orange-500/40 bg-orange-500/5 rounded flex items-center justify-center">
                                            <span className="text-orange-500/40 font-mono text-[8px] font-bold tracking-widest uppercase">Visible on Mobile Profile</span>
                                        </div>
                                        <div className="absolute bottom-4 left-6 px-3 py-1 bg-black/60 border border-orange-500 border-dashed rounded text-[8px] text-orange-400 font-mono font-bold uppercase tracking-widest">Logo / Title Zone</div>
                                    </div>
                                )}
                                <div data-export-canvas className={`w-[820px] h-[360px] ${theme.bg} relative overflow-hidden flex items-center justify-center text-center ${theme.border} border transition-colors duration-500`}>
                                    <div className={`absolute inset-0 ${theme.grid} [background-size:20px_20px]`} />
                                    <div className="relative z-10 px-16 py-10 max-w-[640px]">
                                        <div className="inline-flex items-center gap-2 text-base font-bold uppercase tracking-[0.2em] mb-5" style={{ color: '#FFD700' }}>
                                            <BadgeCheck size={18} /> {facebookData.badge}
                                        </div>
                                        <h2 className={`text-5xl font-black ${theme.text} uppercase tracking-tight mb-5 whitespace-pre-line leading-tight font-institutional`}>
                                            {facebookData.headline}
                                        </h2>
                                        <p className={`${theme.sub} text-base font-light mb-7 max-w-lg mx-auto font-institutional leading-relaxed`}>
                                            {facebookData.subtext}
                                        </p>
                                        <div className="inline-block px-10 py-3 font-bold uppercase tracking-widest text-sm rounded-full shadow-[0_0_20px_rgba(255,215,0,0.4)]"
                                            style={{ backgroundColor: '#00D2FF', color: '#010409' }}>
                                            {facebookData.cta}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-center text-xs text-gray-500 font-mono opacity-50">820 × 360 PX // FB_PAGE_COVER</div>
                            </div>
                        )}

                        {/* 2c. FACEBOOK GROUP COVER (1640 x 856) */}
                        {activeMode === 'facebook-group' && (
                            <div style={{ transform: `scale(${scale})` }} className="transition-transform duration-200 ease-out shadow-2xl origin-center flex-shrink-0 w-fit">
                                {/* SAFE ZONE overlay — outside canvas, never exported */}
                                <div className="absolute inset-0 pointer-events-none z-30">
                                    <div className="absolute left-1/2 top-1/2 w-[1200px] h-[600px] -translate-x-1/2 -translate-y-1/2 border border-dashed border-white/15 rounded" />
                                </div>
                                <div data-export-canvas className={`w-[1640px] h-[856px] ${theme.bg} relative overflow-hidden flex items-center justify-center text-center ${theme.border} border transition-colors duration-500`}>
                                    <div className={`absolute inset-0 ${theme.grid} [background-size:40px_40px]`} />
                                    <div className="absolute right-0 top-0 w-[800px] h-[800px] blur-[200px] rounded-full opacity-20" style={{ backgroundColor: '#00D2FF' }} />
                                    <div className="absolute left-0 bottom-0 w-[600px] h-[600px] blur-[200px] rounded-full opacity-10" style={{ backgroundColor: '#FFD700' }} />
                                    <div className="relative z-10 px-32 py-24 max-w-[1200px]">
                                        <div className="inline-flex items-center gap-3 text-2xl font-bold uppercase tracking-[0.2em] mb-10" style={{ color: '#FFD700' }}>
                                            <BadgeCheck size={28} /> {facebookData.badge}
                                        </div>
                                        <h2 className={`text-8xl font-black ${theme.text} uppercase tracking-tight mb-10 whitespace-pre-line leading-tight font-institutional`}>
                                            {facebookData.headline}
                                        </h2>
                                        <p className={`${theme.sub} text-2xl font-light mb-14 max-w-3xl mx-auto font-institutional leading-relaxed`}>
                                            {facebookData.subtext}
                                        </p>
                                        <div className="inline-block px-16 py-6 font-bold uppercase tracking-widest text-xl rounded-full shadow-[0_0_40px_rgba(255,215,0,0.4)]"
                                            style={{ backgroundColor: '#00D2FF', color: '#010409' }}>
                                            {facebookData.cta}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-center text-xs text-gray-500 font-mono opacity-50">1640 × 856 PX // FB_GROUP_COVER</div>
                            </div>
                        )}

                        {/* 2d. FACEBOOK POST (1200 × 630) */}
                        {activeMode === 'facebook-post' && (
                            <div style={{ transform: `scale(${scale})` }} className="transition-transform duration-200 ease-out shadow-2xl origin-center flex-shrink-0 w-fit">
                                <div data-export-canvas className={`w-[1200px] h-[630px] ${theme.bg} relative overflow-hidden flex items-center justify-center text-center ${theme.border} border transition-colors duration-500`}>
                                    <div className={`absolute inset-0 ${theme.grid} [background-size:30px_30px]`} />
                                    <div className="relative z-10 px-24">
                                        <div className="w-24 h-24 mx-auto mb-8"><RefinedIcon size={96} /></div>
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
                                <div data-export-canvas className={`w-[1080px] h-[1920px] ${theme.bg} relative overflow-hidden flex flex-col justify-between p-32 ring-1 ring-white/5 transition-colors duration-500`}>
                                    <div className={`absolute inset-0 ${theme.grid} [background-size:40px_40px]`} />
                                    <div className="absolute top-0 right-0 w-[800px] h-[800px] blur-[150px] rounded-full opacity-10" style={{ backgroundColor: '#00D2FF' }} />
                                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] blur-[150px] rounded-full opacity-10" style={{ backgroundColor: '#FFD700' }} />
                                    <div className="relative z-10">
                                        <div className="w-32 h-32 mb-12"><RefinedIcon size={128} /></div>
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
                                <div data-export-canvas className={`relative ${activeMode === 'whatsapp-business' ? 'w-[500px] h-[500px]' :
                                    activeMode === 'instagram-profile' ? 'w-[1080px] h-[1080px]' :
                                        'w-[400px] h-[400px]'
                                    } ${activeMode === 'linkedin-page-logo' ? 'rounded-none' : 'rounded-full'} overflow-hidden ${theme.bg} border-4 shadow-2xl flex items-center justify-center transition-colors duration-500`}
                                    style={{ borderColor: '#FFD700' }}>
                                    <div className="absolute inset-0 bg-[radial-gradient(#00C2FF_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
                                    <div className="z-10 text-center flex flex-col items-center">
                                        <div className={`${activeMode === 'instagram-profile' ? 'text-[300px]' : 'text-9xl'} font-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none font-institutional ${renderMode === 'light' ? 'text-black/5' : 'text-white/5'}`}>
                                            {profileData.initials}
                                        </div>
                                        <div className={`${activeMode === 'instagram-profile' ? 'w-80 h-80' : 'w-48 h-48'} rounded-full flex items-center justify-center mb-6 border-2 border-white/10 mx-auto overflow-hidden p-6 bg-gray-800/50 backdrop-blur-sm`}>
                                            <RefinedIcon size={activeMode === 'instagram-profile' ? 320 : 192} />
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
                                <div data-export-canvas className={`w-[1128px] h-[191px] ${theme.bg} relative overflow-hidden flex items-center px-12 ${theme.border} border transition-colors duration-500`}>
                                    <div className={`absolute inset-0 ${theme.grid} [background-size:20px_20px]`} />
                                    <div className="relative z-10 flex items-center gap-12 w-full">
                                        <div className="w-24 h-24 shrink-0"><RefinedIcon size={96} /></div>
                                        <div>
                                            <h2 className={`text-4xl font-black ${theme.text} uppercase tracking-tight font-institutional`}>
                                                {linkedinData.headline} <span style={{ color: '#FFD700' }}>{linkedinData.highlight}</span>
                                            </h2>
                                            <p className={`${theme.sub} text-sm font-light uppercase tracking-[0.2em] mt-2 leading-relaxed`}>
                                                {linkedinData.subtext}
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
                                <div data-export-canvas className={`${activeMode === 'instagram' ? 'w-[1080px] h-[1080px]' : 'w-[1200px] h-[627px]'} ${theme.bg} relative overflow-hidden flex items-center justify-center text-center p-24 ${theme.border} border transition-colors duration-500`}>
                                    <div className={`absolute inset-0 ${theme.grid} [background-size:40px_40px]`} />
                                    <div className="relative z-10">
                                        <div className="w-32 h-32 mx-auto mb-10"><RefinedIcon size={96} /></div>
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
                            <div style={{ transform: `scale(${scale})` }} className="w-fit transition-transform duration-200 ease-out shadow-2xl origin-center flex-shrink-0 relative">
                                {/* SAFE ZONE toggle overlay */}
                                {showSafeZone && (
                                    <div data-safezone className="absolute inset-0 pointer-events-none z-30">
                                        <div className="absolute left-0 top-1/2 w-full h-[400px] -translate-y-1/2 border-y-2 border-dashed border-orange-500/50 bg-orange-500/5 flex items-center justify-center">
                                            <span className="text-orange-500/60 font-mono text-[10px] tracking-widest absolute top-4 pb-2 font-bold uppercase">Visible on Mobile Profile View</span>
                                        </div>
                                        <div className="absolute left-1/2 top-8 w-[240px] h-[240px] -translate-x-1/2 rounded-full border-2 border-dashed border-orange-500 bg-black/40 flex items-center justify-center backdrop-blur-sm shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                                            <span className="text-[10px] text-orange-400 font-mono font-bold tracking-widest text-center px-2 uppercase leading-tight">Avatar<br/>Overlap</span>
                                        </div>
                                    </div>
                                )}
                                <div data-export-canvas className={`w-[1211px] h-[681px] ${theme.bg} relative overflow-hidden flex items-center justify-center text-center ${theme.border} border transition-colors duration-500`}>
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

                        {/* 9. UPWORK HERO (1600 × 1200) */}
                        {activeMode === 'upwork-hero' && (
                            <div style={{ transform: `scale(${scale})` }} className="transition-transform duration-200 ease-out shadow-2xl origin-center flex-shrink-0 w-fit">
                                <div data-export-canvas className="w-[1600px] h-[1200px] bg-deep-navy-black text-institutional-white relative overflow-hidden flex items-center justify-center">
                                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
                                    <div className="absolute right-0 top-0 w-[1000px] h-[1000px] blur-[200px] rounded-full opacity-20" style={{ backgroundColor: '#00D2FF' }} />
                                    <div className="absolute left-[-200px] bottom-[-200px] w-[800px] h-[800px] blur-[200px] rounded-full opacity-10" style={{ backgroundColor: '#FFD700' }} />

                                    <div className="relative z-10 flex flex-col items-center text-center w-full max-w-[1400px] mx-auto px-10 gap-20">
                                        <div className="flex flex-col items-center justify-center gap-8">
                                            <div className="flex items-center gap-6 mb-4">
                                                {/* FIX: explicit size so MasterLogo doesn't overflow */}
                                                <div className="w-20 h-20 flex-shrink-0"><RefinedIcon size={80} /></div>
                                                <div className="flex items-baseline leading-none pt-2">
                                                    <span className="text-5xl font-medium lowercase text-white tracking-tighter">inspiron</span>
                                                    <span className="text-4xl font-light uppercase text-[#FFD700] ml-2 tracking-[0.2em]">TECH</span>
                                                </div>
                                            </div>
                                            <div className="inline-flex items-center gap-4 px-8 py-3 border text-2xl font-bold uppercase tracking-[0.2em] rounded" style={{ borderColor: '#00D2FF', color: '#00D2FF', backgroundColor: 'rgba(0,210,255,0.05)' }}>
                                                {upworkData.tag}
                                            </div>
                                            <h1 className="text-7xl font-black uppercase tracking-tight leading-[1.1]">
                                                {upworkData.headline}<br />
                                                <span style={{ color: '#FFD700' }}>{upworkData.highlight}</span>
                                            </h1>
                                            <p className="text-gray-300 text-3xl font-light leading-relaxed tracking-wide mt-2 max-w-4xl">{upworkData.subtext}</p>
                                        </div>

                                        <div className="flex justify-center gap-8 w-full mt-8">
                                            {[{ icon: '📊', label: 'P&L Statement', color: '#22c55e' }, { icon: '🏦', label: 'Balance Sheet', color: '#00D2FF' }, { icon: '💸', label: 'Cash Flow', color: '#FFD700' }].map((c, i) => (
                                                <div key={i} className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-12 flex flex-col items-center text-center gap-6 flex-1">
                                                    <div className="text-6xl">{c.icon}</div>
                                                    <div className="text-3xl font-bold text-white tracking-wide">{c.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="absolute bottom-8 right-12 text-gray-400 font-mono text-xl">{upworkData.website}</div>
                                </div>
                                <div className="mt-2 text-center text-xs text-gray-500 font-mono opacity-50">1600 × 1200 PX // UPWORK_HERO (JPG)</div>
                            </div>
                        )}

                        {/* 10. UPWORK BEFORE/AFTER (1600 × 1200) */}
                        {activeMode === 'upwork-before-after' && (
                            <div style={{ transform: `scale(${scale})` }} className="transition-transform duration-200 ease-out shadow-2xl origin-center flex-shrink-0 w-fit">
                                <div data-export-canvas className="w-[1600px] h-[1200px] bg-deep-navy-black text-institutional-white relative overflow-hidden flex items-center justify-center">
                                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
                                    <div className="absolute right-0 top-0 w-1/2 h-full blur-[200px] opacity-10 bg-[#00D2FF]" />
                                    <div className="absolute left-0 top-0 w-1/2 h-full blur-[200px] opacity-10 bg-rose-500" />

                                    <div className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30 opacity-60">
                                        <div className="w-10 h-10 text-white"><RefinedIcon size={80} /></div>
                                        <div className="flex items-baseline"><span className="text-2xl font-medium lowercase text-white tracking-tighter">inspiron</span><span className="text-xl font-light uppercase text-[#FFD700] ml-2 tracking-[0.2em]">TECH</span></div>
                                    </div>

                                    <div className="relative z-10 w-full max-w-[1500px] mx-auto grid grid-cols-2 gap-12 px-10">
                                        <div className="bg-[#0a0505]/80 border border-rose-500/20 p-16 flex flex-col h-[960px] relative overflow-hidden rounded-2xl">
                                            <div className="absolute top-0 right-0 bg-rose-500 text-black font-black uppercase tracking-[0.3em] px-10 py-3 rounded-bl-3xl text-2xl">Before</div>
                                            <h3 className="text-rose-400 text-5xl font-light tracking-wide mt-12 mb-20 leading-tight">Spreadsheets<br />&amp; broken ERP</h3>
                                            <div className="flex-1 border border-white/5 rounded-xl bg-white/[0.02] flex flex-col overflow-hidden opacity-60">
                                                {[...Array(9)].map((_, i) => (<div key={i} className="flex-1 border-b border-white/5 flex items-center px-8 gap-6"><div className="w-16 text-gray-500 font-mono text-2xl">{i + 1}</div><div className="flex-1 h-6 bg-white/5 rounded" /><div className="w-32 h-6 bg-white/10 rounded" /></div>))}
                                            </div>
                                        </div>
                                        <div className="bg-white/[0.02] border border-[#00D2FF]/30 p-16 flex flex-col h-[960px] relative overflow-hidden rounded-2xl shadow-[0_0_80px_rgba(0,210,255,0.05)]">
                                            <div className="absolute top-0 right-0 bg-[#00D2FF] text-black font-black uppercase tracking-[0.3em] px-10 py-3 rounded-bl-3xl text-2xl">After</div>
                                            <h3 className="text-[#00D2FF] text-5xl font-light tracking-wide mt-12 mb-16 leading-tight">Stable Manager.io<br />accounting core</h3>
                                            <div className="flex flex-col gap-8 flex-1 justify-center">
                                                {[{ icon: '📈', label: 'P&L Statement', badge: 'Synced', color: '#22c55e' }, { icon: '🏦', label: 'Balance Sheet', badge: 'Audit-Ready', color: '#00D2FF' }, { icon: '💸', label: 'Cash Flow', badge: 'Accurate', color: '#FFD700' }].map((r, i) => (
                                                    <div key={i} className="bg-deep-navy-black border border-[#00D2FF]/20 rounded-2xl p-10 flex items-center gap-8">
                                                        <span className="text-5xl">{r.icon}</span>
                                                        <div className="flex-1 text-4xl font-bold">{r.label}</div>
                                                        <div className="font-mono text-2xl px-5 py-3 rounded-lg border" style={{ color: r.color, borderColor: r.color + '40', backgroundColor: r.color + '15' }}>{r.badge}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-center text-xs text-gray-500 font-mono opacity-50">1600 × 1200 PX // UPWORK_BEFORE_AFTER (JPG)</div>
                            </div>
                        )}

                        {/* 11. UPWORK PROCESS (1600 × 1200) */}
                        {activeMode === 'upwork-process' && (
                            <div style={{ transform: `scale(${scale})` }} className="transition-transform duration-200 ease-out shadow-2xl origin-center flex-shrink-0 w-fit">
                                <div data-export-canvas className="w-[1600px] h-[1200px] bg-deep-navy-black text-institutional-white relative overflow-hidden flex items-center justify-center">
                                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] blur-[200px] opacity-10 bg-[#00D2FF]" />

                                    <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center px-10 flex flex-col justify-center h-full">
                                        <div className="flex items-center justify-center gap-6 mb-12 opacity-80">
                                            <div className="w-16 h-16"><RefinedIcon size={80} /></div>
                                            <div className="flex items-baseline"><span className="text-4xl font-medium lowercase text-white tracking-tighter">inspiron</span><span className="text-3xl font-light uppercase text-[#FFD700] ml-2 tracking-[0.2em]">TECH</span></div>
                                        </div>
                                        <h2 className="text-7xl font-black uppercase tracking-tight mb-24 font-institutional inline-block border-b-2 pb-8" style={{ borderColor: '#00D2FF' }}>
                                            {upworkData.headline} in 4 Clear Steps
                                        </h2>

                                        <div className="grid grid-cols-4 gap-8">
                                            {[{ no: '01', title: 'Audit', icon: '🔍', color: '#00D2FF' }, { no: '02', title: 'Design', icon: '✏️', color: '#FFD700' }, { no: '03', title: 'Migration', icon: '🔄', color: '#22c55e' }, { no: '04', title: 'Training', icon: '🎓', color: '#00D2FF' }].map((step, idx) => (
                                                <div key={idx} className="bg-white/[0.02] border border-white/10 p-14 flex flex-col items-center rounded-2xl">
                                                    <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-mono text-3xl text-gray-500 mb-12 font-bold">{step.no}</div>
                                                    <div className="text-7xl mb-12">{step.icon}</div>
                                                    <h3 className="text-4xl font-bold uppercase tracking-widest text-white">{step.title}</h3>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-center text-xs text-gray-500 font-mono opacity-50">1600 × 1200 PX // UPWORK_PROCESS (JPG)</div>
                            </div>
                        )}

                        {/* 12. UPWORK PRICING (1600 × 1200) */}
                        {activeMode === 'upwork-pricing' && (
                            <div style={{ transform: `scale(${scale})` }} className="transition-transform duration-200 ease-out shadow-2xl origin-center flex-shrink-0 w-fit">
                                <div data-export-canvas className="w-[1600px] h-[1200px] bg-deep-navy-black text-institutional-white relative overflow-hidden flex items-center justify-center">
                                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
                                    <div className="absolute top-0 right-0 w-[1000px] h-[1000px] blur-[250px] rounded-full opacity-10" style={{ backgroundColor: '#00D2FF' }} />

                                    <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center px-8 flex flex-col justify-center h-full py-16">
                                        <div className="flex items-center justify-center gap-6 mb-12 opacity-80">
                                            <div className="w-16 h-16"><RefinedIcon size={80} /></div>
                                            <div className="flex items-baseline"><span className="text-4xl font-medium lowercase text-white tracking-tighter">inspiron</span><span className="text-3xl font-light uppercase text-[#FFD700] ml-2 tracking-[0.2em]">TECH</span></div>
                                        </div>
                                        <h2 className="text-6xl font-black uppercase tracking-tight mb-20 font-institutional">Choose Your ERP Package</h2>

                                        <div className="grid grid-cols-3 gap-10 items-stretch">
                                            {[
                                                { tier: 'Starter', sub: 'Single company setup', items: ['Company setup', 'COA design', 'Basic reports'], featured: false },
                                                { tier: 'Standard', sub: 'Setup + historical migration', items: ['Full setup + migration', 'Key reports', 'Training session'], featured: true },
                                                { tier: 'Advanced', sub: 'Multi-company ERP design', items: ['Multi-entity setup', 'Custom dashboards', '90-day support'], featured: false },
                                            ].map((plan, i) => (
                                                <div key={i} className={`p-14 text-left flex flex-col h-full rounded-2xl border ${plan.featured ? 'bg-gradient-to-b from-[#00D2FF]/10 to-transparent border-[#00D2FF]/50 shadow-[0_0_100px_rgba(0,210,255,0.15)] -mt-6 pb-24 relative' : 'bg-white/[0.02] border-white/10 mt-10'}`}>
                                                    {plan.featured && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00D2FF] text-black px-8 py-3 rounded-full text-lg font-bold uppercase tracking-widest font-mono">Most Popular</div>}
                                                    <h3 className={`text-4xl font-bold uppercase tracking-widest mb-4 ${plan.featured ? 'text-[#00D2FF]' : 'text-gray-300'}`}>{plan.tier}</h3>
                                                    <p className="text-gray-500 font-mono text-xl mb-12 uppercase tracking-wide">{plan.sub}</p>
                                                    <div className="space-y-8 flex-1 border-t border-white/5 pt-12">
                                                        {plan.items.map((li, j) => <div key={j} className="flex items-center gap-6"><span style={{ color: '#FFD700' }}>✓</span><span className="text-3xl font-light">{li}</span></div>)}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-center text-xs text-gray-500 font-mono opacity-50">1600 × 1200 PX // UPWORK_PRICING (JPG)</div>
                            </div>
                        )}

                        {/* FORUM HEADER — 1110×300 for Manager.io Forum profile header */}
                        {activeMode === 'forum-header' && (
                            <div style={{ transform: `scale(${scale})` }} className="transition-transform duration-200 ease-out origin-center flex-shrink-0 w-fit">
                                <div data-export-canvas className={`w-[1110px] h-[300px] ${theme.bg} relative overflow-hidden flex items-center px-16 transition-colors duration-500`}>
                                    {/* Grid */}
                                    <div className={`absolute inset-0 ${theme.grid} [background-size:24px_24px]`} />
                                    {/* Glow orb */}
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-[120px] rounded-full opacity-20" style={{ backgroundColor: '#00D2FF' }} />
                                    {/* Left: Logo + Identity */}
                                    <div className="relative z-10 flex items-center gap-12">
                                        <div className="w-[100px] h-[100px] flex-shrink-0">
                                            <RefinedIcon size={100} />
                                        </div>
                                        <div>
                                            <div className="flex items-baseline gap-3 mb-1">
                                                <span className="text-4xl font-medium lowercase text-white tracking-tighter">inspiron</span>
                                                <span className="text-3xl font-light uppercase tracking-[0.2em]" style={{ color: '#FFD700' }}>TECH</span>
                                            </div>
                                            <p className="text-sm font-mono uppercase tracking-[0.2em] text-gray-400">Official Manager.io Advisor · Dhaka, Bangladesh</p>
                                        </div>
                                    </div>
                                    {/* Right: Credentials */}
                                    <div className="relative z-10 ml-auto flex flex-col items-end gap-3">
                                        <div className="flex items-center gap-3">
                                            <span className="text-[11px] font-mono uppercase tracking-widest text-gray-400">ERP Architect</span>
                                            <span className="w-[1px] h-3 bg-white/20" />
                                            <span className="text-[11px] font-mono uppercase tracking-widest" style={{ color: '#00D2FF' }}>14+ Years</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-[11px] font-mono uppercase tracking-widest text-gray-400">100+ Migrations</span>
                                            <span className="w-[1px] h-3 bg-white/20" />
                                            <span className="text-[11px] font-mono uppercase tracking-widest text-gray-400">15+ Industries</span>
                                        </div>
                                        <div className="mt-2 px-5 py-2 rounded-full border text-[10px] font-bold uppercase tracking-widest font-mono" style={{ borderColor: '#00D2FF44', color: '#00D2FF' }}>inspiron.tech</div>
                                    </div>
                                </div>
                                <div className="mt-2 text-center text-xs text-gray-500 font-mono opacity-50">1110 × 300 PX // FORUM_HEADER (PNG)</div>
                            </div>
                        )}

                        {/* FORUM CARD — 590×300 for Manager.io Forum user card background */}
                        {activeMode === 'forum-card' && (
                            <div style={{ transform: `scale(${scale})` }} className="transition-transform duration-200 ease-out origin-center flex-shrink-0 w-fit">
                                <div data-export-canvas className={`w-[590px] h-[300px] ${theme.bg} relative overflow-hidden flex flex-col items-center justify-center transition-colors duration-500`}>
                                    {/* Grid */}
                                    <div className={`absolute inset-0 ${theme.grid} [background-size:20px_20px]`} />
                                    {/* Glow orb — centered */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-[400px] h-[400px] blur-[100px] rounded-full opacity-15" style={{ backgroundColor: '#00D2FF' }} />
                                    </div>
                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col items-center gap-4">
                                        <div className="w-[70px] h-[70px]">
                                            <RefinedIcon size={70} />
                                        </div>
                                        <div className="text-center">
                                            <div className="flex items-baseline gap-2 justify-center">
                                                <span className="text-2xl font-medium lowercase text-white tracking-tighter">inspiron</span>
                                                <span className="text-xl font-light uppercase tracking-[0.2em]" style={{ color: '#FFD700' }}>TECH</span>
                                            </div>
                                            <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-gray-400 mt-1">Manager.io Official Advisor</p>
                                        </div>
                                        <div className="flex items-center gap-4 mt-1">
                                            <span className="text-[9px] font-mono uppercase tracking-widest" style={{ color: '#00D2FF' }}>inspiron.tech</span>
                                            <span className="w-[1px] h-2 bg-white/20" />
                                            <span className="text-[9px] font-mono uppercase tracking-widest text-gray-500">Dhaka, Bangladesh</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 text-center text-xs text-gray-500 font-mono opacity-50">590 × 300 PX // FORUM_CARD (PNG)</div>
                            </div>
                        )}

                        {/* 5. AUDIT — FIX 3: type weight stress test restored */}
                        {activeMode === 'audit' && (
                            <div style={{ transform: `scale(${scale})` }} className="transition-transform duration-200 ease-out origin-center flex-shrink-0 w-fit">
                                <div data-export-canvas className={`bg-black/80 backdrop-blur ${theme.border} border rounded-2xl p-16 flex flex-col items-center gap-12 relative overflow-hidden`}>
                                    {auditState.grid && (
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00D2FF10_1px,transparent_1px),linear-gradient(to_bottom,#00D2FF10_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none z-0" />
                                    )}
                                    {/* Logo + Spine Overlay */}
                                    <div className="relative z-10 w-[400px] h-[400px]">
                                        <RefinedIcon size={400} />
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

                        {/* Logo canvas — square / round / custom / svg */}
                        {activeMode.startsWith('logo-') && (
                            <div style={{ transform: `scale(${scale})` }}
                                className="transition-transform duration-200 ease-out shadow-2xl origin-center flex-shrink-0 w-fit">
                                <div
                                    data-export-canvas
                                    style={{
                                        width:           `${logoW}px`,
                                        height:          `${logoH}px`,
                                        borderRadius:    activeMode === 'logo-round' ? '50%' : '0',
                                        overflow:        'hidden',
                                        backgroundColor: logoBg ?? undefined,
                                        backgroundImage: !logoBg
                                            ? 'repeating-conic-gradient(#808080 0% 25%, #b0b0b0 0% 50%) 0 0 / 20px 20px'
                                            : undefined,
                                        position: 'relative',
                                        boxSizing: 'border-box' as const,
                                    }}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 358.846 350.3"
                                        preserveAspectRatio="xMidYMid meet"
                                        width={logoW - exportConfig.padding * 2}
                                        height={logoH - exportConfig.padding * 2}
                                        style={{
                                            position:            'absolute',
                                            top:                 `${exportConfig.padding}px`,
                                            left:                `${exportConfig.padding}px`,
                                            width:               `${logoW - exportConfig.padding * 2}px`,
                                            height:              `${logoH - exportConfig.padding * 2}px`,
                                            display:             'block',
                                        }}>
                                        <defs>
                                            <mask id="inspiron-gap-logo-export"
                                                x="-1075.154" y="-1075" width="3000" height="3000" maskUnits="userSpaceOnUse">
                                                <path fill="#fff" d="M-1075.154-1075h3000v3000h-3000z"/>
                                                <path d="M321.346 350c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5-49.2-81.1-52.8-87.8-52.6-88.4 5.5-8.8 19.4-31.2 27.4-43.8 3.3-5.4 5.7-9 6-9.4 1.6 2.7 27.4 45.3 49.4 81.8 17 28.2 31.9 52.8 32.2 53.5 4.2 7 4.2 15.2 0 22.5-5.2 9-15.4 14.9-25.6 14.9h-.8z"
                                                    style={{ fill: 'none', stroke: '#000', strokeWidth: '24px' }}/>
                                            </mask>
                                        </defs>
                                        <g mask="url(#inspiron-gap-logo-export)">
                                            <path d="M87.046 349.3c-30.8 0-57.9-14.8-74.3-40.9-15.4-24.2-16.9-55-4.2-80.5 7.8-14.2 32.9-53.9 57.4-92.4 15.1-23.7 29.3-46.1 39.3-62.6 2.7-4.3 4.8-7.8 8.4-11.5 11.4-13.1 28.1-20.6 45.6-20.6s33.8 8.1 43.8 22.1c5.5 7.8,9.1,16.9,10.3 26.4.3 2.5-.4 4.8-2.1 7.5-1.9 3.3-21.8 34.6-21.8 34.6-.6.9-1.2 1.9-1.8 2.8-1.3 2.2-2.4 4.2-3.9 4.2s-1.2-.3-1.8-.9c-4.2-4.9-8.2-11.5-12-18-2.4-4-4.5-7.9-6.9-11.2-1.8-2.8-4.8-4.5-7.8-4.5s-4.2 1-5.8 3c-5.2 8.1-27.5 43.8-45.6 72.7-11.8 18.9-22.1 35.3-25.4 40.4-2.2 3.6-5.2 8.1-7.9 12.5-1.6 2.7-3.3 5.4-4.8 7.8-.6 1-1.3 2.1-1.9 3.1-2.5 4-4.6 7.5-6.1 11.1-5.2 12.4-.4 27.3 10.9 34.6,5.5 3.6 11.4 5.4 17.5 5.4 12.3 0,25-7.6,32.9-20,5.5-8.1,23.6-37,45-70.6,31.7-50.4 67.9-107.5 76.1-118.7 6.3-6.7 14.5-10.8 22.7-10.8 9.3 0,18.2 5.1,23.2 13.1,4.8 7.9 5.4 16.8 1 24.7-3.6 7-6.6 11.3-10.9 18-3.1 4.9-7.3 11.2-13 20.6-14.4 22.5-31 48.7-47 74.2-24.4 38.9-47.7 75.7-55.3 86.8-17.5 24.1-45.5 38.6-75.1 38.6z" fill={logoFill}/>
                                        </g>
                                        <path d="M321.346 350c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5-49.2-81.1-52.8-87.8-52.6-88.4 5.5-8.8 19.4-31.2 27.4-43.8 3.3-5.4 5.7-9 6-9.4 1.6 2.7 27.4 45.3 49.4 81.8 17 28.2 31.9 52.8 32.2 53.5 4.2 7 4.2 15.2 0 22.5-5.2 9-15.4 14.9-25.6 14.9h-.8z" fill={logoFill}/>
                                        <circle cx="321.346" cy="37.5" r="37.5" fill={goldFill}/>
                                    </svg>
                                </div>
                                <div className="mt-2 text-center text-xs text-gray-500 font-mono opacity-50">
                                    {logoW} × {logoH} PX // {activeMode.toUpperCase().replace(/-/g, '_')}
                                </div>
                            </div>
                        )}

                        {/* Export Hint */}
                        <div className="absolute bottom-6 flex items-center gap-4">
                            <button
                                onClick={handleExport}
                                disabled={isExporting}
                                className="bg-[#00D2FF]/10 hover:bg-[#00D2FF]/20 disabled:opacity-50 disabled:cursor-wait border border-[#00D2FF]/30 text-[#00D2FF] px-6 py-3 rounded-full flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(0,210,255,0.1)] group">
                                <Download size={14} className={isExporting ? 'animate-bounce' : 'group-hover:scale-110 transition-transform'} />
                                {
                                    isExporting ? 'EXPORTING...' :
                                    exportConfig.format === 'svg' && activeMode === 'logo-svg' ? 'DOWNLOAD SVG' :
                                    exportConfig.format === 'jpg' || activeMode.startsWith('upwork-') ? 'EXPORT JPG' :
                                    'EXPORT PNG'
                                }
                            </button>
                            <div className="flex items-center gap-2 text-[9px] font-mono text-gray-600 uppercase tracking-widest">
                                <span>{exportConfig.bg}</span>
                                <span>·</span>
                                <span>{exportConfig.variant}</span>
                                <span>·</span>
                                <span>{exportConfig.scale}×</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

// ─── TECHNICAL COMPONENT PRIMITIVES ─────────────────────────────────────────
