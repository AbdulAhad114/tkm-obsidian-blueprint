import React from 'react';
import { ShieldCheck, Hammer, Palette, Users } from 'lucide-react';

const reasons = [
  { icon: ShieldCheck, title: '5-Year Warranty', desc: 'Long-term confidence in every purchase.' },
  { icon: Hammer, title: 'Durable Brass Construction', desc: 'Heavy-duty materials built to last.' },
  { icon: Palette, title: 'Modern Minimal Designs', desc: 'Clean aesthetics for contemporary homes.' },
  { icon: Users, title: 'Trusted by Thousands', desc: 'Serving homeowners across Pakistan.' },
];

export const WhyChooseTKM: React.FC = () => {
  return (
    <section className="bg-tkm-gray py-[60px] md:py-[100px] px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-[44px] leading-tight text-tkm-black mb-4">
          Why Customers Choose TKM
        </h2>
        <div className="w-16 h-[2px] bg-tkm-brass mx-auto mb-12 md:mb-16" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {reasons.map((r, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center mb-5">
                <r.icon size={24} className="text-tkm-teal" strokeWidth={1.5} />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-tkm-black mb-2">{r.title}</h3>
              <p className="text-sm text-gray-500">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};