import React from 'react';
import { SectionTitle } from './common/SectionTitle';
import { ViewType } from '../types';

interface Props {
    onNavigate?: (view: ViewType, id?: string) => void;
}

export const AdvancedShowers: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section id="wall-showers" className="mb-16">
      <SectionTitle title="Advanced Shower Systems" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
        <div 
            onClick={() => onNavigate && onNavigate('collection', 'bathroom-wall-mounted-showers-imported')}
            className="relative h-[300px] md:h-[550px] overflow-hidden group cursor-pointer"
        >
           <img 
             src="https://chinatradingcompany.pk/cdn/shop/files/23.jpg?v=1740048431&width=600" 
             alt="Luxury Rain Showers" 
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
           />
           <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
             <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-widest mb-2 group-hover:text-tkm-teal transition-colors">Piano Bath Set</h3>
             {/* <p className="text-white/80 text-sm">Immersive water experience</p> */}
           </div>
        </div>
        <div 
            onClick={() => onNavigate && onNavigate('collection', 'bathroom-wall-mounted-showers-imported')}
            className="relative h-[300px] md:h-[550px] overflow-hidden group cursor-pointer"
        >
           <img 
             src="https://tkmtradingshop.com/cdn/shop/files/WhatsAppImage2024-08-07at9.04.28AM.jpg?v=1723047146"
             alt="Wall Hanging Showers"
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
           />
           <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
             <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-widest mb-2 group-hover:text-tkm-teal transition-colors">Wall Hanging Showers</h3>
           </div>
        </div>
      </div>
    </section>
  );
};