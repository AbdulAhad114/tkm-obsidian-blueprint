import React, { useEffect, useState, useRef } from "react";

export const ScrollFadeIn: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`
        transition-opacity transition-transform duration-700
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        py-16 px-4 md:px-12 text-center border-b border-gray-200 bg-white
      `}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-stone-900">
        Pakistan's Fastest Growing Sanitary Fitting Brand
      </h2>

      <p className="text-lg md:text-xl text-stone-800 leading-relaxed mx-auto max-w-5xl">
        TKM Trading Shop offers the largest range of bathroom and kitchen sanitary & accessory products with a remarkable customer experience and quality. We specialize in importing premium kitchen and bathroom fittings directly from China, ensuring top-tier designs and durability for modern Pakistani homes. With free delivery all across Pakistan, we are committed to elevating your living spaces.
      </p>
    </section>
  );
};
