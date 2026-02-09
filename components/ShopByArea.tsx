import React from 'react';
import { SectionTitle } from './common/SectionTitle';
import { ViewType } from '../types';

interface ShopByAreaProps {
  onNavigate?: (view: ViewType, id?: string) => void;
}

const categories = [
    { title: 'Bathroom Faucets', image: 'https://tkmtradingshop.com/cdn/shop/files/FOIL.jpg?v=1744419344', link: 'bathroom-faucets-imported' },
    { title: 'Wall Showers', image: 'https://tkmtradingshop.com/cdn/shop/collections/WhatsApp_Image_2024-08-04_at_10.44.56_AM.png?v=1745583389', link: 'bathroom-wall-mounted-showers-imported' },
    { title: 'Hand Showers', image: 'https://tkmtradingshop.com/cdn/shop/collections/WhatsAppImage2024-08-08at23.05.50.jpg?v=1744299040', link: 'bathroom-hand-showers-imported' },
    { title: 'Kitchen Faucets', image: 'https://tkmtradingshop.com/cdn/shop/collections/WhatsAppImage2024-09-05at11.22.32AM.jpg?v=1744299863', link: 'kitchen-faucets-imported' },
    { title: 'Kitchen Sinks', image: 'https://tkmtradingshop.com/cdn/shop/collections/9649ae1af1083e5fea02ddae4caa7d39.jpg?v=1744318176', link: 'kitchen-sinks' },
    { title: 'Kitchen Accessories', image: 'https://tkmtradingshop.com/cdn/shop/collections/Producten.jpg?v=1744511960', link: 'kitchen-accessories' }
];

export const ShopByArea: React.FC<ShopByAreaProps> = ({ onNavigate }) => {
  const handleClick = (id: string) => {
    if (onNavigate) {
      onNavigate('collection', id);
    }
  };

  return (
    <section className="mb-4 w-full px-2 md:px-6">
      <SectionTitle title="Shop By Category" />
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-3">
         {categories.map((cat, idx) => (
             <div key={idx} onClick={() => handleClick(cat.link)} className="flex flex-col items-center group cursor-pointer bg-white rounded-2xl hover:shadow-lg transition-shadow duration-300">
                 <div className="w-full aspect-[5/6] overflow-hidden mb-3 relative rounded-t-2xl">
                     <img src={cat.image} alt={cat.title} className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                     <div className="absolute bottom-4 left-0 w-full text-center md:hidden">
                        <span className="bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">{cat.title}</span>
                     </div>
                 </div>
                 <h3 className="hidden pb-2 md:block text-sm font-bold uppercase tracking-widest group-hover:text-tkm-teal transition-colors text-center">{cat.title}</h3>
             </div>
         ))}
      </div>
    </section>
  );
};