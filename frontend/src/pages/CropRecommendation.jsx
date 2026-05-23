import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import useScrollToTop from '../hooks/useScrollToTop';

const CropRecommendation = () => {
  const { t, i18n } = useTranslation();
  useScrollToTop('smooth');
  
  const [formData, setFormData] = useState({
    soil: '',
    season: '',
    temp: '',
    humidity: ''
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);

  // Season options
  const seasonOptions = ['Rainy', 'Winter', 'Summer'];
  
  // Soil type options (keep English for API)
  const soilOptions = [
    'Alluvial soil', 'Loamy soil', 'Clay soil', 'Well-drained soil',
    'Red soil', 'Clay loamy soil', 'Sandy loamy soil', 'Black soil',
    'Sandy soil', 'Shallow black soil', 'Black cotton soil', 'Cotton soil',
    'Medium black soil', 'Heavy black soil', 'Light soil', 'Heavy soil',
    'Deep soil', 'Sandy clay loamy soil', 'Silty loamy soil',
    'Salty clay loamy soil', 'Red loamy soil', 'Brown loamy soil',
    'Laterite soil', 'Well-drained Loamy soil', 'Light loamy soil',
    'Friable soil', 'Well-grained deep loamy moist soil',
    'Red lateritic loamy soil', 'Rich red loamy soil'
  ];
    useEffect(() => {
    const handleLanguageChange = () => {
      setRefreshKey(prev => prev + 1);
      setResult(null);
      setError('');
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => i18n.off('languageChanged', handleLanguageChange);
  }, [i18n]);
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

    try {
      const response = await axios.post('https://kirubha01-cropzy-ai.hf.space/predict', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data.recommended_crop) {
        const cropName = response.data.recommended_crop;
        const translatedCrop = t(`cropRecommendation.crops.${cropName}`, cropName);
        
        setResult({
          crop: translatedCrop,
          originalCrop: cropName,
          success: true,
          message: `${t('cropRecommendation.basedOn')} ${t(`cropRecommendation.soilTypes.${formData.soil}`, formData.soil)} ${t('cropRecommendation.soilCondition')} ${t(`cropRecommendation.seasons.${formData.season}`, formData.season)} ${t('cropRecommendation.seasonCondition')} ${translatedCrop}.`,
          emoji: getCropImage(cropName)
        });
      } else {
        setError(response.data.error || 'Prediction failed');
      }
    } catch (err) {
      setError(err.response?.data?.error || t('cropRecommendation.errorPrefix'));
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Helper to get crop image based on crop name
  const getCropImage = (cropName) => {
    const cropImages = {
      'Rice': '🌾', 'Wheat': '🌾', 'Maize': '🌽', 'Jute': '🌿',
      'Cotton': '🌱', 'Coconut': '🥥', 'Papaya': '🍈', 'Orange': '🍊',
      'Apple': '🍎', 'Muskmelon': '🍈', 'Watermelon': '🍉', 'Grapes': '🍇',
      'Mango': '🥭', 'Banana': '🍌', 'Pomegranate': '🍎', 'Lentil': '🫘',
      'Blackgram': '🫘', 'Mungbean': '🫘', 'Mothbeans': '🫘', 'Pigeonpeas': '🫘',
      'Kidneybeans': '🫘', 'Chickpea': '🫘', 'Coffee': '☕', 'Sugarcane': '🎋',
      'Tomato': '🍅', 'Onion': '🧅', 'Chillies': '🌶️', 'Cabbage': '🥬',
      'Pumpkin': '🎃', 'Cucumber': '🥒', 'Carrot': '🥕', 'Potato': '🥔',
      'Brinjal': '🍆', 'Cauliflower': '🥦', 'Groundnut': '🥜', 'Sunflower': '🌻'
    };
    return cropImages[cropName] || '🌱';
  };

  return (
    <div key={refreshKey} className="pt-24 pb-16 px-4 min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
             {t('cropRecommendation.aiBadge')}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('cropRecommendation.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('cropRecommendation.subtitle')}
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="p-6 md:p-8">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Soil Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('cropRecommendation.soilType')} <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="soil"
                    value={formData.soil}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  >
                    <option value="">{t('cropRecommendation.selectSoil')}</option>
                    {soilOptions.map((soil) => (
                      <option key={soil} value={soil}>
                        {t(`cropRecommendation.soilTypes.${soil}`, soil)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Season */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('cropRecommendation.season')} <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="season"
                    value={formData.season}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  >
                    <option value="">{t('cropRecommendation.selectSeason')}</option>
                    {seasonOptions.map((season) => (
                      <option key={season} value={season}>
                        {t(`cropRecommendation.seasons.${season}`, season)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Temperature */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('cropRecommendation.temperature')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    name="temp"
                    value={formData.temp}
                    onChange={handleChange}
                    required
                    placeholder="e.g., 25.5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  />
                </div>

                {/* Humidity */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('cropRecommendation.humidity')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    name="humidity"
                    value={formData.humidity}
                    onChange={handleChange}
                    required
                    placeholder="e.g., 65"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-6 rounded-xl text-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('cropRecommendation.predicting')}
                    </span>
                  ) : (
                    t('cropRecommendation.predictButton')
                  )}
                </button>
              </div>
            </form>

            {/* Error Message */}
            {error && (
              <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-red-600 dark:text-red-400 text-center">{error}</p>
              </div>
            )}

            {/* Result Section */}
            {result && result.success && (
              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
                <div className="flex flex-col items-center text-center">
                  <span className="text-7xl mb-4 animate-bounce">{result.emoji}</span>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {result.crop}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    {result.message}
                  </p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4 w-full mt-4">
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
                      <p className="text-sm text-gray-500 dark:text-gray-400">{t('cropRecommendation.soilType')}</p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {t(`cropRecommendation.soilTypes.${formData.soil}`, formData.soil)}
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
                      <p className="text-sm text-gray-500 dark:text-gray-400">{t('cropRecommendation.season')}</p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {t(`cropRecommendation.seasons.${formData.season}`, formData.season)}
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
                      <p className="text-sm text-gray-500 dark:text-gray-400">{t('cropRecommendation.temperature')}</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{formData.temp}°C</p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
                      <p className="text-sm text-gray-500 dark:text-gray-400">{t('cropRecommendation.humidity')}</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{formData.humidity}%</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Info Cards Section */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center text-xl">
                🌡️
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t('cropRecommendation.temperature')}</p>
                <p className="font-semibold text-gray-900 dark:text-white">{t('cropRecommendation.optimalTemp')}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-xl">
                💧
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t('cropRecommendation.humidity')}</p>
                <p className="font-semibold text-gray-900 dark:text-white">{t('cropRecommendation.optimalHumidity')}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-xl">
                🌾
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t('cropRecommendation.soilType')}</p>
                <p className="font-semibold text-gray-900 dark:text-white">{t('cropRecommendation.soilCount')}</p>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default CropRecommendation;
