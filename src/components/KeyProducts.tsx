import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './KeyProducts.css';

const KeyProducts = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const products = [
        {
            id: 1,
            title: 'Industrial Coatings',
            description: 'High-performance epoxy and polyurethane coatings for industrial applications',
            image: '/src/assets/products/industrial-coating.jpg',
            icon: (
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
            ),
            color: '#3B82F6'
        },
        {
            id: 2,
            title: 'Automotive Coatings',
            description: 'Premium automotive paints and finishes for superior gloss and durability',
            image: '/src/assets/products/automotive-coating.jpg',
            icon: (
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 17h14v-2H5v2zm0-4h14V7H5v6zm7-10c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"></path>
                    <circle cx="7.5" cy="16" r="1.5"></circle>
                    <circle cx="16.5" cy="16" r="1.5"></circle>
                </svg>
            ),
            color: '#8B5CF6'
        },
        {
            id: 3,
            title: 'Wood Finishes & Woodcoat',
            description: 'Melamine and PU coatings for beautiful, long-lasting wood protection',
            image: '/src/assets/products/wood-coating.jpg',
            icon: (
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3h18v18H3z"></path>
                    <path d="M3 9h18"></path>
                    <path d="M3 15h18"></path>
                    <path d="M9 3v18"></path>
                    <path d="M15 3v18"></path>
                </svg>
            ),
            color: '#10B981'
        },
        {
            id: 4,
            title: 'Decorative Enamels',
            description: 'Vibrant decorative paints for interior and exterior beautification',
            image: '/src/assets/products/decorative-paint.jpg',
            icon: (
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                </svg>
            ),
            color: '#EC4899'
        },
        {
            id: 5,
            title: 'Primers & Undercoats',
            description: 'Essential base coats for optimal paint adhesion and surface preparation',
            image: '/src/assets/products/primer.jpg',
            icon: (
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <path d="M3 9h18"></path>
                    <path d="M9 21V9"></path>
                </svg>
            ),
            color: '#F59E0B'
        },
        {
            id: 6,
            title: 'Thinners & Specialty Products',
            description: 'Quality thinners and specialty solutions for professional finishing',
            image: '/src/assets/products/thinner.jpg',
            icon: (
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20"></path>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
            ),
            color: '#06B6D4'
        }
    ];

    const totalSlides = Math.ceil(products.length / 3);

    // Auto-scroll every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 4000);

        return () => clearInterval(interval);
    }, [totalSlides]);

    const getVisibleProducts = () => {
        const startIndex = currentSlide * 3;
        return products.slice(startIndex, startIndex + 3);
    };

    return (
        <section className="key-products-section">
            <div className="key-products-container">
                <h2 className="key-products-title">
                    Key Products / <span className="gradient-text">Offerings</span>
                </h2>

                <div className="products-slider-wrapper">
                    <div className="products-cards">
                        {getVisibleProducts().map((product) => (
                            <Link
                                key={product.id}
                                to="/products"
                                className="product-card-key"
                            >
                                <div
                                    className="product-card-icon"
                                    style={{ backgroundColor: product.color }}
                                >
                                    {product.icon}
                                </div>
                                <h3 className="product-card-title">{product.title}</h3>
                                <p className="product-card-description">{product.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="products-indicators">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <div
                            key={index}
                            className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyProducts;
