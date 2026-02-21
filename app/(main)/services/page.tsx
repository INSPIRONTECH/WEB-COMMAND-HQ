import { Building2, Users, HeadphonesIcon, MessageSquareCode, Cloud, FileSpreadsheet, FileBarChart, GraduationCap, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-deep-navy-black text-institutional-white selection:bg-electric-cyan selection:text-deep-navy-black">
            {/* Hero */}
            <section className="py-32 px-8 text-center border-b border-white/5">
                <h1 className="font-institutional text-4xl md:text-6xl font-medium uppercase tracking-tight mb-6">
                    Manager.io Services
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                    MD ABU HASAN architects your workflow. Cloud/Server deployment, custom COA, migrations, NBR/VAT, dashboards, training.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <a href="/build-your-workflow"
                        className="inline-flex items-center gap-3 gold-racer haptic-button px-12 py-6 rounded-2xl uppercase tracking-widest text-sm shadow-2xl justify-center">
                        <MessageSquareCode size={22} /> Architect My Workflow
                    </a>
                </div>
            </section>

            {/* 6 Core Services */}
            <section className="py-24 px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-institutional text-3xl md:text-5xl font-medium text-center uppercase tracking-tight mb-16">Core Services</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Cloud, title: 'Cloud/Server Deployment', desc: 'Unlimited users/businesses. NBR-compliant Mushak 6.3. Mobile access. Self-hosted or Cloud Edition.' },
                            { icon: Users, title: 'COA + Workflow Design', desc: '10-20hr discovery. Custom chart of accounts. Bangladesh business logic mapping for complex entities.' },
                            { icon: FileSpreadsheet, title: 'Tally/Excel Migration', desc: 'Zero data loss (500+ migrations). Parallel run + validation. Move from legacy systems to Manager.io.' },
                            { icon: ShieldCheck, title: 'NBR/VAT Automation', desc: 'Mushak 6.3/9.1 forms. Multi-currency exports. Audit-ready reporting built into your workflow.' },
                            { icon: FileBarChart, title: 'Custom Dashboards', desc: 'ANY data visualized. Real-time KPIs. Next.js/Vercel integrations for advanced analytics.' },
                            { icon: GraduationCap, title: 'Bilingual Training', desc: 'Bengali/English. Foundation/Pro/Expert levels. Your team becomes self-sufficient in 2 weeks.' }
                        ].map(({ icon: Icon, title, desc }, i) => (
                            <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[40px] hover:border-action-gold/50 group transition-all duration-300">
                                <div className="text-electric-cyan mb-6 group-hover:scale-110 transition duration-300">
                                    <Icon size={48} strokeWidth={1.5} />
                                </div>
                                <h3 className="font-institutional text-2xl font-bold uppercase mb-4 text-white group-hover:text-action-gold transition-colors">{title}</h3>
                                <p className="text-gray-400 leading-relaxed font-light text-sm">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WORKFLOW COMPLEXITY - The Unique Selling Point */}
            <section className="py-24 px-8 bg-white/[0.02] border-y border-white/5">
                <div className="max-w-5xl mx-auto">
                    <h2 className="font-institutional text-3xl md:text-4xl font-medium text-center uppercase tracking-tight mb-12">
                        What Makes Our Clients Complex
                    </h2>
                    <div className="space-y-6">
                        {[
                            { title: "GP/bKash Distributor (Progoti Agency)", desc: "1000s of daily micro-transactions, agent commissions, slim margins tracked per card across an entire division." },
                            { title: "4-Company Footwear Group (STEP)", desc: "Internal supply chain where shoe lasts + adhesives are consumed in manufacturing, requiring inter-company billing and consolidated P&L." },
                            { title: "1st Class Govt Contractor (BAUS)", desc: "Project-based job costing for eGP/LTM tenders, tracking retention billing, mobilization advances, and multi-site BOQ execution." },
                            { title: "30-Pond Aquaculture", desc: "Batch profitability per pond, feed cost allocation, lease amortization, and mortality tracking." },
                            { title: "IVD Medical Importer (HEALTHCARE INSPIRON)", desc: "Warranty/calibration service revenue, lot-controlled reagent inventory, and institutional credit billing." },
                            { title: "Garments Trims & Labels (SML Subcontractors)", desc: "Job-order costing per buyer order (paper/ink/plates), wastage % tracking, per-job profitability, and consolidated billing to RMG buyers." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row gap-4 md:items-start p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                                <div className="min-w-[40px] text-action-gold pt-1">
                                    <MessageSquareCode size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-electric-cyan mb-1">{item.title}</h3>
                                    <p className="text-gray-300 font-light">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gray-400 mt-12 text-lg italic">
                        &ldquo;Others said it couldn&apos;t be done. We architected it anyway.&rdquo;
                    </p>
                </div>
            </section>

            {/* Pricing Teaser + CTA */}
            <section className="py-20 px-8 bg-gradient-to-t from-electric-cyan/[0.05] to-transparent text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-institutional text-3xl md:text-5xl uppercase tracking-tight mb-6">From BDT 15K/month</h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto font-light">Standard/Premium/Enterprise. ROI in 6 months guaranteed.</p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Link href="/pricing" className="text-electric-cyan hover:text-white transition-colors uppercase tracking-widest text-sm font-bold border-b border-electric-cyan/30 hover:border-white pb-1">
                            See Pricing Structure
                        </Link>
                        <a href="https://wa.me/8801719300849" className="gold-racer haptic-button px-12 py-6 rounded-2xl uppercase tracking-widest text-sm shadow-2xl">
                            Start Project
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}
