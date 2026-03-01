import React from 'react';
import { Product, ViewType } from '../types';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
  onNavigate?: (view: ViewType, id?: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onQuickView, onNavigate }) => {
  const badgeColor = product.badge === 'New Arrival' || product.badge === 'New' 
    ? 'bg-tkm-copper' 
    : product.badge === 'Sale' 
    ? 'bg-tkm-navy' 
    : 'bg-tkm-teal';
  
  return (
    <div className="bg-white group relative rounded-lg border border-[#F0EBE4] hover:shadow-lg transition-all duration-300 h-full flex flex-col overflow-hidden" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
      
      <div 
        className="relative overflow-hidden aspect-square bg-white p-6 cursor-pointer"
        onClick={() => onNavigate && onNavigate('product', product.id)}
      >
        {product.badge && (
          <div className={`absolute top-3 left-3 z-10 ${badgeColor} text-white text-[10px] font-semibold px-2.5 py-1 rounded-sm uppercase tracking-[1px]`}>
            {product.badge}
          </div>
        )}

        {/* Wishlist Heart */}
        <button 
          className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity text-tkm-muted hover:text-tkm-teal"
          onClick={(e) => { e.stopPropagation(); }}
        >
          <Heart size={18} strokeWidth={1.5} />
        </button>

        <img 
          src={product.image} 
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        
        {/* Add to Cart - slides up */}
        <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-300 z-20">
          <button 
            onClick={(e) => { e.stopPropagation(); onAddToCart && onAddToCart(product); }}
            className="w-full bg-tkm-navy text-white py-3 text-[11px] font-semibold uppercase tracking-[1.5px] hover:bg-tkm-teal transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart size={14} /> Add to Cart
          </button>
        </div>
      </div>

      <div className="p-4 md:p-5 flex-grow flex flex-col">
        {product.category && (
          <p className="text-[10px] text-tkm-muted uppercase tracking-[2px] mb-1.5">{product.category}</p>
        )}
        <h3 
          className="text-[15px] font-semibold text-tkm-navy min-h-[2.25rem] line-clamp-2 group-hover:text-tkm-teal transition-colors cursor-pointer mb-2 leading-[1.4]"
          onClick={() => onNavigate && onNavigate('product', product.id)}
        >
          {product.name}
        </h3>
        
        {/* Copper underline on hover */}
        <div className="w-0 group-hover:w-10 h-[2px] bg-tkm-copper transition-all duration-300 mb-2.5" />

        <div className="flex items-center gap-2 mt-auto">
          <span className="text-lg font-bold text-tkm-copper">{product.price}</span>
          {product.oldPrice && (
            <>
              <span className="text-sm text-tkm-muted line-through">{product.oldPrice}</span>
              <span className="text-[10px] bg-tkm-navy text-white px-1.5 py-0.5 rounded-sm font-semibold">−30%</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};