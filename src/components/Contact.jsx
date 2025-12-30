import React from 'react';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Contact = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="contact" className="section-padding">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            {language === 'ar' ? t.contactTitle : "Let's Build"} <br />
                            <span className="text-gradient">
                                {language === 'ar' ? t.contactTitle2 : "Something Great"}
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            {t.contactDesc || "Ready to transform your business? Get in touch with Lumi Codes. We are where ideas become intelligent solutions."}
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                    <Mail />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">{t.emailUs || "Email Us"}</div>
                                    <div className="text-xl font-medium">lumicodes25@gmail.com</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                    <Phone />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">{t.callUs || "Call Us"}</div>
                                    <div className="text-xl font-medium" style={{ direction: 'ltr', unicodeBidi: 'embed', textAlign: language === 'ar' ? 'right' : 'left' }}>+971 55 623 0065</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel p-8">
                        <form action="https://formsubmit.co/lumicodes25@gmail.com" method="POST" className="glass-panel p-8 md:p-12">
                            <input type="text" name="_honey" style={{ display: 'none' }} />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_next" value={window.location.href} />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">{t.name || "Name"}</label>
                                    <input type="text" name="name" required className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-600" placeholder={t.namePlaceholder || "John Doe"} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">{t.email || "Email"}</label>
                                    <input type="email" name="email" required className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-600" placeholder={t.emailPlaceholder || "john@example.com"} />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">{t.subject || "Subject"}</label>
                                <input type="text" name="subject" required className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-600" placeholder={t.subjectPlaceholder || "Project Inquiry"} />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">{t.message || "Message"}</label>
                                <textarea name="message" required rows="4" className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-600" placeholder={t.messagePlaceholder || "Tell us about your project..."}></textarea>
                            </div>

                            <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                                {t.sendMessage || "Send Message"} <Send size={18} className={language === 'ar' ? 'rotate-180' : ''} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
