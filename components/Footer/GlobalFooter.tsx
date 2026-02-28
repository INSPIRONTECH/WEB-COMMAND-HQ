import React from 'react';
import Link from 'next/link';
import { MessageSquareCode, ExternalLink } from 'lucide-react';
import { RefinedLogo } from '../Branding/RefinedLogo';

const DIRECTORY = [
    { href: '/', label: 'ROOT_INDEX' },
    { href: '/services', label: 'SERVICES.EXE' },
    { href: '/case-studies', label: 'CASE_STUDIES.DAT' },
    { href: '/pricing', label: 'PRICING_MATRIX' },
];

const COMMAND = [
    { href: '/about', label: 'ABOUT.SYS' },
    { href: '/contact', label: 'CONTACT.INIT' },
    { href: '/social-assets', label: 'BRAND.ASSETS' },
];

const COMPLIANCE = [
    {
        label: 'OFFICIAL MANAGER.IO PARTNER',
        href: 'https://www.manager.io/advisors',
        external: true,
    },
    {
        label: 'TRADE-DSCC-0045632025',
        href: null,
        external: false,
    },
    {
        label: 'BASIS REGISTERED',
        href: null,
        external: false,
    },
    {
        label: 'PRIVACY PROTOCOL',
        href: '/privacy',
        external: false,
    },
];

export const GlobalFooter = () => {
    return (
        <footer className="border-t border-electric-cyan/10 bg-deep-navy-black px-8 pt-16 pb-8">
            <div className="max-w-6xl mx-auto">

                {/* ── 4-COLUMN GRID ─────────────────────────── */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8">

                    {/* COL 1 · INTELLIGENCE */}
                    <div className="col-span-2 md:col-span-1 space-y-5">
                        <RefinedLogo size={40} />
                        <p className="font-institutional text-white/70 text-sm leading-relaxed">
                            I Architect Logic.
                        </p>
                        <p className="font-mono text-[10px] text-electric-cyan tracking-widest">
                            ● OFFICIAL MANAGER.IO PARTNER
                        </p>
                        <p className="font-mono text-[10px] text-white/30 tracking-widest">
                            BANGLADESH — ONLY LISTED
                        </p>
                        <a href="tel:+8801719300849"
                            className="block font-mono text-[11px] text-white/40
                         hover:text-white/70 tracking-widest transition-colors">
                            +880 1719-300849
                        </a>
                    </div>

                    {/* COL 2 · DIRECTORY */}
                    <div className="space-y-4">
                        <p className="font-mono text-[10px] text-white/30 tracking-widest uppercase mb-5">
                            ── DIRECTORY ──
                        </p>
                        {DIRECTORY.map(({ href, label }) => (
                            <Link key={href} href={href}
                                className="block font-mono text-[11px] text-white/50
                           hover:text-action-gold tracking-widest transition-colors">
                                {label}
                            </Link>
                        ))}
                    </div>

                    {/* COL 3 · COMMAND */}
                    <div className="space-y-4">
                        <p className="font-mono text-[10px] text-white/30 tracking-widest uppercase mb-5">
                            ── COMMAND ──
                        </p>
                        {COMMAND.map(({ href, label }) => (
                            <Link key={href} href={href}
                                className="block font-mono text-[11px] text-white/50
                           hover:text-electric-cyan tracking-widest transition-colors">
                                {label}
                            </Link>
                        ))}
                        {/* CTA */}
                        <a href="https://wa.me/8801719300849"
                            className="mt-6 gold-racer haptic-button inline-flex items-center gap-2
                         px-5 py-3 rounded-xl text-[10px] font-black
                         uppercase tracking-widest">
                            <MessageSquareCode size={12} /> FREE CONSULT
                        </a>
                    </div>

                    {/* COL 4 · COMPLIANCE */}
                    <div className="space-y-4">
                        <p className="font-mono text-[10px] text-white/30 tracking-widest uppercase mb-5">
                            ── COMPLIANCE ──
                        </p>
                        {COMPLIANCE.map(({ label, href, external }) => (
                            href ? (
                                <a key={label}
                                    href={href}
                                    target={external ? '_blank' : undefined}
                                    rel={external ? 'noopener noreferrer' : undefined}
                                    className="flex items-center gap-1 font-mono text-[10px]
                             text-white/40 hover:text-electric-cyan
                             tracking-widest transition-colors">
                                    {label}
                                    {external && <ExternalLink size={8} />}
                                </a>
                            ) : (
                                <p key={label}
                                    className="font-mono text-[10px] text-white/30 tracking-widest">
                                    {label}
                                </p>
                            )
                        ))}
                    </div>
                </div>

                {/* ── BOTTOM BAR ─────────────────────────────── */}
                <div className="mt-16 pt-6 border-t border-white/5
                        flex flex-col md:flex-row justify-between
                        items-center gap-4">
                    <p className="font-mono text-[9px] text-white/20 tracking-widest uppercase text-center md:text-left">
                        © 2026 INSPIRON TECH. ALL LOGIC ARCHITECTED IN DHAKA-BD.
                    </p>
                    <div className="flex gap-6">
                        <a href="https://www.upwork.com/freelancers/~011085e2a7cde3f437"
                            target="_blank" rel="noopener noreferrer"
                            className="font-mono text-[10px] text-electric-cyan hover:underline tracking-widest">
                            UPWORK ↗
                        </a>
                        <a href="https://www.manager.io/advisors"
                            target="_blank" rel="noopener noreferrer"
                            className="font-mono text-[10px] text-action-gold hover:underline tracking-widest">
                            MANAGER.IO ↗
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};
