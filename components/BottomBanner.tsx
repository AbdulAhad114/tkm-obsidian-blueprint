import React from 'react';
import { ViewType } from '../types';

interface Props {
  onNavigate?: (view: ViewType, id?: string) => void;
}

export const BottomBanner: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2868&auto=format&fit=crop"
        alt="Upgrade your space with TKM luxury fittings Pakistan"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: 'rgba(27,58,92,0.75)' }} />
      
      <div className="relative z-10 text-center px-6 py-16 md:py-24">
        <h2 className="font-display text-3xl md:text-[48px] text-white mb-4 leading-tight">
          Ready to Upgrade Your Space?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
          Transform your home with premium imported fittings. Free delivery across Pakistan.
        </p>
        <button
          onClick={() => onNavigate && onNavigate('collection', 'featured-products')}
          className="bg-tkm-copper text-tkm-navy px-10 py-4 rounded text-[12px] font-bold uppercase tracking-[1.5px] hover:brightness-110 transition-all inline-flex items-center gap-2"
        >
          Shop the Collection →
        </button>
      </div>
    </section>
  );
};