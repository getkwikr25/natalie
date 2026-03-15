
import React from 'react';

export const COLORS = {
  primary: '#4A5D4E', // Deep Sage
  secondary: '#D9B99B', // Muted Terracotta/Sand
  background: '#FDFBF7', // Off-white cream
  text: '#2D3436',
  accent: '#A4B494' // Lighter Sage
};

export const LOGO = (
  <div className="flex items-center gap-3">
    <div className="relative w-12 h-12 flex items-center justify-center">
      <div className="absolute inset-0 bg-[#A4B494] rounded-full opacity-20"></div>
      <svg viewBox="0 0 100 100" className="w-10 h-10 text-[#4A5D4E]">
        <path fill="currentColor" d="M50 10C35 10 20 25 20 45C20 65 50 90 50 90C50 90 80 65 80 45C80 25 65 10 50 10ZM50 55C44.5 55 40 50.5 40 45C40 39.5 44.5 35 50 35C55.5 35 60 39.5 60 45C60 50.5 55.5 55 50 55Z" />
      </svg>
    </div>
    <div className="flex flex-col">
      <span className="serif text-lg font-bold leading-tight tracking-tight text-[#4A5D4E]">Healing at the</span>
      <span className="serif text-lg font-bold leading-tight tracking-tight text-[#4A5D4E]">Intersections</span>
    </div>
  </div>
);

export const MONSTERA_HERO = "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1964&auto=format&fit=crop";
