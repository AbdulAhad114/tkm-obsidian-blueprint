import React from 'react';

interface InnovationProps {
    title: string;
    description: string;
    image: string;
    align: 'left' | 'right';
    subtitle?: string;
    features?: string[];
}

export const InnovationSection: React.FC<InnovationProps> = ({ title, description, image, align, subtitle, features }) => {
  return (
    <div className="flex flex-col md:flex-row items-center w-full mb-8 bg-gray-50">
        {/* Image Side */}
        <div className={`w-full md:w-1/2 h-[400px] md:h-[600px] overflow-hidden ${align === 'right' ? 'md:order-2' : 'md:order-1'}`}>
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
        </div>

        {/* Text Side */}
        <div className={`w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center ${align === 'right' ? 'md:order-1' : 'md:order-2'}`}>
            {subtitle && (
                <span className="text-tkm-teal font-bold tracking-widest uppercase text-xs mb-3 block">{subtitle}</span>
            )}
            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">{title}</h3>
            <div className="w-16 h-1 bg-tkm-teal mb-6"></div>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                {description}
            </p>
            {features && (
                <ul className="space-y-3">
                    {features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                             <span className="w-2 h-2 bg-black rounded-full"></span> {f}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    </div>
  );
};