import React from 'react';
import { ViewType } from '../types';

interface Props {
  onNavigate?: (view: ViewType, id?: string) => void;
}

const features = [
  { title: 'Rainfall Head', desc: 'Full coverage luxury shower' },
  { title: 'Thermostatic Control', desc: 'Precise temperature setting' },
  { title: 'Handheld Options', desc: 'Flexible daily use' },
  { title: 'Wall-Mounted', desc: 'Clean modern installation' },
];

export const AdvancedShowers: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section id="wall-showers" className="bg-tkm-cream">
      <div className="max-w-[1920px] mx-auto">
        {/* Reverse 2-column: content left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left — content */}
          <div className="py-16 md:py-20 px-8 md:px-16 flex flex-col justify-center order-2 lg:order-1">
            <span className="inline-block bg-tkm-teal text-white text-[11px] font-medium uppercase tracking-[3px] px-4 py-1.5 rounded-sm mb-4 w-fit">UPGRADE</span>
            <h2 className="font-display text-3xl md:text-[42px] text-tkm-navy leading-tight mb-0">Advanced Shower Systems</h2>
            <div className="w-10 h-[1px] bg-tkm-copper my-5" />
            <p className="text-tkm-body text-base leading-[1.7] mb-8 max-w-md">
              Rain showers and thermostatic sets engineered for immersive daily comfort. Designed to withstand high water pressure and everyday use.
            </p>
            
            <div className="grid grid-cols-2 gap-5 mb-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-1 h-6 bg-tkm-copper rounded-full mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[13px] font-semibold text-tkm-navy">{f.title}</p>
                    <p className="text-[12px] text-tkm-muted">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              onClick={() => onNavigate && onNavigate('collection', 'bathroom-wall-mounted-showers-imported')}
              className="bg-tkm-navy text-white px-8 py-3.5 rounded text-[12px] font-semibold uppercase tracking-[1.5px] hover:bg-tkm-teal transition-colors w-fit"
            >
              Shop Shower Systems →
            </button>
          </div>

          {/* Right — image */}
          <div className="relative h-[350px] lg:h-auto lg:min-h-[560px] order-1 lg:order-2">
            <img 
              src="https://chinatradingcompany.pk/cdn/shop/files/23.jpg?v=1740048431&width=600" 
              alt="Advanced Shower Systems Pakistan - Rain Showers and Thermostatic Sets"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};