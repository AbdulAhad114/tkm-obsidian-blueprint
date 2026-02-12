import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ViewType } from '../types';

interface Props {
  onNavigate?: (view: ViewType, id?: string) => void;
}

export const BottomBanner: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="bg-tkm-teal py-[60px] md:py-[120px]">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="font-display text-3xl md:text-5xl text-white mb-6 leading-tight">
          Upgrade Your Space Today
        </h2>
        <div className="w-12 h-[2px] bg-tkm-brass mx-auto mb-8" />
        <p className="text-white/70 text-sm md:text-base mb-10 max-w-lg mx-auto">
          Transform your home with premium imported fittings. Free delivery across Pakistan.
        </p>
        <button
          onClick={() => onNavigate && onNavigate('collection', 'featured-products')}
          className="bg-white text-tkm-black px-10 py-4 uppercase text-xs font-bold tracking-[0.2em] hover:bg-tkm-brass hover:text-white transition-all duration-300 inline-flex items-center gap-2"
        >
          Shop Now <ArrowRight size={14} />
        </button>
      </div>
    </section>
  );
};