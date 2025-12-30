import React from 'react';
import { motion } from 'framer-motion';
import industriesBg from '../assets/images/industries_bg.png';
import retailImg from '../assets/images/Retail & E-Commerce.jpg';
import realEstateImg from '../assets/images/Real Estate.jfif';
import healthImg from '../assets/images/health.jfif';
import educationImg from '../assets/images/education.jpg';
import logisticImg from '../assets/images/logistic.jfif';
import corporateImg from '../assets/images/corporates.jpg';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Industries = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const industries = [
        { src: retailImg, name: t.retail },
        { src: realEstateImg, name: t.realEstate },
        { src: healthImg, name: t.healthcare },
        { src: educationImg, name: t.education },
        { src: logisticImg, name: t.logistics },
        { src: corporateImg, name: t.corporate },
    ];

    return (
        <section className="section-padding relative">
            <div className="absolute inset-0 z-0">
                <img src={industriesBg} alt="Industries Background" className="w-full h-full object-cover opacity-10 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050208] via-transparent to-[#050208]" />
            </div>

            <div className="container-custom relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        {language === 'ar' ? t.industriesTitle : <>Industries <span className="text-gradient">We Serve</span></>}
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-12">
                        {t.industriesSubtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {industries.map((ind, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-4 flex flex-col items-center justify-center gap-4 hover:bg-purple-500/10 transition-colors border-purple-500/20 group cursor-pointer"
                        >
                            <div className="w-full h-32 rounded-lg overflow-hidden relative">
                                <img src={ind.src} alt={ind.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="font-semibold text-sm">{ind.name}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
