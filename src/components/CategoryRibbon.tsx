import React from 'react';
import { Sparkles as Beans, Zap as Laser, Layers as Strips, Star as BarIcon, Star as Cream, Star as Pops, Gift, Star as Accessories, Shield, ShoppingBag as ShopAll } from 'lucide-react';

interface RibbonItem { label: string; icon: React.ReactNode; href?: string; }

const items: RibbonItem[] = [
  { label: 'Hard Wax\nBeans', icon: <Beans size={30} strokeWidth={1.75} /> },
  { label: 'IPL Laser', icon: <Laser size={30} strokeWidth={1.75} /> },
  { label: 'Strips', icon: <Strips size={30} strokeWidth={1.75} /> },
  { label: 'Chocolate\nBars', icon: <BarIcon size={30} strokeWidth={1.75} /> },
  { label: 'Hair Removal\nCreams', icon: <Cream size={30} strokeWidth={1.75} /> },
  { label: 'Wax Pops', icon: <Pops size={30} strokeWidth={1.75} /> },
  { label: 'Bundles & Gift\nCards', icon: <Gift size={30} strokeWidth={1.75} /> },
  { label: 'Accessories', icon: <Accessories size={30} strokeWidth={1.75} /> },
  { label: 'Pro Sizes /\nWholesale', icon: <Shield size={30} strokeWidth={1.75} /> },
  { label: 'Shop All /\nSales', icon: <ShopAll size={30} strokeWidth={1.75} /> },
];

const CategoryRibbon: React.FC = () => {
  return (
    // Floating ribbon positioned below the header with tight spacing
    <div className="sticky left-0 right-0 top-[90px] sm:top-[90px] lg:top-[90px] z-40">
      <div className="mx-auto w-[96%] sm:w-[95%] md:w-[94%] lg:w-[92%] max-w-[1280px]">
        {/* Outer container border with rounded corners; inner row has vertical dividers (no double borders) */}
        <div className="rounded-3xl border bg-[#fffaf5] dark:bg-black border-black dark:border-white/30 shadow-lg overflow-hidden">
          <div className="flex lg:grid lg:grid-cols-10 items-stretch overflow-x-auto lg:overflow-visible no-scrollbar divide-x divide-black/20 dark:divide-white/30">
            {items.map((item, idx) => (
              <a key={idx} href={item.href || '#'} className="group block flex-none lg:flex-initial">
                <div className="w-[128px] sm:w-[136px] md:w-[144px] lg:w-auto h-[128px] bg-[#fffefd] dark:bg-black flex flex-col items-center justify-center text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  <div>{item.icon}</div>
                  <div className="mt-2.5 text-center leading-tight text-[11px] sm:text-xs whitespace-pre-line font-bold">
                    {item.label}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryRibbon;