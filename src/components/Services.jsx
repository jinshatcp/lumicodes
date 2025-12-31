import React from 'react';
import mobileAppImg from '../assets/images/mobile app.png';
import aiMlImg from '../assets/images/aiml.png';
import webDevImg from '../assets/images/website-design-and-development.png';
import customSoftImg from '../assets/images/custom software development.png';
import digitalMktImg from '../assets/images/digitalmarketing.jfif';
import brandingImg from '../assets/images/branding.png';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Services = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      src: mobileAppImg,
      title: t.mobileApp,
      desc: t.mobileAppDesc,
    },
    {
      src: aiMlImg,
      title: t.aiMl,
      desc: t.aiMlDesc,
    },
    {
      src: webDevImg,
      title: t.webDev,
      desc: t.webDevDesc,
    },
    {
      src: customSoftImg,
      title: t.customSoft,
      desc: t.customSoftDesc,
    },
    {
      src: digitalMktImg,
      title: t.digitalMkt,
      desc: t.digitalMktDesc,
    },
    {
      src: brandingImg,
      title: t.branding,
      desc: t.brandingDesc,
    },
  ];

  return (
    <section id="services" className="section-padding relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.ourServices}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t.servicesDesc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass-panel p-8 hover:bg-purple-900/20 transition-all duration-300 group border-purple-500/20 hover:-translate-y-2">
              <div className="mb-6 h-56 w-full rounded-xl bg-black/40 overflow-hidden border border-white/5 relative group-hover:border-purple-500/30 transition-colors">
                <div className="absolute inset-0 bg-purple-600/20 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity z-0" />
                <img
                  src={service.src}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 relative z-10"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
