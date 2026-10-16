import React from 'react';
import {
  Award,
  ListFilter,
  FileCheck,
  Compass,
  ShieldCheck,
  NotebookPen,
  RefreshCw,
  Check,
  ArrowRight,
} from 'lucide-react';
import { OUTCOMES } from '../data/programData';

const iconMap: Record<string, React.ReactNode> = {
  ListFilter: <ListFilter className="w-6 h-6 text-emerald-400" />,
  FileCheck: <FileCheck className="w-6 h-6 text-emerald-400" />,
  Compass: <Compass className="w-6 h-6 text-emerald-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
  NotebookPen: <NotebookPen className="w-6 h-6 text-emerald-400" />,
  RefreshCw: <RefreshCw className="w-6 h-6 text-emerald-400" />,
};

interface OutcomesProps {
  onOpenCounselingModal: () => void;
}

export const Outcomes: React.FC<OutcomesProps> = ({ onOpenCounselingModal }) => {
  return (
    <section id="outcomes" className="py-20 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Tangible Assets & Deliverables</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            What You Will Build
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            By the end of the program, you won't just possess theoretical knowledge—you will leave with a personalized suit of practical trading & investment tools.
          </p>
        </div>

        {/* 6 Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OUTCOMES.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-6 transition-all duration-200 group relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {iconMap[item.icon] || <Check className="w-6 h-6 text-emerald-400" />}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">
                    Deliverable #0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                <Check className="w-4 h-4" />
                <span>Verified Capstone Outcome</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenCounselingModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all"
          >
            <span>Start Building Your Stock Analysis Kit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
