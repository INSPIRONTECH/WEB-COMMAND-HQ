import React from 'react';
import { BookOpen, TrendingUp, Layers, Printer, MessageSquareCode } from 'lucide-react';
import Link from 'next/link';

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen bg-deep-navy-black text-institutional-white selection:bg-electric-cyan selection:text-deep-navy-black">
            {/* Hero */}
            <section className="py-32 px-8 text-center border-b border-white/5">
                <h1 className="font-institutional text-4xl md:text-6xl font-medium uppercase tracking-tight mb-6">
                    Engineering The Impossible
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                    Real Bangladesh businesses. Complex workflows.
                    <br />
                    Architected on Manager.io with 0.1% error tolerance.
                </p>
            </section>

            {/* Case Study 1: Nobin Agro */}
            <section className="py-24 px-8 border-b border-white/5">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="text-electric-cyan font-bold tracking-widest uppercase mb-4 text-sm">Case Study #01 — Aquaculture & Livestock</div>
                        <h2 className="font-institutional text-3xl md:text-5xl font-medium uppercase tracking-tight mb-6">
                            Nobin Agro (Gazipur)
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed">
                            A massive 30-pond aquaculture and livestock operation facing inventory chaos.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-action-gold font-bold uppercase tracking-wider text-sm mb-2">The Challenge</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Tracking profitability for 30 separate ponds and livestock batches. Feed was purchased in bulk but consumed daily across different sheds/ponds. Mortality rates were untracked expenses.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-electric-cyan font-bold uppercase tracking-wider text-sm mb-2">The Architecture</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex gap-3">
                                        <TrendingUp size={20} className="text-electric-cyan shrink-0" />
                                        <span><strong>Projects:</strong> Each pond cycle and livestock batch created as a separate Project.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <Layers size={20} className="text-electric-cyan shrink-0" />
                                        <span><strong>Production Orders:</strong> Daily feed consumption recorded to move cost from Inventory &rarr; WIP (Project).</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <BookOpen size={20} className="text-electric-cyan shrink-0" />
                                        <span><strong>Custom COA:</strong> Specific accounts for Mortality Loss to track dead stock value.</span>
                                    </li>
                                </ul>
                                <div className="mt-8">
                                    <Link href="/case-studies/nobin-agro" className="inline-flex items-center gap-2 text-action-gold hover:text-white font-bold tracking-widest uppercase text-sm border border-action-gold/30 rounded-xl px-6 py-3 hover:bg-action-gold/10 transition-all glow-cyan cursor-pointer">
                                        <Printer size={16} /> View Carousel Case Study &rarr;
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/5 p-10 rounded-[40px] border border-white/10">
                        <div className="grid grid-cols-2 gap-8 text-center">
                            <div className="p-6 bg-black/20 rounded-2xl">
                                <div className="text-4xl font-bold text-white mb-2">30+</div>
                                <div className="text-xs uppercase tracking-widest text-gray-500">Ponds Tracked</div>
                            </div>
                            <div className="p-6 bg-black/20 rounded-2xl">
                                <div className="text-4xl font-bold text-action-gold mb-2">100%</div>
                                <div className="text-xs uppercase tracking-widest text-gray-500">Feed Traceability</div>
                            </div>
                            <div className="p-6 bg-black/20 rounded-2xl col-span-2">
                                <div className="text-4xl font-bold text-electric-cyan mb-2">Real-Time</div>
                                <div className="text-xs uppercase tracking-widest text-gray-500">Batch Profitability</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study 2: STEP Group */}
            <section className="py-24 px-8 border-b border-white/5 bg-white/[0.02]">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 bg-white/5 p-10 rounded-[40px] border border-white/10">
                        {/* Visual Representation or Stats */}
                        <div className="flex flex-col gap-4">
                            <div className="p-6 bg-black/20 rounded-2xl border-l-4 border-electric-cyan">
                                <div className="text-lg font-bold text-white">STEP Footwear</div>
                                <div className="text-sm text-gray-500">Manufacturing & Retail</div>
                            </div>
                            <div className="p-6 bg-black/20 rounded-2xl border-l-4 border-action-gold ml-8">
                                <div className="text-lg font-bold text-white">Adhesive Unit</div>
                                <div className="text-sm text-gray-500">Supplies Glue to Footwear</div>
                            </div>
                            <div className="p-6 bg-black/20 rounded-2xl border-l-4 border-institutional-white ml-8">
                                <div className="text-lg font-bold text-white">Shoe Last Unit</div>
                                <div className="text-sm text-gray-500">Supplies Lasts to Footwear</div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="text-electric-cyan font-bold tracking-widest uppercase mb-4 text-sm">Case Study #02 — The Origin Story (2011-2015)</div>
                        <h2 className="font-institutional text-3xl md:text-5xl font-medium uppercase tracking-tight mb-2">
                            Step Shoe Last & Accessories
                        </h2>
                        <h3 className="text-xl text-action-gold font-medium mb-6">
                            Executive Officer, Commercial
                        </h3>
                        <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed">
                            "I wasn't hired to fix the accounting. I was hired to manage commercial operations. But I could see what no one else was measuring."
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-action-gold font-bold uppercase tracking-wider text-sm mb-2">The Challenge</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Managing 4 distinct companies where one (Adhesives) sells to another (Footwear). Need to track inter-company balances and see a consolidated Group Profit & Loss.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-electric-cyan font-bold uppercase tracking-wider text-sm mb-2">The Architecture</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex gap-3">
                                        <Layers size={20} className="text-electric-cyan shrink-0" />
                                        <span><strong>Divisional Accounting:</strong> Each entity setup as a Division (or separate business file) for granular control.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <TrendingUp size={20} className="text-electric-cyan shrink-0" />
                                        <span><strong>Inter-Company Logic:</strong> Sales Invoice in Entity A automatically mapped to Purchase Invoice in Entity B via clearing accounts.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study 3: X-Press Technologies */}
            <section className="py-24 px-8 border-b border-white/5 bg-white/[0.02]">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="text-electric-cyan font-bold tracking-widest uppercase mb-4 text-sm">Case Study #03 — ISP & Telecommunications</div>
                        <h2 className="font-institutional text-3xl md:text-5xl font-medium uppercase tracking-tight mb-6">
                            X-Press Technologies
                        </h2>
                        <h3 className="text-xl text-action-gold font-medium mb-6">
                            IT Support Engineer &rarr; Asst. Manager (Accounts)
                        </h3>
                        <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed">
                            "This is where I found Manager.io — inside an ISP's accounting department, reconciliation breaking between customers and payment gateways. I took responsibility for Accounts and never looked back."
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-action-gold font-bold uppercase tracking-wider text-sm mb-2">The Transition</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Started as IT Support Engineer managing ISP billing reconciliation, CRM installations, technical support, and monthly operational reporting. Promoted to Asst. Manager (Accounts) — discovered Manager.io and took full responsibility for financial operations.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-electric-cyan font-bold uppercase tracking-wider text-sm mb-2">The Architecture</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex gap-3">
                                        <TrendingUp size={20} className="text-electric-cyan shrink-0" />
                                        <span><strong>Billing Reconciliation:</strong> Solved high-volume conflict resolution between ISP billing database and payment gateways.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <Layers size={20} className="text-electric-cyan shrink-0" />
                                        <span><strong>BTRC Compliance:</strong> Automated monthly regulatory reports for bandwidth consumption and user logs.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <BookOpen size={20} className="text-electric-cyan shrink-0" />
                                        <span><strong>Full VAT Cycle:</strong> Hands-on management of Mushak-11, 16, 17, 18, and 19 registers.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/5 p-10 rounded-[40px] border border-white/10">
                        <div className="grid grid-cols-1 gap-8 text-center">
                            <div className="p-8 bg-black/20 rounded-2xl">
                                <div className="text-5xl font-bold text-white mb-2">1st</div>
                                <div className="text-xs uppercase tracking-widest text-gray-500">Manager.io Deployment</div>
                            </div>
                            <div className="p-8 bg-black/20 rounded-2xl">
                                <div className="text-5xl font-bold text-action-gold mb-2">100%</div>
                                <div className="text-xs uppercase tracking-widest text-gray-500">VAT Compliance (Mushak)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-8 bg-gradient-to-t from-electric-cyan/[0.05] to-transparent text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-institutional text-3xl md:text-5xl uppercase tracking-tight mb-6">Your Workflow is Next</h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto font-light">
                        We have architected the most complex businesses in Bangladesh. We are ready for yours.
                    </p>
                    <a href="https://wa.me/8801719300849" className="gold-racer haptic-button px-12 py-6 rounded-2xl uppercase tracking-widest text-sm shadow-2xl inline-flex items-center gap-3">
                        <MessageSquareCode size={22} /> Architect My Business
                    </a>
                </div>
            </section>

        </div>
    );
}
