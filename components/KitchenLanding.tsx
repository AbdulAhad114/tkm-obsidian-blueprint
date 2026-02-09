import React from 'react';
import { ProductCard } from './ProductCard';
import { InnovationSection } from './common/InnovationSection';
import { Product, ViewType } from '../types';
import { MessageCircle } from 'lucide-react';

interface KitchenLandingProps {
    onNavigate: (view: ViewType, id?: string) => void;
    onAddToCart: (product: Product) => void;
}

const bestSellers: Product[] = [
    { id: 'ks1', name: 'L-Shape Kitchen Mixer Gold', category: 'Kitchen Faucets', price: 'PKR 550.00', image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=600&q=80', badge: 'Extra 15% Off' },
    { id: 'ks2', name: 'Stainless Steel Drainer Basket', category: 'Organisers', price: 'PKR 120.00', image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=600&q=80', badge: 'Sale' },
    { id: 'ks3', name: 'Pull-out Kitchen Spray', category: 'Kitchen Faucets', price: 'PKR 399.00', image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=600&q=80', badge: 'Extra 15% Off' },
    { id: 'ks4', name: 'Matt Black Pull-Out Mixer', category: 'Kitchen Faucets', price: 'PKR 1,149.00', image: 'https://images.unsplash.com/photo-1616486788371-62d930495c44?auto=format&fit=crop&w=600&q=80', badge: 'Sold Out' },
];

export const KitchenLanding: React.FC<KitchenLandingProps> = ({ onNavigate, onAddToCart }) => {
  return (
    <div className="w-full bg-white">
        {/* Hero Section */}
        <div className="relative h-[600px] w-full overflow-hidden">
            <img 
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1920&q=80" 
                alt="Kitchen Hero" 
                className="w-full h-full object-cover brightness-90"
            />
            {/* Darker Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
                <div className="px-8 md:px-24 text-white max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-xl">Designed for Efficiency, Durability and Aesthetics</h1>
                    <p className="text-lg mb-8 font-light drop-shadow-md">Transform your culinary space with TKM's premium imported kitchen fittings.</p>
                    <button onClick={() => onNavigate('collection', 'kitchen-faucets-imported')} className="bg-white text-black px-8 py-3 uppercase font-bold tracking-widest hover:bg-tkm-teal hover:text-white transition-colors">Shop Kitchen</button>
                </div>
            </div>
        </div>

        {/* Sub Categories */}
        <div className="w-full max-w-[1920px] mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-light mb-2">Kitchen Products</h2>
                <p className="text-gray-500">Shop by Category</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: 'Kitchen Sinks', img: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', link: 'kitchen-sink-organisers' },
                    { title: 'Kitchen Faucets', img: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=800&q=80', link: 'kitchen-faucets-imported' },
                    { title: 'Kitchen Accessories', img: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=800&q=80', link: 'kitchen-accessories' }
                ].map((cat, idx) => (
                    <div key={idx} onClick={() => onNavigate('collection', cat.link)} className="relative h-[300px] group cursor-pointer overflow-hidden rounded-sm">
                        <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                        <div className="absolute bottom-6 left-6">
                            <h3 className="text-white text-2xl font-bold shadow-black drop-shadow-md">{cat.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Bestsellers */}
        <div className="w-full max-w-[1920px] mx-auto px-4 mb-20">
            <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-light">Kitchen Bestsellers</h2>
                <button onClick={() => onNavigate('collection', 'kitchen-faucets-imported')} className="text-sm font-bold underline hover:text-tkm-teal">View all</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {bestSellers.map(p => (
                    <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} onNavigate={onNavigate} />
                ))}
            </div>
        </div>

        {/* Innovations */}
        <div className="w-full mb-16">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-light mb-2">Kitchen Innovations</h2>
                <p className="text-gray-500">Change The Way You Live</p>
            </div>

            <InnovationSection 
                align="left"
                title="Real-Time Temperature Display"
                subtitle="Smart Technology"
                description="Experience smart convenience with the real-time temperature display. Powered by an internal water flow turbine, the LED screen instantly displays water temperature—no batteries required. Stay safe, precise, and stylish with every use."
                image="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80"
            />
            
            <InnovationSection 
                align="right"
                title="Touchless Activated for Your Kitchen"
                subtitle="Hygiene First"
                description="Enjoy hands-free convenience with the touchless sensor. A simple wave activates or stops the water flow, keeping the faucet clean and hygienic while freeing up your hands for cooking, cleaning, or multitasking in the kitchen."
                image="https://images.unsplash.com/photo-1605634591546-f9478a87071e?auto=format&fit=crop&w=1200&q=80"
            />

            <InnovationSection 
                align="left"
                title="Pull-Out & Retractable Faucets"
                subtitle="Maximum Flexibility"
                description="The pull-out faucet offers multiple water outlet modes, effortlessly adapting to various kitchen tasks. From rinsing vegetables to heavy-duty cleaning, it enhances versatility, improves efficiency, and provides a more convenient and enjoyable cooking experience."
                image="https://images.unsplash.com/photo-1599815049516-7d3122c54f49?auto=format&fit=crop&w=1200&q=80"
            />
        </div>

        {/* Live With TKM */}
        <div className="w-full px-4 mb-20">
             <div className="flex justify-between items-center mb-8">
                 <h2 className="text-2xl font-light">Live With TKM</h2>
                 <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-bold"><MessageCircle size={16} /> Rewards</button>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                 {[1,2,3,4].map((item) => (
                     <div key={item} className="aspect-square bg-gray-100 overflow-hidden relative group cursor-pointer">
                         <img src={`https://picsum.photos/seed/kitchen${item}/600/600`} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt="Gallery" />
                         <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent"></div>
                     </div>
                 ))}
             </div>
        </div>

    </div>
  );
};