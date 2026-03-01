import React, { useState, useEffect } from 'react';
import { ViewType, Product } from '../types';

interface Props {
  onNavigate?: (view: ViewType, id?: string) => void;
  onAddToCart?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
  products: Product[];
}

export const FlashSale: React.FC<Props> = ({ onNavigate }) => {
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
    <section 
      className="py-6 md:py-0 md:h-[100px] px-6 md:px-12"
      style={{ 
        backgroundColor: '#1B3A5C',
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 50%)',
        backgroundSize: '20px 20px'
      }}
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        {/* Left */}
        <div className="flex items-center gap-3 md:w-[30%]">
          <span className="text-2xl">🔥</span>
          <h2 className="font-display italic text-white text-xl md:text-[26px] leading-tight">
            Flash Sale — Up to 40% Off
          </h2>
        </div>

        {/* Center - Countdown */}
        <div className="flex gap-2 md:w-[40%] justify-center">
          {[
            { label: 'Days', value: pad(timeLeft.days) },
            { label: 'Hrs', value: pad(timeLeft.hours) },
            { label: 'Mins', value: pad(timeLeft.minutes) },
            { label: 'Secs', value: pad(timeLeft.seconds) },
          ].map(t => (
            <div key={t.label} className="bg-tkm-copper rounded-md w-[52px] h-[52px] flex flex-col items-center justify-center">
              <span className="text-tkm-navy font-bold text-[22px] leading-none">{t.value}</span>
              <span className="text-white text-[9px] uppercase tracking-wide mt-0.5">{t.label}</span>
            </div>
          ))}
        </div>

        {/* Right */}
        <div className="md:w-[30%] flex justify-end">
          <button
            onClick={() => onNavigate && onNavigate('collection', 'featured-products')}
            className="bg-white text-tkm-navy px-6 py-2.5 rounded text-[11px] font-semibold uppercase tracking-[1.5px] hover:bg-tkm-copper hover:text-white transition-colors"
          >
            Shop the Sale →
          </button>
        </div>
      </div>
    </section>
  );
};