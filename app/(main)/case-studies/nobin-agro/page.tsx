import type { Metadata } from 'next';
import NobinAgroCarousel from '@/components/CaseStudies/NobinAgroCarousel';

export const metadata: Metadata = {
  title: 'Nobin Agro Farm Case Study | INSPIRON TECH',
  description:
    'How INSPIRON TECH transformed a ৳100+ Crore aquaculture operation with zero-error ERP migration, pond-level cost centers, and ৳25–40 Lakh annual savings.',
  keywords:
    'Manager.io aquaculture, Bangladesh ERP, fish farm accounting, Nobin Agro, INSPIRON TECH case study',
  openGraph: {
    title: 'From Accounting Blackhole to Real-Time Control — Nobin Agro Farm',
    description:
      '14,478 transactions. 0.0% error rate. ৳25–40 Lakhs annual impact. Built on Manager.io by INSPIRON TECH.',
    type: 'article',
    siteName: 'INSPIRON TECH',
  },
};

export default function NobinAgroPage() {
  return (
    <main className="min-h-screen bg-[#010409] blueprint-grid">
      <div className="max-w-3xl mx-auto px-4 py-16">

        {/* Page Header */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.2em] text-[#00D2FF] 
            border border-[rgba(0,210,255,0.3)] rounded-full px-4 py-1 
            bg-[rgba(0,210,255,0.05)]">
            Case Study
          </span>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white 
            leading-tight">
            Nobin Agro Farm —
            <span className="text-[#FFD700]"> ৳100+ Crore </span>
            Aquaculture Operation
          </h1>
          <p className="mt-3 text-white/60 text-sm max-w-xl mx-auto">
            How we transformed a 40-pond operation from accounting chaos 
            to real-time financial control using Manager.io.
          </p>
        </div>

        {/* The Carousel */}
        <NobinAgroCarousel />

        {/* CTA Below Carousel */}
        <div className="mt-12 text-center border border-[rgba(255,215,0,0.2)] 
          rounded-2xl p-8 bg-[rgba(255,215,0,0.03)]">
          <p className="text-white/70 text-sm mb-4">
            Have a complex operation like this?
          </p>
          <a
            href="mailto:hello@inspiron.tech"
            className="inline-block bg-[#FFD700] text-[#010409] font-bold 
              text-sm uppercase tracking-[0.15em] px-8 py-3 rounded-full 
              hover:scale-105 transition-transform duration-300"
          >
            Book a 30-Min Discovery Call →
          </a>
        </div>

      </div>
    </main>
  );
}
