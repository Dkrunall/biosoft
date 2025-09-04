import React from "react";

interface InstagramHashtagSliderProps {
  speedSeconds?: number;
  direction?: "left" | "right";
  className?: string;
}

const HASHTAGS = [
  "#biosoft",
  "#meltoway",
  "#biosoft",
  "#meltoway",
];

const IMAGES = [
  "/favlour/f1.webp",
  "/favlour/f2.webp",
  "/favlour/f3.webp",
  "/favlour/f4.webp",
  "/favlour/f5.webp",
];

const TileRow: React.FC = () => {
  // Build an alternating sequence of photo, tag, repeating across arrays
  const pairs = 10; // 10 pairs per segment for consistent width
  const elements: React.ReactNode[] = [];
  for (let i = 0; i < pairs; i++) {
    const imgSrc = IMAGES[i % IMAGES.length];
    const tag = HASHTAGS[i % HASHTAGS.length];
    elements.push(
      <img
        key={`img-${i}`}
        src={imgSrc}
        alt=""
        className="h-[72px] sm:h-[80px] md:h-[96px] w-[72px] sm:w-[80px] md:w-[96px] rounded-xl object-cover border border-black dark:border-white/20"
        loading="lazy"
        decoding="async"
      />
    );
    elements.push(
      <div
        key={`tag-${i}`}
        className="h-[72px] sm:h-[80px] md:h-[96px] px-4 flex items-center justify-center rounded-xl bg-[#86ffcf] text-[#1b2655] border border-black dark:border-white/20"
      >
        <span className="text-[22px] sm:text-[24px] md:text-[26px] font-extrabold tracking-tight leading-none">{tag}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 px-2 sm:px-3 md:px-4 h-full">
      {elements}
    </div>
  );
};

const InstagramHashtagSlider: React.FC<InstagramHashtagSliderProps> = ({
  speedSeconds = 36,
  direction = "left",
  className = "",
}) => {
  const animationDirection = direction === "right" ? "reverse" : "normal";
  const repeats = 10;
  const segments = Array.from({ length: repeats }).map((_, i) => <TileRow key={i} />);
  const styleVars = {
    ["--duration" as string]: `${speedSeconds}s`,
    ["--direction" as string]: animationDirection,
  } as React.CSSProperties;

  return (
    <section className={`mx-auto w-[96%] sm:w-[95%] md:w-[94%] lg:w-[92%] max-w-[1280px] mt-4 sm:mt-5 md:mt-6 ${className}`}>
      <div className="rounded-3xl border border-black dark:border-white/20 shadow-lg overflow-hidden">
        <div className="bg-[#86ffcf]">
          <div className="h-[80px] sm:h-[92px] md:h-[108px] flex items-center">
            <div className="marquee marquee-x w-full h-full" style={styleVars}>
              <div className="marquee-track" aria-hidden={false}>
                {segments}
              </div>
              <div className="marquee-track" aria-hidden>
                {segments}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramHashtagSlider;