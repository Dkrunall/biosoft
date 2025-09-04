import React from 'react';
import Header from '../components/Header';
import CategoryRibbon from '../components/CategoryRibbon';
import FloatingBanner from '../components/FloatingBanner';
import InfiniteTextScroller from '../components/InfiniteTextScroller';
import FlavorMarquee from '@/components/FlavorMarquee';
import AccessoriesTextSlider from '@/components/AccessoriesTextSlider';
import InfoTwoCols from '@/components/InfoTwoCols';
import InstagramHashtagSlider from '@/components/InstagramHashtagSlider';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Header and category ribbon */}
      <Header />
      <div className="h-20" />
      <CategoryRibbon />
      {/* Banner now scrolls with the page */}
      <FloatingBanner />
      {/* Infinite text scroller below the banner */}
      <InfiniteTextScroller speedSeconds={36} direction="right" />
      {/* Hero-style image immediately after the text slider */}
      <section className="mx-auto w-[96%] sm:w-[95%] md:w-[94%] lg:w-[92%] max-w-[1280px] mt-6 md:mt-8">
        <div className="rounded-3xl border bg-white text-black dark:bg-black dark:text-white border-black shadow-lg dark:border-white/20 overflow-hidden">
          <div className="relative h-[280px] sm:h-[360px] md:h-[420px] lg:h-[520px]">
            <img
              src="/cat1.jpg"
              alt="Featured collection"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>
      {/* Temporary page content spacer so you can scroll */}
      <div className="mt-6 md:mt-6">
        <FlavorMarquee />
      </div>
      <section className="mx-auto w-[96%] sm:w-[95%] md:w-[94%] lg:w-[92%] max-w-[1280px] mt-6 md:mt-8">
        <div className="rounded-3xl border bg-white text-black dark:bg-black dark:text-white border-black shadow-lg dark:border-white/20 overflow-hidden">
          <div className="relative h-[280px] sm:h-[360px] md:h-[420px] lg:h-[520px]">
            <img
              src="/a1.jpeg"
              alt="Featured collection"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>
      {/* Accessories infinite text slider (matches reference style) */}
      <AccessoriesTextSlider speedSeconds={48} direction="right" />
      {/* Two info columns */}
      <InfoTwoCols />
      {/* Instagram hashtag slider */}
      <InstagramHashtagSlider speedSeconds={72} direction="left" />
      {/* Footer */}
      <Footer />
    </div>
  );
}