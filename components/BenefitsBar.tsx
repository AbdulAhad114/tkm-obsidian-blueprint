import React from 'react';
import { Truck, ShieldCheck, Award, Headphones } from 'lucide-react';

export const BenefitsBar: React.FC = () => {
  return (
    <section className="bg-tkm-teal text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Truck size={24} className="flex-shrink-0 opacity-80" />
            <div className="text-left">
              <h4 className="font-bold text-xs uppercase tracking-wider">Nationwide Delivery</h4>
              <p className="text-[10px] opacity-80">Across all Pakistan</p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <ShieldCheck size={24} className="flex-shrink-0 opacity-80" />
            <div className="text-left">
              <h4 className="font-bold text-xs uppercase tracking-wider">Quality Guarantee</h4>
              <p className="text-[10px] opacity-80">100% Authentic Products</p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Award size={24} className="flex-shrink-0 opacity-80" />
            <div className="text-left">
              <h4 className="font-bold text-xs uppercase tracking-wider">Top Rated</h4>
              <p className="text-[10px] opacity-80">Trusted by 1000+ Customers</p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Headphones size={24} className="flex-shrink-0 opacity-80" />
            <div className="text-left">
              <h4 className="font-bold text-xs uppercase tracking-wider">Premium Support</h4>
              <p className="text-[10px] opacity-80">Dedicated After-Sales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};