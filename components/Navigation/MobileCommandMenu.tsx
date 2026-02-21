"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareCode, X, Terminal, ArrowRight, Server, Database, Activity } from "lucide-react";

/**
 * OPTION 2: THE TERMINAL DATAPAD (Opaque Side-Sheet Drawer)
 * A heavy, data-dense drawer sliding in from the left (85% width).
 */
export const MobileCommandMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop: the 15% blur on the right */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                    />

                    {/* The Terminal Datapad (85% width sliding from left) */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ ease: "circOut", duration: 0.3 }}
                        className="fixed top-0 bottom-0 left-0 w-[85%] z-50 bg-deep-navy-black border-r-2 border-white/10 flex flex-col md:hidden overflow-hidden shadow-[30px_0_50px_rgba(0,0,0,0.8)]"
                    >
                        {/* Status Header */}
                        <div className="bg-action-gold text-deep-navy-black px-4 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Terminal size={14} />
                                <span className="font-mono text-[10px] uppercase font-bold tracking-widest">SYS.OVR // ACTIVE</span>
                            </div>
                            <button onClick={onClose} className="hover:scale-110 transition-transform">
                                <X size={16} />
                            </button>
                        </div>

                        {/* Density Grid Lines */}
                        <div className="absolute inset-0 z-0 top-10 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                        {/* Directory Listing (Links) */}
                        <div className="relative z-10 p-6 flex-1 overflow-y-auto">
                            <div className="text-electric-cyan text-[10px] font-mono mb-4 tracking-widest opacity-80">
                                C:\SYSTEM\PROTOCOLS{'>'} DIR
                            </div>

                            <div className="flex flex-col gap-2 font-mono">
                                {[
                                    { route: '/', name: 'ROOT_INDEX' },
                                    { route: '/services', name: 'SERVICES.EXE' },
                                    { route: '/case-studies', name: 'CASE_STUDIES.DAT' },
                                    { route: '/pricing', name: 'PRICING_MATRIX.XLS' },
                                ].map((item, i) => (
                                    <Link key={i} href={item.route} onClick={onClose} className="group flex items-center gap-3 py-3 border-b border-white/5 hover:border-action-gold/50 transition-colors">
                                        <span className="text-gray-500 text-xs">[{i}]</span>
                                        <span className="text-institutional-white text-sm tracking-widest group-hover:text-action-gold transition-colors">{item.name}</span>
                                    </Link>
                                ))}
                            </div>

                            {/* Faux Hardware Diagnostics */}
                            <div className="mt-12 space-y-4">
                                <div className="text-gray-600 text-[10px] font-mono tracking-widest border-b border-white/5 pb-2">DIAGNOSTICS</div>
                                <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                                    <div className="flex items-center gap-2"><Server size={12} /> SERVER:</div>
                                    <span className="text-electric-cyan">OP_NORM</span>
                                </div>
                                <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                                    <div className="flex items-center gap-2"><Database size={12} /> DATA:</div>
                                    <span className="text-action-gold">SECURE</span>
                                </div>
                                <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                                    <div className="flex items-center gap-2"><Activity size={12} /> INTL:</div>
                                    <span className="text-green-400">NOMINAL</span>
                                </div>
                            </div>
                        </div>

                        {/* Hardware-Style CTA at Bottom */}
                        <div className="p-4 border-t-2 border-white/10 bg-black/40 relative z-10">
                            <a
                                href="https://wa.me/8801719300849"
                                className="flex items-center justify-center gap-3 w-full border border-electric-cyan text-electric-cyan py-4 font-mono uppercase tracking-widest text-[11px] hover:bg-electric-cyan hover:text-black transition-colors"
                            >
                                <MessageSquareCode size={16} />
                                [ INITIATE_COMMS ]
                            </a>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
