import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import useScrollToTop from '../hooks/useScrollToTop';

const CropRotation = () => {
  const { t, i18n } = useTranslation();
  useScrollToTop('smooth');
  
  const [formData, setFormData] = useState({
    startCrop: '',
    numSeasons: '3'
  });
  
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // Full crop list from your data (keep English for API)
  const allCrops = [
    'Arecanut', 'Arhar/Tur', 'Banana', 'Black pepper', 'Cashewnut',
    'Coconut', 'Cowpea(Lobia)', 'Dry chillies', 'Ginger', 'Groundnut',
    'Maize', 'Moong(Green Gram)', 'Oilseeds total', 'Other Kharif pulses',
    'Other oilseeds', 'Rapeseed & Mustard', 'Rice', 'Sesamum', 'Sugarcane',
    'Sunflower', 'Sweet potato', 'Tapioca', 'Turmeric', 'Urad', 'Bajra',
    'Castor seed', 'Coriander', 'Cotton', 'Garlic', 'Gram',
    'Guar seed', 'Horse-gram', 'Jowar', 'Linseed', 'Masoor', 'Mesta',
    'Niger seed', 'Onion', 'Other Rabi pulses', 'Potato', 'Ragi',
    'Safflower', 'Sannhamp', 'Small millets', 'Soyabean', 'Tobacco',
    'Wheat', 'Peas & beans (Pulses)', 'Jute', 'Barley', 'Khesari',
    'Moth', 'Cardamom'
  ].sort();

  // Handle language change
  useEffect(() => {
    const handleLanguageChange = () => {
      setRefreshKey(prev => prev + 1);
      setResult(null);
      setError('');
    };
    i18n.on('languageChanged', handleLanguageChange);
    return () => i18n.off('languageChanged', handleLanguageChange);
  }, [i18n]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Track scroll position for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    if (!formData.startCrop) {
      setError(t('cropRotation.errors.selectCrop'));
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://kirubha01-crop-rotation-api.hf.space/recommend', {
        start_crop: formData.startCrop,
        num_seasons: parseInt(formData.numSeasons)
      });

      if (response.data.error) {
        setError(response.data.error);
      } else {
        setResult(response.data);
        
        setTimeout(() => {
          document.getElementById('result-section')?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
          });
        }, 100);
      }
    } catch (err) {
      setError(err.response?.data?.error || t('cropRotation.errors.requestFailed'));
    } finally {
      setLoading(false);
    }
  };

  // Get season icon
  const getSeasonIcon = (season) => {
    const icons = {
      'Kharif': '🌧️',
      'Rabi': '🌾',
      'Summer': '☀️',
      'Winter': '❄️',
      'Autumn': '🍂',
      'Whole Year': '📅'
    };
    return icons[season] || '🌱';
  };

  // Get crop icon based on name
  const getCropIcon = (crop) => {
    const cropIcons = {
      'Rice': '🌾', 'Wheat': '🌾', 'Maize': '🌽', 'Bajra': '🌽',
      'Jowar': '🌽', 'Ragi': '🌽', 'Barley': '🌾', 'Sugarcane': '🎋',
      'Cotton': '🌿', 'Groundnut': '🥜', 'Potato': '🥔', 'Onion': '🧅',
      'Garlic': '🧄', 'Tomato': '🍅', 'Turmeric': '🌶️', 'Ginger': '🫚',
      'Banana': '🍌', 'Coconut': '🥥', 'Soyabean': '🫘', 'Gram': '🫘',
      'Arhar': '🫘', 'Moong': '🫘', 'Urad': '🫘', 'Masoor': '🫘',
      'Peas': '🫘', 'Cardamom': '🫚', 'Coriander': '🌿', 'Sunflower': '🌻',
      'Sesamum': '🌱', 'Mustard': '🌱', 'Linseed': '🌱', 'Safflower': '🌻',
      'Tobacco': '🍂', 'Jute': '🌿', 'Mesta': '🌿', 'Cashewnut': '🥜',
      'Arecanut': '🥥', 'Black pepper': '🌶️', 'Dry chillies': '🌶️',
      'Sweet potato': '🍠', 'Tapioca': '🌱', 'Castor': '🌱', 'Niger': '🌱',
      'Moth': '🫘', 'Khesari': '🫘', 'Guar': '🫘', 'Horse-gram': '🫘', 'Cowpea': '🫘'
    };
    
    for (let key in cropIcons) {
      if (crop?.toLowerCase().includes(key.toLowerCase())) {
        return cropIcons[key];
      }
    }
    return '🌱';
  };

  const popularCrops = ['Rice', 'Wheat', 'Maize', 'Sugarcane', 'Cotton', 'Potato', 'Turmeric', 'Banana', 'Groundnut', 'Onion'];

  return (
    <div key={refreshKey} className="pt-24 pb-16 px-4 min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <div className="inline-flex items-center bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            🔄 {t('cropRotation.header.badge')}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4">
            {t('cropRotation.header.title')}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 px-2">
            {t('cropRotation.header.subtitle')}
          </p>
        </div>

        {/* Popular Crops Quick Select */}
        <div className="mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 text-center">
            {t('cropRotation.popularCrops')}:
          </p>
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 px-2">
            {popularCrops.map((crop) => (
              <button
                key={crop}
                onClick={() => setFormData({ ...formData, startCrop: crop })}
                className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-white dark:bg-gray-800 border border-green-200 dark:border-green-800 rounded-full text-xs sm:text-sm hover:bg-green-50 dark:hover:bg-green-900/30 transition flex items-center gap-1 sm:gap-2 shadow-sm"
              >
                <span className="text-sm sm:text-base">{getCropIcon(crop)}</span>
                <span className="text-gray-700 dark:text-gray-300">{t(`cropRotation.crops.${crop}`, crop)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Form Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="p-4 sm:p-6 md:p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Crop Dropdown */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                    {t('cropRotation.form.selectCrop')} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="startCrop"
                      value={formData.startCrop}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 appearance-none bg-white dark:bg-gray-700 border-2 border-green-200 dark:border-green-800 rounded-lg sm:rounded-xl text-sm sm:text-base text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all shadow-md hover:shadow-lg cursor-pointer pr-8 sm:pr-10"
                    >
                      <option value="" className="text-gray-500">-- {t('cropRotation.form.chooseCrop')} --</option>
                      {allCrops.map((crop, index) => (
                        <option key={index} value={crop} className="py-2 text-sm">
                          {t(`cropRotation.crops.${crop}`, crop)}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-3 pointer-events-none">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Number of Seasons */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                    {t('cropRotation.form.numSeasons')}
                  </label>
                  <div className="relative">
                    <select
                      name="numSeasons"
                      value={formData.numSeasons}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 appearance-none bg-white dark:bg-gray-700 border-2 border-green-200 dark:border-green-800 rounded-lg sm:rounded-xl text-sm sm:text-base text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all shadow-md hover:shadow-lg cursor-pointer pr-8 sm:pr-10"
                    >
                      <option value="1">{t('cropRotation.seasons.one')}</option>
                      <option value="2">{t('cropRotation.seasons.two')}</option>
                      <option value="3">{t('cropRotation.seasons.three')}</option>
                      <option value="4">{t('cropRotation.seasons.four')}</option>
                      <option value="6">{t('cropRotation.seasons.six')}</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-3 pointer-events-none">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-5 sm:mt-6 md:mt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('cropRotation.buttons.planning')}
                    </span>
                  ) : (
                    t('cropRotation.buttons.generate')
                  )}
                </button>
              </div>
            </form>

            {/* Error Message */}
            {error && (
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-red-600 dark:text-red-400 text-center text-sm sm:text-base">{error}</p>
              </div>
            )}
            
            {/* Result Section */}
            {result && result.recommendations && (
              <div id="result-section" className="mt-8 sm:mt-12 md:mt-16">
                <div className="text-center mb-4 sm:mb-6 md:mb-8">
                  <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-green-700 dark:text-green-400 uppercase tracking-wider">
                    {t('cropRotation.result.title')}
                  </h2>
                  <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mt-1 sm:mt-2 rounded-full"></div>
                </div>

                {/* Current Crop Display */}
                <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ping" style={{ width: '100px', height: '100px', margin: '0 auto' }}></div>
                    
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex flex-col items-center justify-center text-white shadow-2xl border-4 border-white dark:border-gray-800">
                      <span className="text-3xl sm:text-4xl md:text-5xl mb-1 sm:mb-2">{getCropIcon(result.start_crop)}</span>
                      <span className="text-[10px] sm:text-xs md:text-sm font-bold text-center px-1 sm:px-2">
                        {/* {t(`cropRotation.crops.${result.start_crop}`, result.start_crop)?.substring(0, 15)}
                         */}
                         {/* {t(`cropRotation.crops.${result.start_crop}`, result.start_crop)} */}
                      </span>
                    </div>
                    
                    <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <span className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full text-[10px] sm:text-xs md:text-sm font-medium shadow-lg">
                        {t('cropRotation.result.currentCrop')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Recommendations Display */}
                {result.recommendations.length > 2 ? (
                  <>
                    {/* Mobile View - Stacked Cards */}
                    <div className="block sm:hidden">
                      <div className="space-y-4">
                        {result.recommendations.map((rec, index) => {
                          const phaseNames = {
                            'Kharif': t('cropRotation.phases.kharif'),
                            'Rabi': t('cropRotation.phases.rabi'),
                            'Summer': t('cropRotation.phases.summer'),
                            'Winter': t('cropRotation.phases.winter'),
                            'Autumn': t('cropRotation.phases.autumn'),
                            'Whole Year': t('cropRotation.phases.annual')
                          };
                          
                          return (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border-2 border-green-200 dark:border-green-700 overflow-hidden">
                              <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-2">
                                <h3 className="font-bold text-white flex items-center gap-2">
                                  {/* <span className="text-xl">{getSeasonIcon(rec.season)}</span>
                                  <span>{phaseNames[rec.season] || rec.season}</span> */}
                                  <span className="ml-auto bg-white/30 px-2 py-0.5 rounded-full text-xs">
                                    {t('cropRotation.result.phase')} {index + 1}
                                  </span>
                                </h3>
                              </div>
                              <div className="p-3">
                                <div className="space-y-2">
                                  {rec.recommended_crops?.slice(0, 3).map((crop, i) => {
                                    const cropData = rec.yields?.find(y => y.crop === crop);
                                    return (
                                      <div key={i} className={`flex items-center gap-2 p-2 rounded-lg ${
                                        i === 0 ? 'bg-amber-50 dark:bg-amber-900/30' : 'bg-gray-50 dark:bg-gray-700/50'
                                      }`}>
                                        <span className="text-xl">{getCropIcon(crop)}</span>
                                        <span className="flex-1 font-medium text-sm">{t(`cropRotation.crops.${crop}`, crop)}</span>
                                        {i === 0 && <span className="text-xs bg-amber-500 text-white px-2 py-0.5 rounded-full">{t('cropRotation.result.best')}</span>}
                                        { /* {cropData && <span className="text-xs text-gray-500">{cropData.yield} t/ha</span>} */ }
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Desktop Circle Diagram */}
                    <div className="hidden sm:flex justify-center items-center w-full py-8 md:py-12">
                      {/* Circle diagram content remains same structure but with translated text */}
                      <div className="relative w-[500px] md:w-[700px] lg:w-[900px] h-[500px] md:h-[700px] lg:h-[900px]">
                        {/* Circles and SVG arcs (same as before) */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] md:w-[600px] lg:w-[800px] h-[450px] md:h-[600px] lg:h-[800px] rounded-full border-4 border-green-300 dark:border-green-500 opacity-60 dark:opacity-80"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[550px] lg:w-[750px] h-[400px] md:h-[550px] lg:h-[750px] rounded-full border-2 border-dashed border-green-400 dark:border-green-600 opacity-40 dark:opacity-60"></div>
                        
                        {/* Phase Cards */}
                        {result.recommendations.map((rec, index) => {
                          const angle = (index * 2 * Math.PI) / result.recommendations.length - Math.PI / 2;
                          const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 180 :
                                       typeof window !== 'undefined' && window.innerWidth < 1024 ? 250 : 340;
                          const center = typeof window !== 'undefined' && window.innerWidth < 768 ? 250 :
                                        typeof window !== 'undefined' && window.innerWidth < 1024 ? 350 : 450;
                          
                          const x = center + radius * Math.cos(angle);
                          const y = center + radius * Math.sin(angle);
                          
                          const phaseNames = {
                            'Kharif': t('cropRotation.phases.kharif'),
                            'Rabi': t('cropRotation.phases.rabi'),
                            'Summer': t('cropRotation.phases.summer'),
                            'Winter': t('cropRotation.phases.winter'),
                            'Autumn': t('cropRotation.phases.autumn'),
                            'Whole Year': t('cropRotation.phases.annual')
                          };
                          
                          return (
                            <div
                              key={index}
                              className="absolute transform -translate-x-1/2 -translate-y-1/2 w-48 md:w-60 lg:w-72"
                              style={{ left: x, top: y }}
                            >
                              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-xl z-20 border-2 border-white dark:border-gray-800">
                                {index + 1}
                              </div>
                              
                              <div className="text-center mb-2">
                                {/* <span className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider bg-green-50 dark:bg-gray-800 px-3 py-1 rounded-full shadow-sm border border-green-200 dark:border-green-700">
                                  {/* {phaseNames[rec.season] || rec.season} 
                                </span> */}
                              </div>
                              
                              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border-2 border-green-200 dark:border-green-600 overflow-hidden">
                                <div className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-500 dark:to-emerald-500 px-3 py-2 text-center">
                                  <h3 className="font-bold text-white flex items-center justify-center gap-1 text-sm md:text-base">
                                    <span className="text-lg md:text-xl">{getSeasonIcon(rec.season)}</span>
                                    <span>{t('cropRotation.result.phase')} {index + 1}</span>
                                  </h3>
                                </div>
                                
                                <div className="p-2 md:p-3">
                                  <div className="space-y-1.5 md:space-y-2">
                                    {rec.recommended_crops?.slice(0, 3).map((crop, i) => {
                                      const cropData = rec.yields?.find(y => y.crop === crop);
                                      return (
                                        <div key={i} className={`flex items-center gap-1.5 md:gap-2 p-1.5 md:p-2 rounded-lg text-xs md:text-sm ${
                                          i === 0 
                                            ? 'bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700' 
                                            : 'bg-gray-50 dark:bg-gray-700/70'
                                        }`}>
                                          <span className="text-lg md:text-xl">{getCropIcon(crop)}</span>
                                          <span className="flex-1 font-medium text-gray-900 dark:text-gray-200 truncate">
                                            {t(`cropRotation.crops.${crop}`, crop)}
                                          </span>
                                          {i === 0 && (
                                            <span className="text-[10px] md:text-xs bg-amber-500 dark:bg-amber-600 text-white px-1.5 py-0.5 rounded-full shadow-sm">
                                              {t('cropRotation.result.best')}
                                            </span>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </>
                ) : (
                  /* Simple layout for 1-2 seasons */
                  <div className="space-y-4 sm:space-y-6">
                    {result.recommendations.map((rec, index) => {
                      const phaseNames = {
                        'Kharif': `🌧️ ${t('cropRotation.phases.kharif')}`,
                        'Rabi': `🌾 ${t('cropRotation.phases.rabi')}`,
                        'Summer': `☀️ ${t('cropRotation.phases.summer')}`,
                        'Winter': `❄️ ${t('cropRotation.phases.winter')}`,
                        'Autumn': `🍂 ${t('cropRotation.phases.autumn')}`,
                        'Whole Year': `📅 ${t('cropRotation.phases.annual')}`
                      };
                      
                      return (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border-2 border-green-200 dark:border-green-700 overflow-hidden transform hover:scale-[1.02] transition-transform">
                          <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-4 sm:px-6 py-3 sm:py-4">
                            <div className="flex items-center justify-between">
                              <h3 className="font-bold text-white flex items-center gap-2 text-base sm:text-lg">
                                {/* <span className="text-xl sm:text-2xl">{getSeasonIcon(rec.season)}</span> */}
                                {/* <span>{phaseNames[rec.season] || rec.season}</span> */}
                              </h3>
                              <span className="bg-white/30 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                                {t('cropRotation.result.phase')} {index + 1} of {result.recommendations.length}
                              </span>
                            </div>
                          </div>
                          <div className="p-4 sm:p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                              {rec.recommended_crops?.slice(0, 3).map((crop, i) => {
                                const cropData = rec.yields?.find(y => y.crop === crop);
                                return (
                                  <div key={i} className={`p-3 sm:p-4 rounded-lg ${
                                    i === 0 
                                      ? 'bg-amber-50 dark:bg-amber-900/30 border-2 border-amber-200 dark:border-amber-700' 
                                      : 'bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600'
                                  }`}>
                                    <div className="flex items-center gap-3">
                                      <span className="text-2xl sm:text-3xl">{getCropIcon(crop)}</span>
                                      <div className="flex-1">
                                        <div className="flex items-center gap-2 flex-wrap">
                                          <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                                            {t(`cropRotation.crops.${crop}`, crop)}
                                          </span>
                                          {i === 0 && (
                                            <span className="text-xs bg-amber-500 text-white px-2 py-0.5 rounded-full">
                                              {t('cropRotation.result.bestChoice')}
                                            </span>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    
                    {result.recommendations.length === 2 && (
                      <div className="flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                          <span>{t('cropRotation.result.phase')} 1</span>
                        </div>
                        <span className="text-xl">→</span>
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                          <span>{t('cropRotation.result.phase')} 2</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Benefits Section */}
                <div className="mt-8 sm:mt-10 md:mt-12 p-4 sm:p-5 md:p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3 sm:mb-4 flex items-center gap-2 text-base sm:text-lg">
                    <span className="text-xl sm:text-2xl">💡</span> {t('cropRotation.benefits.title')}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                    {[
                      { icon: '🌱', key: 'soilHealth' },
                      { icon: '🐛', key: 'pestControl' },
                      { icon: '💧', key: 'waterEfficiency' },
                      { icon: '📈', key: 'higherYields' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        <span className="text-green-600 text-xl sm:text-2xl">{item.icon}</span>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white text-xs sm:text-sm">
                            {t(`cropRotation.benefits.${item.key}.title`)}
                          </p>
                          <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">
                            {t(`cropRotation.benefits.${item.key}.desc`)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-green-50 dark:bg-green-900/30 rounded-xl border border-green-200 dark:border-green-800">
          <h3 className="font-semibold text-green-800 dark:text-green-300 mb-4 sm:mb-6 text-center text-lg sm:text-xl">
            🔄 {t('cropRotation.howItWorks.title')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { num: '1', key: 'selectCrop' },
              { num: '2', key: 'aiAnalysis' },
              { num: '3', key: 'viewCycle' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl sm:text-2xl mx-auto mb-2 sm:mb-3 shadow-lg">
                  {item.num}
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base mb-1">
                  {t(`cropRotation.howItWorks.${item.key}.title`)}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {t(`cropRotation.howItWorks.${item.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropRotation;
