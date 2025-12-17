import SEO from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/structuredData';
import './AboutPage.css';
import checkmark from '../check-mark.png';


const AboutPage = () => {
    const breadcrumbSchema = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' },
    ]);

    return (
        <>
            <SEO
                title="About Us - 30+ Years of Quality Coatings Excellence | Yashwanth Colour Coatings"
                description="Learn about Yashwanth Colour Coatings - Chennai's trusted paint manufacturer since 1995. Our mission, vision, and commitment to delivering premium industrial, automotive, and decorative coatings."
                keywords="about yashwanth coatings, paint manufacturer chennai, coating company history, quality paints, trusted manufacturer, industrial coatings company"
                canonicalUrl="/about"
                structuredData={breadcrumbSchema}
            />
            <article className="about-page">
                {/* Page Header */}
                <header className="about-header">
                    <h1 className="about-title">About Us</h1>
                    <p className="about-subtitle">
                        Learn more about our journey, mission, and commitment to quality
                    </p>
                </header>

                <div className="about-container">
                    {/* Two Column Section - Story & Image */}
                    <section className="story-grid">
                        {/* Left - Company Story & Values */}
                        <div className="story-content">
                            <h2 className="story-heading">
                                Company <span className="gradient-text">Story</span>
                            </h2>
                            <p className="story-paragraph">
                                Yashwanth Colour Coating Company is a leading manufacturer and supplier of premium coatings for industrial, automotive and decorative applications. Over the years, we have built a strong reputation for reliability, consistency and high-quality formulations trusted by professionals across industries.
                            </p>

                            <h3 className="values-heading">Our Core Values</h3>
                            <ul className="checkmark-list">
                                <li>
                                    <img src={checkmark} alt="" className="checkmark-icon" width="24" height="24" />
                                    <span>Quality</span>
                                </li>
                                <li>
                                    <img src={checkmark} alt="" className="checkmark-icon" width="24" height="24" />
                                    <span>Trust</span>
                                </li>
                                <li>
                                    <img src={checkmark} alt="" className="checkmark-icon" width="24" height="24" />
                                    <span>Innovation</span>
                                </li>
                                <li>
                                    <img src={checkmark} alt="" className="checkmark-icon" width="24" height="24" />
                                    <span>Customer Commitment</span>
                                </li>
                                <li>
                                    <img src={checkmark} alt="" className="checkmark-icon" width="24" height="24" />
                                    <span>Long-lasting Results</span>
                                </li>
                            </ul>

                            <div className="experience-text">
                                <strong>Experience:</strong> 30+ years of experience in paint & coating solutions
                            </div>
                        </div>

                        {/* Right - Image */}
                        <div className="story-image">
                            <img
                                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=600&fit=crop"
                                alt="Professional paint and coating products display"
                                className="about-img"
                                loading="lazy"
                                width="600"
                                height="600"
                            />
                        </div>
                    </section>

                    {/* Mission & Vision Section - Below */}
                    <section className="mission-vision-section">
                        <h2 className="mv-section-heading">
                            Our <span className="gradient-text">Mission & Vision</span>
                        </h2>
                        <div className="mv-boxes">
                            <article className="mv-box mission-box">
                                <div className="mv-icon" aria-hidden="true">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                                        <path d="M2 17l10 5 10-5"></path>
                                        <path d="M2 12l10 5 10-5"></path>
                                    </svg>
                                </div>
                                <h3>Mission</h3>
                                <p>To deliver durable, high-performance coatings that provide long-lasting protection, vibrant finishes and superior surface results.</p>
                            </article>

                            <article className="mv-box vision-box">
                                <div className="mv-icon" aria-hidden="true">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                    </svg>
                                </div>
                                <h3>Vision</h3>
                                <p>To be one of India's most trusted and innovative coating manufacturers, offering quality-driven products backed by technology and expertise.</p>
                            </article>
                        </div>
                    </section>
                </div>
            </article>
        </>
    );
};

export default AboutPage;

