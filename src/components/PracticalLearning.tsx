import React, { useState } from 'react';
import {
  LineChart,
  Filter,
  Layers,
  TrendingUp,
  FileText,
  Target,
  Calculator,
  BookOpen,
  Award,
  BarChart2,
  CheckCircle2,
  Plus,
  Trash2,
  ArrowRight,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import { PRACTICAL_ACTIVITIES, SAMPLE_STOCKS } from '../data/programData';
import { StockSample } from '../types';

interface PracticalLearningProps {
  onOpenCounselingModal: () => void;
}

export const PracticalLearning: React.FC<PracticalLearningProps> = ({ onOpenCounselingModal }) => {
  const [activeTab, setActiveTab] = useState<'activities' | 'calculator' | 'screener' | 'journal'>('calculator');

  // Calculator State
  const [capital, setCapital] = useState<number>(200000);
  const [riskPercent, setRiskPercent] = useState<number>(1.5);
  const [entryPrice, setEntryPrice] = useState<number>(1500);
  const [stopLoss, setStopLoss] = useState<number>(1440);
  const [targetPrice, setTargetPrice] = useState<number>(1680);

  // Screener / Watchlist State
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [learnerWatchlist, setLearnerWatchlist] = useState<StockSample[]>([
    SAMPLE_STOCKS[0],
    SAMPLE_STOCKS[1],
  ]);

  // Trading Journal State
  const [journalEntries, setJournalEntries] = useState<
    { id: string; stock: string; setup: string; rr: string; outcome: 'Win' | 'Loss' | 'Open' }[]
  >([
    { id: '1', stock: 'RELIANCE', setup: 'Daily Breakout & Retest', rr: '1:2.5', outcome: 'Win' },
    { id: '2', stock: 'TCS', setup: 'Support Bounce + RSI Divergence', rr: '1:3.0', outcome: 'Win' },
    { id: '3', stock: 'HDFCBANK', setup: 'Range Consolidation Breakout', rr: '1:2.0', outcome: 'Loss' },
  ]);
  const [newStock, setNewStock] = useState('INFY');
  const [newSetup, setNewSetup] = useState('Moving Average Crossover');

  // Calculations
  const maxRiskAmount = (capital * riskPercent) / 100;
  const riskPerShare = entryPrice > stopLoss ? entryPrice - stopLoss : 1;
  const rewardPerShare = targetPrice > entryPrice ? targetPrice - entryPrice : 0;
  const positionQty = Math.max(1, Math.floor(maxRiskAmount / riskPerShare));
  const totalInvestment = positionQty * entryPrice;
  const totalPotentialProfit = positionQty * rewardPerShare;
  const rrRatio = (rewardPerShare / riskPerShare).toFixed(2);

  const handleAddToWatchlist = (stock: StockSample) => {
    if (!learnerWatchlist.find((s) => s.symbol === stock.symbol)) {
      setLearnerWatchlist([...learnerWatchlist, stock]);
    }
  };

  const handleRemoveFromWatchlist = (symbol: string) => {
    setLearnerWatchlist(learnerWatchlist.filter((s) => s.symbol !== symbol));
  };

  const handleAddJournal = () => {
    if (!newStock) return;
    setJournalEntries([
      ...journalEntries,
      {
        id: Date.now().toString(),
        stock: newStock.toUpperCase(),
        setup: newSetup,
        rr: '1:2.5',
        outcome: 'Open',
      },
    ]);
  };

  return (
    <section id="practical" className="py-20 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider">
            <BarChart2 className="w-3.5 h-3.5" />
            <span>Practical Market Application</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Learn by Analysing Real Market Data
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            No dry theory. Every concept is tested against real charts, financial ratios, risk parameters, and trading journals.
          </p>
        </div>

        {/* Interactive Mode Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 bg-slate-900 p-2 rounded-2xl border border-slate-800 max-w-3xl mx-auto">
          <button
            onClick={() => setActiveTab('activities')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'activities'
                ? 'bg-emerald-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>9 Practical Activities</span>
          </button>

          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'calculator'
                ? 'bg-emerald-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Risk-Reward Calculator</span>
          </button>

          <button
            onClick={() => setActiveTab('screener')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'screener'
                ? 'bg-emerald-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Filter className="w-4 h-4" />
            <span>Watchlist Builder</span>
          </button>

          <button
            onClick={() => setActiveTab('journal')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'journal'
                ? 'bg-emerald-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Trading Journal Tool</span>
          </button>
        </div>

        {/* TAB 1: 9 Practical Activities Overview */}
        {activeTab === 'activities' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRACTICAL_ACTIVITIES.map((act) => (
              <div
                key={act.id}
                className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl hover:border-emerald-500/40 transition-all space-y-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {act.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {act.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: Interactive Risk & Position Size Calculator Tool */}
        {activeTab === 'calculator' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-2xl">
            {/* Controls */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>Risk Management Framework</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Position Sizing & Capital Protection Demo
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Test how our position sizing rules protect your capital. Enter your trading parameters below to see automatic risk allocation.
              </p>

              <div className="space-y-3 pt-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300 font-medium">Trading Account Capital (₹)</span>
                    <span className="text-emerald-400 font-mono font-bold">₹{capital.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="25000"
                    max="1000000"
                    step="25000"
                    value={capital}
                    onChange={(e) => setCapital(Number(e.target.value))}
                    className="w-full accent-emerald-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300 font-medium">Max Risk % Per Trade</span>
                    <span className="text-emerald-400 font-mono font-bold">{riskPercent}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="5.0"
                    step="0.5"
                    value={riskPercent}
                    onChange={(e) => setRiskPercent(Number(e.target.value))}
                    className="w-full accent-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">Entry Price (₹)</label>
                    <input
                      type="number"
                      value={entryPrice}
                      onChange={(e) => setEntryPrice(Number(e.target.value))}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-xs font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">Stop Loss (₹)</label>
                    <input
                      type="number"
                      value={stopLoss}
                      onChange={(e) => setStopLoss(Number(e.target.value))}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-rose-400 text-xs font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">Target Price (₹)</label>
                    <input
                      type="number"
                      value={targetPrice}
                      onChange={(e) => setTargetPrice(Number(e.target.value))}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-emerald-400 text-xs font-mono"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Results Dashboard */}
            <div className="lg:col-span-6 bg-slate-950 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                  <span className="text-xs text-slate-400 font-semibold uppercase">Risk:Reward Ratio</span>
                  <span className={`text-xl font-extrabold font-mono ${Number(rrRatio) >= 2 ? 'text-emerald-400' : 'text-amber-400'}`}>
                    1 : {rrRatio}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Max Risk Allowed</span>
                    <span className="text-base font-bold text-rose-400 font-mono">₹{maxRiskAmount.toLocaleString()}</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Quantity to Buy</span>
                    <span className="text-base font-bold text-emerald-400 font-mono">{positionQty} shares</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Capital Allocated</span>
                    <span className="text-base font-bold text-white font-mono">₹{totalInvestment.toLocaleString()}</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Potential Reward</span>
                    <span className="text-base font-bold text-teal-300 font-mono">₹{totalPotentialProfit.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Key Risk Management Takeaway:</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  By adhering strictly to 1-2% risk per trade, even a string of 5 consecutive losses reduces your capital by less than 10%, keeping you in the market long-term.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Stock Screening & Learner Watchlist Builder */}
        {activeTab === 'screener' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-white">Stock Screening & Watchlist Building</h3>
                <p className="text-xs text-slate-400">Filter quality stocks using valuation and price trend filters learned in Level 1 & 2.</p>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-400">Filter Sector:</span>
                <select
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-white font-medium outline-none focus:border-emerald-500"
                >
                  <option value="All">All Sectors</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Energy & Retail">Energy & Retail</option>
                  <option value="Financial Services">Financial Services</option>
                  <option value="Automotive">Automotive</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Available Stock Candidates */}
              <div className="lg:col-span-7 space-y-3">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Sample Market Candidates
                </span>
                <div className="space-y-2">
                  {SAMPLE_STOCKS.filter((s) => selectedSector === 'All' || s.sector === selectedSector).map((stock) => (
                    <div
                      key={stock.symbol}
                      className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between gap-3 hover:border-slate-700 transition-colors"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-sm">{stock.symbol}</span>
                          <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">{stock.sector}</span>
                          <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-mono">{stock.signal}</span>
                        </div>
                        <div className="text-xs text-slate-400 mt-1 flex gap-3">
                          <span>Price: <strong className="text-white">₹{stock.price}</strong></span>
                          <span>P/E: <strong className="text-white">{stock.pe}</strong></span>
                          <span>RSI: <strong className="text-white">{stock.rsi}</strong></span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleAddToWatchlist(stock)}
                        className="px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-slate-950 font-bold text-xs border border-emerald-500/30 transition-all flex items-center gap-1 shrink-0"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* My Learner Watchlist */}
              <div className="lg:col-span-5 bg-slate-950 p-5 rounded-2xl border border-slate-800/80 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>My Learner Watchlist ({learnerWatchlist.length})</span>
                  </span>
                </div>

                {learnerWatchlist.length === 0 ? (
                  <p className="text-xs text-slate-500 italic py-6 text-center">
                    Your watchlist is empty. Add candidates from the left pane!
                  </p>
                ) : (
                  <div className="space-y-2">
                    {learnerWatchlist.map((stk) => (
                      <div
                        key={stk.symbol}
                        className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex items-center justify-between text-xs"
                      >
                        <div>
                          <span className="font-bold text-white">{stk.symbol}</span>
                          <span className="text-slate-400 block text-[11px]">Supp: ₹{stk.support} | Res: ₹{stk.resistance}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-400 font-mono font-bold">₹{stk.price}</span>
                          <button
                            onClick={() => handleRemoveFromWatchlist(stk.symbol)}
                            className="p-1 text-slate-500 hover:text-rose-400"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Interactive Trading Journal Tool */}
        {activeTab === 'journal' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-white">Trading Journal & Discipline Tracker</h3>
                <p className="text-xs text-slate-400">Track execution setup quality, risk-reward compliance, and behavioral logs.</p>
              </div>
            </div>

            {/* Quick Add Trade Bar */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-wrap items-center gap-3">
              <input
                type="text"
                placeholder="Stock Symbol (e.g., INFY)"
                value={newStock}
                onChange={(e) => setNewStock(e.target.value)}
                className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white outline-none focus:border-emerald-500 font-mono"
              />
              <input
                type="text"
                placeholder="Setup Strategy (e.g., Breakout)"
                value={newSetup}
                onChange={(e) => setNewSetup(e.target.value)}
                className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-white outline-none focus:border-emerald-500 flex-1 min-w-[200px]"
              />
              <button
                onClick={handleAddJournal}
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1"
              >
                <Plus className="w-4 h-4" />
                <span>Log Trade Setup</span>
              </button>
            </div>

            {/* Journal Entries Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 font-semibold uppercase text-[10px] border-b border-slate-800">
                  <tr>
                    <th className="p-3">Stock</th>
                    <th className="p-3">Strategy / Setup</th>
                    <th className="p-3">R:R Target</th>
                    <th className="p-3">Status / Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {journalEntries.map((j) => (
                    <tr key={j.id} className="hover:bg-slate-950/50">
                      <td className="p-3 font-bold text-white font-mono">{j.stock}</td>
                      <td className="p-3 text-slate-300">{j.setup}</td>
                      <td className="p-3 font-mono text-emerald-400 font-bold">{j.rr}</td>
                      <td className="p-3">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            j.outcome === 'Win'
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                              : j.outcome === 'Loss'
                              ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                              : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                          }`}
                        >
                          {j.outcome}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Section Bottom Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenCounselingModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all"
          >
            <span>Learn These Tools in Our 120-Day Program</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
