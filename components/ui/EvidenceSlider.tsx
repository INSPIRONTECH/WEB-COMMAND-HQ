/**
 * INSPIRON TECH - Interactive Evidence Slider
 * Feature: ROI Proof for the BDT 9M Mission
 * Precision: 0.1% Error Tolerance
 */

"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, BarChart3, ShieldCheck } from 'lucide-react';

const SLIDES = [
    {
        id: 1,
        title: "100+ Crore Operations",
        desc: "Managing data logic for high-scale aquaculture projects across multiple geographic nodes. Scalability is hard-coded into the architecture.",
        metric: "100Cr+ Portfolio"
    },
    {
        id: 2,
        title: "Real-Time Field Capture",
        desc: "Transactions captured at 05:10 AM from the field with zero latency. No more manual sync or paper-trail delays.",
        metric: "05:10 AM Sync"
    },
    {
        id: 8,
        title: "Commission Recovery",
        desc: "Logic audit identified ৳10-22 Lakhs in missing feed bag commissions. Capital was reconciled and recovered within one fiscal cycle.",
        metric: "৳22L Recovered"
    },
    {
        id: 9,
        title: "Data Integrity Strike",
        desc: "14,478 legacy transactions migrated from Tally and spreadsheets with absolute zero discrepancy.",
        metric: "0.0% Error"
    },
    {
        id: 10,
        title: "Annual Capital Impact",
        desc: "Total estimated recurring impact through lease optimization and administrative error elimination.",
        metric: "৳25-40L/Year"
    },
];

export const EvidenceSlider = () => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % SLIDES.length);
    const prev = () => setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

    return (
        <div className="w-full max-w-5xl mx-auto py-12 px-4">
            <div className="bg-[#0b0e14] rounded-[40px] border border-white/10 overflow-hidden shadow-2xl relative">

                {/* Navigation Overlays */}
                <button
                    onClick={prev}
                    className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-4 bg-navy/80 backdrop-blur-md rounded-full border border-white/10 hover:bg-aqua hover:text-navy transition-all group"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={20} className="group-hover:scale-110 transition-transform" />
                </button>
                <button
                    onClick={next}
                    className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-4 bg-navy/80 backdrop-blur-md rounded-full border border-white/10 hover:bg-aqua hover:text-navy transition-all group"
                    aria-label="Next slide"
                >
                    <ChevronRight size={20} className="group-hover:scale-110 transition-transform" />
                </button>

                <div className="grid lg:grid-cols-2 min-h-[500px]">
                    {/* Left: The Visual Asset */}
                    <div className="bg-black/40 aspect-video lg:aspect-auto flex items-center justify-center p-12 border-r border-white/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)] opacity-40"></div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                exit={{ opacity: 0, scale: 0.95, rotateY: -10 }}
                                transition={{ duration: 0.5, ease: "circOut" }}
                                className="w-full h-full flex flex-col items-center justify-center text-center relative z-10"
                            >
                                <div className="text-[14rem] font-black text-white/[0.03] absolute pointer-events-none select-none">
                                    {SLIDES[index].id.toString().padStart(2, '0')}
                                </div>

                                {/* Visual Placeholder for high-end feel */}
                                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] w-full h-64 rounded-3xl border border-white/10 flex flex-col items-center justify-center gap-4 group">
                                    <div className="p-6 bg-aqua/5 rounded-full border border-aqua/10">
                                        <ShieldCheck size={48} className="text-aqua/40 group-hover:text-aqua transition-colors duration-500" />
                                    </div>
                                    <p className="text-[10px] uppercase font-black tracking-[0.3em] text-gray-500">
                                        Verification_Node_{SLIDES[index].id.toString().padStart(2, '0')}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right: The Impact Narrative */}
                    <div className="p-16 flex flex-col justify-center bg-gradient-to-br from-transparent to-aqua/[0.02]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-8"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="h-px w-8 bg-aqua"></div>
                                    <span className="text-aqua font-black uppercase tracking-[0.4em] text-[10px]">Audit-Locked Proof</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl font-black text-white leading-[0.9] tracking-tighter uppercase">
                                    {SLIDES[index].title}
                                </h2>

                                <p className="text-gray-400 text-lg leading-relaxed font-medium">
                                    {SLIDES[index].desc}
                                </p>

                                <div className="pt-10 border-t border-white/10">
                                    <div className="flex items-center gap-6">
                                        <div className="p-4 bg-gold/10 rounded-2xl border border-gold/20 text-gold shadow-[0_0_30px_rgba(255,204,0,0.1)]">
                                            <BarChart3 size={28} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mb-1">Impact Metric</p>
                                            <p className="text-3xl font-black text-white tracking-tight">{SLIDES[index].metric}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="h-1 bg-white/5 flex gap-1 px-1">
                    {SLIDES.map((_, i) => (
                        <div
                            key={i}
                            className={`h-full transition-all duration-700 ease-out rounded-full ${i === index ? 'bg-aqua w-full' : 'bg-white/10 w-12'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Slide Counter Underneath */}
            <div className="mt-8 flex justify-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-gray-600">
                <span>Proof_Stage</span>
                <span className="text-white">{index + 1}</span>
                <span>/</span>
                <span>{SLIDES.length}</span>
            </div>
        </div>
    );
};
