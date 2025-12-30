import React from 'react';
import { Target, Flag, Award } from 'lucide-react';
import { ArrowRight, Code, Database, Globe } from 'lucide-react';
import aboutBg from '../assets/images/about_bg.png';
import { motion } from 'framer-motion';

import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const About = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="about" className="section-padding relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                <img src={aboutBg} alt="Pattern" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/10 to-transparent" />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-2xl overflow-hidden glass-panel p-2 border border-purple-500/30"
                    >
                        <img src={aboutBg} alt="Lumi Vision" className="rounded-xl w-full object-cover shadow-2xl shadow-purple-900/50" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            {language === 'ar' ? t.aboutTitle : <>Coding Your <span className="text-gradient">Success</span></>}
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            {t.aboutDesc}
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1 w-12 h-12 flex-shrink-0 bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-400 border border-purple-500/20">
                                    <Target />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{t.ourVision}</h3>
                                    <p className="text-gray-400 text-sm">{t.visionDesc}</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1 w-12 h-12 flex-shrink-0 bg-cyan-900/30 rounded-lg flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                                    <Flag />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{t.ourMission}</h3>
                                    <p className="text-gray-400 text-sm">{t.missionDesc}</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1 w-12 h-12 flex-shrink-0 bg-pink-900/30 rounded-lg flex items-center justify-center text-pink-400 border border-pink-500/20">
                                    <Award />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{t.whyLumi}</h3>
                                    <p className="text-gray-400 text-sm">{t.whyLumiDesc}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
