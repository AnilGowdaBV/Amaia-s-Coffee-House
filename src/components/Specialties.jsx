import React from 'react';
import { Coffee, Utensils, Sparkles, Moon } from 'lucide-react';

export default function Specialties() {
  return (
    <section className="mb-7">
      {/* Premium Section Divider & Header */}
      <div className="flex items-center justify-center gap-3 mb-3.5">
        <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-amber-500/40"></div>
        <p className="text-[10px] font-semibold tracking-[0.28em] text-purple-300/80 uppercase">
          CURATED INDULGENCES
        </p>
        <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-purple-500/40"></div>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {/* Pill 1: Single-Origin Roasts */}
        <div className="py-2.5 px-3.5 rounded-full bg-purple-950/30 border border-purple-500/30 backdrop-blur-md flex items-center justify-center gap-2 text-xs font-medium text-slate-200 hover:text-white hover:border-amber-400/80 hover:bg-purple-900/40 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer">
          <Coffee className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="truncate">Single-Origin Roasts</span>
        </div>

        {/* Pill 2: Gourmet Gastronomy */}
        <div className="py-2.5 px-3.5 rounded-full bg-purple-950/30 border border-purple-500/30 backdrop-blur-md flex items-center justify-center gap-2 text-xs font-medium text-slate-200 hover:text-white hover:border-purple-400/80 hover:bg-purple-900/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer">
          <Utensils className="w-3.5 h-3.5 text-purple-400 shrink-0" />
          <span className="truncate">Gourmet Gastronomy</span>
        </div>

        {/* Pill 3: Tranquil Sanctuary */}
        <div className="py-2.5 px-3.5 rounded-full bg-purple-950/30 border border-purple-500/30 backdrop-blur-md flex items-center justify-center gap-2 text-xs font-medium text-slate-200 hover:text-white hover:border-emerald-400/80 hover:bg-purple-900/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="truncate">Tranquil Sanctuary</span>
        </div>

        {/* Pill 4: Celestial Lounge */}
        <div className="py-2.5 px-3.5 rounded-full bg-purple-950/30 border border-purple-500/30 backdrop-blur-md flex items-center justify-center gap-2 text-xs font-medium text-slate-200 hover:text-white hover:border-violet-400/80 hover:bg-purple-900/40 hover:shadow-[0_0_15px_rgba(139,92,246,0.35)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer">
          <Moon className="w-3.5 h-3.5 text-violet-400 shrink-0" />
          <span className="truncate">Celestial Lounge</span>
        </div>
      </div>
    </section>
  );
}
