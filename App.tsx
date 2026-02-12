import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BenefitsBar } from './components/BenefitsBar';
import { BrandAuthority } from './components/BrandAuthority';
import { ShopByArea } from './components/ShopByArea';
import { LifestyleBreak } from './components/LifestyleBreak';
import { WhyChooseTKM } from './components/WhyChooseTKM';
import { AdvancedShowers } from './components/AdvancedShowers';
import { KitchenMixers } from './components/KitchenMixers';
import { StainlessSteel } from './components/StainlessSteel';
import { LifestyleBreak2 } from './components/LifestyleBreak2';
import SocialReels from './components/SocialReels';
import { BottomBanner } from './components/BottomBanner';
import { Footer } from './components/Footer';
import { GeminiAssistant } from './components/GeminiAssistant';
import { ComplaintForm } from './components/ComplaintForm';
import { CollectionPage } from './components/CollectionPage';
import { ProductDetail } from './components/ProductDetail';
import { CartDrawer } from './components/cart/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { ProductCard } from './components/ProductCard';
import { KitchenLanding } from './components/KitchenLanding';
import { BathLanding } from './components/BathLanding';
import { collections } from './data/collections';
import { SEOHead } from './components/common/SEOHead';
import { Product, CartItem, ViewType } from './types';
import { fetchShopifyProducts, createCheckout } from './lib/shopify';
import CustomerReviews from './components/CustomerReviews';
import FaqSection from './components/FaqSection';

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('home');
  const [activeId, setActiveId] = useState<string>('');
  const [realProducts, setRealProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  useEffect(() => {
    const initShopify = async () => {
      const products = await fetchShopifyProducts();
      if (products.length > 0) {
        setRealProducts(products);
      } else {
        const staticProds = Object.values(collections).flatMap(c => c.products);
        setRealProducts(staticProds);
      }
      setLoading(false);
    };
    initShopify();
  }, []);

  const navigateTo = (newView: ViewType, id?: string) => {
    if (id) setActiveId(id);
    setView(newView);
    window.scrollTo(0, 0);
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateCartQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) return { ...item, quantity: Math.max(0, item.quantity + delta) };
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = async () => {
    try {
      alert("Redirecting to Secure Shopify Checkout...");
    } catch (e) {
      console.error("Checkout failed", e);
    }
  };

  const currentProduct = view === 'product' ? realProducts.find(p => p.id === activeId) : null;
  const currentCollection = view === 'collection' ? collections[activeId] : null;
  const relatedProducts = currentProduct 
    ? realProducts.filter(p => p.category === currentProduct.category && p.id !== currentProduct.id).slice(0, 4)
    : [];

  let seoTitle = 'TKM Trading Shop | Premium Sanitaryware & Kitchen Faucets Pakistan';
  let seoDescription = 'Premium bathroom fittings and kitchen faucets in Pakistan. TKM Trading offers imported sanitaryware, rain showers, sinks and accessories with free nationwide delivery.';
  let seoImage = 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2868&auto=format&fit=crop';
  let seoType: 'website' | 'product' | 'article' = 'website';
  let schema = undefined;

  if (view === 'product' && currentProduct) {
    seoTitle = `${currentProduct.name} | TKM Trading Shop`;
    seoDescription = `Buy ${currentProduct.name} at best price in Pakistan. ${currentProduct.category} - Free Delivery. ${currentProduct.features ? currentProduct.features[0] : ''}`;
    seoImage = currentProduct.image;
    seoType = 'product';
    const priceValue = currentProduct.price.replace(/[^0-9.]/g, '');
    schema = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": currentProduct.name,
      "image": currentProduct.gallery || [currentProduct.image],
      "description": seoDescription,
      "brand": { "@type": "Brand", "name": "TKM Trading" },
      "offers": {
        "@type": "Offer",
        "url": window.location.href,
        "priceCurrency": "PKR",
        "price": priceValue,
        "availability": "https://schema.org/InStock",
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": { "@type": "MonetaryAmount", "value": 0, "currency": "PKR" }
        }
      }
    };
  } else if (view === 'collection' && currentCollection) {
    seoTitle = `${currentCollection.title} Collection | TKM Trading Shop`;
    seoDescription = currentCollection.description;
    seoImage = currentCollection.image;
  } else if (view === 'kitchen-landing') {
    seoTitle = 'Luxury Kitchen Faucets & Sinks | TKM Trading Shop';
    seoDescription = 'Upgrade your kitchen with TKM Trading. Shop modern kitchen mixers, pull-out faucets, and stainless steel sinks with free delivery in Pakistan.';
  } else if (view === 'bath-landing') {
    seoTitle = 'Premium Bathroom Fittings & Showers | TKM Trading Shop';
    seoDescription = 'Explore our range of luxury bathroom faucets, rain showers, and accessories. Best prices for imported sanitaryware in Pakistan.';
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-tkm-light"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tkm-teal"></div></div>;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-tkm-light">
      <SEOHead 
        title={seoTitle} description={seoDescription} ogImage={seoImage}
        ogType={seoType} jsonLd={schema} canonicalUrl={window.location.href}
      />

      <Header 
        onNavigate={navigateTo} 
        cartCount={cart.reduce((a, c) => a + c.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />
      
      <main className="flex-grow w-full mx-auto">
        {view === 'home' && (
          <div className="w-full max-w-[1920px] mx-auto">
            {/* 1. Hero */}
            <Hero onNavigate={navigateTo} />

            {/* 2. Trust Bar */}
            <BenefitsBar />

            {/* 3. Brand Authority */}
            <BrandAuthority />

            {/* 4. Shop By Category */}
            <div className="bg-tkm-gray py-[60px] md:py-[100px]">
              <ShopByArea onNavigate={navigateTo} />
            </div>

            {/* 5. Lifestyle Break */}
            <LifestyleBreak onNavigate={navigateTo} />

            {/* 6. Featured Products */}
            <div className="bg-tkm-light py-[60px] md:py-[100px] px-4 md:px-6">
              <div className="text-center mb-10 md:mb-14">
                <h2 className="font-display text-3xl md:text-[40px] leading-tight text-tkm-black mb-3">Featured Products</h2>
                <div className="w-12 h-[2px] bg-tkm-brass mx-auto" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
                {realProducts.slice(0, 4).map(p => (
                  <ProductCard key={p.id} product={p} onAddToCart={addToCart} onQuickView={setQuickViewProduct} onNavigate={navigateTo} />
                ))}
              </div>
            </div>

            {/* 7. Why Choose TKM */}
            <WhyChooseTKM />

            {/* 8. Premium Kitchen Faucets */}
            <div className="bg-tkm-light py-[60px] md:py-[100px] px-4 md:px-6">
              <KitchenMixers onNavigate={navigateTo} />
            </div>

            {/* 9. Lifestyle Break #2 */}
            <LifestyleBreak2 onNavigate={navigateTo} />

            {/* 10. Advanced Shower Systems */}
            <div className="bg-tkm-light py-[60px] md:py-[100px] px-4 md:px-6">
              <AdvancedShowers onNavigate={navigateTo} />
            </div>

            {/* 11. Stainless Steel Sinks */}
            <div className="bg-tkm-gray py-[60px] md:py-[100px] px-4 md:px-6">
              <StainlessSteel onNavigate={navigateTo} />
            </div>

            {/* 12. Customer Reviews */}
            <div className="bg-tkm-light">
              <CustomerReviews />
            </div>

            {/* 13. FAQ */}
            <FaqSection />

            {/* 14. Final CTA */}
            <BottomBanner onNavigate={navigateTo} />
          </div>
        )}
        
        {view === 'complaint' && <ComplaintForm />}
        {view === 'collection' && <CollectionPage collectionId={activeId} onNavigate={navigateTo} onAddToCart={addToCart} onQuickView={setQuickViewProduct} />}
        {view === 'product' && currentProduct && (
          <ProductDetail product={currentProduct} relatedProducts={relatedProducts} onAddToCart={addToCart} onNavigate={navigateTo} />
        )}
        {view === 'kitchen-landing' && <KitchenLanding onNavigate={navigateTo} onAddToCart={addToCart} />}
        {view === 'bath-landing' && <BathLanding onNavigate={navigateTo} onAddToCart={addToCart} />}
      </main>

      <Footer onNavigate={navigateTo} />
      
      <CartDrawer 
        isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}
        cart={cart} onUpdateQuantity={updateCartQuantity} onRemove={removeFromCart}
        onCheckout={handleCheckout} recommendations={realProducts.slice(4, 8)} onAddToCart={addToCart}
      />
      <QuickViewModal 
        product={quickViewProduct} onClose={() => setQuickViewProduct(null)}
        onAddToCart={addToCart} onViewDetails={(p) => navigateTo('product', p.id)}
      />
      <GeminiAssistant />
    </div>
  );
};

export default App;