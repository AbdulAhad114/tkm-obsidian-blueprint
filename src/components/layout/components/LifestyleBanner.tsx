import React from 'react';

export const LifestyleBanner: React.FC = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[450px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1920&q=80"
        alt="Modern Pakistani home interior"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p className="text-white/70 text-xs md:text-sm uppercase tracking-[0.3em] mb-4 font-light">
          Crafted for Elegance
        </p>
        <h2 className="text-white text-2xl md:text-5xl font-bold uppercase tracking-wider leading-tight max-w-3xl" style={{ fontFamily: "'Playfair Display', serif" }}>
          Designed for Modern Pakistani Homes
        </h2>
        <div className="w-16 h-[2px] bg-tkm-teal mt-6" />
      </div>
    </section>
  );
};
