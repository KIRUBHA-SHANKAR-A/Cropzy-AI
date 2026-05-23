import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import CropCarousel from '../components/CropCarousel';
import useScrollToTop from '../hooks/useScrollToTop';
import heroImg from '../assets/hero-img.png';
import how1 from '../assets/how it works 1.png';
import how2 from '../assets/how it works 2.png';
import how3 from '../assets/how it works 3.png';

const Homepage = () => {
  const { t } = useTranslation();
  useScrollToTop('smooth');
  
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [stats, setStats] = useState({
    farmers: 12500,
    acres: 250000,
    accuracy: 98
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        farmers: prev.farmers + 1 > 15000 ? 12500 : prev.farmers + 1,
        acres: prev.acres + 100 > 300000 ? 250000 : prev.acres + 100,
        accuracy: prev.accuracy
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);
  
  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % coreFeatures.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const coreFeatures = [
    {
      icon: '🤖',
      title: t('nav.cropRecommendation'),
      desc: t('home.features.cropRecommendationDesc'),
      color: 'from-blue-500 to-cyan-500',
      link: '/crop-recommendation'
    },
    {
      icon: '🔍',
      title: t('nav.diseasePrediction'),
      desc: t('home.features.diseasePredictionDesc'),
      color: 'from-purple-500 to-pink-500',
      link: '/disease-prediction'
    },
    {
      icon: '🌾',
      title: t('nav.farmVisualization'),
      desc: t('home.features.farmVisualizationDesc'),
      color: 'from-green-500 to-emerald-500',
      link: '/farm-visualization'
    },
    {
      icon: '🔄',
      title: t('nav.cropRotation'),
      desc: t('home.features.cropRotationDesc'),
      color: 'from-orange-500 to-red-500',
      link: '/crop-rotation'
    }
  ];

  const testimonials = [
    {
      name: t('home.testimonials.farmer1.name'),
      role: t('home.testimonials.farmer1.role'),
      content: t('home.testimonials.farmer1.content'),
      image: 'https://images.unsplash.com/photo-1595274450150-1c2ced3d9b5d?w=150&h=150&fit=crop&auto=format',
    },
    {
      name: t('home.testimonials.farmer2.name'),
      role: t('home.testimonials.farmer2.role'),
      content: t('home.testimonials.farmer2.content'),
      image: 'https://images.unsplash.com/photo-1595274450150-1c2c-f9b8b4b7c4a0?w=150&h=150&fit=crop&auto=format',
    },
    {
      name: t('home.testimonials.farmer3.name'),
      role: t('home.testimonials.farmer3.role'),
      content: t('home.testimonials.farmer3.content'),
      image: 'https://images.unsplash.com/photo-1595274450150-1c2c-f9b8b4b7c4a1?w=150&h=150&fit=crop&auto=format',
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Responsive padding for different screen sizes */}
      <div className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16 px-3 sm:px-4 md:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section - Responsive grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-12 sm:mb-16">
            
            {/* Left Column - Text Content */}
            <div className="order-2 lg:order-1">
              {/* Badge - Responsive text */}
              <div className="inline-flex items-center bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse mr-1.5 sm:mr-2"></span>
                <span className="whitespace-nowrap">{t('home.hero.badge')}</span>
              </div>
              
              {/* Title - Responsive font sizes */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                <span className="block sm:inline">{t('home.hero.title')} </span>
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent block sm:inline">
                  {t('home.hero.highlight')}
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-4 sm:mt-6 mb-6 sm:mb-8">
                {t('home.hero.subtitle')}
              </p>
              
              {/* Key Benefits - Responsive grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-6 sm:mt-8">
                <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-green-100 dark:border-gray-700 hover:shadow-md transition">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 text-lg sm:text-xl flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">{t('home.benefits.free.title')}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t('home.benefits.free.desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-green-100 dark:border-gray-700 hover:shadow-md transition">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 text-lg sm:text-xl flex-shrink-0">
                    🌐
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">{t('home.benefits.languages.title')}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t('home.benefits.languages.desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-green-100 dark:border-gray-700 hover:shadow-md transition">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 text-lg sm:text-xl flex-shrink-0">
                    🚀
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">{t('home.benefits.noSignup.title')}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t('home.benefits.noSignup.desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-green-100 dark:border-gray-700 hover:shadow-md transition">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 text-lg sm:text-xl flex-shrink-0">
                    ⏰
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">{t('home.benefits.access.title')}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t('home.benefits.access.desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="order-1 lg:order-2 relative">
              <img 
                src={heroImg}
                alt={t('home.hero.imageAlt')}
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              {/* AI Badge - Hidden on mobile, visible from sm breakpoint */}
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-6 md:-left-6 bg-white dark:bg-gray-800 p-2 sm:p-3 md:p-4 rounded-xl shadow-lg hidden sm:block">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <span className="text-2xl sm:text-3xl">🤖</span>
                  <p className="font-bold text-sm sm:text-base text-gray-900 dark:text-white whitespace-nowrap">{t('home.hero.aiBadge')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Crop Carousel Section */}
          <section className="py-8 sm:py-12 md:py-16">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-3 sm:mb-4 break-words px-2">
                {t('home.carousel.title')}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto break-words px-4">
                {t('home.carousel.subtitle')}
              </p>
            </div>
            <CropCarousel />
          </section>

          {/* How It Works Section - Responsive grid */}
          <section className="py-8 sm:py-12 md:py-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white break-words px-2">
                {t('home.howItWorks.title')}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-3 sm:mt-4 break-words px-4">
                {t('home.howItWorks.subtitle')}
              </p>
            </div>

            {/* Responsive grid - 1 column on mobile, 3 columns on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[1, 2, 3].map((step, index) => (
                <div key={index} className="text-center px-4 sm:px-6">
                  <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-3xl sm:text-4xl mx-auto mb-3 sm:mb-4">
                    <img 
                      src={index === 0 ? how1 : index === 1 ? how2 : how3}
                      alt={t(`home.howItWorks.step${index + 1}.alt`)} 
                      className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 break-words">
                    {t(`home.howItWorks.step${index + 1}.title`)}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 break-words">
                    {t(`home.howItWorks.step${index + 1}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="py-8 sm:py-12 md:py-16">
            <div className="text-center mb-8 sm:mb-12">
              <span className="text-green-600 dark:text-green-400 font-semibold text-xs sm:text-sm uppercase tracking-wider bg-green-100 dark:bg-green-900/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full inline-block">
                {t('home.features.badge')}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4 sm:mt-6 break-words px-2">
                {t('home.features.heading')}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-3 sm:mt-4 break-words px-4">
                {t('home.features.subheading')}
              </p>
            </div>

            {/* Responsive grid - 1 on mobile, 2 on tablet, 4 on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {coreFeatures.map((feature, index) => (
                <Link
                  key={index}
                  to={feature.link}
                  className="bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition group border border-gray-200 dark:border-gray-700"
                >
                  <div className={`text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition bg-gradient-to-r ${feature.color} w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-white mx-auto sm:mx-0`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 transition break-words text-center sm:text-left">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 break-words text-center sm:text-left">
                    {feature.desc}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
