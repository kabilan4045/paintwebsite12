import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <Link to="/">
                            <img src="/logo.jpg" alt="Yashwanth Colour Coatings" />
                            <div className="logo-text">
                                <div className="logo-text__line1">Yashwanth</div>
                                <div className="logo-text__line2">Colour Coatings</div>
                            </div>
                        </Link>
                    </div>

                    <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
                        <button
                            className="mobile-menu-close"
                            onClick={() => setMobileMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                        <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                        <Link to="/products" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Products</Link>
                        <Link to="/services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                        <Link to="/gallery" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
                        <Link to="/brochure" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Brochure</Link>
                        <Link to="/faqs" className="nav-link" onClick={() => setMobileMenuOpen(false)}>FAQs</Link>
                        <Link to="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
                    </nav>

                    <div className="header-actions">
                        <Link to="/contact" className="btn-cta">Book a Free Site Visit</Link>

                        <button
                            className="mobile-menu-toggle"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
