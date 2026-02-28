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
    <section className="py-12 md:py-20 bg-white">
      <div className="px-6 md:px-12">
        <div className="text-center mb-10">
          <span className="text-tkm-teal text-xs uppercase tracking-[0.2em] font-semibold">Reviews</span>
          <h2 className="font-display text-3xl md:text-4xl text-tkm-black mt-2 mb-3">
            Trusted by Homeowners Across Pakistan
          </h2>
          <div className="w-12 h-[2px] bg-tkm-brass mx-auto" />
        </div>
      </div>

      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <ReviewsCarousel>
          {reviews.map((review, index) => (
            <div key={index} className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%]">
              <div className="h-[260px] bg-white border border-gray-100 rounded-xl p-6 flex flex-col justify-between shadow-sm border-l-4 border-l-tkm-teal mx-2">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-tkm-teal/10 flex items-center justify-center text-tkm-teal font-bold text-sm">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-tkm-black">{review.name}</p>
                      <p className="text-xs text-tkm-body">{review.city}</p>
                    </div>
                  </div>
                  <div className="text-sm tracking-wide text-tkm-brass mb-3">★★★★★</div>
                  <p className="text-tkm-body text-sm leading-relaxed line-clamp-4">"{review.text}"</p>
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
