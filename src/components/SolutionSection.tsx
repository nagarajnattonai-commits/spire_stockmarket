import React from 'react';
import {
  CheckCircle2,
  Sparkles,
  PhoneCall,
} from 'lucide-react';
import { SOLUTION_DATA } from '../data/programData';

interface SolutionSectionProps {
  onOpenCounselingModal: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onOpenCounselingModal }) => {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Structured Solution</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {SOLUTION_DATA.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {SOLUTION_DATA.description}
          </p>
        </div>

        {/* 8 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SOLUTION_DATA.benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border bg-slate-900/60 hover:bg-slate-900 border-slate-800/80 hover:border-emerald-500/40 transition-all duration-200 relative overflow-hidden group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs shrink-0">
                    0{idx + 1}
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                </div>

                <h3 className="text-sm font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors leading-snug">
                  {benefit.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {benefit.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenCounselingModal}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            <PhoneCall className="w-4 h-4 stroke-[2.5]" />
            <span>Discuss Learning Path with Counselor</span>
          </button>
        </div>

      </div>
    </section>
  );
};

