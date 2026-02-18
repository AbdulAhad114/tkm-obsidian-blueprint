import React from 'react';
import { Category } from '../types';

const categories: Category[] = [
  {
    id: '1',
    title: 'Bathroom Faucets',
    image: 'https://picsum.photos/id/1027/800/800',
    link: '#bathroom'
  },
  {
    id: '2',
    title: 'Kitchen Mixers',
    image: 'https://picsum.photos/id/366/800/800',
    link: '#kitchen'
  },
  {
    id: '3',
    title: 'Shower Systems',
    image: 'https://picsum.photos/id/959/800/800',
    link: '#shower'
  }
];

export const CategoryGrid: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-4">Our Categories</h2>
          <div className="w-16 h-1 bg-kludi-orange mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.id} className="group relative h-[400px] overflow-hidden cursor-pointer">
              <img 
                src={cat.image} 
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-2xl text-white font-bold uppercase tracking-widest mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {cat.title}
                </h3>
                <span className="text-white text-sm border-b border-white pb-1 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  Discover More
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};