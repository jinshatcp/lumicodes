import React from 'react';
import { packagesData } from '../data/servicesData';

const Pricing = () => {
    return (
        <section id="packages" className="pricing-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Our Packages</h2>
                    <p className="section-subtitle">Choose the perfect plan for your business growth</p>
                </div>

                <div className="pricing-grid">
                    {packagesData.map((pkg, index) => (
                        <div key={index} className={`pricing-card ${pkg.highlight ? 'highlight' : ''}`}>
                            {pkg.highlight && <div className="popular-badge">Most Popular</div>}
                            <div className="pkg-header">
                                <div className="pkg-icon">{pkg.icon}</div>
                                <h3>{pkg.title}</h3>
                                <span className="pkg-subtitle">{pkg.subtitle}</span>
                            </div>

                            <ul className="pkg-features">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>

                            <div className="pkg-action">
                                <a href="#contact" className={`btn ${pkg.highlight ? 'btn-primary' : 'btn-outline'}`}>
                                    Get Started
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .pricing-section {
          padding: 5rem 0;
          background-color: var(--color-secondary-light); /* Slightly lighter bg for contrast */
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .pricing-card {
          background: var(--color-secondary);
          padding: 2.5rem;
          border-radius: 12px;
          text-align: center;
          position: relative;
          border: 1px solid rgba(255,255,255,0.05);
          display: flex;
          flex-direction: column;
        }

        .pricing-card.highlight {
          border: 2px solid var(--color-primary);
          transform: scale(1.05);
          z-index: 2;
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        }

        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--color-primary);
          color: white;
          padding: 0.25rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .pkg-header {
          margin-bottom: 2rem;
        }

        .pkg-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .pkg-header h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--color-white);
        }

        .pkg-subtitle {
          color: var(--color-accent);
          font-weight: 500;
        }

        .pkg-features {
          list-style: none;
          margin-bottom: 2.5rem;
          flex-grow: 1;
        }

        .pkg-features li {
          margin-bottom: 1rem;
          color: var(--color-text-muted);
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .pkg-features li:last-child {
          border-bottom: none;
        }

        @media (max-width: 992px) {
          .pricing-card.highlight {
            transform: scale(1);
          }
        }
      `}</style>
        </section>
    );
};

export default Pricing;
