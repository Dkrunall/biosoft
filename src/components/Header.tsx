import React from 'react';
import { Menu, Search, ShoppingBag, User } from 'lucide-react';

interface HeaderProps {
  logo?: string;
  siteName?: string;
}

const Header: React.FC<HeaderProps> = ({ logo = '/logo.png', siteName = 'Biosoft' }) => {
  return (
    <header className="fixed top-3 left-0 right-0 z-50 pointer-events-none">
      {/* Floating container */}
      <div className="pointer-events-auto mx-auto w-[96%] sm:w-[95%] md:w-[94%] lg:w-[92%] max-w-[1280px] rounded-2xl border bg-[#fffaf5] text-black dark:bg-black dark:text-white border-black shadow-lg dark:border-white/20">
        <div className="px-4 sm:px-5 lg:px-6 py-3">
          <div className="flex items-center gap-3">
            {/* Left: hamburger + brand */}
            <button aria-label="Open menu" className="inline-flex h-10 w-10 items-center justify-center rounded-md border text-black hover:bg-black/5 dark:text-white dark:hover:bg-white/5 border-black/20 dark:border-white/20">
              <Menu size={20} />
            </button>
            <img src={logo} alt={siteName} className="h-7 sm:h-8 lg:h-9 w-auto block" />

            {/* Center: search */}
            <div className="flex-1 ml-1 sm:ml-2">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/60 dark:text-white/60" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full h-11 pl-9 pr-3 rounded-full bg-[#fffefd] text-black placeholder-black/60 dark:bg-dark-900 dark:text-white dark:placeholder-white/60 text-sm outline-none border border-black/20 dark:border-white/20"
                />
              </div>
            </div>

            {/* Right: account + cart */}
            <div className="ml-auto flex items-center gap-2 pl-3 sm:pl-4 lg:pl-5 border-l border-black/20 dark:border-white/20">
              <button aria-label="Account" className="inline-flex h-10 w-10 items-center justify-center rounded-md border text-black hover:bg-black/5 dark:text-white dark:hover:bg-white/5 border-black/20 dark:border-white/20">
                <User size={18} />
              </button>
              <button aria-label="Cart" className="inline-flex h-10 w-10 items-center justify-center rounded-md border text-black hover:bg-black/5 dark:text-white dark:hover:bg-white/5 border-black/20 dark:border-white/20">
                <ShoppingBag size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;