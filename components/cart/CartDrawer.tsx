import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Truck } from 'lucide-react';
import { CartItem, Product } from '../../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
  recommendations: Product[];
  onAddToCart: (product: Product) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  cart, 
  onUpdateQuantity, 
  onRemove,
  onCheckout,
  recommendations,
  onAddToCart
}) => {
  const subtotal = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
    return sum + price * item.quantity;
  }, 0);

  const FREE_SHIPPING_THRESHOLD = 10000;
  const progress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const amountRemaining = FREE_SHIPPING_THRESHOLD - subtotal;

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={onClose}
      />

      <div className={`fixed top-0 right-0 h-full w-full md:w-[450px] bg-white z-50 shadow-2xl transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} />
            <span className="font-bold text-lg uppercase tracking-wider">Your Cart ({cart.reduce((a, c) => a + c.quantity, 0)})</span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress - CRO Feature */}
        <div className="px-5 pt-5">
            {subtotal >= FREE_SHIPPING_THRESHOLD ? (
                <div className="bg-green-50 text-green-800 text-sm font-bold p-3 rounded flex items-center gap-2 border border-green-200">
                    <Truck size={16} /> You've unlocked FREE Shipping!
                </div>
            ) : (
                <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">
                        You are <span className="font-bold text-tkm-teal">PKR {amountRemaining.toLocaleString()}</span> away from Free Shipping
                    </p>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-tkm-teal transition-all duration-500 ease-out" 
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
            )}
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
              <ShoppingBag size={48} className="opacity-20" />
              <p>Your cart is empty</p>
              <button onClick={onClose} className="text-tkm-teal font-bold hover:underline">Continue Shopping</button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 bg-gray-50 flex-shrink-0 border border-gray-100">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 line-clamp-2">{item.name}</h4>
                      <p className="text-xs text-gray-500 mt-1">{item.category}</p>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="flex items-center border border-gray-300 rounded-sm">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="px-2 py-1 hover:bg-gray-100 transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-2 text-xs font-bold w-6 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="px-2 py-1 hover:bg-gray-100 transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="font-bold text-sm">{item.price}</span>
                        <button 
                          onClick={() => onRemove(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {recommendations.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="font-bold text-sm uppercase tracking-wider mb-4">You might also like</h3>
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {recommendations.map((rec) => (
                  <div key={rec.id} className="w-32 flex-shrink-0 group cursor-pointer">
                    <div className="w-full aspect-square bg-gray-50 mb-2 border border-gray-100 relative overflow-hidden">
                       <img src={rec.image} alt={rec.name} className="w-full h-full object-contain p-2" loading="lazy" />
                       <button 
                         onClick={() => onAddToCart(rec)}
                         className="absolute bottom-2 right-2 bg-black text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                       >
                         <Plus size={14} />
                       </button>
                    </div>
                    <h5 className="text-xs font-medium truncate">{rec.name}</h5>
                    <p className="text-xs text-gray-500 font-bold">{rec.price}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-5 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-600">Subtotal</span>
              <span className="text-lg font-bold">PKR {subtotal.toLocaleString()}</span>
            </div>
            <p className="text-[10px] text-gray-500 mb-4 text-center">Shipping & taxes calculated at checkout</p>
            <button 
              onClick={onCheckout}
              className="w-full bg-black text-white py-4 uppercase text-sm font-bold tracking-widest hover:bg-tkm-teal transition-colors flex items-center justify-center gap-2"
            >
              Checkout <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </>
  );
};