import React from 'react';
import { Gift, Truck, Shield, Clock, ArrowRight, Sparkles } from 'lucide-react';

interface PromotionalStrip {
  id: string;
  type: 'banner' | 'feature' | 'offer';
  title: string;
  description?: string;
  icon?: string;
  color: 'pink' | 'blue' | 'green' | 'yellow';
  ctaText?: string;
  ctaLink?: string;
}

interface PromotionalPanelsProps {
  strips?: PromotionalStrip[];
  showFeatures?: boolean;
}

const PromotionalPanels: React.FC<PromotionalPanelsProps> = ({
  strips = [
    {
      id: '1',
      type: 'offer',
      title: '30% OFF First Order',
      description: 'New customers get exclusive discount on their first purchase',
      color: 'pink',
      ctaText: 'Claim Offer',
      ctaLink: '#products'
    },
    {
      id: '2',
      type: 'banner',
      title: 'Free Shipping Over $50',
      description: 'Get free delivery on orders above $50',
      color: 'blue',
      icon: 'truck'
    },
    {
      id: '3',
      type: 'feature',
      title: 'Professional Results',
      description: 'Salon-quality waxing at home',
      color: 'green',
      icon: 'sparkles'
    }
  ],
  showFeatures = true
}) => {
  const getIcon = (iconName?: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      gift: <Gift size={24} />,
      truck: <Truck size={24} />,
      shield: <Shield size={24} />,
      clock: <Clock size={24} />,
      sparkles: <Sparkles size={24} />
    };
    
    return iconName ? iconMap[iconName] : <Gift size={24} />;
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      pink: {
        bg: 'bg-neon-pink/20',
        border: 'border-neon-pink/30',
        text: 'text-neon-pink',
        glow: 'neon-glow-pink',
        button: 'bg-neon-pink hover:bg-neon-pink/80'
      },
      blue: {
        bg: 'bg-neon-blue/20',
        border: 'border-neon-blue/30',
        text: 'text-neon-blue',
        glow: 'neon-glow-blue',
        button: 'bg-neon-blue hover:bg-neon-blue/80'
      },
      green: {
        bg: 'bg-neon-green/20',
        border: 'border-neon-green/30',
        text: 'text-neon-green',
        glow: 'neon-glow-green',
        button: 'bg-neon-green hover:bg-neon-green/80'
      },
      yellow: {
        bg: 'bg-neon-yellow/20',
        border: 'border-neon-yellow/30',
        text: 'text-neon-yellow',
        glow: 'neon-glow-yellow',
        button: 'bg-neon-yellow hover:bg-neon-yellow/80'
      }
    };
    
    return colorMap[color as keyof typeof colorMap] || colorMap.pink;
  };

  const handleCtaClick = (link?: string) => {
    if (link) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const features = [
    {
      icon: <Truck size={32} />,
      title: 'Free Shipping',
      description: 'Free delivery on orders over $50',
      color: 'blue'
    },
    {
      icon: <Shield size={32} />,
      title: '100% Safe',
      description: 'Dermatologically tested formulas',
      color: 'green'
    },
    {
      icon: <Clock size={32} />,
      title: 'Quick Results',
      description: 'See results in just one application',
      color: 'pink'
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Premium Quality',
      description: 'Professional-grade ingredients',
      color: 'yellow'
    }
  ];

  return (
    <div className="space-y-12 bg-[#8d9a35] dark:bg-[#8d9a35]">
       {/* Promotional Strips */}
       <section className="py-8">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {strips.map((strip, index) => {
               const colors = getColorClasses(strip.color);
               
               return (
                 <div
                   key={strip.id}
                   className={`relative overflow-hidden rounded-2xl ${colors.bg} ${colors.border} border backdrop-blur-md p-6 group hover:${colors.glow} transition-all duration-300 hover:scale-105 transform`}
                   style={{ animationDelay: `${index * 0.1}s` }}
                 >
                   {/* Background Pattern */}
                   <div className="absolute inset-0 opacity-5">
                     <div className="absolute inset-0 bg-neon-gradient animate-pulse"></div>
                   </div>
                   
                   <div className="relative z-10">
                     {/* Icon */}
                     {strip.icon && (
                       <div className={`${colors.text} mb-4 transform transition-transform duration-300 group-hover:scale-110`}>
                         {getIcon(strip.icon)}
                       </div>
                     )}
                     
                     {/* Content */}
                     <h3 className="text-xl font-bold text-white mb-2 font-poppins">
                       {strip.title}
                     </h3>
                     
                     {strip.description && (
                       <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                         {strip.description}
                       </p>
                     )}
                     
                     {/* CTA Button */}
                     {strip.ctaText && (
                       <button
                         onClick={() => handleCtaClick(strip.ctaLink)}
                         className={`btn-neon ${colors.button} text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2`}
                       >
                         <span>{strip.ctaText}</span>
                         <ArrowRight size={16} />
                       </button>
                     )}
                   </div>
                   
                   {/* Hover Effect */}
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                 </div>
               );
             })}
           </div>
         </div>
       </section>

       {/* Feature Highlights */}
       {showFeatures && (
         <section className="py-16">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
                 Why Choose Our Products?
               </h2>
               <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                 Experience the difference with our premium wax solutions
               </p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {features.map((feature, index) => {
                 const colors = getColorClasses(feature.color);
                 
                 return (
                   <div
                     key={index}
                     className="text-center group transform transition-all duration-500 hover:scale-105"
                     style={{ animationDelay: `${index * 0.1}s` }}
                   >
                     {/* Icon Container */}
                     <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${colors.bg} ${colors.border} border mb-6 ${colors.text} group-hover:${colors.glow} transition-all duration-300`}>
                       {feature.icon}
                     </div>
                     
                     {/* Content */}
                     <h3 className="text-xl font-bold text-white mb-3 font-poppins group-hover:text-glow-pink transition-all duration-300">
                       {feature.title}
                     </h3>
                     <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                       {feature.description}
                     </p>
                   </div>
                 );
               })}
             </div>
           </div>
         </section>
       )}

       {/* Special Offer Banner */}
       <section className="relative overflow-hidden">
         <div className="bg-neon-gradient p-1 rounded-2xl mx-4 sm:mx-6 lg:mx-8">
           <div className="bg-dark-950 rounded-2xl p-8 md:p-12">
             <div className="max-w-4xl mx-auto text-center">
               <div className="inline-flex items-center space-x-2 bg-neon-pink/20 border border-neon-pink/30 rounded-full px-4 py-2 backdrop-blur-sm mb-6">
                 <Gift size={16} className="text-neon-pink" />
                 <span className="text-neon-pink font-semibold text-sm">Limited Time Offer</span>
               </div>
               
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-poppins">
                 <span className="bg-gradient-to-r from-neon-pink via-neon-blue to-neon-green bg-clip-text text-transparent">
                   Get Started Today
                 </span>
               </h2>
               
               <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                 Join thousands of satisfied customers and experience the difference with our premium wax products. 
                 Professional results, guaranteed satisfaction.
               </p>
               
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <button
                   onClick={() => handleCtaClick('#products')}
                   className="btn-neon bg-neon-pink hover:bg-neon-pink/80 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 neon-glow-pink flex items-center justify-center space-x-2"
                 >
                   <span>Shop Now</span>
                   <ArrowRight size={20} />
                 </button>
                 <button
                   onClick={() => handleCtaClick('#contact')}
                   className="btn-neon bg-transparent border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
                 >
                   Get Quote
                 </button>
               </div>
             </div>
           </div>
         </div>
       </section>
     </div>
   );
};

export default PromotionalPanels;