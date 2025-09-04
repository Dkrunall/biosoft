import React from 'react';
import { ChevronUp, ChevronDown, Mail, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

/*
  Footer — precise replication of the provided reference
  - Four top columns with vertical separators on lg+
  - Exact typographic hierarchy: bold uppercase headings, compact link lists
  - Newsletter field with icon and policy text + FOLLOW US row of icons
  - Bottom row aligned to the same 4-column grid with a hot-pink Country/Region selector on the first column
  - Centered “^ BACK TO TOP” row
  - Rounded outer container and thin white borders everywhere
*/

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto w-[96%] sm:w-[95%] md:w-[94%] lg:w-[92%] max-w-[1280px] mt-8 mb-8">
      <div className="rounded-3xl border border-black dark:border-white/20 shadow-lg text-black dark:text-white bg-[#fffaf5] dark:bg-black/95 overflow-hidden">
        {/* Top: 4 columns (Order & Support removed, replaced with brand logo) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-black/20 dark:divide-white/30">
          {/* BRAND LOGO */}
          <div className="p-6 sm:p-8 flex items-center">
            <img src="/logo.png" alt="Biosoft logo" className="h-10 sm:h-12 w-auto" />
          </div>

          {/* LEGAL INFORMATION */}
          <div className="p-6 sm:p-8">
            <h3 className="text-black dark:text-white text-[18px] sm:text-[20px] font-extrabold uppercase tracking-[0.04em] mb-4">Legal Information</h3>
            <ul className="space-y-3 text-[14px]">
              <li><button className="hover:underline">Terms of Service</button></li>
              <li><button className="hover:underline">Shipping Policy</button></li>
              <li><button className="hover:underline">Privacy Policy</button></li>
              <li><button className="hover:underline">Refund Policy</button></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="p-6 sm:p-8">
            <h3 className="text-black dark:text-white text-[18px] sm:text-[20px] font-extrabold uppercase tracking-[0.04em] mb-4">Newsletter</h3>
            <div className="relative mb-3">
              <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/60 dark:text-white/70" />
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full pl-10 pr-4 h-11 bg-[#fffefd] border-2 border-black/20 dark:border-white/20 rounded-full placeholder-black/60 dark:placeholder-white/80 text-black dark:text-white text-[14px] outline-none"
              />
            </div>
            <p className="text-[12px] text-black/80 dark:text-white/80 leading-snug">
              By clicking the button you agree to the <button className="underline">Privacy Policy</button> and <button className="underline">Terms and Conditions</button>.
            </p>

            {/* FOLLOW US block with separators to match reference */}
            <div className="mt-6">
              <div className="border-t border-black/20 dark:border-white/30 pt-3">
                <h4 className="text-black dark:text-white text-[16px] font-extrabold uppercase tracking-[0.04em]">Follow Us</h4>
              </div>
              <div className="border-b border-black/20 dark:border-white/30 py-3">
                <div className="flex items-center gap-4">
                  <a aria-label="Instagram" href="#" className="hover:opacity-80"><Instagram size={22} /></a>
                  <a aria-label="Facebook" href="#" className="hover:opacity-80"><Facebook size={22} /></a>
                  <a aria-label="LinkedIn" href="#" className="hover:opacity-80"><Linkedin size={22} /></a>
                  <a aria-label="YouTube" href="#" className="hover:opacity-80"><Youtube size={22} /></a>
                  <a aria-label="TikTok" href="#" className="hover:opacity-80"><FaTiktok size={22} /></a>
                </div>
              </div>
            </div>
          </div>

          {/* RETAILERS */}
          <div className="p-6 sm:p-8">
            <h3 className="text-black dark:text-white text-[18px] sm:text-[20px] font-extrabold uppercase tracking-[0.04em] mb-4">Retailers</h3>
            <ul className="space-y-3 text-[14px]">
              <li>Ulta Beauty</li>
              <li>CVS</li>
              <li>Walmart</li>
              <li>Target</li>
              <li>Amazon</li>
              <li>Boots UK</li>
              <li>Farmers New Zealand</li>
            </ul>
          </div>
        </div>

        {/* Bottom row aligned with 4 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-4 border-t border-black/20 dark:border-white/30">
          {/* Country/Region selector in col-1 */}
          <div className="p-0 lg:border-r border-black/20 dark:border-white/30">
            <button className="relative w-full text-left">
              <div className="px-4 sm:px-6 py-3 bg-[#ff1974] text-white flex items-center justify-between">
                <span className="font-semibold">United States (USD $)</span>
                <ChevronDown size={18} />
              </div>
              {/* label tag */}
              <span className="absolute left-3 -top-2 inline-block bg-[#ff4a92] text-white text-[11px] px-2 py-0.5 rounded-sm uppercase tracking-wide">Country/Region</span>
            </button>
          </div>

          {/* Middle columns join to center disclaimer */}
          <div className="hidden lg:block border-r border-black/20 dark:border-white/30" />
          <div className="hidden lg:block border-r border-black/20 dark:border-white/30" />

          {/* Copyright / disclaimer in final column spans on lg; full width on mobile */}
          <div className="p-4 sm:p-6">
            <p className="text-[12px] text-black/90 dark:text-white/90">
              © {year}, <a href="#" className="underline">Biosoft NOT for Human or Animal consumption, made by two hairy guys.™</a>
            </p>
          </div>
        </div>

        {/* Back to top */}
        <div className="border-t border-[#e9dccf] dark:border-white/30">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-full py-4 flex items-center justify-center gap-2 text-black/90 hover:text-black dark:text-white/90 dark:hover:text-white"
            aria-label="Back to top"
          >
            <ChevronUp size={18} />
            <span className="uppercase text-[12px] font-semibold tracking-wide">Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;