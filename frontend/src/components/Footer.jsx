import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-green-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-12 border-t border-green-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/src/assets/logo.png" 
                alt="Cropzy Logo" 
                className="h-8 w-auto object-contain transform group-hover:scale-110 transition"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) {
                    e.target.nextSibling.style.display = 'block';
                  }
                }}
              />
              <span className="font-bold text-xl text-gray-800 dark:text-white">
                Cropzy<span className="text-green-600 dark:text-amber-500">AI</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-800 dark:text-white mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <span>📞</span>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <span>✉️</span>
                <span>support@cropzy.ai</span>
              </li>
              
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-100 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2026 CropzyAI. {t('footer.rights')}
          </p>
          <p className="mt-2 text-sm text-gray-400 dark:text-gray-500">
            {t('footer.made')} • தமிழ் • മലയാളം • తెలుగు • हिन्दी • ಕನ್ನಡ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;