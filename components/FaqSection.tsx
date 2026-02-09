import React, { useState } from "react";
import { ViewType } from "../types";

/* =======================
   Types
======================= */

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

/* =======================
   FAQ DATA
======================= */

const faqs: FaqItem[] = [
  {
    id: 1,
    question:
      "Why do we charge 10% upfront & 90% cash on delivery before order dispatching?",
    answer:
      "Because we sell imported and premium category kitchen & bathroom sanitary fitting products in Pakistan. We only look forward to working with customers who are serious about their purchase. Our customers can also visit our warehouse in Gujranwala.",
  },
  {
    id: 2,
    question: "Do you offer free shipping?",
    answer: "Yes, we offer free shipping all across Pakistan.",
  },
  {
    id: 3,
    question: "What is your refund policy?",
    answer:
      "We offer a 14 days money-back guarantee in case our customer receives a wrong or damaged product. We ask our customers to record a short unboxing video after receiving their order and keep it as proof. If you receive a wrong or damaged product, you can share the video with our customer support. We will resolve your issue within the next 48 working hours.",
  },
];

/* =======================
   Component
======================= */

interface FaqProps {
    onNavigate?: (view: ViewType) => void;
}

const FaqSection: React.FC<FaqProps> = ({ onNavigate }) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 px-6 md:px-12 bg-stone-50 bg-[#fafaf9]">
      <div className="w-full max-w-[1920px] mx-auto">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-stone-900 text-gray-900">
            <span className="text-black">Frequently Asked Questions</span>{" "}
          </h2>
        </div>

        {/* FAQ List */}
        <div className="divide-y divide-stone-200 divide-gray-200">
          {faqs.map((faq) => {
            const isOpen = activeId === faq.id;

            return (
              <div
                key={faq.id}
                className="py-8 cursor-pointer"
                onClick={() => toggle(faq.id)}
              >
                {/* Question */}
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-xl font-bold text-stone-900 text-gray-900 pr-8 leading-snug">
                    {faq.question}
                  </h3>

                  {/* Plus / Minus Icon */}
                  <div className="relative w-6 h-6 flex-shrink-0">
                    <span
                      className={`absolute inset-0 m-auto h-[2px] w-full bg-stone-900 bg-gray-900 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                    <span
                      className={`absolute inset-0 m-auto h-[2px] w-full bg-stone-900 bg-gray-900 transition-transform duration-300 ${
                        isOpen ? "-rotate-45" : "rotate-90"
                      }`}
                    />
                  </div>
                </div>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-6"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-base text-stone-600 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-4 text-sm text-stone-600 text-gray-600 max-w-3xl">
          Didn’t find an answer to your question? You can always check our list of
          essential information{" "}
          <button onClick={() => onNavigate && onNavigate('complaint')} className="underline hover:text-stone-900 hover:text-black">
            here
          </button>{" "}
          or contact our support team at{" "}
          <a
            href="mailto:support@tkmtrading.com"
            className="underline hover:text-stone-900 hover:text-black"
          >
            support@tkmtrading.com
          </a>
          .
        </div>
      </div>
    </section>
  );
};

export default FaqSection;