import React from 'react';
import { SectionTitle } from './common/SectionTitle';
import { ViewType } from '../types';

interface ShopByAreaProps {
  onNavigate?: (view: ViewType, id?: string) => void;
}

const BathroomFaucetIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 md:w-20 md:h-20">
    <path d="M40 12 C40 12 40 35 40 35" strokeLinecap="round"/>
    <path d="M30 35 L50 35" strokeLinecap="round"/>
    <path d="M50 35 C55 35 58 38 58 43 L58 48" strokeLinecap="round"/>
    <ellipse cx="40" cy="60" rx="18" ry="8" />
    <path d="M22 60 L22 55 C22 50 28 46 40 46 C52 46 58 50 58 55 L58 60" />
    <circle cx="40" cy="18" r="3" fill="currentColor" className="text-tkm-teal" stroke="none"/>
  </svg>
);

const WallShowerIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 md:w-20 md:h-20">
    <rect x="30" y="8" width="20" height="8" rx="2"/>
    <path d="M40 16 L40 28"/>
    <circle cx="40" cy="32" r="12"/>
    <line x1="34" y1="44" x2="34" y2="52" className="text-tkm-teal" strokeLinecap="round"/>
    <line x1="40" y1="44" x2="40" y2="55" className="text-tkm-teal" strokeLinecap="round"/>
    <line x1="46" y1="44" x2="46" y2="52" className="text-tkm-teal" strokeLinecap="round"/>
    <line x1="37" y1="44" x2="37" y2="50" className="text-tkm-teal" strokeLinecap="round"/>
    <line x1="43" y1="44" x2="43" y2="50" className="text-tkm-teal" strokeLinecap="round"/>
    <line x1="31" y1="44" x2="31" y2="48" className="text-tkm-teal" strokeLinecap="round"/>
    <line x1="49" y1="44" x2="49" y2="48" className="text-tkm-teal" strokeLinecap="round"/>
  </svg>
);

const HandShowerIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 md:w-20 md:h-20">
    <ellipse cx="40" cy="14" rx="8" ry="5"/>
    <line x1="36" y1="19" x2="36" y2="24" className="text-tkm-teal" strokeLinecap="round"/>
    <line x1="40" y1="19" x2="40" y2="26" className="text-tkm-teal" strokeLinecap="round"/>
    <line x1="44" y1="19" x2="44" y2="24" className="text-tkm-teal" strokeLinecap="round"/>
    <path d="M40 9 L40 5 C40 3 42 3 42 5 L42 30 C42 34 38 34 38 30 L38 20"/>
    <path d="M42 30 C42 40 44 50 40 65" strokeLinecap="round"/>
    <path d="M40 65 C38 68 36 68 36 65 C36 60 38 55 38 50" strokeLinecap="round"/>
  </svg>
);

const KitchenFaucetIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 md:w-20 md:h-20">
    <path d="M25 60 L55 60" strokeLinecap="round"/>
    <path d="M28 60 L28 45 C28 40 32 38 36 38 L36 20"/>
    <path d="M36 20 C36 16 40 14 44 16" strokeLinecap="round"/>
    <path d="M44 16 L44 38 C48 38 52 40 52 45 L52 60"/>
    <circle cx="36" cy="16" r="2" fill="currentColor" className="text-tkm-teal" stroke="none"/>
    <path d="M44 42 L44 50" className="text-tkm-teal" strokeLinecap="round" strokeDasharray="2 3"/>
    <path d="M20 60 L20 68 L60 68 L60 60"/>
  </svg>
);

const KitchenSinkIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 md:w-20 md:h-20">
    <rect x="12" y="24" width="56" height="32" rx="4"/>
    <line x1="40" y1="24" x2="40" y2="56"/>
    <circle cx="28" cy="48" r="3" className="text-tkm-teal"/>
    <circle cx="52" cy="48" r="3" className="text-tkm-teal"/>
    <path d="M12 56 L8 68 L72 68 L68 56"/>
    <path d="M35 16 L35 24" strokeLinecap="round"/>
    <path d="M35 16 L50 16 L50 24" strokeLinecap="round"/>
  </svg>
);

const KitchenAccessoriesIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 md:w-20 md:h-20">
    <rect x="15" y="20" width="50" height="40" rx="3"/>
    <line x1="15" y1="35" x2="65" y2="35"/>
    <line x1="35" y1="35" x2="35" y2="60"/>
    <rect x="20" y="25" width="12" height="6" rx="1" className="text-tkm-teal"/>
    <circle cx="50" cy="28" r="3" className="text-tkm-teal"/>
    <rect x="20" y="40" width="10" height="12" rx="1"/>
    <rect x="40" y="40" width="20" height="12" rx="1"/>
    <path d="M30 16 L30 20" strokeLinecap="round"/>
    <line x1="50" y1="16" x2="50" y2="20" strokeLinecap="round"/>
  </svg>
);

const categories = [
  { title: 'Bathroom Faucets', icon: BathroomFaucetIcon, link: 'bathroom-faucets-imported' },
  { title: 'Wall Showers', icon: WallShowerIcon, link: 'bathroom-wall-mounted-showers-imported' },
  { title: 'Hand Showers', icon: HandShowerIcon, link: 'bathroom-hand-showers-imported' },
  { title: 'Kitchen Faucets', icon: KitchenFaucetIcon, link: 'kitchen-faucets-imported' },
  { title: 'Kitchen Sinks', icon: KitchenSinkIcon, link: 'kitchen-sinks' },
  { title: 'Kitchen Accessories', icon: KitchenAccessoriesIcon, link: 'kitchen-accessories' }
];

export const ShopByArea: React.FC<ShopByAreaProps> = ({ onNavigate }) => {
  const handleClick = (id: string) => {
    if (onNavigate) {
      onNavigate('collection', id);
    }
  };

  return (
    <section className="w-full px-4 md:px-6">
      <SectionTitle title="Shop By Category" />
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            onClick={() => handleClick(cat.link)}
            className="flex flex-col items-center group cursor-pointer py-6 px-2 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
          >
            <div className="text-stone-700 group-hover:text-tkm-teal transition-colors duration-300 mb-4">
              <cat.icon />
            </div>
            <h3 className="text-[11px] md:text-xs font-bold uppercase tracking-widest text-center text-stone-600 group-hover:text-tkm-teal transition-colors">
              {cat.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};
