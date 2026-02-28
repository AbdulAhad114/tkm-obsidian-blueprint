import React, { useState, useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BenefitsBar } from './components/BenefitsBar';
import { ShopByArea } from './components/ShopByArea';
import { FlashSale } from './components/FlashSale';
import { KitchenMixers } from './components/KitchenMixers';
import { AdvancedShowers } from './components/AdvancedShowers';
import { StainlessSteel } from './components/StainlessSteel';
import { WhyChooseTKM } from './components/WhyChooseTKM';
import { InstagramFeed } from './components/InstagramFeed';
import { NewsletterBanner } from './components/NewsletterBanner';
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
import { FadeInSection } from './components/common/FadeInSection';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('home');
  const [activeId, setActiveId] = useState<string>('');
  const [realProducts, setRealProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [featuredFilter, setFeaturedFilter] = useState('All');

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

  // Filter featured products
  const filterTabs = ['All', 'Kitchen', 'Bathroom', 'Showers', 'Sinks'];
  const filteredProducts = featuredFilter === 'All' 
    ? realProducts.slice(0, 8) 
    : realProducts.filter(p => p.category?.toLowerCase().includes(featuredFilter.toLowerCase())).slice(0, 8);

  let seoTitle = 'TKM Trading Shop | Premium Sanitaryware & Kitchen Faucets Pakistan';
  let seoDescription = 'Premium bathroom fittings and kitchen faucets in Pakistan. TKM Trading offers imported sanitaryware, rain showers, sinks and accessories with free nationwide delivery.';
  let seoImage = 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2868&auto=format&fit=crop';
  let seoType: 'website' | 'product' | 'article' = 'website';
  let schema = undefined;

  if (view === 'product' && currentProduct) {
    seoTitle = `${currentProduct.name} | TKM Trading Shop`;
    seoDescription = `Buy ${currentProduct.name} at best price in Pakistan. ${currentProduct.category} - Free Delivery.`;
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
    return <div className="min-h-screen flex items-center justify-center bg-white"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-tkm-teal"></div></div>;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <SEOHead 
        title={seoTitle} description={seoDescription} ogImage={seoImage}
        ogType={seoType} jsonLd={schema} canonicalUrl={window.location.href}
      />

      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Header */}
      <Header 
        onNavigate={navigateTo} 
        cartCount={cart.reduce((a, c) => a + c.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />
      
      <main className="flex-grow w-full">
        {view === 'home' && (
          <>
            {/* 3. Hero */}
            <Hero onNavigate={navigateTo} />

            {/* 4. Trust / USP Bar */}
            <FadeInSection>
              <BenefitsBar />
            </FadeInSection>

            {/* 5. Shop By Category */}
            <FadeInSection>
              <ShopByArea onNavigate={navigateTo} />
            </FadeInSection>

            {/* 6. Featured Products */}
            <FadeInSection>
              <section className="py-12 md:py-20 px-6 md:px-12 bg-tkm-gray">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-8">
                    <span className="text-tkm-teal text-xs uppercase tracking-[0.2em] font-semibold">Hand-Picked</span>
                    <h2 className="font-display text-3xl md:text-4xl text-tkm-black mt-2 mb-2">Featured Products</h2>
                    <p className="text-sm text-tkm-body">Top-selling imported fittings loved by Pakistani homeowners</p>
                    <div className="w-12 h-[2px] bg-tkm-brass mx-auto mt-4" />
                  </div>

                  {/* Filter Tabs */}
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {filterTabs.map(tab => (
                      <button
                        key={tab}
                        onClick={() => setFeaturedFilter(tab)}
                        className={`px-5 py-2 rounded-full text-xs font-bold transition-colors ${
                          featuredFilter === tab 
                            ? 'bg-tkm-teal text-white' 
                            : 'bg-white text-tkm-body hover:bg-tkm-teal/10'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {(filteredProducts.length > 0 ? filteredProducts : realProducts.slice(0, 8)).map(p => (
                      <ProductCard key={p.id} product={p} onAddToCart={addToCart} onQuickView={setQuickViewProduct} onNavigate={navigateTo} />
                    ))}
                  </div>

                  <div className="text-center mt-10">
                    <button 
                      onClick={() => navigateTo('collection', 'featured-products')}
                      className="border-2 border-tkm-teal text-tkm-teal px-8 py-3 rounded-md text-sm font-bold hover:bg-tkm-teal hover:text-white transition-all"
                    >
                      View All Products
                    </button>
                  </div>
                </div>
              </section>
            </FadeInSection>

            {/* 7. Flash Sale */}
            <FadeInSection>
              <FlashSale onNavigate={navigateTo} onAddToCart={addToCart} onQuickView={setQuickViewProduct} products={realProducts} />
            </FadeInSection>

            {/* 8. Premium Kitchen Faucets */}
            <FadeInSection>
              <KitchenMixers onNavigate={navigateTo} onAddToCart={addToCart} onQuickView={setQuickViewProduct} />
            </FadeInSection>

            {/* 9. Advanced Shower Systems */}
            <FadeInSection>
              <AdvancedShowers onNavigate={navigateTo} />
            </FadeInSection>

            {/* 10. Stainless Steel Sinks */}
            <FadeInSection>
              <StainlessSteel onNavigate={navigateTo} onAddToCart={addToCart} onQuickView={setQuickViewProduct} />
            </FadeInSection>

            {/* 11. Why Choose Us */}
            <FadeInSection>
              <WhyChooseTKM />
            </FadeInSection>

            {/* 12. Customer Testimonials */}
            <FadeInSection>
              <CustomerReviews />
            </FadeInSection>

            {/* 13. Instagram Feed */}
            <FadeInSection>
              <InstagramFeed />
            </FadeInSection>

            {/* 14. FAQ */}
            <FadeInSection>
              <FaqSection />
            </FadeInSection>

            {/* 15. Newsletter */}
            <FadeInSection>
              <NewsletterBanner />
            </FadeInSection>

            {/* 16. Final CTA */}
            <BottomBanner onNavigate={navigateTo} />
          </>
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

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/923001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors hover:scale-110 transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      <GeminiAssistant />
    </div>
  );
};

export default App;
