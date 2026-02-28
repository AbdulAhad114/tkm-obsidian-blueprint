import React from 'react';
import { Product, ViewType } from '../types';
import { ProductCard } from './ProductCard';
import { Check } from 'lucide-react';

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

const features = ['304-Grade Steel', 'Undermount & Topmount', 'Multiple Bowl Sizes', 'Corrosion Resistant'];

export const StainlessSteel: React.FC<Props> = ({ onNavigate, onAddToCart, onQuickView }) => {
  return (
    <section id="sink-organisers" className="py-12 md:py-20 px-6 md:px-12 bg-tkm-gray">
      <div className="max-w-7xl mx-auto">
        {/* 2-column: image left, content right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center">
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1600&q=80" 
              alt="Stainless Steel Kitchen Sinks Collection" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-tkm-teal text-xs uppercase tracking-[0.2em] font-semibold">Premium</span>
            <h2 className="font-display text-3xl md:text-4xl text-tkm-black mt-2 mb-4">Stainless Steel Sinks</h2>
            <p className="text-tkm-body text-sm md:text-base leading-relaxed mb-6">
              Upgrade your kitchen with TKM Trading's premium stainless steel sinks — crafted from high-grade 304 steel for lasting durability and corrosion resistance. Choose from single bowl, double bowl, or undermount styles at competitive prices in Pakistan.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-tkm-black">
                  <Check size={16} className="text-tkm-teal" /> {f}
                </div>
              ))}
            </div>
            <button
              onClick={() => onNavigate && onNavigate('collection', 'kitchen-sinks')}
              className="bg-tkm-teal text-white px-8 py-3 rounded-md text-sm font-bold hover:bg-tkm-hover transition-colors"
            >
              Shop Kitchen Sinks
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onNavigate={onNavigate} onAddToCart={onAddToCart} onQuickView={onQuickView} />
          ))}
        </div>
      </div>
    </section>
  );
};
