import React, { useEffect } from 'react';
import { X, Sparkles, ShieldCheck, Clock } from 'lucide-react';
import { SpireLogo } from './SpireLogo';

interface CounselingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedLevel?: string;
}

export const CounselingModal: React.FC<CounselingModalProps> = ({
  isOpen,
  onClose,
  preselectedLevel,
}) => {
  useEffect(() => {
    if (isOpen) {
      // Handle ESC key to close
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);

      // Re-trigger Natton embed script
      const existingScript = document.querySelector('script[src="https://automation.natton.ai/js/form_embed.js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://automation.natton.ai/js/form_embed.js';
        script.async = true;
        document.body.appendChild(script);
      }

      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl max-w-xl w-full shadow-2xl shadow-slate-950/90 relative overflow-hidden my-auto flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950/80 relative flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <SpireLogo variant="badge" size="md" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Book Free Counselling Call
                </h3>
              </div>
              <p className="text-xs text-amber-400 font-semibold flex items-center gap-1.5 mt-0.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>
                  {preselectedLevel ? `Curriculum Track: ${preselectedLevel}` : '1-on-1 Strategy & Curriculum Roadmap Session'}
                </span>
              </p>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors shrink-0"
            title="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Reassurance Micro-Bar */}
        <div className="px-4 py-2 bg-slate-950/40 border-b border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-emerald-400" />
            <span>15-min 1-on-1 Call</span>
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>100% Free • No Spam</span>
          </span>
        </div>

        {/* Embedded Form Container */}
        <div className="p-2 sm:p-3 bg-slate-900 overflow-y-auto max-h-[72vh]">
          <div className="w-full rounded-xl overflow-hidden bg-transparent">
            <iframe
              src="https://automation.natton.ai/widget/form/WY84LeqbQa6ZYJXygSS3"
              style={{ width: '100%', height: '620px', border: 'none', borderRadius: '12px' }}
              id="inline-WY84LeqbQa6ZYJXygSS3"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Stock_market_program_form"
              data-height="620"
              data-layout-iframe-id="inline-WY84LeqbQa6ZYJXygSS3"
              data-form-id="WY84LeqbQa6ZYJXygSS3"
              title="Stock_market_program_form"
            />
          </div>
        </div>

      </div>
    </div>
  );
};


