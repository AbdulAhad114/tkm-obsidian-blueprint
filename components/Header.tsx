import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Heart, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
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
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`sticky top-0 z-40 bg-white font-sans border-b border-gray-100 transition-all duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      {/* Main Nav */}
      <div className="w-full px-4 md:px-8 max-w-[1920px] mx-auto">
        <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'}`}>
          
          {/* Logo */}
          <div 
            className="flex flex-col items-start leading-none group cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="flex items-center gap-1">
              <span className="text-2xl md:text-3xl font-bold text-tkm-teal tracking-tighter">TKM</span>
            </div>
            <span className="text-[9px] md:text-[10px] font-bold text-tkm-body tracking-[0.3em] uppercase pl-0.5">TRADING</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8 xl:gap-10 text-[13px] font-semibold text-tkm-black">
            <button onClick={() => onNavigate('home')} className="hover:text-tkm-teal transition-colors py-6">Home</button>
            
            {/* Products Dropdown */}
            <div className="relative group">
              <button className="hover:text-tkm-teal transition-colors flex items-center gap-1 py-6">
                Products <ChevronDown size={14} />
              </button>
              <div className="absolute left-0 top-full w-56 bg-white shadow-xl border-t-2 border-tkm-teal opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 rounded-b-lg">
                <div className="flex flex-col py-2">
                  <button onClick={() => handleNavClick('featured-products')} className="text-left px-5 py-3 hover:bg-tkm-gray text-tkm-body hover:text-tkm-teal text-sm transition-colors">Featured Products</button>
                  <button onClick={() => handleNavClick('kitchen-faucets-imported')} className="text-left px-5 py-3 hover:bg-tkm-gray text-tkm-body hover:text-tkm-teal text-sm transition-colors">Kitchen Faucets</button>
                  <button onClick={() => handleNavClick('kitchen-sinks')} className="text-left px-5 py-3 hover:bg-tkm-gray text-tkm-body hover:text-tkm-teal text-sm transition-colors">Kitchen Sinks</button>
                  <button onClick={() => handleNavClick('bathroom-faucets-imported')} className="text-left px-5 py-3 hover:bg-tkm-gray text-tkm-body hover:text-tkm-teal text-sm transition-colors">Bathroom Faucets</button>
                  <button onClick={() => handleNavClick('bathroom-wall-mounted-showers-imported')} className="text-left px-5 py-3 hover:bg-tkm-gray text-tkm-body hover:text-tkm-teal text-sm transition-colors">Shower Systems</button>
                </div>
              </div>
            </div>

            {/* Categories Dropdown */}
            <div className="relative group">
              <button className="hover:text-tkm-teal transition-colors flex items-center gap-1 py-6">
                Categories <ChevronDown size={14} />
              </button>
              <div className="absolute left-0 top-full w-56 bg-white shadow-xl border-t-2 border-tkm-teal opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 rounded-b-lg">
                <div className="flex flex-col py-2">
                  <button onClick={() => handleLandingClick('kitchen-landing')} className="text-left px-5 py-3 hover:bg-tkm-gray text-tkm-body hover:text-tkm-teal text-sm transition-colors">Kitchen World</button>
                  <button onClick={() => handleLandingClick('bath-landing')} className="text-left px-5 py-3 hover:bg-tkm-gray text-tkm-body hover:text-tkm-teal text-sm transition-colors">Bathroom World</button>
                  <button onClick={() => handleNavClick('kitchen-accessories')} className="text-left px-5 py-3 hover:bg-tkm-gray text-tkm-body hover:text-tkm-teal text-sm transition-colors">Accessories</button>
                  <button onClick={() => handleNavClick('kitchen-sink-organisers')} className="text-left px-5 py-3 hover:bg-tkm-gray text-tkm-body hover:text-tkm-teal text-sm transition-colors">Sink Organisers</button>
                </div>
              </div>
            </div>

            <button onClick={() => onNavigate('complaint')} className="hover:text-tkm-teal transition-colors py-6">Contact</button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 md:gap-5">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="hover:text-tkm-teal transition-colors text-tkm-black"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button className="hidden md:block hover:text-tkm-teal transition-colors text-tkm-black">
              <Heart size={20} strokeWidth={1.5} />
            </button>
            <button 
              className="hover:text-tkm-teal transition-colors relative text-tkm-black"
              onClick={onOpenCart}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-tkm-teal text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            {/* Get Quote CTA */}
            <button 
              onClick={() => onNavigate('complaint')}
              className="hidden md:block bg-tkm-teal text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-tkm-hover transition-colors"
            >
              Get Quote
            </button>
            <button className="lg:hidden hover:text-tkm-teal text-tkm-black" onClick={() => setIsMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>

    {/* Search Overlay */}
    {isSearchOpen && (
      <div className="fixed inset-0 bg-white/95 z-50 flex flex-col items-center pt-32 animate-fade-in">
        <button onClick={() => setIsSearchOpen(false)} className="absolute top-8 right-8 p-2 hover:bg-tkm-gray rounded-full">
          <X size={32} />
        </button>
        <h2 className="text-3xl font-bold mb-8 text-tkm-black">What are you looking for?</h2>
        <form onSubmit={handleSearchSubmit} className="w-full max-w-2xl px-4">
          <div className="relative border-b-2 border-tkm-black">
            <input 
              type="text" value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full text-2xl py-4 bg-transparent outline-none placeholder-gray-300 text-tkm-black"
              autoFocus
            />
            <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2">
              <Search size={24} />
            </button>
          </div>
        </form>
        <div className="mt-12 text-center">
          <p className="text-tkm-body text-sm uppercase tracking-widest mb-4">Popular Searches</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Kitchen Faucet', 'Rain Shower', 'Stainless Sink', 'Basin Mixer'].map(term => (
              <button key={term} onClick={() => setSearchQuery(term)} className="text-lg hover:text-tkm-teal underline decoration-gray-300 underline-offset-4 text-tkm-black">{term}</button>
            ))}
          </div>
        </div>
      </div>
    )}

    {/* Mobile Menu - Full Screen Drawer */}
    <div className={`fixed inset-0 z-50 bg-white transform transition-transform duration-300 lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex justify-between items-center p-4 border-b">
        <span className="font-bold text-lg tracking-widest text-tkm-black">MENU</span>
        <button onClick={() => setIsMenuOpen(false)}><X size={24} /></button>
      </div>
      <div className="p-4 flex flex-col text-base font-medium overflow-y-auto h-[calc(100vh-64px)]">
        <button onClick={() => { onNavigate('home'); setIsMenuOpen(false); }} className="text-left py-4 border-b hover:text-tkm-teal text-tkm-black">Home</button>
        
        {/* Products Submenu */}
        <div className="border-b">
          <button 
            onClick={() => toggleMobileSubmenu('products')} 
            className="w-full flex justify-between items-center py-4 hover:text-tkm-teal text-tkm-black"
          >
            Products 
            <ChevronRight size={16} className={`transform transition-transform ${mobileSubmenu === 'products' ? 'rotate-90' : ''}`} />
          </button>
          {mobileSubmenu === 'products' && (
            <div className="bg-tkm-gray px-4 pb-2 rounded-lg mb-2">
              <button onClick={() => handleNavClick('featured-products')} className="block w-full text-left py-3 text-sm text-tkm-body border-b border-gray-200">Featured Products</button>
              <button onClick={() => handleNavClick('kitchen-faucets-imported')} className="block w-full text-left py-3 text-sm text-tkm-body border-b border-gray-200">Kitchen Faucets</button>
              <button onClick={() => handleNavClick('kitchen-sinks')} className="block w-full text-left py-3 text-sm text-tkm-body border-b border-gray-200">Kitchen Sinks</button>
              <button onClick={() => handleNavClick('bathroom-faucets-imported')} className="block w-full text-left py-3 text-sm text-tkm-body border-b border-gray-200">Bathroom Faucets</button>
              <button onClick={() => handleNavClick('bathroom-wall-mounted-showers-imported')} className="block w-full text-left py-3 text-sm text-tkm-body">Shower Systems</button>
            </div>
          )}
        </div>

        {/* Categories Submenu */}
        <div className="border-b">
          <button 
            onClick={() => toggleMobileSubmenu('categories')} 
            className="w-full flex justify-between items-center py-4 hover:text-tkm-teal text-tkm-black"
          >
            Categories
            <ChevronRight size={16} className={`transform transition-transform ${mobileSubmenu === 'categories' ? 'rotate-90' : ''}`} />
          </button>
          {mobileSubmenu === 'categories' && (
            <div className="bg-tkm-gray px-4 pb-2 rounded-lg mb-2">
              <button onClick={() => handleLandingClick('kitchen-landing')} className="block w-full text-left py-3 text-sm text-tkm-body border-b border-gray-200">Kitchen World</button>
              <button onClick={() => handleLandingClick('bath-landing')} className="block w-full text-left py-3 text-sm text-tkm-body border-b border-gray-200">Bathroom World</button>
              <button onClick={() => handleNavClick('kitchen-accessories')} className="block w-full text-left py-3 text-sm text-tkm-body">Accessories</button>
            </div>
          )}
        </div>

        <button onClick={() => { onNavigate('complaint'); setIsMenuOpen(false); }} className="text-left py-4 border-b hover:text-tkm-teal text-tkm-black">Contact</button>
        
        <div className="mt-6">
          <button 
            onClick={() => { onNavigate('complaint'); setIsMenuOpen(false); }}
            className="w-full bg-tkm-teal text-white py-3 rounded-md font-bold text-sm hover:bg-tkm-hover transition-colors"
          >
            Get Quote
          </button>
        </div>
      </div>
    </div>
    </>
  );
};
