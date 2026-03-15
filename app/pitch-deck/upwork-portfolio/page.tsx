'use client';

import React, { useState } from 'react';
import './print.css';
import { RefinedLogo } from '@/components/Branding/RefinedLogo';

const Logo = () => (
  <div style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
    <RefinedLogo size={32} />
  </div>
);

const Header = () => (
  <header style={{ borderBottom: '1px solid rgba(255,215,0,0.3)' }} className="flex justify-between items-end pb-4 mb-8 shrink-0 relative z-10 w-full">
    <Logo />
    <div style={{ color: '#00D2FF' }} className="text-[9px] uppercase tracking-widest font-bold">
      UPWORK PORTFOLIO 2026
    </div>
  </header>
);

const Footer = ({ pageNum }: { pageNum: number }) => (
  <footer style={{ borderTop: '1px solid rgba(255,215,0,0.2)' }} className="mt-auto pt-4 flex justify-between items-center text-[8px] text-[rgba(255,255,255,0.55)] shrink-0 relative z-10 w-full">
    <div>MD ABU HASAN · Founder & Chief Architect</div>
    <div>Page {pageNum} / 6</div>
    <div>hello@inspiron.tech · inspiron.tech</div>
  </footer>
);

const BlueprintGrid = () => (
  <div 
    className="absolute inset-0 pointer-events-none z-0"
    style={{
      backgroundImage: `linear-gradient(rgba(0,210,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,210,255,0.04) 1px, transparent 1px)`,
      backgroundSize: '24px 24px'
    }}
  />
);

const PageWrapper = ({ children, pageNum, extraBg }: { children: React.ReactNode, pageNum: number, extraBg?: React.CSSProperties }) => (
  <div className="pdf-page shadow-2xl mb-12 print:mb-0 print:shadow-none" style={{ fontFamily: 'inherit', width: '794px', minHeight: '1123px' }}>
    <BlueprintGrid />
    {extraBg && (
      <div className="absolute inset-0 pointer-events-none z-0" style={extraBg} />
    )}
    <div className="relative z-10 h-full flex flex-col flex-grow w-full">
      <Header />
      <div className="flex-grow flex flex-col w-full">
        {children}
      </div>
      <Footer pageNum={pageNum} />
    </div>
  </div>
);

// Page 1
const PageOne = () => (
  <PageWrapper pageNum={1} extraBg={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(0,210,255,0.06) 0%, transparent 60%)' }}>
    <div className="mt-12">
      <div className="inline-block px-4 py-1.5 rounded-full border border-[rgba(0,210,255,0.5)] text-[#00D2FF] text-[10px] font-bold tracking-widest uppercase mb-16 bg-[rgba(0,210,255,0.05)]">
        BUSINESS PROCESS ARCHITECTURE · ERP IMPLEMENTATION
      </div>
      
      <h1 className="text-[36px] font-[900] leading-[1.1] text-white">
        I Don't Just Install Software.<br/>
        <span className="text-[#FFD700] mt-2 block">I Architect Logic.</span>
      </h1>
      
      <p className="text-[18px] text-[rgba(255,255,255,0.55)] max-w-[420px] mt-[16px] leading-[1.5]">
        14 years across manufacturing, construction, agro-industry, and distribution. 20+ businesses transformed. Zero-template approach.
      </p>

      <div className="flex gap-6 mt-[48px]">
        {[
          { value: '20+', label1: 'Businesses', label2: 'Transformed' },
          { value: '14,478', label1: 'Transactions', label2: 'Migrated' },
          { value: '0.0%', label1: 'Error Rate', label2: 'Achieved' }
        ].map((stat, i) => (
          <div key={i} className="border border-[rgba(255,215,0,0.3)] bg-[rgba(255,215,0,0.02)] px-6 py-5 rounded-xl w-[30%]">
            <div className="text-[#FFD700] text-3xl font-[900] mb-1">{stat.value}</div>
            <div className="text-white text-xs uppercase tracking-wider font-bold">{stat.label1}<br/>{stat.label2}</div>
          </div>
        ))}
      </div>

      <div className="w-full h-[1px] bg-[rgba(255,215,0,0.4)] mt-[48px] mb-[40px]" />

      <div className="border-l-[3px] border-[#FFD700] pl-[16px] py-1">
        <p className="text-white text-[15px] italic leading-[1.6] max-w-[500px] mb-4">
          "I am not selling software — I architect logic for any kind of workflow. Agro farm, construction, government project, cooperative, or any model I have not seen yet."
        </p>
        <p className="text-[#FFD700] text-[11px] font-bold uppercase tracking-widest">
          — MD ABU HASAN, Founder & Chief Architect, INSPIRON TECH
        </p>
      </div>

      <div className="absolute bottom-[20px] right-0 flex items-center gap-3">
        <div className="text-[#00D2FF] text-[12px] font-bold tracking-wide text-right">
          Official Manager.io Partner<br/>
          <span className="text-[rgba(0,210,255,0.7)] font-normal text-[10px] uppercase tracking-wider">Bangladesh</span>
        </div>
        <div className="w-[36px] h-[36px] rounded-full border-2 border-[#00D2FF] flex items-center justify-center text-[#00D2FF] font-bold text-lg bg-[rgba(0,210,255,0.1)]">
          M
        </div>
      </div>
    </div>
  </PageWrapper>
);

// Page 1-6 remain unchanged in content... (skipping for brevity in thoughts but implemented below)

const PageTwo = () => (
  <PageWrapper pageNum={2}>
    <div className="mb-8">
      <div className="inline-block px-3 py-1 rounded-full border border-[rgba(255,255,255,0.2)] text-white text-[9px] font-bold tracking-widest uppercase mb-4 bg-[rgba(255,255,255,0.05)]">
        ABOUT · METHODOLOGY
      </div>
      <h2 className="text-[24px] text-white font-bold">From Individual-Driven to System-Driven</h2>
    </div>

    <div className="flex gap-10 mt-2">
      <div className="w-[55%] flex flex-col">
        <div className="text-[#00D2FF] text-[10px] uppercase font-bold tracking-widest mb-3">BACKGROUND</div>
        <p className="text-[13px] text-[rgba(255,255,255,0.65)] leading-[1.6] mb-8 pr-4">
          Manager.io Official Partner and Advisor — Bangladesh's only certified implementation specialist. Computer Engineer (CSE) + BBA + CMA candidate. Founded INSPIRON TECH in 2025 after 14 years architecting financial systems across manufacturing, aquaculture, government contracting, distribution, and healthcare.
        </p>

        <div className="text-[#00D2FF] text-[10px] uppercase font-bold tracking-widest mb-4">CORE EXPERTISE</div>
        <div className="grid grid-cols-2 gap-3">
          {[
            'Business Process Architecture',
            'ERP Implementation (Manager.io)',
            'Microsoft 365 Workflow Automation',
            'Cross-Department Integration',
            'Financial Logic Design',
            'NBR/VAT Compliance Systems',
            'Zero-Error Data Migration',
            'Team Training & Handover'
          ].map((skill, i) => (
            <div key={i} className="border border-[rgba(0,210,255,0.2)] bg-[rgba(0,210,255,0.03)] px-3 py-2.5 rounded text-[11px] text-white flex items-start gap-2 leading-snug">
              <span className="text-[#00D2FF]">•</span> <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[45%] flex flex-col">
        <div className="text-[#00D2FF] text-[10px] uppercase font-bold tracking-widest mb-4">30–60 DAY METHODOLOGY</div>
        
        <div className="flex flex-col gap-4">
          <div className="border-l-[3px] border-[#00D2FF] bg-[rgba(255,255,255,0.03)] p-4 rounded-r">
            <div className="text-[#00D2FF] text-[11px] font-bold mb-2">⚡ DAYS 1–10 | DIAGNOSTIC</div>
            <p className="text-[12px] text-[rgba(255,255,255,0.6)] leading-[1.5]">
              Interview every dept head. Map actual information flows — not the org chart. Identify the 3–5 highest-risk single points of failure. Document every informal workaround.
            </p>
          </div>

          <div className="border-l-[3px] border-[#FFD700] bg-[rgba(255,255,255,0.03)] p-4 rounded-r">
            <div className="text-[#FFD700] text-[11px] font-bold mb-2">🏗️ DAYS 11–30 | ARCHITECTURE</div>
            <p className="text-[12px] text-[rgba(255,255,255,0.6)] leading-[1.5]">
              Build RACI first. Define shared data objects. Map processes dept by dept, cross-validating at every handoff. Design escalation logic.
            </p>
          </div>

          <div className="border-l-[3px] border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.03)] p-4 rounded-r">
            <div className="text-white text-[11px] font-bold mb-2">🚀 DAYS 31–60 | DEPLOYMENT</div>
            <p className="text-[12px] text-[rgba(255,255,255,0.6)] leading-[1.5]">
              Configure systems to mirror the architecture — not the reverse. Run 2-week parallel operations. Role-based training. Plain-language process documentation.
            </p>
          </div>

          <div className="w-full bg-[rgba(255,215,0,0.1)] border border-[#FFD700] text-[#FFD700] font-bold text-[12px] p-4 text-center rounded mt-2 uppercase tracking-wide">
            GOAL BY DAY 60: Business runs identically whether the founder is present or not.
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
);

const PageThree = () => (
  <PageWrapper pageNum={3}>
    <div className="mb-6">
      <div className="inline-block px-3 py-1 rounded-full border border-[rgba(255,255,255,0.2)] text-white text-[9px] font-bold tracking-widest uppercase mb-4 bg-[rgba(255,255,255,0.05)]">
        CASE STUDY 01 · AQUACULTURE · ৳100+ CRORE OPERATION
      </div>
      <h2 className="text-[28px] text-white font-bold mb-1">Nobin Agro Farm</h2>
      <div className="text-[16px] text-[#FFD700]">From Accounting Blackhole to Real-Time Control</div>
    </div>

    <div className="flex gap-10 mt-4 h-full">
      <div className="w-[50%] flex flex-col gap-8">
        <div>
          <div className="inline-block px-3 py-1 bg-[rgba(255,50,50,0.1)] border border-[rgba(255,50,50,0.3)] text-[#ff6b6b] text-[10px] font-bold tracking-wider rounded mb-3">PROBLEM</div>
          <p className="text-[13px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
            30 ponds. Zero financial visibility at pond level. Feed costs recorded as bulk purchases, not allocated per pond. No batch profitability, no mortality accounting. Decisions made on memory, not data.
          </p>
        </div>

        <div>
          <div className="inline-block px-3 py-1 bg-[rgba(0,210,255,0.1)] border border-[rgba(0,210,255,0.3)] text-[#00D2FF] text-[10px] font-bold tracking-wider rounded mb-3">WHAT I BUILT</div>
          <ul className="text-[13px] text-[rgba(255,255,255,0.75)] leading-[1.6] space-y-3">
            <li className="flex gap-2"><span className="text-[#00D2FF]">✓</span> Pond-level cost centers (Projects) for batch tracking</li>
            <li className="flex gap-2"><span className="text-[#00D2FF]">✓</span> Production order logic: feed consumption per pond/cycle</li>
            <li className="flex gap-2"><span className="text-[#00D2FF]">✓</span> Mortality accounting — dead stock as operating expense</li>
            <li className="flex gap-2"><span className="text-[#00D2FF]">✓</span> Lease amortization across 14,478 transactions</li>
            <li className="flex gap-2"><span className="text-[#00D2FF]">✓</span> Real-time executive dashboard</li>
          </ul>
        </div>
      </div>

      <div className="w-[50%] flex flex-col justify-between">
        <div className="grid grid-cols-2 gap-4">
          {[
            { value: '40%', label1: 'Admin Cost', label2: 'Reduction' },
            { value: '100%', label1: 'ROI Within', label2: '6 Months' },
            { value: '14,478', label1: 'Transactions', label2: 'Migrated' },
            { value: '0.0%', label1: 'Error', label2: 'Rate' }
          ].map((stat, i) => (
            <div key={i} className="border border-[rgba(255,215,0,0.3)] bg-[rgba(255,215,0,0.02)] p-4 rounded-xl text-center">
              <div className="text-[#FFD700] text-[28px] font-[900] mb-1">{stat.value}</div>
              <div className="text-white text-[10px] uppercase font-bold tracking-wider">{stat.label1}<br/>{stat.label2}</div>
            </div>
          ))}
        </div>

        <div className="bg-[rgba(255,215,0,0.05)] border border-[#FFD700] p-5 rounded-xl my-4">
          <p className="text-[#FFD700] text-[13px] font-bold leading-[1.5]">
            <span className="text-white">INNOVATIVE LOGIC:</span> 'Inventory Write-off' = 'Pond Consumption Record'. Simple. Powerful. No complex Production Orders needed.
          </p>
        </div>

        <div className="bg-[#FFD700] text-[#010409] font-bold text-[13px] p-4 text-center rounded-xl uppercase tracking-wide leading-[1.4]">
          ৳25–40 Lakhs Annual Financial Impact Documented<br/>
          <span className="font-medium text-[10px] opacity-80">(Lease optimization + Feed commission recovery + Error reduction + Cash flow improvement)</span>
        </div>
      </div>
    </div>
  </PageWrapper>
);

const PageFour = () => (
  <PageWrapper pageNum={4}>
    <div className="mb-6">
      <div className="inline-block px-3 py-1 rounded-full border border-[rgba(255,255,255,0.2)] text-white text-[9px] font-bold tracking-widest uppercase mb-4 bg-[rgba(255,255,255,0.05)]">
        CASE STUDY 02 · MANUFACTURING · 4-COMPANY GROUP
      </div>
      <h2 className="text-[28px] text-white font-bold mb-1">STEP Group — Footwear Manufacturing Empire</h2>
      <div className="text-[16px] text-[#FFD700]">4 Interconnected Entities. One Unified Financial Architecture.</div>
    </div>

    <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] rounded-xl p-8 mb-8 flex flex-col items-center relative">
      <div className="flex items-center gap-3 w-full justify-center">
        <div className="border border-white bg-[#010409] px-4 py-3 rounded text-[12px] font-bold text-center w-[140px]">Shoe Last Mfg</div>
        <div className="text-[#00D2FF] text-[10px] font-bold">→ INPUT →</div>
        <div className="border border-white bg-[#010409] px-4 py-3 rounded text-[12px] font-bold text-center w-[140px] relative">
          Footwear Mfg
          <div className="absolute -bottom-10 left-1/2 -ml-[4px] w-[8px] h-[36px] flex items-center justify-center text-[#00D2FF] text-[16px] font-bold">↑</div>
        </div>
        <div className="text-[#00D2FF] text-[10px] font-bold">→ OUTPUT →</div>
        <div className="border border-white bg-[#010409] px-4 py-3 rounded text-[12px] font-bold text-center w-[140px]">Retail</div>
      </div>
      <div className="flex items-center gap-3 w-full justify-center mt-8 pr-[305px]">
        <div className="border border-white bg-[#010409] px-4 py-3 rounded text-[12px] font-bold text-center w-[140px]">Adhesive Mfg</div>
        <div className="text-[#00D2FF] text-[10px] font-bold">→ INPUT</div>
      </div>
      <p className="text-[rgba(255,255,255,0.4)] text-[11px] mt-6 text-center italic">
        Each entity is a separate legal company. Inputs flow between them. Standard ERP cannot handle this.
      </p>
    </div>

    <div className="flex gap-10">
      <div className="w-[50%] flex flex-col gap-6">
        <div>
          <div className="inline-block px-3 py-1 bg-[rgba(255,50,50,0.1)] border border-[rgba(255,50,50,0.3)] text-[#ff6b6b] text-[10px] font-bold tracking-wider rounded mb-3">PROBLEM</div>
          <p className="text-[13px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
            4 companies. Inter-company sales not tracked. No consolidated P&L. Management had no real-time view across the group. Month-end took 2 weeks of manual reconciliation.
          </p>
        </div>

        <div>
          <div className="inline-block px-3 py-1 bg-[rgba(0,210,255,0.1)] border border-[rgba(0,210,255,0.3)] text-[#00D2FF] text-[10px] font-bold tracking-wider rounded mb-3">WHAT I BUILT</div>
          <ul className="text-[13px] text-[rgba(255,255,255,0.75)] leading-[1.6] space-y-2">
            <li className="flex gap-2"><span className="text-[#00D2FF]">✓</span> Unified ERP with inter-company billing logic</li>
            <li className="flex gap-2"><span className="text-[#00D2FF]">✓</span> Custom COA: group-level accounts + entity-level accounts</li>
            <li className="flex gap-2"><span className="text-[#00D2FF]">✓</span> Automated inter-company elimination for consolidation</li>
            <li className="flex gap-2"><span className="text-[#00D2FF]">✓</span> Real-time consolidated P&L across all 4 entities</li>
            <li className="flex gap-2"><span className="text-[#00D2FF]">✓</span> Manufacturing module: raw material → WIP → finished goods</li>
          </ul>
        </div>
      </div>

      <div className="w-[50%] flex flex-col gap-5 pt-2">
        <div className="border border-[rgba(255,215,0,0.3)] bg-[rgba(255,215,0,0.03)] p-5 rounded-xl flex items-start gap-3">
          <span className="text-[#FFD700] text-lg leading-none mt-[1px]">✓</span>
          <span className="text-white text-[13px] font-bold leading-snug">Real-time P&L across 4 entities — available instantly</span>
        </div>
        <div className="border border-[rgba(255,215,0,0.3)] bg-[rgba(255,215,0,0.03)] p-5 rounded-xl flex items-start gap-3">
          <span className="text-[#FFD700] text-lg leading-none mt-[1px]">✓</span>
          <span className="text-white text-[13px] font-bold leading-snug">Inter-company transactions auto-eliminated at month-end</span>
        </div>
        <div className="border border-[rgba(255,215,0,0.3)] bg-[rgba(255,215,0,0.03)] p-5 rounded-xl flex items-start gap-3">
          <span className="text-[#FFD700] text-lg leading-none mt-[1px]">✓</span>
          <span className="text-white text-[13px] font-bold leading-snug">BDT 15M, 5-year engagement — 99% close probability</span>
        </div>

        <div className="bg-[#FFD700] text-[#010409] font-[900] text-[14px] p-5 text-center rounded-xl uppercase tracking-widest mt-2">
          ⚡ ACTIVE PIPELINE: BDT 15,000,000
        </div>
      </div>
    </div>
  </PageWrapper>
);

const PageFive = () => (
  <PageWrapper pageNum={5}>
    <div className="mb-6">
      <div className="inline-block px-3 py-1 rounded-full border border-[rgba(255,255,255,0.2)] text-white text-[9px] font-bold tracking-widest uppercase mb-4 bg-[rgba(255,255,255,0.05)]">
        CASE STUDY 03 · ISP/TELECOM · WORKFLOW AUTOMATION
      </div>
      <h2 className="text-[28px] text-white font-bold mb-1">X-Press Technologies Ltd</h2>
      <div className="text-[16px] text-[#FFD700]">From WhatsApp Billing to Fully Automated Financial Operations</div>
    </div>

    <div className="flex gap-6 mb-8 mt-4">
      <div className="w-[50%] bg-[rgba(255,50,50,0.05)] border border-[rgba(255,50,50,0.2)] rounded-xl p-6">
        <div className="text-[#ff6b6b] text-[11px] font-bold tracking-widest uppercase mb-5">BEFORE</div>
        <ul className="text-[12px] text-[rgba(255,255,255,0.8)] space-y-4">
          <li className="flex gap-2 leading-snug"><span className="text-[#ff6b6b]">❌</span> Manual Excel invoice generation</li>
          <li className="flex gap-2 leading-snug"><span className="text-[#ff6b6b]">❌</span> Payment tracking via WhatsApp messages</li>
          <li className="flex gap-2 leading-snug"><span className="text-[#ff6b6b]">❌</span> VAT reports compiled manually at month-end</li>
          <li className="flex gap-2 leading-snug"><span className="text-[#ff6b6b]">❌</span> Equipment (CPE/ONU) tracked in spreadsheets</li>
          <li className="flex gap-2 leading-snug"><span className="text-[#ff6b6b]">❌</span> AR aging: nobody knew who owed what</li>
        </ul>
      </div>

      <div className="w-[50%] bg-[rgba(0,210,255,0.05)] border border-[rgba(0,210,255,0.2)] rounded-xl p-6">
        <div className="text-[#00D2FF] text-[11px] font-bold tracking-widest uppercase mb-5">AFTER</div>
        <ul className="text-[12px] text-white space-y-4">
          <li className="flex gap-2 leading-snug"><span className="text-[#00D2FF] font-black">✅</span> Recurring invoices auto-generated (200+ subscribers)</li>
          <li className="flex gap-2 leading-snug"><span className="text-[#00D2FF] font-black">✅</span> Bank reconciliation: payments auto-matched by ref code</li>
          <li className="flex gap-2 leading-snug"><span className="text-[#00D2FF] font-black">✅</span> VAT reports automated from transaction data (zero entry)</li>
          <li className="flex gap-2 leading-snug"><span className="text-[#00D2FF] font-black">✅</span> CPE/ONU assets linked to customer accounts in real time</li>
          <li className="flex gap-2 leading-snug"><span className="text-[#00D2FF] font-black">✅</span> Live AR aging dashboard for collections team</li>
        </ul>
      </div>
    </div>

    <div className="w-full h-[1px] bg-[rgba(255,215,0,0.4)] my-8" />

    <div className="text-[#00D2FF] text-[11px] font-bold tracking-widest uppercase mb-6 text-center">
      HOW I DESIGN AN END-TO-END INVOICE APPROVAL FLOW
    </div>

    <div className="flex items-center justify-between mb-8 text-center text-white w-full">
      <div className="border border-[#00D2FF] bg-[rgba(255,255,255,0.03)] p-4 rounded-xl w-[22%]">
        <div className="text-lg mb-1">📂</div>
        <div className="text-[10px] uppercase tracking-widest text-[#00D2FF] mb-2 font-bold">CAPTURE</div>
        <div className="text-[12px] font-bold mt-2">SharePoint</div>
        <div className="text-[10px] text-[rgba(255,255,255,0.6)] mt-1">Document<br/>Library</div>
      </div>
      <div className="text-[#00D2FF] text-xl font-bold">→</div>
      <div className="border border-[#00D2FF] bg-[rgba(255,255,255,0.03)] p-4 rounded-xl w-[22%]">
        <div className="text-lg mb-1">⚙️</div>
        <div className="text-[10px] uppercase tracking-widest text-[#00D2FF] mb-2 font-bold">ROUTING</div>
        <div className="text-[12px] font-bold mt-2">Power Automate</div>
        <div className="text-[10px] text-[rgba(255,255,255,0.6)] mt-1">Conditional<br/>Approval Chain</div>
      </div>
      <div className="text-[#00D2FF] text-xl font-bold">→</div>
      <div className="border border-[#00D2FF] bg-[rgba(255,255,255,0.03)] p-4 rounded-xl w-[22%]">
        <div className="text-lg mb-1">📋</div>
        <div className="text-[10px] uppercase tracking-widest text-[#00D2FF] mb-2 font-bold">TRACKING</div>
        <div className="text-[12px] font-bold mt-2">Planner</div>
        <div className="text-[10px] text-[rgba(255,255,255,0.6)] mt-1">Live task<br/>Board</div>
      </div>
      <div className="text-[#00D2FF] text-xl font-bold">→</div>
      <div className="border border-[#00D2FF] bg-[rgba(255,255,255,0.03)] p-4 rounded-xl w-[22%]">
        <div className="text-lg mb-1">🔗</div>
        <div className="text-[10px] uppercase tracking-widest text-[#00D2FF] mb-2 font-bold">ERP SYNC</div>
        <div className="text-[12px] font-bold mt-2">Sage / ERP</div>
        <div className="text-[10px] text-[rgba(255,255,255,0.6)] mt-1">Auto-create<br/>payable via API</div>
      </div>
    </div>

    <p className="text-[rgba(255,255,255,0.4)] text-[11px] text-center italic mt-auto pb-4">
      Architecture is platform-agnostic. Same logic applies to Manager.io, Odoo, Microsoft Dynamics, or Sage.
    </p>
  </PageWrapper>
);

const PageSix = () => (
  <PageWrapper pageNum={6}>
    <div className="mb-10">
      <div className="inline-block px-3 py-1 rounded-full border border-[rgba(255,255,255,0.2)] text-white text-[9px] font-bold tracking-widest uppercase mb-4 bg-[rgba(255,255,255,0.05)]">
        METHODOLOGY · ANTI-SILO FRAMEWORK · NEXT STEPS
      </div>
      <h2 className="text-[24px] text-white font-bold">How I Prevent Silos Across Departments</h2>
    </div>

    <div className="flex flex-col gap-6 mb-12">
      <div className="border-l-[4px] border-[#00D2FF] bg-[rgba(255,255,255,0.03)] p-6 rounded-r-xl">
        <h3 className="text-white text-[13px] font-bold tracking-wide uppercase mb-3">🔍 CROSS-DEPARTMENT DISCOVERY BEFORE ANY MAPPING</h3>
        <p className="text-[13px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
          Before drawing a single process, I run a cross-functional session asking every department: What do you receive from others? What do you produce for others? Where do handoffs break down today? This surfaces integration points that dept-by-dept mapping would otherwise miss.
        </p>
      </div>

      <div className="border-l-[4px] border-[#FFD700] bg-[rgba(255,255,255,0.03)] p-6 rounded-r-xl">
        <h3 className="text-white text-[13px] font-bold tracking-wide uppercase mb-3">🔗 SHARED DATA OBJECTS AS INTEGRATION ANCHORS</h3>
        <p className="text-[13px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
          I identify objects that cross boundaries — invoices, POs, projects, customer records, inventory items — and design them as shared objects. Every department's process references the same record, not a copy of it.
        </p>
      </div>

      <div className="border-l-[4px] border-[#00D2FF] bg-[rgba(255,255,255,0.03)] p-6 rounded-r-xl">
        <h3 className="text-white text-[13px] font-bold tracking-wide uppercase mb-3">📊 RACI ACCOUNTABILITY MAP BEFORE PROCESS MAP</h3>
        <p className="text-[13px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
          A full RACI matrix spanning all departments is built before any workflow documentation. This ensures process maps reflect who owns each handoff — not just what happens inside one team.
        </p>
      </div>
    </div>

    <div className="w-full h-[1px] bg-[rgba(255,215,0,0.4)] mb-8" />

    <div className="border border-[rgba(255,215,0,0.5)] bg-[rgba(255,215,0,0.05)] rounded-2xl p-8 text-center mt-auto mb-4 mx-8 shadow-2xl">
      <div className="flex justify-center mb-6" style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
        <RefinedLogo size={28} />
      </div>
      <h3 className="text-[20px] text-white font-bold mb-2">Ready to Move From Individual-Driven to System-Driven?</h3>
      <p className="text-[14px] text-[rgba(255,255,255,0.6)] mb-8">Available immediately. Expert-level engagement. Contract-to-hire welcome.</p>
      
      <div className="flex justify-center gap-10 text-[13px] text-white font-bold tracking-wide mb-8">
        <div className="flex items-center gap-2">✉️ hello@inspiron.tech</div>
        <div className="flex items-center gap-2">📱 +880 1719 300 849</div>
        <div className="flex items-center gap-2">🌐 inspiron.tech</div>
      </div>

      <div className="inline-block border border-[#00D2FF] bg-[#010409] px-6 py-4 rounded-xl text-left bg-opacity-80">
        <div className="flex items-center gap-2 text-[12px] text-white mb-2"><span className="text-[#00D2FF] font-bold text-sm">✓</span> Official Manager.io Partner · Bangladesh</div>
        <div className="flex items-center gap-2 text-[12px] text-white mb-2"><span className="text-[#00D2FF] font-bold text-sm">✓</span> ID Verified · Upwork</div>
        <div className="flex items-center gap-2 text-[12px] text-white"><span className="text-[#00D2FF] font-bold text-sm">✓</span> 5.0★ Rating</div>
      </div>
    </div>
  </PageWrapper>
);

export default function UpworkPortfolioPage() {
  const [exporting, setExporting] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleExportPDF = async () => {
    setExporting(true);
    setProgress(0);

    try {
      const { default: jsPDF } = await import('jspdf');
      const { default: html2canvas } = await import('html2canvas');

      const pages = document.querySelectorAll<HTMLElement>('.pdf-page');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [794, 1123],  // A4 at 96dpi in pixels
        compress: true,
      });

      for (let i = 0; i < pages.length; i++) {
        setProgress(Math.round((i / pages.length) * 100));

        const canvas = await html2canvas(pages[i], {
          scale: 2,              // 2x for crisp print quality
          useCORS: true,
          backgroundColor: '#010409',
          width: 794,
          height: 1123,
          windowWidth: 794,
          windowHeight: 1123,
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.95);

        if (i > 0) pdf.addPage([794, 1123], 'portrait');
        pdf.addImage(imgData, 'JPEG', 0, 0, 794, 1123);
      }

      setProgress(100);
      pdf.save('INSPIRON-TECH-MD-ABU-HASAN-Portfolio.pdf');

    } catch (err) {
      console.error('PDF export failed:', err);
      alert('PDF export failed. See console for details.');
    } finally {
      setExporting(false);
      setProgress(0);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 py-12 print:p-0 print:bg-[#010409]">
      <div className="max-w-[794px] mx-auto">
        <PageOne />
        <PageTwo />
        <PageThree />
        <PageFour />
        <PageFive />
        <PageSix />
      </div>

      {/* Floating Export Button */}
      <button
        onClick={handleExportPDF}
        disabled={exporting}
        className="no-print fixed bottom-8 right-8 z-50 
          bg-[#FFD700] hover:bg-[#FFD700]/90 
          disabled:bg-[#FFD700]/50 text-[#010409] 
          px-6 py-3 rounded-full font-bold 
          shadow-[0_0_20px_rgba(255,215,0,0.3)] 
          transition-all uppercase tracking-widest text-sm 
          flex items-center gap-3 min-w-[180px] justify-center"
      >
        {exporting ? (
          <>
            <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" 
              width="16" height="16" viewBox="0 0 24 24" fill="none" 
              stroke="currentColor" strokeWidth="2">
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            {progress}% Rendering...
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
              viewBox="0 0 24 24" fill="none" stroke="currentColor" 
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
            Export PDF
          </>
        )}
      </button>

      {/* Progress Bar */}
      {exporting && (
        <div className="no-print fixed top-0 left-0 right-0 z-50 h-1 bg-black/50">
          <div
            className="h-full bg-[#FFD700] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
}
