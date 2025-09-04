import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Users, Award, TrendingUp } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar: string;
  rating: number;
  content: string;
  date: string;
}

interface SocialProofCarouselProps {
  testimonials?: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

const SocialProofCarousel: React.FC<SocialProofCarouselProps> = ({
  testimonials = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Professional Esthetician',
      company: 'Luxury Spa',
      avatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20woman%20esthetician%20portrait%20confident%20smile&image_size=square',
      rating: 5,
      content: 'These wax products have completely transformed my salon services. The quality is exceptional and my clients love the smooth, long-lasting results.',
      date: '2024-01-15'
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Salon Owner',
      company: 'Elite Beauty',
      avatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20man%20salon%20owner%20business%20portrait&image_size=square',
      rating: 5,
      content: 'Outstanding products! Easy to use, consistent results, and my staff loves working with them. Customer satisfaction has increased significantly.',
      date: '2024-01-10'
    },
    {
      id: '3',
      name: 'Emma Rodriguez',
      role: 'Home User',
      avatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=happy%20woman%20home%20user%20natural%20smile%20portrait&image_size=square',
      rating: 5,
      content: 'I was skeptical about at-home waxing, but these products made it so easy! Professional results without the salon price tag.',
      date: '2024-01-08'
    },
    {
      id: '4',
      name: 'David Kim',
      role: 'Beauty Blogger',
      company: 'Beauty Insider',
      avatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=male%20beauty%20blogger%20professional%20headshot%20modern&image_size=square',
      rating: 5,
      content: 'After testing dozens of wax products, this brand stands out for its quality, effectiveness, and gentle formula. Highly recommended!',
      date: '2024-01-05'
    }
  ],
  autoPlay = true,
  interval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, interval, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < rating ? 'text-neon-yellow fill-current' : 'text-gray-600'}`}
      />
    ));
  };

  const stats = [
    { icon: <Users size={24} />, value: '50K+', label: 'Happy Customers', color: 'neon-pink' },
    { icon: <Star size={24} />, value: '4.9', label: 'Average Rating', color: 'neon-yellow' },
    { icon: <Award size={24} />, value: '25+', label: 'Awards Won', color: 'neon-green' },
    { icon: <TrendingUp size={24} />, value: '98%', label: 'Satisfaction Rate', color: 'neon-blue' }
  ];

  return (
    <section className="py-16 bg-dark-900/30" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-poppins">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from thousands of satisfied customers
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 glass-dark rounded-2xl border border-white/10 hover:border-neon-blue/30 transition-all duration-300 group"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-${stat.color}/20 text-${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 font-poppins">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="glass-dark border border-white/10 rounded-3xl p-8 md:p-12 mx-2">
                    <div className="max-w-4xl mx-auto">
                      {/* Quote Icon */}
                      <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-neon-pink/20 border border-neon-pink/30 rounded-full">
                          <Quote size={32} className="text-neon-pink" />
                        </div>
                      </div>

                      {/* Content */}
                      <blockquote className="text-xl md:text-2xl text-white text-center leading-relaxed mb-8 font-light">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        <div className="flex space-x-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>

                      {/* Author */}
                      <div className="flex items-center justify-center space-x-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-neon-blue/30"
                        />
                        <div className="text-center">
                          <div className="text-lg font-semibold text-white">
                            {testimonial.name}
                          </div>
                          <div className="text-neon-blue text-sm">
                            {testimonial.role}
                            {testimonial.company && (
                              <span className="text-gray-400"> at {testimonial.company}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(autoPlay)}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(autoPlay)}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-neon-pink scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => setIsPlaying(autoPlay)}
            />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Trusted by professionals worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Professional Spa Association', 'Beauty Industry Awards', 'Certified Organic', 'Dermatologist Tested'].map((badge, index) => (
              <div key={index} className="text-sm text-gray-500 font-medium">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofCarousel;