import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Play, Star, Zap } from 'lucide-react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCta?: string;
  secondaryCta?: string;
  backgroundImage?: string;
  features?: string[];
  stats?: { label: string; value: string }[];
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Premium Wax Solutions for Every Need",
  subtitle = "Professional Quality, Salon Results",
  description = "Discover our range of premium wax products designed for professionals and home users. Get smooth, long-lasting results with our innovative formulations.",
  primaryCta = "Shop Now",
  secondaryCta = "Watch Demo",
  backgroundImage = "https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=luxury%20spa%20wax%20treatment%20room%20with%20modern%20equipment%20and%20neon%20lighting%20dark%20aesthetic&image_size=landscape_16_9",
  features = ["Professional Grade", "Long-lasting Results", "Gentle Formula", "Easy Application"],
  stats = [
    { label: "Happy Customers", value: "50K+" },
    { label: "Products Sold", value: "1M+" },
    { label: "Countries", value: "25+" }
  ]
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setIsVisible(true);

    // Rotate features every 3 seconds
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll('[data-animate="fade-up"]'),
        { autoAlpha: 0, y: 32 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 40%',
            toggleActions: 'play none none reverse',
          },
        },
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  const handlePrimaryCta = () => {
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSecondaryCta = () => {
    // Open video modal or navigate to demo
    console.log('Open demo video');
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/90 via-dark-950/70 to-dark-950/90"></div>
        <div className="absolute inset-0 bg-neon-gradient opacity-10 animate-pulse"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-neon-pink rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-neon-blue rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-neon-green rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-neon-yellow rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Subtitle */}
            <div data-animate="fade-up" className="inline-flex items-center space-x-2 bg-neon-pink/20 border border-neon-pink/30 rounded-full px-4 py-2 backdrop-blur-sm">
              <Zap size={16} className="text-neon-pink" />
              <span className="text-neon-pink font-semibold text-sm">{subtitle}</span>
            </div>

            {/* Main Title */}
            <h1 data-animate="fade-up" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-poppins">
              <span className="bg-gradient-to-r from-white via-neon-blue to-neon-pink bg-clip-text text-transparent">
                {title}
              </span>
            </h1>

            {/* Description */}
            <p data-animate="fade-up" className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              {description}
            </p>

            {/* Rotating Features */}
            <div data-animate="fade-up" className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Star className="text-neon-yellow" size={20} />
                <span className="text-white font-semibold">
                  {features[currentFeature]}
                </span>
              </div>
              <div className="flex space-x-1">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentFeature ? 'bg-neon-yellow' : 'bg-gray-600'
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div data-animate="fade-up" className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handlePrimaryCta}
                className="btn-neon bg-neon-pink hover:bg-neon-pink/80 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 neon-glow-pink flex items-center justify-center space-x-2"
              >
                <span>{primaryCta}</span>
                <ArrowRight size={20} />
              </button>
              <button
                onClick={handleSecondaryCta}
                className="btn-neon bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <Play size={20} />
                <span>{secondaryCta}</span>
              </button>
            </div>

            {/* Stats */}
            <div data-animate="fade-up" className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 font-poppins">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Main Product Showcase */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden glass-dark border-2 border-neon-blue/30 neon-glow-blue">
                <img
                  src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=premium%20wax%20products%20collection%20luxury%20packaging%20neon%20lighting%20dark%20background&image_size=square_hd"
                  alt="Premium wax products"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-neon-pink/20 backdrop-blur-md border border-neon-pink/30 rounded-2xl p-4 animate-float">
                <div className="text-neon-pink font-bold text-lg">Premium</div>
                <div className="text-white text-sm">Quality</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-neon-green/20 backdrop-blur-md border border-neon-green/30 rounded-2xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-neon-green font-bold text-lg">Eco-Friendly</div>
                <div className="text-white text-sm">Formula</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;