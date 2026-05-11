import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import useScrollToTop from '../hooks/useScrollToTop';

const DiseasePrediction = () => {
  const { t } = useTranslation();
  useScrollToTop('smooth');
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError(t('cropDisease.invalidFileType'));
        return;
      }
      
      if (file.size > 5 * 1024 * 1024) {
        setError(t('cropDisease.fileTooLarge'));
        return;
      }
      
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
      setError('');
      setResult(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedImage) {
      setError(t('cropDisease.noImageSelected'));
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await axios.post('https://tidy-cougars-sell.loca.lt/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.success) {
        const diseaseKey = response.data.disease;
        const confidence = response.data.confidence;
        
        // Get translated disease name (without crop prefix)
        const displayDisease = t(`cropDisease.diseaseNames.${diseaseKey}`, getDiseaseNameWithoutCrop(diseaseKey));
        const isHealthy = diseaseKey.toLowerCase().includes('healthy');
        
        // Get crop name separately
        const cropName = getCropName(diseaseKey);
        
        setResult({
          success: true,
          diseaseKey: diseaseKey,
          displayDisease: displayDisease,
          cropName: cropName,
          confidence: confidence,
          treatment: t(`cropDisease.treatments.${diseaseKey}`, response.data.treatment),
          prevention: t(`cropDisease.preventions.${diseaseKey}`, response.data.prevention),
          isHealthy: isHealthy,
          emoji: getDiseaseEmoji(diseaseKey, isHealthy)
        });
      } else {
        setError(response.data.message || t('cropDisease.predictionFailed'));
      }
    } catch (err) {
      setError(err.response?.data?.message || t('cropDisease.errorPrefix'));
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const getCropName = (diseaseKey) => {
    const parts = diseaseKey.split('___');
    if (parts.length >= 1) {
      return parts[0].replace(/_/g, ' ').replace(/[()]/g, '').replace(',', '');
    }
    return '';
  };

  const getDiseaseNameWithoutCrop = (diseaseKey) => {
    const parts = diseaseKey.split('___');
    if (parts.length >= 2) {
      let disease = parts[1].replace(/_/g, ' ');
      disease = disease.replace(/[()]/g, '');
      if (disease.toLowerCase().includes('healthy')) {
        disease = 'Healthy';
      }
      return disease;
    }
    return diseaseKey;
  };

  const getDiseaseEmoji = (diseaseKey, isHealthy) => {
    if (isHealthy) return '🌿✅';
    
    const diseaseLower = diseaseKey.toLowerCase();
    
    if (diseaseLower.includes('rust')) return '🟫🍂';
    if (diseaseLower.includes('blight')) return '🥀⚠️';
    if (diseaseLower.includes('spot')) return '🔴🍃';
    if (diseaseLower.includes('mildew')) return '⚪🍂';
    if (diseaseLower.includes('rot')) return '🥀💀';
    if (diseaseLower.includes('virus')) return '🦠🌱';
    if (diseaseLower.includes('mosaic')) return '🎨🍃';
    if (diseaseLower.includes('mite')) return '🕷️🍃';
    if (diseaseLower.includes('scab')) return '🔘🍎';
    if (diseaseLower.includes('canker')) return '🕳️🌳';
    if (diseaseLower.includes('scorch')) return '🔥🍃';
    
    return '⚠️🌿';
  };

  const getSeverityColor = (confidence, isHealthy) => {
    if (isHealthy) return 'text-green-600 dark:text-green-400';
    if (confidence > 90) return 'text-red-600 dark:text-red-400';
    if (confidence > 70) return 'text-orange-600 dark:text-orange-400';
    return 'text-yellow-600 dark:text-yellow-400';
  };

  const resetForm = () => {
    setSelectedImage(null);
    setImagePreview(null);
    setResult(null);
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <div key={refreshKey} className="pt-24 pb-16 px-4 min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
            🔬 {t('cropDisease.aiBadge')}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('cropDisease.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('cropDisease.subtitle')}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="p-6 md:p-8">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('cropDisease.uploadImage')} <span className="text-red-500">*</span>
                  </label>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  
                  {!imagePreview ? (
                    <div 
                      onClick={triggerFileUpload}
                      className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg hover:border-green-500 dark:hover:border-green-500 transition-all cursor-pointer bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <div className="space-y-2 text-center">
                        <div className="flex justify-center">
                          <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          <span className="font-medium text-green-600 hover:text-green-500 cursor-pointer">
                            {t('cropDisease.uploadButton')}
                          </span>
                          <span className="pl-1">{t('cropDisease.dragDrop')}</span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {t('cropDisease.fileRequirements')}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full max-h-96 object-contain rounded-lg border border-gray-200 dark:border-gray-700"
                      />
                      <button
                        type="button"
                        onClick={resetForm}
                        className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition shadow-lg"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-start gap-3">
                    <div className="text-blue-600 dark:text-blue-400 text-xl">💡</div>
                    <div className="flex-1">
                      <p className="text-sm text-blue-800 dark:text-blue-300 font-medium mb-1">
                        {t('cropDisease.tip')}
                      </p>
                      <p className="text-xs text-blue-600 dark:text-blue-400">
                        {t('cropDisease.tipText')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={loading || !selectedImage}
                  className="w-full bg-gradient-to-r from-red-600 to-rose-600 text-white py-4 px-6 rounded-xl text-lg font-semibold hover:from-red-700 hover:to-rose-700 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('cropDisease.analyzing')}
                    </span>
                  ) : (
                    t('cropDisease.analyzeButton')
                  )}
                </button>
              </div>
            </form>

            {error && (
              <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-red-600 dark:text-red-400 text-center">{error}</p>
              </div>
            )}

            {result && result.success && (
              <div className="mt-8 animate-fadeIn">
                <div className={`p-6 rounded-xl border-2 ${
                  result.isHealthy 
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                    : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                }`}>
                  <div className="flex flex-col items-center text-center">
                    <span className="text-7xl mb-4 animate-bounce">{result.emoji}</span>
                    
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {result.isHealthy 
                        ? t('cropDisease.healthyPlant')
                        : t('cropDisease.diseaseDetected')}
                    </h3>
                    
                    {!result.isHealthy && (
                      <>
                        <div className="mb-4">
                          <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            {result.displayDisease}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {/* {t('cropDisease.onCrop')}: {result.cropName} */}
                          </p>
                          <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-gray-800 rounded-full">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {t('cropDisease.confidence')}:
                            </span>
                            <span className={`font-bold ${getSeverityColor(result.confidence, result.isHealthy)}`}>
                              {result.confidence}%
                            </span>
                          </div>
                        </div>
                      </>
                    )}

                    {!result.isHealthy && (
                      <div className="grid md:grid-cols-2 gap-4 w-full mt-4 text-left">
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl">💊</span>
                            <h4 className="font-bold text-gray-900 dark:text-white">
                              {t('cropDisease.treatment')}
                            </h4>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            {result.treatment}
                          </p>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl">🛡️</span>
                            <h4 className="font-bold text-gray-900 dark:text-white">
                              {t('cropDisease.prevention')}
                            </h4>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            {result.prevention}
                          </p>
                        </div>
                      </div>
                    )}

                    {result.isHealthy && (
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm w-full mt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">🌱</span>
                          <h4 className="font-bold text-gray-900 dark:text-white">
                            {t('cropDisease.healthyTip')}
                          </h4>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          {t('cropDisease.healthyTipText')}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={resetForm}
                    className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                  >
                    {t('cropDisease.newAnalysis')}
                  </button>
                  <button
                    onClick={() => {
                      resetForm();
                      window.location.reload();
                    }}
                    className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition"
                  >
                    {t('cropDisease.uploadAnother')}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center text-xl">🦠</div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t('cropDisease.diseasesCovered')}</p>
                <p className="font-semibold text-gray-900 dark:text-white">50+ {t('cropDisease.diseases')}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-xl">🌾</div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t('cropDisease.cropsSupported')}</p>
                <p className="font-semibold text-gray-900 dark:text-white">15+ {t('cropDisease.crops')}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-xl">⚡</div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t('cropDisease.responseTime')}</p>
                <p className="font-semibold text-gray-900 dark:text-white">{t('cropDisease.quickAnalysis')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseasePrediction;