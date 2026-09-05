import React from 'react';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Coffee, 
  Utensils, 
  Flame, 
  Sparkles, 
  Moon, 
  Croissant, 
  CupSoda 
} from 'lucide-react';
import { MENU_CATEGORIES } from '../data/menuData';

export default function MenuPage({ onBackToHome, onSelectCategory }) {
  // Helper icon selector for small category emblems
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Coffee': return <Coffee className="w-3.5 h-3.5 text-amber-300" />;
      case 'CupSoda': return <CupSoda className="w-3.5 h-3.5 text-emerald-300" />;
      case 'Flame': return <Flame className="w-3.5 h-3.5 text-rose-300" />;
      case 'Utensils': return <Utensils className="w-3.5 h-3.5 text-purple-300" />;
      case 'Croissant': return <Croissant className="w-3.5 h-3.5 text-amber-300" />;
      case 'Sparkles': return <Sparkles className="w-3.5 h-3.5 text-amber-300" />;
      case 'Moon': return <Moon className="w-3.5 h-3.5 text-pink-300" />;
      default: return <Coffee className="w-3.5 h-3.5 text-purple-300" />;
    }
  };

  return (
    <div className="w-full flex flex-col min-h-full animate-in fade-in duration-300">
      
      {/* 1. LUXURY TOP NAVIGATION BAR */}
      <header className="flex items-center justify-between py-2 mb-5 border-b border-purple-500/20 pb-3">
        {/* Back to Home Button */}
        <button 
          onClick={onBackToHome}
          className="flex items-center gap-1.5 py-1.5 px-3.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-200 text-xs font-semibold hover:border-amber-400/80 hover:text-white transition active:scale-95 cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.15)]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>

        {/* Center Title */}
        <div className="text-center">
          <h1 className="text-sm font-extrabold tracking-widest text-white font-sans">
            AMAIA'S
          </h1>
        </div>

        {/* Brand Logo — gold shimmer on its own lines */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <img
            src="/logo-emblem.png"
            alt="Emblem"
            className="logo-gold-shimmer w-full h-full object-contain"
          />
        </div>
      </header>

      {/* 2. SUBTLE SECTION HEADING */}
      <div className="mb-3.5 px-0.5">
        <div className="flex items-center gap-2">
          <div className="h-[1px] w-4 bg-gradient-to-r from-transparent to-amber-400/60" />
          <span className="text-[10px] uppercase tracking-[0.25em] font-mono font-bold text-amber-300/90">
            Select A Category
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-amber-400/60 via-purple-500/20 to-transparent" />
        </div>
        <p className="text-[11px] text-purple-200/60 mt-0.5">
          Tap any card to explore handcrafted dishes & prices
        </p>
      </div>

      {/* 3. MOBILE-OPTIMIZED 2-COLUMN LUXURY BENTO GRID */}
      <div className="grid grid-cols-2 gap-3 mb-10">
        {MENU_CATEGORIES.map((cat, idx) => {
          const isLastOdd = idx === MENU_CATEGORIES.length - 1 && MENU_CATEGORIES.length % 2 !== 0;

          // If last odd card (e.g. 9th category: Ice Cream Scoops), span full width as an elegant dessert banner
          if (isLastOdd) {
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="col-span-2 group relative p-3 rounded-2xl bg-gradient-to-br from-[#120a2e]/95 via-[#0e0722]/85 to-[#080414]/95 border border-purple-500/25 hover:border-amber-400/80 transition-all duration-300 backdrop-blur-xl text-left cursor-pointer active:scale-[0.98] overflow-hidden flex items-center justify-between gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]"
              >
                {/* Dynamic Ambient Glow */}
                <div 
                  className="absolute -right-6 -bottom-6 w-36 h-36 rounded-full blur-2xl opacity-25 group-hover:opacity-50 transition-opacity pointer-events-none"
                  style={{ backgroundColor: cat.glowColor || 'rgba(168,85,247,0.35)' }}
                />

                <div className="flex-1 min-w-0 z-10">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className={`text-[8px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded-full border ${cat.badgeColor}`}>
                      ✦ {cat.badge}
                    </span>
                  </div>
                  <h2 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors truncate">
                    {cat.title}
                  </h2>
                  <p className="text-[10px] text-purple-200/60 line-clamp-1 mt-0.5">
                    {cat.tagline}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[9px] text-purple-300/80 font-mono px-2 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30">
                      {cat.items.length} items
                    </span>
                  </div>
                </div>

                {/* Photo Thumbnail */}
                <div className="relative shrink-0 z-10 w-20 h-20 rounded-xl overflow-hidden border border-white/15 group-hover:border-amber-400/70 shadow-md">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50" />
                  <div className="absolute bottom-1 right-1 w-5 h-5 rounded-md bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    {getIcon(cat.icon)}
                  </div>
                </div>
              </button>
            );
          }

          // Standard 2-Column Bento Card
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="col-span-1 group relative p-2.5 rounded-2xl bg-gradient-to-br from-[#120a2e]/95 via-[#0e0722]/85 to-[#080414]/95 border border-purple-500/25 hover:border-amber-400/80 transition-all duration-300 backdrop-blur-xl text-left cursor-pointer active:scale-[0.97] overflow-hidden flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]"
            >
              {/* Ambient Glow */}
              <div 
                className="absolute -right-4 -bottom-4 w-28 h-28 rounded-full blur-2xl opacity-20 group-hover:opacity-45 transition-opacity pointer-events-none"
                style={{ backgroundColor: cat.glowColor || 'rgba(168,85,247,0.35)' }}
              />

              {/* Dish Photo */}
              <div className="w-full h-24 rounded-xl overflow-hidden border border-white/15 group-hover:border-amber-400/70 shadow-md relative shrink-0">
                <img 
                  src={cat.image} 
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                {/* Mini Category Icon */}
                <div className="absolute bottom-1.5 right-1.5 w-5 h-5 rounded-md bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  {getIcon(cat.icon)}
                </div>
              </div>

              {/* Details */}
              <div className="mt-2.5 z-10 flex flex-col">
                <div className="flex items-center justify-between gap-1">
                  <h2 className="text-[13px] font-bold text-white group-hover:text-amber-300 transition-colors truncate">
                    {cat.title}
                  </h2>
                  <ArrowUpRight className="w-3.5 h-3.5 text-purple-400 group-hover:text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </div>

                <div className="flex items-center justify-between mt-1.5 pt-1.5 border-t border-purple-500/15">
                  <span className={`text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border ${cat.badgeColor}`}>
                    {cat.badge.split(' ')[0]}
                  </span>
                  <span className="text-[9px] text-purple-300/70 font-mono">
                    {cat.items.length} items
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
}
