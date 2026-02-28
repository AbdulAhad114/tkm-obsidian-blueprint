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
    <section className="bg-tkm-teal py-12 md:py-20 px-6 md:px-12">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl text-white font-bold mb-3">
          Get Exclusive Offers & New Arrivals
        </h2>
        <p className="text-white/80 text-sm md:text-base mb-8">
          Join 10,000+ customers and be the first to know
        </p>

        {submitted ? (
          <p className="text-white font-semibold text-lg">Thank you for subscribing! 🎉</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3 rounded-md text-sm text-tkm-black outline-none focus:ring-2 focus:ring-tkm-brass"
            />
            <button
              type="submit"
              className="bg-white text-tkm-teal px-8 py-3 rounded-md text-sm font-bold hover:bg-tkm-gray transition-colors"
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
