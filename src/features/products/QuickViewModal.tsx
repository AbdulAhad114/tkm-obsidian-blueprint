import React from 'react';
import { X, Check, Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose, onAddToCart, onViewDetails }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/60 transition-opacity" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-4xl rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row animate-fade-in-up max-h-[90vh] md:max-h-none overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-black hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-8">
          <img src={product.image} alt={product.name} className="max-w-full max-h-[400px] object-contain" />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col">
          <div className="mb-2">
            <span className="text-xs font-bold text-tkm-teal uppercase tracking-widest">{product.category || 'Premium Collection'}</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h2>
          
          <div className="flex items-center gap-2 mb-4">
             <div className="flex text-yellow-400">
               {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
             </div>
             <span className="text-xs text-gray-500">(24 Reviews)</span>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl font-bold text-gray-900">{product.price}</span>
            {product.oldPrice && (
              <span className="text-lg text-gray-400 line-through decoration-1">{product.oldPrice}</span>
            )}
            {product.badge && (
                <span className="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-1 uppercase">{product.badge}</span>
            )}
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-8 border-b border-gray-100 pb-8">
             Experience superior quality with TKM Trading. This premium fitting is designed for durability and elegance, perfect for modern Pakistani homes. Imported quality with a 5-year finish warranty.
          </p>

          <div className="space-y-3 mt-auto">
            <button 
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="w-full bg-black text-white py-4 uppercase text-xs font-bold tracking-[0.2em] hover:bg-tkm-teal transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart size={16} /> Add to Cart
            </button>
            <button 
              onClick={() => {
                onViewDetails(product);
                onClose();
              }}
              className="w-full border border-black text-black py-4 uppercase text-xs font-bold tracking-[0.2em] hover:bg-gray-50 transition-colors"
            >
              View Full Details
            </button>
          </div>

          <div className="mt-6 flex flex-col gap-2 text-xs text-gray-500">
             <div className="flex items-center gap-2"><Check size={14} className="text-green-500" /> In Stock & Ready to Ship</div>
             <div className="flex items-center gap-2"><Check size={14} className="text-green-500" /> Free Delivery over PKR 10,000</div>
          </div>
        </div>
      </div>
    </div>
  );
};