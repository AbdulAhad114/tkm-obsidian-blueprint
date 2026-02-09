import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { ViewType } from '../types';

interface HeaderProps {
    onNavigate: (view: ViewType, id?: string) => void;
    cartCount: number;
    onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, cartCount, onOpenCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mobile menu state
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  const handleNavClick = (id: string) => {
      onNavigate('collection', id);
      setIsMenuOpen(false);
      setMobileSubmenu(null);
  };

  const handleLandingClick = (view: ViewType) => {
      onNavigate(view);
      setIsMenuOpen(false);
      setMobileSubmenu(null);
  }

  const toggleMobileSubmenu = (menu: string) => {
    setMobileSubmenu(mobileSubmenu === menu ? null : menu);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsSearchOpen(false);
      console.log('Searching', searchQuery);
  };

  return (
    <>
    <header className="sticky top-0 z-40 bg-white text-black font-sans shadow-sm border-b border-gray-100">
      {/* Top Bar - Scrolling Marquee */}
      <div className="bg-tkm-black text-white text-[10px] md:text-[11px] py-2 md:py-2.5 overflow-hidden tracking-wider font-medium relative h-[36px] flex items-center">
        <div className="whitespace-nowrap animate-marquee absolute w-full text-center">
          <span className="mx-8">Free Nationwide Delivery on Orders Over PKR 10,000</span>
          <span className="mx-8">•</span>
          <span className="mx-8">End of Season Sale | 15% OFF with code TKM15</span>
          <span className="mx-8">•</span>
          <span className="mx-8">Premium Imported Sanitaryware</span>
          <span className="mx-8">•</span>
          <span className="mx-8">Free Nationwide Delivery on Orders Over PKR 10,000</span>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white">
        {/* Reduced padding: w-full with small px */}
        <div className="w-full px-4 md:px-6 max-w-[1920px] mx-auto">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Logo */}
            <div 
                className="flex flex-col items-start leading-none group cursor-pointer"
                onClick={() => onNavigate('home')}
            >
               <div className="flex items-center gap-1">
                 <span className="text-2xl md:text-3xl font-bold text-tkm-teal tracking-tighter">TKM</span>
               </div>
               <span className="text-[9px] md:text-[10px] font-bold text-gray-600 tracking-[0.3em] uppercase pl-0.5">TRADING</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex gap-8 xl:gap-10 text-[13px] font-bold uppercase tracking-widest text-gray-800">
              <button onClick={() => onNavigate('home')} className="hover:text-tkm-teal transition-colors py-6 border-b-2 border-transparent hover:border-tkm-teal">Home</button>
              
              {/* Bathroom Dropdown */}
              <div className="relative group">
                <button 
                  onClick={() => handleLandingClick('bath-landing')}
                  className="hover:text-tkm-teal transition-colors flex items-center gap-1 py-6 border-b-2 border-transparent hover:border-tkm-teal"
                >
                  Bathroom <ChevronDown size={14} />
                </button>
                <div className="absolute left-0 top-full w-64 bg-white shadow-xl border-t-2 border-tkm-teal opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                   <div className="flex flex-col py-2">
                       <button onClick={() => handleLandingClick('bath-landing')} className="text-left px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-tkm-teal text-xs tracking-wide font-bold uppercase border-b border-gray-100 bg-gray-50">Explore Bath World</button>
                       <button onClick={() => handleNavClick('bathroom-faucets-imported')} className="text-left px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-tkm-teal text-xs tracking-wide font-bold uppercase">Faucets (Imported)</button>
                       <button onClick={() => handleNavClick('bathroom-wall-mounted-showers-imported')} className="text-left px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-tkm-teal text-xs tracking-wide font-bold uppercase">Wall Showers</button>
                       <button onClick={() => handleNavClick('bathroom-hand-showers-imported')} className="text-left px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-tkm-teal text-xs tracking-wide font-bold uppercase">Hand Showers</button>
                   </div>
                </div>
              </div>

              {/* Kitchen Dropdown */}
              <div className="relative group">
                <button 
                  onClick={() => handleLandingClick('kitchen-landing')}
                  className="hover:text-tkm-teal transition-colors flex items-center gap-1 py-6 border-b-2 border-transparent hover:border-tkm-teal"
                >
                  Kitchen <ChevronDown size={14} />
                </button>
                <div className="absolute left-0 top-full w-64 bg-white shadow-xl border-t-2 border-tkm-teal opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                   <div className="flex flex-col py-2">
                       <button onClick={() => handleLandingClick('kitchen-landing')} className="text-left px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-tkm-teal text-xs tracking-wide font-bold uppercase border-b border-gray-100 bg-gray-50">Explore Kitchen World</button>
                       <button onClick={() => handleNavClick('kitchen-faucets-imported')} className="text-left px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-tkm-teal text-xs tracking-wide font-bold uppercase">Kitchen Faucets</button>
                       <button onClick={() => handleNavClick('kitchen-sinks')} className="text-left px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-tkm-teal text-xs tracking-wide font-bold uppercase">Kitchen Sinks</button>
                       <button onClick={() => handleNavClick('kitchen-sink-organisers')} className="text-left px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-tkm-teal text-xs tracking-wide font-bold uppercase">Sink Organisers</button>
                       <button onClick={() => handleNavClick('kitchen-accessories')} className="text-left px-6 py-3 hover:bg-gray-50 text-gray-700 hover:text-tkm-teal text-xs tracking-wide font-bold uppercase">Accessories</button>
                   </div>
                </div>
              </div>

              <button onClick={() => handleNavClick('featured-products')} className="hover:text-tkm-teal transition-colors py-6 border-b-2 border-transparent hover:border-tkm-teal">Featured</button>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4 md:gap-6">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="hover:text-tkm-teal transition-colors"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button className="hidden md:block hover:text-tkm-teal transition-colors">
                <User size={20} strokeWidth={1.5} />
              </button>
              <button 
                className="hover:text-tkm-teal transition-colors relative"
                onClick={onOpenCart}
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-tkm-teal text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                        {cartCount}
                    </span>
                )}
              </button>
              <button className="lg:hidden hover:text-tkm-teal" onClick={() => setIsMenuOpen(true)}>
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Search Overlay */}
    {isSearchOpen && (
        <div className="fixed inset-0 bg-white/95 z-50 flex flex-col items-center pt-32 animate-fade-in">
            <button 
                onClick={() => setIsSearchOpen(false)}
                className="absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-full"
            >
                <X size={32} />
            </button>
            <h2 className="text-3xl font-bold mb-8">What are you looking for?</h2>
            <form onSubmit={handleSearchSubmit} className="w-full max-w-2xl px-4">
                <div className="relative border-b-2 border-black">
                    <input 
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search products..."
                        className="w-full text-2xl py-4 bg-transparent outline-none placeholder-gray-300"
                        autoFocus
                    />
                    <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2">
                        <Search size={24} />
                    </button>
                </div>
            </form>
            <div className="mt-12 text-center">
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">Popular Searches</p>
                <div className="flex flex-wrap justify-center gap-4">
                    {['Gold Mixer', 'Rain Shower', 'Kitchen Sink', 'Accessories'].map(term => (
                        <button key={term} onClick={() => setSearchQuery(term)} className="text-lg hover:text-tkm-teal underline decoration-gray-300 underline-offset-4">{term}</button>
                    ))}
                </div>
            </div>
        </div>
    )}

    {/* Mobile/Tablet Menu */}
    <div className={`fixed inset-0 z-50 bg-white transform transition-transform duration-300 lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex justify-between items-center p-4 border-b">
        <span className="font-bold text-lg tracking-widest">MENU</span>
        <button onClick={() => setIsMenuOpen(false)}><X size={24} /></button>
      </div>
      <div className="p-4 flex flex-col text-lg font-medium overflow-y-auto h-[calc(100vh-64px)]">
        <button onClick={() => onNavigate('home')} className="text-left py-4 border-b hover:text-tkm-teal">Home</button>
        
        {/* Bathroom Mobile Submenu */}
        <div className="border-b">
            <button 
                onClick={() => toggleMobileSubmenu('bathroom')} 
                className="w-full flex justify-between items-center py-4 hover:text-tkm-teal"
            >
                Bathroom 
                <ChevronRight size={16} className={`transform transition-transform ${mobileSubmenu === 'bathroom' ? 'rotate-90' : ''}`} />
            </button>
            {mobileSubmenu === 'bathroom' && (
                <div className="bg-gray-50 px-4 pb-2 animate-fade-in">
                    <button onClick={() => handleLandingClick('bath-landing')} className="block w-full text-left py-3 text-sm text-black font-bold uppercase border-b border-gray-200 bg-gray-100 pl-4">Explore Bath World</button>
                    <button onClick={() => handleNavClick('bathroom-faucets-imported')} className="block w-full text-left py-3 text-sm text-gray-600 border-b border-gray-200">Faucets (Imported)</button>
                    <button onClick={() => handleNavClick('bathroom-wall-mounted-showers-imported')} className="block w-full text-left py-3 text-sm text-gray-600 border-b border-gray-200">Wall Showers</button>
                    <button onClick={() => handleNavClick('bathroom-hand-showers-imported')} className="block w-full text-left py-3 text-sm text-gray-600">Hand Showers</button>
                </div>
            )}
        </div>

        {/* Kitchen Mobile Submenu */}
        <div className="border-b">
            <button 
                onClick={() => toggleMobileSubmenu('kitchen')} 
                className="w-full flex justify-between items-center py-4 hover:text-tkm-teal"
            >
                Kitchen
                <ChevronRight size={16} className={`transform transition-transform ${mobileSubmenu === 'kitchen' ? 'rotate-90' : ''}`} />
            </button>
            {mobileSubmenu === 'kitchen' && (
                <div className="bg-gray-50 px-4 pb-2 animate-fade-in">
                    <button onClick={() => handleLandingClick('kitchen-landing')} className="block w-full text-left py-3 text-sm text-black font-bold uppercase border-b border-gray-200 bg-gray-100 pl-4">Explore Kitchen World</button>
                    <button onClick={() => handleNavClick('kitchen-faucets-imported')} className="block w-full text-left py-3 text-sm text-gray-600 border-b border-gray-200">Kitchen Faucets</button>
                    <button onClick={() => handleNavClick('kitchen-sinks')} className="block w-full text-left py-3 text-sm text-gray-600 border-b border-gray-200">Kitchen Sinks</button>
                    <button onClick={() => handleNavClick('kitchen-sink-organisers')} className="block w-full text-left py-3 text-sm text-gray-600 border-b border-gray-200">Sink Organisers</button>
                    <button onClick={() => handleNavClick('kitchen-accessories')} className="block w-full text-left py-3 text-sm text-gray-600">Accessories</button>
                </div>
            )}
        </div>

        <button onClick={() => handleNavClick('featured-products')} className="text-left py-4 border-b hover:text-tkm-teal">Featured</button>
        <button onClick={() => { onNavigate('complaint'); setIsMenuOpen(false); }} className="text-left py-4 border-b hover:text-tkm-teal">Support</button>
      </div>
    </div>
    </>
  );
};