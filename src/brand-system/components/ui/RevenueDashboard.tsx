/**
 * INSPIRON TECH - Strategic Revenue Dashboard
 * Objective: Prove ROI for the BDT 9,000,000 Mission
 * Feature: n-Law Impact Ledger
 */

import React from 'react';
import { TrendingUp, ShieldCheck, Activity, Database } from 'lucide-react';

const METRICS = [
    {
        label: 'Capital Leakage Recovered',
        value: '৳22,00,000+',
        sub: 'Verified: Multi-Site Enterprise',
        icon: TrendingUp,
        color: 'text-gold'
    },
    {
        label: 'Data Integrity Rate',
        value: '99.9%',
        sub: 'Across 14,478 Transactions',
        icon: ShieldCheck,
        color: 'text-aqua'
    },
    {
        label: 'Asset Control Node',
        value: '29 Ponds',
        sub: 'Real-time COGS migration',
        icon: Activity,
        color: 'text-white'
    },
    {
        label: 'Legacy Data Recovered',
        value: '100%',
        sub: 'Zero-loss Tally migration',
        icon: Database,
        color: 'text-gray-400'
    }
];

export const RevenueDashboard = () => {
    return (
        <section className="py-32 bg-[#002147]/30 border-y border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #00ffff 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>

            <div className="max-w-6xl mx-auto px-8 relative z-10">
                <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                            <span className="h-px w-8 bg-aqua"></span>
                            <span className="text-aqua font-black uppercase tracking-[0.4em] text-[10px]">Institutional Audit Report</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                            The <span className="text-gold">Precision</span> Ledger.
                        </h2>
                    </div>
                    <div className="bg-black/40 backdrop-blur-md border border-white/10 px-6 py-4 rounded-xl">
                        <p className="text-gray-500 font-mono text-[9px] uppercase tracking-widest leading-loose">
                            Fiscal Verification Node: <span className="text-white">FY 2024-25</span><br />
                            Status: <span className="text-green-500">Verified_by_System_Audit</span>
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {METRICS.map((m, i) => (
                        <div key={i} className="p-10 bg-black/40 border border-white/10 rounded-[32px] hover:border-aqua/40 transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl group-hover:bg-aqua/10 transition-colors"></div>

                            <m.icon className={`${m.color} mb-12 group-hover:scale-110 transition-transform duration-500`} size={40} />

                            <div className="relative z-10">
                                <h3 className="text-4xl font-black mb-3 tracking-tighter text-white">{m.value}</h3>
                                <p className="font-black text-[10px] uppercase tracking-[0.2em] text-gray-300 mb-2 border-l-2 border-white/10 pl-4">{m.label}</p>
                                <div className="mt-6 pt-6 border-t border-white/5">
                                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest italic">{m.sub}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-[9px] text-gray-600 font-mono uppercase tracking-[0.4em]">
                        Note: Individual client datasets are anonymized to protect institutional trade secrets.
                        Contact MD ABU HASAN for detailed Case Study verification.
                    </p>
                </div>
            </div>
        </section>
    );
};
