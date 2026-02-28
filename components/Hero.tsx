import React from 'react';
import { ViewType } from '../types';
import { Check } from 'lucide-react';

interface HeroProps {
  onNavigate?: (view: ViewType, id?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative w-full min-h-[90vh] overflow-hidden flex items-center">
      <img 
        src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2868&auto=format&fit=crop" 
        alt="Luxury Bathroom Sanitaryware and Gold Faucets by TKM Trading"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 w-full px-6 md:px-16 py-20">
        <div className="max-w-2xl">
          <span className="inline-block bg-tkm-teal text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
            Premium Imported Fittings
          </span>
          <h1 className="font-display text-4xl md:text-[52px] font-bold mb-5 leading-[1.15] text-white drop-shadow-lg">
            Transform Your Kitchen & Bathroom With Luxury Fittings
          </h1>
          <p className="mb-8 text-white/90 text-base md:text-lg font-light max-w-lg drop-shadow-md leading-relaxed">
            Genuine imported sanitaryware and kitchen fittings, delivered across Pakistan
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <button 
              onClick={() => onNavigate && onNavigate('collection', 'featured-products')}
              className="bg-tkm-teal text-white px-8 py-3 rounded-md text-sm font-bold hover:bg-tkm-hover transition-all duration-300 shadow-lg cursor-pointer"
            >
              Shop Now
            </button>
            <button 
              onClick={() => onNavigate && onNavigate('collection', 'featured-products')}
              className="border-2 border-white text-white px-8 py-3 rounded-md text-sm font-bold hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              View Catalogue
            </button>
          </div>

          <div className="flex flex-wrap gap-5 text-white/80 text-xs md:text-sm">
            <span className="flex items-center gap-1.5"><Check size={14} className="text-tkm-teal" /> Genuine Imports</span>
            <span className="flex items-center gap-1.5"><Check size={14} className="text-tkm-teal" /> Nationwide Delivery</span>
            <span className="flex items-center gap-1.5"><Check size={14} className="text-tkm-teal" /> 1-Year Warranty</span>
          </div>
        </div>
      </div>
    </div>
  );
};
