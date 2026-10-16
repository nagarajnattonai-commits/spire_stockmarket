import { CurriculumLevel, PracticalActivity, StockSample } from '../types';

export const PROGRAM_INFO = {
  programName: 'SPIRE Stock Academy',
  tagline: 'Learn with logic, invest with confidence.',
  motto: 'Stop Following Stock Market Tips. Learn How to Analyse the Market.',
  pageType: 'Lead Generation Landing Page',
  primaryGoal: 'Generate qualified leads for stock market education program',
  disclaimer:
    'This program is for educational purposes only. It does not provide guaranteed returns, stock tips, investment recommendations or assurance of profits. Investments and trading in securities are subject to market risks. Learners should make independent decisions and consider their own risk tolerance.',
};

export const HERO_DATA = {
  hook: 'Stop Following Stock Market Tips. Learn How to Analyse the Market.',
  subheadline:
    'Build practical skills in stock market fundamentals, technical analysis, fundamental analysis, risk management and trading psychology through a structured 3-level learning program.',
  primaryCta: 'Book a Free Counselling Call',
  secondaryCta: 'View Full Curriculum',
  trustLine: 'Structured Learning • Practical Analysis • Risk Management',
  stats: [
    { label: 'Structured Levels', value: '3 Modules' },
    { label: 'Total Duration', value: '120 Days' },
    { label: 'Practical Focus', value: '100% Analysis' },
    { label: 'Mentorship', value: '1-on-1 Guidance' },
  ],
};

export const PROBLEM_DATA = {
  headline: 'Most Beginners Start Trading Before They Understand the Market',
  subtitle: 'Jumping into trading without structured knowledge often leads to unnecessary financial losses and frustration.',
  points: [
    {
      title: 'Following Random Stock Tips',
      desc: 'Relying on social media groups, news channels, or unverified tips instead of conducting independent analysis.',
      icon: 'MessageSquareWarning',
    },
    {
      title: 'Entering Trades Without a Plan',
      desc: 'Buying stocks impulsively without clear entry price, exit strategy, or logical reason.',
      icon: 'MapPinOff',
    },
    {
      title: 'Not Knowing Where to Place a Stop-Loss',
      desc: 'Exposing capital to unlimited downside risk due to lack of technical risk controls.',
      icon: 'ShieldOff',
    },
    {
      title: 'Buying Stocks Without Analysing the Business',
      desc: 'Investing in companies without understanding balance sheets, cash flows, or valuation metrics.',
      icon: 'Building2',
    },
    {
      title: 'Making Emotional Trading Decisions',
      desc: 'Panic selling during minor market dips and FOMO buying at market tops.',
      icon: 'BrainCircuit',
    },
    {
      title: 'Taking Unnecessary Risks',
      desc: 'Over-leveraging capital, ignoring position sizing, and risking too much per trade.',
      icon: 'AlertTriangle',
    },
  ],
};

export const SOLUTION_DATA = {
  headline: 'Build the Skills to Make Better Market Decisions',
  description:
    'Learn the concepts, tools and frameworks used to analyse stocks and markets in a structured learning environment.',
  benefits: [
    {
      title: 'Understand how the stock market works',
      detail: 'Grasp market mechanics, exchanges (NSE/BSE), order types, and regulatory frameworks.',
    },
    {
      title: 'Read and interpret candlestick charts',
      detail: 'Master price action patterns, candlestick psychology, and multi-timeframe chart reading.',
    },
    {
      title: 'Identify trends and key price levels',
      detail: 'Pinpoint support/resistance zones, trendlines, channel breakouts, and market structure.',
    },
    {
      title: 'Learn technical and fundamental analysis',
      detail: 'Combine chart indicators (RSI, MACD, Volume) with financial statement & valuation analysis.',
    },
    {
      title: 'Understand position sizing and risk management',
      detail: 'Calculate risk-per-trade, maximum drawdowns, stop-loss ratios, and portfolio capital protection.',
    },
    {
      title: 'Develop disciplined trading habits',
      detail: 'Overcome fear and greed through behavioral guidelines and systematic decision-making frameworks.',
    },
    {
      title: 'Build and analyse your own stock watchlist',
      detail: 'Create customized stock screeners based on sector trends, growth criteria, and technical setups.',
    },
    {
      title: 'Create structured trade and investment plans',
      detail: 'Document complete trade blueprints with explicit entry triggers, risk parameters, and profit targets.',
    },
  ],
};

export const CURRICULUM_LEVELS: CurriculumLevel[] = [
  {
    level: 'Level 1',
    title: 'Stock Market Foundations',
    duration: '30 Days',
    color: 'emerald',
    badge: 'Foundation Phase',
    description: 'Master core market terminology, mechanics, chart reading basics, and fundamental evaluation principles.',
    topics: [
      'Stock Market Basics',
      'NSE & BSE',
      'Demat & Trading Accounts',
      'Orders & Market Mechanics',
      'Candlestick Patterns',
      'Support & Resistance',
      'Trend Analysis',
      'Risk Management',
      'Trading Psychology',
      'Stock Screening',
      'Fundamental Analysis Basics',
    ],
  },
  {
    level: 'Level 2',
    title: 'Technical Trading & Market Analysis',
    duration: '30 Days',
    color: 'blue',
    badge: 'Intermediate Phase',
    description: 'Deep dive into advanced technical indicators, pattern setups, volume analysis, and systematic trade planning.',
    topics: [
      'Advanced Chart Analysis',
      'Technical Indicators',
      'Moving Averages',
      'RSI',
      'MACD',
      'Volume Analysis',
      'Breakouts & Retests',
      'Chart Patterns',
      'Entry & Exit Frameworks',
      'Trade Setup Development',
      'Backtesting Basics',
      'Trading Journal',
    ],
  },
  {
    level: 'Level 3',
    title: 'Professional Stock Market Mastery',
    duration: '60 Days',
    color: 'indigo',
    badge: 'Advanced Phase',
    description: 'Master company valuations, financial statements, derivatives risk, portfolio hedging, and complete strategy execution.',
    topics: [
      'Advanced Technical Analysis',
      'Advanced Fundamental Analysis',
      'Financial Statement Analysis',
      'Valuation',
      'Sector Analysis',
      'Portfolio Construction',
      'Derivatives Fundamentals',
      'Futures & Options',
      'Advanced Risk Management',
      'Trading Psychology',
      'Strategy Development',
      'Performance Review',
    ],
  },
];

export const PRACTICAL_ACTIVITIES: PracticalActivity[] = [
  { id: '1', title: 'Chart Analysis Exercises', description: 'Practice plotting trendlines, head-and-shoulders, and double bottom patterns on real historical charts.', iconName: 'LineChart' },
  { id: '2', title: 'Stock Screening Exercises', description: 'Run custom stock screeners to discover high-growth, debt-free, and breakout momentum stocks.', iconName: 'Filter' },
  { id: '3', title: 'Support & Resistance Identification', description: 'Map high-probability supply and demand zones on multi-timeframe charts.', iconName: 'Layers' },
  { id: '4', title: 'Trend Identification', description: 'Identify higher-highs and higher-lows across daily and weekly chart frames.', iconName: 'TrendingUp' },
  { id: '5', title: 'Company Analysis', description: 'Evaluate annual reports, quarterly results, revenue growth, and debt-to-equity ratios.', iconName: 'FileText' },
  { id: '6', title: 'Trade Planning Exercises', description: 'Formulate precise trade setups specifying entry price, stop loss, target, and risk allocation.', iconName: 'Target' },
  { id: '7', title: 'Risk-Reward Calculations', description: 'Calculate position sizing based on portfolio capital and 1:2 or 1:3 risk-to-reward parameters.', iconName: 'Calculator' },
  { id: '8', title: 'Trading Journal Creation', description: 'Maintain a structured trading log tracking win rate, emotional state, and trade execution score.', iconName: 'BookOpen' },
  { id: '9', title: 'Final Stock Analysis Project', description: 'Synthesize fundamental, technical, and risk research into a comprehensive institutional-grade report.', iconName: 'Award' },
];

export const WHO_IS_IT_FOR = [
  { title: 'Complete Beginners', desc: 'No prior financial background required. We start from ground zero.', icon: 'UserCheck' },
  { title: 'First-time Investors', desc: 'Wanting to park capital safely with long-term compound growth principles.', icon: 'PiggyBank' },
  { title: 'Aspiring Traders', desc: 'Looking for a structured price-action strategy instead of guessing market moves.', icon: 'CandlestickChart' },
  { title: 'Working Professionals', desc: 'Seeking passive income or structured swing trading frameworks around job schedules.', icon: 'Briefcase' },
  { title: 'Students', desc: 'Aiming to build practical finance and stock market evaluation skills early.', icon: 'GraduationCap' },
  { title: 'Structured Market Seekers', desc: 'Investors who want systematic market knowledge rather than social media noise.', icon: 'BarChart2' },
  { title: 'Chart & Business Analysts', desc: 'People who want to master reading charts and company balance sheets thoroughly.', icon: 'Search' },
];

export const OUTCOMES = [
  {
    title: 'Your Own Stock Watchlist',
    desc: 'A curated list of sector-leading companies selected using fundamental and technical filters.',
    icon: 'ListFilter',
  },
  {
    title: 'Structured Stock Analysis Report',
    desc: 'An end-to-end evaluation document covering financial metrics, valuation, and technical entry setups.',
    icon: 'FileCheck',
  },
  {
    title: 'Basic Trading Plan',
    desc: 'A clear execution framework defining risk limits, entry triggers, stop-loss rules, and profit goals.',
    icon: 'Compass',
  },
  {
    title: 'Risk Management Framework',
    desc: 'Rules to limit max loss per trade to 1-2% of total capital and prevent account blowups.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Trading Journal',
    desc: 'A systematic tracking log to review trading performance, emotional patterns, and execution fidelity.',
    icon: 'NotebookPen',
  },
  {
    title: 'Repeatable Market Analysis Process',
    desc: 'A structured, step-by-step daily and weekly routine to analyze market trends efficiently.',
    icon: 'RefreshCw',
  },
];

export const FINAL_PROJECT_INFO = {
  headline: 'Build Your Own Stock Analysis Report',
  description:
    'Analyse a selected company using fundamental analysis, technical analysis, market structure and risk management.',
  sampleReportCompany: 'Reliant Industries Ltd (Sample Case)',
  checklist: [
    'Business Model & Industry Competitiveness',
    'Financial Statement Health (P&L, Balance Sheet, Cash Flow)',
    'Key Financial Ratios (ROCE, Debt/Equity, PE Ratio)',
    'Technical Price Action & Trend Mapping',
    'Support / Resistance Zones & Indicator Confirmation',
    'Risk Assessment, Entry Allocation & Target Valuation',
  ],
};

export const SAMPLE_STOCKS: StockSample[] = [
  {
    symbol: 'TCS',
    name: 'Tata Consultancy Services',
    sector: 'Information Technology',
    price: 4120.5,
    pe: 28.4,
    marketCap: '₹14.9 Lakh Cr',
    trend: 'Uptrend',
    support: 3950,
    resistance: 4250,
    rsi: 58,
    signal: 'Breakout Watch',
  },
  {
    symbol: 'RELIANCE',
    name: 'Reliance Industries Ltd',
    sector: 'Energy & Retail',
    price: 2980.0,
    pe: 26.1,
    marketCap: '₹20.1 Lakh Cr',
    trend: 'Uptrend',
    support: 2880,
    resistance: 3050,
    rsi: 62,
    signal: 'Value Buy',
  },
  {
    symbol: 'HDFCBANK',
    name: 'HDFC Bank Ltd',
    sector: 'Financial Services',
    price: 1640.2,
    pe: 18.5,
    marketCap: '₹12.5 Lakh Cr',
    trend: 'Sideways',
    support: 1580,
    resistance: 1720,
    rsi: 48,
    signal: 'Consolidating',
  },
  {
    symbol: 'INFY',
    name: 'Infosys Ltd',
    sector: 'Information Technology',
    price: 1820.7,
    pe: 24.2,
    marketCap: '₹7.5 Lakh Cr',
    trend: 'Uptrend',
    support: 1740,
    resistance: 1890,
    rsi: 66,
    signal: 'Breakout Watch',
  },
  {
    symbol: 'TATAMOTORS',
    name: 'Tata Motors Ltd',
    sector: 'Automotive',
    price: 985.0,
    pe: 16.8,
    marketCap: '₹3.6 Lakh Cr',
    trend: 'Uptrend',
    support: 930,
    resistance: 1040,
    rsi: 54,
    signal: 'Value Buy',
  },
];
