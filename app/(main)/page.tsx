import React from 'react';
import { InstitutionalHero } from '@/components/InstitutionalHero';
import { Users, Building2, HeadphonesIcon, ArrowRight, MessageSquareCode } from 'lucide-react';
import Link from 'next/link';

/**
 * INSPIRON TECH — Homepage
 * Real content. Plain language. No jargon.
 */

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-deep-navy-black text-institutional-white selection:bg-electric-cyan selection:text-deep-navy-black">

            {/* HERO */}
            <InstitutionalHero />

            {/* HERO POSITIONING */}
            <section className="py-12 px-5 md:px-8 border-b border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light">
                        At INSPIRON TECH, we implement Manager.io as the core of your financial
                        architecture — we don&apos;t just install software, we architect workflow logic.
                        14+ years IT infrastructure · 10+ years Manager.io · 15+ industries architected ·
                        NBR/VAT-ready reporting (Mushak 6.3) · 50+ transformations · 0.1% error tolerance.
                    </p>
                </div>
            </section>

            {/* WHY CHOOSE US — Real reasons, not jargon */}
            <section id="why-us" className="py-24 md:py-32 border-y border-white/5 px-5 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-institutional text-3xl md:text-5xl font-medium text-center uppercase tracking-tight mb-4">
                        Why Businesses Choose Us
                    </h2>
                    <p className="text-gray-500 text-center text-lg mb-12 md:mb-16 max-w-2xl mx-auto">
                        We don&apos;t just install software. We understand your business first, then build the right solution.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 relative">
                        {/* Mobile Stack Selectors (Brutalist Separation) */}
                        <div className="p-8 md:p-12 bg-white/5 border-2 md:border border-white/10 md:border-white/10 rounded-[32px] md:rounded-[40px] hover:border-action-gold/50 transition-all group">
                            <Users className="text-action-gold mb-6 md:mb-8 group-hover:scale-110 transition" size={40} />
                            <h3 className="font-institutional text-2xl font-bold uppercase mb-4">We Listen First</h3>
                            <p className="text-gray-400 text-sm leading-relaxed font-light">
                                We spend 10–20 hours understanding your workflow, staff capabilities, and real challenges before proposing anything.
                            </p>
                        </div>
                        <div className="p-8 md:p-12 bg-white/5 border-2 md:border border-white/10 md:border-white/10 rounded-[32px] md:rounded-[40px] hover:border-electric-cyan/50 transition-all group">
                            <Building2 className="text-electric-cyan mb-6 md:mb-8 group-hover:scale-110 transition" size={40} />
                            <h3 className="font-institutional text-2xl font-bold uppercase mb-4">Every Industry</h3>
                            <p className="text-gray-400 text-sm leading-relaxed font-light">
                                Aquaculture, footwear groups, trims & printing, GP/bKash distribution, govt tenders, medical devices, cooperatives — if it has a workflow, we&apos;ve architected it on Manager.io.
                            </p>
                        </div>
                        <div className="p-8 md:p-12 bg-white/5 border-2 md:border border-white/10 md:border-white/10 rounded-[32px] md:rounded-[40px] hover:border-white/50 transition-all group">
                            <HeadphonesIcon className="text-institutional-white mb-6 md:mb-8 group-hover:scale-110 transition" size={40} />
                            <h3 className="font-institutional text-2xl font-bold uppercase mb-4">Support That Lasts</h3>
                            <p className="text-gray-400 text-sm leading-relaxed font-light">
                                After delivery, we stay available. Whenever you forget something or face a new situation, we adjust and support again.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INDUSTRIES SERVED — Show real breadth */}
            <section className="py-24 px-5 md:px-8 bg-white/[0.02]">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="font-institutional text-2xl md:text-4xl font-medium uppercase tracking-tight mb-12">
                        Industries We&apos;ve Architected
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            'Cattle/Goat Farms (Saad Sayeed Agro)',
                            '30-Pond Aquaculture (Nobin Agro, Gazipur)',
                            'Footwear Manufacturing (**Step Shoe Last** — First Plastic Shoe Last Manufacturer in Bangladesh)',
                            'Adhesives & Shoe Lasts',
                            'Garments Trims & Labels (SML Subcontractors)',
                            'Document & Commercial Printing (Print Aid)',
                            'GP/bKash Divisional Distributors (Progoti Agency, Barishal)',
                            'Mobile Distributors (Ibrahim Enterprise, Patuakhali/Barguna)',
                            'IVD Medical Devices (**HEALTHCARE INSPIRON**)',
                            'Govt Tender Contractors (BAUS Builders)',
                            'Leathergoods Manufacturers/Exporters',
                            'Corrugated Steel Dealers',
                            'Garments Buying Houses',
                            '**X-PRESS TECHNOLOGIES LTD.** (Nationwide ISP)',
                            'Cooperative Societies',
                            'Construction (Roads/Bridges/Buildings)',
                            'INSPIRON TECH (Self)',
                        ].map((industry) => (
                            <span
                                key={industry}
                                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:border-electric-cyan/50 transition"
                            >
                                {industry}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* SOCIAL PROOF — Real, verifiable */}
            <section className="py-24 px-5 md:px-8 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="grid md:grid-cols-4 gap-8 mb-16">
                        <div>
                            <div className="text-5xl font-black text-action-gold mb-2">14+</div>
                            <p className="text-gray-500 text-sm uppercase tracking-wider">Years IT Infrastructure (Since 2011)</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-electric-cyan mb-2">10+</div>
                            <p className="text-gray-500 text-sm uppercase tracking-wider">Years on Manager.io</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-institutional-white mb-2">15+</div>
                            <p className="text-gray-500 text-sm uppercase tracking-wider">Industries Architected</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-action-gold mb-2">50+</div>
                            <p className="text-gray-500 text-sm uppercase tracking-wider">
                                Transformations · 0.1% Error Tolerance
                            </p>
                        </div>
                    </div>

                    {/* HERO POSITIONING - THE ARSENAL QUOTE */}
                    <blockquote className="text-xl md:text-2xl text-gray-300 italic font-light leading-relaxed max-w-3xl mx-auto mb-6 [&>br]:leading-6">
                        &ldquo;I am not selling software — I architect logic for any kind of workflow.
                        <br /><br />
                        Manager.io discovered inside X-Press Technologies — ISP billing reconciliation breaking between customers and payment gateways. Took responsibility for Accounts, learned Mushak compliance hands-on, never looked back.
                        <br /><br />
                        Cattle/goat farms like <strong>Saad Sayeed Agro</strong>.
                        30-pond aquaculture — <strong>Nobin Agro, Gazipur</strong>.
                        <strong>Step Shoe Last</strong>: first plastic shoe last manufacturer in Bangladesh — architected from 4 years inside.
                        <strong>HEALTHCARE INSPIRON</strong>: 6 years running IVD medical distribution.
                        <br /><br />
                        <strong>Bring me any model I have not seen yet.</strong>&rdquo;
                    </blockquote>
                    <p className="text-action-gold font-black uppercase tracking-widest text-xs">
                        — MD ABU HASAN · Founder & Chief Architect, INSPIRON TECH
                    </p>
                    <p className="text-gray-600 text-xs mt-4">
                        Active on{" "}
                        <a href="https://forum.manager.io/u/abu_hasan" target="_blank" rel="noopener noreferrer"
                            className="text-electric-cyan hover:underline">
                            Manager.io Community Forum ↗
                        </a>
                        {" "}— helping agro farms, distributors, contractors &amp; more solve complex workflows globally.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-5 md:px-8 bg-gradient-to-t from-electric-cyan/[0.03] to-transparent">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-institutional text-3xl md:text-5xl font-medium uppercase tracking-tight mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 font-light">
                        Every project starts with a free conversation. Tell us about your business and we&apos;ll show you what&apos;s possible.
                    </p>
                    <a
                        href="/architect"
                        className="inline-flex items-center gap-3 gold-racer haptic-button px-12 py-6 rounded-2xl uppercase tracking-widest text-sm shadow-2xl"
                    >
                        <MessageSquareCode size={22} /> Deploy Your Architecture
                    </a>
                </div>
            </section>

        </div>
    );
}
