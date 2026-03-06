import React from 'react';
import { SectionTitle } from './common/SectionTitle';

const items = [
    { title: 'Exclusive Series', image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=500&q=80' },
    { title: 'Sensor Collection', image: 'https://images.unsplash.com/photo-1564540574859-0dfb63985953?auto=format&fit=crop&w=500&q=80' },
    { title: 'Shower Ranges', image: 'https://images.unsplash.com/photo-1520032525096-7bd04a94b568?auto=format&fit=crop&w=500&q=80' },
    { title: 'Stainless Steel Collection', image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=500&q=80' },
    { title: 'Accessories', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=500&q=80' },
    { title: 'Kitchen Collection', image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=500&q=80' },
];

export const KludiCollections: React.FC = () => {
  return (
    <section className="mb-16 container mx-auto px-2 md:px-4">
      <SectionTitle title="TKM Collections" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group cursor-pointer">
                <div className="w-full aspect-[16/9] overflow-hidden mb-3">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale hover:grayscale-0" />
                </div>
                <h3 className="text-sm font-light text-gray-600 group-hover:text-tkm-teal transition-colors">{item.title}</h3>
            </div>
        ))}
      </div>
    </section>
  );
};