/**
 * HERO SECTION — INSPIRON TECH
 * Real credentials. Plain language. No jargon.
 */

'use client';

import React from 'react';
import { ShieldCheck, BadgeCheck, MessageSquareCode, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const InstitutionalHero = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center bg-deep-navy-black overflow-hidden px-6">
            {/* Subtle background grid */}
            <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#00D2FF_1px,transparent_1px)] [background-size:40px_40px]"></div>

            <div className="relative z-10 text-center max-w-5xl">
                {/* Trust Badges */}
                <div className="relative z-20 flex flex-col md:flex-row gap-4 justify-center mb-10">
                    {/* Manager.io Official Partner */}
                    <a
                        href="https://www.manager.io/advisors"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-action-gold/10 border border-action-gold/30 px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest text-action-gold hover:bg-action-gold/20 transition"
                    >
                        <BadgeCheck size={14} className="text-action-gold" />
                        Official Manager.io Partner
                    </a>

                    {/* n-Law Protocol */}
                    <Link
                        href="/n-law"
                        className="flex items-center gap-2 bg-electric-cyan/10 border border-electric-cyan/30 px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest text-electric-cyan hover:bg-electric-cyan/20 transition"
                    >
                        <ShieldCheck size={14} className="text-electric-cyan" />
                        n-Law Protocol Active
                    </Link>
                </div>

                {/* Main Headline — Plain Language */}
                <h1 className="font-institutional text-4xl md:text-7xl lg:text-8xl font-medium text-institutional-white uppercase tracking-tighter leading-[0.9] mb-8">
                    I Don't Install Software.<br />
                    <span className="text-action-gold">I Architect Logic.</span>
                </h1>

                {/* Subtitle — What you actually do, in human language */}
                <p className="font-institutional text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-6 leading-relaxed font-light">
                    14+ years inside manufacturing plants, ISP control rooms, and medical warehouses — before founding Bangladesh's only Official Manager.io practice.
                </p>

                {/* Social Proof Line */}
                <p className="text-sm text-gray-500 mb-14 font-light">
                    15 years experience · 15+ industries served · Trusted by 50+ businesses
                </p>

                {/* CTAs */}
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    {/* Primary CTA - WhatsApp */}
                    <a
                        href="https://wa.me/8801719300849?text=Hi, I'd like to discuss Manager.io setup for my business."
                        className="flex items-center justify-center gap-3 gold-racer haptic-button px-10 py-5 rounded-2xl uppercase tracking-widest text-sm shadow-2xl"
                    >
                        <MessageSquareCode size={22} /> Get Free Consultation
                    </a>

                    {/* Secondary CTA */}
                    <Link
                        href="/services"
                        className="flex items-center justify-center gap-3 bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan font-black px-10 py-5 rounded-2xl uppercase tracking-widest text-sm hover:bg-electric-cyan/20 transition haptic-button"
                    >
                        See How We Work <ArrowRight size={18} />
                    </Link>
                </div>
            </div>

            {/* Bottom hint */}
            <div className="absolute bottom-10 text-[10px] text-white/20 uppercase tracking-[1em] font-bold font-institutional">
                INSPIRON TECH · Dhaka, Bangladesh
            </div>
        </section>
    );
};
