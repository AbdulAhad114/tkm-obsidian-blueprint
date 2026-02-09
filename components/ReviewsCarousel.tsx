import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import React from "react";

type ReviewsCarouselProps = {
  children: React.ReactNode;
};

export default function ReviewsCarousel({ children }: ReviewsCarouselProps) {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: false,
  });

  // STEP 4: control arrow disabled state
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateButtons = useCallback(() => {
    if (!embla) return;
    setCanScrollPrev(embla.canScrollPrev());
    setCanScrollNext(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;

    updateButtons();
    embla.on("select", updateButtons);
    embla.on("reInit", updateButtons);

    return () => {
      embla.off("select", updateButtons);
      embla.off("reInit", updateButtons);
    };
  }, [embla, updateButtons]);

  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  return (
    <div className="relative">
      {/* VIEWPORT */}
      <div ref={emblaRef} className="overflow-hidden">
        {/* TRACK */}
        <div className="flex gap-6">
          {children}
        </div>
      </div>

      {/* PREVIOUS BUTTON */}
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Previous reviews"
        className="
          absolute left-0 top-1/2 -translate-y-1/2 z-10
          rounded-full bg-white p-2 shadow
          disabled:opacity-30 disabled:cursor-not-allowed
        "
      >
        ‹
      </button>

      {/* NEXT BUTTON */}
      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Next reviews"
        className="
          absolute right-0 top-1/2 -translate-y-1/2 z-10
          rounded-full bg-white p-2 shadow
          disabled:opacity-30 disabled:cursor-not-allowed
        "
      >
        ›
      </button>
    </div>
  );
}
