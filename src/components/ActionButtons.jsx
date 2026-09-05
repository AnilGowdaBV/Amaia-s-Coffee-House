import React from 'react';
import { ChevronRight, MapPin, Sparkles, Coffee } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export default function ActionButtons({ onExploreMenu }) {
  return (
    <div className="space-y-3.5 mb-9">
      
      {/* 1. ULTRA-PREMIUM EXPLORE MENU BUTTON */}
      <div className="relative group w-full">
        {/* Animated Multi-Color Ambient Glow Behind Button */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-amber-400 blur-md opacity-60 group-hover:opacity-100 group-hover:blur-lg transition-all duration-500 animate-pulse pointer-events-none"></div>

        {/* The Main Button Card */}
        <button 
          onClick={onExploreMenu}
          className="relative w-full py-4 px-5 rounded-full bg-gradient-to-r from-white via-slate-50 to-purple-50 text-slate-950 flex items-center justify-between shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_0_25px_rgba(255,255,255,0.4)] overflow-hidden transition-all duration-300 group-hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
        >
          {/* Periodic Glass Shimmer Light Sweep */}
          <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none animate-shimmer-sweep"></div>

          {/* Left Glowing Icon Pill */}
          <div className="w-8 h-8 rounded-full bg-purple-950/10 border border-purple-900/15 flex items-center justify-center text-purple-700 shadow-sm group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
            <Sparkles className="w-4 h-4 text-purple-600 group-hover:text-white transition-colors duration-300" />
          </div>

          {/* Center Luxury Text */}
          <div className="flex flex-col items-center">
            <span className="font-extrabold tracking-wider text-slate-950 text-sm font-sans flex items-center gap-1.5">
              EXPLORE CAFE MENU
            </span>
            <span className="text-[9px] font-semibold tracking-widest text-purple-900/70 uppercase">
              Handcrafted Brews & Bites
            </span>
          </div>

          {/* Right Directional Arrow Badge */}
          <div className="w-8 h-8 rounded-full bg-purple-900/10 border border-purple-900/20 flex items-center justify-center text-slate-900 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(168,85,247,0.5)]">
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
          </div>
        </button>
      </div>

      {/* 2. SECONDARY LOCATE BUTTON */}
      <a 
        href={CAFE_INFO.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group w-full py-3.5 px-6 rounded-full bg-purple-950/40 border border-purple-500/40 text-purple-200 font-semibold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-purple-900/50 hover:border-amber-400/70 hover:text-white transition-all duration-300 active:scale-[0.98] shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:shadow-[0_0_30px_rgba(245,158,11,0.25)] cursor-pointer"
      >
        <span>Locate in BTM Layout, Bengaluru</span>
        <MapPin className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
      </a>

    </div>
  );
}
