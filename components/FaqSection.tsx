import React, { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import { ViewType } from "../types";

type FaqItem = { id: number; question: string; answer: string };

const faqs: FaqItem[] = [
  { id: 1, question: "Are your products genuinely imported?", answer: "Yes, all our products are directly imported from verified manufacturers. Every item undergoes quality inspection before being shipped to you." },
  { id: 2, question: "Do you deliver to all cities in Pakistan?", answer: "Absolutely! We offer free nationwide delivery across all major cities including Karachi, Lahore, Islamabad, Faisalabad, and 50+ more cities." },
  { id: 3, question: "What warranty do products come with?", answer: "All TKM products come with a 5-year warranty covering manufacturing defects. We stand behind the quality of every product we sell." },
  { id: 4, question: "How do I return a damaged product?", answer: "We offer a 14-day money-back guarantee for wrong or damaged products. Please record an unboxing video as proof. Our team resolves issues within 48 working hours." },
  { id: 5, question: "Is bulk/contractor pricing available?", answer: "Yes! We offer special discounted rates for bulk orders and contractors. Contact us via WhatsApp or email for a custom quotation." },
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
    <section id="faq" className="py-16 md:py-24 px-6 md:px-12 bg-white">
      <div className="w-full max-w-[720px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-tkm-teal text-white text-[11px] font-medium uppercase tracking-[3px] px-4 py-1.5 rounded-sm mb-4">FAQ</span>
          <h2 className="font-display text-3xl md:text-[42px] text-tkm-navy leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-0">
          {faqs.map((faq) => {
            const isOpen = activeId === faq.id;
            return (
              <div 
                key={faq.id} 
                className={`border-b border-tkm-divider transition-all duration-300 ${isOpen ? 'border-l-[3px] border-l-tkm-teal bg-tkm-cream' : 'border-l-[3px] border-l-transparent'}`}
              >
                <button 
                  className="w-full flex justify-between items-center py-5 px-4 text-left"
                  onClick={() => toggle(faq.id)}
                >
                  <h3 className={`text-base font-medium pr-4 transition-colors ${isOpen ? 'text-tkm-teal' : 'text-tkm-navy'}`}>{faq.question}</h3>
                  {isOpen ? (
                    <Minus size={18} className="text-tkm-copper flex-shrink-0" />
                  ) : (
                    <Plus size={18} className="text-tkm-copper flex-shrink-0" />
                  )}
                </button>
                <div 
                  className="overflow-hidden transition-all duration-300"
                  style={{ 
                    maxHeight: isOpen ? '200px' : '0',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="text-[15px] text-tkm-body leading-[1.7] px-4 pb-5">{faq.answer}</p>
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