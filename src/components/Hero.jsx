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
        staggerChildren: 0.4,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, filter: 'blur(10px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#050208]">
      {/* Background Layer with Animated Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/95 via-purple-900/30 to-black/95 z-10" />
        
        {/* The "Moving" Hero Image */}
        <motion.img
          src={heroBg}
          alt="Digital Solutions Background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
          initial={{ scale: 1.4, x: "-5%", y: "-5%" }}
          animate={{ 
            scale: [1.4, 1.2, 1.4, 1.3, 1.4],
            x: ["-5%", "5%", "0%", "-5%", "-5%"],
            y: ["-5%", "0%", "5%", "0%", "-5%"],
            rotate: [0, 1, -1, 0.5, 0]
          }}
          transition={{ 
            duration: 35, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Additional depth Layer */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] z-5" />
      </div>

      {/* Content Layer */}
      <div className="container-custom relative z-20 pt-20">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-extrabold mb-8 tracking-tighter leading-[0.9] text-white">
              {language === 'ar' ? (
                <motion.span
                  variants={itemVariants}
                  className="block drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)]"
                >
                  {t.heroTitle}
                </motion.span>
              ) : (
                <>
                  <motion.span 
                    variants={itemVariants}
                    className="block mb-4 text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
                    style={{ textShadow: '0 0 30px rgba(168, 85, 247, 0.5)' }}
                  >
                    {titleParts[0]} &
                  </motion.span>
                  
                  <motion.span 
                    variants={itemVariants}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-cyan-400 bg-[length:200%_auto] inline-block font-black pb-4 drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)]"
                    animate={{ 
                      backgroundPosition: ["0% center", "200% center"]
                    }}
                    transition={{ 
                      backgroundPosition: { duration: 6, repeat: Infinity, ease: "linear" }
                    }}
                  >
                    {titleParts[1] || 'Digital Solutions'}
                  </motion.span>
                </>
              )}
            </h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-4xl text-gray-300 mb-14 max-w-4xl mx-auto font-light leading-relaxed tracking-wider"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
            >
              {t.heroSubtitle}
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-10"
            >
              <a href="#contact" className="group relative px-14 py-6 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-2xl font-black transition-all hover:scale-110 hover:shadow-[0_0_50px_rgba(168,85,247,0.7)] overflow-hidden">
                <span className="relative z-10">{t.getStarted}</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a href="#services" className="px-14 py-6 rounded-full border-2 border-white/30 bg-white/5 hover:bg-white/10 backdrop-blur-xl transition-all text-2xl font-bold hover:border-purple-500/80">
                {t.exploreServices}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Floating Particles/Glow Effects */}
      <motion.div 
        animate={{ 
          y: [0, -50, 0],
          x: [0, 30, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] z-0" 
      />
      <motion.div 
        animate={{ 
          y: [0, 50, 0],
          x: [0, -30, 0],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 15, repeat: Infinity, delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] z-0" 
      />
      
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#050208] via-[#050208]/90 to-transparent z-10" />
    </section>
  );
};

export default Hero;
