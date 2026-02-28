import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ViewType } from '../types';

interface Props {
  onNavigate?: (view: ViewType, id?: string) => void;
}

export const BottomBanner: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="bg-tkm-black py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="font-display text-3xl md:text-5xl text-white mb-5 leading-tight">
          Upgrade Your Space Today
        </h2>
        <p className="text-white/60 text-sm md:text-base mb-8 max-w-lg mx-auto">
          Transform your home with premium imported fittings. Free delivery across Pakistan.
        </p>
        <button
          onClick={() => onNavigate && onNavigate('collection', 'featured-products')}
          className="bg-tkm-teal text-white px-10 py-4 rounded-md text-sm font-bold hover:bg-tkm-hover transition-all duration-300 inline-flex items-center gap-2"
        >
          Shop Now <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};
