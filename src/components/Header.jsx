import React from 'react';
import { CAFE_INFO } from '../data/cafeData';

export default function Header() {
  return (
    <header className="flex items-center justify-center mb-6">
      <div className="flex items-center gap-3 py-2 px-4 rounded-2xl bg-purple-950/25 border border-purple-500/30 backdrop-blur-xl shadow-[0_0_20px_rgba(168,85,247,0.15)]">
        {/* Plain logo — no card, gold shimmer on its lines */}
        <img
          src="/logo-emblem.png"
          alt={`${CAFE_INFO.name} Emblem`}
          className="logo-gold-shimmer w-12 h-12 object-contain"
        />
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
