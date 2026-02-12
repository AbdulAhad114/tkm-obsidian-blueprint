import React from 'react';
import { ViewType } from '../types';

interface HeroProps {
  onNavigate?: (view: ViewType, id?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2868&auto=format&fit=crop" 
        alt="Luxury Bathroom Sanitaryware and Gold Faucets by TKM Trading"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

      <div className="absolute inset-0 flex items-center w-full px-6 md:px-16">
        <div className="max-w-xl text-white mt-12 md:mt-0">
          <div className="w-12 h-[2px] bg-tkm-brass mb-6" />
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            Premium Sanitaryware & Luxury Kitchen Fittings in Pakistan
          </h1>
          <p className="mb-10 text-gray-200 text-sm md:text-base font-light max-w-md drop-shadow-md leading-relaxed">
            Modern designs. Durable finishes. Trusted by thousands of homes.
          </p>
          
          <button 
            onClick={() => onNavigate && onNavigate('collection', 'featured-products')}
            className="bg-white text-tkm-black px-10 py-4 uppercase text-xs font-bold tracking-[0.2em] hover:bg-tkm-brass hover:text-white transition-all duration-300 shadow-xl cursor-pointer"
          >
            Shop Collection
          </button>
        </div>
      </div>
    </div>
  );
};