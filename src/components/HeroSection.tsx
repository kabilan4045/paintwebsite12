import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Transform Your Space with",
            highlight: "Premium Paints",
            description: "Trusted manufacturer of industrial, automotive, wood & decorative coatings since 1995. Delivering premium quality finishes for every surface.",
            bgGradient: "linear-gradient(135deg, #2563EB 0%, #1E3A8A 100%)"
        },
        {
            title: "Excellence in Every",
            highlight: "Coating Solution",
            description: "From industrial epoxy to decorative finishes, we provide comprehensive paint solutions for all your needs with unmatched quality.",
            bgGradient: "linear-gradient(135deg, #DC2626 0%, #991B1B 100%)"
        },
        {
            title: "Your Trusted Partner for",
            highlight: "Quality Finishes",
            description: "30+ years of expertise in manufacturing high-performance paints and coatings. Innovation meets reliability in every product.",
            bgGradient: "linear-gradient(135deg, #059669 0%, #064E3B 100%)"
        }
    ];

    // Auto-change slides every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section className="hero-section" style={{ background: slides[currentSlide].bgGradient }}>
            <div className="hero-container">
                <div className="hero-content">
                    {/* Text Content */}
                    <div className="hero-text">
                        <h1 className="hero-title">
                            {slides[currentSlide].title} <span className="highlight-text">{slides[currentSlide].highlight}</span>
                        </h1>
                        <p className="hero-description">
                            {slides[currentSlide].description}
                        </p>
                        <div className="hero-buttons">
                            <button
                                className="hero-btn hero-btn-primary"
                                onClick={() => navigate('/products')}
                            >
                                Explore Products
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button
                                className="hero-btn hero-btn-secondary"
                                onClick={() => navigate('/contact')}
                            >
                                Get Quote
                            </button>
                        </div>
                    </div>

                    {/* Visual Elements with Paint Brushes */}
                    <div className="hero-visual">
                        {/* Animated Paint Brushes */}
                        <div className="paint-brush brush-1">
                            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                                <path d="M9.06 11.9l8.07-8.06a1.5 1.5 0 1 1 2.13 2.12l-8.06 8.08" />
                                <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
                            </svg>
                        </div>

                        <div className="paint-brush brush-2">
                            <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                                <path d="M9.06 11.9l8.07-8.06a1.5 1.5 0 1 1 2.13 2.12l-8.06 8.08" />
                                <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
                            </svg>
                        </div>

                        <div className="paint-brush brush-3">
                            <svg width="65" height="65" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                                <path d="M9.06 11.9l8.07-8.06a1.5 1.5 0 1 1 2.13 2.12l-8.06 8.08" />
                                <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
                            </svg>
                        </div>

                        {/* Paint Splashes */}
                        <div className="paint-splash paint-splash-1"></div>
                        <div className="paint-splash paint-splash-2"></div>
                        <div className="paint-splash paint-splash-3"></div>
                        <div className="paint-splash paint-splash-4"></div>
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="slide-indicators">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`slide-dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
