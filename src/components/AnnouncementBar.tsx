import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface AnnouncementBarProps {
  message?: string;
  ctaText?: string;
  ctaLink?: string;
  endDate?: string;
  dismissible?: boolean;
}

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  message = "🔥 Limited Time Offer: Get 30% OFF on all wax products!",
  ctaText = "Shop Now",
  ctaLink = "#products",
  endDate = "2024-12-31T23:59:59",
  dismissible = true
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(endDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  if (!isVisible) return null;

  const handleDismiss = () => {
    setIsVisible(false);
  };

  const handleCtaClick = () => {
    const element = document.querySelector(ctaLink);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-neon-pink via-neon-blue to-neon-green p-3 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-neon-gradient opacity-80 animate-pulse-neon"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          {/* Message */}
          <span className="text-sm md:text-base font-medium text-center md:text-left">
            {message}
          </span>
          
          {/* Countdown Timer */}
          <div className="hidden md:flex items-center gap-2 text-xs font-mono">
            <div className="bg-dark-900/50 px-2 py-1 rounded backdrop-blur-sm">
              <span className="text-neon-yellow font-bold">{timeLeft.days.toString().padStart(2, '0')}</span>
              <span className="text-gray-300 ml-1">d</span>
            </div>
            <span className="text-white">:</span>
            <div className="bg-dark-900/50 px-2 py-1 rounded backdrop-blur-sm">
              <span className="text-neon-blue font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
              <span className="text-gray-300 ml-1">h</span>
            </div>
            <span className="text-white">:</span>
            <div className="bg-dark-900/50 px-2 py-1 rounded backdrop-blur-sm">
              <span className="text-neon-green font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
              <span className="text-gray-300 ml-1">m</span>
            </div>
            <span className="text-white">:</span>
            <div className="bg-dark-900/50 px-2 py-1 rounded backdrop-blur-sm">
              <span className="text-neon-pink font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
              <span className="text-gray-300 ml-1">s</span>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <button
          onClick={handleCtaClick}
          className="btn-neon bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/30"
        >
          {ctaText}
        </button>
        
        {/* Dismiss Button */}
        {dismissible && (
          <button
            onClick={handleDismiss}
            className="ml-2 p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
            aria-label="Dismiss announcement"
          >
            <X size={16} />
          </button>
        )}
      </div>
      
      {/* Mobile countdown */}
      <div className="md:hidden mt-2 flex justify-center gap-2 text-xs font-mono">
        <div className="bg-dark-900/50 px-2 py-1 rounded backdrop-blur-sm">
          <span className="text-neon-yellow font-bold">{timeLeft.days.toString().padStart(2, '0')}</span>
          <span className="text-gray-300 ml-1">d</span>
        </div>
        <span className="text-white self-center">:</span>
        <div className="bg-dark-900/50 px-2 py-1 rounded backdrop-blur-sm">
          <span className="text-neon-blue font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
          <span className="text-gray-300 ml-1">h</span>
        </div>
        <span className="text-white self-center">:</span>
        <div className="bg-dark-900/50 px-2 py-1 rounded backdrop-blur-sm">
          <span className="text-neon-green font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
          <span className="text-gray-300 ml-1">m</span>
        </div>
        <span className="text-white self-center">:</span>
        <div className="bg-dark-900/50 px-2 py-1 rounded backdrop-blur-sm">
          <span className="text-neon-pink font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
          <span className="text-gray-300 ml-1">s</span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;