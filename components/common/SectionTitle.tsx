import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-10 md:mb-14">
      <h2 className="font-display text-3xl md:text-[40px] leading-tight text-tkm-black mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">{subtitle}</p>
      )}
      <div className="w-12 h-[2px] bg-tkm-brass mx-auto mt-4" />
    </div>
  );
};