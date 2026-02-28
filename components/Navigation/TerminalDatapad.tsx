'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronDown, Wifi, Shield, Zap } from 'lucide-react';

const navTree = [
    {
        label: '[+] ROOT',
        children: [
            { href: '/', label: '/root_index' },
        ],
    },
    {
        label: '[+] PROTOCOLS',
        children: [
            { href: '/services', label: '/services' },
            { href: '/case-studies', label: '/case-studies' },
            { href: '/pricing', label: '/pricing' },
        ],
    },
    {
        label: '[+] COMMAND',
        children: [
            { href: '/about', label: '/about' },
            { href: '/contact', label: '/contact' },
        ],
    },
];

const systemStatus = [
    { icon: Wifi, label: 'SYSTEM', value: 'ONLINE', color: 'text-electric-cyan' },
    { icon: Shield, label: 'N-LAW', value: 'ACTIVE', color: 'text-action-gold' },
    { icon: Zap, label: 'ADVISOR', value: 'LIVE', color: 'text-green-400' },
];

// Props from GlobalHeader
export const TerminalDatapad = ({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void;
}) => {
    const [expanded, setExpanded] = useState<string | null>('[+] PROTOCOLS');
    const pathname = usePathname();

    // Fix: lock body scroll
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    return (
        <AnimatePresence>
            {open && (
                <div className="md:hidden fixed inset-0 z-50 flex">

                    {/* DATAPAD — 85% */}
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ ease: 'circOut', duration: 0.25 }}
                        className="w-[85vw] h-full bg-deep-navy-black border-r-2
                       border-electric-cyan/20 flex flex-col overflow-hidden">

                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-4
                            border-b-2 border-electric-cyan/20 font-mono">
                            <div>
                                <p className="text-electric-cyan text-[10px] font-black tracking-widest uppercase">
                                    INSPIRON_TECH//NAV.SYS
                                </p>
                                <p className="text-white/30 text-[8px] tracking-widest mt-0.5">
                                    v2.6.1 · DHAKA-BD · UTC+06
                                </p>
                            </div>
                            <button onClick={onClose} className="haptic-button">
                                <X size={18} className="text-white/40" />
                            </button>
                        </div>

                        {/* System Status */}
                        <div className="px-5 py-4 border-b border-white/5 font-mono">
                            <p className="text-white/30 text-[9px] tracking-widest uppercase mb-3">
                                ── LIVE SYSTEM STATUS ──
                            </p>
                            <div className="space-y-2">
                                {systemStatus.map(({ icon: Icon, label, value, color }) => (
                                    <div key={label} className="flex items-center justify-between text-[10px]">
                                        <div className="flex items-center gap-2 text-white/40">
                                            <Icon size={10} />
                                            <span className="tracking-widest">{label}</span>
                                        </div>
                                        <span className={`${color} font-black tracking-widest`}>● {value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Nav Tree */}
                        <div className="flex-1 overflow-y-auto px-4 py-4 font-mono space-y-1 custom-scroll">
                            <p className="text-white/30 text-[9px] tracking-widest uppercase mb-4 px-1">
                                ── DIRECTORY ──
                            </p>

                            {navTree.map((group) => (
                                <div key={group.label}>
                                    <button
                                        onClick={() => setExpanded(expanded === group.label ? null : group.label)}
                                        className="w-full flex items-center justify-between px-2 py-2.5
                               text-electric-cyan text-[11px] font-black tracking-wider
                               hover:bg-electric-cyan/5 rounded transition-colors haptic-button">
                                        <span>{group.label}</span>
                                        {expanded === group.label
                                            ? <ChevronDown size={12} />
                                            : <ChevronRight size={12} />}
                                    </button>

                                    {expanded === group.label && (
                                        <div className="ml-4 border-l border-electric-cyan/20 pl-3 space-y-1 mt-1">
                                            {group.children.map(({ href, label }) => (
                                                <Link key={href} href={href} onClick={onClose}
                                                    className={`block py-2 text-[11px] tracking-widest transition-colors
                            ${pathname === href
                                                            ? 'text-electric-cyan'
                                                            : 'text-white/50 hover:text-electric-cyan'}`}>
                                                    {label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="px-5 py-5 border-t-2 border-action-gold/20">
                            <a href="https://wa.me/8801719300849"
                                className="gold-racer haptic-button w-full py-4 rounded-xl
                           text-[10px] font-black tracking-widest uppercase
                           flex items-center justify-center gap-2">
                                ▶ INITIATE CONSULTATION
                            </a>
                            <p className="text-center text-white/20 text-[8px] tracking-widest mt-3 font-mono">
                                INSPIRON.TECH · BASIS REG · TRADE-DSCC-0045632025
                            </p>
                        </div>
                    </motion.div>

                    {/* 15% backdrop */}
                    <div className="flex-1 backdrop-blur-sm bg-black/60" onClick={onClose} />
                </div>
            )}
        </AnimatePresence>
    );
};
