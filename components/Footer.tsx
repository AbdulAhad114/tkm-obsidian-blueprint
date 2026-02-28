import React from 'react';
import { ViewType } from '../types';
import { Facebook, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: ViewType, id?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-tkm-black text-white pt-14 md:pt-20 pb-8 font-sans">
      <div className="w-full px-6 md:px-12 max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12 pb-12 border-b border-gray-800">
          
          {/* Brand */}
          <div>
            <div className="flex flex-col items-start leading-none cursor-pointer mb-5" onClick={() => onNavigate('home')}>
              <span className="text-3xl font-bold text-tkm-teal tracking-tighter">TKM</span>
              <span className="text-[10px] font-bold text-gray-500 tracking-[0.3em] uppercase">TRADING CO</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Premium sanitaryware and kitchen fittings. Elevating your living spaces with quality imported products.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-tkm-teal transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><button onClick={() => onNavigate('home')} className="hover:text-tkm-teal transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('collection', 'featured-products')} className="hover:text-tkm-teal transition-colors">Products</button></li>
              <li><button onClick={() => onNavigate('complaint')} className="hover:text-tkm-teal transition-colors">Contact Us</button></li>
              <li><button className="hover:text-tkm-teal transition-colors">Shipping Policy</button></li>
              <li><button className="hover:text-tkm-teal transition-colors">Refund Policy</button></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-wider">Categories</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><button onClick={() => onNavigate('collection', 'kitchen-faucets-imported')} className="hover:text-tkm-teal transition-colors">Kitchen Faucets</button></li>
              <li><button onClick={() => onNavigate('collection', 'bathroom-wall-mounted-showers-imported')} className="hover:text-tkm-teal transition-colors">Shower Systems</button></li>
              <li><button onClick={() => onNavigate('collection', 'kitchen-sinks')} className="hover:text-tkm-teal transition-colors">Stainless Sinks</button></li>
              <li><button onClick={() => onNavigate('collection', 'bathroom-faucets-imported')} className="hover:text-tkm-teal transition-colors">Bathroom Fittings</button></li>
              <li><button onClick={() => onNavigate('collection', 'kitchen-accessories')} className="hover:text-tkm-teal transition-colors">Accessories</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>📱 WhatsApp: +92 300 1234567</li>
              <li>✉️ support@tkmtrading.com</li>
              <li>📍 Lahore, Pakistan</li>
              <li>🕐 Mon-Sat: 10AM - 7PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 text-xs">
            © 2026, TKM TRADING SHOP. All Rights Reserved.
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-600 text-xs">Payment:</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-[10px] text-gray-400">Bank Transfer</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-[10px] text-gray-400">COD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
