'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MessageSquareCode, Menu } from 'lucide-react';
import { RefinedLogo } from '../Branding/RefinedLogo';
import { TerminalDatapad } from './TerminalDatapad';

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
];

export const GlobalHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-40 nav-glass">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    <Link href="/"><RefinedLogo size={48} /></Link>

                    {/* Desktop */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link key={link.href} href={link.href}
                                className="font-institutional text-[11px] font-bold uppercase
                           tracking-widest text-gray-400 hover:text-institutional-white transition">
                                {link.label}
                            </Link>
                        ))}
                        <a href="https://wa.me/8801719300849"
                            className="flex items-center gap-2 bg-electric-cyan text-deep-navy-black
                         px-6 py-3 rounded-xl font-black uppercase text-[10px]
                         tracking-widest hover:bg-electric-cyan/90 transition haptic-button">
                            <MessageSquareCode size={14} /> Free Consult
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        className={`md:hidden w-10 h-10 border border-[#00D2FF]/30 bg-[#010409]/90
                        items-center justify-center haptic-button rounded-lg
                        ${menuOpen ? 'hidden' : 'flex'}`}>
                        <Menu size={20} className="text-[#00D2FF]" />
                    </button>
                </div>
            </nav>

            <TerminalDatapad open={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    );
};
