import React from 'react';
import { CAFE_INFO } from '../data/cafeData';

export default function Header() {
  return (
    <header className="flex items-center justify-center mb-6">
      {/* Subtle Glass Origin Badge */}
      <div className="flex items-center gap-3 py-2 px-4 rounded-2xl bg-purple-950/25 border border-purple-500/30 backdrop-blur-xl shadow-[0_0_20px_rgba(168,85,247,0.15)]">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500/20 to-purple-900/50 border border-amber-400/40 flex items-center justify-center overflow-hidden p-1 shadow-inner">
          <img 
            src="/logo-emblem.png" 
            alt={`${CAFE_INFO.name} Emblem`} 
            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]"
          />
        </div>
        <div>
          <div className="text-xs font-bold tracking-wider text-slate-100 font-sans">
            {CAFE_INFO.name}
          </div>
          <div className="text-[10px] font-semibold tracking-wider text-amber-300/80 uppercase">
            {CAFE_INFO.subname}
          </div>
        </div>
      </div>
    </header>
  );
}
