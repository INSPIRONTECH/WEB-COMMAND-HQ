import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface CaseStudyCardProps {
    title: string;
    subtitle: string;
    description: string;
    impactMetrics: string[];
    link?: string;
    ctaText?: string;
    image?: string; // Optional for future use
    status?: 'Live' | 'Planned'; // New prop
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
    title,
    subtitle,
    description,
    impactMetrics,
    link,
    ctaText = "View Case Study",
    status = 'Live' // Default to Live
}) => {
    return (
        <div className={`p-10 bg-white/[0.03] border ${status === 'Planned' ? 'border-dashed border-white/20' : 'border-white/10'} rounded-[32px] hover:border-aqua/50 transition-all group flex flex-col h-full relative overflow-hidden`}>

            {status === 'Planned' && (
                <div className="absolute top-6 right-6 bg-white/10 px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-gray-400">
                    Strategic Roadmap
                </div>
            )}

            <div className="mb-8">
                <span className="text-[10px] font-black uppercase tracking-widest text-aqua mb-3 block">{subtitle}</span>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 group-hover:text-white transition-colors text-gray-200">{title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm font-medium italic">
                    {description}
                </p>
            </div>

            <div className="mt-auto">
                <div className="space-y-3 mb-8">
                    {impactMetrics.map((metric, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <CheckCircle2 size={14} className={status === 'Planned' ? 'text-gray-600' : 'text-gold'} />
                            <span className="text-gray-400 text-xs font-mono uppercase tracking-wider">{metric}</span>
                        </div>
                    ))}
                </div>

                {link && (
                    <Link href={link} className={`inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${status === 'Planned' ? 'text-gray-500 pointer-events-none' : 'text-white group-hover:text-aqua'} transition-colors`}>
                        {status === 'Planned' ? 'Implementation Pending' : ctaText} {status !== 'Planned' && <ArrowRight size={14} />}
                    </Link>
                )}
            </div>
        </div>
    );
};
