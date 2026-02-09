import React from 'react';
import { SectionTitle } from './common/SectionTitle';
import { Product, ViewType } from '../types';
import { ProductCard } from './ProductCard';

interface Props {
    onNavigate?: (view: ViewType, id?: string) => void;
}

const products: Product[] = [
  {
    id: 's1',
    name: 'Stainless Steel Kitchen Sink Bowl Black',
    category: 'Kitchen Sinks',
    price: 'PKR 10,000.00',
    // oldPrice: 'PKR 861.00',
    image: 'https://tkmtradingshop.com/cdn/shop/files/WhatsAppImage2026-01-01at1.42.49AM_1.jpg?v=1767260755&width=720',
  },
  {
    id: 's2',
    name: 'Single Bowl Sink',
    category: 'Kitchen Sinks',
    price: 'PKR 350.00',
    oldPrice: 'PKR 499.00',
    image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 's3',
    name: 'Inset Sink Single Bowl',
    category: 'Kitchen Sinks',
    price: 'PKR 258.00',
    oldPrice: 'PKR 368.00',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 's4',
    name: 'Double Bowl Sink',
    category: 'Kitchen Sinks',
    price: 'PKR 606.00',
    oldPrice: 'PKR 866.00',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=300&q=80',
  }
];

export const StainlessSteel: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section id="sink-organisers" className="mb-16">
      <SectionTitle title="Stainless Steel Sinks" />
      
      {/* Banner */}
      <div 
        className="w-full h-[300px] md:h-[400px] mb-8 overflow-hidden relative cursor-pointer group"
        onClick={() => onNavigate && onNavigate('collection', 'kitchen-sinks')}
      >
        <img 
          src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1600&q=80" 
          alt="Stainless Steel Kitchen" 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
         <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <button className="bg-white text-black px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                View Collection
            </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-8">
          {products.map(product => (
              <ProductCard key={product.id} product={product} onNavigate={onNavigate} />
          ))}
      </div>

      <div className="text-center">
         <button 
            onClick={() => onNavigate && onNavigate('collection', 'kitchen-sinks')}
            className="text-sm font-bold border-b border-black pb-1 uppercase tracking-widest hover:text-tkm-teal hover:border-tkm-teal transition-all"
         >
            View All Sinks
         </button>
      </div>
    </section>
  );
};