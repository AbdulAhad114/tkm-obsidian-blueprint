import React from 'react';

const messages = [
  '🚚 Free Delivery on Orders Over PKR 5,000',
  '✅ 100% Genuine Imported Fittings',
  '🔧 Expert Installation Support',
  '📞 WhatsApp Support — Instant Reply',
  '🏆 Trusted by 3,000+ Pakistani Homeowners',
  '📦 Karachi · Lahore · Islamabad · Faisalabad',
];

const separator = ' ◆ ';

export const AnnouncementBar: React.FC = () => {
  const fullText = messages.join(separator) + separator;

  return (
    <div className="bg-tkm-navy h-[44px] flex items-center overflow-hidden relative">
      <div 
        className="marquee-track flex whitespace-nowrap animate-marquee"
        style={{ width: 'max-content' }}
      >
        {[0, 1].map(copy => (
          <span key={copy} className="inline-flex items-center">
            {messages.map((msg, i) => (
              <span key={`${copy}-${i}`} className="inline-flex items-center">
                <span className="text-white text-xs font-medium tracking-wide">{msg}</span>
                <span className="text-tkm-copper mx-4 text-xs">◆</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
};