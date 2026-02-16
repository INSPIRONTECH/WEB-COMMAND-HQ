/**
 * INSPIRON TECH - Agro Case Study: Conclusive Evidence Report
 * Subject: Major Bangladesh Aquaculture Enterprise (BDT 100Cr+ Turnover)
 * Standard: 0.1% Error Tolerance
 */

import React from 'react';
import {
    ShieldCheck, ArrowRight, Activity, Database,
    BarChart3, Zap, Lock, ChevronRight, Globe,
    Terminal, CheckCircle2, TrendingUp, Download, MessageSquare
} from 'lucide-react';
import Link from 'next/link';
import { EvidenceSlider } from '../../../components/ui/EvidenceSlider';
import { RevenueDashboard } from '../../../components/ui/RevenueDashboard';
import { CaseStudyCard } from '../../../components/ui/CaseStudyCard';

export default function AgroCaseStudy() {
    return (
        <div className="min-h-screen bg-[#010409] text-white font-sans selection:bg-aqua selection:text-navy">

            {/* 1. INSTITUTIONAL HEADER */}
            <header className="border-b border-white/10 py-6 px-10 sticky top-0 bg-black/80 backdrop-blur-xl z-50 flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <Link href="/" className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-all hover:translate-x-[-4px]">
                        ← Return to Base
                    </Link>
                    <span className="h-4 w-px bg-white/10"></span>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-aqua animate-pulse">
                        Agro Audit Report v1.02
                    </span>
                </div>
                <div className="hidden md:flex items-center gap-4 text-[10px] font-mono text-gray-600">
                    <span className="uppercase tracking-widest">Doc_ID: IT-BN-2024-AGRO</span>
                    <span className="h-1 w-1 rounded-full bg-aqua"></span>
                    <span className="uppercase tracking-widest">Dhaka Command Node</span>
                </div>
            </header>

            {/* 2. EXECUTIVE HERO */}
            <section className="relative pt-32 pb-48 px-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_rgba(0,255,255,0.05)_0%,_transparent_50%)]"></div>
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-2 rounded-full mb-12">
                        <ShieldCheck size={14} className="text-aqua" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">Phase 04: Conclusive Evidence Handover</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
                        The ৳22 Lakhs <br /> <span className="text-gold">Recovery.</span>
                    </h1>

                    <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
                        <p className="max-w-xl text-2xl text-gray-400 leading-relaxed font-medium italic border-l-4 border-aqua pl-10">
                            "We replaced fragmented spreadsheets for a BDT 100Cr+ aquaculture corporation with a custom logic migration engine. The result: absolute financial clarity."
                        </p>
                        <div className="bg-navy/40 p-10 rounded-[32px] border border-white/10 backdrop-blur-sm">
                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-6">Strategic Impact</p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <CheckCircle2 size={16} className="text-aqua" />
                                    <span className="text-white font-bold text-sm tracking-tight">14,478 Transactions Verified</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <CheckCircle2 size={16} className="text-aqua" />
                                    <span className="text-white font-bold text-sm tracking-tight">Zero-Discrepancy Migration</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <CheckCircle2 size={16} className="text-aqua" />
                                    <span className="text-white font-bold text-sm tracking-tight">Real-Time COGS Tracking</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. HIGH-ALTITUDE DASHBOARD */}
            <RevenueDashboard />

            {/* 4. THE INTERACTIVE EVIDENCE ENGINE */}
            <section className="py-40 bg-white/[0.01] border-y border-white/5 px-10 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black border border-white/10 px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gray-500">
                    Documented_Evidence_Scrubber
                </div>

                <div className="max-w-6xl mx-auto mb-20 text-center">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">
                        Scrub the <span className="text-aqua">Operational</span> Timeline.
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-sm font-medium">
                        Walk through the exact phases of the mission, from chaotic data legacy to the final engineering handover.
                    </p>
                </div>

                <EvidenceSlider />
            </section>

            {/* 5. INDUSTRIAL CASE STUDY: STEP GROUP */}
            <section className="py-32 px-10">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">
                            Beyond <span className="text-gold">Agro.</span>
                        </h2>
                        <p className="text-gray-500 max-w-xl mx-auto text-sm font-medium">
                            Our logic engines are sector-agnostic. From aquaculture to high-volume footwear manufacturing.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <CaseStudyCard
                            subtitle="Manufacturing Sector"
                            title="STEP Group Industries"
                            description="Target Architecture: A complete digital transformation for a major footwear component manufacturer. Planned implementation of a custom Next.js ERP to handle production tracking, inventory management, and payroll for 500+ employees."
                            impactMetrics={[
                                "Target: Real-time Production Tracking",
                                "Target: Automated Payroll Processing",
                                "Target: Inventory Waste Reduction",
                                "Target: Manager.io Integration"
                            ]}
                            link="#"
                            ctaText="View ERP Roadmap"
                            status="Planned"
                        />
                        <div className="p-10 rounded-[32px] border border-white/5 bg-white/[0.01] flex flex-col justify-center items-center text-center">
                            <div className="mb-6 bg-aqua/10 p-4 rounded-full">
                                <Activity className="text-aqua" size={32} />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white">
                                Your Data <br /> <span className="text-gray-600">Could Be Next.</span>
                            </h3>
                            <p className="text-gray-500 text-sm mb-8 max-w-xs">
                                We are currently accepting 1 new industrial client for Q1 2026.
                            </p>
                            <Link href="https://wa.me/8801601618030" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                                Schedule Briefing
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. TECHNICAL SPECS CALLOUT */}
            <section className="py-32 px-10">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#002147] to-[#010409] p-16 rounded-[48px] border border-aqua/10 relative overflow-hidden group">
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-aqua/5 blur-[80px] group-hover:bg-aqua/10 transition-colors"></div>

                    <div className="relative z-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 leading-tight">
                                Ready for <br /> <span className="text-aqua">Zero-Error</span> Operations?
                            </h3>
                            <p className="text-gray-400 text-sm font-medium max-w-sm">
                                Apply the same n-Law logic to your industrial or aquaculture operations for verified capital recovery.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <a href="https://wa.me/8801719300849" target="_blank" className="bg-white text-navy px-10 py-5 rounded-full font-black uppercase text-[11px] tracking-[0.2em] hover:bg-aqua transition-all shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex items-center justify-center gap-3">
                                Start Audit <MessageSquare size={16} />
                            </a>
                            <Link href="https://brand.inspiron.tech" target="_blank" className="border border-white/10 px-10 py-5 rounded-full font-black uppercase text-[10px] tracking-[0.2em] hover:bg-white/5 transition-all text-center">
                                Download System Specs
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. INSTITUTIONAL FOOTER */}
            <footer className="py-20 text-center opacity-30 border-t border-white/5 px-10">
                <div className="flex justify-center gap-12 mb-10 text-[9px] font-black uppercase tracking-[0.5em] text-gray-500">
                    <span>Verified IP</span>
                    <span>n-Law Protocol</span>
                    <span>Dhaka Node 2026</span>
                </div>
                <p className="text-[10px] text-gray-600 font-black uppercase tracking-[1em]">MD ABU HASAN | OP-MISSION-CONTROL</p>
            </footer>
        </div>
    );
}
