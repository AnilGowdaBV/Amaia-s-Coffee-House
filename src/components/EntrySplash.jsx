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

      {/* Skip Button on Top Right */}
      <button 
        onClick={onFinish}
        className="absolute top-6 right-6 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-xs font-medium text-purple-300/80 hover:text-white hover:border-purple-400 transition active:scale-95"
      >
        Skip ➔
      </button>

      {/* Main Animated Center Hub */}
      <div className="relative flex flex-col items-center z-10 px-6 text-center">
        
        {/* Pulsing Concentric Aura Wave */}
        <div className="relative mb-6 flex items-center justify-center">
          <div className="absolute w-28 h-28 rounded-full border border-purple-500/30 animate-ping opacity-30" style={{ animationDuration: '2.5s' }}></div>
          <div className="absolute w-36 h-36 rounded-full border border-dashed border-amber-500/20 animate-spin-slow"></div>
          
          {/* Central Illuminated Emblem Card */}
          <div 
            className={`w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-500/20 via-purple-950/60 to-purple-900/40 border border-amber-400/50 flex items-center justify-center p-3.5 shadow-[0_0_45px_rgba(245,158,11,0.35)] transition-all duration-700 ease-out ${
              phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
          >
            <img 
              src="/logo-emblem.png" 
              alt="Amaia's" 
              className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(251,191,36,0.9)]"
            />
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
