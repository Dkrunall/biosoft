import React from "react";

interface InfiniteTextScrollerProps {
  speedSeconds?: number; // time to complete one full cycle
  direction?: "left" | "right" | "up" | "down";
  className?: string;
}

const Segment: React.FC = () => {
  return (
    <div className="flex items-center gap-5 px-8 py-1 whitespace-nowrap">
      <span className="text-[28px] sm:text-[32px] md:text-[36px] font-extrabold tracking-tight leading-none text-[#1b2655] uppercase">
        Free Shipping
      </span>
      <span className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold tracking-wider uppercase text-[#1b2655]/90 bg-white/35 rounded-full px-3 py-1 border border-black/20">
        Over $25
      </span>
    </div>
  );
};

const InfiniteTextScroller: React.FC<InfiniteTextScrollerProps> = ({
  speedSeconds = 32,
  direction = "left",
  className = "",
}) => {
  const isVertical = direction === "up" || direction === "down";
  const animationDirection = direction === "right" || direction === "down" ? "reverse" : "normal";

  // Single horizontal row made seamless by duplicating the same track
  const repeats = 14;
  const segments = Array.from({ length: repeats }).map((_, i) => <Segment key={i} />);

  const styleVars = {
    ["--duration" as string]: `${speedSeconds}s`,
    ["--direction" as string]: animationDirection,
  } as React.CSSProperties;

  return (
    <div className={`mt-6 ${className}`}>
      <div className="mx-auto w-[96%] sm:w-[95%] md:w-[94%] lg:w-[92%] max-w-[1280px]">
        {/* Match header rounding (rounded-2xl) and keep consistent border/shadow */}
        <div className="rounded-2xl border border-black dark:border-white/20 shadow-lg overflow-hidden">
          {/* Fixed-height colored strip with centered content for readability */}
          <div className="bg-[linear-gradient(90deg,#ff7ab8,#ff94c6,#c084fc)] h-[56px] sm:h-[64px] md:h-[72px] flex items-center">
            <div className={`${isVertical ? "marquee marquee-y" : "marquee marquee-x"} h-full`} style={styleVars}>
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
    </div>
  );
};

export default InfiniteTextScroller;