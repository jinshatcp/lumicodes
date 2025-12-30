import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import '../App.css'; // OR make a specific CSS file if needed

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Solutions', href: '#solutions' },
        { name: 'Packages', href: '#packages' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <a href="#" className="logo">
                    <img src={logo} alt="Lumicodes" />
                    <span>Lumicodes</span>
                </a>

                <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} onClick={() => setMobileMenuOpen(false)}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href="#contact" className="btn btn-primary nav-cta">Get Started</a>
                </nav>
            </div>

            <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: all 0.3s ease;
          background: transparent;
        }

        .header.scrolled {
          background: rgba(10, 25, 47, 0.95);
          backdrop-filter: blur(10px);
          padding: 1rem 0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 700;
          font-size: 1.5rem;
          color: var(--color-white);
        }

        .logo img {
          height: 40px;
          width: auto;
        }

        .nav ul {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav a {
          color: var(--color-text);
          font-weight: 500;
          position: relative;
        }

        .nav a:hover, .nav a.active {
          color: var(--color-accent);
        }
        
        .nav-cta {
          margin-left: 2rem;
        }

        .mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 6px;
          cursor: pointer;
        }

        .bar {
          width: 25px;
          height: 2px;
          background-color: var(--color-white);
          transition: 0.3s;
        }

        @media (max-width: 768px) {
          .nav {
            position: fixed;
            top: 70px;
            right: -100%;
            width: 80%;
            height: calc(100vh - 70px);
            background: var(--color-secondary-light);
            flex-direction: column;
            padding: 2rem;
            transition: 0.4s ease;
            display: flex; /* override default */
            align-items: flex-start;
          }

          .nav.open {
            right: 0;
          }

          .nav ul {
            flex-direction: column;
            width: 100%;
            align-items: flex-start;
          }

          .nav-cta {
            margin-left: 0;
            margin-top: 2rem;
            width: 100%;
            text-align: center;
          }

          .mobile-toggle {
            display: flex;
          }
        }
      `}</style>
        </header>
    );
};

export default Header;
