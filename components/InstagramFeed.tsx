import React from 'react';
import { Instagram } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1520032525096-7bd04a94b568?auto=format&fit=crop&w=400&q=80',
];

export const InstagramFeed: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-[42px] text-tkm-navy mb-2">Follow Our Journey</h2>
          <p className="text-sm text-tkm-body">
            <a href="https://instagram.com/tkmtrading" target="_blank" rel="noopener noreferrer" className="text-tkm-teal hover:underline">@tkmtrading</a>
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-[6px]">
          {images.map((img, i) => (
            <div key={i} className="relative aspect-square overflow-hidden group cursor-pointer">
              <img src={img} alt={`TKM lifestyle ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-tkm-navy/0 group-hover:bg-tkm-navy/70 transition-colors duration-300 flex items-center justify-center">
                <Instagram size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://instagram.com/tkmtrading"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-[1.5px] border-tkm-navy text-tkm-navy px-8 py-3 rounded text-[12px] font-semibold uppercase tracking-[1.5px] hover:bg-tkm-navy hover:text-white transition-all"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};