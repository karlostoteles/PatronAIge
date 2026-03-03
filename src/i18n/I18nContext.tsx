import React, { createContext, useContext, useState, useCallback } from 'react';
import { translations, type Language } from './translations';

interface I18nContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType>({
    lang: 'en',
    setLang: () => { },
    t: (key: string) => key,
});

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState<Language>(() => {
        const saved = localStorage.getItem('patronaige_lang');
        return (saved as Language) || 'en';
    });

    const handleSetLang = useCallback((newLang: Language) => {
        setLang(newLang);
        localStorage.setItem('patronaige_lang', newLang);
    }, []);

    const t = useCallback((key: string): string => {
        return translations[lang]?.[key] || translations['en']?.[key] || key;
    }, [lang]);

    return (
        <I18nContext.Provider value={{ lang, setLang: handleSetLang, t }}>
            {children}
        </I18nContext.Provider>
    );
};

export const useI18n = () => useContext(I18nContext);
