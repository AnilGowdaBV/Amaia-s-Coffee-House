import React, { useEffect, useRef } from 'react';

export default function CosmicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle Palette: Violet Cosmic Dust + Warm Coffee Amber Embers
    const colors = [
      'rgba(168, 85, 247, ',   // Neon Violet
      'rgba(192, 132, 252, ',  // Lavender Glow
      'rgba(245, 158, 11, ',   // Warm Amber Ember
      'rgba(251, 191, 36, ',   // Golden Stardust
      'rgba(139, 92, 246, '    // Deep Purple
    ];

    const particleCount = Math.min(45, Math.floor(width / 15));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.8,
      color: colors[Math.floor(Math.random() * colors.length)],
      baseAlpha: Math.random() * 0.5 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      angle: Math.random() * Math.PI * 2,
      vy: -(Math.random() * 0.35 + 0.15), // Slow upward drift
      vx: (Math.random() - 0.5) * 0.25,   // Gentle sway
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Update positions
        p.y += p.vy;
        p.x += p.vx + Math.sin(p.angle) * 0.2;
        p.angle += p.pulseSpeed;

        // Reset when moving off screen
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Calculate pulsing glow opacity
        const alpha = Math.max(0.1, p.baseAlpha + Math.sin(p.angle) * 0.25);

        // Draw glowing particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `${p.color}0.8)`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* 1. Subtle Digital Grid */}
      <div className="absolute inset-0 cosmic-grid opacity-25"></div>

      {/* 2. Living Breathing Nebulas (Smooth CSS Animations) */}
      <div 
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-purple-600/15 rounded-full blur-[130px] animate-pulse" 
        style={{ animationDuration: '6s' }}
      ></div>

      <div 
        className="absolute top-1/3 -right-24 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[110px] animate-pulse" 
        style={{ animationDuration: '8s', animationDelay: '1s' }}
      ></div>

      <div 
        className="absolute bottom-16 -left-20 w-[320px] h-[320px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse" 
        style={{ animationDuration: '7s', animationDelay: '2s' }}
      ></div>

      {/* 3. HTML5 Canvas for Floating Ambient Stardust & Roast Embers */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
}
