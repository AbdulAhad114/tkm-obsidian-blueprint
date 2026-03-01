import React, { useState } from 'react';

export const NewsletterBanner: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section 
      className="py-16 md:py-24 px-6 md:px-12"
      style={{ 
        backgroundColor: '#008B9B',
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 50%)',
        backgroundSize: '20px 20px'
      }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-white text-[11px] font-medium uppercase tracking-[3px] mb-4">STAY IN THE LOOP</p>
        <h2 className="font-display text-3xl md:text-[42px] text-white font-semibold mb-3 leading-tight">
          Exclusive Offers & New Arrivals
        </h2>
        <p className="text-white/80 text-base mb-8">
          Join 10,000+ customers. No spam, ever.
        </p>

        {submitted ? (
          <p className="text-white font-semibold text-lg font-display">Thank you for subscribing! 🎉</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex max-w-[480px] mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-0 h-[50px] rounded-l text-[15px] text-tkm-navy outline-none bg-white placeholder-tkm-muted focus:ring-2 focus:ring-tkm-copper"
            />
            <button
              type="submit"
              className="bg-tkm-copper text-tkm-navy px-6 h-[50px] rounded-r text-[12px] font-bold uppercase tracking-[1.5px] hover:brightness-110 transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-white/50 text-xs mt-4">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
};