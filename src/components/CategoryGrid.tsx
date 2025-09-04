import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  sortOrder: number;
}

interface CategoryGridProps {
  categories: Category[];
  title?: string;
  subtitle?: string;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({
  categories,
  title = "Shop by Category",
  subtitle = "Discover our premium wax collection designed for every need"
}) => {
  const handleCategoryClick = (slug: string) => {
    // Navigate to category page or filter products
    console.log('Navigate to category:', slug);
    // In a real app, this would use router navigation
  };

  const getIconComponent = (iconName: string) => {
    // Map icon names to actual icon components
    const iconMap: { [key: string]: React.ReactNode } = {
      'hard-wax': (
        <div className="w-8 h-8 bg-neon-pink rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">HW</span>
        </div>
      ),
      'soft-wax': (
        <div className="w-8 h-8 bg-neon-blue rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">SW</span>
        </div>
      ),
      'accessories': (
        <div className="w-8 h-8 bg-neon-green rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">AC</span>
        </div>
      ),
      'bundles': (
        <div className="w-8 h-8 bg-neon-yellow rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">BN</span>
        </div>
      )
    };
    
    return iconMap[iconName] || (
      <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-sm">?</span>
      </div>
    );
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" id="categories">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 font-poppins">
            {title}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const neonColors = ['neon-pink', 'neon-blue', 'neon-green', 'neon-yellow'];
            const neonColor = neonColors[index % neonColors.length];
            
            return (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.slug)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                {/* Background Image */}
                <div className="aspect-square relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  {/* Neon Border Effect */}
                  <div className={`absolute inset-0 border-2 border-transparent group-hover:border-${neonColor} rounded-2xl transition-all duration-300 opacity-0 group-hover:opacity-100`}></div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 neon-glow-${neonColor.split('-')[1]}`}></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Icon */}
                  <div className="flex justify-end">
                    <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                      {getIconComponent(category.icon)}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-extrabold text-white group-hover:text-glow-pink transition-all duration-300 font-poppins">
                      {category.name}
                    </h3>
                    <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300 line-clamp-2">
                      {category.description}
                    </p>
                    
                    {/* CTA */}
                    <div className="flex items-center space-x-2 text-sm font-semibold text-gray-400 group-hover:text-white transition-all duration-300">
                      <span>Explore</span>
                      <ArrowRight 
                        size={16} 
                        className="transform transition-transform duration-300 group-hover:translate-x-1" 
                      />
                    </div>
                  </div>
                </div>

                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-neon-gradient animate-pulse"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => console.log('View all categories')}
            className="btn-neon bg-transparent border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 neon-glow-blue"
          >
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;