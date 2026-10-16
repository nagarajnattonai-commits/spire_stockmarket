import { jsPDF } from 'jspdf';

export interface PdfCurriculumData {
  title: string;
}

export function generateCurriculumPdfBlob(): Blob {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // ~210mm
  const pageHeight = doc.internal.pageSize.getHeight(); // ~297mm
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;

  const addHeaderFooter = (pageNum: number, totalPages: number = 8) => {
    // Header
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text('Stock Market Mastery Program — Curriculum', margin, 12);
    doc.text(`Page ${pageNum}`, pageWidth - margin, 12, { align: 'right' });

    // Footer
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text('Stock Market Mastery Program — Curriculum', margin, pageHeight - 10);
    doc.text(`Page ${pageNum}`, pageWidth - margin, pageHeight - 10, { align: 'right' });
  };

  // ==========================================
  // PAGE 1: Program Overview
  // ==========================================
  addHeaderFooter(1);

  // Title section
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text('STOCK MARKET', pageWidth / 2, 45, { align: 'center' });
  doc.text('MASTERY PROGRAM', pageWidth / 2, 54, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(71, 85, 105);
  doc.text('Learn. Analyse. Trade. Manage Risk.', pageWidth / 2, 63, { align: 'center' });

  // Key Info Table
  let currentY = 82;
  const tableRows = [
    { label: 'PROGRAM', value: '3-Level Structured Market Education' },
    { label: 'LEVEL 1', value: 'Stock Market Foundations — 30 Days' },
    { label: 'LEVEL 2', value: 'Technical Trading & Market Analysis — 30 Days' },
    { label: 'LEVEL 3', value: 'Professional Stock Market Mastery — 60 Days' },
    { label: 'FORMAT', value: 'Practical, structured learning with market-analysis exercises' },
  ];

  doc.setDrawColor(226, 232, 240); // slate-200
  doc.setLineWidth(0.3);

  tableRows.forEach((row) => {
    doc.line(margin, currentY, pageWidth - margin, currentY);
    currentY += 6;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(30, 58, 138); // blue-900
    doc.text(row.label, margin + 2, currentY);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(30, 41, 59);
    doc.text(row.value, margin + 45, currentY);
    currentY += 5;
  });
  doc.line(margin, currentY, pageWidth - margin, currentY);

  // Program Objective
  currentY += 16;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(37, 99, 235); // blue-600
  doc.text('Program Objective', margin, currentY);

  currentY += 7;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85);
  const objectiveLines = doc.splitTextToSize(
    'Build practical knowledge and disciplined decision-making skills across stock market fundamentals, technical analysis, fundamental analysis, risk management, trading psychology and portfolio thinking. The program progresses from beginner concepts to advanced market analysis.',
    contentWidth
  );
  doc.text(objectiveLines, margin, currentY);

  // Learning Philosophy
  currentY += 28;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(37, 99, 235);
  doc.text('Learning Philosophy', margin, currentY);

  currentY += 7;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85);
  const philosophyLines = doc.splitTextToSize(
    'Learn before you trade. Analyse before you act. Manage risk before you seek returns. The program is designed around structured education, practical exercises and repeatable analysis processes—not tips or guaranteed-profit promises.',
    contentWidth
  );
  doc.text(philosophyLines, margin, currentY);

  // ==========================================
  // PAGE 2: LEVEL 1 (Part 1)
  // ==========================================
  doc.addPage();
  addHeaderFooter(2);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(37, 99, 235);
  doc.text('LEVEL 1 — Stock Market Foundations', margin, 24);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text('Duration: 30 Days   |   ', margin, 31);
  doc.setFont('helvetica', 'italic');
  doc.text('From Market Basics to Confident Decision-Making', margin + 35, 31);

  currentY = 40;

  const renderModule = (title: string, items: string[]) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(15, 23, 42);
    doc.text(title, margin, currentY);
    currentY += 5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);

    items.forEach((item) => {
      doc.text(`• ${item}`, margin + 2, currentY);
      currentY += 4.2;
    });
    currentY += 3;
  };

  renderModule('Module 1 — Understanding the Stock Market', [
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
  ]);

  renderModule('Module 2 — Candlestick Patterns', [
    'Open, High, Low, Close (OHLC)',
    'Bullish and bearish candles',
    'Candle body and wick',
    'Doji, Hammer and Inverted Hammer',
    'Shooting Star and Hanging Man',
    'Engulfing patterns',
    'Morning Star and Evening Star',
    'Inside Bar and Marubozu',
    'Reading candlestick combinations',
  ]);

  renderModule('Module 3 — Support & Resistance', [
    'Understanding support and resistance',
    'Horizontal levels',
    'Previous highs and lows',
    'Breakouts and breakdowns',
    'False breakouts',
    'Retests',
    'Role reversal: support becoming resistance and vice versa',
  ]);

  renderModule('Module 4 — Trend Analysis', [
    'Uptrend, downtrend and sideways markets',
    'Higher High, Higher Low, Lower High, Lower Low',
    'Trendlines',
    'Trend channels',
    'Trend continuation and reversal',
  ]);

  renderModule('Module 5 — Risk Management', [
    'Risk vs reward',
    'Capital protection',
    'Position sizing',
    'Stop-loss and target setting',
    'Risk per trade',
    'Risk-to-reward ratio',
    'Maximum daily and weekly loss concepts',
    'Avoiding overtrading and revenge trading',
    'Trading plan vs impulse decisions',
  ]);

  // Page 2 bottom label for Module 6 preview
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Module 6 — Trading Psychology', margin, currentY);

  // ==========================================
  // PAGE 3: LEVEL 1 (Part 2)
  // ==========================================
  doc.addPage();
  addHeaderFooter(3);

  currentY = 24;

  // Module 6 bullets
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const mod6Items = [
    'Fear, greed and FOMO',
    'Overconfidence and loss aversion',
    'Patience and discipline',
    'Managing drawdowns',
    'Following a trading plan',
    'Building consistent habits',
  ];
  mod6Items.forEach((item) => {
    doc.text(`• ${item}`, margin + 2, currentY);
    currentY += 4.2;
  });
  currentY += 4;

  renderModule('Module 7 — Position Sizing & Trade Planning', [
    'Capital allocation',
    'Position-size calculation',
    'Entry, stop-loss and target',
    'Risk amount and reward potential',
    'Trade setup checklist',
    'Pre-trade and post-trade review',
  ]);

  renderModule('Module 8 — Stock Screeners', [
    'What is stock screening?',
    'Price, market capitalization and volume filters',
    'Sector and business filters',
    'Growth and profitability filters',
    'Valuation and technical filters',
    'Creating a basic watchlist',
  ]);

  renderModule('Module 9 — Fundamental Analysis Basics', [
    'What is fundamental analysis?',
    'Revenue, profit and EPS',
    'Debt and cash flow',
    'ROE and ROCE',
    'Margins',
    'P/E and P/B',
    'Dividends',
    'Business quality and competitive advantage',
    'Basic valuation concepts',
  ]);

  // Practical Learning
  currentY += 2;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42);
  doc.text('Practical Learning', margin, currentY);
  currentY += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const p1Practicals = [
    'Identify candlestick patterns on historical charts',
    'Mark support and resistance on real charts',
    'Identify market trends',
    'Create a 10-stock watchlist',
    'Prepare a basic stock analysis',
    'Create a personal trade-planning checklist',
  ];
  p1Practicals.forEach((item) => {
    doc.text(`• ${item}`, margin + 2, currentY);
    currentY += 4.2;
  });

  currentY += 4;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Final Project: Build Your First Stock Analysis Report', margin, currentY);

  // ==========================================
  // PAGE 4: LEVEL 2 (Part 1)
  // ==========================================
  doc.addPage();
  addHeaderFooter(4);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(37, 99, 235);
  doc.text('LEVEL 2 — Technical Trading & Market Analysis', margin, 24);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text('Duration: 30 Days   |   ', margin, 31);
  doc.setFont('helvetica', 'italic');
  doc.text('Move from Reading Charts to Building Structured Setups', margin + 35, 31);

  currentY = 40;

  renderModule('Module 1 — Advanced Chart Analysis', [
    'Market structure and price action',
    'Multiple-timeframe analysis',
    'Trend continuation and reversal structures',
    'Breakouts, breakdowns and retests',
    'Demand and supply zones',
    'Key levels and confluence',
  ]);

  renderModule('Module 2 — Technical Indicators', [
    'Why indicators are used',
    'Moving averages',
    'RSI',
    'MACD',
    'Bollinger Bands',
    'Indicator combinations',
    'Avoiding indicator overload',
  ]);

  renderModule('Module 3 — Volume Analysis', [
    'Understanding volume',
    'Volume and price relationship',
    'Volume confirmation',
    'Volume spikes',
    'Breakout validation',
    'Basic volume-based decision frameworks',
  ]);

  renderModule('Module 4 — Chart Patterns', [
    'Triangles',
    'Flags and Pennants',
    'Head and Shoulders',
    'Double Top and Double Bottom',
    'Wedges',
    'Pattern confirmation and invalidation',
  ]);

  renderModule('Module 5 — Entry & Exit Frameworks', [
    'Defining a trade setup',
    'Entry confirmation',
    'Stop-loss placement',
    'Target selection',
    'Risk-to-reward planning',
    'Trade invalidation',
    'Partial exits and trade management concepts',
  ]);

  renderModule('Module 6 — Strategy Development', [
    'From idea to trading rules',
    'Setup criteria',
    'Entry and exit rules',
    'Risk rules',
    'Market conditions',
    'Avoiding overfitting',
  ]);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Module 7 — Backtesting Basics', margin, currentY);
  currentY += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  doc.text('• What is backtesting?', margin + 2, currentY);
  currentY += 4.2;
  doc.text('• Historical testing', margin + 2, currentY);

  // ==========================================
  // PAGE 5: LEVEL 2 (Part 2)
  // ==========================================
  doc.addPage();
  addHeaderFooter(5);

  currentY = 24;

  // Module 7 bullets cont.
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const mod7Cont = [
    'Recording trades',
    'Win rate and expectancy concepts',
    'Drawdown',
    'Limitations of historical results',
  ];
  mod7Cont.forEach((item) => {
    doc.text(`• ${item}`, margin + 2, currentY);
    currentY += 4.2;
  });
  currentY += 4;

  renderModule('Module 8 — Trading Journal', [
    'Why journaling matters',
    'Trade screenshots',
    'Entry and exit reasoning',
    'Emotional state',
    'Mistake tracking',
    'Weekly and monthly review',
  ]);

  // Practical Learning
  currentY += 4;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42);
  doc.text('Practical Learning', margin, currentY);
  currentY += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const p2Practicals = [
    'Perform multi-timeframe chart analysis',
    'Use indicators with price action',
    'Validate breakouts using volume',
    'Build a rule-based trade setup',
    'Backtest a simple strategy',
    'Create and review a trading journal',
  ];
  p2Practicals.forEach((item) => {
    doc.text(`• ${item}`, margin + 2, currentY);
    currentY += 4.2;
  });

  currentY += 5;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Final Project: Build and Document a Rule-Based Trading Setup', margin, currentY);

  // ==========================================
  // PAGE 6: LEVEL 3 (Part 1)
  // ==========================================
  doc.addPage();
  addHeaderFooter(6);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(37, 99, 235);
  doc.text('LEVEL 3 — Professional Stock Market Mastery', margin, 24);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text('Duration: 60 Days   |   ', margin, 31);
  doc.setFont('helvetica', 'italic');
  doc.text('Build an Integrated Trading & Investment Analysis Framework', margin + 35, 31);

  currentY = 40;

  renderModule('Module 1 — Advanced Technical Analysis', [
    'Advanced market structure',
    'Price-action confluence',
    'Multi-timeframe trade planning',
    'Advanced breakout and reversal analysis',
    'Trade management frameworks',
  ]);

  renderModule('Module 2 — Advanced Fundamental Analysis', [
    'Reading financial statements',
    'Income statement',
    'Balance sheet',
    'Cash-flow statement',
    'Earnings quality',
    'Profitability and efficiency analysis',
    'Debt and capital structure',
  ]);

  renderModule('Module 3 — Valuation', [
    'Understanding valuation',
    'Relative valuation',
    'P/E and P/B analysis',
    'EV/EBITDA concepts',
    'Growth vs valuation',
    'Margin of safety concept',
    'Valuation limitations',
  ]);

  renderModule('Module 4 — Sector & Business Analysis', [
    'Industry structure',
    'Sector cycles',
    'Competitive positioning',
    'Business-model analysis',
    'Management and governance considerations',
    'Comparing companies within a sector',
  ]);

  renderModule('Module 5 — Portfolio Construction', [
    'Investment objectives',
    'Diversification',
    'Asset allocation concepts',
    'Position concentration',
    'Portfolio risk',
    'Rebalancing concepts',
    'Monitoring portfolio performance',
  ]);

  renderModule('Module 6 — Derivatives Fundamentals', [
    'What are derivatives?',
    'Futures basics',
    'Options basics',
    'Calls and puts',
    'Strike price and expiry',
    'Option premium',
    'Basic payoff concepts',
    'Leverage and risk',
    'When derivatives require additional caution',
  ]);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Module 7 — Advanced Risk Management', margin, currentY);

  // ==========================================
  // PAGE 7: LEVEL 3 (Part 2)
  // ==========================================
  doc.addPage();
  addHeaderFooter(7);

  currentY = 24;

  // Module 7 bullets cont.
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const mod7p3Cont = [
    'Portfolio-level risk',
    'Position sizing across multiple trades',
    'Drawdown management',
    'Correlation and concentration',
    'Risk limits',
    'Scenario planning',
  ];
  mod7p3Cont.forEach((item) => {
    doc.text(`• ${item}`, margin + 2, currentY);
    currentY += 4.2;
  });
  currentY += 4;

  renderModule('Module 8 — Trading Psychology & Performance', [
    'Decision-making under uncertainty',
    'Handling winning and losing streaks',
    'Process over outcome',
    'Performance review',
    'Behavioural mistakes',
    'Building long-term discipline',
  ]);

  renderModule('Module 9 — Strategy & Performance Review', [
    'Strategy documentation',
    'Performance metrics',
    'Expectancy',
    'Risk-adjusted thinking',
    'Reviewing strengths and weaknesses',
    'Continuous improvement framework',
  ]);

  // Practical Learning
  currentY += 3;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(15, 23, 42);
  doc.text('Practical Learning', margin, currentY);
  currentY += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const p3Practicals = [
    'Analyse a company using financial statements',
    'Compare companies within a sector',
    'Build a sample diversified portfolio framework',
    'Evaluate a basic derivatives scenario',
    'Create a portfolio risk checklist',
    'Complete a structured performance review',
  ];
  p3Practicals.forEach((item) => {
    doc.text(`• ${item}`, margin + 2, currentY);
    currentY += 4.2;
  });

  currentY += 5;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Final Project: Build a Complete Market Analysis & Portfolio Framework', margin, currentY);

  // ==========================================
  // PAGE 8: Outcomes, Audience & Disclaimer
  // ==========================================
  doc.addPage();
  addHeaderFooter(8);

  currentY = 24;

  // PROGRAM OUTCOMES
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(37, 99, 235);
  doc.text('PROGRAM OUTCOMES', margin, currentY);
  currentY += 7;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const outcomes = [
    'Understand how the Indian stock market and trading ecosystem works.',
    'Read and interpret candlestick charts, trends, support and resistance.',
    'Use technical and fundamental analysis frameworks.',
    'Build stock watchlists and structured analysis reports.',
    'Plan trades with defined entries, exits and risk controls.',
    'Understand position sizing, drawdowns and risk-to-reward.',
    'Develop disciplined trading and investing habits.',
    'Maintain a trading journal and review performance.',
    'Understand portfolio construction and diversification concepts.',
    'Develop a repeatable market-analysis process.',
  ];
  outcomes.forEach((item) => {
    doc.text(`• ${item}`, margin + 2, currentY);
    currentY += 4.6;
  });

  // WHO THIS PROGRAM IS FOR
  currentY += 10;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(37, 99, 235);
  doc.text('WHO THIS PROGRAM IS FOR', margin, currentY);
  currentY += 7;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const audienceLines = doc.splitTextToSize(
    'Complete beginners • First-time investors • Aspiring traders • Working professionals • Students • Learners who want structured knowledge of charts, company fundamentals, risk management and market analysis.',
    contentWidth
  );
  doc.text(audienceLines, margin, currentY);

  // IMPORTANT EDUCATIONAL DISCLAIMER
  currentY += 24;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(37, 99, 235);
  doc.text('IMPORTANT EDUCATIONAL DISCLAIMER', margin, currentY);
  currentY += 7;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  const disclaimerLines = doc.splitTextToSize(
    'This program is for educational purposes only. It does not provide guaranteed returns, guaranteed profits, stock tips, investment recommendations or assurance of financial outcomes. Trading and investing in securities involve market risk, and derivatives can involve substantially higher risk. Learners should assess their own financial situation and risk tolerance and make independent decisions where appropriate.',
    contentWidth
  );
  doc.text(disclaimerLines, margin, currentY);

  return doc.output('blob');
}

export function downloadCurriculumPdf(filename = 'Stock-Market-Mastery-Curriculum.pdf'): void {
  const blob = generateCurriculumPdfBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
