import React from 'react';
import { motion } from 'framer-motion';

import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Stats = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const stats = [
        { id: 1, value: '120+', label: t.projectDelivery },
        { id: 2, value: '98%', label: t.clientSatisfaction },
        { id: 3, value: '25+', label: t.softwareProducts },
    ];

    return (
        <section className="py-10 bg-black/20 border-y border-white/5">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="p-4"
                        >
                            <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-purple-300 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
