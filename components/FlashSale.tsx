import React, { useState, useEffect } from 'react';
import { ViewType, Product } from '../types';
import { ProductCard } from './ProductCard';

interface Props {
  onNavigate?: (view: ViewType, id?: string) => void;
  onAddToCart?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
  products: Product[];
}

export const FlashSale: React.FC<Props> = ({ onNavigate, onAddToCart, onQuickView, products }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 4, hours: 14, minutes: 48, seconds: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <section className="bg-tkm-teal py-12 md:py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="text-white">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold opacity-80">Limited Time</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-8 leading-tight">
              Flash Sale — Up to 40% Off
            </h2>
            <div className="flex gap-3 mb-8">
              {[
                { label: 'Days', value: pad(timeLeft.days) },
                { label: 'Hours', value: pad(timeLeft.hours) },
                { label: 'Minutes', value: pad(timeLeft.minutes) },
                { label: 'Seconds', value: pad(timeLeft.seconds) },
              ].map(t => (
                <div key={t.label} className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 text-center min-w-[70px]">
                  <span className="text-2xl md:text-3xl font-bold block">{t.value}</span>
                  <span className="text-[10px] uppercase tracking-wider opacity-80">{t.label}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => onNavigate && onNavigate('collection', 'featured-products')}
              className="bg-white text-tkm-teal px-8 py-3 rounded-md text-sm font-bold hover:bg-tkm-gray transition-colors"
            >
              Shop the Sale
            </button>
          </div>

          {/* Right Products */}
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {products.slice(0, 4).map(p => (
              <div key={p.id} className="min-w-[200px] md:min-w-[220px] flex-shrink-0">
                <ProductCard product={p} onAddToCart={onAddToCart} onQuickView={onQuickView} onNavigate={onNavigate} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
