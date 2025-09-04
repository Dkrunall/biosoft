import React from "react";

interface AccessoriesTextSliderProps {
  speedSeconds?: number; // time to complete one full cycle
  direction?: "left" | "right";
  className?: string;
}

const CATEGORIES = [
  "Hard Wax Beans",
  "Waxing Tools",
  "Hair Removal Cream",
];

const Segment: React.FC = () => {
  return (
    <div className="flex items-center gap-12 px-8 py-2 whitespace-nowrap">
      {CATEGORIES.map((label, i) => (
        <span
          key={`${label}-${i}`}
          className="text-[28px] sm:text-[32px] md:text-[36px] font-extrabold tracking-tight leading-none text-white"
        >
          {label}
        </span>
      ))}
    </div>
  );
};

const AccessoriesTextSlider: React.FC<AccessoriesTextSliderProps> = ({
  speedSeconds = 48,
  direction = "left",
  className = "",
}) => {
  const animationDirection = direction === "right" ? "reverse" : "normal";

  // Build enough repeated segments so the loop is seamless
  const repeats = 12;
  const segments = Array.from({ length: repeats }).map((_, i) => <Segment key={i} />);

  const styleVars = {
    ["--duration" as string]: `${speedSeconds}s`,
    ["--direction" as string]: animationDirection,
  } as React.CSSProperties;

  return (
    <div className={`mt-6 ${className}`}>
      <div className="mx-auto w-[96%] sm:w-[95%] md:w-[94%] lg:w-[92%] max-w-[1280px]">
        <div className="rounded-3xl border border-black dark:border-white/20 shadow-lg overflow-hidden">
          <div className="bg-[#8d9a35] h-[56px] sm:h-[64px] md:h-[72px] flex items-center">
            <div className={`marquee marquee-x h-full`} style={styleVars}>
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

export default AccessoriesTextSlider;