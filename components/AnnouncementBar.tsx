import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const messages = [
  'Free Delivery on Orders Above PKR 5,000 | Karachi, Lahore & Islamabad',
  'Genuine Imported Fittings — Verified Quality',
  'Call us: +92 300 1234567',
];

export const AnnouncementBar: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div className="bg-tkm-teal text-white text-xs md:text-sm py-2 relative text-center font-medium tracking-wide">
      <span className="transition-opacity duration-500">{messages[current]}</span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
        aria-label="Close announcement"
      >
        <X size={14} />
      </button>
    </div>
  );
};
