import React from 'react';
import { SectionTitle } from './common/SectionTitle';

export const Sanitaryware: React.FC = () => {
  return (
    <section className="mb-16 container mx-auto px-4">
      <SectionTitle title="Sanitaryware Collections" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Row 1: Washbasins (Full Width relative to container, or span 2 in a 2 col grid? Screenshot shows it wide) */}
        <div className="md:col-span-2 relative h-[300px] group cursor-pointer overflow-hidden">
            <img src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover brightness-75 transition-transform duration-500 group-hover:scale-105" alt="Washbasins"/>
            <div className="absolute inset-0 flex items-end justify-center pb-4">
                <span className="bg-black text-white px-8 py-2 text-xs font-bold uppercase tracking-widest">Washbasins</span>
            </div>
        </div>

        {/* Row 2: 4 small items. Nested grid to make it easier */}
        <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Bidets', 'Water Closets', 'Bathtubs', 'Furniture'].map((item, idx) => (
                <div key={idx} className="relative h-[150px] group cursor-pointer overflow-hidden">
                    <img src={`https://picsum.photos/seed/${item}/400/300`} className="w-full h-full object-cover brightness-75 transition-transform duration-500 group-hover:scale-105" alt={item}/>
                    <div className="absolute inset-0 flex items-end justify-center pb-2">
                        <span className="bg-black text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest">{item}</span>
                    </div>
                </div>
            ))}
        </div>

        {/* Row 3: Shower Trays (Wide) */}
        <div className="md:col-span-2 relative h-[200px] group cursor-pointer overflow-hidden">
            <img src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover brightness-75 transition-transform duration-500 group-hover:scale-105" alt="Shower Trays"/>
             <div className="absolute inset-0 flex items-end justify-center pb-4">
                <span className="bg-black text-white px-8 py-2 text-xs font-bold uppercase tracking-widest">Shower Trays</span>
            </div>
        </div>
        
        {/* Row 4: Mirrors (Wide) */}
        <div className="md:col-span-2 relative h-[200px] group cursor-pointer overflow-hidden">
            <img src="https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover brightness-75 transition-transform duration-500 group-hover:scale-105" alt="Mirrors"/>
             <div className="absolute inset-0 flex items-end justify-center pb-4">
                <span className="bg-black text-white px-8 py-2 text-xs font-bold uppercase tracking-widest">Mirrors</span>
            </div>
        </div>

      </div>
    </section>
  );
};