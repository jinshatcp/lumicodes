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

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.5,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#050208]">
      {/* Background Layer with Animated Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/90 via-purple-900/20 to-black/90 z-10" />
        
        <motion.img
          src={heroBg}
          alt="Digital Solutions Background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
          initial={{ scale: 1.3, x: "-2%", y: "-2%" }}
          animate={{ 
            scale: [1.3, 1.1, 1.3],
            x: ["-5%", "5%", "-5%"],
            y: ["-3%", "3%", "-3%"],
            rotate: [0, 1, 0]
          }}
          transition={{ 
            duration: 15, // Faster movement as requested
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] z-5" />
      </div>

      {/* Content Layer */}
      <div className="container-custom relative z-20 pt-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-tight text-white"
              variants={sentence}
              initial="hidden"
              animate="visible"
            >
              <span className="block mb-2 text-white/95" style={{ textShadow: '0 0 20px rgba(168, 85, 247, 0.3)' }}>
                {titleParts[0].split("").map((char, index) => (
                  <motion.span key={index} variants={letter}>
                    {char}
                  </motion.span>
                ))}
                <motion.span variants={letter}> &</motion.span>
              </span>
              
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-cyan-400 bg-[length:200%_auto] inline-block font-black pb-2 drop-shadow-[0_10px_10px_rgba(0,0,0,0.4)]"
                animate={{ 
                  backgroundPosition: ["0% center", "200% center"]
                }}
                transition={{ 
                  backgroundPosition: { duration: 6, repeat: Infinity, ease: "linear" }
                }}
              >
                {titleParts[1].split("").map((char, index) => (
                  <motion.span key={index} variants={letter}>
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1 }}
              className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
            >
              {t.heroSubtitle}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <a href="#contact" className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-lg font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] overflow-hidden">
                <span className="relative z-10">{t.getStarted}</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a href="#services" className="px-10 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all text-lg font-semibold hover:border-purple-500/50">
                {t.exploreServices}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#050208] to-transparent z-10" />
    </section>
  );
};

export default Hero;
