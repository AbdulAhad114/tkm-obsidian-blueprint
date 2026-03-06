import React from 'react';

interface FooterProps {
    onNavigate: (view: 'home' | 'complaint') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-tkm-black text-white pt-12 md:pt-16 pb-8 md:pb-12 text-[12px] font-sans border-t border-gray-800">
      <div className="w-full px-4 md:px-6 max-w-[1920px] mx-auto">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16 border-b border-gray-800 pb-10 md:pb-16">
            
            {/* Logo Section */}
            <div className="col-span-1 md:col-span-2 pr-8">
                <div 
                    className="flex flex-col items-start leading-none group cursor-pointer mb-6"
                    onClick={() => onNavigate('home')}
                >
                    <div className="flex items-center gap-1">
                        <span className="text-3xl font-bold text-tkm-teal tracking-tighter">TKM</span>
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 tracking-[0.3em] uppercase pl-0.5">TRADING CO</span>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed max-w-sm text-sm">
                    Premium sanitaryware and kitchen fittings. Elevating your living spaces with TKM quality. 
                    We are dedicated to providing the best products with exceptional customer service.
                </p>
                <div className="text-gray-500 text-xs">
                    <p>Lahore, Pakistan</p>
                    <p>support@tkmtrading.com</p>
                    <p>+92 300 1234567</p>
                </div>
            </div>

            {/* Policies */}
            <div>
                <h4 className="font-bold mb-6 uppercase tracking-[0.1em] text-white">Customer Care</h4>
                <ul className="space-y-4 text-gray-400">
                    <li><button onClick={() => {}} className="hover:text-tkm-teal transition-colors text-left">Shipping Policy</button></li>
                    <li><button onClick={() => {}} className="hover:text-tkm-teal transition-colors text-left">Terms of Service</button></li>
                    <li><button onClick={() => {}} className="hover:text-tkm-teal transition-colors text-left">Privacy Policy</button></li>
                    <li><button onClick={() => {}} className="hover:text-tkm-teal transition-colors text-left">Refund Policy</button></li>
                    <li><button onClick={() => onNavigate('complaint')} className="hover:text-white text-left text-red-400 font-bold mt-2">File a Complaint</button></li>
                </ul>
            </div>

            {/* Shop By */}
            <div>
                <h4 className="font-bold mb-6 uppercase tracking-[0.1em] text-white">Collections</h4>
                <ul className="space-y-4 text-gray-400">
                    <li><button onClick={() => onNavigate('home')} className="hover:text-tkm-teal transition-colors text-left">Bathroom Faucets</button></li>
                    <li><button onClick={() => onNavigate('home')} className="hover:text-tkm-teal transition-colors text-left">Kitchen Mixers</button></li>
                    <li><button onClick={() => onNavigate('home')} className="hover:text-tkm-teal transition-colors text-left">Rain Showers</button></li>
                    <li><button onClick={() => onNavigate('home')} className="hover:text-tkm-teal transition-colors text-left">Accessories</button></li>
                    <li><button onClick={() => onNavigate('home')} className="hover:text-tkm-teal transition-colors text-left">New Arrivals</button></li>
                </ul>
            </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-600">
                © 2026, TKM TRADING SHOP. All Rights Reserved.
            </div>
            
            <div className="flex items-center gap-4">
                <div className="flex gap-2 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                    <div className="bg-white w-10 h-6 flex items-center justify-center rounded-sm"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" className="h-2" alt="Visa"/></div>
                    <div className="bg-white w-10 h-6 flex items-center justify-center rounded-sm"><img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4" alt="Mastercard"/></div>
                    <div className="bg-white w-10 h-6 flex items-center justify-center rounded-sm"><span className="text-blue-600 font-bold text-[8px] italic">Amex</span></div>
                </div>
            </div>
        </div>

      </div>
    </footer>
  );
};