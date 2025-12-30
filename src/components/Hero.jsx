import React from 'react';
import { motion } from 'framer-motion';

import heroBg from '../assets/images/hero_bg.png';

import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layer */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {/* Gradient Overlay for legibility */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/80 via-purple-900/40 to-black/80 z-10" />
        {/* Hero Image */}
        <img
          src={heroBg}
          alt="Digital Solutions Background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Content Layer */}
      <div className="container-custom relative z-20 pt-20">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-none text-white drop-shadow-2xl">
              {t.heroTitle || 'Smart Software &'}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                {language === 'ar' ? '' : 'Digital Solutions'}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
              {t.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#contact" className="btn-primary transform hover:scale-105 transition-all text-lg px-10 py-4 shadow-purple-500/50 shadow-lg">
                {t.getStarted}
              </a>
              <a href="#services" className="px-10 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all text-lg font-medium">
                {t.exploreServices}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
