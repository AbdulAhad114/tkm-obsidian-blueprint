import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Package, HeadphonesIcon } from 'lucide-react';

const stats = [
  { number: 5000, suffix: '+', label: 'Products Sold' },
  { number: 3000, suffix: '+', label: 'Happy Customers' },
  { number: 50, suffix: '+', label: 'Cities Delivered' },
  { number: 4.8, suffix: '', label: 'Customer Rating' },
];

const features = [
  { icon: ShieldCheck, title: 'Genuine Imports', desc: 'Sourced directly from certified manufacturers' },
  { icon: Package, title: 'Quality Assured', desc: 'Every fitting tested before dispatch' },
  { icon: HeadphonesIcon, title: 'After-Sale Care', desc: 'Warranty claims and installation support' },
];

const CountUp: React.FC<{ target: number; suffix: string; started: boolean }> = ({ target, suffix, started }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!started) return;
    const isDecimal = target % 1 !== 0;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return <span>{target % 1 !== 0 ? count.toFixed(1) : count.toLocaleString()}{suffix}</span>;
};

export const WhyChooseTKM: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStarted(true); observer.disconnect(); }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-tkm-navy py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 mb-16">
          {stats.map((s, i) => (
            <div key={i} className={`text-center ${i < 3 ? 'md:border-r md:border-white/15' : ''}`}>
              <p className="font-display text-white text-4xl md:text-[56px] leading-none mb-2">
                <CountUp target={s.number} suffix={s.suffix} started={started} />
              </p>
              <div className="w-[50px] h-[2px] bg-tkm-copper mx-auto mb-3" />
              <p className="text-white/65 text-[13px] uppercase tracking-[2px]">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="border border-white/12 rounded-lg p-8 bg-white/5">
              <f.icon size={36} className="text-tkm-copper mb-5" strokeWidth={1.5} />
              <h3 className="font-display text-white text-lg mb-2">{f.title}</h3>
              <p className="text-white/65 text-sm leading-[1.7]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};