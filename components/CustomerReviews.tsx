import React from "react";
import ReviewsCarousel from "../components/ReviewsCarousel";


const reviews = [
  {
    name: "Majid Ali",
    text:
      "Simple, stylish, and reliable. The quality is good, the finish looks clean, and everything works as expected.",
  },
  {
    name: "Ayaan Arshad",
    text:
      "The design is modern, the build quality feels strong, and the finish looks premium. Installation was easy and everything works perfectly.",
  },
  {
    name: "Hashir Mughal",
    text:
      "Worth buying — no delivery charges and fully recommended. Trustworthy website.",
  },
  {
    name: "The Betrayed One",
    text:
      "High quality sanitary products with safe delivery and good service. Products arrived in excellent condition.",
  },
  {
    name: "Majid Khan",
    text:
      "Great quality fittings with a premium feel. Customer support was responsive and helpful.",
  },
];

/* =======================
   COMPONENT
======================= */

const CustomerReviews: React.FC = () => {
  return (
    <section className="relative border-t border-b border-gray-200 py-16 overflow-hidden">
      {/* HEADER */}
      <div className="px-12">
        <p className="text-xs tracking-widest uppercase text-stone-500 mb-4">
          Customer Reviews
        </p>

        <h2 className="text-4xl md:text-5xl font-normal text-stone-900">
          What our customers say
        </h2>

        <p className="mt-3 text-stone-600 max-w-2xl">
          Real experiences from customers who trust TKM Trading Co. for premium
          kitchen and bathroom fittings across Pakistan.
        </p>

        {/* RATING + CTA */}
        <div className="flex items-end justify-between mt-6">
          <p className="text-sm text-stone-600">
            ★★★★★ 4.9 out of 5 — based on 150+ verified Google reviews
          </p>

          <a
            href="/collections/all"
            className="
              bg-[#00838F]
              text-white
              px-6
              py-3
              text-xs
              font-bold
              uppercase
              tracking-widest
              rounded-sm
              hover:bg-[#006e78]
              transition-colors
            "
          >
            View All Products
          </a>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="mt-10 px-12">
      <ReviewsCarousel>
  {reviews.map((review, index) => (
    <div
      key={index}
      className="min-w-full sm:min-w-[50%] lg:min-w-[25%]"
    >
      <div
        className="
          h-[300px]
          bg-white
          border border-gray-200
          rounded-xl
          p-12
          pl-8
          flex
          flex-col
          justify-between
        "
      >
        <div className="text-sm tracking-wide">
          ★★★★★
        </div>

        <p className="text-black text-base leading-relaxed">
          “{review.text}”
        </p>

        <p className="text-black text-sm font-medium">
          {review.name}
        </p>
      </div>
    </div>
  ))}
</ReviewsCarousel>

      </div>
    </section>
  );
};

export default CustomerReviews;
