import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types/content';
import { translations } from '../i18n/translations';
import { TranslationKeys } from '../i18n/types';

interface LanguageContextType {
  language: Language;
  direction: 'ltr' | 'rtl';
  t: (key: keyof TranslationKeys) => string;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load initial language from localStorage or default to English
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('entity_language') as Language;
    return saved === 'ar' || saved === 'en' ? saved : 'en';
  });

  const direction = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('entity_language', language);
    
    // Set HTML dir attribute
    document.documentElement.dir = direction;
    document.documentElement.lang = language;

    // Toggle body font classes
    if (language === 'ar') {
      document.body.classList.remove('font-sans');
      document.body.classList.add('font-arabic');
    } else {
      document.body.classList.remove('font-arabic');
      document.body.classList.add('font-sans');
    }
  }, [language, direction]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = (key: keyof TranslationKeys): string => {
    return translations[language][key] || translations['en'][key] || '';
  };

  return (
    <LanguageContext.Provider value={{ language, direction, t, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
