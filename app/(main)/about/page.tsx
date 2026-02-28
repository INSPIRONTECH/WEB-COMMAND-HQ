import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
    MessageSquareCode,
    ExternalLink,
    MapPin,
    Calendar,
    Briefcase,
    Building2,
    FlaskConical,
    Cpu,
    Award,
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'About MD ABU HASAN | INSPIRON TECH — Official Manager.io Partner Bangladesh',
    description:
        'MD ABU HASAN is the Founder & Chief Architect of INSPIRON TECH. 14+ years inside complex businesses — footwear manufacturing, ISP operations, medical devices — before founding Bangladesh\'s official Manager.io implementation practice.',
    openGraph: {
        title: 'About MD ABU HASAN | INSPIRON TECH',
        description:
            '14+ years inside complex businesses. Founder & Chief Architect, INSPIRON TECH — Official Manager.io Partner Bangladesh.',
        type: 'website',
        locale: 'en_BD',
        siteName: 'INSPIRON TECH',
    },
};

// ─── VERIFIED CAREER TIMELINE ───────────────────────────────────────────────
const timeline = [
    {
        period: 'Apr 2011 – Feb 2015',
        role: 'Executive Officer, Commercial',
        company: 'Step Shoe Last & Accessories Co. Ltd.',
        location: 'Dhaka, Bangladesh',
        type: 'Employment',
        icon: Building2,
        color: 'text-action-gold',
        borderColor: 'border-action-gold/30',
        hoverBorder: 'hover:border-action-gold/60',
        tag: 'Origin Story',
        tagColor: 'bg-action-gold/10 text-action-gold border-action-gold/20',
        story:
            '**First Plastic Shoe Last Manufacturing Company in Bangladesh** — Step Shoe Last & Accessories Co. Ltd. Executive Officer (Commercial): 50+ site visits to export-oriented footwear factories, customer R&D collaboration for product samples, cross-departmental productivity coordination, export documentation + customs clearance. **Four years inside the first vertically integrated footwear group** revealed an accounting black hole: inter-company shoe last supplies recorded as external purchases. Production costs invisible. No Group P&L. Designed the clearing account logic that became the foundation of multi-entity workflows.',
        skills: ['Export Operations', 'Inter-Company Workflow', 'Multi-Entity Accounting', 'Microsoft Excel'],
    },
    {
        period: 'May 2015 – Aug 2018',
        role: 'IT Support Engineer → Asst. Manager (Accounts)',
        company: 'X-Press Technologies Ltd.',
        location: 'Dhaka, Bangladesh',
        type: 'Employment',
        icon: Cpu,
        color: 'text-electric-cyan',
        borderColor: 'border-electric-cyan/30',
        hoverBorder: 'hover:border-electric-cyan/60',
        tag: 'Manager.io Discovery',
        tagColor: 'bg-electric-cyan/10 text-electric-cyan border-electric-cyan/20',
        story:
            '**Started as IT Support Engineer** — managed ISP billing reconciliation between customers and payment gateways, installed/maintained CRM/productivity suites, provided first-level technical support, and delivered monthly operational reports to senior management. Worked with integrated sales/purchase/inventory/accounting software. **Promoted to Asst. Manager (Accounts)** — discovered **Manager.io** and took responsibility for full financial compliance. Ensured Bangladesh financial regulations adherence. Supervised end-to-end payroll. Issued Mushak-11 VAT invoices. Maintained Mushak-16/17/18/19 registers for NBR reporting. Prepared TDS certificates. Liaised with VAT officials for audits. Delivered salary certificates for employee loans/visas. **This is where Manager.io began** — inside an ISP\'s accounting department, solving real reconciliation problems no one else could.',
        skills: ['ISP Billing Reconciliation', 'Mushak-11/16/17/18/19', 'NBR/VAT Compliance', 'TDS Certificates', 'Payroll Processing', 'Manager.io Discovery'],
    },
    {
        period: 'Sep 2018 – Aug 2024',
        role: 'Founder',
        company: '**HEALTHCARE INSPIRON** (Own Venture)',
        location: 'Barishal, Bangladesh',
        type: 'Entrepreneurship',
        icon: FlaskConical,
        color: 'text-institutional-white',
        borderColor: 'border-white/20',
        hoverBorder: 'hover:border-white/40',
        tag: 'Entrepreneur · 6 Years',
        tagColor: 'bg-white/5 text-gray-300 border-white/10',
        story:
            '**Founded and ran HEALTHCARE INSPIRON** — an IVD medical device and reagent distribution business in Barishal. **100+ medical analyzers installed and supported** (hematology, POCT, ultrasound) from brands including BioSystems, BIOLABO, Centronic, and Mindray. Built communication links between analyzers and centralized reporting platforms. Designed a disaster recovery plan that kept hospital diagnostic services running during outages. **Applied cloud accounting tools** to manage lot-tracked inventory, institutional B2B invoicing, and AMC (Annual Maintenance Contract) service workflows — from the inside.',
        skills: ['IVD Medical Devices', '100+ Analyzers Installed', 'Lab IT Workflows', 'Disaster Recovery', 'Cloud Accounting', 'B2B Institutional Sales'],
    },
    {
        period: 'Oct 2025 – Present',
        role: 'Founder & Chief Architect',
        company: 'INSPIRON TECH',
        location: 'Dhaka 1217, Bangladesh',
        type: 'Current',
        icon: Award,
        color: 'text-action-gold',
        borderColor: 'border-action-gold/30',
        hoverBorder: 'hover:border-action-gold/60',
        tag: 'Official Manager.io Partner',
        tagColor: 'bg-action-gold/10 text-action-gold border-action-gold/20',
        story:
            '14+ years of being inside complex businesses — not consulting from the outside — crystallized into a formal practice. INSPIRON TECH is the only Official Manager.io Partner in Bangladesh. Every engagement begins with 10–20 hours understanding your workflow before a single recommendation is made.',
        skills: ['Manager.io Architecture', 'NBR/VAT Mushak 6.3', 'Multi-Entity COA', 'Custom Dashboards', 'Zero-Loss Migration'],
    },
];

// ─── CREDENTIALS ────────────────────────────────────────────────────────────
const credentials = [
    {
        label: 'Official Manager.io Advisor',
        sublabel: 'Listed in the Manager.io Advisors directory for Bangladesh',
        link: 'https://www.manager.io/advisors',
        linkText: 'View listing ↗',
    },
    {
        label: 'Full Advisor Profile',
        sublabel: 'Visible after free Manager.io sign-up',
        // TODO: Update with full UUID from user
        link: 'https://www.manager.io/advisors/profile?username=7478b418-50b1-70e2-549b-3a506372d7c0',
        linkText: 'View Profile ↗',
    },
    {
        label: 'BASIS Member',
        sublabel: 'Bangladesh Association of Software & Information Services',
        link: null,
        linkText: null,
    },
    {
        label: 'Trade License TRADE-DSCC-0045632025',
        sublabel: 'Dhaka South City Corporation · Registered Proprietorship',
        link: null,
        linkText: null,
    },
    {
        label: 'Upwork Verified Freelancer',
        sublabel: 'Manager.io · Accounting · IT Consulting',
        link: 'https://www.upwork.com/freelancers/~011085e2a7cde3f437?viewMode=1',
        linkText: 'Verify ↗',
    },
    {
        label: 'Active Forum Contributor',
        sublabel: 'Manager.io Community — global problem-solving',
        link: 'https://forum.manager.io/u/abu_hasan',
        linkText: 'View Profile ↗',
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-deep-navy-black text-institutional-white selection:bg-electric-cyan selection:text-deep-navy-black">

            {/* ── PAGE HERO ──────────────────────────────────────────────── */}
            <section className="pt-32 pb-16 px-8 border-b border-white/5">
                <div className="max-w-4xl mx-auto">
                    <p className="text-electric-cyan text-xs font-black uppercase tracking-widest mb-6">
                        About the Founder
                    </p>
                    <h1 className="font-institutional text-4xl md:text-7xl font-medium uppercase tracking-tight mb-6 leading-none">
                        MD ABU HASAN
                    </h1>
                    <p className="text-action-gold font-black uppercase tracking-widest text-sm mb-8">
                        Founder &amp; Chief Architect · INSPIRON TECH
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-3xl">
                        I didn&apos;t start as a consultant. I started as an employee — inside
                        complex businesses, watching their accounting break down in ways no
                        one else noticed. Fourteen years later, those failures became the
                        foundation of INSPIRON TECH.
                    </p>

                    {/* Location + Contact strip */}
                    <div className="flex flex-wrap gap-6 mt-10 text-sm text-gray-500">
                        <span className="flex items-center gap-2">
                            <MapPin size={14} className="text-electric-cyan" />
                            Motijheel, Dhaka 1217, Bangladesh
                        </span>
                        <span className="flex items-center gap-2">
                            <Calendar size={14} className="text-action-gold" />
                            Since April 2011
                        </span>
                        <a
                            href="https://www.linkedin.com/in/cyberhasan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-electric-cyan transition-colors"
                        >
                            <ExternalLink size={14} />
                            linkedin.com/in/cyberhasan
                        </a>
                    </div>
                </div>
            </section>

            {/* ── THE ORIGIN STATEMENT ───────────────────────────────────── */}
            <section className="py-20 px-8 bg-white/[0.02] border-b border-white/5">
                <div className="max-w-4xl mx-auto">
                    <blockquote className="text-2xl md:text-3xl text-gray-200 italic font-light leading-relaxed border-l-4 border-action-gold pl-8">
                        &ldquo;I am not selling software — I architect logic for any kind of workflow.
                        I have spent 14 years inside manufacturing plants, ISP control rooms,
                        and medical distribution warehouses. I know where accounting breaks.
                        I know how to fix it.&rdquo;
                    </blockquote>
                    <p className="text-action-gold font-black uppercase tracking-widest text-xs mt-6 pl-8">
                        — MD ABU HASAN · Founder &amp; Chief Architect, INSPIRON TECH
                    </p>
                </div>
            </section>

            {/* ── PROOF NUMBERS ──────────────────────────────────────────── */}
            <section className="py-16 px-8 border-b border-white/5">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-black text-action-gold mb-2">14+</div>
                            <p className="text-gray-500 text-xs uppercase tracking-wider">Years IT Infrastructure<br />Since April 2011</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-electric-cyan mb-2">10+</div>
                            <p className="text-gray-500 text-xs uppercase tracking-wider">Years on Manager.io</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-institutional-white mb-2">15+</div>
                            <p className="text-gray-500 text-xs uppercase tracking-wider">Industries Architected</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-action-gold mb-2">50+</div>
                            <p className="text-gray-500 text-xs uppercase tracking-wider">Transformations<br />0.1% Error Tolerance</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CAREER TIMELINE ────────────────────────────────────────── */}
            <section className="py-24 px-8 border-b border-white/5">
                <div className="max-w-4xl mx-auto">
                    <p className="text-electric-cyan text-xs font-black uppercase tracking-widest mb-4">
                        Verified Career History
                    </p>
                    <h2 className="font-institutional text-3xl md:text-5xl font-medium uppercase tracking-tight mb-4">
                        14 Years Inside<br />Complex Businesses
                    </h2>
                    <p className="text-gray-500 text-lg mb-16 font-light">
                        Every workflow I architect today is built on problems I saw from the inside —
                        not case studies I read, not templates I inherited.
                    </p>

                    {/* Timeline cards */}
                    <div className="space-y-8">
                        {timeline.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className={`p-8 md:p-10 bg-white/5 border ${item.borderColor} ${item.hoverBorder} rounded-[32px] transition-all`}
                                >
                                    {/* Header row */}
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                        <div className="flex items-start gap-4">
                                            <div className={`mt-1 ${item.color}`}>
                                                <Icon size={28} />
                                            </div>
                                            <div>
                                                <h3 className="font-institutional text-xl md:text-2xl font-bold uppercase tracking-tight">
                                                    {item.role}
                                                </h3>
                                                <p className={`font-bold text-sm mt-1 ${item.color}`}>
                                                    {item.company}
                                                </p>
                                                <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-600">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar size={11} /> {item.period}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <MapPin size={11} /> {item.location}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Briefcase size={11} /> {item.type}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <span className={`shrink-0 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border ${item.tagColor}`}>
                                            {item.tag}
                                        </span>
                                    </div>

                                    {/* Story */}
                                    <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">
                                        {item.story}
                                    </p>

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-2">
                                        {item.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── WHY THIS MATTERS ───────────────────────────────────────── */}
            <section className="py-24 px-8 bg-white/[0.02] border-b border-white/5">
                <div className="max-w-4xl mx-auto">
                    <p className="text-electric-cyan text-xs font-black uppercase tracking-widest mb-4">
                        The Difference
                    </p>
                    <h2 className="font-institutional text-3xl md:text-5xl font-medium uppercase tracking-tight mb-12">
                        Why &ldquo;Inside Experience&rdquo;<br />Changes Everything
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-white/5 border border-white/10 rounded-[28px]">
                            <p className="text-gray-500 text-xs font-black uppercase tracking-widest mb-4">
                                Other Consultants
                            </p>
                            <ul className="space-y-3 text-gray-400 text-sm font-light">
                                <li>— Learn your business in a 1-hour discovery call</li>
                                <li>— Apply a standard template from their last client</li>
                                <li>— Leave after go-live with a user manual</li>
                                <li>— Have never run payroll, managed inventory, or filed BTRC reports themselves</li>
                            </ul>
                        </div>
                        <div className="p-8 bg-white/5 border border-action-gold/30 rounded-[28px]">
                            <p className="text-action-gold text-xs font-black uppercase tracking-widest mb-4">
                                MD ABU HASAN
                            </p>
                            <ul className="space-y-3 text-gray-300 text-sm font-light">
                                <li className="flex gap-2"><span className="text-action-gold">→</span> Spends 10–20 hours studying your workflow before proposing anything</li>
                                <li className="flex gap-2"><span className="text-action-gold">→</span> Has sat inside manufacturing, ISP, and medical businesses — knows where the black holes are</li>
                                <li className="flex gap-2"><span className="text-action-gold">→</span> Stays available after delivery — adjusts when your business evolves</li>
                                <li className="flex gap-2"><span className="text-action-gold">→</span> Zero approximation: 0.1% error tolerance, zero-loss migrations, Mushak 6.3 compliance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CREDENTIALS ────────────────────────────────────────────── */}
            <section className="py-24 px-8 border-b border-white/5">
                <div className="max-w-4xl mx-auto">
                    <p className="text-electric-cyan text-xs font-black uppercase tracking-widest mb-4">
                        Publicly Verifiable
                    </p>
                    <h2 className="font-institutional text-3xl md:text-4xl font-medium uppercase tracking-tight mb-12">
                        Credentials
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {credentials.map((cred, index) => (
                            <div
                                key={index}
                                className="flex items-start justify-between gap-4 p-6 bg-white/5 border border-white/10 rounded-[20px] hover:border-electric-cyan/30 transition-all"
                            >
                                <div>
                                    <p className="font-bold text-sm text-institutional-white">{cred.label}</p>
                                    <p className="text-gray-500 text-xs mt-1 font-light">{cred.sublabel}</p>
                                </div>
                                {cred.link && (
                                    <a
                                        href={cred.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="shrink-0 text-electric-cyan text-xs hover:underline"
                                    >
                                        {cred.linkText}
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FORUM ACTIVITY (live social proof) ─────────────────────── */}
            <section className="py-16 px-8 bg-white/[0.02] border-b border-white/5">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <p className="text-electric-cyan text-xs font-black uppercase tracking-widest mb-2">
                            Live Social Proof
                        </p>
                        <h3 className="font-institutional text-2xl font-medium uppercase tracking-tight mb-2">
                            Active on Manager.io Forum
                        </h3>
                        <p className="text-gray-400 text-sm font-light max-w-lg">
                            Helping agro farms, distributors, construction firms, and manufacturers globally
                            solve complex accounting workflows — publicly, for free.
                        </p>
                    </div>
                    <a
                        href="https://forum.manager.io/u/abu_hasan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center gap-2 px-8 py-4 border border-electric-cyan/30 rounded-2xl text-electric-cyan text-sm hover:bg-electric-cyan/5 transition-all"
                    >
                        <ExternalLink size={16} /> View Forum Profile ↗
                    </a>
                </div>
            </section>

            {/* ── CTA ────────────────────────────────────────────────────── */}
            <section className="py-20 px-8 bg-gradient-to-t from-electric-cyan/[0.03] to-transparent">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-institutional text-3xl md:text-5xl font-medium uppercase tracking-tight mb-6">
                        Let&apos;s Talk About<br />Your Business
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 font-light">
                        Every engagement starts with a free conversation.
                        Tell me what you&apos;re running, and I&apos;ll tell you what&apos;s possible.
                    </p>
                    <a
                        href="https://wa.me/8801719300849?text=Hi MD Abu Hasan, I'd like to discuss Manager.io setup for my business."
                        className="inline-flex items-center gap-3 gold-racer haptic-button px-12 py-6 rounded-2xl uppercase tracking-widest text-sm shadow-2xl"
                    >
                        <MessageSquareCode size={22} /> Start a Conversation
                    </a>
                </div>
            </section>

        </div>
    );
}
