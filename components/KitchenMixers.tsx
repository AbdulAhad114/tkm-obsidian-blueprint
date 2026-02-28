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
  { id: 'k1', name: 'Victorian Dual Kitchen Faucet', category: 'Kitchen Faucets', price: 'PKR 7,500', image: 'https://tkmtradingshop.com/cdn/shop/files/WhatsAppImage2024-09-05at11.08.34AM_1.jpg?v=1725559897' },
  { id: 'k2', name: 'Sleek Imported Kitchen Faucet', category: 'Kitchen Faucets', price: 'PKR 9,200', image: 'https://tkmtradingshop.com/cdn/shop/files/1744469440122.png?v=1744485025&width=720' },
  { id: 'k3', name: 'Kitchen Pullout Faucet', category: 'Kitchen Faucets', price: 'PKR 2,750', image: 'https://tkmtradingshop.com/cdn/shop/files/IMG_6136.jpg?v=1744310696&width=720' },
  { id: 'k4', name: 'Electric Heating Kitchen Faucet', category: 'Kitchen Faucets', price: 'PKR 3,500', image: 'https://tkmtradingshop.com/cdn/shop/files/WhatsAppImage2024-11-02at11.17.28PM.jpg?v=1730615021' },
];

const features = ['Ceramic Cartridge', 'Lead-Free Brass', 'Easy Install', '5-Year Warranty'];

export const KitchenMixers: React.FC<Props> = ({ onNavigate, onAddToCart, onQuickView }) => {
  return (
    <section id="kitchen-faucets" className="py-12 md:py-20 px-6 md:px-12 bg-tkm-gray">
      <div className="max-w-7xl mx-auto">
        {/* 2-column intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-center">
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
            <img 
              src="https://cdn-gbnae.nitrocdn.com/GijdmkziwjTeAnmdDcOBIvNTICFNsFKV/assets/images/optimized/rev-1854140/faucetu.com/wp-content/uploads/2022/11/kitchen-faucets-selected.jpg" 
              alt="Premium Kitchen Faucets Collection" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-tkm-teal text-xs uppercase tracking-[0.2em] font-semibold">Explore</span>
            <h2 className="font-display text-3xl md:text-4xl text-tkm-black mt-2 mb-4">Premium Kitchen Faucets</h2>
            <p className="text-tkm-body text-sm md:text-base leading-relaxed mb-6">
              Modern pull-down and single lever designs for contemporary kitchens. Available in chrome, matte black, rose gold, and brushed nickel finishes.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-tkm-black">
                  <Check size={16} className="text-tkm-teal" /> {f}
                </div>
              ))}
            </div>
            <button
              onClick={() => onNavigate && onNavigate('collection', 'kitchen-faucets-imported')}
              className="bg-tkm-teal text-white px-8 py-3 rounded-md text-sm font-bold hover:bg-tkm-hover transition-colors"
            >
              Shop Kitchen Faucets
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
