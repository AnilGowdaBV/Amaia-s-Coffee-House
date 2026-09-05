import React, { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import MenuPage from './pages/MenuPage';
import CategoryPage from './pages/CategoryPage';
import CosmicBackground from './components/CosmicBackground';
import EntrySplash from './components/EntrySplash';

export default function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing' | 'menu' | 'category'
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [showSplash, setShowSplash] = useState(() => {
    // Only show for the first time in session (e.g. when QR code is scanned)
    return !sessionStorage.getItem('amaias_qr_intro_seen');
  });

  const handleSplashFinish = () => {
    sessionStorage.setItem('amaias_qr_intro_seen', 'true');
    setShowSplash(false);
  };

  const handleReplayIntro = () => {
    setShowSplash(true);
  };

  const navigateTo = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (categoryId) => {
    setSelectedCategoryId(categoryId);
    navigateTo('category');
  };

  return (
    <div className="min-h-screen bg-[#06040d] text-slate-100 relative overflow-x-hidden flex justify-center selection:bg-purple-500/30 selection:text-purple-200">
      
      {/* 1. First-Time QR Code Scan Entry Splash Animation */}
      {showSplash && <EntrySplash onFinish={handleSplashFinish} />}

      {/* 2. Living Ambient Cosmic Background with Particles & Shifting Nebulas */}
      <CosmicBackground />

      {/* 3. Main Mobile Screen Wrapper */}
      <main className="w-full max-w-[430px] min-h-screen flex flex-col relative z-10 px-5 pt-5 pb-16 sm:my-8 sm:min-h-0 sm:rounded-[3rem] sm:border sm:border-purple-500/20 sm:shadow-[0_0_60px_rgba(168,85,247,0.18)] sm:bg-[#070512]/80 sm:backdrop-blur-2xl">
        
        {/* View 1: Landing Page */}
        {currentView === 'landing' && (
          <LandingPage 
            onExploreMenu={() => navigateTo('menu')} 
            onReplayIntro={handleReplayIntro}
          />
        )}

        {/* View 2: The 9 Category Cards Overview (Tap card to open dedicated page) */}
        {currentView === 'menu' && (
          <MenuPage 
            onBackToHome={() => navigateTo('landing')}
            onSelectCategory={handleSelectCategory}
          />
        )}

        {/* View 3: Dedicated Category Page for Selected Domain */}
        {currentView === 'category' && (
          <CategoryPage 
            categoryId={selectedCategoryId}
            onBackToCategories={() => navigateTo('menu')}
          />
        )}

      </main>
    </div>
  );
}
