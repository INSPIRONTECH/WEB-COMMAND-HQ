/**
 * NOBIN AGRO CASE STUDY — INSPIRON TECH
 * Real numbers. Real story. No fabricated quotes.
 */

import React from 'react';
import { TrendingUp, Activity, CheckCircle2, ArrowLeft, MessageSquareCode } from 'lucide-react';
import Link from 'next/link';

export default function NobinAgroCaseStudy() {
    return (
        <div className="min-h-screen bg-deep-navy-black text-institutional-white selection:bg-electric-cyan selection:text-deep-navy-black">

            {/* BACK NAV */}
            <div className="pt-24 px-10">
                <Link href="/case-studies" className="inline-flex items-center gap-2 text-gray-500 hover:text-electric-cyan transition text-sm">
                    <ArrowLeft size={14} /> Back to Case Studies
                </Link>
            </div>

            {/* HERO */}
            <section className="py-16 px-10 relative overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#00D2FF_1px,transparent_1px)] [background-size:40px_40px]"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-3 bg-electric-cyan/10 border border-electric-cyan/20 px-6 py-2 rounded-full mb-10">
                        <Activity size={14} className="text-electric-cyan" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-electric-cyan">Case Study: Aquaculture</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                        Nobin Agro <span className="text-electric-cyan">Limited</span>
                    </h1>
                    <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
                        How we took a 29-pond aquaculture operation from manual ledgers to fully automated accounting on Manager.io.
                    </p>
                </div>
            </section>

            {/* METRICS */}
            <section className="py-20 px-10 bg-white/[0.02]">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                    <div className="p-10 bg-black/40 border border-white/10 rounded-[32px]">
                        <TrendingUp className="text-electric-cyan mb-6" size={32} />
                        <h3 className="text-4xl font-black mb-2 text-white">~40%</h3>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Admin Time Reduction</p>
                    </div>
                    <div className="p-10 bg-black/40 border border-white/10 rounded-[32px]">
                        <Activity className="text-action-gold mb-6" size={32} />
                        <h3 className="text-4xl font-black mb-2 text-white">29 Ponds</h3>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Managed on One Platform</p>
                    </div>
                    <div className="p-10 bg-black/40 border border-white/10 rounded-[32px]">
                        <Activity className="text-white mb-6" size={32} />
                        <h3 className="text-4xl font-black mb-2 text-white">৳150Cr+</h3>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Annual Transaction Volume</p>
                    </div>
                </div>
            </section>

            {/* STORY */}
            <section className="py-32 px-10">
                <div className="max-w-3xl mx-auto space-y-16">
                    <div>
                        <h2 className="text-2xl font-black uppercase tracking-widest mb-6 text-white border-l-4 border-electric-cyan pl-6">The Challenge</h2>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Nobin Agro Farm operates 29 ponds with 50+ staff. They were using manual inventory tracking
                            and paper-based ledgers. The complexity of pond leasing, batch tracking, and financial
                            reconciliation caused heavy administrative overhead. Manual data entry errors made it
                            difficult to get accurate, real-time visibility into costs and profitability.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-black uppercase tracking-widest mb-6 text-white border-l-4 border-action-gold pl-6">What We Did</h2>
                        <p className="text-gray-400 leading-relaxed text-lg mb-8">
                            We deployed Manager.io with a custom setup tailored specifically for aquaculture operations,
                            including batch-lease allocation logic that no other software provider in Bangladesh had been
                            able to deliver. Other providers told the client it was impossible — we made it work.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Custom Chart of Accounts designed for aquaculture industry",
                                "Automated batch-lease allocation logic",
                                "Real-time financial visibility across all 29 ponds",

                                "Automated invoicing and payment tracking",
                                "Complete staff training across the organization"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                    <CheckCircle2 size={16} className="text-electric-cyan shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-black uppercase tracking-widest mb-6 text-white border-l-4 border-electric-cyan pl-6">The Result</h2>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Administrative overhead dropped by approximately 40%. The entire operation — 29 ponds, inventory,
                            feed tracking, lease calculations, and financial reporting — now runs on a single Manager.io platform.
                            The client can see real-time cost and profitability data for each pond, something that was previously
                            impossible with their manual system.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="text-center pt-10 space-y-6">
                        <p className="text-gray-500 text-lg">Want similar results for your business?</p>
                        <a
                            href="https://wa.me/8801719300849?text=Hi, I saw the Nobin Agro case study. I'd like to discuss Manager.io for my business."
                            className="inline-flex items-center gap-4 gold-racer haptic-button px-12 py-6 rounded-2xl uppercase tracking-widest text-sm shadow-2xl"
                        >
                            <MessageSquareCode size={20} /> Get Free Consultation
                        </a>
                        <div className="pt-4">
                            <a
                                href="https://www.upwork.com/freelancers/~011085e2a7cde3f437?viewMode=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-electric-cyan text-sm hover:underline"
                            >
                                Or find us on Upwork ↗
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
