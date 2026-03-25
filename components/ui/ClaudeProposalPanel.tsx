"use client";

import { Sparkles, TrendingUp, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { clsx } from "clsx";

// ─────────────────────────────────────────────────────────────────────────────
// ClaudeProposalPanel — WEB-COMMAND-HQ
// Renders AI-generated 3-tier proposal from /api/claude
// Brand tokens from tailwind.config.ts (Sovereign Brand Manual v1.2.0)
// ─────────────────────────────────────────────────────────────────────────────

interface ProposalTier {
    title: string;
    price: string;
    scope: string;
}

interface Proposal {
    score: number;
    tier: "hot" | "warm" | "cold";
    industry_detected: string;
    current_system_assessment: string;
    recommended_service: string;
    starter: ProposalTier;
    standard: ProposalTier;
    advanced: ProposalTier;
    next_step: string;
    one_liner: string;
}

interface ClaudeProposalPanelProps {
    proposal: Proposal;
    clientName: string;
    clientPhone?: string;
}

const TIER_CONFIG = {
    hot: {
        label: "HIGH FIT",
        color: "text-electric-cyan",
        border: "border-electric-cyan/50",
        bg: "bg-electric-cyan/10",
        dot: "bg-electric-cyan",
    },
    warm: {
        label: "GOOD FIT",
        color: "text-action-gold",
        border: "border-action-gold/50",
        bg: "bg-action-gold/10",
        dot: "bg-action-gold",
    },
    cold: {
        label: "EARLY STAGE",
        color: "text-gray-400",
        border: "border-white/20",
        bg: "bg-white/5",
        dot: "bg-gray-400",
    },
};

function ScoreBar({ score }: { score: number }) {
    return (
        <div className="flex items-center gap-3">
            <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-electric-cyan to-action-gold rounded-full transition-all duration-700"
                    style={{ width: `${score * 10}%` }}
                />
            </div>
            <span className="text-xs font-mono text-gray-400">{score}/10</span>
        </div>
    );
}

function TierCard({
    tier,
    data,
    featured = false,
}: {
    tier: string;
    data: ProposalTier;
    featured?: boolean;
}) {
    return (
        <div
            className={clsx(
                "rounded-2xl p-6 border transition-all",
                featured
                    ? "border-electric-cyan/40 bg-electric-cyan/5 ring-1 ring-electric-cyan/20"
                    : "border-white/10 bg-white/[0.02]"
            )}
        >
            {featured && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-cyan/20 border border-electric-cyan/30 text-electric-cyan text-[10px] font-bold uppercase tracking-widest mb-4">
                    <Sparkles size={10} />
                    <span>Recommended</span>
                </div>
            )}
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                {tier}
            </div>
            <div className="text-2xl font-bold font-institutional text-white mb-1">
                {data.price}
            </div>
            <div className="text-sm text-gray-400 leading-relaxed">{data.scope}</div>
        </div>
    );
}

export default function ClaudeProposalPanel({
    proposal,
    clientName,
    clientPhone,
}: ClaudeProposalPanelProps) {
    const tierCfg = TIER_CONFIG[proposal.tier] ?? TIER_CONFIG.warm;

    const handleWhatsApp = () => {
        const msg =
            `Hi, I just received an AI-generated proposal from INSPIRON TECH for my business.%0A` +
            `%0AName: ${clientName}%0AIndustry: ${proposal.industry_detected}%0A` +
            `Selected Service: ${proposal.standard.title} – ${proposal.standard.price}%0A` +
            `I'd like to discuss next steps.`;
        window.open(`https://wa.me/8801719300849?text=${msg}`, "_blank");
    };

    return (
        <div className="mt-8 rounded-3xl border border-electric-cyan/20 bg-white/[0.02] overflow-hidden">
            {/* Header */}
            <div className="px-8 py-6 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-electric-cyan/10 rounded-xl border border-electric-cyan/20">
                        <Zap className="text-electric-cyan" size={18} />
                    </div>
                    <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-500">
                            AI Scoping Engine
                        </div>
                        <div className="text-sm font-institutional text-white">
                            Proposal Generated
                        </div>
                    </div>
                </div>

                {/* Lead Score Badge */}
                <div className={clsx("px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest flex items-center gap-2", tierCfg.border, tierCfg.bg, tierCfg.color)}>
                    <span className={clsx("w-1.5 h-1.5 rounded-full animate-pulse", tierCfg.dot)} />
                    {tierCfg.label}
                </div>
            </div>

            <div className="px-8 py-8 space-y-8">
                {/* Fit Score */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                            Implementation Fit Score
                        </span>
                        <TrendingUp size={14} className="text-electric-cyan" />
                    </div>
                    <ScoreBar score={proposal.score} />
                </div>

                {/* One-liner hook */}
                <div className="p-5 bg-action-gold/5 border border-action-gold/20 rounded-2xl">
                    <p className="text-sm text-action-gold font-medium leading-relaxed italic">
                        &ldquo;{proposal.one_liner}&rdquo;
                    </p>
                </div>

                {/* Industry + Current System */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/[0.03] border border-white/10 rounded-xl">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-1">
                            Industry
                        </div>
                        <div className="text-sm text-white font-mono">
                            {proposal.industry_detected}
                        </div>
                    </div>
                    <div className="p-4 bg-white/[0.03] border border-white/10 rounded-xl">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-1">
                            Current Setup
                        </div>
                        <div className="text-sm text-gray-300 leading-tight">
                            {proposal.current_system_assessment}
                        </div>
                    </div>
                </div>

                {/* 3-Tier Proposal */}
                <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
                        Service Tiers
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <TierCard tier={proposal.starter.title} data={proposal.starter} />
                        <TierCard tier={proposal.standard.title} data={proposal.standard} featured />
                        <TierCard tier={proposal.advanced.title} data={proposal.advanced} />
                    </div>
                </div>

                {/* Recommended Service */}
                <div className="flex items-start gap-3 p-4 bg-white/[0.03] border border-white/10 rounded-xl">
                    <CheckCircle size={16} className="text-electric-cyan mt-0.5 shrink-0" />
                    <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-0.5">
                            Recommended Starting Point
                        </div>
                        <div className="text-sm text-white">{proposal.recommended_service}</div>
                    </div>
                </div>

                {/* CTA */}
                <button
                    onClick={handleWhatsApp}
                    className="w-full gold-racer haptic-button py-4 rounded-xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 group"
                >
                    <span>Confirm on WhatsApp</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-[10px] text-center text-gray-600 font-mono">
                    Proposal generated by Claude AI · Pricing indicative · Final scope confirmed in discovery call
                </p>
            </div>
        </div>
    );
}
