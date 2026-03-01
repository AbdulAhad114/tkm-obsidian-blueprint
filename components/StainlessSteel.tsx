import React from 'react';
import { Product, ViewType } from '../types';
import { ProductCard } from './ProductCard';

interface Props {
  onNavigate?: (view: ViewType, id?: string) => void;
  onAddToCart?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
}

const products: Product[] = [
  { id: 's1', name: 'Stainless Steel Kitchen Sink Bowl Black', category: 'Kitchen Sinks', price: 'PKR 10,000', image: 'https://tkmtradingshop.com/cdn/shop/files/WhatsAppImage2026-01-01at1.42.49AM_1.jpg?v=1767260755&width=720' },
  { id: 's2', name: 'Single Bowl Sink', category: 'Kitchen Sinks', price: 'PKR 350', oldPrice: 'PKR 499', image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=300&q=80' },
  { id: 's3', name: 'Inset Sink Single Bowl', category: 'Kitchen Sinks', price: 'PKR 258', oldPrice: 'PKR 368', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80' },
  { id: 's4', name: 'Double Bowl Sink', category: 'Kitchen Sinks', price: 'PKR 606', oldPrice: 'PKR 866', image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=300&q=80' },
];

const features = [
  { title: '304-Grade Steel', desc: 'Industrial-grade durability' },
  { title: 'Anti-Scratch Coating', desc: 'Stays pristine longer' },
  { title: 'Undermount & Topmount', desc: 'Flexible installation' },
  { title: 'Multiple Bowl Sizes', desc: 'For every kitchen layout' },
];

export const StainlessSteel: React.FC<Props> = ({ onNavigate, onAddToCart, onQuickView }) => {
  return (
    <section id="sink-organisers" className="bg-white">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left — image */}
          <div className="relative h-[350px] lg:h-auto lg:min-h-[560px]">
            <img 
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1600&q=80" 
              alt="Stainless Steel Kitchen Sinks Pakistan - Premium 304 Grade" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          {/* Right — content */}
          <div className="py-16 md:py-20 px-8 md:px-16 flex flex-col justify-center">
            <span className="inline-block bg-tkm-teal text-white text-[11px] font-medium uppercase tracking-[3px] px-4 py-1.5 rounded-sm mb-4 w-fit">PREMIUM</span>
            <h2 className="font-display text-3xl md:text-[42px] text-tkm-navy leading-tight mb-0">Stainless Steel Sinks</h2>
            <div className="w-10 h-[1px] bg-tkm-copper my-5" />
            <p className="text-tkm-body text-base leading-[1.7] mb-8 max-w-md">
              Crafted from high-grade 304 steel for lasting durability and corrosion resistance. Choose from single bowl, double bowl, or undermount styles at competitive prices.
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
              onClick={() => onNavigate && onNavigate('collection', 'kitchen-sinks')}
              className="bg-tkm-teal text-white px-8 py-3.5 rounded text-[12px] font-semibold uppercase tracking-[1.5px] hover:bg-tkm-teal-hover transition-colors w-fit"
            >
              Shop Kitchen Sinks →
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onNavigate={onNavigate} onAddToCart={onAddToCart} onQuickView={onQuickView} />
          ))}
        </div>
      </div>
    </section>
  );
};