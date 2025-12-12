import './ProductsShowcase.css';

// Import product images - SAME as Products Page
import autoEnamel from '../assets/Products Page  copy/Auto Fine – Automotive Enamel.png';
import epoxyCoa from '../assets/Products Page  copy/Epoxy Coating.png';
import puEnamel from '../assets/Products Page  copy/PU Enamel.png';
import woodCoat from '../assets/Products Page  copy/WoodCoat – High Gloss Wood Finish.png';

const ProductsShowcase = () => {
    return (
        <section className="products-showcase">
            <div className="products-container">
                {/* Tagline */}
                <div className="showcase-tagline">
                    <h2 className="tagline-text">
                        Premium Coatings. Perfect Finishes. Trusted Quality.
                    </h2>
                </div>

                {/* Key Products */}
                <div className="showcase-section">
                    <h3 className="section-title">Key Products / Offerings</h3>
                    <div className="products-grid">
                        <div className="product-item">
                            <div className="product-image">
                                <img src={epoxyCoa} alt="Industrial Coatings" />
                            </div>
                            <div className="product-name">Industrial Coatings</div>
                        </div>
                        <div className="product-item">
                            <div className="product-image">
                                <img src={autoEnamel} alt="Automotive Coatings" />
                            </div>
                            <div className="product-name">Automotive Coatings</div>
                        </div>
                        <div className="product-item">
                            <div className="product-image">
                                <img src={woodCoat} alt="Wood Finishes & Woodcoat" />
                            </div>
                            <div className="product-name">Wood Finishes & Woodcoat</div>
                        </div>
                        <div className="product-item">
                            <div className="product-image">
                                <img src={puEnamel} alt="Decorative Enamels" />
                            </div>
                            <div className="product-name">Decorative Enamels</div>
                        </div>
                        <div className="product-item">
                            <div className="product-image">
                                <img src={epoxyCoa} alt="Primers & Undercoats" />
                            </div>
                            <div className="product-name">Primers & Undercoats</div>
                        </div>
                        <div className="product-item">
                            <div className="product-image">
                                <img src={autoEnamel} alt="Thinners & Specialty Products" />
                            </div>
                            <div className="product-name">Thinners & Specialty Products</div>
                        </div>
                    </div>
                </div>

                {/* Featured Highlights Section - New Design */}
                <section className="features-section">
                    <h2 className="features-main-title">Featured Highlights</h2>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon feature-icon--blue">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28">
                                    <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM15 20H6c-.55 0-1-.45-1-1v-1h10v2zm4-1c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11v14z" />
                                    <path d="M9 7h6v2H9zm7 0h2v2h-2zm-7 3h6v2H9zm7 0h2v2h-2z" />
                                </svg>
                            </div>
                            <h4 className="feature-title">Premium Formulations</h4>
                            <p className="feature-description">
                                Advanced coating formulations with superior adhesion and durability for lasting protection.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon feature-icon--green">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            </div>
                            <h4 className="feature-title">Quality Assured</h4>
                            <p className="feature-description">
                                Rigorous quality control ensures consistent, high-performance results every time.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon feature-icon--red">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </div>
                            <h4 className="feature-title">Fast Drying</h4>
                            <p className="feature-description">
                                Quick-drying technology reduces application time and improves productivity.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon feature-icon--teal">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28">
                                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                                </svg>
                            </div>
                            <h4 className="feature-title">Weather Resistant</h4>
                            <p className="feature-description">
                                Exceptional resistance to UV, moisture, and extreme weather conditions.
                            </p>
                        </div>
                    </div>

                    <div className="features-footer">
                        <button className="features-explore-btn">Explore More Features</button>
                    </div>
                </section>

                {/* Why Choose Us Section - New Design */}
                <section className="why-choose-section">
                    {/* Header */}
                    <div className="why-choose-header">
                        <h2 className="why-choose-title">Why Choose Us</h2>
                        <p className="why-choose-description">
                            We deliver durable, high-performance coatings backed by 30+ years of expertise. Trusted by manufacturers, workshops, and painters across industries for quality, reliability, and innovation.
                        </p>
                    </div>

                    {/* 4 Cards Grid */}
                    <div className="why-choose-grid">
                        <div className="why-card">
                            <div className="why-card__icon why-card__icon--blue">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24" height="24">
                                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                                </svg>
                            </div>
                            <h4 className="why-card__title">30+ Years Experience</h4>
                            <p className="why-card__subtitle">Trusted Industry Leader</p>
                            <p className="why-card__text">
                                Three decades of expertise in manufacturing premium industrial and decorative coatings.
                            </p>
                        </div>

                        <div className="why-card">
                            <div className="why-card__icon why-card__icon--green">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24" height="24">
                                    <path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-13 5l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                                </svg>
                            </div>
                            <h4 className="why-card__title">High Performance</h4>
                            <p className="why-card__subtitle">Quality You Can Trust</p>
                            <p className="why-card__text">
                                Our coatings deliver exceptional durability, vibrant finishes, and superior protection.
                            </p>
                        </div>

                        <div className="why-card">
                            <div className="why-card__icon why-card__icon--orange">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24" height="24">
                                    <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
                                </svg>
                            </div>
                            <h4 className="why-card__title">Wide Range</h4>
                            <p className="why-card__subtitle">Complete Solutions</p>
                            <p className="why-card__text">
                                From industrial to automotive, wood finishes to decorative enamels - we have it all.
                            </p>
                        </div>

                        <div className="why-card">
                            <div className="why-card__icon why-card__icon--purple">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24" height="24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                </svg>
                            </div>
                            <h4 className="why-card__title">Technical Support</h4>
                            <p className="why-card__subtitle">Expert Guidance</p>
                            <p className="why-card__text">
                                Strong technical knowledge and dedicated support for all your coating needs.
                            </p>
                        </div>
                    </div>

                    {/* Explore Button */}
                    <div className="why-choose-footer">
                        <button className="explore-btn">Explore →</button>
                    </div>
                </section>
            </div >
        </section >
    );
};

export default ProductsShowcase;
