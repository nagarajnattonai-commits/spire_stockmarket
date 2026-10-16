import React from 'react';
import {
  Users,
  UserCheck,
  PiggyBank,
  CandlestickChart,
  Briefcase,
  GraduationCap,
  BarChart2,
  Search,
  CheckCircle2,
} from 'lucide-react';
import { WHO_IS_IT_FOR } from '../data/programData';

const iconMap: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck className="w-6 h-6 text-emerald-400" />,
  PiggyBank: <PiggyBank className="w-6 h-6 text-emerald-400" />,
  CandlestickChart: <CandlestickChart className="w-6 h-6 text-emerald-400" />,
  Briefcase: <Briefcase className="w-6 h-6 text-emerald-400" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-emerald-400" />,
  BarChart2: <BarChart2 className="w-6 h-6 text-emerald-400" />,
  Search: <Search className="w-6 h-6 text-emerald-400" />,
};

interface WhoIsItForProps {
  onOpenCounselingModal?: (persona?: string) => void;
}

export const WhoIsItFor: React.FC<WhoIsItForProps> = () => {
  return (
    <section id="who-is-it-for" className="py-20 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Target Audience</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Who Is This Program For?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Designed for anyone serious about building systematic stock analysis and trading skills without relying on social media noise.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {WHO_IS_IT_FOR.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-950/90 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-6 transition-all duration-200 group flex flex-col justify-start"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {iconMap[item.icon] || <CheckCircle2 className="w-6 h-6 text-emerald-400" />}
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

