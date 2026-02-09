import React from 'react';
import { Smartphone, ArrowRight } from 'lucide-react';

export const BottomBanner: React.FC = () => {
  return (
    <div className="w-full max-w-[1920px] mx-auto px-2 md:px-6 mb-16">
        <div className="relative w-full h-[250px] md:h-[350px] bg-black overflow-hidden rounded-sm group cursor-pointer">
            {/* Background Image with Overlay */}
            <img 
                src="https://tkmtradingshop.com/cdn/shop/files/darwin-interior-wHAV8p9dd6Q-unsplash.jpg?v=1745606469&width=3000" 
                alt="Luxury Interior" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" 
            />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

                 <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4 drop-shadow-xl">
                    SHOP NOW
                 </h2>

                 <div className="h-px w-24 bg-white/50 mb-4"></div>

                 <p className="text-white md:text-xl max-w-2xl font-light drop-shadow-md mb-2">
                    Experience the best in home fittings with <span className="font-bold text-white">TKM Trading</span>
                 </p>
                 
                 <p className="text-gray-200 text-xs md:text-sm max-w-md drop-shadow-sm mb-6">
                     Transform your home today with our premium selection of imported sanitaryware.
                 </p>

                 <button className="bg-white text-black px-8 py-3 uppercase text-xs font-bold tracking-[0.2em] hover:bg-tkm-teal hover:text-white transition-all duration-300 flex items-center gap-2">
                    Explore Collection <ArrowRight size={14} />
                 </button>
            </div>
        </div>
    </div>
  );
};