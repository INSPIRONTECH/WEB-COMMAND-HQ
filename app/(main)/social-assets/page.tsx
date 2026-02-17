"use client";

import React, { useState } from 'react';
import { RefinedIcon, RefinedLogo } from '@brand/components/Branding/RefinedLogo';
import { Camera, Check, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * SOCIAL ASSET GENERATOR
 * Renders official brand assets in Facebook-compliant dimensions
 * for direct screenshot capture.
 */

export default function SocialAssetsPage() {
    const [cleanMode, setCleanMode] = useState(false);
    const [auditMode, setAuditMode] = useState(true);

    return (
        <div className={`min-h-screen bg-[#010409] font-institutional ${cleanMode ? 'p-0' : 'p-8 md:p-20'}`}>

            {/* CONTROLS */}
            {!cleanMode && (
                <div className="fixed top-6 right-6 z-50 flex flex-col gap-4">
                    <button
                        onClick={() => setCleanMode(true)}
                        className="bg-white text-[#010409] px-6 py-3 rounded-xl font-bold uppercase text-xs tracking-widest shadow-2xl flex items-center gap-2 hover:bg-[#00D2FF] transition-colors"
                    >
                        <Camera size={16} /> Enter Screenshot Mode
                    </button>
                    <button
                        onClick={() => setAuditMode(!auditMode)}
                        className={`px-6 py-3 rounded-xl font-bold uppercase text-xs tracking-widest border border-white/10 flex items-center gap-2 transition-colors ${auditMode ? 'bg-[#00D2FF]/20 text-[#00D2FF] border-[#00D2FF]/30' : 'bg-white/5 text-slate-400'}`}
                    >
                        <Scale size={16} /> {auditMode ? 'Audit Guides: ON' : 'Audit Guides: OFF'}
                    </button>
                    <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 text-[10px] text-slate-400 font-mono w-64">
                        <p className="mb-2 text-white font-bold">INSTRUCTIONS:</p>
                        <ol className="list-decimal pl-4 space-y-1">
                            <li>Click "Enter Screenshot Mode"</li>
                            <li>Use your snipping tool (Win+Shift+S)</li>
                            <li>Capture each box exactly at the edges</li>
                            <li>Press ESC to return</li>
                        </ol>
                    </div>
                </div>
            )}

            {/* EXIT CLEAN MODE TRIGGER */}
            {cleanMode && (
                <div
                    onClick={() => setCleanMode(false)}
                    className="fixed top-0 left-0 right-0 h-4 z-50 hover:bg-[#00D2FF] cursor-pointer opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center text-[#010409] font-bold text-xs uppercase tracking-widest"
                >
                    Click to Exit Clean Mode
                </div>
            )}

            <div className={`grid ${cleanMode ? 'gap-40 justify-items-center py-20' : 'gap-20 max-w-7xl mx-auto'}`}>

                {/* --- ASSET 01: FACEBOOK PROFILE PICTURE (500x500) --- */}
                <section className="space-y-6">
                    {!cleanMode && (
                        <div className="flex items-center gap-4">
                            <span className="text-[#00D2FF] font-mono text-xs">ASSET_01</span>
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Profile Picture</h2>
                            <span className="text-slate-500 text-sm">500 x 500 px</span>
                        </div>
                    )}

                    <div className="relative group w-[500px] h-[500px] bg-[#010409] flex items-center justify-center overflow-hidden ring-1 ring-white/10">
                        {/* Background Grid - Subtle */}
                        <div className="absolute inset-0 blueprint-grid opacity-10"></div>

                        {/* Main Icon - Centered - Scaled to 60% of container */}
                        <div className="relative z-10 p-4">
                            <RefinedIcon size={280} />
                        </div>

                        {/* Audit Overlay */}
                        {auditMode && !cleanMode && (
                            <div className="absolute inset-0 pointer-events-none z-50">
                                <div className="absolute top-1/2 left-0 w-full h-px bg-[#00D2FF] opacity-30"></div>
                                <div className="absolute left-1/2 top-0 w-px h-full bg-[#00D2FF] opacity-30"></div>
                                <div className="absolute inset-0 rounded-full border border-[#FFD700] opacity-20 m-4"></div>
                                <span className="absolute bottom-2 right-2 text-[9px] font-mono text-[#00D2FF] opacity-50">CENTER_LOCKED</span>
                            </div>
                        )}
                    </div>
                </section>

                {/* --- ASSET 02: FACEBOOK COVER PHOTO (820x312) --- */}
                <section className="space-y-6">
                    {!cleanMode && (
                        <div className="flex items-center gap-4">
                            <span className="text-[#00D2FF] font-mono text-xs">ASSET_02</span>
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Cover Photo</h2>
                            <span className="text-slate-500 text-sm">820 x 312 px (Desktop Standard)</span>
                        </div>
                    )}

                    <div className="relative w-[820px] h-[312px] bg-[#010409] flex items-center overflow-hidden ring-1 ring-white/10">
                        {/* Background Elements */}
                        <div className="absolute inset-0 blueprint-grid opacity-15"></div>
                        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#00D2FF]/5 to-transparent"></div>

                        {/* Content Container - Padded */}
                        <div className="relative z-10 w-full px-16 flex items-center justify-between">

                            {/* Left: Brand Identity */}
                            <div className="space-y-3">
                                <div className="transform origin-left scale-125 pb-2">
                                    <RefinedLogo size={56} />
                                </div>
                                <div className="w-12 h-1 bg-[#FFD700] mb-4"></div>
                                <div className="text-white font-light tracking-wide text-lg">
                                    Manager.io <span className="text-[#00D2FF] font-medium">Cloud Architects</span>
                                </div>
                            </div>

                            {/* Right: Tagline / Credibility */}
                            <div className="text-right space-y-1">
                                <div className="text-[#00D2FF] text-[10px] font-bold uppercase tracking-[0.25em]">Official Partner</div>
                                <div className="text-white text-3xl font-black uppercase tracking-tighter leading-none">
                                    Bangladesh
                                </div>
                                <div className="text-slate-400 text-xs font-mono pt-2">
                                    EST. 2025 // 50+ IMPLEMENTATIONS
                                </div>
                            </div>
                        </div>

                        {/* Audit Overlay */}
                        {auditMode && !cleanMode && (
                            <div className="absolute inset-0 pointer-events-none z-50">
                                {/* Safe Zones */}
                                <div className="absolute inset-x-0 bottom-0 h-12 bg-red-500/10 border-t border-red-500/20 flex items-center justify-center">
                                    <span className="text-[9px] text-red-400 font-mono uppercase">Mobile Safe Zone (Obscured by Profile Pic)</span>
                                </div>
                                <div className="absolute inset-0 border border-[#00D2FF]/20 m-8"></div>
                            </div>
                        )}
                    </div>
                </section>

                {/* --- ASSET 03: LINKEDIN/TWITTER BANNER (1500x500) - ADAPTIVE --- */}
                <section className="space-y-6">
                    {!cleanMode && (
                        <div className="flex items-center gap-4">
                            <span className="text-[#FFD700] font-mono text-xs">ASSET_03</span>
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Universal Banner</h2>
                            <span className="text-slate-500 text-sm">1500 x 500 px (High Res)</span>
                        </div>
                    )}

                    <div className="relative w-[1500px] h-[500px] bg-[#00152e] flex flex-col items-center justify-center overflow-hidden ring-1 ring-white/10 text-center">
                        <div className="absolute inset-0 blueprint-grid opacity-20"></div>
                        <div className="absolute w-[800px] h-[800px] bg-[#00D2FF] rounded-full blur-[150px] opacity-10 -top-[400px]"></div>

                        <div className="relative z-10 space-y-8 flex flex-col items-center">
                            <div className="transform scale-150">
                                <RefinedLogo size={80} />
                            </div>

                            <div className="max-w-2xl mx-auto space-y-4">
                                <h1 className="text-5xl font-black text-white uppercase tracking-tighter leading-tight">
                                    We Don&apos;t Just Install Software.<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-white">We Architect Logic.</span>
                                </h1>
                            </div>

                            <div className="flex gap-8 pt-4">
                                <div className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-[#00D2FF] uppercase tracking-widest">
                                    Tax & VAT Compliance
                                </div>
                                <div className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-[#FFD700] uppercase tracking-widest">
                                    Workflow Automation
                                </div>
                                <div className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white uppercase tracking-widest">
                                    Zero-Variance Audit
                                </div>
                            </div>
                        </div>

                        {/* Footer Strip */}
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-black/20 backdrop-blur-sm border-t border-white/5 flex items-center justify-between px-16">
                            <div className="text-slate-400 font-mono text-xs">WWW.INSPIRON.TECH</div>
                            <div className="text-[#00D2FF] font-mono text-xs flex gap-4">
                                <span>DHAKA, BANGLADESH</span>
                                <span>//</span>
                                <span>EST. 2025</span>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
