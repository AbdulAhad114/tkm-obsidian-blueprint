import React from 'react';
import { Product, ViewType } from '../types';
import { ProductCard } from './ProductCard';

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

const features = [
  { title: 'Ceramic Cartridge', desc: 'Long-lasting precision' },
  { title: 'Lead-Free Brass', desc: 'Safe for drinking water' },
  { title: 'Multiple Finishes', desc: 'Chrome, Matte, Brass, Rose Gold' },
  { title: 'Easy Install', desc: 'No specialist required' },
];

export const KitchenMixers: React.FC<Props> = ({ onNavigate, onAddToCart, onQuickView }) => {
  return (
    <section id="kitchen-faucets" className="bg-white">
      <div className="max-w-[1920px] mx-auto">
        {/* Editorial 2-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left — full-bleed image */}
          <div className="relative h-[350px] lg:h-auto lg:min-h-[560px]">
            <img 
              src="https://cdn-gbnae.nitrocdn.com/GijdmkziwjTeAnmdDcOBIvNTICFNsFKV/assets/images/optimized/rev-1854140/faucetu.com/wp-content/uploads/2022/11/kitchen-faucets-selected.jpg" 
              alt="Premium Kitchen Faucets Collection Pakistan" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          {/* Right — content */}
          <div className="py-16 md:py-20 px-8 md:px-16 flex flex-col justify-center">
            <span className="inline-block bg-tkm-teal text-white text-[11px] font-medium uppercase tracking-[3px] px-4 py-1.5 rounded-sm mb-4 w-fit">EXPLORE</span>
            <h2 className="font-display text-3xl md:text-[42px] text-tkm-navy leading-tight mb-0">Premium Kitchen Faucets</h2>
            <div className="w-10 h-[1px] bg-tkm-copper my-5" />
            <p className="text-tkm-body text-base leading-[1.7] mb-8 max-w-md">
              Available in chrome, matte black, rose gold and brushed nickel. Ceramic cartridge construction with lead-free brass body ensures lasting performance.
            </p>
            
            {/* 2×2 feature grid */}
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
              onClick={() => onNavigate && onNavigate('collection', 'kitchen-faucets-imported')}
              className="bg-tkm-teal text-white px-8 py-3.5 rounded text-[12px] font-semibold uppercase tracking-[1.5px] hover:bg-tkm-teal-hover transition-colors w-fit"
            >
              Shop Kitchen Faucets →
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