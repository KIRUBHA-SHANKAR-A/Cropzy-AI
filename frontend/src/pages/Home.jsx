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
    <div className="pt-24 pb-16 px-4 min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-flex items-center bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
              {t('home.hero.badge')}
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              {t('home.hero.title')}{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {t('home.hero.highlight')}
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 mb-8">
              {t('home.hero.subtitle')}
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-green-100 dark:border-gray-700 hover:shadow-md transition">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 text-xl">
                  ✓
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{t('home.benefits.free.title')}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t('home.benefits.free.desc')}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-green-100 dark:border-gray-700 hover:shadow-md transition">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 text-xl">
                  🌐
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{t('home.benefits.languages.title')}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t('home.benefits.languages.desc')}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-green-100 dark:border-gray-700 hover:shadow-md transition">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 text-xl">
                  🚀
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{t('home.benefits.noSignup.title')}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t('home.benefits.noSignup.desc')}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-green-100 dark:border-gray-700 hover:shadow-md transition">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 text-xl">
                  ⏰
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{t('home.benefits.access.title')}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t('home.benefits.access.desc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img 
              src={heroImg}
              alt={t('home.hero.imageAlt')}
              className="rounded-2xl shadow-2xl"
            />
            <div className="relative">
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hidden md:block">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">🤖</span>
                  <p className="font-bold text-gray-900 dark:text-white">{t('home.hero.aiBadge')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Crop Carousel Section */}
        <section className="py-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-4">
              {t('home.carousel.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('home.carousel.subtitle')}
            </p>
          </div>
          <CropCarousel />
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {t('home.howItWorks.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">
              {t('home.howItWorks.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900/30 w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                <img 
                  src={how1}
                  alt={t('home.howItWorks.step1.alt')} 
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {t('home.howItWorks.step1.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('home.howItWorks.step1.desc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900/30 w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                <img 
                  src={how2} 
                  alt={t('home.howItWorks.step2.alt')} 
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {t('home.howItWorks.step2.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('home.howItWorks.step2.desc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900/30 w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                <img 
                  src={how3} 
                  alt={t('home.howItWorks.step3.alt')} 
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {t('home.howItWorks.step3.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('home.howItWorks.step3.desc')}
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <span className="text-green-600 dark:text-green-400 font-semibold text-sm uppercase tracking-wider bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full">
              {t('home.features.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4">
              {t('home.features.heading')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">
              {t('home.features.subheading')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition group border border-gray-200 dark:border-gray-700"
              >
                <div className={`text-4xl mb-4 group-hover:scale-110 transition bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 transition">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
