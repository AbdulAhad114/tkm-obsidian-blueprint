import React from 'react';
import { Gem, Shield, CheckCircle } from 'lucide-react';

const values = [
  {
    icon: Gem,
    title: 'Imported Premium Materials',
    desc: 'Crafted using high-grade brass and stainless steel.',
  },
  {
    icon: Shield,
    title: 'Long-Lasting Finish',
    desc: 'Resistant to rust, corrosion and daily wear.',
  },
  {
    icon: CheckCircle,
    title: 'Performance Tested',
    desc: 'Every product is quality-checked before dispatch.',
  },
];

export const BrandAuthority: React.FC = () => {
  return (
    <section className="px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-[44px] leading-tight text-tkm-black mb-4">
          Designed for Modern Pakistani Homes
        </h2>
        <div className="w-16 h-[2px] bg-tkm-brass mx-auto mb-12 md:mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {values.map((v, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border border-tkm-gray flex items-center justify-center mb-5">
                <v.icon size={24} className="text-tkm-teal" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-tkm-black mb-2">{v.title}</h3>
              <p className="text-sm text-gray-500 max-w-xs">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};