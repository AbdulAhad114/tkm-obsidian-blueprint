import React, { useState, useEffect, useMemo } from 'react';
import { Product } from '../types';
import { ShoppingCart, Star, Truck, ShieldCheck, RefreshCw, Share2, Plus, Minus, ChevronDown, Check, Play, HelpCircle, Package, MapPin } from 'lucide-react';
import { SectionTitle } from './common/SectionTitle';
import { ProductCard } from './ProductCard';

interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
  onAddToCart: (product: Product) => void;
  onNavigate: (view: any, id?: string) => void;
}

// Animated Order Tracking Timeline Component
const OrderTrackingTimeline: React.FC = () => {
  const [animatedStep, setAnimatedStep] = useState(0);

  // Dynamic dates based on today
  const dates = useMemo(() => {
    const today = new Date();
    const orderDate = new Date(today);
    orderDate.setDate(today.getDate() + 1);
    const shipDate = new Date(today);
    shipDate.setDate(today.getDate() + 3);
    const deliverStart = new Date(today);
    deliverStart.setDate(today.getDate() + 5);
    const deliverEnd = new Date(today);
    deliverEnd.setDate(today.getDate() + 7);

    const fmt = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    return {
      ordered: fmt(orderDate),
      shipped: fmt(shipDate),
      delivered: `${fmt(deliverStart)}–${fmt(deliverEnd)}`,
    };
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setAnimatedStep(1), 400);
    const t2 = setTimeout(() => setAnimatedStep(2), 900);
    const t3 = setTimeout(() => setAnimatedStep(3), 1400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const steps = [
    { icon: Package, label: 'Ordered', date: dates.ordered },
    { icon: Truck, label: 'Shipped', date: dates.shipped },
    { icon: MapPin, label: 'Delivered', date: dates.delivered },
  ];

  return (
    <div className="flex items-start justify-between relative py-2">
      {/* Connecting lines */}
      <div className="absolute top-[22px] left-[32px] right-[32px] h-[2px] bg-gray-200">
        <div
          className="h-full bg-tkm-black transition-all duration-700 ease-out"
          style={{ width: animatedStep >= 2 ? (animatedStep >= 3 ? '100%' : '50%') : '0%' }}
        />
      </div>

      {steps.map((step, idx) => {
        const isActive = animatedStep >= idx + 1;
        const Icon = step.icon;
        return (
          <div key={idx} className="flex flex-col items-center z-10 flex-1">
            <div
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-500 ${
                isActive
                  ? 'bg-tkm-black text-white scale-100'
                  : 'bg-gray-100 text-gray-400 scale-90'
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <Icon size={18} />
            </div>
            <span className={`text-xs font-bold mt-2 transition-colors duration-300 ${isActive ? 'text-tkm-black' : 'text-gray-400'}`}>
              {step.label}
            </span>
            <span className={`text-[10px] transition-colors duration-300 ${isActive ? 'text-gray-600' : 'text-gray-300'}`}>
              {step.date}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, relatedProducts, onAddToCart, onNavigate }) => {
  const [activeImage, setActiveImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || { name: 'Chrome', hex: '#E5E5E5' });
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>('features');

  const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image, product.image, product.image];

  useEffect(() => {
    setActiveImage(product.image);
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4 text-xs text-gray-500 flex items-center gap-2">
        <span onClick={() => onNavigate('home')} className="cursor-pointer hover:underline">Home</span> /
        <span onClick={() => onNavigate('collection', 'bathroom-faucets-imported')} className="cursor-pointer hover:underline">Products</span> /
        <span className="text-tkm-black font-medium truncate">{product.name}</span>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

          {/* Left: Gallery (Sticky) */}
          <div className="w-full lg:w-[60%] lg:sticky lg:top-24 h-fit">
            <div className="flex flex-col-reverse md:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible scrollbar-hide">
                {gallery.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`min-w-[80px] w-20 h-20 md:w-24 md:h-24 border cursor-pointer p-2 transition-all ${activeImage === img ? 'border-tkm-black opacity-100' : 'border-gray-200 hover:border-gray-400 opacity-70'}`}
                  >
                    <img src={img} className="w-full h-full object-contain" alt="Thumbnail" />
                  </div>
                ))}
                <div className="min-w-[80px] w-20 h-20 md:w-24 md:h-24 border border-gray-200 bg-gray-100 flex items-center justify-center cursor-pointer group">
                  <Play size={24} className="text-gray-400 group-hover:text-red-600 transition-colors" />
                </div>
              </div>

              {/* Main Image */}
              <div className="flex-1 bg-gray-50 border border-gray-100 relative aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center p-8">
                <img src={activeImage} alt={product.name} className="max-w-full max-h-full object-contain" />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">{product.badge}</span>
                )}
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="w-full lg:w-[40%] pt-2">
            <h1 className="text-2xl md:text-3xl font-bold text-tkm-black mb-2 leading-tight">{product.name}</h1>

            {/* Reviews */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-tkm-brass text-sm">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-sm font-medium text-tkm-black underline decoration-gray-300 underline-offset-4 cursor-pointer hover:text-tkm-teal">{product.reviews || 24} reviews</span>
            </div>

            {/* Model */}
            <div className="text-xs text-gray-500 mb-6">
              <p>Model: <span className="text-tkm-black font-medium">{product.sku || 'BF2204'}</span></p>
            </div>

            {/* Color Selection */}
            {product.colors && (
              <div className="mb-6">
                <span className="text-sm font-bold text-tkm-black mb-3 block">Color: <span className="font-normal text-gray-600">{selectedColor.name}</span></span>
                <div className="flex gap-3">
                  {product.colors.map((c, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(c)}
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${selectedColor.name === c.name ? 'border-tkm-black ring-1 ring-tkm-black ring-offset-2' : 'border-gray-200 hover:border-gray-400'}`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    >
                      {selectedColor.name === c.name && <Check size={14} className={c.hex === '#ffffff' || c.hex === '#E5E5E5' ? 'text-tkm-black' : 'text-white'} />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Price */}
            <div className="mb-6 border-t border-b border-gray-100 py-4">
              <div className="flex items-end gap-3 mb-1">
                <span className="text-2xl font-bold text-tkm-black">{product.price}</span>
                {product.oldPrice && (
                  <span className="text-lg text-gray-400 line-through mb-1">{product.oldPrice}</span>
                )}
              </div>
              {product.oldPrice && (
                <p className="text-xs text-red-600 font-bold">Save PKR 3,000.00</p>
              )}
            </div>

            {/* Trust Signals */}
            <div className="flex items-center gap-3 text-xs text-gray-600 mb-4">
              <div className="flex items-center gap-1.5"><Truck size={14} /> <strong>Free</strong> express delivery</div>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-600 mb-6">
              <div className="flex items-center gap-1.5"><RefreshCw size={14} /> <strong>Easy</strong> return policy</div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex gap-3 mb-3">
              <div className="flex items-center border border-gray-200 rounded-sm">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-3 hover:bg-gray-50 transition-colors">
                  <Minus size={14} />
                </button>
                <span className="px-4 py-3 text-sm font-bold min-w-[40px] text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-3 hover:bg-gray-50 transition-colors">
                  <Plus size={14} />
                </button>
              </div>
              <button
                onClick={() => { for (let i = 0; i < quantity; i++) onAddToCart(product); }}
                className="flex-1 bg-white border-2 border-tkm-black text-tkm-black py-3 rounded-sm uppercase text-xs font-bold tracking-widest hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart size={16} /> Add to cart
              </button>
            </div>

            {/* Buy it now */}
            <button
              onClick={() => { onAddToCart(product); }}
              className="w-full bg-tkm-black text-white py-4 rounded-sm uppercase text-xs font-bold tracking-widest hover:bg-tkm-hover transition-colors mb-6"
            >
              Buy it now
            </button>

            {/* ✅ Animated Order Tracking Timeline */}
            <div className="bg-gray-50 border border-gray-100 rounded-sm p-4 mb-6">
              <OrderTrackingTimeline />
            </div>

            {/* Promo Code */}
            <div className="bg-gray-50 border border-dashed border-gray-300 p-3 mb-6 rounded text-sm flex items-center gap-2">
              <span className="font-bold text-tkm-black">Extra 15% Off</span>
              <span className="text-gray-600">With Code:</span>
              <span className="font-mono bg-white border border-gray-200 px-2 py-0.5 rounded font-bold text-tkm-black select-all">TKM15</span>
            </div>

            {/* Guarantees */}
            <div className="space-y-2 text-xs text-gray-600 mb-8">
              <div className="flex items-center gap-2"><ShieldCheck size={14} className="text-green-600" /> Secure Checkout</div>
              <div className="flex items-center gap-2"><RefreshCw size={14} /> 30-Day Return & 5-Year Warranty</div>
            </div>

            {/* Sticky CTA for Mobile */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 z-50 flex gap-2 lg:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
              <button
                onClick={() => { for (let i = 0; i < quantity; i++) onAddToCart(product); }}
                className="flex-1 bg-tkm-black text-white py-3 uppercase text-xs font-bold tracking-widest flex items-center justify-center gap-2"
              >
                <ShoppingCart size={14} /> Add to Cart — {product.price}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-4 border-t border-gray-200">
              {[
                { key: 'features', label: 'Features', content: product.features ? (
                  <ul className="list-disc pl-5 space-y-1">{product.features.map((f, i) => <li key={i}>{f}</li>)}</ul>
                ) : <p>Premium quality build with advanced functionality designed for modern homes.</p> },
                { key: 'specs', label: 'Installation & Specs', content: product.specs ? (
                  <div className="grid grid-cols-2 gap-2">{product.specs.map((s, i) => <div key={i}><span className="font-bold text-gray-800">{s.label}:</span> {s.value}</div>)}</div>
                ) : <p>Standard plumbing connection. Manual included.</p> },
                { key: 'tech', label: 'Technical Information', content: <p>Certified lead-free solid brass. Ceramic cartridge tested for 500,000 cycles.</p> },
              ].map(({ key, label, content }) => (
                <div key={key} className="border-b border-gray-200">
                  <button
                    onClick={() => setExpandedAccordion(expandedAccordion === key ? null : key)}
                    className="w-full py-4 flex justify-between items-center text-sm font-bold text-tkm-black hover:text-tkm-teal"
                  >
                    {label} <ChevronDown size={16} className={`transition-transform ${expandedAccordion === key ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedAccordion === key && (
                    <div className="pb-4 text-sm text-gray-600 space-y-2 animate-fade-in">{content}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Video Banner */}
            <div className="mt-8 relative group cursor-pointer overflow-hidden rounded-sm">
              <img src={gallery[0]} className="w-full h-40 object-cover brightness-50 group-hover:brightness-40 transition-all" alt="Watch Video" />
              <div className="absolute inset-0 flex items-center justify-center flex-col text-white">
                <div className="bg-red-600 p-2 rounded-full mb-2 group-hover:scale-110 transition-transform"><Play size={20} fill="currentColor" /></div>
                <span className="font-bold text-xs uppercase tracking-widest">Watch Demo</span>
              </div>
            </div>

            {/* Frequently Bought Together */}
            <div className="mt-8">
              <h4 className="text-sm font-bold mb-4">Frequently Bought Together</h4>
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-sm border border-gray-100">
                <img src={product.image} className="w-12 h-12 object-contain border bg-white" alt="Main" />
                <span className="text-gray-400">+</span>
                <img src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=100&q=80" className="w-12 h-12 object-contain border bg-white" alt="Accessory" />
                <div className="flex-1 ml-2">
                  <div className="text-xs font-bold text-tkm-black">Bundle Price:</div>
                  <div className="text-sm font-bold text-tkm-teal">PKR 48,000</div>
                </div>
                <button className="bg-tkm-black text-white px-3 py-1.5 text-xs font-bold rounded-sm hover:bg-tkm-hover transition-colors">Add Both</button>
              </div>
            </div>
          </div>
        </div>

        {/* --- Rich Content Below Fold --- */}
        <div className="mt-20 mb-16 max-w-4xl mx-auto text-center px-4">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">TKM Premium Series</span>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {product.description || "The Lefton bathroom faucets have improved functionality, durability, and aesthetics. Available in various finishes, the faucets are suitable for different bathroom decoration styles."}
          </p>
        </div>

        {/* Dynamic Rich Sections */}
        <div className="space-y-0">
          {product.richDescription ? (
            product.richDescription.map((section, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center w-full ${idx % 2 !== 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <div className={`w-full md:w-1/2 aspect-square md:aspect-[4/3] overflow-hidden ${section.align === 'right' ? 'md:order-2' : 'md:order-1'}`}>
                  <img src={section.image} alt={section.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className={`w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center ${section.align === 'right' ? 'md:order-1' : 'md:order-2'}`}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-tkm-black leading-tight">{section.title}</h3>
                  <div className="w-12 h-1 bg-tkm-teal mb-6"></div>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{section.content}</p>
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="flex flex-col md:flex-row items-center w-full">
                <div className="w-full md:w-1/2 h-[500px] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover" alt="Feature 1" />
                </div>
                <div className="w-full md:w-1/2 p-12 md:p-24">
                  <h3 className="text-3xl font-bold mb-6">Real Time Temperature Display</h3>
                  <p className="text-gray-600 leading-relaxed">Smart hydro-electric display shows temperature instantly. No batteries required. Safety and comfort combined.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center w-full bg-gray-50">
                <div className="w-full md:w-1/2 p-12 md:p-24 md:order-1 order-2">
                  <h3 className="text-3xl font-bold mb-6">Multiple Water Modes</h3>
                  <p className="text-gray-600 leading-relaxed">Switch between Stream, Spray, and Boost modes effortlessly. Perfect for any task from washing hands to deep cleaning.</p>
                </div>
                <div className="w-full md:w-1/2 h-[500px] overflow-hidden md:order-2 order-1">
                  <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover" alt="Feature 2" />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Meeting Different Needs */}
        <div className="py-20 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2">Meeting Different Needs of Your Family</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1920px] mx-auto px-4">
            <div className="aspect-[16/9] bg-gray-100"><img src="https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Lifestyle 1" /></div>
            <div className="aspect-[16/9] bg-gray-100"><img src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Lifestyle 2" /></div>
            <div className="aspect-[16/9] bg-gray-100"><img src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Lifestyle 3" /></div>
            <div className="aspect-[16/9] bg-gray-100"><img src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Lifestyle 4" /></div>
          </div>
        </div>

        {/* See How It Looks */}
        <div className="py-16 bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2">See How It Looks In Your Room</h2>
            <p className="text-gray-500 text-sm">Highly Recommended By Influencers</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 max-w-[1920px] mx-auto">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-square bg-white rounded-lg shadow-sm overflow-hidden relative group">
                <img src={`https://picsum.photos/seed/ugc${i}/500/500`} className="w-full h-full object-cover" alt="UGC" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <div className="bg-white p-2 rounded-full"><Play size={20} /></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="py-16 max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">FAQs</h2>
          <div className="space-y-4">
            {['Does this faucet need electricity or batteries?', 'What material is this faucet made of?', 'How long is the warranty?', 'Is this faucet scratch and rust resistant?'].map((q, i) => (
              <div key={i} className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-center font-bold text-sm cursor-pointer hover:text-tkm-teal">
                  {q} <ChevronDown size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Summary */}
        <div className="py-16 border-t border-gray-100 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-8">Reviews</h2>
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold text-tkm-black mb-2">4.8</div>
              <div className="flex text-tkm-brass mb-2 gap-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={24} fill="currentColor" />)}
              </div>
              <p className="text-gray-500 text-sm">Based on 515 reviews</p>
              <button className="mt-6 border border-tkm-black px-8 py-2 text-sm font-bold uppercase hover:bg-tkm-black hover:text-white transition-colors">Write a Review</button>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="container mx-auto px-4 mt-8 border-t border-gray-100 pt-16">
          <SectionTitle title="You May Also Like" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} onQuickView={() => {}} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
