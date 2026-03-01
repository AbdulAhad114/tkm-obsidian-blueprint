import React from "react";
import ReviewsCarousel from "../components/ReviewsCarousel";

const reviews = [
  { name: "Ahmed R.", city: "Lahore", text: "The kitchen faucet quality exceeded my expectations. Great finish and solid build. Very happy with my purchase!" },
  { name: "Sara K.", city: "Karachi", text: "Ordered a rain shower system — it was delivered quickly and installation was smooth. Premium quality at a great price." },
  { name: "Majid Ali", city: "Islamabad", text: "Simple, stylish, and reliable. The quality is good, the finish looks clean, and everything works as expected." },
  { name: "Ayesha M.", city: "Faisalabad", text: "The design is modern, the build quality feels strong, and the finish looks premium. Installation was easy and everything works perfectly." },
  { name: "Hashir Mughal", city: "Rawalpindi", text: "Worth buying — no delivery charges and fully recommended. Trustworthy website with fast shipping." },
];

const CustomerReviews: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-tkm-cream">
      <div className="px-6 md:px-12">
        <div className="text-center mb-12">
          <span className="inline-block bg-tkm-teal text-white text-[11px] font-medium uppercase tracking-[3px] px-4 py-1.5 rounded-sm mb-4">REVIEWS</span>
          <h2 className="font-display text-3xl md:text-[42px] text-tkm-navy leading-tight">
            Trusted Across Pakistan
          </h2>
        </div>
      </div>

      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <ReviewsCarousel>
          {reviews.map((review, index) => (
            <div key={index} className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%]">
              <div className="h-[280px] bg-white rounded-lg p-7 flex flex-col justify-between border-l-[3px] border-l-tkm-copper mx-2 relative" style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.07)' }}>
                {/* Decorative quote */}
                <span className="absolute top-4 left-6 font-display text-[64px] text-tkm-copper/25 leading-none select-none">"</span>
                
                <div className="pt-10">
                  <p className="font-display italic text-tkm-navy text-base leading-[1.7] line-clamp-4">"{review.text}"</p>
                </div>
                
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-10 h-10 rounded-full bg-tkm-navy/10 flex items-center justify-center text-tkm-navy font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-tkm-navy">{review.name}</p>
                    <p className="text-[13px] text-tkm-copper">{review.city}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ReviewsCarousel>
      </div>
    </section>
  );
};

export default CustomerReviews;