import React from 'react';
import { motion } from 'framer-motion';

import heroBg from '../assets/images/hero_bg.png';

import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Helper to split English title if necessary
  const titleParts = t.heroTitle && t.heroTitle.includes('&') 
    ? t.heroTitle.split('&') 
    : ['Smart Software ', ' Digital Solutions'];

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#050208]">
      {/* Background Layer */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/80 via-purple-900/40 to-black/80 z-10" />
        <motion.img
          src={heroBg}
          alt="Digital Solutions Background"
          className="w-full h-full object-cover opacity-60"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ 
            scale: [1.1, 1.2, 1.1],
            opacity: 0.6,
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "easeInOut",
            opacity: { duration: 2 }
          }}
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight text-white drop-shadow-2xl">
              {language === 'ar' ? (
                <motion.span
                  initial={{ opacity: 0, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 1 }}
                >
                  {t.heroTitle}
                </motion.span>
              ) : (
                <>
                  <span className="block mb-2">{titleParts[0]} &</span>
                  <motion.span 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-[length:200%_auto] inline-block"
                    animate={{ 
                      backgroundPosition: ["0% center", "200% center"],
                      scale: [1, 1.05, 1],
                      rotate: [0, 1, 0, -1, 0]
                    }}
                    transition={{ 
                      backgroundPosition: { duration: 4, repeat: Infinity, ease: "linear" },
                      scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    {titleParts[1] || 'Digital Solutions'}
                  </motion.span>
                </>
              )}
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md"
            >
              {t.heroSubtitle}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <a href="#contact" className="btn-primary transform hover:scale-105 transition-all text-lg px-10 py-4 shadow-purple-500/50 shadow-lg">
                {t.getStarted}
              </a>
              <a href="#services" className="px-10 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all text-lg font-medium">
                {t.exploreServices}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050208] to-transparent z-10" />
    </section>
  );
};

export default Hero;
