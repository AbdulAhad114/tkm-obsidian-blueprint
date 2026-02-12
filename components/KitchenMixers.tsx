import React from 'react';
import { SectionTitle } from './common/SectionTitle';
import { Product, ViewType } from '../types';
import { ProductCard } from './ProductCard';

interface Props {
    onNavigate?: (view: ViewType, id?: string) => void;
}

const products: Product[] = [
  {
    id: 'k1',
    name: 'Victorian Dual Kitchen Faucet',
    category: 'Kitchen Faucets',
    price: 'PKR 7,500.00',
    image: 'https://tkmtradingshop.com/cdn/shop/files/WhatsAppImage2024-09-05at11.08.34AM_1.jpg?v=1725559897',
  },
  {
    id: 'k2',
    name: 'Sleek Imported Kitchen Faucet',
    category: 'Kitchen Faucets',
    price: 'PKR 9,200.00',
    image: 'https://tkmtradingshop.com/cdn/shop/files/1744469440122.png?v=1744485025&width=720',
  },
  {
    id: 'k3',
    name: 'Kitchen Pullout Faucet',
    category: 'Kitchen Faucets',
    price: 'PKR 2,750.00',
    image: 'https://tkmtradingshop.com/cdn/shop/files/IMG_6136.jpg?v=1744310696&width=720',
  },
  {
    id: 'k4',
    name: 'Electric Heating Kitchen Faucet',
    category: 'Kitchen Faucets',
    price: 'PKR 3,500.00',
    image: 'https://tkmtradingshop.com/cdn/shop/files/WhatsAppImage2024-11-02at11.17.28PM.jpg?v=1730615021',
  }
];

export const KitchenMixers: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section id="kitchen-faucets">
      <SectionTitle title="Premium Kitchen Faucets" subtitle="Modern pull-down and single lever designs for contemporary kitchens." />
      
      {/* Banner */}
      <div 
        className="w-full h-[300px] md:h-[450px] mb-10 overflow-hidden relative cursor-pointer group"
        onClick={() => onNavigate && onNavigate('collection', 'kitchen-faucets-imported')}
      >
        <img 
          src="https://cdn-gbnae.nitrocdn.com/GijdmkziwjTeAnmdDcOBIvNTICFNsFKV/assets/images/optimized/rev-1854140/faucetu.com/wp-content/uploads/2022/11/kitchen-faucets-selected.jpg" 
          alt="Premium Kitchen Faucets Collection" 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <button className="bg-white text-tkm-black px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-tkm-teal hover:text-white transition-colors">
                View Collection
            </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-10">
          {products.map(product => (
              <ProductCard key={product.id} product={product} onNavigate={onNavigate} />
          ))}
      </div>
      
      <div className="text-center">
         <button 
            onClick={() => onNavigate && onNavigate('collection', 'kitchen-faucets-imported')}
            className="text-sm font-bold border-b border-tkm-black pb-1 uppercase tracking-widest hover:text-tkm-teal hover:border-tkm-teal transition-all"
         >
            View All Kitchen Faucets
         </button>
      </div>
    </section>
  );
};