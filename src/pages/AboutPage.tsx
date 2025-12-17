import './AboutPage.css';
import checkmark from '../check-mark.png';


const AboutPage = () => {
    return (
        <div className="about-page">
            {/* Page Header */}
            <div className="about-header">
                <h1 className="about-title">About Us</h1>
                <p className="about-subtitle">
                    Learn more about our journey, mission, and commitment to quality
                </p>
            </div>

            <div className="about-container">
                {/* Two Column Section - Story & Image */}
                <div className="story-grid">
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
                                <img src={checkmark} alt="checkmark" className="checkmark-icon" />
                                <span>Quality</span>
                            </li>
                            <li>
                                <img src={checkmark} alt="checkmark" className="checkmark-icon" />
                                <span>Trust</span>
                            </li>
                            <li>
                                <img src={checkmark} alt="checkmark" className="checkmark-icon" />
                                <span>Innovation</span>
                            </li>
                            <li>
                                <img src={checkmark} alt="checkmark" className="checkmark-icon" />
                                <span>Customer Commitment</span>
                            </li>
                            <li>
                                <img src={checkmark} alt="checkmark" className="checkmark-icon" />
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
                            alt="Paint and coating products"
                            className="about-img"
                        />
                    </div>
                </div>

                {/* Mission & Vision Section - Below */}
                <div className="mission-vision-section">
                    <h2 className="mv-section-heading">
                        Our <span className="gradient-text">Mission & Vision</span>
                    </h2>
                    <div className="mv-boxes">
                        <div className="mv-box mission-box">
                            <div className="mv-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                                    <path d="M2 17l10 5 10-5"></path>
                                    <path d="M2 12l10 5 10-5"></path>
                                </svg>
                            </div>
                            <h3>Mission</h3>
                            <p>To deliver durable, high-performance coatings that provide long-lasting protection, vibrant finishes and superior surface results.</p>
                        </div>

                        <div className="mv-box vision-box">
                            <div className="mv-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                </svg>
                            </div>
                            <h3>Vision</h3>
                            <p>To be one of India's most trusted and innovative coating manufacturers, offering quality-driven products backed by technology and expertise.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
