import React from 'react';
import { 
  ArrowLeft, 
  Coffee, 
  Utensils, 
  Flame, 
  Sparkles, 
  Moon, 
  Croissant, 
  CupSoda 
} from 'lucide-react';
import { MENU_CATEGORIES } from '../data/menuData';

export default function CategoryPage({ categoryId, onBackToCategories }) {
  const category = MENU_CATEGORIES.find(c => c.id === categoryId) || MENU_CATEGORIES[0];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Coffee': return <Coffee className="w-6 h-6 text-amber-300 shrink-0" />;
      case 'CupSoda': return <CupSoda className="w-6 h-6 text-emerald-300 shrink-0" />;
      case 'Flame': return <Flame className="w-6 h-6 text-rose-300 shrink-0" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-purple-300 shrink-0" />;
      case 'Croissant': return <Croissant className="w-6 h-6 text-amber-300 shrink-0" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-300 shrink-0" />;
      case 'Moon': return <Moon className="w-6 h-6 text-fuchsia-300 shrink-0" />;
      default: return <Coffee className="w-6 h-6 text-purple-300 shrink-0" />;
    }
  };

  return (
    <div className="w-full flex flex-col min-h-full animate-in fade-in duration-300">
      
      {/* 1. TOP HEADER WITH BACK BUTTON */}
      <header className="flex items-center justify-between py-2 mb-6 border-b border-purple-500/20 pb-3">
        {/* Back Button */}
        <button 
          onClick={onBackToCategories}
          className="flex items-center gap-2 py-2 px-4 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-200 text-xs font-semibold hover:border-amber-400/80 hover:text-white transition active:scale-95 cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.15)]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Categories</span>
        </button>

        {/* Center Brand */}
        <div className="text-center">
          <div className="text-sm font-extrabold tracking-widest text-white font-sans">
            AMAIA'S
          </div>
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

      {/* 2. ELEGANT CATEGORY BANNER */}
      <div className="relative rounded-3xl overflow-hidden border border-purple-500/25 mb-5 shadow-2xl">
        <div className="h-36 w-full relative overflow-hidden">
          <img 
            src={category.image} 
            alt={category.title} 
            className="w-full h-full object-cover filter brightness-[0.55]"
          />
          {/* Subtle Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090518] via-[#090518]/60 to-transparent" />
          
          {/* Overlay Info */}
          <div className="absolute inset-0 p-4 flex flex-col justify-end">
            <span className="text-[10px] font-mono tracking-widest uppercase text-amber-300 font-bold mb-0.5">
              ✦ Handcrafted Brews
            </span>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              {category.title}
            </h1>
            <p className="text-xs text-purple-200/70 mt-0.5">
              {category.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* 3. CLEAN & ELEGANT MENU RATE CHART */}
      <div className="rounded-3xl bg-[#0c081e]/85 border border-purple-500/20 shadow-xl backdrop-blur-xl overflow-hidden mb-8">
        
        {/* Table Header */}
        <div className="px-5 py-3 border-b border-purple-500/15 flex items-center justify-between text-[11px] font-mono tracking-widest text-purple-300/80 uppercase">
          <span>Item</span>
          <span>Price</span>
        </div>

        {/* Item Rows */}
        <div className="divide-y divide-purple-500/10">
          {category.items.map((item, idx) => (
            <div 
              key={idx}
              className="px-5 py-3.5 flex items-center justify-between gap-3 hover:bg-purple-500/10 transition-colors"
            >
              {/* Veg Indicator + Item Name */}
              <div className="flex items-center gap-3 min-w-0">
                <span 
                  className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center shrink-0 ${
                    item.isVeg 
                      ? 'border-emerald-500/90 bg-emerald-950/50' 
                      : 'border-rose-500/90 bg-rose-950/50'
                  }`}
                  title={item.isVeg ? "Veg" : "Non-Veg"}
                >
                  <span 
                    className={`w-1.5 h-1.5 rounded-full ${
                      item.isVeg ? 'bg-emerald-400' : 'bg-rose-400'
                    }`}
                  />
                </span>

                <span className="text-sm font-semibold text-slate-100 tracking-tight">
                  {item.name}
                </span>
              </div>

              {/* Price */}
              <div className="shrink-0">
                <span className="text-base font-bold font-mono text-amber-300">
                  ₹{item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
