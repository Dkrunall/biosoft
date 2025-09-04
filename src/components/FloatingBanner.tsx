import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const IMAGES = [
  "/banner/b1.jpg",
  "/banner/b2.jpeg",
  "/banner/b3.jpg",
];

const AUTO_INTERVAL = 5000; // ms

const FloatingBanner: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => setIndex((i) => (i + 1) % IMAGES.length);
  const prev = () => setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  const goTo = (i: number) => setIndex(i);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length);
    }, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div className="mt-6 z-30">
      <div
        className="mx-auto w-[96%] sm:w-[95%] md:w-[94%] lg:w-[92%] max-w-[1280px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="rounded-3xl border bg-white text-black dark:bg-black dark:text-white border-black shadow-lg dark:border-white/20 overflow-hidden">
          <div className="relative h-[280px] sm:h-[360px] md:h-[420px] lg:h-[520px]">
            {/* Slides */}
            <div
              className="flex h-full w-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {IMAGES.map((src, i) => (
                <div key={i} className="w-full h-full shrink-0">
                  <img src={src} alt={`Banner ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Left / Right controls */}
            <button
              aria-label="Previous slide"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white/90 text-black dark:bg-dark-800/80 dark:text-white dark:border-white/20 border-black/50 shadow hover:scale-105 active:scale-95 transition"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              aria-label="Next slide"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white/90 text-black dark:bg-dark-800/80 dark:text-white dark:border-white/20 border-black/50 shadow hover:scale-105 active:scale-95 transition"
            >
              <ChevronRight size={18} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full border transition-all ${
                    index === i
                      ? "scale-110 bg-black dark:bg-white border-black dark:border-white"
                      : "bg-black/30 dark:bg-white/30 border-black/30 dark:border-white/30 hover:bg-black/50 dark:hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingBanner;