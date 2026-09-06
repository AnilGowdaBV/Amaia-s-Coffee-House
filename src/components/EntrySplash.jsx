import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export default function EntrySplash({ onFinish }) {
  const [phase, setPhase] = useState(0); // 0: start, 1: emblem, 2: text, 3: exit

  useEffect(() => {
    // Stage 1: Emblem appears & pulses
    const t1 = setTimeout(() => setPhase(1), 200);

    // Stage 2: Typography & status reveal
    const t2 = setTimeout(() => setPhase(2), 1000);

    // Stage 3: Smooth cinematic dissolve out
    const t3 = setTimeout(() => setPhase(3), 2500);

    // Stage 4: Trigger completion callback
    const t4 = setTimeout(() => {
      onFinish();
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onFinish]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#06040d] transition-all duration-700 ease-out ${
        phase === 3 ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Radial Light Pulses */}
      <div className="absolute w-[350px] h-[350px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
      <div className="absolute w-[200px] h-[200px] bg-amber-500/15 rounded-full blur-[90px] pointer-events-none"></div>

      {/* Main Animated Center Hub */}
      <div className="relative flex flex-col items-center z-10 px-6 text-center">
        
        {/* Ultra-Crisp Vector Logo with Glowing Neon Gold Sign Lines */}
        <div className="relative mb-6 flex items-center justify-center">
          <div
            className={`relative w-36 h-36 flex items-center justify-center transition-all duration-700 ease-out ${
              phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
          >
            {/* Ambient Warm Golden Halo Glow */}
            <div className="absolute w-28 h-28 bg-amber-500/25 rounded-full blur-2xl pointer-events-none animate-pulse"></div>

            {/* Razor-sharp Vector SVG of Amaia's 3-leaf signature neon emblem */}
            <svg viewBox="0 0 240 240" className="w-full h-full overflow-visible drop-shadow-[0_0_20px_rgba(245,158,11,0.7)]">
              <defs>
                <linearGradient id="splashNeonGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fffbeb" />
                  <stop offset="25%" stopColor="#fef08a" />
                  <stop offset="55%" stopColor="#f59e0b" />
                  <stop offset="85%" stopColor="#d97706" />
                  <stop offset="100%" stopColor="#fbbf24" />
                </linearGradient>

                <filter id="splashGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Soft ambient back-trace */}
              <g opacity="0.6" filter="url(#splashGlow)">
                {/* Top Leaf */}
                <path
                  d="M 120 38 C 146 38, 166 60, 166 88 C 166 118, 142 138, 120 152 C 98 138, 74 118, 74 88 C 74 60, 94 38, 120 38 Z"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
                {/* Bottom Left Leaf */}
                <path
                  d="M 72 192 C 48 178, 40 150, 56 124 C 74 96, 104 110, 126 126 C 118 148, 100 180, 78 192 Z"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
                {/* Bottom Right Leaf */}
                <path
                  d="M 168 192 C 192 178, 200 150, 184 124 C 166 96, 136 110, 114 126 C 122 148, 140 180, 162 192 Z"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
              </g>

              {/* Razor Sharp Crisp Gold Neon Lines */}
              <g>
                {/* Top Leaf */}
                <path
                  d="M 120 38 C 146 38, 166 60, 166 88 C 166 118, 142 138, 120 152 C 98 138, 74 118, 74 88 C 74 60, 94 38, 120 38 Z"
                  fill="none"
                  stroke="url(#splashNeonGold)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Bottom Left Leaf */}
                <path
                  d="M 72 192 C 48 178, 40 150, 56 124 C 74 96, 104 110, 126 126 C 118 148, 100 180, 78 192 Z"
                  fill="none"
                  stroke="url(#splashNeonGold)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Bottom Right Leaf */}
                <path
                  d="M 168 192 C 192 178, 200 150, 184 124 C 166 96, 136 110, 114 126 C 122 148, 140 180, 162 192 Z"
                  fill="none"
                  stroke="url(#splashNeonGold)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Center Core Light Pip */}
                <circle cx="120" cy="132" r="5" fill="#fffbeb" className="animate-pulse" />
              </g>
            </svg>
          </div>
        </div>


        {/* Brand Reveal Typography */}
        <div 
          className={`transition-all duration-700 delay-100 transform ${
            phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* Welcome Tagline */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-[10px] tracking-[0.25em] font-mono text-purple-300 uppercase mb-2">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Welcome To</span>
            <Sparkles className="w-3 h-3 text-amber-400" />
          </div>

          {/* Main Title */}
          <h1 className="text-3xl font-extrabold tracking-wider text-white mb-1 font-sans">
            AMAIA<span className="text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.9)]">'S</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs font-semibold tracking-[0.2em] text-amber-300/90 uppercase mb-2">
            COFFEE HOUSE • BENGALURU
          </p>

          <p className="text-[11px] text-purple-200/70 font-serif italic">
            ಅಮಯ್ಯಾಸ್ ಕಾಫಿ ಹೌಸ್
          </p>
        </div>

        {/* Elegant Animated Gold Loading Line */}
        <div className="w-36 h-[2px] bg-purple-950/60 rounded-full mt-7 overflow-hidden border border-purple-500/20">
          <div 
            className={`h-full bg-gradient-to-r from-amber-400 via-purple-400 to-amber-300 transition-all duration-[2200ms] ease-out ${
              phase >= 1 ? 'w-full' : 'w-0'
            }`}
          ></div>
        </div>

        {/* Subtle QR Scanner Welcome Note */}
        <p className="text-[10px] text-purple-300/50 tracking-widest uppercase mt-3 font-mono">
          Loading Digital Menu...
        </p>

      </div>
    </div>
  );
}
