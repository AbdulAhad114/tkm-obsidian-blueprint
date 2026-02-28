import React from 'react';
import { Truck, ShieldCheck, Wrench, MessageCircle } from 'lucide-react';

const benefits = [
  { icon: Truck, title: 'Fast Nationwide Delivery', desc: 'Karachi, Lahore, Islamabad & more', color: 'text-tkm-teal' },
  { icon: ShieldCheck, title: '100% Genuine Products', desc: 'Directly imported, quality verified', color: 'text-tkm-teal' },
  { icon: Wrench, title: 'Expert Installation Support', desc: 'Guidance on every purchase', color: 'text-tkm-teal' },
  { icon: MessageCircle, title: 'Dedicated Customer Care', desc: 'WhatsApp & call support', color: 'text-tkm-teal' },
];

export const BenefitsBar: React.FC = () => {
  return (
    <section className="bg-white py-8 md:py-10 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-3 pl-4 border-l-2 border-tkm-teal">
              <b.icon size={24} className={`${b.color} flex-shrink-0 mt-0.5`} strokeWidth={1.5} />
              <div>
                <h4 className="font-bold text-sm text-tkm-black">{b.title}</h4>
                <p className="text-xs text-tkm-body mt-0.5">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
