import React, { useState } from 'react';
import {
  PhoneCall,
  BookOpenCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Award,
} from 'lucide-react';
import { HERO_DATA } from '../data/programData';
import { SpireLogo } from './SpireLogo';

interface HeroProps {
  onOpenCounselingModal: () => void;
  onScrollToCurriculum: () => void;
  onScrollToLeadForm: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenCounselingModal,
  onScrollToCurriculum,
  onScrollToLeadForm,
}) => {
  const [activeChartTab, setActiveChartTab] = useState<'chart' | 'calculator'>('chart');
  const [samplePrice, setSamplePrice] = useState(2500);
  const [sampleSL, setSampleSL] = useState(2400);
  const [sampleTarget, setSampleTarget] = useState(2700);

  const riskAmount = samplePrice - sampleSL;
  const rewardAmount = sampleTarget - samplePrice;
  const rrRatio = riskAmount > 0 ? (rewardAmount / riskAmount).toFixed(2) : '0';

  return (
    <section id="overview" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-slate-950">
      {/* Subtle Grid Ambient Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      
      {/* Soft Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-teal-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Hook & Action CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* SPIRE Logo Badge & Trust Pill */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="p-1 rounded-2xl bg-slate-900/90 border border-amber-500/30 shadow-lg shadow-amber-500/10 inline-flex items-center gap-2 pr-3">
                <SpireLogo variant="badge" size="sm" />
                <span className="text-xs font-bold text-amber-300 font-serif tracking-wide">
                  SPIRE STOCK ACADEMY
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{HERO_DATA.trustLine}</span>
              </div>
            </div>

            {/* Main Hook Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Stop Following Stock Market Tips.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Learn How to Analyse the Market.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {HERO_DATA.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenCounselingModal}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 group"
              >
                <PhoneCall className="w-4 h-4 stroke-[2.5]" />
                <span>{HERO_DATA.primaryCta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onScrollToCurriculum}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700/80 hover:border-slate-600 transition-all flex items-center justify-center gap-2"
              >
                <BookOpenCheck className="w-4 h-4 text-emerald-400" />
                <span>{HERO_DATA.secondaryCta}</span>
              </button>
            </div>

            {/* Trust Bullet Items */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-800/80 text-xs text-slate-400">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Tip-dependency</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Real Company Analysis</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1:2+ Risk-Reward Focus</span>
              </div>
            </div>

            {/* Key Stats Counter Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {HERO_DATA.stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-3 text-center">
                  <div className="text-lg font-bold text-white">{stat.value}</div>
                  <div className="text-[11px] text-slate-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Live Interactive Interactive Preview Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Card Header & Tabs */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-slate-200 tracking-wide uppercase">
                    Practical Skill Preview
                  </span>
                </div>
                <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800 text-[11px]">
                  <button
                    onClick={() => setActiveChartTab('chart')}
                    className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                      activeChartTab === 'chart'
                        ? 'bg-emerald-500 text-slate-950 font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Chart Setup
                  </button>
                  <button
                    onClick={() => setActiveChartTab('calculator')}
                    className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                      activeChartTab === 'calculator'
                        ? 'bg-emerald-500 text-slate-950 font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Risk Tool
                  </button>
                </div>
              </div>

              {activeChartTab === 'chart' ? (
                <div className="space-y-4">
                  {/* Candlestick & Breakout Diagram Simulation */}
                  <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 relative">
                    <div className="flex justify-between items-center text-xs mb-2 text-slate-400">
                      <span className="font-semibold text-white">NSE: RELIANCE (Daily Breakout)</span>
                      <span className="text-emerald-400 font-mono font-bold">₹2,980.00 (+2.4%)</span>
                    </div>

                    {/* Simulated Candlestick Visualization */}
                    <div className="h-40 w-full relative flex items-end justify-between px-2 pt-6 pb-2 bg-slate-900/60 rounded-lg border border-slate-800/60 overflow-hidden">
                      {/* Resistance Line */}
                      <div className="absolute top-12 left-0 right-0 border-b-2 border-dashed border-emerald-500/60 z-10 flex items-center justify-between px-2">
                        <span className="text-[10px] bg-emerald-950/90 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/30">
                          Breakout Level: ₹2,950
                        </span>
                        <span className="text-[10px] text-emerald-400 font-mono">Resistance</span>
                      </div>

                      {/* Support Line */}
                      <div className="absolute bottom-6 left-0 right-0 border-b border-dashed border-slate-700 z-10 flex items-center justify-between px-2">
                        <span className="text-[10px] bg-slate-900 text-slate-400 px-1.5 py-0.5 rounded">
                          Support Zone: ₹2,880
                        </span>
                      </div>

                      {/* Simulated Candles */}
                      {[
                        { o: 40, h: 60, l: 30, c: 55, green: true },
                        { o: 55, h: 58, l: 35, c: 42, green: false },
                        { o: 42, h: 65, l: 40, c: 60, green: true },
                        { o: 60, h: 70, l: 50, c: 52, green: false },
                        { o: 52, h: 78, l: 50, c: 75, green: true },
                        { o: 75, h: 82, l: 70, c: 72, green: false },
                        { o: 72, h: 95, l: 71, c: 92, green: true, breakout: true },
                      ].map((candle, i) => (
                        <div key={i} className="flex flex-col items-center justify-end h-full z-20 w-6">
                          <div
                            className={`w-0.5 ${candle.green ? 'bg-emerald-400' : 'bg-rose-400'}`}
                            style={{ height: `${candle.h - candle.l}%` }}
                          />
                          <div
                            className={`w-3.5 rounded-sm ${
                              candle.green ? 'bg-emerald-500' : 'bg-rose-500'
                            } ${candle.breakout ? 'ring-2 ring-emerald-300 ring-offset-1 ring-offset-slate-950' : ''}`}
                            style={{
                              height: `${Math.max(12, Math.abs(candle.c - candle.o))}%`,
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
                      <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                        <span className="text-slate-400 block">Technical Signal</span>
                        <span className="text-emerald-400 font-bold">Bullish Retest Confirmed</span>
                      </div>
                      <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                        <span className="text-slate-400 block">Risk:Reward</span>
                        <span className="text-white font-bold font-mono">1 : 2.8 Ratio</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    Learn to spot real price action setups, volume confirmation, and precise stop-loss triggers without reliance on tips.
                  </p>
                </div>
              ) : (
                /* Interactive Risk-Reward Mini Calculator */
                <div className="space-y-3 text-xs">
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2.5">
                    <div className="flex justify-between items-center text-slate-300">
                      <span className="font-semibold">Quick Risk Calculator Demo</span>
                      <span className="text-emerald-400 font-mono font-bold">R:R = 1:{rrRatio}</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-1">Entry Price (₹)</label>
                        <input
                          type="number"
                          value={samplePrice}
                          onChange={(e) => setSamplePrice(Number(e.target.value))}
                          className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white font-mono text-xs focus:border-emerald-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-1">Stop Loss (₹)</label>
                        <input
                          type="number"
                          value={sampleSL}
                          onChange={(e) => setSampleSL(Number(e.target.value))}
                          className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-rose-400 font-mono text-xs focus:border-rose-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-slate-400 block mb-1">Target (₹)</label>
                        <input
                          type="number"
                          value={sampleTarget}
                          onChange={(e) => setSampleTarget(Number(e.target.value))}
                          className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-emerald-400 font-mono text-xs focus:border-emerald-500 outline-none"
                        />
                      </div>
                    </div>

                    <div className="p-2 bg-slate-900/80 rounded-lg flex justify-between items-center text-[11px] font-mono">
                      <span className="text-rose-400">Risk: ₹{riskAmount} / share</span>
                      <span className="text-emerald-400">Profit Target: ₹{rewardAmount} / share</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400">
                    Master position sizing, capital protection & exact risk management principles in Level 1 & 2.
                  </p>
                </div>
              )}

              {/* Direct Quick Lead Action CTA */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                <div className="text-[11px] text-slate-400">
                  <span className="text-white font-semibold">Next Mentorship Batch:</span> Enrolling Now
                </div>
                <button
                  onClick={onScrollToLeadForm}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow"
                >
                  <span>Get Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
