import React from 'react';
import { ViewType } from '../types';
import { Facebook, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: ViewType, id?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-tkm-navy text-white pt-14 md:pt-20 pb-8 font-sans">
      <div className="w-full px-6 md:px-12 max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12 pb-12 border-b border-white/10">
          
          {/* Brand */}
          <div>
            <div className="flex flex-col items-start leading-none cursor-pointer mb-5" onClick={() => onNavigate('home')}>
              <span className="text-3xl font-bold text-white tracking-tighter">TKM</span>
              <span className="text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase">TRADING CO</span>
            </div>
            <p className="text-white/65 text-sm leading-relaxed mb-5">
              Premium sanitaryware and kitchen fittings. Elevating Pakistani homes with quality imported products.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:text-tkm-copper transition-colors text-white/65">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-5 text-[13px] uppercase tracking-[2px]">Quick Links</h4>
            <ul className="space-y-3 text-white/65 text-sm">
              <li><button onClick={() => onNavigate('home')} className="hover:text-tkm-teal transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('collection', 'featured-products')} className="hover:text-tkm-teal transition-colors">Products</button></li>
              <li><button onClick={() => onNavigate('complaint')} className="hover:text-tkm-teal transition-colors">Contact Us</button></li>
              <li><button className="hover:text-tkm-teal transition-colors">Shipping Policy</button></li>
              <li><button className="hover:text-tkm-teal transition-colors">Refund Policy</button></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-5 text-[13px] uppercase tracking-[2px]">Categories</h4>
            <ul className="space-y-3 text-white/65 text-sm">
              <li><button onClick={() => onNavigate('collection', 'kitchen-faucets-imported')} className="hover:text-tkm-teal transition-colors">Kitchen Faucets</button></li>
              <li><button onClick={() => onNavigate('collection', 'bathroom-wall-mounted-showers-imported')} className="hover:text-tkm-teal transition-colors">Shower Systems</button></li>
              <li><button onClick={() => onNavigate('collection', 'kitchen-sinks')} className="hover:text-tkm-teal transition-colors">Stainless Sinks</button></li>
              <li><button onClick={() => onNavigate('collection', 'bathroom-faucets-imported')} className="hover:text-tkm-teal transition-colors">Bathroom Fittings</button></li>
              <li><button onClick={() => onNavigate('collection', 'kitchen-accessories')} className="hover:text-tkm-teal transition-colors">Accessories</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-5 text-[13px] uppercase tracking-[2px]">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="https://wa.me/923001234567?text=Hi%20TKM%2C%20I%27d%20like%20to%20know%20more%20about%20your%20products"
                  className="text-tkm-copper hover:underline"
                >
                  📱 WhatsApp: +92 300 1234567
                </a>
              </li>
              <li className="text-white/65">✉️ support@tkmtrading.com</li>
              <li className="text-white/65">📍 Lahore, Pakistan</li>
              <li className="text-white/65">🕐 Mon-Sat: 10AM - 7PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/45 text-xs">
            © 2024 TKM — All rights reserved.
          </div>
          <div className="flex items-center gap-3 text-white/45 text-xs">
            <span>COD</span>
            <span>·</span>
            <span>Bank Transfer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};