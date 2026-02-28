import React from 'react';
import { ViewType } from '../types';
import { Check } from 'lucide-react';

interface Props {
  onNavigate?: (view: ViewType, id?: string) => void;
}

const features = ['Rainfall', 'Handheld', 'Thermostatic', 'Wall-Mounted'];

export const AdvancedShowers: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section id="wall-showers" className="py-12 md:py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Reverse 2-column: content left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-tkm-teal text-xs uppercase tracking-[0.2em] font-semibold">Upgrade</span>
            <h2 className="font-display text-3xl md:text-4xl text-tkm-black mt-2 mb-4">Advanced Shower Systems</h2>
            <p className="text-tkm-body text-sm md:text-base leading-relaxed mb-6">
              Rain showers and thermostatic sets engineered for immersive daily comfort. Designed to withstand high water pressure and everyday use.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-tkm-black">
                  <Check size={16} className="text-tkm-teal" /> {f}
                </div>
              ))}
            </div>
            <button
              onClick={() => onNavigate && onNavigate('collection', 'bathroom-wall-mounted-showers-imported')}
              className="bg-tkm-teal text-white px-8 py-3 rounded-md text-sm font-bold hover:bg-tkm-hover transition-colors"
            >
              Shop Shower Systems
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div 
              onClick={() => onNavigate && onNavigate('collection', 'bathroom-wall-mounted-showers-imported')}
              className="relative h-[250px] md:h-[350px] overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img 
                src="https://chinatradingcompany.pk/cdn/shop/files/23.jpg?v=1740048431&width=600" 
                alt="Piano Bath Set" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-5 bg-gradient-to-t from-black/70 to-transparent w-full">
                <h3 className="text-white text-sm md:text-base font-bold">Piano Bath Set</h3>
              </div>
            </div>
            <div 
              onClick={() => onNavigate && onNavigate('collection', 'bathroom-wall-mounted-showers-imported')}
              className="relative h-[250px] md:h-[350px] overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img 
                src="https://tkmtradingshop.com/cdn/shop/files/WhatsAppImage2024-08-07at9.04.28AM.jpg?v=1723047146"
                alt="Wall Hanging Showers"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-5 bg-gradient-to-t from-black/70 to-transparent w-full">
                <h3 className="text-white text-sm md:text-base font-bold">Wall Hanging Showers</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
