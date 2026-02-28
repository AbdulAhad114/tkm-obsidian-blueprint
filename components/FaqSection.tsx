import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { ViewType } from "../types";

type FaqItem = { id: number; question: string; answer: string };

const faqs: FaqItem[] = [
  { id: 1, question: "Are your products genuine imported?", answer: "Yes, all our products are directly imported from verified manufacturers in China. Every item undergoes quality inspection before being shipped to you." },
  { id: 2, question: "Do you deliver across Pakistan?", answer: "Absolutely! We offer free nationwide delivery across all major cities including Karachi, Lahore, Islamabad, Faisalabad, and 50+ more cities." },
  { id: 3, question: "What warranty do you offer?", answer: "All TKM products come with a 5-year warranty covering manufacturing defects. We stand behind the quality of every product we sell." },
  { id: 4, question: "Can I return a product if it's damaged?", answer: "Yes, we offer a 14-day money-back guarantee for wrong or damaged products. Please record an unboxing video as proof. Our team resolves issues within 48 working hours." },
  { id: 5, question: "Do you offer bulk/contractor pricing?", answer: "Yes! We offer special discounted rates for bulk orders and contractors. Contact us via WhatsApp or email for a custom quotation." },
];

interface FaqProps {
  onNavigate?: (view: ViewType) => void;
}

const FaqSection: React.FC<FaqProps> = ({ onNavigate }) => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const toggle = (id: number) => setActiveId(activeId === id ? null : id);

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
    <section id="faq" className="py-12 md:py-20 px-6 md:px-12 bg-tkm-faqbg">
      <div className="w-full max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-tkm-teal text-xs uppercase tracking-[0.2em] font-semibold">FAQ</span>
          <h2 className="font-display text-3xl md:text-4xl text-tkm-black mt-2 mb-3">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-[2px] bg-tkm-brass mx-auto" />
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = activeId === faq.id;
            return (
              <div 
                key={faq.id} 
                className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-l-4 border-l-tkm-teal shadow-md' : 'border-l-4 border-l-transparent shadow-sm'}`}
              >
                <button 
                  className="w-full flex justify-between items-center p-5 text-left"
                  onClick={() => toggle(faq.id)}
                >
                  <h3 className="text-sm md:text-base font-bold text-tkm-black pr-4">{faq.question}</h3>
                  <ChevronDown 
                    size={20} 
                    className={`text-tkm-teal flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="text-sm text-tkm-body leading-relaxed px-5 pb-5">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-sm text-tkm-body text-center">
          Have more questions?{" "}
          <button onClick={() => onNavigate && onNavigate('complaint')} className="text-tkm-teal font-semibold hover:underline">
            Contact our support team
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
