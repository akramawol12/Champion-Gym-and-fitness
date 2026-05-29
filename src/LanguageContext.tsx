import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { translations, LanguageTranslations } from './translations';

type Language = 'am' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: LanguageTranslations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Try to load any previously stored language, defaulting to 'am'
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('champion_gym_lang_code');
    return (saved === 'en' || saved === 'am') ? saved : 'am';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('champion_gym_lang_code', lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => {
      const nextLang = prev === 'am' ? 'en' : 'am';
      localStorage.setItem('champion_gym_lang_code', nextLang);
      return nextLang;
    });
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
