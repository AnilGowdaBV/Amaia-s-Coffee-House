import React from 'react';
import Header from '../components/Header';
import Specialties from '../components/Specialties';
import ActionButtons from '../components/ActionButtons';
import { CAFE_INFO } from '../data/cafeData';
import { MapPin } from 'lucide-react';

export default function LandingPage({ onExploreMenu, onReplayIntro }) {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Header with Brand Badge */}
      <Header />

      {/* 2. Hero Storefront Photo Showcase with Cinematic Animations */}
      <div className="relative mb-7 flex justify-center animate-photo-float">
        
        {/* Subtle Cosmic Orbital Halos Behind the Photo (Matching Reference Aesthetic) */}
        <div className="absolute -inset-6 rounded-full border border-purple-500/15 animate-spin-slow pointer-events-none"></div>
        <div className="absolute -inset-10 rounded-full border border-dashed border-amber-500/10 animate-spin-slow-reverse pointer-events-none"></div>

        {/* Ambient Multi-Color Radial Back Glow */}
        <div className="absolute -inset-1.5 rounded-[2.4rem] bg-gradient-to-r from-purple-600/30 via-amber-500/25 to-violet-500/20 blur-xl opacity-75 pointer-events-none"></div>
        
        {/* Cinematic Framed Card with Glass Specular Sheen */}
        <div className="relative w-full rounded-[2rem] overflow-hidden border border-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.25)] bg-black/50 group">
          
          {/* Main Photo with Slow Living Ken Burns Breathing Zoom */}
          <div className="w-full overflow-hidden">
            <img 
              src="/cafe-storefront.jpg" 
              alt={`${CAFE_INFO.name} Storefront`}
              className="w-full h-auto object-cover block animate-photo-zoom group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Sweeping Luxury Lens Light Reflection */}
          <div className="absolute inset-0 w-[40%] h-[200%] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none animate-lens-sweep"></div>

          {/* Subtle Glass Edge Rim Glow */}
          <div className="absolute inset-0 rounded-[2rem] border border-white/10 pointer-events-none"></div>
        </div>
      </div>

      {/* 3. Brand Identity & Typography */}
      <div className="text-center mb-7">
        <p className="text-[11px] tracking-[0.25em] text-purple-300/80 uppercase font-mono mb-1.5">
          Welcome To
        </p>

        <h1 className="text-3xl font-extrabold tracking-tight text-white mb-1">
          {CAFE_INFO.name.slice(0, -2)}
          <span className="text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">
            {CAFE_INFO.name.slice(-2)}
          </span>
        </h1>

        <p className="text-sm font-semibold text-purple-300 mb-1.5">
          {CAFE_INFO.subname.charAt(0) + CAFE_INFO.subname.slice(1).toLowerCase()}{' '}
          <span className="text-purple-400/60">•</span> {CAFE_INFO.kannadaName}
        </p>

        <p className="text-xs text-purple-200/70 leading-relaxed max-w-[320px] mx-auto">
          {CAFE_INFO.tagline}
        </p>
      </div>

      {/* 4. Compact Capsule Specialties */}
      <Specialties />

      {/* 5. Action Buttons */}
      <ActionButtons onExploreMenu={onExploreMenu} />

      {/* 6. Address & About Teaser */}
      <div className="text-center pt-2">
        <h2 className="text-xl font-bold tracking-tight">
          <span>Welcome to </span>
          <span className="text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.6)]">Our Space</span>
        </h2>
        
        <p className="text-xs text-slate-400 mt-2 leading-relaxed max-w-[330px] mx-auto">
          {CAFE_INFO.description}
        </p>

        {/* Official Address Capsule */}
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-purple-950/30 border border-purple-500/25 text-[11px] text-purple-200/85">
          <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>{CAFE_INFO.address}</span>
        </div>
      </div>

      {/* 7. Footer */}
      <footer className="mt-8 text-center text-[10px] text-purple-300/40 tracking-wider">
        <p>© {new Date().getFullYear()} {CAFE_INFO.name} {CAFE_INFO.subname}. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
