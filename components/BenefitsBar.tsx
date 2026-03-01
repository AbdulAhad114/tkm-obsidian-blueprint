import React from 'react';
import { Truck, ShieldCheck, Wrench, MessageCircle } from 'lucide-react';

const benefits = [
  { icon: Truck, title: 'Nationwide Delivery', desc: 'All major Pakistani cities' },
  { icon: ShieldCheck, title: '100% Genuine', desc: 'Verified source, quality tested' },
  { icon: Wrench, title: 'Install Support', desc: 'Guidance on every purchase' },
  { icon: MessageCircle, title: 'WhatsApp Support', desc: 'Reply within 60 minutes' },
];

export const BenefitsBar: React.FC = () => {
  return (
    <section className="bg-white py-10 border-t-2 border-tkm-teal border-b border-b-tkm-divider">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {benefits.map((b, i) => (
            <div key={i} className={`flex items-start gap-3 ${i < 3 ? 'md:border-r md:border-tkm-divider' : ''} md:px-6 first:md:pl-0 last:md:pr-0`}>
              <b.icon size={28} className="text-tkm-copper flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <h4 className="font-semibold text-[15px] text-tkm-navy">{b.title}</h4>
                <p className="text-[13px] text-tkm-muted mt-0.5">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};