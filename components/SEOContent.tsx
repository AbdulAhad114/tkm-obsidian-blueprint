import React from 'react';

export const SEOContent: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Why Choose TKM Trading Shop?</h2>
        <div className="prose prose-sm mx-auto text-gray-600 space-y-4">
            <p>
                Welcome to <strong>TKM Trading Shop</strong>, your premier destination for high-quality sanitaryware and kitchen fittings in Pakistan. 
                We specialize in bringing modern, durable, and stylish solutions to your home. From 
                <span className="text-tkm-teal"> luxury gold basin mixers</span> to innovative 
                <span className="text-tkm-teal"> stainless steel kitchen sinks</span>, our collection is curated to meet international standards.
            </p>
            <p>
                Whether you are renovating your bathroom or designing a new kitchen, our range of imported wall-mounted showers, 
                smart sink organizers, and bath accessories ensures you don't have to compromise on aesthetics or functionality. 
                Shop online with confidence and enjoy nationwide delivery across Pakistan.
            </p>
        </div>
      </div>
    </section>
  );
};