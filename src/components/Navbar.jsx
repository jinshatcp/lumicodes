import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/logo.png';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language];

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark');

        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    // Initialize theme on mount - ensure dark class is present if theme is dark
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);


    return (
        <nav className="fixed w-full z-50 glass-panel" style={{ borderRadius: 0, borderTop: 'none', borderLeft: 'none', borderRight: 'none', background: 'var(--color-surface)' }}>
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="Lumi Codes Logo" className="w-24 h-auto object-contain" />
                        <span className="font-bold text-xl tracking-tight text-[var(--color-text-main)]">LUMI CODES</span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            <a href="#home" className="hover:text-purple-400 px-3 py-2 transition-colors text-[var(--color-text-main)]">{t.home || 'Home'}</a>
                            <a href="#about" className="hover:text-purple-400 px-3 py-2 transition-colors text-[var(--color-text-main)]">{t.about || 'About'}</a>
                            <a href="#services" className="hover:text-purple-400 px-3 py-2 transition-colors text-[var(--color-text-main)]">{t.services || 'Services'}</a>
                            <a href="#products" className="hover:text-purple-400 px-3 py-2 transition-colors text-[var(--color-text-main)]">{t.products || 'Products'}</a>
                            <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.25rem' }}>{t.contact || 'Contact Us'}</a>

                            <button onClick={toggleLanguage} className="p-2 rounded-full hover:bg-gray-200/20 text-[var(--color-text-main)] transition-colors font-bold w-10 h-10 flex items-center justify-center">
                                {language === 'en' ? 'AR' : 'EN'}
                            </button>

                            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200/20 text-[var(--color-text-main)] transition-colors">
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <button onClick={toggleLanguage} className="p-2 rounded-full hover:bg-gray-200/20 text-[var(--color-text-main)] transition-colors font-bold w-10 h-10 flex items-center justify-center">
                            {language === 'en' ? 'AR' : 'EN'}
                        </button>
                        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200/20 text-[var(--color-text-main)] transition-colors">
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-[var(--color-text-main)] hover:text-purple-400 transition-colors"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-panel border-t border-gray-700"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                            <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-purple-400 block px-3 py-2 text-base font-medium text-[var(--color-text-main)]">{t.home || 'Home'}</a>
                            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-purple-400 block px-3 py-2 text-base font-medium text-[var(--color-text-main)]">{t.about || 'About'}</a>
                            <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-purple-400 block px-3 py-2 text-base font-medium text-[var(--color-text-main)]">{t.services || 'Services'}</a>
                            <a href="#products" onClick={() => setIsOpen(false)} className="hover:text-purple-400 block px-3 py-2 text-base font-medium text-[var(--color-text-main)]">{t.products || 'Products'}</a>
                            <a href="#contact" onClick={() => setIsOpen(false)} className="mt-4 btn-primary inline-block w-full text-center">{t.contact || 'Contact Us'}</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
