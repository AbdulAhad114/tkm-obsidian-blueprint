import React, { useState, useEffect } from "react";
import { ViewType } from "../types";

type FaqItem = { id: number; question: string; answer: string };

const faqs: FaqItem[] = [
  { id: 1, question: "Do you offer free delivery?", answer: "Yes, we offer free delivery across all of Pakistan on every order. No minimum purchase required." },
  { id: 2, question: "What is your warranty policy?", answer: "All TKM products come with a 5-year warranty covering manufacturing defects. We stand behind the quality of every product we sell." },
  { id: 3, question: "Are your products rust-resistant?", answer: "Yes. Our faucets and fittings are made from high-grade brass and stainless steel with multi-layer finishes that resist rust, corrosion, and daily wear." },
  { id: 4, question: "How long does delivery take?", answer: "Orders are typically dispatched within 24-48 hours. Delivery takes 3-5 business days depending on your location in Pakistan." },
  { id: 5, question: "Do you offer cash on delivery?", answer: "Yes, we offer COD with a 10% advance payment to confirm serious orders. The remaining 90% is paid upon delivery." },
  { id: 6, question: "What is your refund policy?", answer: "We offer a 14-day money-back guarantee for wrong or damaged products. Please record an unboxing video as proof. Our team resolves issues within 48 working hours." },
];

interface FaqProps {
  onNavigate?: (view: ViewType) => void;
}

const FaqSection: React.FC<FaqProps> = ({ onNavigate }) => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const toggle = (id: number) => setActiveId(activeId === id ? null : id);

  // FAQ Schema JSON-LD
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer }
      }))
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <section id="faq" className="py-[60px] md:py-[100px] px-6 md:px-12 bg-tkm-light">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-[44px] leading-tight text-tkm-black mb-3">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-[2px] bg-tkm-brass mx-auto" />
        </div>

        <div className="divide-y divide-gray-200">
          {faqs.map((faq) => {
            const isOpen = activeId === faq.id;
            return (
              <div key={faq.id} className="py-6 cursor-pointer" onClick={() => toggle(faq.id)}>
                <div className="flex justify-between items-center">
                  <h3 className="text-base md:text-lg font-bold text-tkm-black pr-8 leading-snug">{faq.question}</h3>
                  <div className="relative w-5 h-5 flex-shrink-0">
                    <span className={`absolute inset-0 m-auto h-[2px] w-full bg-tkm-black transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
                    <span className={`absolute inset-0 m-auto h-[2px] w-full bg-tkm-black transition-transform duration-300 ${isOpen ? "-rotate-45" : "rotate-90"}`} />
                  </div>
                </div>
                <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 text-sm text-gray-500 text-center">
          Have more questions?{" "}
          <button onClick={() => onNavigate && onNavigate('complaint')} className="underline hover:text-tkm-teal">
            Contact our support team
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;