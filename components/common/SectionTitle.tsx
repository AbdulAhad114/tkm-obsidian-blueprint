import React from 'react';

interface SectionTitleProps {
  title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="flex justify-center my-8 md:my-12">
      <h2 className="bg-black text-white text-xl md:text-2xl font-bold uppercase py-3 px-8 tracking-wider text-center">
        {title}
      </h2>
    </div>
  );
};