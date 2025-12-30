
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Products from './components/Products';
import About from './components/About';
import Industries from './components/Industries';
import Contact from './components/Contact';

import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen text-[var(--color-text-main)] selection:bg-purple-500 selection:text-white transition-colors duration-300">
        <Helmet>
          <title>Lumi Codes | Smart Software & Digital Solutions</title>
          <meta name="description" content="Empowering SMBs with Scalable Technology, Design & Intelligence. Custom Web, Mobile, AI, and Enterprise Software Solutions in Dubai & UAE." />
          <meta name="keywords" content="Software Development, Lumi Codes, Mobile Apps, AI, Web Design, ERP, POS, Dubai, UAE, Digital Transformation" />
        </Helmet>

        <Navbar />
        <Hero />
        <Stats />
        <About />
        <Services />
        <Industries />
        <Products />
        <Contact />

        <footer className="py-8 text-center text-gray-600 text-sm border-t border-purple-900/20 bg-black/40">
          <p>&copy; {new Date().getFullYear()} Lumi Codes. All rights reserved.</p>
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App;
