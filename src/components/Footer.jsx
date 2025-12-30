import React from 'react';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2>Lumicodes</h2>
                        <p>Empowering businesses with cutting-edge digital solutions. From web development to digital marketing, we are your partner in growth.</p>
                    </div>

                    <div className="footer-links">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">Digital Marketing</a></li>
                            <li><a href="#">IT Support</a></li>
                            <li><a href="#">Branding</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <p>Dubai, UAE</p>
                        <p>lumicodes25@gmail.com</p>
                        <div className="social-icons">
                            {/* In a real app, use Icons here */}
                            <a href="#">IG</a>
                            <a href="#">FB</a>
                            <a href="#">LI</a>
                            <a href="#">X</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Lumicodes. All rights reserved.</p>
                </div>
            </div>

            <style>{`
                .footer {
                    background-color: var(--color-secondary-light);
                    padding: 4rem 0 2rem;
                    margin-top: 4rem;
                }

                .footer-content {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr 1fr 1fr;
                    gap: 3rem;
                    margin-bottom: 3rem;
                }

                .footer-brand h2 {
                    color: var(--color-primary);
                    margin-bottom: 1rem;
                }

                .footer-brand p {
                    color: var(--color-text-muted);
                }

                .footer-links h3, .footer-contact h3 {
                    color: var(--color-white);
                    margin-bottom: 1.5rem;
                    font-size: 1.2rem;
                }

                .footer-links ul li {
                    margin-bottom: 0.75rem;
                }

                .footer-links a {
                    color: var(--color-text-muted);
                    transition: color 0.3s;
                }

                .footer-links a:hover {
                    color: var(--color-primary);
                }

                .footer-contact p {
                    color: var(--color-text-muted);
                    margin-bottom: 0.5rem;
                }

                .social-icons {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }

                .social-icons a {
                    color: var(--color-white);
                    font-weight: bold;
                }

                .footer-bottom {
                    border-top: 1px solid rgba(255,255,255,0.1);
                    padding-top: 2rem;
                    text-align: center;
                    color: var(--color-text-muted);
                    font-size: 0.9rem;
                }

                @media (max-width: 992px) {
                    .footer-content {
                        grid-template-columns: 1fr 1fr;
                    }
                }

                @media (max-width: 600px) {
                    .footer-content {
                        grid-template-columns: 1fr;
                        text-align: center;
                    }
                    
                    .social-icons {
                        justify-content: center;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
