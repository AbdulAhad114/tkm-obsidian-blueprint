import React from 'react';
import { Product } from '../types';
import { SectionTitle } from './common/SectionTitle';
import { ProductCard } from './ProductCard';

const products: Product[] = [
  {
    id: 'p1',
    name: 'Luxury Gold Basin Mixer',
    category: 'Bathroom',
    price: 'PKR 450.00',
    image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
    badge: 'Best Seller'
  },
  {
    id: 'p2',
    name: 'Pull-out Kitchen Spray',
    category: 'Kitchen',
    price: 'PKR 399.00',
    image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p3',
    name: 'Rain Shower System Black',
    category: 'Bathroom',
    price: 'PKR 899.00',
    image: 'https://images.unsplash.com/photo-1520032525096-7bd04a94b568?auto=format&fit=crop&w=600&q=80',
    badge: 'New'
  },
  {
    id: 'p4',
    name: 'Smart Sink Organizer',
    category: 'Kitchen',
    price: 'PKR 129.50',
    image: 'https://images.unsplash.com/photo-1585913217436-3e2a5d5e533c?auto=format&fit=crop&w=600&q=80',
  }
];

export const FeaturedProducts: React.FC = () => {
  return (
    <section id="featured" className="py-12 bg-white">
      <div className="w-full px-2 md:px-6">
        <SectionTitle title="Featured Products" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-10 text-center">
             <a href="#" className="inline-block border-b border-black pb-1 text-sm font-bold uppercase tracking-widest hover:text-tkm-teal hover:border-tkm-teal transition-colors">View All Featured</a>
        </div>
      </div>
    </section>
  );
};