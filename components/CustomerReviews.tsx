import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const reviews = [
  { name: "Majid Ali", text: "Simple, stylish, and reliable. The quality is good, the finish looks clean, and everything works as expected." },
  { name: "Ayaan Arshad", text: "The design is modern, the build quality feels strong, and the finish looks premium. Installation was easy and everything works perfectly." },
  { name: "Hashir Mughal", text: "Worth buying — no delivery charges and fully recommended. Trustworthy website." },
  { name: "The Betrayed One", text: "High quality sanitary products with safe delivery and good service. Products arrived in excellent condition." },
  { name: "Majid Khan", text: "Great quality fittings with a premium feel. Customer support was responsive and helpful." },
];

const CustomerReviews: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <section className="relative overflow-hidden">
      <div className="px-6 md:px-12">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-[44px] leading-tight text-tkm-black mb-3">
            Trusted by Homeowners Across Pakistan
          </h2>
          <div className="w-12 h-[2px] bg-tkm-brass mx-auto mb-4" />
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Real experiences from customers who trust TKM Trading for premium kitchen and bathroom fittings.
          </p>
        </div>

        <div className="text-center mb-8">
          <p className="text-sm text-gray-600">
            ★★★★★ 4.9 out of 5 — based on 150+ verified Google reviews
          </p>
        </div>
      </div>

      <div className="overflow-hidden px-6 md:px-12" ref={emblaRef}>
        <div className="flex gap-4">
          {reviews.map((review, index) => (
            <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%]">
              <div className="h-[280px] bg-white border border-gray-100 rounded-xl p-8 flex flex-col justify-between shadow-sm">
                <div className="text-sm tracking-wide text-tkm-brass">★★★★★</div>
                <p className="text-tkm-black text-sm leading-relaxed">"{review.text}"</p>
                <p className="text-tkm-black text-sm font-bold">{review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
