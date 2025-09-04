import React from "react";
import { BadgeCheck, Medal } from "lucide-react";

interface InfoTwoColsProps {
  className?: string;
}

const InfoTwoCols: React.FC<InfoTwoColsProps> = ({ className = "" }) => {
  return (
    <section className={`mx-auto w-[96%] sm:w-[95%] md:w-[94%] lg:w-[92%] max-w-[1280px] mt-6 md:mt-8 ${className}`}>
      <div className="rounded-3xl border border-black dark:border-white/20 shadow-lg overflow-hidden">
        <div className="bg-[#8d9a35] text-white">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left column */}
            <div className="relative p-6 sm:p-8 md:p-10 flex flex-col items-center text-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 border border-white/40 text-white mb-2">
                <BadgeCheck size={24} />
              </div>
              <h3 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px] leading-tight font-extrabold tracking-tight">
                At-home waxing has never been more affordable!
              </h3>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] opacity-90">
                Save time and money taking care of the hair at home!
              </p>
            </div>
            {/* Right column */}
            <div className="relative p-6 sm:p-8 md:p-10 flex flex-col items-center text-center gap-3 md:border-l md:border-white/30">
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/20 border border-white/40 text-white mb-2">
                <Medal size={24} />
              </div>
              <h3 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px] leading-tight font-extrabold tracking-tight">
                High-Quality Waxing Products
              </h3>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] opacity-90">
                Flexible formulas that grip every hair
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoTwoCols;