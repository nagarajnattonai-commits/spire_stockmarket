import React from 'react';
import {
  MessageSquareWarning,
  MapPinOff,
  ShieldOff,
  Building2,
  BrainCircuit,
  AlertTriangle,
  XCircle,
  TrendingDown,
  Sparkles,
} from 'lucide-react';
import { PROBLEM_DATA } from '../data/programData';

const iconMap: Record<string, React.ReactNode> = {
  MessageSquareWarning: <MessageSquareWarning className="w-6 h-6 text-rose-400" />,
  MapPinOff: <MapPinOff className="w-6 h-6 text-rose-400" />,
  ShieldOff: <ShieldOff className="w-6 h-6 text-rose-400" />,
  Building2: <Building2 className="w-6 h-6 text-rose-400" />,
  BrainCircuit: <BrainCircuit className="w-6 h-6 text-rose-400" />,
  AlertTriangle: <AlertTriangle className="w-6 h-6 text-rose-400" />,
};

interface ProblemSectionProps {
  onOpenCounselingModal: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenCounselingModal }) => {
  return (
    <section id="problem-solution" className="py-20 bg-slate-900/90 border-t border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider">
            <XCircle className="w-3.5 h-3.5" />
            <span>The Beginner Trap</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {PROBLEM_DATA.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {PROBLEM_DATA.subtitle}
          </p>
        </div>

        {/* 6 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEM_DATA.points.map((pt, idx) => (
            <div
              key={idx}
              className="bg-slate-950/80 border border-slate-800/80 hover:border-rose-500/30 rounded-2xl p-6 transition-all duration-200 group hover:shadow-xl hover:shadow-rose-950/20 relative"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {iconMap[pt.icon] || <TrendingDown className="w-6 h-6 text-rose-400" />}
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-rose-400/80 font-bold uppercase tracking-widest">
                    Mistake #0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-rose-300 transition-colors">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reflection Callout Banner */}
        <div className="mt-12 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Break out of the trial-and-error loss cycle.</span>
            </div>
            <p className="text-xs text-slate-400">
              Shift from guesswork to structured market evaluation with our 3-level roadmap.
            </p>
          </div>
          <button
            onClick={onOpenCounselingModal}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 font-semibold text-xs border border-emerald-500/30 transition-colors"
          >
            Speak with a Counselor
          </button>
        </div>

      </div>
    </section>
  );
};
