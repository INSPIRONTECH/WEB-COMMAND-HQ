"use client";

/**
 * INSPIRON TECH - The n-Law Standards // REV 2026.1
 * Official Operational Code // Brand Geometry Lab Integration
 */

import React, { useState, useEffect } from 'react';
import {
    Scale, ShieldCheck, ArrowRight, Zap, Lock,
    Hexagon, Code2, ShieldAlert, CheckCircle2, Factory,
    Ruler, Crosshair, Activity, Database, BarChart3,
    ChevronRight, Globe, Terminal, TrendingUp, Download,
    MessageSquare, ArrowLeft
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Filler
} from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';

// Register ChartJS modules
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Filler
);

// --- MASTER ASSETS ---

const MasterLockup = ({ className = "" }: { className?: string }) => (
    <svg viewBox="0 0 358.846 350.3" className={className}>
        <defs>
            <mask id="VaultMask_Final" x="-1075.154" y="-1075" width="3000" height="3000" maskUnits="userSpaceOnUse">
                <path fill="#fff" d="M-1075.154-1075h3000v3000h-3000z" />
                <path d="M321.346 350c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5-49.2-81.1-52.8-87.8-52.6-88.4 5.5-8.8 19.4-31.2 27.4-43.8 3.3-5.4 5.7-9 6-9.4 1.6 2.7 27.4 45.3 49.4 81.8 17 28.2 31.9 52.8 32.2 53.5 4.2 7 4.2 15.2 0 22.5-5.2 9-15.4 14.9-25.6 14.9h-.8z"
                    fill="none" stroke="#000" strokeWidth="24px" strokeLinecap="round" strokeLinejoin="round" />
            </mask>
        </defs>
        <g mask="url(#VaultMask_Final)">
            <path d="M87.046 349.3c-30.8 0-57.9-14.8-74.3-40.9-15.4-24.2-16.9-55-4.2-80.5 7.8-14.2 32.9-53.9 57.4-92.4 15.1-23.7 29.3-46.1 39.3-62.6 2.7-4.3 4.8-7.8 8.4-11.5 11.4-13.1 28.1-20.6 45.6-20.6s33.8 8.1 43.8 22.1c5.5 7.8,9.1,16.9,10.3 26.4.3 2.5-.4 4.8-2.1 7.5-1.9 3.3-21.8 34.6-21.8 34.6-.6.9-1.2 1.9-1.8 2.8-1.3 2.2-2.4 4.2-3.9 4.2s-1.2-.3-1.8-.9c-4.2-4.9-8.2-11.5-12-18-2.4-4-4.5-7.9-6.9-11.2-1.8-2.8-4.8-4.5-7.8-4.5s-4.2 1-5.8 3c-5.2 8.1-27.5 43.8-45.6 72.7-11.8 18.9-22.1 35.3-25.4 40.4-2.2 3.6-5.2 8.1-7.9 12.5-1.6 2.7-3.3 5.4-4.8 7.8-.6 1-1.3 2.1-1.9 3.1-2.5 4-4.6 7.5-6.1 11.1-5.2 12.4-.4 27.3 10.9 34.6,5.5 3.6 11.4 5.4 17.5 5.4 12.3 0,25-7.6,32.9-20,5.5-8.1,23.6-37,45-70.6,31.7-50.4 67.9-107.5 76.1-118.7 6.3-6.7 14.5-10.8 22.7-10.8 9.3 0,18.2 5.1,23.2 13.1,4.8 7.9 5.4 16.8 1 24.7-3.6 7-6.6 11.3-10.9 18-3.1 4.9-7.3 11.2-13 20.6-14.4 22.5-31 48.7-47 74.2-24.4 38.9-47.7 75.7-55.3 86.8-17.5 24.1-45.5 38.6-75.1 38.6z" fill="currentColor" />
        </g>
        <path d="M321.346 350c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5-49.2-81.1-52.8-87.8-52.6-88.4 5.5-8.8 19.4-31.2 27.4-43.8 3.3-5.4 5.7-9 6-9.4 1.6 2.7 27.4 45.3 49.4 81.8 17 28.2 31.9 52.8 32.2 53.5 4.2 7 4.2 15.2 0 22.5-5.2 9-15.4 14.9-25.6 14.9h-.8z" fill="currentColor" />
        <circle cx="321.346" cy="37.5" r="37.5" fill="#FFD700" />
    </svg>
);

// --- COMPONENTS ---

const BalanceChart = () => {
    const data = {
        labels: ['Navy', 'Cyan', 'Gold', 'UI Base'],
        datasets: [{
            data: [45, 30, 15, 10],
            backgroundColor: ['#002147', '#00D2FF', '#FFD700', 'rgba(255, 255, 255, 0.05)'],
            borderWidth: 0,
            hoverOffset: 25
        }]
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        cutout: '90%',
        plugins: { legend: { display: false } }
    };

    return <Doughnut data={data} options={options} />;
};

const VelocityChart = () => {
    const data = {
        labels: ['-6H', '-4H', '-2H', 'SYNC', '+2H', '+4H'],
        datasets: [{
            label: 'Sync Mbps',
            data: [420, 810, 560, 1200, 980, 1350],
            borderColor: '#00D2FF',
            borderWidth: 6,
            pointRadius: 0,
            tension: 0.45,
            fill: true,
            backgroundColor: (context: any) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 150);
                gradient.addColorStop(0, 'rgba(0, 210, 255, 0.3)');
                gradient.addColorStop(1, 'rgba(0, 210, 255, 0)');
                return gradient;
            }
        }]
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            x: { display: false },
            y: { display: false }
        }
    };

    return <Line data={data} options={options} />;
};

const SimulationLab = () => {
    const [bgMode, setBgMode] = useState<'blueprint' | 'dark' | 'light'>('blueprint');
    const [scale, setScale] = useState(1);

    return (
        <div className="w-full max-w-5xl mx-auto bg-black/30 rounded-[3rem] border border-white/10 overflow-hidden backdrop-blur-sm shadow-2xl">
            {/* Toolbar */}
            <div className="flex flex-col md:flex-row items-center justify-between p-6 border-b border-white/5 gap-6">
                <div className="flex gap-2 bg-white/5 p-1 rounded-full">
                    {['blueprint', 'dark', 'light'].map((mode) => (
                        <button
                            key={mode}
                            onClick={() => setBgMode(mode as any)}
                            className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${bgMode === mode ? 'bg-[#00D2FF] text-[#002147] shadow-lg' : 'text-slate-400 hover:text-white'}`}
                        >
                            {mode}
                        </button>
                    ))}
                </div>
                <div className="flex items-center gap-4 bg-white/5 px-6 py-2 rounded-full border border-white/5">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Scale Output</span>
                    <input
                        type="range"
                        min="0.5"
                        max="1.5"
                        step="0.1"
                        value={scale}
                        onChange={(e) => setScale(parseFloat(e.target.value))}
                        className="w-32 h-1 bg-white/10 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#FFD700] cursor-pointer"
                    />
                </div>
            </div>

            {/* Viewport */}
            <div className={`relative h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center transition-colors duration-500 ${bgMode === 'light' ? 'bg-slate-100' : bgMode === 'dark' ? 'bg-[#00152e]' : 'bg-[#002147]'}`}>
                {bgMode === 'blueprint' && <div className="absolute inset-0 blueprint-grid opacity-20"></div>}

                <div style={{ transform: `scale(${scale})` }} className="transition-transform duration-300 relative z-10">
                    <div className={`w-64 h-64 ${bgMode === 'light' ? 'text-[#002147]' : 'text-[#00D2FF]'} transition-colors duration-500`}>
                        <MasterLockup />
                    </div>
                </div>

                {/* Metrics Overlay */}
                <div className="absolute bottom-6 left-6 font-mono text-[10px] text-slate-500 space-y-1 pointer-events-none select-none z-20">
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div> SYSTEM_ACTIVE</div>
                    <div>RENDER_MODE: {bgMode.toUpperCase()}</div>
                    <div>SCALE_FACTOR: {scale.toFixed(2)}x</div>
                    <div>VECTOR_INTEGRITY: 100%</div>
                </div>
            </div>
        </div>
    );
};

export default function NLawStandards() {
    const [isAuditing, setIsAuditing] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
    const [isHoveringLogo, setIsHoveringLogo] = useState(false);
    const [showAnimation, setShowAnimation] = useState(false);
    const [weightSliderVal, setWeightSliderVal] = useState(500);

    // Trigger animation on mount
    useEffect(() => {
        const timer = setTimeout(() => setShowAnimation(true), 300);
        return () => clearTimeout(timer);
    }, []);

    // Handle mouse coordinate tracking
    const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
        const svg = e.currentTarget;
        const rect = svg.getBoundingClientRect();
        const viewBox = svg.viewBox.baseVal;

        // Convert screen coordinates to SVG coordinates
        const x = ((e.clientX - rect.left) / rect.width) * viewBox.width;
        const y = ((e.clientY - rect.top) / rect.height) * viewBox.height;

        setMouseCoords({ x: Math.round(x * 1000) / 1000, y: Math.round(y * 1000) / 1000 });
    };

    const handleTouchMove = (e: React.TouchEvent<SVGSVGElement>) => {
        const touch = e.touches[0];
        const svg = e.currentTarget;
        const rect = svg.getBoundingClientRect();
        const viewBox = svg.viewBox.baseVal;
        const x = ((touch.clientX - rect.left) / rect.width) * viewBox.width;
        const y = ((touch.clientY - rect.top) / rect.height) * viewBox.height;
        setMouseCoords({ x: Math.round(x * 1000) / 1000, y: Math.round(y * 1000) / 1000 });
    };

    const scrollToId = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const headerOffset = 100;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    const copyCode = () => {
        const text = [
            '<!-- INSPIRON TECH // MASTER ASSET REV 2026.1 -->',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 358.846 350.3">',
            '  <defs>',
            '    <mask id="inspiron-gap" x="-1075.154" y="-1075" width="3000" height="3000" maskUnits="userSpaceOnUse">',
            '      <path fill="#fff" d="M-1075.154-1075h3000v3000h-3000z"/>',
            '      <path d="M321.346 350c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5-49.2-81.1-52.8-87.8-52.6-88.4 5.5-8.8 19.4-31.2 27.4-43.8 3.3-5.4 5.7-9 6-9.4 1.6 2.7 27.4 45.3 49.4 81.8 17 28.2 31.9 52.8 32.2 53.5 4.2 7 4.2 15.2 0 22.5-5.2 9-15.4 14.9-25.6 14.9h-.8z" style="fill:none; stroke:#000; stroke-width:24px"/>',
            '    </mask>',
            '  </defs>',
            '  <g mask="url(#inspiron-gap)">',
            '    <path d="M87.046 349.3c-30.8 0-57.9-14.8-74.3-40.9-15.4-24.2-16.9-55-4.2-80.5 7.8-14.2 32.9-53.9 57.4-92.4 15.1-23.7 29.3-46.1 39.3-62.6 2.7-4.3 4.8-7.8 8.4-11.5 11.4-13.1 28.1-20.6 45.6-20.6s33.8 8.1 43.8 22.1c5.5 7.8,9.1,16.9,10.3 26.4.3 2.5-.4 4.8-2.1 7.5-1.9 3.3-21.8 34.6-21.8 34.6-.6.9-1.2 1.9-1.8 2.8-1.3 2.2-2.4 4.2-3.9 4.2s-1.2-.3-1.8-.9c-4.2-4.9-8.2-11.5-12-18-2.4-4-4.5-7.9-6.9-11.2-1.8-2.8-4.8-4.5-7.8-4.5s-4.2 1-5.8 3c-5.2 8.1-27.5 43.8-45.6 72.7-11.8 18.9-22.1 35.3-25.4 40.4-2.2 3.6-5.2 8.1-7.9 12.5-1.6 2.7-3.3 5.4-4.8 7.8-.6 1-1.3 2.1-1.9 3.1-2.5 4-4.6 7.5-6.1 11.1-5.2 12.4-.4 27.3 10.9 34.6,5.5 3.6 11.4 5.4 17.5 5.4 12.3 0,25-7.6,32.9-20,5.5-8.1,23.6-37,45-70.6,31.7-50.4 67.9-107.5 76.1-118.7 6.3-6.7 14.5-10.8 22.7-10.8 9.3 0,18.2 5.1,23.2 13.1,4.8 7.9 5.4 16.8 1 24.7-3.6 7-6.6 11.3-10.9 18-3.1 4.9-7.3 11.2-13 20.6-14.4 22.5-31 48.7-47 74.2-24.4 38.9-47.7 75.7-55.3 86.8-17.5 24.1-45.5 38.6-75.1 38.6z" fill="#00D2FF"/>',
            '  </g>',
            '  <path d="M321.346 350c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5-49.2-81.1-52.8-87.8-52.6-88.4 5.5-8.8 19.4-31.2 27.4-43.8 3.3-5.4 5.7-9 6-9.4 1.6 2.7 27.4 45.3 49.4 81.8 17 28.2 31.9 52.8 32.2 53.5 4.2 7 4.2 15.2 0 22.5-5.2 9-15.4 14.9-25.6 14.9h-.8z" fill="#00D2FF"/>',
            '  <circle cx="321.346" cy="37.5" r="37.5" fill="#FFD700"/>',
            '</svg>'
        ].join('\n');

        navigator.clipboard.writeText(text);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
    };

    return (
        <div className="min-h-screen bg-[#010409] text-white selection:bg-aqua selection:text-navy font-institutional overflow-x-hidden">

            {/* TOAST NOTIFICATION */}
            <div id="toast" className={showToast ? 'active' : ''}>
                <span className="font-bold tracking-widest text-[#00D2FF] mr-2">✓</span> REV 2026.1 MASTER COPIED
            </div>

            {/* QUICK NAV BAR */}
            <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[90] hidden lg:flex items-center gap-8 px-8 py-3 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
                <button onClick={() => scrollToId('vision')} className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-[#00D2FF] transition-colors">00. Vision</button>
                <button onClick={() => scrollToId('anatomy')} className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-[#00D2FF] transition-colors">01. Anatomy</button>
                <button onClick={() => scrollToId('typography')} className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-[#00D2FF] transition-colors">02. Typography</button>
                <button onClick={() => scrollToId('simulation')} className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-[#00D2FF] transition-colors">03. Simulation</button>
            </div>

            <main className="pb-32">

                {/* BACK TO HOME */}
                <div className="pt-24 px-4 md:px-8 lg:px-10">
                    <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#00D2FF] transition text-sm">
                        <ArrowLeft size={14} /> Back to Home
                    </Link>
                </div>

                {/* 00. INTRO SECTION: BRAND VISION */}
                <section id="vision" className="pt-16 md:pt-32 lg:pt-48 pb-16 md:pb-28 lg:pb-32 px-4 md:px-8 lg:px-10 text-center max-w-6xl mx-auto space-y-8 bg-[#010409] blueprint-grid border-b border-white/5 rounded-b-[4rem] shadow-sm relative overflow-hidden">
                    <div className="space-y-6 max-w-3xl mx-auto relative z-10">

                        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85]">Institutional Equilibrium</h1>
                        <p className="text-slate-400 text-xl md:text-2xl font-light leading-relaxed mt-10">
                            The final synthesis of Inspiron Tech's core logic. A mathematical architecture where geometry and typography exist in a state of absolute, axis-locked stability.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-12">
                            <button onClick={() => scrollToId('anatomy')} className="bg-white text-[#002147] px-10 py-5 rounded-[1.5rem] font-bold uppercase text-xs tracking-widest shadow-2xl active:scale-95 hover:bg-[#00D2FF] hover:text-white transition-all">Explore Geometry</button>
                            <button onClick={() => scrollToId('simulation')} className="bg-white/5 text-slate-400 px-10 py-5 rounded-[1.5rem] font-bold uppercase text-xs tracking-widest border border-white/10 hover:bg-white/10 transition-all">Live Test</button>
                        </div>
                    </div>
                </section>

                {/* 01. GEOMETRIC ANATOMY */}
                <section id="anatomy" className="py-16 md:py-28 lg:py-40 px-4 md:px-8 max-w-7xl mx-auto space-y-24">
                    <div className="space-y-6 max-w-2xl border-l-[8px] border-[#FFD700] pl-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">01. Geometric Anatomy</h2>
                        <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">
                            This quadrant validates the 358.846 coordinate system. By locking the vertical spine at X=321.346, the Golden Dot (r=37.5) anchors the composition, preventing visual drift at extreme resolutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="bg-[#002147]/50 rounded-[2rem] md:rounded-[5rem] p-6 sm:p-12 md:p-20 lg:p-32 relative overflow-hidden group shadow-[0_40px_80px_-20px_rgba(0,33,71,0.3)] border border-white/5">
                            <div className="absolute inset-0 blueprint-grid opacity-10"></div>

                            {/* SVG-NATIVE PRECISION AUDIT WITH ANIMATION (EXACT 321.346 COORDINATE) */}
                            <div className="relative z-20 w-full aspect-square">
                                <svg
                                    viewBox="0 0 358.846 350.3"
                                    className="w-full h-full text-[#00D2FF] glow-cyan transition-transform duration-1000 group-hover:scale-[1.03]"
                                    onMouseMove={handleMouseMove}
                                    onMouseEnter={() => setIsHoveringLogo(true)}
                                    onMouseLeave={() => setIsHoveringLogo(false)}
                                    onTouchMove={handleTouchMove}
                                    onTouchStart={() => setIsHoveringLogo(true)}
                                    onTouchEnd={() => setIsHoveringLogo(false)}
                                >
                                    {/* MAIN LOGO GEOMETRY WITH ANIMATION */}
                                    <defs>
                                        <mask id="VaultMask_Final" x="-1075.154" y="-1075" width="3000" height="3000" maskUnits="userSpaceOnUse">
                                            <path fill="#fff" d="M-1075.154-1075h3000v3000h-3000z" />
                                            <path d="M321.346 350c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5-49.2-81.1-52.8-87.8-52.6-88.4 5.5-8.8 19.4-31.2 27.4-43.8 3.3-5.4 5.7-9 6-9.4 1.6 2.7 27.4 45.3 49.4 81.8 17 28.2 31.9 52.8 32.2 53.5 4.2 7 4.2 15.2 0 22.5-5.2 9-15.4 14.9-25.6 14.9h-.8z"
                                                fill="none" stroke="#000" strokeWidth="24px" strokeLinecap="round" strokeLinejoin="round" />
                                        </mask>

                                        {/* Animation definition */}
                                        <style>{`
                                            @keyframes drawPath {
                                                from { stroke-dashoffset: 2500; }
                                                to { stroke-dashoffset: 0; }
                                            }
                                            .animated-path {
                                                stroke-dasharray: 2500;
                                                animation: ${showAnimation ? 'drawPath 2.5s ease-in-out forwards' : 'none'};
                                            }
                                        `}</style>
                                    </defs>
                                    <g mask="url(#VaultMask_Final)">
                                        <path
                                            className="animated-path"
                                            d="M87.046 349.3c-30.8 0-57.9-14.8-74.3-40.9-15.4-24.2-16.9-55-4.2-80.5 7.8-14.2 32.9-53.9 57.4-92.4 15.1-23.7 29.3-46.1 39.3-62.6 2.7-4.3 4.8-7.8 8.4-11.5 11.4-13.1 28.1-20.6 45.6-20.6s33.8 8.1 43.8 22.1c5.5 7.8,9.1,16.9,10.3 26.4.3 2.5-.4 4.8-2.1 7.5-1.9 3.3-21.8 34.6-21.8 34.6-.6.9-1.2 1.9-1.8 2.8-1.3 2.2-2.4 4.2-3.9 4.2s-1.2-.3-1.8-.9c-4.2-4.9-8.2-11.5-12-18-2.4-4-4.5-7.9-6.9-11.2-1.8-2.8-4.8-4.5-7.8-4.5s-4.2 1-5.8 3c-5.2 8.1-27.5 43.8-45.6 72.7-11.8 18.9-22.1 35.3-25.4 40.4-2.2 3.6-5.2 8.1-7.9 12.5-1.6 2.7-3.3 5.4-4.8 7.8-.6 1-1.3 2.1-1.9 3.1-2.5 4-4.6 7.5-6.1 11.1-5.2 12.4-.4 27.3 10.9 34.6 5.5 3.6 11.4 5.4 17.5 5.4 12.3 0 25-7.6 32.9-20 5.5-8.1 23.6-37 45-70.6 31.7-50.4 67.9-107.5 76.1-118.7 6.3-6.7 14.5-10.8 22.7-10.8 9.3 0 18.2 5.1 23.2 13.1 4.8 7.9 5.4 16.8 1 24.7-3.6 7-6.6 11.3-10.9 18-3.1 4.9-7.3 11.2-13 20.6-14.4 22.5-31 48.7-47 74.2-24.4 38.9-47.7 75.7-55.3 86.8-17.5 24.1-45.5 38.6-75.1 38.6z"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeWidth="0.5"
                                        />
                                    </g>
                                    <path
                                        className="animated-path"
                                        d="M321.346 350c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5-49.2-81.1-52.8-87.8-52.6-88.4 5.5-8.8 19.4-31.2 27.4-43.8 3.3-5.4 5.7-9 6-9.4 1.6 2.7 27.4 45.3 49.4 81.8 17 28.2 31.9 52.8 32.2 53.5 4.2 7 4.2 15.2 0 22.5-5.2 9-15.4 14.9-25.6 14.9h-.8z"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeWidth="0.5"
                                    />
                                    <circle
                                        cx="321.346"
                                        cy="37.5"
                                        r="37.5"
                                        fill="#FFD700"
                                        style={{
                                            opacity: showAnimation ? 1 : 0,
                                            transition: 'opacity 0.5s ease 2s'
                                        }}
                                    />

                                    {/* PRECISION AUDIT MODE: STRUCTURAL SPINE */}
                                    {isAuditing && (
                                        <g className="animate-in fade-in duration-300">
                                            {/* Vertical axis lock at EXACT X=321.346 */}
                                            <line
                                                x1="321.346" y1="0"
                                                x2="321.346" y2="350.3"
                                                stroke="#ef4444"
                                                strokeWidth="1.5"
                                                strokeDasharray="8 4"
                                                opacity="0.7"
                                            />

                                            {/* Golden dot anchor circle */}
                                            <circle
                                                cx="321.346"
                                                cy="37.5"
                                                r="42"
                                                stroke="#FFD700"
                                                strokeWidth="1.5"
                                                fill="none"
                                                opacity="0.4"
                                                strokeDasharray="4 2"
                                            />

                                            {/* Dimension labels */}
                                            <text
                                                x="321.346"
                                                y="15"
                                                fill="#ef4444"
                                                fontSize="11"
                                                fontWeight="700"
                                                textAnchor="middle"
                                                fontFamily="monospace"
                                            >
                                                X: 321.346°
                                            </text>

                                            <text
                                                x="345"
                                                y="42"
                                                fill="#FFD700"
                                                fontSize="10"
                                                fontWeight="600"
                                                fontFamily="monospace"
                                            >
                                                r=37.5
                                            </text>

                                            {/* Coordinate system indicator */}
                                            <text
                                                x="10"
                                                y="340"
                                                fill="rgba(255,255,255,0.3)"
                                                fontSize="9"
                                                fontWeight="500"
                                                fontFamily="monospace"
                                            >
                                                ViewBox: 358.846 × 350.3
                                            </text>
                                        </g>
                                    )}
                                </svg>

                                {/* HOVER COORDINATE TRACKER */}
                                {isHoveringLogo && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute top-4 left-4 bg-black/80 backdrop-blur-xl px-4 py-2 rounded-lg border border-[#00D2FF]/30 font-mono text-xs"
                                    >
                                        <div className="flex gap-4">
                                            <span className="text-[#00D2FF]">X: {mouseCoords.x.toFixed(3)}</span>
                                            <span className="text-[#FFD700]">Y: {mouseCoords.y.toFixed(3)}</span>
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            <div className="absolute bottom-12 left-0 right-0 flex justify-center z-30 gap-4">
                                <button
                                    onClick={() => setIsAuditing(!isAuditing)}
                                    className={`px-8 py-3 backdrop-blur-xl text-white text-[10px] font-bold rounded-full border border-white/20 uppercase tracking-[0.25em] transition-all ${isAuditing ? 'bg-red-500/20 text-red-400 border-red-500/30' : 'bg-white/10 hover:bg-white/20'}`}
                                >
                                    {isAuditing ? '✓ Spine Active (321.346°)' : 'Toggle Structural Spine'}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div className="bg-white/[0.02] rounded-[3.5rem] p-12 border border-white/5 shadow-sm space-y-10">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xs font-bold uppercase tracking-[0.5em] text-slate-500">Equilibrium Audit</h3>
                                    <span className="text-[10px] font-mono text-green-500 font-bold uppercase">Verified</span>
                                </div>
                                <div className="h-[280px] md:h-[350px]">
                                    <BalanceChart />
                                </div>
                                <p className="text-[11px] text-slate-500 font-light italic leading-relaxed text-center">
                                    Distribution Analysis: The color mass distribution across Navy (Structural), Cyan (Operational), and Gold (Indicator) nodes.
                                </p>
                            </div>

                            {/* PRECISION METRICS PANEL */}
                            {isAuditing && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-red-500/5 rounded-[3rem] p-8 border border-red-500/20 space-y-4"
                                >
                                    <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-red-400">Precision Metrics</h4>
                                    <div className="space-y-3 font-mono text-xs">
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Axis Lock:</span>
                                            <span className="text-white font-bold">X = 321.346</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Percentage:</span>
                                            <span className="text-white font-bold">89.54%</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Golden Anchor:</span>
                                            <span className="text-white font-bold">(321.346, 37.5)</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Tolerance:</span>
                                            <span className="text-green-500 font-bold">± 0.001px</span>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-red-500/10">
                                        <p className="text-[10px] text-slate-600 leading-relaxed">
                                            ✓ SVG-native coordinate system eliminates CSS approximation errors. Alignment verified to 0.001px precision.
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </section>

                {/* 02. TYPOGRAPHIC HUB */}
                <section id="typography" className="py-16 md:py-28 lg:py-40 bg-[#00152e] relative overflow-hidden border-y border-white/5">
                    <div className="absolute inset-0 blueprint-grid opacity-5"></div>
                    <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10 space-y-32 relative z-20">
                        <div className="text-center space-y-4 max-w-2xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">02. Typographic Hub</h2>
                            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
                                Verification of the official Neo Sans Pro implementation. We analyze the 500-weight "Identifier" node against the 300-weight "Sector" node.
                            </p>
                        </div>

                        <div className="bg-white/[0.02] rounded-[2rem] md:rounded-[5rem] p-6 sm:p-10 md:p-24 lg:p-36 border border-white/10 backdrop-blur-md flex flex-col items-center shadow-2xl">
                            {/* THE MASTER LOCKUP (OLED MAGNIFICATION) */}
                            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16 transition-all duration-1000 hover:scale-[1.02] group">
                                <div className="w-32 h-32 md:w-44 md:h-44 text-[#00D2FF] glow-cyan">
                                    <MasterLockup />
                                </div>
                                <div className="flex items-baseline leading-none pt-4">
                                    <span className="text-4xl sm:text-6xl md:text-[12rem] font-medium lowercase text-white tracking-tighter">inspiron</span>
                                    <span className="text-3xl sm:text-5xl md:text-[10rem] font-light uppercase text-[#FFD700] ml-6 tracking-[0.1em] group-hover:tracking-[0.18em] transition-all duration-1000">TECH</span>
                                </div>
                            </div>

                            <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
                                <div className="p-6 md:p-12 rounded-[1.5rem] md:rounded-[3.5rem] bg-white/[0.03] border border-white/5 space-y-4">
                                    <span className="text-[10px] font-bold text-[#00D2FF] uppercase tracking-[0.4em]">Node A: Medium Identifier</span>
                                    <div className="text-4xl font-medium lowercase text-white">Neo Sans Medium</div>
                                    <p className="text-sm text-slate-500 leading-relaxed font-light">The core brand anchor. Corrected shoulder tangency for the 'r' ensures visual fluidity on 4K displays. Verified at weight 500.</p>
                                </div>
                                <div className="p-6 md:p-12 rounded-[1.5rem] md:rounded-[3.5rem] bg-white/[0.03] border border-white/5 space-y-4">
                                    <span className="text-[10px] font-bold text-[#FFD700] uppercase tracking-[0.4em]">Node B: Light Sector</span>
                                    <div className="text-4xl font-light uppercase text-white">Institutional Tech</div>
                                    <p className="text-sm text-slate-500 leading-relaxed font-light">Technical precision node. Rendered at weight 300 to provide visual depth and hierarchical contrast against the primary lockup.</p>
                                </div>
                            </div>

                            {/* INTERACTIVE TYPOGRAPHY WEIGHT SLIDER */}
                            <div className="mt-20 w-full max-w-4xl p-6 md:p-12 rounded-[1.5rem] md:rounded-[4rem] bg-[#00D2FF]/5 border border-[#00D2FF]/20">
                                <h4 className="text-xs font-bold uppercase tracking-[0.5em] text-[#00D2FF] mb-8">Interactive Weight Verification</h4>
                                <div className="space-y-8">
                                    <div className="flex items-center justify-between gap-8">
                                        <span className="text-sm font-mono text-slate-400 w-32">Weight: {weightSliderVal}</span>
                                        <input
                                            type="range"
                                            min="300"
                                            max="700"
                                            step="100"
                                            defaultValue="500"
                                            className="flex-1 h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#00D2FF] [&::-webkit-slider-thumb]:cursor-pointer"
                                            onChange={(e) => {
                                                setWeightSliderVal(parseInt(e.target.value));
                                                const preview = e.target.parentElement?.nextElementSibling;
                                                if (preview) (preview as HTMLElement).style.fontWeight = e.target.value;
                                            }}
                                        />
                                        <span className="text-sm font-mono text-slate-400 w-24 text-right">Standard</span>
                                    </div>
                                    <div className="text-6xl lowercase text-white text-center py-8 transition-all duration-300" style={{ fontWeight: 500 }}>
                                        inspiron
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-center text-xs font-mono">
                                        <div className="p-3 bg-white/5 rounded-xl">
                                            <div className="text-slate-500 mb-1">Light</div>
                                            <div className="text-white font-bold">300</div>
                                        </div>
                                        <div className="p-3 bg-[#00D2FF]/10 rounded-xl border border-[#00D2FF]/30">
                                            <div className="text-[#00D2FF] mb-1">Medium ✓</div>
                                            <div className="text-white font-bold">500</div>
                                        </div>
                                        <div className="p-3 bg-white/5 rounded-xl">
                                            <div className="text-slate-500 mb-1">Bold</div>
                                            <div className="text-white font-bold">700</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* BRAND COLOR SYSTEM */}
                            <div className="mt-12 w-full max-w-4xl p-6 md:p-12 rounded-[1.5rem] md:rounded-[4rem] bg-[#FFD700]/5 border border-[#FFD700]/20">
                                <h4 className="text-xs font-bold uppercase tracking-[0.5em] text-[#FFD700] mb-8">Brand Color System</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-6 bg-white/5 rounded-2xl border border-[#FFD700]/30 space-y-3">
                                        <div className="w-full h-16 rounded-xl" style={{ backgroundColor: '#FFD700' }}></div>
                                        <div className="text-center">
                                            <div className="text-[10px] font-bold text-[#FFD700] uppercase tracking-wider mb-1">Primary Accent</div>
                                            <div className="text-sm font-mono text-white">#FFD700</div>
                                            <div className="text-[10px] text-slate-500">Action Gold</div>
                                        </div>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-2xl border border-[#00D2FF]/30 space-y-3">
                                        <div className="w-full h-16 rounded-xl" style={{ backgroundColor: '#00D2FF' }}></div>
                                        <div className="text-center">
                                            <div className="text-[10px] font-bold text-[#00D2FF] uppercase tracking-wider mb-1">Core Brand</div>
                                            <div className="text-sm font-mono text-white">#00D2FF</div>
                                            <div className="text-[10px] text-slate-500">Electric Cyan</div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[10px] text-slate-600 text-center mt-6 leading-relaxed">
                                    Mathematically precise color values ensure consistent reproduction across all media.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* 03. LIVE SIMULATION LAB */}
                <section id="simulation" className="py-16 md:py-28 lg:py-40 bg-[#010409] relative overflow-hidden border-y border-white/5">
                    <div className="absolute inset-0 blueprint-grid opacity-5"></div>
                    <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10 space-y-20 relative z-20">
                        <div className="text-center space-y-4 max-w-2xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">03. Simulation Lab</h2>
                            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
                                Live testing environment. Switch rendering contexts to verify the logo&apos;s structural integrity across different deployment scenarios.
                            </p>
                        </div>

                        {/* SIMULATION CONTROLS + PREVIEW */}
                        <SimulationLab />
                    </div>
                </section>


                {/* 04. PRODUCTION ASSET EXPORT */}
                <section className="py-16 md:py-28 lg:py-40 bg-[#010409] relative overflow-hidden border-t border-white/5">
                    <div className="absolute inset-0 blueprint-grid opacity-10"></div>
                    <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-10 relative z-20 text-center space-y-14">
                        <div className="space-y-4">
                            <h3 className="text-[#00D2FF] font-mono text-[12px] tracking-[0.7em] uppercase">MIGRATION VAULT ASSET</h3>
                            <p className="text-white text-4xl font-black uppercase tracking-tighter">Geometric Master Export</p>
                        </div>
                        <div className="bg-white/[0.02] p-6 md:p-14 rounded-[2rem] md:rounded-[5rem] border border-white/10 backdrop-blur-3xl group shadow-[0_0_120px_rgba(0,0,0,0.6)]">
                            <pre className="text-[#00D2FF] text-[12px] leading-relaxed overflow-x-auto text-left custom-scroll max-h-[400px] font-mono p-6 bg-black/40 rounded-3xl border border-white/5">
                                {`<!-- INSPIRON TECH // MASTER ASSET REV 2026.1 -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 358.846 350.3">
  <defs>
    <mask id="inspiron-gap" x="-1075.154" y="-1075" width="3000" height="3000" maskUnits="userSpaceOnUse">
      <path fill="#fff" d="M-1075.154-1075h3000v3000h-3000z"/>
      <path d="M321.346 350c-10.6-1-19.3-6.1-26-15.3-.3-.6-4.3-7.3-10-16.5..." style="fill:none; stroke:#000; stroke-width:24px"/>
    </mask>
  </defs>
  <g mask="url(#inspiron-gap)">
    <path d="M87.046 349.3c-30.8 0-57.9-14.8-74.3-40.9..." fill="#00D2FF"/>
  </g>
  <path d="M321.346 350..." fill="#00D2FF"/>
  <circle cx="321.346" cy="37.5" r="37.5" fill="#FFD700"/>
</svg>`}
                            </pre>
                            <div className="mt-14 flex justify-center">
                                <button onClick={copyCode} className="bg-[#00D2FF] text-[#002147] px-20 py-7 rounded-[2.5rem] font-black uppercase text-sm tracking-[0.4em] shadow-[0_30px_60px_rgba(0,210,255,0.3)] transition-all hover:scale-105 active:scale-95">Copy Master Asset</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA: n-LAW GRID (LEGACY RE-INTEGRATED) */}
                <section className="py-16 md:py-28 lg:py-40 bg-[#00152e] border-t border-white/5 px-4 md:px-8 lg:px-10">
                    <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
                        <LawCard
                            number="01"
                            title="Zero Approximation"
                            icon={<Scale className="text-aqua" size={32} />}
                            content="All transaction data must be verified against field delivery challans. No manual entry is permitted without secondary systematic audit. Discrepancies > 0.01% trigger immediate re-verification."
                            color="border-aqua"
                        />
                        <LawCard
                            number="02"
                            title="Pure Vectoring"
                            icon={<Hexagon className="text-[#FFD700]" size={32} />}
                            content="The INSPIRON brand icon must never be exported in raster formats (JPEG/PNG) for institutional assets. 1:1 SVG precision is required to maintain architectural integrity at infinity scaling."
                            color="border-[#FFD700]"
                        />
                        <LawCard
                            number="03"
                            title="No Silicone Solutions"
                            icon={<Code2 className="text-white" size={32} />}
                            content="We reject subscription-based dependency. Every implementation must be a sovereign asset owned by the client, built on open-source foundations with zero vendor lock-in."
                            color="border-white"
                        />
                        <LawCard
                            number="04"
                            title="Persistent Audit"
                            icon={<ShieldAlert className="text-red-500" size={32} />}
                            content="Every automated workflow must include a persistent logging node. If a system fails, the root cause must be identifiable within 120 seconds of detection."
                            color="border-red-500"
                        />
                    </div>
                </section>
            </main>

        </div >
    );
}

function LawCard({ number, title, icon, content, color }: any) {
    return (
        <div className={`group relative p-6 md:p-12 bg-white/[0.02] border-t-4 ${color} hover:bg-white/[0.05] transition-all duration-500 rounded-b-3xl border-x border-b border-white/5`}>
            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl font-black text-white stroke-text">{number}</span>
            </div>
            <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit border border-white/5">
                {icon}
            </div>
            <h3 className="text-2xl font-black uppercase mb-6 tracking-tight text-white group-hover:text-aqua transition-colors">
                Rule {number}: {title}
            </h3>
            <p className="text-gray-400 leading-relaxed font-medium text-sm">
                {content}
            </p>
        </div>
    );
}
