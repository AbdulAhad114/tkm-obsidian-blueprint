import React from 'react';
import { ViewType } from '../types';

interface HeroProps {
  onNavigate?: (view: ViewType, id?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden bg-[#d3cbb8]">
      {/* Background Image - Optimized Alt Text for SEO */}
      <img 
        src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2868&auto=format&fit=crop" 
        alt="Luxury Bathroom Sanitaryware and Gold Faucets by TKM Trading"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      {/* Stronger Overlay for Readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center w-full px-4 md:px-16">
        <div className="max-w-xl text-white md:pl-0 mt-12 md:mt-0">
          <span className="block text-tkm-teal font-bold tracking-widest uppercase text-xs mb-3">Official TKM Distributor</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-none drop-shadow-lg">
            Premium Sanitaryware <br/>
            <span className="font-light text-4xl md:text-6xl leading-none">& Luxury Kitchen Fittings</span>
          </h1>
          <p className="mb-8 text-gray-100 text-sm md:text-base font-medium max-w-md drop-shadow-md">
            Upgrade your home with Pakistan's finest imported faucets, rain showers, and smart organizers. Quality you can trust.
          </p>
          
          <div className="flex gap-4">
              <button 
                onClick={() => onNavigate && onNavigate('bath-landing')}
                className="inline-block bg-white text-black px-8 py-4 uppercase text-xs font-bold tracking-[0.2em] hover:bg-tkm-teal hover:text-white transition-all duration-300 shadow-xl cursor-pointer hover:-translate-y-1"
              >
                Shop Bathroom
              </button>
              <button 
                onClick={() => onNavigate && onNavigate('kitchen-landing')}
                className="inline-block border-2 border-white text-white px-8 py-4 uppercase text-xs font-bold tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 shadow-xl cursor-pointer hover:-translate-y-1"
              >
                Shop Kitchen
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};