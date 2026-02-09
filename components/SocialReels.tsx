import { Instagram } from 'lucide-react';
import React from 'react';

const SocialReels: React.FC = () => {
  const videos = [
    "https://tkmtradingshop.com/cdn/shop/videos/c/vp/a911ff62aa4f4b01b8618e7c029b0e37/a911ff62aa4f4b01b8618e7c029b0e37.HD-1080p-2.5Mbps-45480565.mp4?v=0",
    "https://tkmtradingshop.com/cdn/shop/videos/c/vp/9bba231752f142b1bcf6fd6c9d08c5e2/9bba231752f142b1bcf6fd6c9d08c5e2.HD-1080p-2.5Mbps-45480374.mp4?v=0",
    "https://tkmtradingshop.com/cdn/shop/videos/c/vp/9787fa0c3f8942778ed8abcf567e482e/9787fa0c3f8942778ed8abcf567e482e.HD-1080p-2.5Mbps-45480335.mp4?v=0",
    "https://tkmtradingshop.com/cdn/shop/videos/c/vp/4963aa93ae144271ba4812c457ce4dba/4963aa93ae144271ba4812c457ce4dba.HD-1080p-2.5Mbps-45480553.mp4?v=0"
  ];

  return (
    <section className="py-16 bg-white border-t border-stone-100">
      <div className="w-full px-2 md:px-6">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-xl font-light mb-2 flex items-center gap-2">
            <Instagram size={24} /> @TKMTRADINGSHOP
          </h2>
          <p className="text-xs font-bold tracking-widest uppercase text-gray-500">
            Follow us on Instagram
          </p>
        </div>
      </div>

      <div className="w-full overflow-x-auto snap-x snap-mandatory px-4 md:px-6 lg:overflow-visible" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
        <div className="flex gap-4 w-max lg:w-auto lg:justify-center lg:mx-auto">
          {videos.map((videoUrl, idx) => (
            <div
              key={idx}
              className="w-[80vw] sm:w-[45vw] lg:w-[280px] flex-shrink-0 snap-center aspect-[9/16] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow relative group bg-black"
            >
              <video
                src={videoUrl}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialReels;
