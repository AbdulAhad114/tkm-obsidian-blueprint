import React from 'react';
import { Product, ViewType } from '../types';
import { ShoppingCart, Eye, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
  onNavigate?: (view: ViewType, id?: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onQuickView, onNavigate }) => {
  return (
    <div className="bg-white group relative hover:shadow-lg transition-shadow duration-300 rounded-sm h-full flex flex-col">
      
      <div 
        className="relative overflow-hidden aspect-square bg-white w-full cursor-pointer"
        onClick={() => onNavigate && onNavigate('product', product.id)}
      >
        {/* Badge moved inside image container to avoid overlapping text below */}
        {product.badge && (
          <div className="absolute top-2 left-2 z-10 bg-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider shadow-sm">
            {product.badge}
          </div>
        )}

        <img 
          src={product.image} 
          alt={product.name}
          loading="lazy"
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105 border border-gray-200 rounded-t-sm"
        />
        
        {/* Overlay Buttons */}
        <div className="absolute bottom-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 z-20">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onQuickView && onQuickView(product);
            }}
            className="bg-white p-2 rounded-full shadow-md hover:bg-black hover:text-white transition-colors" 
            title="Quick View"
          >
            <Eye size={16} />
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart && onAddToCart(product);
            }}
            className="bg-black text-white p-2 rounded-full shadow-md hover:bg-tkm-teal transition-colors" 
            title="Add to Cart"
          >
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>

      <div className="p-3 md:p-4 text-center flex-grow flex flex-col justify-end border border-gray-200 rounded-b-sm">
        {product.category && (
            <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-1">{product.category}</p>
        )}
        <h3 
            className="text-xs md:text-sm font-bold text-gray-900 min-h-[2.25rem] line-clamp-2 group-hover:text-tkm-teal transition-colors cursor-pointer"
            onClick={() => onNavigate && onNavigate('product', product.id)}
        >
          {product.name}
        </h3>
        
        {/* CRO: Star Ratings */}
        {product.rating && (
            <div className="flex justify-center items-center gap-0.5 mb-2">
                {[1, 2, 3, 4, 5].map((star) => {
                    const rating = product.rating || 0;
                    const isFilled = star <= Math.floor(rating);
                    return (
                        <Star 
                            key={star} 
                            size={10} 
                            className={isFilled ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"} 
                        />
                    );
                })}
                {product.reviews && (
                    <span className="text-[9px] text-gray-400 ml-1">({product.reviews})</span>
                )}
            </div>
        )}

        <div className="flex justify-center items-center gap-2">
            <span className="text-sm md:text-base font-bold text-gray-900">{product.price}</span>
            {product.oldPrice && (
                <span className="text-xs text-gray-400 line-through">{product.oldPrice}</span>
            )}
        </div>
      </div>
    </div>
  );
};