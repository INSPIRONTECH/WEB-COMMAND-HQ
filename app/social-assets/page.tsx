import React from 'react';
import { ShieldCheck, MessageSquareCode, Users, Building2, TrendingUp, BadgeCheck } from 'lucide-react';

/**
 * INTERNAL TOOL: SOCIAL ASSETS GENERATOR
 * Renders brand assets for screenshotting/export.
 * Visit /social-assets to view and capture.
 */

export default function SocialAssetsPage() {
    return (
        <div className="min-h-screen bg-neutral-900 p-8 space-y-24">

            {/* INSTRUCTIONS */}
            <div className="max-w-2xl mx-auto text-center mb-16">
                <h1 className="text-3xl font-bold text-white mb-4">Brand Asset Generator</h1>
                <p className="text-gray-400">
                    Use your browser's "Screenshot Node" or Snipping Tool to capture these assets.
                    <br />
                    <span className="text-electric-cyan">Dimensions are optimized for LinkedIn, Facebook, and WhatsApp.</span>
                </p>
            </div>

            {/* ─── 1. PROFILE PICTURE (LinkedIn / WhatsApp / Email) ───────────── */}
            <section className="flex flex-col items-center gap-4">
                <h2 className="text-gray-500 uppercase tracking-widest text-xs">Profile Picture (400x400)</h2>

                <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden bg-deep-navy-black border-4 border-action-gold shadow-2xl flex items-center justify-center group">
                    {/* Background Elements */}
                    <div className="absolute inset-0 bg-[radial-gradient(#00C2FF_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>

                    {/* Content (If no photo, use Initials/Logo) */}
                    <div className="z-10 text-center">
                        <div className="text-8xl font-black text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">IT</div>
                        <div className="w-48 h-48 bg-gray-800 rounded-full flex items-center justify-center mb-4 border-2 border-white/10 mx-auto">
                            <Users size={64} className="text-gray-600" />
                            {/* USER NOTE: Paste your actual photo here in post-production or overlay it */}
                        </div>
                        <div className="bg-action-gold text-deep-navy-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-block">
                            Chief Architect
                        </div>
                    </div>
                </div>
                <p className="text-xs text-gray-600">Tip: Replace gray circle with your headshot.</p>
            </section>


            {/* ─── 2. LINKEDIN COVER BANNER (1584 x 396) ────────────────────── */}
            <section className="flex flex-col items-center gap-4">
                <h2 className="text-gray-500 uppercase tracking-widest text-xs">LinkedIn Banner (1584 x 396)</h2>

                <div className="w-[1584px] h-[396px] bg-deep-navy-black relative overflow-hidden flex items-center justify-between px-24 border border-white/10 scale-50 origin-top">
                    {/* Tech Grid Background */}
                    <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:24px_24px]"></div>
                    <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-electric-cyan/5 blur-[120px] rounded-full"></div>

                    {/* Left: Value Prop */}
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 border border-electric-cyan text-electric-cyan text-xl font-bold rounded uppercase tracking-widest">
                                Official Partner
                            </span>
                            <span className="text-white/50 text-xl font-light">|</span>
                            <span className="text-white text-xl font-bold tracking-wider">Manager.io</span>
                        </div>

                        <h1 className="text-7xl font-black text-white uppercase tracking-tight leading-none mb-4">
                            Deploy Your<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-action-gold to-yellow-600">
                                Architecture
                            </span>
                        </h1>
                        <p className="text-gray-300 text-2xl font-light max-w-2xl">
                            We architect the accounting logic other consultants walk away from.
                        </p>
                    </div>

                    {/* Right: CTA & Authority */}
                    <div className="relative z-10 text-right space-y-8">
                        <div>
                            <div className="text-electric-cyan font-mono text-xl mb-2">inspiron.tech/architect</div>
                            <div className="text-white font-bold text-3xl">MD ABU HASAN</div>
                            <div className="text-gray-400 uppercase tracking-widest">Founder & Chief Architect</div>
                        </div>

                        <div className="flex gap-4 justify-end">
                            <div className="bg-white/5 px-6 py-3 rounded-xl border border-white/10 backdrop-blur-sm">
                                <div className="text-action-gold font-bold text-2xl">14+</div>
                                <div className="text-[10px] text-gray-400 uppercase">Years Exp</div>
                            </div>
                            <div className="bg-white/5 px-6 py-3 rounded-xl border border-white/10 backdrop-blur-sm">
                                <div className="text-electric-cyan font-bold text-2xl">0.1%</div>
                                <div className="text-[10px] text-gray-400 uppercase">Tolerance</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ─── 3. FACEBOOK COVER (820 x 312) ────────────────────────────── */}
            <section className="flex flex-col items-center gap-4">
                <h2 className="text-gray-500 uppercase tracking-widest text-xs">Facebook Cover (820 x 312)</h2>

                <div className="w-[820px] h-[312px] bg-deep-navy-black relative overflow-hidden flex items-center justify-center text-center border border-white/10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-deep-navy-light/[0.2] to-transparent"></div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 text-action-gold text-xs font-bold uppercase tracking-[0.2em] mb-4">
                            <BadgeCheck size={14} /> Official Manager.io Advisor
                        </div>
                        <h2 className="text-4xl font-black text-white uppercase tracking-tight mb-4">
                            Institutional-Grade<br />Financial Architecture
                        </h2>
                        <div className="inline-block px-6 py-2 bg-electric-cyan text-deep-navy-black font-bold uppercase tracking-widest text-sm rounded-full">
                            inspiron.tech/manager-bd
                        </div>
                    </div>
                </div>
            </section>


            {/* ─── 4. EMAIL SIGNATURE LOGO (Hosted Asset Mockup) ────────────── */}
            <section className="flex flex-col items-center gap-4 pb-24">
                <h2 className="text-gray-500 uppercase tracking-widest text-xs">Email Signature Logo (200x200)</h2>

                <div className="w-[200px] h-[200px] bg-transparent flex items-center justify-center p-0 border border-white/10 group relative">
                    {/* The SVG Logo */}
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="200" height="200" fill="#020817" />

                        {/* INSPIRON */}
                        <text x="100" y="85" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="32" fill="#FFFFFF" letterSpacing="2">
                            INSPIRON
                        </text>

                        {/* TECH */}
                        <text x="100" y="115" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="32" fill="#00D2FF" letterSpacing="4">
                            TECH
                        </text>

                        {/* Gold Line */}
                        <rect x="70" y="128" width="60" height="2" fill="#FFD700" />

                        {/* Tagline */}
                        <text x="100" y="145" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="8" fill="#9CA3AF" letterSpacing="1.5">
                            COMMAND LEVEL LOGIC
                        </text>

                        {/* Subtle Border */}
                        <rect x="0.5" y="0.5" width="199" height="199" stroke="#ffffff" strokeOpacity="0.1" />
                    </svg>

                    <div className="absolute -bottom-8 text-[10px] text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        Right-click &gt; Save As to get SVG/PNG.
                    </div>
                </div>
            </section>

        </div>
    );
}
