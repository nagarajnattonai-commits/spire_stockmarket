import React, { useState } from 'react';
import {
  Clock,
  Layers,
  Download,
  PhoneCall,
  ArrowRight,
} from 'lucide-react';
import { CURRICULUM_LEVELS } from '../data/programData';

interface ProgramStructureProps {
  onOpenCounselingModal: (selectedLevel?: string) => void;
  onOpenPdfModal: () => void;
}

export const ProgramStructure: React.FC<ProgramStructureProps> = ({
  onOpenCounselingModal,
  onOpenPdfModal,
}) => {
  const [activeLevelTab, setActiveLevelTab] = useState<string>('Level 1');

  const levelColorClasses: Record<string, { bg: string; border: string; text: string; badge: string }> = {
    emerald: {
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      text: 'text-emerald-400',
      badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    },
    blue: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      text: 'text-blue-400',
      badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    },
    indigo: {
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/30',
      text: 'text-indigo-400',
      badge: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    },
  };

  const handleDownloadSyllabus = () => {
    onOpenPdfModal();
  };

  return (
    <section id="curriculum" className="py-20 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Structured Roadmap</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            One Program. Three Levels of Learning.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Progress systematically from fundamental market mechanics to advanced technical strategies, balance sheet valuation, and derivatives risk control.
          </p>
        </div>

        {/* Level Tabs Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 p-1.5 rounded-2xl bg-slate-950 border border-slate-800 max-w-full overflow-x-auto scrollbar-none shadow-lg">
            {CURRICULUM_LEVELS.map((level) => {
              const isActive = activeLevelTab === level.level;
              return (
                <button
                  key={level.level}
                  onClick={() => setActiveLevelTab(level.level)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-md shadow-emerald-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <span>{level.level}: {level.title}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${isActive ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>
                    {level.duration}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Level Cards Grid (Responsive) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CURRICULUM_LEVELS.map((lvl) => {
            const styles = levelColorClasses[lvl.color] || levelColorClasses.emerald;
            const isHighlight = activeLevelTab === lvl.level;

            return (
              <div
                key={lvl.level}
                className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden relative ${
                  isHighlight
                    ? 'bg-slate-950 border-emerald-500/80 ring-1 ring-emerald-500/50 shadow-2xl shadow-emerald-950/40 transform lg:-translate-y-2'
                    : 'bg-slate-950/70 hover:bg-slate-950 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Level Card Header */}
                <div className="p-6 border-b border-slate-800/80 relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${styles.badge}`}>
                      {lvl.level} • {lvl.badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-slate-300 text-xs font-semibold">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{lvl.duration}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-2">
                    {lvl.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {lvl.description}
                  </p>
                </div>

                {/* Topics List */}
                <div className="p-6 flex-1 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                    <span>Key Modules & Topics</span>
                    <span className="text-emerald-400">{lvl.topics.length} Topics</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 max-h-[320px] overflow-y-auto pr-1 scrollbar-thin">
                    {lvl.topics.map((topic, tIdx) => (
                      <div
                        key={tIdx}
                        className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/60 border border-slate-800/60 text-xs text-slate-200 hover:border-slate-700 hover:text-white transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span className="font-medium">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenCounselingModal(`Enquire for ${lvl.level}: ${lvl.title}`)}
                    className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 font-bold text-xs border border-emerald-500/30 hover:border-emerald-500/60 transition-all flex items-center justify-center gap-2 group"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Get {lvl.level} Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Download Syllabus Banner */}
        <div className="mt-12 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Download className="w-4 h-4" />
              <span>Complete 120-Day Syllabus Guide</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Want the detailed day-by-day learning schedule?
            </h3>
            <p className="text-xs text-slate-400 max-w-xl">
              Download the complete curriculum PDF containing lesson objectives, case study breakdowns, and final project evaluation criteria.
            </p>
          </div>

          <button
            onClick={handleDownloadSyllabus}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 active:scale-95 transition-all flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Get Full Curriculum PDF (8 Pages)</span>
          </button>
        </div>

      </div>
    </section>
  );
};
