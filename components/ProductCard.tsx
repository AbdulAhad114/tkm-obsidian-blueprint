import React from 'react';
import { Product, ViewType } from '../types';
import { ShoppingCart, Eye, Star, Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
  onNavigate?: (view: ViewType, id?: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onQuickView, onNavigate }) => {
  const rating = product.rating || 5;
  
  const badgeColor = product.badge === 'New Arrival' || product.badge === 'New' 
    ? 'bg-tkm-brass' 
    : product.badge === 'Sale' 
    ? 'bg-red-500' 
    : 'bg-tkm-teal';
  
  return (
    <div className="bg-white group relative rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col overflow-hidden">
      
      <div 
        className="relative overflow-hidden aspect-square bg-white w-full cursor-pointer"
        onClick={() => onNavigate && onNavigate('product', product.id)}
      >
        {product.badge && (
          <div className={`absolute top-3 left-3 z-10 ${badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider`}>
            {product.badge}
          </div>
        )}

        {/* Wishlist Heart */}
        <button 
          className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-1.5 shadow-sm hover:text-red-500"
          onClick={(e) => { e.stopPropagation(); }}
        >
          <Heart size={16} strokeWidth={1.5} />
        </button>

        <img 
          src={product.image} 
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Quick View */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-20">
          <button 
            onClick={(e) => { e.stopPropagation(); onQuickView && onQuickView(product); }}
            className="bg-white p-2 rounded-full shadow-md hover:bg-tkm-teal hover:text-white transition-colors" 
            title="Quick View"
          >
            <Eye size={16} />
          </button>
        </div>
      </div>

      <div className="p-4 md:p-5 flex-grow flex flex-col">
        {product.category && (
          <p className="text-[10px] text-tkm-body uppercase tracking-wide mb-1">{product.category}</p>
        )}
        <h3 
          className="text-sm font-bold text-tkm-black min-h-[2.25rem] line-clamp-2 group-hover:text-tkm-teal transition-colors cursor-pointer mb-2"
          onClick={() => onNavigate && onNavigate('product', product.id)}
        >
          {product.name}
        </h3>
        
        {/* Star Ratings */}
        <div className="flex items-center gap-0.5 mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star 
              key={star} 
              size={12} 
              className={star <= Math.floor(rating) ? "fill-tkm-brass text-tkm-brass" : "fill-gray-200 text-gray-200"} 
            />
          ))}
          {product.reviews && (
            <span className="text-[10px] text-tkm-body ml-1">({product.reviews})</span>
          )}
        </div>

        <div className="flex items-center gap-2 mb-3 mt-auto">
          {product.oldPrice && (
            <span className="text-xs text-tkm-body line-through">{product.oldPrice}</span>
          )}
          <span className="text-base font-bold text-tkm-teal">{product.price}</span>
        </div>
        
        {/* Add to Cart - slides up on hover */}
        <button
          onClick={(e) => { e.stopPropagation(); onAddToCart && onAddToCart(product); }}
          className="w-full bg-tkm-teal text-white py-2.5 rounded-md text-xs font-bold uppercase tracking-wider hover:bg-tkm-hover transition-all duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
        >
          <ShoppingCart size={14} /> Add to Cart
        </button>
      </div>
    </div>
  );
};
