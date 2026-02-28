import React, { useRef } from 'react';
import { ViewType } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ShopByAreaProps {
  onNavigate?: (view: ViewType, id?: string) => void;
}

const categories = [
  { title: 'Kitchen Faucets', count: 18, link: 'kitchen-faucets-imported', image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=400&q=80' },
  { title: 'Shower Systems', count: 24, link: 'bathroom-wall-mounted-showers-imported', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=400&q=80' },
  { title: 'Stainless Sinks', count: 12, link: 'kitchen-sinks', image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=400&q=80' },
  { title: 'Bathroom Fittings', count: 30, link: 'bathroom-faucets-imported', image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=400&q=80' },
  { title: 'Accessories', count: 15, link: 'kitchen-accessories', image: 'https://images.unsplash.com/photo-1585913217436-3e2a5d5e533c?auto=format&fit=crop&w=400&q=80' },
  { title: 'Basin Mixers', count: 20, link: 'bathroom-faucets-imported', image: 'https://images.unsplash.com/photo-1520032525096-7bd04a94b568?auto=format&fit=crop&w=400&q=80' },
  { title: 'Water Filters', count: 8, link: 'kitchen-accessories', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80' },
];

export const ShopByArea: React.FC<ShopByAreaProps> = ({ onNavigate }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -280 : 280, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-tkm-teal text-xs uppercase tracking-[0.2em] font-semibold">Browse</span>
          <h2 className="font-display text-3xl md:text-4xl text-tkm-black mt-2 mb-3">Shop By Category</h2>
          <div className="w-12 h-[2px] bg-tkm-brass mx-auto" />
        </div>

        <div className="relative">
          <button onClick={() => scroll('left')} className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-10 h-10 items-center justify-center hover:bg-tkm-gray transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => scroll('right')} className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-10 h-10 items-center justify-center hover:bg-tkm-gray transition-colors">
            <ChevronRight size={20} />
          </button>

          <div ref={scrollRef} className="flex gap-4 md:gap-5 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate && onNavigate('collection', cat.link)}
                className="flex-shrink-0 w-[45%] md:w-[180px] cursor-pointer group snap-start"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 bg-tkm-gray">
                  <img 
                    src={cat.image} 
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-tkm-teal/0 group-hover:bg-tkm-teal/60 transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-bold text-tkm-black group-hover:text-tkm-teal transition-colors text-center">
                  {cat.title}
                </h3>
                <p className="text-xs text-tkm-teal text-center mt-0.5">{cat.count} Products</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
