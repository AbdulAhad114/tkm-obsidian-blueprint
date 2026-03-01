import React, { useState, useEffect } from 'react';
import { ViewType } from '../types';

interface HeroProps {
  onNavigate?: (view: ViewType, id?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stagger = (delay: number) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  return (
    <div className="relative w-full min-h-[92vh] overflow-hidden flex items-center">
      <img 
        src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2868&auto=format&fit=crop" 
        alt="Luxury Bathroom Sanitaryware and Gold Faucets by TKM Trading Pakistan"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      {/* Navy gradient overlay */}
      <div 
        className="absolute inset-0" 
        style={{ background: 'linear-gradient(110deg, rgba(27,58,92,0.82) 0%, rgba(27,58,92,0.45) 50%, rgba(0,0,0,0.1) 100%)' }}
      />

      <div className="relative z-10 w-full px-[8%] py-20">
        <div className="max-w-[580px]">
          <span 
            className="inline-block text-tkm-copper text-[11px] font-medium uppercase tracking-[3px] mb-6"
            style={stagger(0.1)}
          >
            PREMIUM IMPORTED FITTINGS — PAKISTAN
          </span>
          
          <h1 
            className="font-display text-4xl md:text-[60px] font-bold mb-0 leading-[1.15] text-white"
            style={stagger(0.3)}
          >
            Luxury Kitchen &<br />
            Bathroom Fittings<br />
            For Modern Homes
          </h1>

          {/* Copper rule */}
          <div 
            className="w-10 h-[1px] bg-tkm-copper my-6"
            style={stagger(0.5)}
          />
          
          <p 
            className="mb-8 text-white/80 text-lg font-display italic max-w-lg leading-relaxed"
            style={stagger(0.6)}
          >
            Crafted for lasting elegance. Imported from the world's finest manufacturers.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8" style={stagger(0.8)}>
            <button 
              onClick={() => onNavigate && onNavigate('collection', 'featured-products')}
              className="bg-tkm-teal text-white px-9 py-4 rounded text-[12px] font-semibold uppercase tracking-[1.5px] hover:bg-tkm-teal-hover transition-all duration-300 cursor-pointer"
            >
              Explore Collection
            </button>
            <button 
              onClick={() => onNavigate && onNavigate('collection', 'featured-products')}
              className="border-[1.5px] border-white text-white px-9 py-4 rounded text-[12px] font-semibold uppercase tracking-[1.5px] hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              View Lookbook
            </button>
          </div>

          <div className="flex flex-wrap gap-4 text-white text-[13px]" style={stagger(1.0)}>
            <span>Genuine Imports</span>
            <span className="text-tkm-copper">◆</span>
            <span>Nationwide Delivery</span>
            <span className="text-tkm-copper">◆</span>
            <span>1-Year Warranty</span>
          </div>
        </div>
      </div>

      {/* Floating product highlight card */}
      <div 
        className="hidden lg:block absolute right-[8%] bottom-16 z-10"
        style={stagger(1.2)}
      >
        <div className="backdrop-blur-[12px] rounded-xl p-5 px-6 border border-white/20" style={{ background: 'rgba(255,255,255,0.12)' }}>
          <span className="text-tkm-copper text-[10px] font-semibold uppercase tracking-[2px]">FEATURED</span>
          <p className="text-white font-semibold text-[15px] mt-1.5 mb-1">Victorian Dual Kitchen Faucet</p>
          <p className="text-tkm-copper font-bold text-sm mb-2">PKR 7,500</p>
          <button 
            onClick={() => onNavigate && onNavigate('product', 'k1')}
            className="text-white text-xs hover:text-tkm-teal transition-colors"
          >
            View →
          </button>
        </div>
      </div>
    </div>
  );
};