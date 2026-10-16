import React, { useState } from 'react';
import {
  FileText,
  CheckCircle2,
  PhoneCall,
  Search,
  Eye,
  TrendingUp,
  X,
  Building2,
  ShieldCheck,
  BarChart,
  Download,
} from 'lucide-react';
import { FINAL_PROJECT_INFO } from '../data/programData';

interface FinalProjectProps {
  onOpenCounselingModal: () => void;
}

export const FinalProject: React.FC<FinalProjectProps> = ({ onOpenCounselingModal }) => {
  const [showSampleModal, setShowSampleModal] = useState(false);

  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column Description */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5" />
                <span>Capstone Graduation Project</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {FINAL_PROJECT_INFO.headline}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {FINAL_PROJECT_INFO.description}
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {FINAL_PROJECT_INFO.checklist.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setShowSampleModal(true)}
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 font-bold text-xs border border-emerald-500/30 flex items-center gap-2 transition-all"
                >
                  <Eye className="w-4 h-4" />
                  <span>Inspect Sample Report Breakdown</span>
                </button>

                <button
                  onClick={onOpenCounselingModal}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Ask Counselor About Capstone Guidance</span>
                </button>
              </div>

            </div>

            {/* Right Column Visual Report Card */}
            <div className="lg:col-span-5">
              <div
                onClick={() => setShowSampleModal(true)}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all cursor-pointer group shadow-xl relative"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-emerald-400" />
                    <span className="font-bold text-white text-xs">Sample Capstone Case Study</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-mono font-bold">
                    Grade A+ Submission
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 space-y-1">
                    <div className="text-slate-400 text-[10px]">Company Selected</div>
                    <div className="font-bold text-white text-sm">Reliant Industries Ltd (NSE)</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">ROE / ROCE</span>
                      <span className="text-emerald-400 font-bold font-mono">18.4% / 21.2%</span>
                    </div>
                    <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Technical Trend</span>
                      <span className="text-teal-300 font-bold">Weekly Breakout</span>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-slate-400 text-[10px]">Valuation Verdict & Risk Plan</span>
                    <p className="text-[11px] text-slate-300">
                      Undervalued against 5-year average P/E with key support at ₹2,880. Recommended position size: 2% capital risk.
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-center">
                  <span className="text-xs font-bold text-emerald-400 group-hover:underline inline-flex items-center gap-1">
                    <span>Click to View Full 6-Page Analysis Preview</span>
                    <Eye className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Modal Preview for Sample Report */}
        {showSampleModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 space-y-4 shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-base font-bold text-white">Stock Analysis Report Sample Preview</h3>
                </div>
                <button
                  onClick={() => setShowSampleModal(false)}
                  className="p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-emerald-400 font-bold text-sm block">1. Business & Industry Overview</span>
                  <p className="text-slate-400 leading-relaxed">
                    Evaluated market share leadership, revenue diversification across digital services and retail, and capital expenditure history over 5 fiscal years.
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-emerald-400 font-bold text-sm block">2. Financial Statement & Ratio Analysis</span>
                  <p className="text-slate-400 leading-relaxed">
                    Examined P&L operating margins (22.5%), free cash flow generation, Debt-to-Equity ratio (0.35), and interest coverage safety buffer.
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-emerald-400 font-bold text-sm block">3. Technical Price Structure & Setup</span>
                  <p className="text-slate-400 leading-relaxed">
                    Mapped 200-day moving average support, RSI momentum confirmation above 55, and volume spike on channel breakout.
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-emerald-400 font-bold text-sm block">4. Executive Risk & Trade Plan</span>
                  <p className="text-slate-400 leading-relaxed">
                    Set precise stop-loss at ₹2,880, target price at ₹3,350 (R:R 1:2.8), and maximum trade risk capped at 1.5% of total portfolio.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-end gap-3">
                <button
                  onClick={() => setShowSampleModal(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-xs font-semibold"
                >
                  Close Preview
                </button>
                <button
                  onClick={() => {
                    setShowSampleModal(false);
                    onOpenCounselingModal('Learner Capstone Report Guide Request');
                  }}
                  className="px-4 py-2 bg-emerald-500 text-slate-950 font-bold rounded-lg text-xs"
                >
                  Book Counselling Call to Discuss Capstone
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
