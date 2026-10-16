import React from 'react';
import { ShieldAlert, PhoneCall, FileText } from 'lucide-react';
import { PROGRAM_INFO } from '../data/programData';
import { SpireLogo } from './SpireLogo';

interface FooterProps {
  onOpenCounselingModal: () => void;
  onOpenPdfModal?: () => void;
  onScrollToTop?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCounselingModal,
  onOpenPdfModal,
  onScrollToTop,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs pt-12 pb-24 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <SpireLogo variant="badge" size="md" />
              <div>
                <span className="text-base font-extrabold text-white font-serif block">
                  {PROGRAM_INFO.programName}
                </span>
                <span className="text-[11px] text-emerald-400 font-semibold">
                  {PROGRAM_INFO.tagline}
                </span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs pt-1">
              Structured 120-day learning curriculum designed to build practical analysis, risk management, and trading discipline.
            </p>
          </div>

          {/* Nav Anchors */}
          <div className="md:col-span-4 space-y-2">
            <span className="font-bold text-white text-xs uppercase tracking-wider block">Program Navigation</span>
            <div className="grid grid-cols-2 gap-1.5 text-xs">
              <a href="#overview" className="hover:text-emerald-400 transition-colors">Program Overview</a>
              <a href="#curriculum" className="hover:text-emerald-400 transition-colors">3-Level Curriculum</a>
              <a href="#problem-solution" className="hover:text-emerald-400 transition-colors">The Beginner Trap</a>
              <a href="#practical" className="hover:text-emerald-400 transition-colors">Practical Tools</a>
              <a href="#who-is-it-for" className="hover:text-emerald-400 transition-colors">Who Is It For</a>
              <a href="#outcomes" className="hover:text-emerald-400 transition-colors">What You Will Build</a>
            </div>
          </div>

          {/* Quick Actions / CTA Buttons */}
          <div className="md:col-span-3 space-y-2.5">
            <span className="font-bold text-white text-xs uppercase tracking-wider block">Call To Action</span>
            <button
              onClick={onOpenCounselingModal}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-emerald-500 to-teal-400 hover:from-amber-400 hover:to-emerald-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Book Free Counseling Call</span>
            </button>

            {onOpenPdfModal && (
              <button
                onClick={onOpenPdfModal}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-600 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span>Get Curriculum PDF (8 Pages)</span>
              </button>
            )}

            <a
              href="#get-details"
              className="w-full py-2 rounded-xl bg-slate-950 hover:bg-slate-900 text-slate-400 hover:text-slate-200 font-medium text-xs flex items-center justify-center gap-2 border border-slate-800 transition-colors block text-center"
            >
              <span>Fill Program Enquiry Form</span>
            </a>
          </div>

        </div>

        {/* Mandatory Educational Disclaimer */}
        <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800/80 space-y-1.5 text-[11px] leading-relaxed">
          <div className="flex items-center gap-1.5 font-bold text-slate-300 uppercase tracking-wide">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Important Educational Disclaimer</span>
          </div>
          <p className="text-slate-400">
            {PROGRAM_INFO.disclaimer}
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <span>© {new Date().getFullYear()} {PROGRAM_INFO.programName}. All rights reserved.</span>
          <span>Educational Lead Generation Landing Page</span>
        </div>

      </div>
    </footer>
  );
};

