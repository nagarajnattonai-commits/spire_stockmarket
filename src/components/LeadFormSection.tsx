import React from 'react';
import {
  PhoneCall,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Send,
} from 'lucide-react';
import { SpireLogo } from './SpireLogo';

interface LeadFormSectionProps {
  onOpenCounselingModal: () => void;
}

export const LeadFormSection: React.FC<LeadFormSectionProps> = ({
  onOpenCounselingModal,
}) => {
  return (
    <section id="get-details" className="py-20 bg-slate-950 relative border-t border-slate-800">
      
      {/* CTA Banner Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-amber-500/30 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-2xl relative overflow-hidden">
          <div className="flex justify-center mb-2">
            <SpireLogo variant="badge" size="lg" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SPIRE Enrollment & Counselling</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Ready to Learn the Stock Market the Right Way?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Speak with our counsellor and understand the program, curriculum and learning path tailored to your schedule.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={onOpenCounselingModal}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/25 transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 stroke-[2.5]" />
              <span>Book a Free Counselling Call</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Lead Form Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Value Proposition & Assurance */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Send className="w-3.5 h-3.5" />
              <span>Direct Program Enquiry</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Get Complete Program Details & Batch Schedule
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              Fill out the official form to receive our program syllabus, fee structure, batch timings, and a 1-on-1 strategy call booking link directly.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-white block">1-on-1 Guidance Session</span>
                  <span className="text-[11px] text-slate-400">Get personalized advice on which level matches your experience.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-white block">No Hard Selling</span>
                  <span className="text-[11px] text-slate-400">Purely educational counselling focused on your learning goals.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-white block">Strict Privacy Guarantee</span>
                  <span className="text-[11px] text-slate-400">Your contact details remain 100% confidential. No spam calls.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Natton Form Iframe */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-2xl relative overflow-hidden">
            <div className="mb-4">
              <h4 className="text-lg font-bold text-white">Stock Market Program Enquiry</h4>
              <p className="text-xs text-amber-400">
                Fill out your information below to book your counselling session.
              </p>
            </div>

            <div className="w-full min-h-[640px] overflow-hidden rounded-2xl bg-transparent">
              <iframe
                src="https://automation.natton.ai/widget/form/WY84LeqbQa6ZYJXygSS3"
                style={{ width: '100%', height: '652px', border: 'none', borderRadius: '12px' }}
                id="inline-WY84LeqbQa6ZYJXygSS3"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Stock_market_program_form"
                data-height="652"
                data-layout-iframe-id="inline-WY84LeqbQa6ZYJXygSS3"
                data-form-id="WY84LeqbQa6ZYJXygSS3"
                title="Stock_market_program_form"
              />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

