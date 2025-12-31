import React from 'react';
import posImg from '../assets/images/pos.png';
import hrmsImg from '../assets/images/hrms.png';
import inventoryImg from '../assets/images/Inventory.png';
import erpImg from '../assets/images/erp.jfif';
import ermImg from '../assets/images/erM.jpg';
import bookingImg from '../assets/images/booking.png';
import invoiceImg from '../assets/images/invoice.png';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Products = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const products = [
        {
            src: posImg,
            title: 'Lumi POS',
            desc: language === 'ar' ? 'نقاط البيع للتجزئة والمطاعم' : 'Point of Sale for Retail & Dining',
        },
        {
            src: hrmsImg,
            title: 'Lumi HRMS',
            desc: language === 'ar' ? 'نظام إدارة الموارد البشرية' : 'Human Resource Management',
        },
        {
            src: inventoryImg,
            title: 'Lumi Inventory',
            desc: language === 'ar' ? 'مراقبة المخزون وسلسلة التوريد' : 'Stock & Supply Chain Control',
        },
        {
            src: erpImg,
            title: 'Lumi ERP',
            desc: language === 'ar' ? 'تخطيط موارد المؤسسات' : 'Enterprise Resource Planning',
        },
        {
            src: ermImg,
            title: 'Lumi ERM',
            desc: language === 'ar' ? 'إدارة علاقات الموظفين' : 'Employee Relationship Mgmt',
        },
        {
            src: bookingImg,
            title: 'Lumi Booking',
            desc: language === 'ar' ? 'نظام الحجوزات والمواعيد' : 'Appointment & Reservation System',
        },
        {
            src: invoiceImg,
            title: 'Lumi Billing',
            desc: language === 'ar' ? 'الفوترة والمحاسبة' : 'Invoicing & Accounting',
        },
    ];

    return (
        <section id="products" className="section-padding relative">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.ourProducts}</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">{t.productsDesc}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <div key={index} className="glass-panel p-4 pb-8 text-center hover:-translate-y-1 transition-transform cursor-default border-purple-500/20 hover:bg-purple-900/20 group">
                            <div className="w-full h-40 rounded-lg bg-black/50 mb-4 overflow-hidden relative border border-white/5">
                                <img src={product.src} alt={product.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                            </div>
                            <h3 className="font-bold text-lg mb-1">{product.title}</h3>
                            <p className="text-xs text-gray-500 uppercase tracking-widest">{product.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
