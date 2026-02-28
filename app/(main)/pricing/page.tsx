import React from 'react';
import Link from 'next/link';
import {
    MessageSquareCode,
    ShieldCheck,
    Users,
    Database,
    BarChart3,
    GraduationCap,
    CheckCircle2,
    XCircle,
    ArrowRight,
    Briefcase,
    Clock,
    Zap,
    Factory,
    Building2,
    Truck,
    Sprout,
    Repeat,
    TrendingUp
} from 'lucide-react';

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-deep-navy-black text-institutional-white selection:bg-electric-cyan selection:text-deep-navy-black">

            {/* ── HERO ─────────────────────────────────────────────────── */}
            <section className="pt-32 pb-20 px-8 border-b border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-electric-cyan text-xs font-black uppercase tracking-widest mb-6">
                        Continuous Architecture
                    </p>
                    <h1 className="font-institutional text-4xl md:text-7xl font-medium uppercase tracking-tight mb-6">
                        ROI-Guaranteed<br />Implementation
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto mb-12">
                        Accounting isn't a one-time setup. It's a continuous process.
                        <br />
                        We partner with you month-over-month to ensure your system evolves with your business.
                    </p>

                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-action-gold/10 border border-action-gold/30 rounded-full text-action-gold text-sm font-bold uppercase tracking-wider mb-16">
                        <TrendingUp size={16} /> 6-Month ROI Guarantee or Full Refund
                    </div>

                    <div className="text-center">
                        <Link
                            href="/deploy"
                            className="inline-flex items-center gap-3 gold-racer haptic-button px-12 py-6 rounded-2xl uppercase tracking-widest text-sm shadow-2xl"
                        >
                            <MessageSquareCode size={22} /> START PROJECT
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── PRICING TIERS ─────────────────────────────────────────── */}
            <section className="py-24 px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Legend */}
                    <div className="text-center mb-16">
                        <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">The "Fractional Architect" Model</p>
                        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400 mb-8">
                            <span>✓ Dedicated Slack/WhatsApp Channel</span>
                            <span>✓ Weekly Review Calls</span>
                            <span>✓ Continuous Training</span>
                            <span>✓ Quarterly Audit Reports</span>
                        </div>
                    </div>

                    {/* Tiers */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Tier 1: Standard */}
                        <div className="group relative bg-white/5 border border-white/10 rounded-[32px] p-10 md:p-12 hover:border-action-gold/40 transition-all lg:hover:-translate-y-4 lg:hover:shadow-2xl">
                            <div className="text-center">
                                <h3 className="font-institutional text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4 text-gray-200">
                                    Standard
                                </h3>
                                <p className="text-gray-400 text-sm mb-8">
                                    Service & Small Trading Businesses
                                </p>
                                <div className="text-5xl font-black text-white mb-2">
                                    ৳15,000<span className="text-lg font-normal text-gray-500">/mo</span>
                                </div>
                                <p className="text-gray-500 text-xs uppercase tracking-wider mb-10">Billed Quarterly</p>

                                <ul className="space-y-4 mb-12 text-left">
                                    <li className="flex items-start gap-3 text-gray-300 text-sm">
                                        <CheckCircle2 size={18} className="mt-1 text-action-gold shrink-0" />
                                        <strong>Full Implementation:</strong> COA, Invoicing, Expenses.
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-300 text-sm">
                                        <CheckCircle2 size={18} className="mt-1 text-action-gold shrink-0" />
                                        <strong>Monthly Review:</strong> We check 10% of entries for errors.
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-300 text-sm">
                                        <CheckCircle2 size={18} className="mt-1 text-action-gold shrink-0" />
                                        <strong>Support:</strong> 48-hour response time via Email.
                                    </li>
                                </ul>
                                <a href="https://wa.me/8801719300849" className="block w-full py-4 rounded-xl border border-white/20 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                                    Choose Standard
                                </a>
                            </div>
                        </div>

                        {/* Tier 2: Premium (Most Popular) */}
                        <div className="group relative bg-white/5 border border-action-gold/50 rounded-[32px] p-10 md:p-12 hover:border-action-gold transition-all lg:hover:-translate-y-4 lg:hover:shadow-[0_0_40px_rgba(255,215,0,0.1)]">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-action-gold text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                                Most Popular
                            </div>
                            <div className="text-center">
                                <h3 className="font-institutional text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4 text-action-gold">
                                    Premium
                                </h3>
                                <p className="text-gray-400 text-sm mb-8">
                                    Inventory-Heavy / Distribution / Const.
                                </p>
                                <div className="text-5xl font-black text-action-gold mb-2">
                                    ৳30,000<span className="text-lg font-normal text-gray-500">/mo</span>
                                </div>
                                <p className="text-gray-500 text-xs uppercase tracking-wider mb-10">Billed Quarterly</p>

                                <ul className="space-y-4 mb-12 text-left">
                                    <li className="flex items-start gap-3 text-gray-300 text-sm font-medium">
                                        <CheckCircle2 size={18} className="mt-1 text-action-gold shrink-0" />
                                        <strong>Complex Workflows:</strong> Projects, Inventory, POs.
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-300 text-sm">
                                        <CheckCircle2 size={18} className="mt-1 text-action-gold shrink-0" />
                                        <strong>Weekly Audit:</strong> We check critical ledgers every week.
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-300 text-sm">
                                        <CheckCircle2 size={18} className="mt-1 text-action-gold shrink-0" />
                                        <strong>Priority Support:</strong> Direct WhatsApp access (10am-6pm).
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-300 text-sm">
                                        <CheckCircle2 size={18} className="mt-1 text-action-gold shrink-0" />
                                        <strong>Training:</strong> Monthly refresher session for staff.
                                    </li>
                                </ul>
                                <a href="https://wa.me/8801719300849" className="block w-full py-4 rounded-xl bg-action-gold text-black text-sm font-bold uppercase tracking-widest hover:bg-white transition-all shadow-lg">
                                    Choose Premium
                                </a>
                            </div>
                        </div>

                        {/* Tier 3: Enterprise */}
                        <div className="group relative bg-white/5 border border-white/10 rounded-[32px] p-10 md:p-12 hover:border-electric-cyan/40 transition-all lg:hover:-translate-y-4 lg:hover:shadow-2xl">
                            <div className="text-center">
                                <h3 className="font-institutional text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4 text-electric-cyan">
                                    Enterprise
                                </h3>
                                <p className="text-gray-400 text-sm mb-8">
                                    Groups · Manufacturing · Multi-Branch
                                </p>
                                <div className="text-5xl font-black text-white mb-2">
                                    Custom<span className="text-lg font-normal text-gray-500"> Quote</span>
                                </div>
                                <p className="text-gray-500 text-xs uppercase tracking-wider mb-10">Retainer Basis</p>

                                <ul className="space-y-4 mb-12 text-left">
                                    <li className="flex items-start gap-3 text-gray-300 text-sm">
                                        <CheckCircle2 size={18} className="mt-1 text-electric-cyan shrink-0" />
                                        <strong>Architect-Level Oversight:</strong> Direct Founder Involvement.
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-300 text-sm">
                                        <CheckCircle2 size={18} className="mt-1 text-electric-cyan shrink-0" />
                                        <strong>Custom Scripts:</strong> Liquid code for invoices/reports.
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-300 text-sm">
                                        <CheckCircle2 size={18} className="mt-1 text-electric-cyan shrink-0" />
                                        <strong>Inter-Company:</strong> Consolidated Group Accounts.
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-300 text-sm">
                                        <CheckCircle2 size={18} className="mt-1 text-electric-cyan shrink-0" />
                                        <strong>On-Site:</strong> Quarterly site visits (Dhaka).
                                    </li>
                                </ul>
                                <a href="https://wa.me/8801719300849" className="block w-full py-4 rounded-xl border border-white/20 text-sm font-bold uppercase tracking-widest hover:border-electric-cyan hover:text-electric-cyan transition-all">
                                    Contact Founder
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Industries Row */}
                    <div className="mt-16 flex flex-wrap justify-center gap-4 opacity-50">
                        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 bg-white/5 px-4 py-2 rounded-full">
                            <Sprout size={14} /> Agro
                        </div>
                        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 bg-white/5 px-4 py-2 rounded-full">
                            <Factory size={14} /> Manufacturing
                        </div>
                        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 bg-white/5 px-4 py-2 rounded-full">
                            <Truck size={14} /> Distribution
                        </div>
                        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 bg-white/5 px-4 py-2 rounded-full">
                            <Building2 size={14} /> Construction
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EXPLAIN SECTION ──────────────────────────────────────── */}
            <section className="py-24 px-8 bg-white/[0.02] border-t border-white/5">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-12">
                    <div className="flex-1">
                        <p className="text-electric-cyan text-xs font-black uppercase tracking-widest mb-4">
                            The Strategy
                        </p>
                        <h2 className="font-institutional text-3xl md:text-5xl font-medium uppercase tracking-tight mb-6">
                            Why Monthly?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 font-light leading-relaxed">
                            Most software implementations fail 3 months after the consultant leaves.
                            New staff join, workflows change, and errors creep in.
                        </p>
                        <p className="text-gray-400 text-lg mb-8 font-light leading-relaxed">
                            Our retainer model ensures <strong>Continuous Architecture</strong>. We don't just build the system; we monitor its health, verify the data integrity, and train your team as you grow.
                        </p>
                        <div className="p-6 bg-deep-navy-black border border-action-gold/30 rounded-2xl">
                            <h4 className="text-action-gold font-bold uppercase tracking-wider text-sm mb-2">The 6-Month ROI Guarantee</h4>
                            <p className="text-gray-300 text-sm font-light">
                                If your verified accounting data doesn't reveal at least 2x the cost of our retainer in saved wastage, recovered revenue, or tax compliance savings within 6 months, we will refund the last 3 months of fees.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
