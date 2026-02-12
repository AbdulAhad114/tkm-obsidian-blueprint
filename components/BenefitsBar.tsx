import React from 'react';
import { Truck, ShieldCheck, Lock, CheckCircle } from 'lucide-react';

export const BenefitsBar: React.FC = () => {
  return (
    <section className="bg-tkm-teal text-white py-6 md:py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Truck size={28} className="flex-shrink-0 opacity-80" />
            <div className="text-left">
              <h4 className="font-bold text-xs uppercase tracking-wider">Nationwide Delivery</h4>
              <p className="text-[10px] opacity-70">Free across all Pakistan</p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <ShieldCheck size={28} className="flex-shrink-0 opacity-80" />
            <div className="text-left">
              <h4 className="font-bold text-xs uppercase tracking-wider">5-Year Warranty</h4>
              <p className="text-[10px] opacity-70">On all products</p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Lock size={28} className="flex-shrink-0 opacity-80" />
            <div className="text-left">
              <h4 className="font-bold text-xs uppercase tracking-wider">Secure Payments</h4>
              <p className="text-[10px] opacity-70">COD & bank transfer</p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <CheckCircle size={28} className="flex-shrink-0 opacity-80" />
            <div className="text-left">
              <h4 className="font-bold text-xs uppercase tracking-wider">Quality Tested</h4>
              <p className="text-[10px] opacity-70">Every product inspected</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};