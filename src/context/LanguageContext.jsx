import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
    const [dir, setDir] = useState(language === 'ar' ? 'rtl' : 'ltr');

    useEffect(() => {
        localStorage.setItem('language', language);
        const direction = language === 'ar' ? 'rtl' : 'ltr';
        setDir(direction);
        document.documentElement.lang = language;
        document.documentElement.dir = direction;
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, dir }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
