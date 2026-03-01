import React from 'react';
import { ViewType } from '../types';

interface ShopByAreaProps {
  onNavigate?: (view: ViewType, id?: string) => void;
}

const categories = [
  { title: 'Kitchen Faucets', count: 18, link: 'kitchen-faucets-imported', image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=400&q=80' },
  { title: 'Shower Systems', count: 24, link: 'bathroom-wall-mounted-showers-imported', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=400&q=80' },
  { title: 'Stainless Sinks', count: 12, link: 'kitchen-sinks', image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=400&q=80' },
  { title: 'Basin Mixers', count: 20, link: 'bathroom-faucets-imported', image: 'https://images.unsplash.com/photo-1520032525096-7bd04a94b568?auto=format&fit=crop&w=400&q=80' },
  { title: 'Bathroom Sets', count: 30, link: 'bathroom-faucets-imported', image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=400&q=80' },
  { title: 'Accessories', count: 15, link: 'kitchen-accessories', image: 'https://images.unsplash.com/photo-1585913217436-3e2a5d5e533c?auto=format&fit=crop&w=400&q=80' },
  { title: 'Water Filters', count: 8, link: 'kitchen-accessories', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80' },
];

export const ShopByArea: React.FC<ShopByAreaProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-tkm-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-tkm-teal text-white text-[11px] font-medium uppercase tracking-[3px] px-4 py-1.5 rounded-sm mb-4">CATEGORIES</span>
          <h2 className="font-display text-3xl md:text-[42px] text-tkm-navy leading-tight">Shop By Category</h2>
        </div>

        {/* 7-tile grid — all visible */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => onNavigate && onNavigate('collection', cat.link)}
              className="relative overflow-hidden rounded cursor-pointer group"
              style={{ aspectRatio: '3/4' }}
            >
              <img 
                src={cat.image} 
                alt={`${cat.title} - Premium fittings Pakistan`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.06]"
                loading="lazy"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(27,58,92,0.85) 0%, transparent 55%)' }} />
              
              {/* Hover border */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: 'inset 0 0 0 2px #008B9B' }} />
              
              {/* Text */}
              <div className="absolute bottom-0 left-0 p-4 transition-transform duration-300 group-hover:-translate-y-1">
                <h3 className="font-display italic text-white text-base leading-tight">{cat.title}</h3>
                <p className="text-tkm-copper text-[11px] mt-1">{cat.count} Products</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};