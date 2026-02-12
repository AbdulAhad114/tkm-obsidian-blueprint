import React from 'react';
import { ViewType } from '../types';

interface Props {
  onNavigate?: (view: ViewType, id?: string) => void;
}

export const LifestyleBreak: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="relative w-full h-[400px] md:h-[550px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
        alt="Modern luxury kitchen and bathroom interior"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h2 className="font-display text-3xl md:text-5xl text-white mb-4 leading-tight">
          Crafted to Elevate Everyday Living
        </h2>
        <p className="text-white/80 text-sm md:text-base max-w-xl mb-8 leading-relaxed">
          From statement kitchen faucets to modern shower systems — discover fittings that combine function with refined design.
        </p>
        <button
          onClick={() => onNavigate && onNavigate('collection', 'featured-products')}
          className="bg-white text-tkm-black px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-tkm-brass hover:text-white transition-all duration-300"
        >
          Explore Best Sellers
        </button>
      </div>
    </section>
  );
};