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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#050208]">
      {/* Background Layer */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/90 via-purple-900/30 to-black/90 z-10" />
        <motion.img
          src={heroBg}
          alt="Digital Solutions Background"
          className="w-full h-full object-cover opacity-60"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ 
            scale: [1.2, 1.3, 1.2],
            opacity: 0.4,
            y: [0, -30, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear",
            opacity: { duration: 3 }
          }}
        />
      </div>

      {/* Content Layer */}
      <div className="container-custom relative z-20 pt-20">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold mb-8 tracking-tighter leading-none text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
              {language === 'ar' ? (
                <motion.span
                  variants={itemVariants}
                  className="block"
                >
                  {t.heroTitle}
                </motion.span>
              ) : (
                <>
                  <motion.span 
                    variants={itemVariants}
                    className="block mb-4 text-white/90"
                    style={{ textShadow: '0 0 20px rgba(168, 85, 247, 0.4)' }}
                  >
                    {titleParts[0]} &
                  </motion.span>
                  
                  <motion.span 
                    variants={itemVariants}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-purple-500 bg-[length:200%_auto] inline-block font-black pb-4"
                    animate={{ 
                      backgroundPosition: ["0% center", "200% center"],
                      filter: ["drop-shadow(0 0 10px rgba(168, 85, 247, 0.3))", "drop-shadow(0 0 20px rgba(168, 85, 247, 0.6))", "drop-shadow(0 0 10px rgba(168, 85, 247, 0.3))"]
                    }}
                    transition={{ 
                      backgroundPosition: { duration: 5, repeat: Infinity, ease: "linear" },
                      filter: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    {titleParts[1] || 'Digital Solutions'}
                  </motion.span>
                </>
              )}
            </h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed tracking-wide"
            >
              {t.heroSubtitle}
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-8"
            >
              <a href="#contact" className="group relative px-12 py-5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xl font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]">
                <span className="relative z-10">{t.getStarted}</span>
                <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="#services" className="px-12 py-5 rounded-full border-2 border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all text-xl font-semibold hover:border-purple-500/50">
                {t.exploreServices}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] z-0 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] z-0 animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#050208] via-[#050208]/80 to-transparent z-10" />
    </section>
  );
};

export default Hero;
