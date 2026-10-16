import React from 'react';

interface SpireLogoProps {
  variant?: 'full' | 'badge' | 'icon' | 'header';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const SpireLogo: React.FC<SpireLogoProps> = ({
  variant = 'header',
  className = '',
  size = 'md',
}) => {
  const dimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  }[size];

  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${dimensions} ${className}`}
      >
        <defs>
          <radialGradient id="navyBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0f2042" />
            <stop offset="100%" stopColor="#060c1a" />
          </radialGradient>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="30%" stopColor="#eab308" />
            <stop offset="70%" stopColor="#ca8a04" />
            <stop offset="100%" stopColor="#854d0e" />
          </linearGradient>
          <linearGradient id="greenCandle" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
          <linearGradient id="yellowCandle" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#a16207" />
          </linearGradient>
        </defs>

        {/* Outer Circular Ring */}
        <circle cx="250" cy="250" r="240" fill="url(#navyBg)" stroke="url(#goldGrad)" strokeWidth="12" />
        <circle cx="250" cy="250" r="226" fill="none" stroke="url(#goldGrad)" strokeWidth="2" strokeDasharray="6 4" opacity="0.6" />

        {/* Candlestick Chart */}
        <g opacity="0.9">
          {/* Green & Yellow Candlesticks */}
          <line x1="150" y1="210" x2="150" y2="180" stroke="#fde047" strokeWidth="3" />
          <rect x="144" y="188" width="12" height="16" fill="url(#yellowCandle)" rx="1" />

          <line x1="180" y1="190" x2="180" y2="160" stroke="#4ade80" strokeWidth="3" />
          <rect x="174" y="168" width="12" height="18" fill="url(#greenCandle)" rx="1" />

          <line x1="210" y1="175" x2="210" y2="140" stroke="#fde047" strokeWidth="3" />
          <rect x="204" y="148" width="12" height="20" fill="url(#yellowCandle)" rx="1" />

          <line x1="240" y1="160" x2="240" y2="125" stroke="#4ade80" strokeWidth="3" />
          <rect x="234" y="132" width="12" height="22" fill="url(#greenCandle)" rx="1" />

          <line x1="270" y1="145" x2="270" y2="105" stroke="#fde047" strokeWidth="3" />
          <rect x="264" y="115" width="12" height="22" fill="url(#yellowCandle)" rx="1" />

          <line x1="300" y1="130" x2="300" y2="85" stroke="#4ade80" strokeWidth="3" />
          <rect x="294" y="98" width="12" height="24" fill="url(#greenCandle)" rx="1" />

          {/* Golden Ascending Arrow */}
          <path
            d="M 120 220 Q 250 170 350 90"
            fill="none"
            stroke="url(#goldGrad)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <polygon points="345,75 365,95 335,100" fill="url(#goldGrad)" />
        </g>

        {/* Open Book */}
        <path
          d="M 170 280 Q 250 260 250 295 Q 250 260 330 280 L 325 320 Q 250 300 250 325 Q 250 300 175 320 Z"
          fill="#1e293b"
          stroke="url(#goldGrad)"
          strokeWidth="4"
        />
        {/* Book pages detail */}
        <path d="M 180 285 Q 245 268 245 298" fill="none" stroke="#fef08a" strokeWidth="2" opacity="0.8" />
        <path d="M 320 285 Q 255 268 255 298" fill="none" stroke="#fef08a" strokeWidth="2" opacity="0.8" />

        {/* Graduation Cap */}
        <g transform="translate(0, -10)">
          {/* Cap Base */}
          <ellipse cx="250" cy="245" rx="35" ry="12" fill="url(#goldGrad)" />
          <rect x="235" y="245" width="30" height="15" fill="#ca8a04" rx="2" />
          {/* Diamond Top */}
          <polygon points="250,215 315,235 250,255 185,235" fill="url(#goldGrad)" stroke="#fef08a" strokeWidth="2" />
          {/* Tassel */}
          <path d="M 250 235 L 305 250 L 308 275" fill="none" stroke="#fef08a" strokeWidth="3" strokeLinecap="round" />
          <circle cx="308" cy="278" r="4" fill="url(#goldGrad)" />
        </g>

        {/* Brand Text SPIRE */}
        <text
          x="250"
          y="390"
          fontFamily="serif"
          fontWeight="bold"
          fontSize="68"
          fill="url(#goldGrad)"
          textAnchor="middle"
          letterSpacing="4"
        >
          SPIRE
        </text>

        {/* STOCK ACADEMY Line */}
        <line x1="80" y1="415" x2="160" y2="415" stroke="url(#goldGrad)" strokeWidth="3" />
        <text
          x="250"
          y="422"
          fontFamily="sans-serif"
          fontWeight="bold"
          fontSize="22"
          fill="#ffffff"
          textAnchor="middle"
          letterSpacing="5"
        >
          STOCK ACADEMY
        </text>
        <line x1="340" y1="415" x2="420" y2="415" stroke="url(#goldGrad)" strokeWidth="3" />
      </svg>
    );
  }

  // Full Circular Emblem Badge Mode (Matches uploaded logo perfectly)
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={variant === 'full' ? 'w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44' : dimensions}
      >
        <defs>
          <radialGradient id="spireNavy" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0d1b38" />
            <stop offset="80%" stopColor="#070d1e" />
            <stop offset="100%" stopColor="#03060f" />
          </radialGradient>

          <linearGradient id="spireGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff099" />
            <stop offset="25%" stopColor="#f59e0b" />
            <stop offset="60%" stopColor="#d97706" />
            <stop offset="85%" stopColor="#b45309" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>

          <linearGradient id="candleGreen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>

          <linearGradient id="candleYellow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#854d0e" />
          </linearGradient>

          <linearGradient id="candleBlue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#075985" />
          </linearGradient>

          <path id="textArcBottom" d="M 80,310 A 190,190 0 0,0 420,310" fill="none" />
        </defs>

        {/* Outer Gold Ring Frame */}
        <circle cx="250" cy="250" r="242" fill="url(#spireNavy)" stroke="url(#spireGold)" strokeWidth="10" />
        <circle cx="250" cy="250" r="232" fill="none" stroke="url(#spireGold)" strokeWidth="2" opacity="0.8" />
        <circle cx="250" cy="250" r="222" fill="none" stroke="url(#spireGold)" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />

        {/* Side Decorative Dots */}
        <circle cx="36" cy="250" r="6" fill="url(#spireGold)" />
        <circle cx="464" cy="250" r="6" fill="url(#spireGold)" />

        {/* Candlestick & Arrow Background Visual */}
        <g transform="translate(0, -10)">
          {/* Candlesticks */}
          {/* Yellow 1 */}
          <line x1="135" y1="210" x2="135" y2="185" stroke="#eab308" strokeWidth="2.5" />
          <rect x="130" y="192" width="10" height="12" fill="url(#candleYellow)" rx="1" />

          {/* Green 1 */}
          <line x1="155" y1="195" x2="155" y2="165" stroke="#22c55e" strokeWidth="2.5" />
          <rect x="150" y="172" width="10" height="15" fill="url(#candleGreen)" rx="1" />

          {/* Yellow 2 */}
          <line x1="175" y1="182" x2="175" y2="150" stroke="#eab308" strokeWidth="2.5" />
          <rect x="170" y="158" width="10" height="16" fill="url(#candleYellow)" rx="1" />

          {/* Green 2 */}
          <line x1="200" y1="168" x2="200" y2="135" stroke="#22c55e" strokeWidth="2.5" />
          <rect x="195" y="142" width="10" height="18" fill="url(#candleGreen)" rx="1" />

          {/* Yellow 3 */}
          <line x1="225" y1="155" x2="225" y2="120" stroke="#eab308" strokeWidth="2.5" />
          <rect x="220" y="128" width="10" height="18" fill="url(#candleYellow)" rx="1" />

          {/* Green 3 */}
          <line x1="260" y1="140" x2="260" y2="105" stroke="#22c55e" strokeWidth="2.5" />
          <rect x="255" y="112" width="10" height="20" fill="url(#candleGreen)" rx="1" />

          {/* Yellow 4 */}
          <line x1="295" y1="125" x2="295" y2="90" stroke="#eab308" strokeWidth="2.5" />
          <rect x="290" y="98" width="10" height="20" fill="url(#candleYellow)" rx="1" />

          {/* Green 4 */}
          <line x1="320" y1="110" x2="320" y2="70" stroke="#22c55e" strokeWidth="2.5" />
          <rect x="315" y="80" width="10" height="22" fill="url(#candleGreen)" rx="1" />

          {/* Blue Column Bars */}
          <rect x="340" y="105" width="12" height="60" fill="url(#candleBlue)" rx="1" opacity="0.9" />
          <rect x="358" y="80" width="12" height="85" fill="url(#candleBlue)" rx="1" opacity="0.9" />

          {/* Gold Rising Arrow Arc */}
          <path
            d="M 115 225 Q 230 180 355 90"
            fill="none"
            stroke="url(#spireGold)"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <polygon points="350,70 375,95 338,102" fill="url(#spireGold)" />
        </g>

        {/* Centerpiece: Book & Graduation Cap */}
        <g transform="translate(0, 10)">
          {/* Open Book Pages */}
          <path
            d="M 150 255 Q 250 230 250 268 Q 250 230 350 255 L 345 295 Q 250 270 250 298 Q 250 270 155 295 Z"
            fill="#0f172a"
            stroke="url(#spireGold)"
            strokeWidth="3.5"
          />
          <path d="M 165 260 Q 245 240 245 272" fill="none" stroke="#fff099" strokeWidth="1.5" opacity="0.9" />
          <path d="M 335 260 Q 255 240 255 272" fill="none" stroke="#fff099" strokeWidth="1.5" opacity="0.9" />

          {/* Cap Base Cap & Shadow */}
          <polygon points="250,185 330,210 250,232 170,210" fill="url(#spireGold)" stroke="#fff099" strokeWidth="2" />
          <rect x="232" y="222" width="36" height="18" fill="#9a3412" rx="2" opacity="0.8" />
          <path d="M 230 220 Q 250 230 270 220 L 268 238 Q 250 245 232 238 Z" fill="url(#spireGold)" />

          {/* Tassel */}
          <path d="M 250 208 L 318 222 L 322 255" fill="none" stroke="#fff099" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="322" cy="258" r="4" fill="url(#spireGold)" />
        </g>

        {/* SPIRE Brand Title */}
        <text
          x="250"
          y="330"
          fontFamily="Times New Roman, Georgia, serif"
          fontWeight="900"
          fontSize="66"
          fill="url(#spireGold)"
          textAnchor="middle"
          letterSpacing="6"
        >
          SPIRE
        </text>

        {/* STOCK ACADEMY Framing */}
        <g transform="translate(0, 335)">
          <line x1="75" y1="20" x2="145" y2="20" stroke="url(#spireGold)" strokeWidth="2.5" />
          <text
            x="250"
            y="26"
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
            fontSize="21"
            fill="#ffffff"
            textAnchor="middle"
            letterSpacing="5"
          >
            STOCK ACADEMY
          </text>
          <line x1="355" y1="20" x2="425" y2="20" stroke="url(#spireGold)" strokeWidth="2.5" />
        </g>

        {/* Bull, Bar Chart, Bear Symbols */}
        <g transform="translate(0, 388)">
          {/* Bull Icon Silhouette */}
          <g transform="translate(160, 0) scale(0.7)" fill="url(#spireGold)">
            <path d="M -20,-10 C -15,-20 -5,-20 0,-15 C 5,-20 15,-20 20,-10 C 25,0 15,10 0,15 C -15,10 -25,0 -20,-10 Z" />
            <polygon points="-12,-5 -22,-18 -8,-10" />
            <polygon points="12,-5 22,-18 8,-10" />
          </g>

          {/* Bar Chart Bars */}
          <rect x="234" y="2" width="6" height="16" fill="url(#spireGold)" rx="1" />
          <rect x="247" y="-6" width="6" height="24" fill="url(#spireGold)" rx="1" />
          <rect x="260" y="-12" width="6" height="30" fill="url(#spireGold)" rx="1" />

          {/* Bear Icon Silhouette */}
          <g transform="translate(340, 0) scale(0.7)" fill="url(#spireGold)">
            <ellipse cx="0" cy="0" rx="16" ry="12" />
            <circle cx="-12" cy="-10" r="5" />
            <circle cx="12" cy="-10" r="5" />
          </g>
        </g>

        {/* Curved Tagline along bottom circle */}
        <text
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
          fontSize="13.5"
          fill="#4ade80"
          letterSpacing="2.5"
        >
          <textPath href="#textArcBottom" startOffset="50%" textAnchor="middle">
            LEARN WITH LOGIC, INVEST WITH CONFIDENCE.
          </textPath>
        </text>
      </svg>

      {/* Header text layout if in header mode */}
      {variant === 'header' && (
        <div>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white font-serif">
              SPIRE <span className="text-amber-400 font-sans font-medium text-xs sm:text-sm tracking-wider uppercase">Stock Academy</span>
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-full">
              120-Day Mastery
            </span>
          </div>
          <p className="text-[11px] text-emerald-400 font-medium hidden sm:block">
            Learn with logic, invest with confidence.
          </p>
        </div>
      )}
    </div>
  );
};
