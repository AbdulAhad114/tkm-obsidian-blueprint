import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  label?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, label }) => {
  return (
    <div className="text-center mb-10 md:mb-12">
      {label && (
        <span className="text-tkm-teal text-xs uppercase tracking-[0.2em] font-semibold">{label}</span>
      )}
      <h2 className="font-display text-3xl md:text-4xl text-tkm-black mt-2 mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-tkm-body max-w-xl mx-auto leading-relaxed">{subtitle}</p>
      )}
      <div className="w-12 h-[2px] bg-tkm-brass mx-auto mt-4" />
    </div>
  );
};
