import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Download,
  Printer,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
  FileText,
  CheckCircle2,
  Layers,
  PhoneCall,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { downloadCurriculumPdf } from '../utils/generateCurriculumPdf';
import { SpireLogo } from './SpireLogo';

interface CurriculumPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCounselingModal: (selectedLevel?: string) => void;
}

export const CurriculumPdfModal: React.FC<CurriculumPdfModalProps> = ({
  isOpen,
  onClose,
  onOpenCounselingModal,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'single' | 'continuous'>('single');
  const [zoom, setZoom] = useState<number>(100);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const totalPages = 8;

  const handleDownload = () => {
    setIsDownloading(true);
    try {
      downloadCurriculumPdf('Stock-Market-Mastery-Curriculum.pdf');
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (err) {
      console.error('Download error', err);
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const pageNavLabels = [
    { page: 1, title: 'Overview & Philosophy' },
    { page: 2, title: 'Level 1: Modules 1–5' },
    { page: 3, title: 'Level 1: Modules 6–9 & Projects' },
    { page: 4, title: 'Level 2: Modules 1–7' },
    { page: 5, title: 'Level 2: Module 8 & Setup' },
    { page: 6, title: 'Level 3: Modules 1–7' },
    { page: 7, title: 'Level 3: Modules 8–9 & Projects' },
    { page: 8, title: 'Outcomes & Disclaimer' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-2 sm:p-4 overflow-hidden animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-6xl h-[94vh] flex flex-col shadow-2xl overflow-hidden relative">
        
        {/* Top Control Bar */}
        <div className="px-4 sm:px-6 py-3 border-b border-slate-800 bg-slate-950 flex flex-wrap items-center justify-between gap-3 shrink-0">
          
          {/* Document Title & Badge */}
          <div className="flex items-center gap-3">
            <SpireLogo variant="badge" size="sm" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white tracking-wide">
                  Stock Market Mastery Program — Curriculum PDF
                </h3>
                <span className="hidden sm:inline-flex px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 rounded-full">
                  Official Syllabus
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden xs:block">
                8-Page Complete Day-by-Day Learning Roadmap & Modules
              </p>
            </div>
          </div>

          {/* Quick Action Toolbar */}
          <div className="flex items-center gap-2 ml-auto">
            
            {/* View Mode Toggle */}
            <div className="hidden md:flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-xs">
              <button
                onClick={() => setViewMode('single')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors ${
                  viewMode === 'single'
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Page View
              </button>
              <button
                onClick={() => setViewMode('continuous')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors ${
                  viewMode === 'continuous'
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Continuous
              </button>
            </div>

            {/* Zoom Controls */}
            <div className="hidden lg:flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-lg px-1 py-0.5 text-xs text-slate-300">
              <button
                onClick={() => setZoom((z) => Math.max(75, z - 10))}
                className="p-1 hover:text-white rounded hover:bg-slate-800"
                title="Zoom out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] px-1 font-mono">{zoom}%</span>
              <button
                onClick={() => setZoom((z) => Math.min(130, z + 10))}
                className="p-1 hover:text-white rounded hover:bg-slate-800"
                title="Zoom in"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Download PDF Button */}
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 text-xs font-bold shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-slate-950" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </>
              )}
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 transition-colors"
              title="Print Curriculum"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden md:inline">Print</span>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
              title="Close Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Middle Section: Sidebar + PDF Pages View */}
        <div className="flex-1 flex overflow-hidden bg-slate-950 relative">
          
          {/* Left Navigation Sidebar */}
          <aside className="w-56 border-r border-slate-800/80 bg-slate-900/60 p-3 hidden md:flex flex-col gap-1.5 overflow-y-auto shrink-0">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 flex items-center justify-between">
              <span>Syllabus Pages</span>
              <span className="text-emerald-400">8 Pages</span>
            </div>

            {pageNavLabels.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  setCurrentPage(item.page);
                  if (viewMode === 'continuous') {
                    const el = document.getElementById(`pdf-page-${item.page}`);
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`w-full text-left p-2 rounded-xl text-xs transition-all flex items-start gap-2.5 ${
                  currentPage === item.page
                    ? 'bg-emerald-500/15 border border-emerald-500/40 text-white font-bold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 ${
                    currentPage === item.page
                      ? 'bg-emerald-500 text-slate-950'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {item.page}
                </div>
                <div className="truncate">
                  <div className="truncate text-[11px] font-semibold">{item.title}</div>
                  <div className="text-[10px] text-slate-400">Page {item.page} of 8</div>
                </div>
              </button>
            ))}

            <div className="mt-auto pt-3 border-t border-slate-800 space-y-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenCounselingModal('Full Curriculum Syllabus Discussion');
                }}
                className="w-full py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Book Strategy Call</span>
              </button>
            </div>
          </aside>

          {/* Document Content View Area */}
          <main
            ref={containerRef}
            className="flex-1 overflow-y-auto p-4 sm:p-8 flex flex-col items-center bg-slate-950/90 print:p-0 print:bg-white"
          >
            <div
              style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
              className="transition-transform duration-150 ease-out space-y-8 w-full max-w-[780px]"
            >
              {viewMode === 'single' ? (
                <RenderPdfPage pageNumber={currentPage} />
              ) : (
                Array.from({ length: totalPages }).map((_, idx) => (
                  <div key={idx + 1} id={`pdf-page-${idx + 1}`} className="w-full">
                    <RenderPdfPage pageNumber={idx + 1} />
                  </div>
                ))
              )}
            </div>
          </main>

        </div>

        {/* Bottom Pagination & Navigation Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-xs text-slate-300 shrink-0">
          
          <div className="flex items-center gap-3">
            <span className="text-slate-400">
              Showing <strong className="text-white">Page {currentPage}</strong> of 8
            </span>
            <span className="hidden sm:inline text-slate-400">•</span>
            <span className="hidden sm:inline text-emerald-400 font-medium">
              3-Level Practical Curriculum
            </span>
          </div>

          {/* Page Navigator */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-800 transition-colors"
              title="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx + 1}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`w-7 h-7 rounded-lg text-xs font-semibold transition-all ${
                    currentPage === idx + 1
                      ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-800 transition-colors"
              title="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Secondary Action */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="text-emerald-400 hover:text-emerald-300 font-semibold underline-offset-4 hover:underline text-xs flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save Offline Copy</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

// ==========================================
// Individual Page Document Renderer (Matching PDF Exactly)
// ==========================================
const RenderPdfPage: React.FC<{ pageNumber: number }> = ({ pageNumber }) => {
  return (
    <div className="bg-white text-slate-900 rounded-xl shadow-2xl p-8 sm:p-12 min-h-[920px] font-sans relative border border-slate-200 print:shadow-none print:border-none print:m-0 flex flex-col justify-between select-text">
      
      {/* Header Stamp */}
      <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-100 pb-3 mb-6">
        <span className="font-medium tracking-wide">Stock Market Mastery Program — Curriculum</span>
        <span className="font-semibold">Page {pageNumber}</span>
      </div>

      {/* Main Page Content */}
      <div className="flex-1 space-y-6">
        
        {/* PAGE 1 */}
        {pageNumber === 1 && (
          <div className="space-y-8 pt-4">
            <div className="text-center space-y-2 py-4">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                STOCK MARKET
              </h1>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                MASTERY PROGRAM
              </h2>
              <p className="text-slate-600 font-medium text-sm pt-1">
                Learn. Analyse. Trade. Manage Risk.
              </p>
            </div>

            {/* Table */}
            <div className="border-t border-b border-slate-200 py-3 space-y-2.5 text-xs text-slate-800">
              <div className="grid grid-cols-12 gap-2 py-1.5 border-b border-slate-100">
                <span className="col-span-3 font-bold text-blue-900">PROGRAM</span>
                <span className="col-span-9 font-medium text-slate-700">3-Level Structured Market Education</span>
              </div>
              <div className="grid grid-cols-12 gap-2 py-1.5 border-b border-slate-100">
                <span className="col-span-3 font-bold text-blue-900">LEVEL 1</span>
                <span className="col-span-9 font-medium text-slate-700">Stock Market Foundations — 30 Days</span>
              </div>
              <div className="grid grid-cols-12 gap-2 py-1.5 border-b border-slate-100">
                <span className="col-span-3 font-bold text-blue-900">LEVEL 2</span>
                <span className="col-span-9 font-medium text-slate-700">Technical Trading & Market Analysis — 30 Days</span>
              </div>
              <div className="grid grid-cols-12 gap-2 py-1.5 border-b border-slate-100">
                <span className="col-span-3 font-bold text-blue-900">LEVEL 3</span>
                <span className="col-span-9 font-medium text-slate-700">Professional Stock Market Mastery — 60 Days</span>
              </div>
              <div className="grid grid-cols-12 gap-2 py-1.5">
                <span className="col-span-3 font-bold text-blue-900">FORMAT</span>
                <span className="col-span-9 font-medium text-slate-700">Practical, structured learning with market-analysis exercises</span>
              </div>
            </div>

            {/* Program Objective */}
            <div className="space-y-2 pt-2">
              <h3 className="text-xl font-bold text-blue-600">Program Objective</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Build practical knowledge and disciplined decision-making skills across stock market fundamentals, technical analysis, fundamental analysis, risk management, trading psychology and portfolio thinking. The program progresses from beginner concepts to advanced market analysis.
              </p>
            </div>

            {/* Learning Philosophy */}
            <div className="space-y-2 pt-2">
              <h3 className="text-xl font-bold text-blue-600">Learning Philosophy</h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Learn before you trade. Analyse before you act. Manage risk before you seek returns. The program is designed around structured education, practical exercises and repeatable analysis processes—not tips or guaranteed-profit promises.
              </p>
            </div>
          </div>
        )}

        {/* PAGE 2 */}
        {pageNumber === 2 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-1">
                LEVEL 1 — Stock Market Foundations
              </h2>
              <p className="text-xs text-slate-600">
                <strong className="text-slate-800">Duration: 30 Days</strong> | <em>From Market Basics to Confident Decision-Making</em>
              </p>
            </div>

            <PdfModuleSection
              title="Module 1 — Understanding the Stock Market"
              items={[
                'What is the stock market?',
                'How the Indian stock market works',
                'NSE and BSE',
                'Equity, shares and stocks',
                'Primary vs secondary market',
                'IPO basics',
                'Demat and trading accounts',
                'Brokers and market intermediaries',
                'Market participants',
                'Trading sessions',
                'Market orders, limit orders and stop-loss orders',
                'Bid, ask, spread, volume and liquidity',
              ]}
            />

            <PdfModuleSection
              title="Module 2 — Candlestick Patterns"
              items={[
                'Open, High, Low, Close (OHLC)',
                'Bullish and bearish candles',
                'Candle body and wick',
                'Doji, Hammer and Inverted Hammer',
                'Shooting Star and Hanging Man',
                'Engulfing patterns',
                'Morning Star and Evening Star',
                'Inside Bar and Marubozu',
                'Reading candlestick combinations',
              ]}
            />

            <PdfModuleSection
              title="Module 3 — Support & Resistance"
              items={[
                'Understanding support and resistance',
                'Horizontal levels',
                'Previous highs and lows',
                'Breakouts and breakdowns',
                'False breakouts',
                'Retests',
                'Role reversal: support becoming resistance and vice versa',
              ]}
            />

            <PdfModuleSection
              title="Module 4 — Trend Analysis"
              items={[
                'Uptrend, downtrend and sideways markets',
                'Higher High, Higher Low, Lower High, Lower Low',
                'Trendlines',
                'Trend channels',
                'Trend continuation and reversal',
              ]}
            />

            <PdfModuleSection
              title="Module 5 — Risk Management"
              items={[
                'Risk vs reward',
                'Capital protection',
                'Position sizing',
                'Stop-loss and target setting',
                'Risk per trade',
                'Risk-to-reward ratio',
                'Maximum daily and weekly loss concepts',
                'Avoiding overtrading and revenge trading',
                'Trading plan vs impulse decisions',
              ]}
            />

            <div>
              <h4 className="text-xs font-bold text-slate-900">Module 6 — Trading Psychology</h4>
            </div>
          </div>
        )}

        {/* PAGE 3 */}
        {pageNumber === 3 && (
          <div className="space-y-5">
            <div className="space-y-1">
              <ul className="text-xs text-slate-700 space-y-1 pl-1">
                <li>• Fear, greed and FOMO</li>
                <li>• Overconfidence and loss aversion</li>
                <li>• Patience and discipline</li>
                <li>• Managing drawdowns</li>
                <li>• Following a trading plan</li>
                <li>• Building consistent habits</li>
              </ul>
            </div>

            <PdfModuleSection
              title="Module 7 — Position Sizing & Trade Planning"
              items={[
                'Capital allocation',
                'Position-size calculation',
                'Entry, stop-loss and target',
                'Risk amount and reward potential',
                'Trade setup checklist',
                'Pre-trade and post-trade review',
              ]}
            />

            <PdfModuleSection
              title="Module 8 — Stock Screeners"
              items={[
                'What is stock screening?',
                'Price, market capitalization and volume filters',
                'Sector and business filters',
                'Growth and profitability filters',
                'Valuation and technical filters',
                'Creating a basic watchlist',
              ]}
            />

            <PdfModuleSection
              title="Module 9 — Fundamental Analysis Basics"
              items={[
                'What is fundamental analysis?',
                'Revenue, profit and EPS',
                'Debt and cash flow',
                'ROE and ROCE',
                'Margins',
                'P/E and P/B',
                'Dividends',
                'Business quality and competitive advantage',
                'Basic valuation concepts',
              ]}
            />

            {/* Practical Learning */}
            <div className="pt-2 space-y-2">
              <h3 className="text-base font-bold text-slate-900">Practical Learning</h3>
              <ul className="text-xs text-slate-700 space-y-1 pl-1">
                <li>• Identify candlestick patterns on historical charts</li>
                <li>• Mark support and resistance on real charts</li>
                <li>• Identify market trends</li>
                <li>• Create a 10-stock watchlist</li>
                <li>• Prepare a basic stock analysis</li>
                <li>• Create a personal trade-planning checklist</li>
              </ul>
            </div>

            <div className="pt-2">
              <h4 className="text-xs font-bold text-slate-900">
                Final Project: Build Your First Stock Analysis Report
              </h4>
            </div>
          </div>
        )}

        {/* PAGE 4 */}
        {pageNumber === 4 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-1">
                LEVEL 2 — Technical Trading & Market Analysis
              </h2>
              <p className="text-xs text-slate-600">
                <strong className="text-slate-800">Duration: 30 Days</strong> | <em>Move from Reading Charts to Building Structured Setups</em>
              </p>
            </div>

            <PdfModuleSection
              title="Module 1 — Advanced Chart Analysis"
              items={[
                'Market structure and price action',
                'Multiple-timeframe analysis',
                'Trend continuation and reversal structures',
                'Breakouts, breakdowns and retests',
                'Demand and supply zones',
                'Key levels and confluence',
              ]}
            />

            <PdfModuleSection
              title="Module 2 — Technical Indicators"
              items={[
                'Why indicators are used',
                'Moving averages',
                'RSI',
                'MACD',
                'Bollinger Bands',
                'Indicator combinations',
                'Avoiding indicator overload',
              ]}
            />

            <PdfModuleSection
              title="Module 3 — Volume Analysis"
              items={[
                'Understanding volume',
                'Volume and price relationship',
                'Volume confirmation',
                'Volume spikes',
                'Breakout validation',
                'Basic volume-based decision frameworks',
              ]}
            />

            <PdfModuleSection
              title="Module 4 — Chart Patterns"
              items={[
                'Triangles',
                'Flags and Pennants',
                'Head and Shoulders',
                'Double Top and Double Bottom',
                'Wedges',
                'Pattern confirmation and invalidation',
              ]}
            />

            <PdfModuleSection
              title="Module 5 — Entry & Exit Frameworks"
              items={[
                'Defining a trade setup',
                'Entry confirmation',
                'Stop-loss placement',
                'Target selection',
                'Risk-to-reward planning',
                'Trade invalidation',
                'Partial exits and trade management concepts',
              ]}
            />

            <PdfModuleSection
              title="Module 6 — Strategy Development"
              items={[
                'From idea to trading rules',
                'Setup criteria',
                'Entry and exit rules',
                'Risk rules',
                'Market conditions',
                'Avoiding overfitting',
              ]}
            />

            <div>
              <h4 className="text-xs font-bold text-slate-900 mb-1">Module 7 — Backtesting Basics</h4>
              <ul className="text-xs text-slate-700 space-y-1 pl-1">
                <li>• What is backtesting?</li>
                <li>• Historical testing</li>
              </ul>
            </div>
          </div>
        )}

        {/* PAGE 5 */}
        {pageNumber === 5 && (
          <div className="space-y-5">
            <div className="space-y-1">
              <ul className="text-xs text-slate-700 space-y-1 pl-1">
                <li>• Recording trades</li>
                <li>• Win rate and expectancy concepts</li>
                <li>• Drawdown</li>
                <li>• Limitations of historical results</li>
              </ul>
            </div>

            <PdfModuleSection
              title="Module 8 — Trading Journal"
              items={[
                'Why journaling matters',
                'Trade screenshots',
                'Entry and exit reasoning',
                'Emotional state',
                'Mistake tracking',
                'Weekly and monthly review',
              ]}
            />

            {/* Practical Learning */}
            <div className="pt-3 space-y-2">
              <h3 className="text-base font-bold text-slate-900">Practical Learning</h3>
              <ul className="text-xs text-slate-700 space-y-1 pl-1">
                <li>• Perform multi-timeframe chart analysis</li>
                <li>• Use indicators with price action</li>
                <li>• Validate breakouts using volume</li>
                <li>• Build a rule-based trade setup</li>
                <li>• Backtest a simple strategy</li>
                <li>• Create and review a trading journal</li>
              </ul>
            </div>

            <div className="pt-3">
              <h4 className="text-xs font-bold text-slate-900">
                Final Project: Build and Document a Rule-Based Trading Setup
              </h4>
            </div>
          </div>
        )}

        {/* PAGE 6 */}
        {pageNumber === 6 && (
          <div className="space-y-5">
            <div>
              <h2 className="text-2xl font-bold text-blue-600 mb-1">
                LEVEL 3 — Professional Stock Market Mastery
              </h2>
              <p className="text-xs text-slate-600">
                <strong className="text-slate-800">Duration: 60 Days</strong> | <em>Build an Integrated Trading & Investment Analysis Framework</em>
              </p>
            </div>

            <PdfModuleSection
              title="Module 1 — Advanced Technical Analysis"
              items={[
                'Advanced market structure',
                'Price-action confluence',
                'Multi-timeframe trade planning',
                'Advanced breakout and reversal analysis',
                'Trade management frameworks',
              ]}
            />

            <PdfModuleSection
              title="Module 2 — Advanced Fundamental Analysis"
              items={[
                'Reading financial statements',
                'Income statement',
                'Balance sheet',
                'Cash-flow statement',
                'Earnings quality',
                'Profitability and efficiency analysis',
                'Debt and capital structure',
              ]}
            />

            <PdfModuleSection
              title="Module 3 — Valuation"
              items={[
                'Understanding valuation',
                'Relative valuation',
                'P/E and P/B analysis',
                'EV/EBITDA concepts',
                'Growth vs valuation',
                'Margin of safety concept',
                'Valuation limitations',
              ]}
            />

            <PdfModuleSection
              title="Module 4 — Sector & Business Analysis"
              items={[
                'Industry structure',
                'Sector cycles',
                'Competitive positioning',
                'Business-model analysis',
                'Management and governance considerations',
                'Comparing companies within a sector',
              ]}
            />

            <PdfModuleSection
              title="Module 5 — Portfolio Construction"
              items={[
                'Investment objectives',
                'Diversification',
                'Asset allocation concepts',
                'Position concentration',
                'Portfolio risk',
                'Rebalancing concepts',
                'Monitoring portfolio performance',
              ]}
            />

            <PdfModuleSection
              title="Module 6 — Derivatives Fundamentals"
              items={[
                'What are derivatives?',
                'Futures basics',
                'Options basics',
                'Calls and puts',
                'Strike price and expiry',
                'Option premium',
                'Basic payoff concepts',
                'Leverage and risk',
                'When derivatives require additional caution',
              ]}
            />

            <div>
              <h4 className="text-xs font-bold text-slate-900">Module 7 — Advanced Risk Management</h4>
            </div>
          </div>
        )}

        {/* PAGE 7 */}
        {pageNumber === 7 && (
          <div className="space-y-5">
            <div className="space-y-1">
              <ul className="text-xs text-slate-700 space-y-1 pl-1">
                <li>• Portfolio-level risk</li>
                <li>• Position sizing across multiple trades</li>
                <li>• Drawdown management</li>
                <li>• Correlation and concentration</li>
                <li>• Risk limits</li>
                <li>• Scenario planning</li>
              </ul>
            </div>

            <PdfModuleSection
              title="Module 8 — Trading Psychology & Performance"
              items={[
                'Decision-making under uncertainty',
                'Handling winning and losing streaks',
                'Process over outcome',
                'Performance review',
                'Behavioural mistakes',
                'Building long-term discipline',
              ]}
            />

            <PdfModuleSection
              title="Module 9 — Strategy & Performance Review"
              items={[
                'Strategy documentation',
                'Performance metrics',
                'Expectancy',
                'Risk-adjusted thinking',
                'Reviewing strengths and weaknesses',
                'Continuous improvement framework',
              ]}
            />

            {/* Practical Learning */}
            <div className="pt-2 space-y-2">
              <h3 className="text-base font-bold text-slate-900">Practical Learning</h3>
              <ul className="text-xs text-slate-700 space-y-1 pl-1">
                <li>• Analyse a company using financial statements</li>
                <li>• Compare companies within a sector</li>
                <li>• Build a sample diversified portfolio framework</li>
                <li>• Evaluate a basic derivatives scenario</li>
                <li>• Create a portfolio risk checklist</li>
                <li>• Complete a structured performance review</li>
              </ul>
            </div>

            <div className="pt-2">
              <h4 className="text-xs font-bold text-slate-900">
                Final Project: Build a Complete Market Analysis & Portfolio Framework
              </h4>
            </div>
          </div>
        )}

        {/* PAGE 8 */}
        {pageNumber === 8 && (
          <div className="space-y-6 pt-2">
            
            {/* PROGRAM OUTCOMES */}
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-blue-600">PROGRAM OUTCOMES</h2>
              <ul className="text-xs text-slate-700 space-y-1.5 pl-1">
                <li>• Understand how the Indian stock market and trading ecosystem works.</li>
                <li>• Read and interpret candlestick charts, trends, support and resistance.</li>
                <li>• Use technical and fundamental analysis frameworks.</li>
                <li>• Build stock watchlists and structured analysis reports.</li>
                <li>• Plan trades with defined entries, exits and risk controls.</li>
                <li>• Understand position sizing, drawdowns and risk-to-reward.</li>
                <li>• Develop disciplined trading and investing habits.</li>
                <li>• Maintain a trading journal and review performance.</li>
                <li>• Understand portfolio construction and diversification concepts.</li>
                <li>• Develop a repeatable market-analysis process.</li>
              </ul>
            </div>

            {/* WHO THIS PROGRAM IS FOR */}
            <div className="space-y-2 pt-2">
              <h2 className="text-lg font-bold text-blue-600">WHO THIS PROGRAM IS FOR</h2>
              <p className="text-xs text-slate-700 leading-relaxed">
                Complete beginners • First-time investors • Aspiring traders • Working professionals • Students • Learners who want structured knowledge of charts, company fundamentals, risk management and market analysis.
              </p>
            </div>

            {/* IMPORTANT EDUCATIONAL DISCLAIMER */}
            <div className="space-y-2 pt-4 border-t border-slate-100">
              <h2 className="text-base font-bold text-blue-600">IMPORTANT EDUCATIONAL DISCLAIMER</h2>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                This program is for educational purposes only. It does not provide guaranteed returns, guaranteed profits, stock tips, investment recommendations or assurance of financial outcomes. Trading and investing in securities involve market risk, and derivatives can involve substantially higher risk. Learners should assess their own financial situation and risk tolerance and make independent decisions where appropriate.
              </p>
            </div>

          </div>
        )}

      </div>

      {/* Page Footer */}
      <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100 pt-3 mt-6">
        <span className="font-medium">Stock Market Mastery Program — Curriculum</span>
        <span className="font-semibold">Page {pageNumber}</span>
      </div>

    </div>
  );
};

const PdfModuleSection: React.FC<{ title: string; items: string[] }> = ({ title, items }) => {
  return (
    <div className="space-y-1">
      <h4 className="text-xs font-bold text-slate-900">{title}</h4>
      <ul className="text-xs text-slate-700 space-y-0.5 pl-1">
        {items.map((item, idx) => (
          <li key={idx}>• {item}</li>
        ))}
      </ul>
    </div>
  );
};
