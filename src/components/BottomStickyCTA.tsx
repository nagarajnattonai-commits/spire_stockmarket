import React, { useState, useEffect } from 'react';
import { PhoneCall, Sparkles, ArrowUpRight, ArrowRight, FileText } from 'lucide-react';
import { SpireLogo } from './SpireLogo';
import { PROGRAM_INFO } from '../data/programData';

interface BottomStickyCTAProps {
  onOpenCounselingModal: () => void;
  onScrollToForm: () => void;
  onOpenPdfModal?: () => void;
}

export const BottomStickyCTA: React.FC<BottomStickyCTAProps> = ({
  onOpenCounselingModal,
  onScrollToForm,
  onOpenPdfModal,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Quick Action Bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-amber-500/30 shadow-[0_-10px_30px_rgba(0,0,0,0.6)] py-3 px-4 sm:px-6 transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Left Side: Brand & Value Hook */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
          <div className="flex items-center gap-2.5">
            <SpireLogo variant="badge" size="sm" />
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white tracking-wide">
                  {PROGRAM_INFO.programName}
                </span>
                <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-semibold text-emerald-400">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>120-Day Mastery</span>
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden xs:block">
                Zero Prior Experience Required • 100% Practical
              </p>
            </div>
          </div>

          <span className="sm:hidden text-[11px] text-amber-400 font-medium">
            Next Batch Soon
          </span>
        </div>

        {/* Right Side: CTA Action Buttons */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
          {onOpenPdfModal && (
            <button
              onClick={onOpenPdfModal}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium border border-slate-700 hover:border-slate-600 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Curriculum PDF</span>
            </button>
          )}

          <button
            onClick={onScrollToForm}
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium border border-slate-700 hover:border-slate-600 transition-all"
          >
            <span>Enquire On Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onOpenCounselingModal}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-emerald-500 to-teal-400 hover:from-amber-400 hover:to-emerald-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
          >
            <PhoneCall className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Book Free Counselling Call</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </aside>
  );
};
