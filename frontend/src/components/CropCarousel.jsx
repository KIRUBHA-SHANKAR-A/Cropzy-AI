import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const CropCarousel = () => {
  const { t } = useTranslation();
  const scrollRef = useRef(null);

  const crops = [
    { 
      name: t('crops.grape'), 
      icon: '🍇', 
      image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&h=400&fit=crop', 
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    { 
      name: t('crops.peach'), 
      icon: '🍑', 
      image: 'https://images.unsplash.com/photo-1639588473831-dd9d014646ae?w=400&h=400&fit=crop', 
      color: 'from-orange-400 to-pink-400',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    },
    { 
      name: t('crops.bellPepper'), 
      icon: '🫑', 
      image: 'https://images.unsplash.com/photo-1592548868664-f8b4e4b1cfb7?w=400&h=400&fit=crop', 
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    { 
      name: t('crops.strawberry'), 
      icon: '🍓', 
      image: 'https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=400&h=400&fit=crop', 
      color: 'from-red-400 to-rose-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20'
    },
    { 
      name: t('crops.tea'), 
      icon: '🍃', 
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=400&fit=crop', 
      color: 'from-green-700 to-emerald-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    { 
      name: t('crops.tomato'), 
      icon: '🍅', 
      image: 'https://images.unsplash.com/photo-1561136594-7f68413baa99?w=400&h=400&fit=crop', 
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20'
    },
    { 
      name: t('crops.potato'), 
      icon: '🥔', 
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=400&fit=crop', 
      color: 'from-amber-600 to-yellow-700',
      bgColor: 'bg-amber-50 dark:bg-amber-900/20'
    },
    { 
      name: t('crops.corn'), 
      icon: '🌽', 
      image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=400&fit=crop', 
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
    },
    { 
      name: t('crops.apple'), 
      icon: '🍎', 
      image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=400&h=400&fit=crop', 
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20'
    },
    { 
      name: t('crops.bean'), 
      icon: '🫘', 
      image: 'https://images.unsplash.com/photo-1508900173264-bb171fa617e4?w=400&h=400&fit=crop', 
      color: 'from-green-600 to-lime-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    { 
      name: t('crops.cherry'), 
      icon: '🍒', 
      image: 'https://plus.unsplash.com/premium_photo-1688671923138-ff74e0f9a810?w=400&h=400&fit=crop', 
      color: 'from-red-600 to-rose-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20'
    }
  ];

  // Triple the array for seamless infinite scroll
  const displayCrops = [...crops, ...crops, ...crops];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    const scrollSpeed = 1;

    const animate = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth / 3)) {
          scrollContainer.scrollLeft = 0;
        }
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-green-50/50 via-white to-green-50/50 dark:from-gray-900/50 dark:via-gray-800/50 dark:to-gray-900/50 py-8 rounded-2xl">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 z-10"></div>
        
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden scroll-smooth"
          style={{ scrollBehavior: 'auto' }}
        >
          <div className="flex space-x-4 px-16">
            {displayCrops.map((crop, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-48 group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0 border border-gray-200 dark:border-gray-700`}
              >
                <div className="relative w-full h-50 overflow-hidden">
                  <img
                    src={crop.image}
                    alt={crop.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                    loading="lazy"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-20">
                    <h3 className="text-xl font-bold text-white drop-shadow-lg group-hover:text-green-300 transition">
                      {crop.name}
                    </h3>
                    
                    <div className={`h-1 w-12 mx-auto mt-2 rounded-full bg-gradient-to-r ${crop.color} transform scale-x-0 group-hover:scale-x-100 transition duration-300`}></div>
                  </div>
                </div>

                <div className={`absolute -inset-0.5 bg-gradient-to-r ${crop.color} rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300 -z-10`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
        <span className="inline-flex items-center space-x-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span>{t('carousel.scrollingText')}</span>
        </span>
      </div>
    </div>
  );
};

export default CropCarousel;