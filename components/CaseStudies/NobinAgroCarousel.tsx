"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";

export default function NobinAgroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalSlides = 12;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (distance > swipeThreshold) {
      nextSlide();
    }
    if (distance < -swipeThreshold) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const slides = [
    // SLIDE 1 — COVER
    (
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 z-10 relative">
        <span className="inline-block bg-[rgba(0,210,255,0.1)] border border-[rgba(0,210,255,0.3)] text-[#00D2FF] rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em]">
          CASE STUDY — AQUACULTURE
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tight">
          From Accounting Blackhole to Real-Time Control
        </h1>
        <p className="text-[#00D2FF] text-lg font-medium tracking-wider uppercase">
          ৳100+ Crore Farm — Powered by INSPIRON TECH
        </p>
        
        <div className="flex flex-col gap-3 mt-4 w-full max-w-md mx-auto text-left">
          {[
            "40+ Active Projects · 13+ Species · 7 Locations",
            "Managing Aftab, Nourish & Akij Accounts",
            "Zero Accounting Errors After Migration"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 border border-[#00D2FF]/30 bg-[rgba(0,210,255,0.1)] px-4 py-3 rounded-xl text-white text-sm">
              <span className="text-[#00D2FF] font-bold text-lg">✅</span> <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto w-full pt-4">
          <div className="border-t border-[#FFD700]/30 pt-4 w-full text-center">
            <p className="text-[#FFD700] font-medium text-sm md:text-base max-w-lg mx-auto">
              "Traditional software CAN'T handle this complexity.<br/>We built custom precision instead."
            </p>
          </div>
        </div>
      </div>
    ),
    // SLIDE 2 — THE PROBLEM
    (
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 z-10 relative">
        <span className="inline-block bg-[rgba(0,210,255,0.1)] border border-[rgba(0,210,255,0.3)] text-[#00D2FF] rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em]">
          THE COMPLEXITY
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
          What 'Standard Software' Cannot Solve
        </h2>
        <p className="text-white/70 text-sm md:text-base max-w-md mx-auto">
          NOBIN AGRO FARM operates at a scale generic tools break on:
        </p>
        
        <ul className="text-left space-y-3 w-full max-w-md mx-auto mt-2">
          {[
            "40+ Batches (P07_AQUA2, P06_CKDH2...)",
            "Selling 13+ Species (Tilapia, Rui, Pabda, Gulsha)",
            "Real-Time Entry: Transactions captured at 05:10 AM",
            "৳11+ Lakh Customer Advances from Karwan Bazar Arats",
            "Complex Deductions: Aratdar Sales Commissions",
            "Partial Feed Deliveries across multiple dates"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-white/90 text-sm md:text-base">
              <span className="text-[#00D2FF] font-bold text-base mt-0.5">→</span> <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto w-full pt-4">
          <div className="border-t border-[#FFD700]/30 pt-4 w-full text-center">
            <div className="inline-block border border-red-500/50 bg-red-500/10 text-red-400 px-6 py-2.5 rounded-xl font-bold text-sm tracking-wide">
              ⚠️ Generic Software = Accounting Blackhole
            </div>
          </div>
        </div>
      </div>
    ),
    // SLIDE 3 — WHY OTHERS FAIL
    (
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 z-10 relative">
        <span className="inline-block bg-[rgba(0,210,255,0.1)] border border-[rgba(0,210,255,0.3)] text-[#00D2FF] rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em]">
          ROOT CAUSE
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
          Why Traditional Software Can't Handle This
        </h2>
        
        <div className="w-full max-w-lg mx-auto flex flex-col gap-4 mt-6">
          {[
            { red: "Invoice #4252: 16 items + Sales Commission", cyan: "Custom line logic" },
            { red: "Rebates: Feed vs Transport mixed up", cyan: "Separated commission tracking" },
            { red: "50+ Arats: Overpaid/Unpaid unknown", cyan: "Advance account per Arat" },
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-2 gap-2 text-left text-xs md:text-sm font-medium">
              <div className="bg-[rgba(239,68,68,0.1)] text-red-400 p-3 rounded-l-xl border border-red-500/20 flex items-center gap-2">
                <span className="shrink-0">❌</span> <span>{row.red}</span>
              </div>
              <div className="bg-[rgba(0,210,255,0.1)] text-[#00D2FF] p-3 rounded-r-xl border border-[#00D2FF]/30 flex items-center gap-2">
                <span className="shrink-0">✅</span> <span>{row.cyan}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-auto w-full pt-4">
          <div className="border-t border-[#FFD700]/30 pt-4 w-full text-center">
            <p className="text-[#FFD700] font-medium text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              "If your accounting software can't handle YOUR complexity, it's a bad tool."
            </p>
          </div>
        </div>
      </div>
    ),
    // SLIDE 4 — SOLUTION 1
    (
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 z-10 relative">
        <span className="inline-block bg-[rgba(0,210,255,0.1)] border border-[rgba(0,210,255,0.3)] text-[#00D2FF] rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em]">
          SOLUTION 01 / 05
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
          The Profitability Engine
        </h2>
        <p className="text-white/70 max-w-md mx-auto text-sm md:text-base">
          How we track exact pond costs — without complex Production Orders
        </p>

        <div className="w-full max-w-md mx-auto mt-6 p-6 border border-[#00D2FF]/30 bg-[#010409]/60 nav-glass rounded-xl text-left font-mono text-sm md:text-base text-gray-300 space-y-3 glow-cyan">
          <div><span className="text-[#00D2FF]">Method:</span> Inventory Write-off → Consumption Record</div>
          <div><span className="text-[#00D2FF]">Project:</span> P06_AQUA1_VRMTL</div>
          <div><span className="text-[#00D2FF]">Item:</span> Grower Feed 3.0mm (400 Kg)</div>
          <div className="pt-3 mt-1 border-t border-white/10 text-white font-bold"><span className="text-[#00D2FF]">Result:</span> Instant COGS assignment</div>
        </div>
        <div className="mt-auto w-full pt-4">
          <div className="border-t border-[#FFD700]/30 pt-4 w-full text-center">
            <div className="text-[#FFD700] font-medium text-sm md:text-base tracking-wide">
              "Write-off = Used for Production. Simple & Powerful."
            </div>
          </div>
        </div>
      </div>
    ),
    // SLIDE 5 — SOLUTION 2
    (
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 z-10 relative">
        <span className="inline-block bg-[rgba(0,210,255,0.1)] border border-[rgba(0,210,255,0.3)] text-[#00D2FF] rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em]">
          SOLUTION 02 / 05
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
          Multi-Location Inventory Control
        </h2>
        <p className="text-white/70 max-w-md mx-auto text-sm md:text-base">
          Buy 5 tons → Delivered partially across 7 locations.
        </p>

        <div className="w-full max-w-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {[
            { val: "7", label: "Inventory Locations" },
            { val: "৳360/kg", label: "Real-Time Item Costing" },
            { val: "Seconds", label: "To answer 'How much Bio C is in Depot A?'" },
          ].map((stat, i) => (
            <div key={i} className="bg-[rgba(255,215,0,0.08)] border border-[rgba(255,215,0,0.25)] rounded-xl py-6 px-4 flex flex-col items-center justify-center text-center h-full">
              <div className="text-[#FFD700] font-black text-2xl mb-2">{stat.val}</div>
              <div className="text-white text-xs px-2 uppercase font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-auto w-full pt-4">
          <div className="border-t border-[#FFD700]/30 pt-4 w-full text-center">
            <div className="inline-block bg-[rgba(0,210,255,0.1)] border border-[#00D2FF]/30 text-[#00D2FF] px-6 py-2 rounded-full font-medium text-sm uppercase tracking-wider">
              Feeds on Depot vs Medicine on Depot — tracked live.
            </div>
          </div>
        </div>
      </div>
    ),
    // SLIDE 6 — SOLUTION 3
    (
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 z-10 relative">
        <span className="inline-block bg-[rgba(0,210,255,0.1)] border border-[rgba(0,210,255,0.3)] text-[#00D2FF] rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em]">
          SOLUTION 03 / 05
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
          The Master Lease Strategy
        </h2>
        <p className="text-white/70 max-w-md mx-auto text-sm md:text-base">
          1 Legal Contract → 9 Cost Centers. Zero Friction.
        </p>

        <div className="w-full max-w-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mt-4">
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
            <div className="text-white/50 text-[10px] font-bold uppercase mb-1 tracking-widest">Legal Reality</div>
            <div className="text-white text-sm font-medium">1 Master Lease (4,191 Decimals)</div>
          </div>
          <div className="bg-[#00D2FF]/10 border border-[#00D2FF]/30 p-4 rounded-xl">
            <div className="text-[#00D2FF]/70 text-[10px] font-bold uppercase mb-1 tracking-widest">Operational Reality</div>
            <div className="text-[#00D2FF] text-sm font-medium">9 Ponds (AQUA1–AQUA9)</div>
          </div>
        </div>

        <div className="w-full max-w-md mx-auto text-left space-y-3 mt-4">
          {[
            "Asset: PREPAID POND LEASES (Master Account)",
            "Sub-Allocated to 9 Projects via Custom Field: Area (Decimals)",
            "Automated Daily Amortization per Batch"
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-white/90 text-sm md:text-base font-medium">
              <span className="text-[#FFD700] text-lg font-black leading-none mt-0.5">✓</span> <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto w-full pt-4">
          <div className="border-t border-[#FFD700]/30 pt-4 w-full text-center">
            <p className="text-[#FFD700] font-bold text-sm md:text-base tracking-wide uppercase">
              "One Legal Document → 9 Cost Centers."
            </p>
          </div>
        </div>
      </div>
    ),
    // SLIDE 7 — SOLUTION 4
    (
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 z-10 relative">
        <span className="inline-block bg-[rgba(0,210,255,0.1)] border border-[rgba(0,210,255,0.3)] text-[#00D2FF] rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em]">
          SOLUTION 04 / 05
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-none">
          Hidden Investor Tracking
        </h2>
        <p className="text-white/70 max-w-md mx-auto text-sm md:text-base leading-snug">
          External investors fund ponds but aren't legal partners.<br/>They still need transparent reporting.
        </p>

        <div className="w-full max-w-sm md:max-w-md mx-auto text-left space-y-4 mt-6">
          {[
            "Special Accounts created per Investor",
            "Capital allocated to specific Batch IDs",
            "Automated Profit Share Calculation",
            "Transparent Statement per Backer"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#00D2FF]/20 text-[#00D2FF] text-xs md:text-sm font-black shrink-0">
                {i + 1}
              </div>
              <span className="text-white/90 text-sm md:text-base font-medium">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto w-full pt-4">
          <div className="border-t border-[#FFD700]/30 pt-4 w-full text-center">
            <p className="text-[#FFD700] font-black text-base md:text-lg tracking-[0.15em] uppercase gold-racer">
              100% Investor Trust · Zero Disputes
            </p>
          </div>
        </div>
      </div>
    ),
    // SLIDE 8 — SOLUTION 5
    (
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 z-10 relative">
        <span className="inline-block bg-[rgba(0,210,255,0.1)] border border-[rgba(0,210,255,0.3)] text-[#00D2FF] rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em]">
          SOLUTION 05 / 05
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-none">
          Supplier Benefits Recovery
        </h2>
        <p className="text-white/70 max-w-md mx-auto text-sm md:text-base leading-snug mt-2">
          Money was disappearing into the blackhole. No one tracked rebates until year-end.
        </p>

        <div className="w-full max-w-lg mx-auto flex flex-col md:flex-row items-center justify-center gap-3 mt-6 p-4 md:p-6 bg-[#00D2FF]/10 border border-[#00D2FF]/30 rounded-xl text-center glow-cyan px-2">
          <div className="text-white text-[10px] md:text-xs font-bold uppercase whitespace-nowrap">Track Feed Bags <br className="hidden md:block"/><span className="text-white/50 text-[10px]">(Aftab/Nourish)</span></div>
          <div className="text-[#00D2FF] rotate-90 md:rotate-0 font-bold">→</div>
          <div className="text-white text-[10px] md:text-xs font-bold uppercase whitespace-nowrap">Accrue Commission</div>
          <div className="text-[#00D2FF] rotate-90 md:rotate-0 font-bold">→</div>
          <div className="text-white text-[10px] md:text-xs font-bold uppercase whitespace-nowrap">Reconcile vs<br className="hidden md:block"/>Supplier Stmts</div>
          <div className="text-[#00D2FF] rotate-90 md:rotate-0 font-bold">→</div>
          <div className="text-[#00D2FF] text-[10px] md:text-xs font-black uppercase whitespace-nowrap drop-shadow-[0_0_8px_rgba(0,210,255,0.8)]">Recover</div>
        </div>

        <div className="mt-8 mb-4">
          <span className="gold-racer text-4xl md:text-5xl font-black block drop-shadow-lg">
            ৳10–22 Lakhs
          </span>
          <span className="text-[#FFD700]/80 text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] mt-2 block">
            Recovered Per Year
          </span>
        </div>

        <div className="mt-auto w-full pt-4">
          <div className="border-t border-[#FFD700]/30 pt-4 w-full text-center">
            <div className="inline-block bg-white/10 text-white px-5 py-2 rounded-full text-[11px] md:text-xs font-medium border border-white/20 uppercase tracking-widest">
              💡 Always reconcile feed invoices with delivery challans.
            </div>
          </div>
        </div>
      </div>
    ),
    // SLIDE 9 — THE PROOF
    (
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 z-10 relative">
        <span className="inline-block bg-[rgba(0,210,255,0.1)] border border-[rgba(0,210,255,0.3)] text-[#00D2FF] rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em]">
          ZERO-ERROR MIGRATION
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-none">
          From Legacy Systems<br/>to Manager.io
        </h2>
        <p className="text-[#00D2FF] font-medium max-w-md mx-auto text-base">
          "Every taka accounted for."
        </p>

        <div className="w-full max-w-md mx-auto text-left space-y-4 mt-6">
          {[
            "Extracted historical data from Tally",
            "Verified Feed Consumption logic",
            "Reconciled Master Lease (4,191 Decimals)",
            "14,478 Transactions Processed",
            "0.0% Error Rate Achieved"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 text-white/90 text-[15px] font-medium">
              <span className="text-[#00D2FF] drop-shadow-[0_0_8px_rgba(0,210,255,0.8)] text-xl font-bold">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto w-full pt-4">
          <div className="border-t border-[#FFD700]/30 pt-4 w-full text-center">
            <div className="gold-racer text-xl md:text-2xl font-black tracking-widest uppercase">
              14,478 Transactions · 0.0% Error Rate
            </div>
          </div>
        </div>
      </div>
    ),
    // SLIDE 10 — FINANCIAL IMPACT
    (
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 z-10 relative">
        <span className="inline-block bg-[rgba(0,210,255,0.1)] border border-[rgba(0,210,255,0.3)] text-[#00D2FF] rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em]">
          THE RESULT
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-none">
          Estimated ৳25–40 Lakhs<br/>Annual Impact
        </h2>

        <div className="w-full max-w-lg mx-auto grid grid-cols-2 gap-4 mt-8">
          {[
            { val: "৳3–7 Lakhs", label: "Lease Cost Optimization" },
            { val: "৳5–10 Lakhs", label: "Feed Commission Recovery" },
            { val: "৳2–5 Lakhs", label: "Error Reduction Savings" },
            { val: "৳4–8 Lakhs", label: "Better Cash Flow" },
          ].map((stat, i) => (
            <div key={i} className="bg-[rgba(255,215,0,0.08)] border border-[rgba(255,215,0,0.25)] rounded-xl py-6 px-4 flex flex-col items-center justify-center text-center h-full">
              <div className="text-[#FFD700] font-black text-xl md:text-3xl mb-2">{stat.val}</div>
              <div className="text-white/80 text-[10px] md:text-xs uppercase font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="text-white/30 text-[10px] mt-2 uppercase tracking-widest">
          Source: Internal Audit — FY2024
        </div>

        <div className="mt-auto w-full pt-4">
          <div className="border-t border-[#FFD700]/30 pt-4 w-full text-center">
            <div className="text-[#FFD700] font-medium text-xs md:text-sm tracking-widest uppercase">
              Better Information → Better Decisions → Higher Profitability
            </div>
          </div>
        </div>
      </div>
    ),
    // SLIDE 11 — WHY DIFFERENT
    (
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 z-10 relative">
        <span className="inline-block bg-[rgba(0,210,255,0.1)] border border-[rgba(0,210,255,0.3)] text-[#00D2FF] rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em]">
          THE DIFFERENCE
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-none">
          We Don't Install Software.<br/>We Engineer Logic.
        </h2>

        <div className="w-full max-w-xl mx-auto flex flex-col gap-3 mt-6">
          {[
            { red: "Generic retail templates", cyan: "Custom agro-specific logic" },
            { red: "Complex tools you can't use", cyan: "Simplified Write-off workflows" },
            { red: "Data entry clerks", cyan: "Financial strategy partners" },
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 rounded-xl overflow-hidden text-xs md:text-sm font-medium">
              <div className="bg-[rgba(239,68,68,0.1)] text-red-400 p-3 md:p-4 border-b md:border-b-0 md:border-r border-white/10 flex items-center gap-3">
                <span className="shrink-0 font-black">❌</span> <span>Others: {row.red}</span>
              </div>
              <div className="bg-[rgba(0,210,255,0.1)] text-[#00D2FF] p-3 md:p-4 flex items-center gap-3">
                <span className="shrink-0 font-black">✅</span> <span>Us: {row.cyan}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-auto w-full pt-4">
          <div className="border-t border-[#FFD700]/30 pt-4 w-full text-center">
            <p className="text-[#FFD700] font-bold text-sm tracking-widest uppercase">
              "1000% Satisfaction: Systems built for YOUR capacity."
            </p>
          </div>
        </div>
      </div>
    ),
    // SLIDE 12 — CTA
    (
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 z-10 relative">
        <span className="inline-block bg-[rgba(0,210,255,0.1)] border border-[rgba(0,210,255,0.3)] text-[#00D2FF] rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em] mt-4">
          READY TO SCALE?
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-[1.1]">
          Is Your Complex<br/>Business Next?
        </h2>
        <div className="text-[#FFD700] font-bold text-[10px] md:text-xs tracking-[0.15em] uppercase px-4 text-center">
          Aquaculture · Manufacturing · Trade · Import-Export
        </div>
        
        <p className="text-white/70 max-w-sm mx-auto text-sm">
          Escape chaos. Get real-time financial clarity. Get a custom Manager.io system built for YOUR workflow.
        </p>

        <div className="w-full max-w-sm mx-auto space-y-3 mt-4 text-left">
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-5 py-3 rounded-xl text-white">
            <span className="text-xl">✉️</span> <span className="font-medium text-sm tracking-wider">hello@inspiron.tech</span>
          </div>
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-5 py-3 rounded-xl text-white">
            <span className="text-xl">📱</span> <span className="font-medium text-sm tracking-wider">WA: +880 1719 300 849</span>
          </div>
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-5 py-3 rounded-xl text-white">
            <span className="text-xl">🌐</span> <span className="font-medium text-sm tracking-wider">inspiron.tech</span>
          </div>
        </div>

        <a href="https://wa.me/8801719300849" target="_blank" rel="noopener noreferrer" className="mt-4 px-8 py-4 bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#010409] font-black uppercase tracking-widest text-xs md:text-sm rounded-xl transition-all shadow-[0_0_20px_rgba(255,215,0,0.3)] group overflow-hidden relative">
          <span className="group-hover:gold-racer relative z-10 transition-all duration-300 block">Book a 30-Min Discovery Call →</span>
        </a>

        <div className="mt-auto w-full pt-4">
          <div className="border-t border-white/10 pt-4 w-full text-center">
            <div className="text-white/40 font-bold text-[9px] md:text-[10px] tracking-widest uppercase">
              INSPIRON TECH | Official Manager.io Partner · Bangladesh
            </div>
          </div>
        </div>
      </div>
    ),
  ];

  return (
    <div 
      className="relative w-full max-w-xl md:max-w-2xl mx-auto aspect-square overflow-hidden bg-[#010409] blueprint-border rounded-xl md:rounded-3xl shadow-2xl group select-none flex flex-col"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background with Grid */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[#010409]" />
      <div className="pointer-events-none absolute inset-0 z-0 blueprint-grid opacity-100" />
      
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 p-5 md:p-8 flex justify-between items-center z-20 pointer-events-none nav-glass border-b border-white/5">
        <div className="text-white font-black tracking-widest text-sm md:text-base drop-shadow-md uppercase">
          inspir<span className="text-[#FFD700]">on</span> <span className="text-[#00D2FF]">TECH</span>
        </div>
        <div className="text-[11px] md:text-xs font-bold bg-[#010409]/80 px-4 py-1.5 rounded-full border border-white/10 tracking-[0.1em]">
          <span className="text-[#FFD700]">{(currentSlide + 1).toString().padStart(2, "0")}</span>
          <span className="text-white/40"> / {totalSlides}</span>
        </div>
      </div>

      {/* Navigation Arrows (Visible on Hover) */}
      <button
        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-[#010409]/80 border border-white/10 hover:bg-[#FFD700] hover:border-[#FFD700] rounded-full text-white/50 hover:text-[#010409] transition-all opacity-0 group-hover:opacity-100 shadow-xl"
        aria-label="Previous Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-[#010409]/80 border border-white/10 hover:bg-[#FFD700] hover:border-[#FFD700] rounded-full text-white/50 hover:text-[#010409] transition-all opacity-0 group-hover:opacity-100 shadow-xl"
        aria-label="Next Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>

      {/* Slides Container */}
      <div className="relative w-full h-full flex-grow flex flex-col">
        {slides.map((SlideComponent, index) => (
          <div 
            key={index}
            className={`absolute inset-0 pt-20 md:pt-28 pb-6 px-6 md:px-12 flex flex-col transition-all duration-500 ease-in-out ${
              index === currentSlide 
                ? "opacity-100 translate-x-0 z-10" 
                : index < currentSlide 
                  ? "opacity-0 -translate-x-full z-0 pointer-events-none" 
                  : "opacity-0 translate-x-full z-0 pointer-events-none"
            }`}
          >
            {SlideComponent}
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-2 md:bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button 
            key={i}
            onClick={(e) => {
               e.stopPropagation();
               setCurrentSlide(i);
            }}
            className={`h-1 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-[#FFD700] w-6" : "bg-white/20 hover:bg-white/40 w-1.5"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
