/**
 * AUDIT VAULT - SENTRY-PROTECTED COMMAND NODE
 * Authorization Required
 */

import React from 'react';
import { ShieldCheck, Lock, FileText, Database, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Audit Vault | INSPIRON TECH',
    description: 'Sentry-protected financial audit repository',
};

// This would be protected by middleware.ts in production
export default function AuditVault() {
    return (
        <div className="min-h-screen bg-deep-navy-black text-institutional-white pt-24 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-electric-cyan text-sm font-bold uppercase tracking-widest mb-6 hover:text-electric-cyan/80 transition"
                    >
                        <ArrowLeft size={16} /> Back to Mission Control
                    </Link>
                    <div className="flex items-center gap-4 mb-4">
                        <Lock size={32} className="text-action-gold" />
                        <h1 className="font-institutional text-4xl font-medium uppercase tracking-tight">
                            Audit Vault
                        </h1>
                    </div>
                    <p className="text-gray-400 font-institutional font-light">
                        Sentry-protected repository for confidential financial audits and forensic reports.
                    </p>
                </div>

                {/* Access Control Notice */}
                <div className="bg-action-gold/10 border border-action-gold/30 rounded-2xl p-8 mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <ShieldCheck size={24} className="text-action-gold" />
                        <h2 className="font-institutional text-xl font-bold uppercase">Authorization Required</h2>
                    </div>
                    <p className="text-sm text-gray-300 font-institutional font-light">
                        This section contains confidential audit reports protected under client-attorney privilege.
                        Access is restricted to authorized MD ABU HASAN command personnel only.
                    </p>
                </div>

                {/* Vault Structure */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-black/40 border border-white/10 rounded-2xl p-8 hover:border-electric-cyan/40 transition">
                        <FileText size={32} className="text-electric-cyan mb-4" />
                        <h3 className="font-institutional text-lg font-bold uppercase mb-2">Diagnostic Reports</h3>
                        <p className="text-sm text-gray-400 font-institutional font-light">
                            2-week forensic financial audits with leakage identification and recovery roadmaps.
                        </p>
                    </div>

                    <div className="bg-black/40 border border-white/10 rounded-2xl p-8 hover:border-electric-cyan/40 transition">
                        <Database size={32} className="text-action-gold mb-4" />
                        <h3 className="font-institutional text-lg font-bold uppercase mb-2">Case Studies</h3>
                        <p className="text-sm text-gray-400 font-institutional font-light">
                            Confidential client implementations with verified ROI metrics and system architectures.
                        </p>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-12 text-center">
                    <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-institutional font-bold">
                        Protected by Sentry Protocol v2.0
                    </p>
                </div>
            </div>
        </div>
    );
}
