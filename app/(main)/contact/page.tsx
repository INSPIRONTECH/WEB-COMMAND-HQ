"use client";

import React, { useState } from 'react';
import { MessageSquareCode, Mail, Phone, MapPin, Send, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        business: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would send to an API.
        // For now, we simulate success and maybe redirect to WhatsApp.
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);

        // Optional: Auto-format a WhatsApp message
        const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ABusiness: ${formData.business}%0AMessage: ${formData.message}`;
        window.open(`https://wa.me/8801719300849?text=${text}`, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-deep-navy-black text-institutional-white selection:bg-electric-cyan selection:text-deep-navy-black">

            {/* HERO SECTION */}
            <section className="pt-32 pb-16 px-8 border-b border-white/5">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-cyan/10 border border-electric-cyan/20 text-electric-cyan text-xs font-bold uppercase tracking-widest mb-6">
                        <MessageSquareCode size={14} />
                        <span>Direct Line</span>
                    </div>
                    <h1 className="font-institutional text-4xl md:text-7xl font-bold uppercase tracking-tight mb-8">
                        Deploy Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-action-gold">
                            Architecture
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        We don't have a sales team. You talk directly to the Chief Architect.
                        Tell us about your workflow, and we'll tell you if we can solve it.
                    </p>
                </div>
            </section>

            <section className="py-24 px-8">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24">

                    {/* LEFT COLUMN: CONTACT INFO */}
                    <div className="space-y-16">
                        <div>
                            <h2 className="font-institutional text-3xl font-medium uppercase mb-8">
                                Channels
                            </h2>
                            <div className="space-y-8">
                                <a href="https://wa.me/8801719300849" target="_blank" className="flex items-start gap-6 group">
                                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-electric-cyan/50 transition-colors">
                                        <MessageSquareCode className="text-electric-cyan" size={24} />
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-white mb-1 group-hover:text-electric-cyan transition-colors">WhatsApp & Telegram</div>
                                        <div className="text-gray-400 font-mono text-sm">+880 1719-300849</div>
                                        <div className="text-xs text-action-gold uppercase tracking-widest mt-2">Instant Response</div>
                                    </div>
                                </a>

                                <a href="mailto:consult@inspirontech.bd" className="flex items-start gap-6 group">
                                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-white/30 transition-colors">
                                        <Mail className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-white mb-1 group-hover:text-electric-cyan transition-colors">Email Intelligence</div>
                                        <div className="text-gray-400 font-mono text-sm">hello@inspiron.tech</div>
                                        <div className="text-xs text-gray-500 uppercase tracking-widest mt-2">24h Turnaround</div>
                                    </div>
                                </a>

                                <div className="flex items-start gap-6">
                                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                                        <MapPin className="text-action-gold" size={24} />
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-white mb-1">Sector Command</div>
                                        <div className="text-gray-400 text-sm leading-relaxed">
                                            64-68, Eastern Kamalapur Complex, North Kamalapur, Dhaka 1217, Bangladesh
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/10">
                                <p className="text-gray-500 text-sm mb-2">Prefer to explore on your own?</p>
                                <a href="/manager-io" className="text-electric-cyan text-sm uppercase tracking-widest hover:text-white transition-colors border-b border-electric-cyan/30 hover:border-white pb-1">
                                    Try Manager Alone ↗
                                </a>
                            </div>
                        </div>

                        <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                            <div className="flex items-center gap-3 mb-4 text-action-gold">
                                <Clock size={20} />
                                <span className="text-sm font-bold uppercase tracking-wider">Operational Hours</span>
                            </div>
                            <div className="space-y-2 text-sm text-gray-400">
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span>Saturday – Thursday</span>
                                    <span className="text-white font-mono">10:00 – 19:00</span>
                                </div>
                                <div className="flex justify-between pt-2">
                                    <span>Friday</span>
                                    <span className="text-electric-cyan font-mono">Emergency Support Only</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: FORM */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-8 md:p-12">
                        <h2 className="font-institutional text-2xl font-medium uppercase mb-8">
                            Initiate Protocol
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-electric-cyan outline-none transition-colors"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Business</label>
                                    <input
                                        type="text"
                                        name="business"
                                        value={formData.business}
                                        onChange={handleChange}
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-electric-cyan outline-none transition-colors"
                                        placeholder="Company Name"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-electric-cyan outline-none transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-electric-cyan outline-none transition-colors"
                                        placeholder="+880..."
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Workflow Challenge</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-electric-cyan outline-none transition-colors resize-none"
                                    placeholder="Briefly describe the accounting or operational bottleneck you are facing..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full gold-racer haptic-button py-4 rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 group"
                            >
                                {submitted ? (
                                    <span className="text-deep-navy-black">Sent Successfully</span>
                                ) : (
                                    <>
                                        <span>Transmit Request</span>
                                        <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                            <p className="text-xs text-center text-gray-600 mt-4">
                                This will open WhatsApp with your pre-filled details for instant connection.
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
