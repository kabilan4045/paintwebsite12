import './AboutPage.css';

// Import images (you can replace these with actual company images)
import factoryImage from '../assets/assortment-painting-items-with-yellow-paint.jpg';

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="about-container">
                {/* Hero Section - Text Left, Image Right */}
                <section className="about-hero-section">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Yashwanth Colour Coating — "The One & Only Solution for Premium Industrial and Decorative Coating Requirements."
                        </h1>
                        <p className="hero-subtitle">
                            Meet your expert coating manufacturer & premium paint solutions provider!!
                        </p>
                        <div className="hero-buttons">
                            <button className="btn-primary">Contact Us</button>
                            <button className="btn-secondary">Learn More</button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src={factoryImage} alt="Coating Manufacturing" />
                    </div>
                </section>

                {/* Mission & Vision - Modern Split Design */}
                <section className="mission-vision-section">
                    <div className="mv-container">
                        {/* Mission */}
                        <div className="mv-block mv-block--mission">
                            <div className="mv-block__content">
                                <div className="mv-block__label">Mission</div>
                                <h2 className="mv-block__title">
                                    Delivering Excellence in Every Coat
                                </h2>
                                <p className="mv-block__text">
                                    To deliver durable, high-performance coatings that provide long-lasting protection, vibrant finishes and superior surface results.
                                </p>
                            </div>
                            <div className="mv-block__accent"></div>
                        </div>

                        {/* Vision */}
                        <div className="mv-block mv-block--vision">
                            <div className="mv-block__content">
                                <div className="mv-block__label">Vision</div>
                                <h2 className="mv-block__title">
                                    India's Most Trusted Coating Partner
                                </h2>
                                <p className="mv-block__text">
                                    To be one of India's most trusted and innovative coating manufacturers, offering quality-driven products backed by technology and expertise.
                                </p>
                            </div>
                            <div className="mv-block__accent"></div>
                        </div>
                    </div>
                </section>

                {/* Values & Experience - Side by Side */}
                <section className="values-experience-section">
                    <div className="ve-container">
                        {/* Values */}
                        <div className="ve-block ve-block--values">
                            <h3 className="ve-block__title">Our Core Values</h3>
                            <div className="values-grid">
                                <div className="value-item">
                                    <div className="value-item__icon">✓</div>
                                    <div className="value-item__text">Quality</div>
                                </div>
                                <div className="value-item">
                                    <div className="value-item__icon">✓</div>
                                    <div className="value-item__text">Trust</div>
                                </div>
                                <div className="value-item">
                                    <div className="value-item__icon">✓</div>
                                    <div className="value-item__text">Innovation</div>
                                </div>
                                <div className="value-item">
                                    <div className="value-item__icon">✓</div>
                                    <div className="value-item__text">Customer Commitment</div>
                                </div>
                                <div className="value-item">
                                    <div className="value-item__icon">✓</div>
                                    <div className="value-item__text">Long-lasting Results</div>
                                </div>
                            </div>
                        </div>

                        {/* Experience */}
                        <div className="ve-block ve-block--experience">
                            <div className="experience-badge">
                                <div className="experience-badge__number">30+</div>
                                <div className="experience-badge__label">Years of Excellence</div>
                            </div>
                            <p className="experience-text">
                                Three decades of expertise in paint & coating solutions, serving industries across India with premium quality products.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
