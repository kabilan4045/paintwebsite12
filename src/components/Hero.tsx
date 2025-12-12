import React, { useState, useEffect } from 'react';
import './Hero.css';
import heroImage from '../assets/assortment-painting-items-with-yellow-paint.jpg';

const Hero: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: 'Premium Coatings.',
            subtitle: 'Perfect Finishes.',
            highlight: 'Trusted Quality.',
            description: 'Yashwanth Colour Coatings is a trusted manufacturer of high-performance industrial, automotive, wood, and decorative coatings with 30+ years of experience.',
            color: '#4CAF50' // Green
        },
        {
            id: 2,
            title: 'Industrial Grade.',
            subtitle: 'Superior Protection.',
            highlight: 'Built to Last.',
            description: 'Professional-grade industrial coatings designed for factories, warehouses, and heavy machinery with exceptional durability.',
            color: '#3B5998' // Blue
        },
        {
            id: 3,
            title: 'Automotive Excellence.',
            subtitle: 'Showroom Shine.',
            highlight: 'Perfect Gloss.',
            description: 'High-gloss automotive paints and enamels for cars, bikes, and metal surfaces with superior finish and protection.',
            color: '#E53935' // Red
        },
        {
            id: 4,
            title: 'Wood Finishes.',
            subtitle: 'Natural Beauty.',
            highlight: 'Premium Quality.',
            description: 'Specialized wood coatings that enhance grain, provide rich color, and protect furniture and wooden surfaces.',
            color: '#FF9800' // Orange
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const currentSlideData = slides[currentSlide];

    return (
        <section className="hero" id="home">
            <div className="hero-background-image" style={{ backgroundImage: `url(${heroImage})` }}></div>
            <div className="hero-overlay"></div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            {currentSlideData.title}<br />
                            {currentSlideData.subtitle}<br />
                            <span className="highlight">{currentSlideData.highlight}</span>
                        </h1>

                        <p className="hero-subtitle">
                            {currentSlideData.description}
                        </p>

                        <div className="hero-cta-group">
                            <a href="#products" className="btn btn-primary">
                                View Products
                            </a>
                            <a
                                href="https://wa.me/919841421608?text=Hello!%20I%20would%20like%20to%20get%20a%20quote"
                                className="btn btn-secondary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                Get a Quote
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Color Dot Slider */}
            <div className="color-slider">
                <div className="slider-dots-container">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.id}
                            className={`color-dot ${index === currentSlide ? 'active' : ''}`}
                            style={{ backgroundColor: slide.color }}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
