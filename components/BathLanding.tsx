import React from 'react';
import { SectionTitle } from './common/SectionTitle';
import { ProductCard } from './ProductCard';
import { InnovationSection } from './common/InnovationSection';
import { Product, ViewType } from '../types';
import { MessageCircle } from 'lucide-react';

interface BathLandingProps {
    onNavigate: (view: ViewType, id?: string) => void;
    onAddToCart: (product: Product) => void;
}

const bestSellers: Product[] = [
    { id: 'bs1', name: 'Luxury Gold Basin Mixer High Neck', category: 'Bathroom Faucets', price: 'PKR 450.00', image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=600&q=80', badge: 'Extra 15% Off' },
    { id: 'bs2', name: 'Rain Shower System Black', category: 'Showers', price: 'PKR 899.00', image: 'https://images.unsplash.com/photo-1520032525096-7bd04a94b568?auto=format&fit=crop&w=600&q=80', badge: 'Sale' },
    { id: 'bs3', name: 'Concealed Basin Mixer Black', category: 'Bathroom Faucets', price: 'PKR 650.00', image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=600&q=80', badge: 'Extra 15% Off' },
    { id: 'bs4', name: 'Thermostatic Shower Mixer', category: 'Showers', price: 'PKR 1,200.00', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80', badge: 'Popular' },
];

export const BathLanding: React.FC<BathLandingProps> = ({ onNavigate, onAddToCart }) => {
  return (
    <div className="w-full bg-white">
        {/* Hero Section */}
        <div className="relative h-[600px] w-full overflow-hidden">
            <img 
                src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1920&q=80" 
                alt="Bathroom Hero" 
                className="w-full h-full object-cover"
            />
            {/* Darker Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
                <div className="px-8 md:px-24 text-white max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-xl">Transform Your Shower into a Luxury Experience</h1>
                    <p className="text-lg mb-8 font-light drop-shadow-md">Elevate your daily routine with TKM's exquisite range of bathroom fittings.</p>
                    <button onClick={() => onNavigate('collection', 'bathroom-faucets-imported')} className="bg-white text-black px-8 py-3 uppercase font-bold tracking-widest hover:bg-tkm-teal hover:text-white transition-colors">Shop Bathroom</button>
                </div>
            </div>
        </div>

        {/* Sub Categories */}
        <div className="w-full max-w-[1920px] mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-light mb-2">Bathroom Products</h2>
                <p className="text-gray-500">Shop by Category</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: 'Bathroom Faucets', img: 'https://images.unsplash.com/photo-1599815049516-7d3122c54f49?auto=format&fit=crop&w=800&q=80', link: 'bathroom-faucets-imported' },
                    { title: 'Shower Systems', img: 'https://images.unsplash.com/photo-1520032525096-7bd04a94b568?auto=format&fit=crop&w=800&q=80', link: 'bathroom-wall-mounted-showers-imported' },
                    { title: 'Bathroom Sinks', img: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80', link: 'kitchen-bath-accessories' }
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
                <h2 className="text-2xl font-light">Bathroom Bestsellers</h2>
                <button onClick={() => onNavigate('collection', 'bathroom-faucets-imported')} className="text-sm font-bold underline hover:text-tkm-teal">View all</button>
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
                <h2 className="text-3xl font-light mb-2">Bathroom Innovations</h2>
                <p className="text-gray-500">Intelligent Features for Everyday Comfort</p>
            </div>

            <InnovationSection 
                align="left"
                title="Smart Temperature Display"
                subtitle="Modern Showering"
                description="The water turbine generation LED display requires no electricity or batteries, drawing energy directly from water flow. Fully waterproof, it activates as soon as the water is turned on, instantly showing the temperature. The display changes color in response to the water temperature, providing a clear, safe, and intuitive visual guide."
                image="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80"
            />
            
            <InnovationSection 
                align="right"
                title="Multiple Water Outlet Modes"
                subtitle="Versatility"
                description="Three distinct water modes—stream, spray, and boost—are designed to handle every task with ease. Use the gentle stream for everyday washing, the spray for thorough rinsing, and the boost mode for powerful cleaning. Switching between modes is effortless, providing flexibility and efficiency in your bathroom."
                image="https://images.unsplash.com/photo-1631729371254-42c2a89dd659?auto=format&fit=crop&w=1200&q=80"
            />
            
             <InnovationSection 
                align="left"
                title="All-In-One Shower System"
                subtitle="Complete Control"
                description="TKM shower system offers individual button controls for each water outlet, including hand shower, shower head, sprayer, and waterfall. Clearly labeled buttons ensure intuitive, effortless switching between outlets, providing precise control and a seamless, personalized showering experience for every user."
                image="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80"
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
                         <img src={`https://picsum.photos/seed/bath${item}/600/600`} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt="Gallery" />
                         <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent"></div>
                     </div>
                 ))}
             </div>
        </div>

    </div>
  );
};