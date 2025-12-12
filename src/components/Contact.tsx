import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: '',
        userType: '',
        concern: '',
        issue: '',
        language: '',
        message: '',
        agreeTerms: false
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    return (
        <section className="contact-section">
            {/* Hero Banner */}
            <div className="contact-hero">
                <div className="container">
                    <div className="contact-hero-content">
                        <div className="contact-hero-text">
                            <h1>Stay Connected!</h1>
                            <p>Leave a message us and we will get back to you shortly</p>
                        </div>
                        <div className="contact-hero-image">
                            {/* Placeholder for image - you can add an actual image here */}
                            <div style={{
                                width: '100%',
                                height: '200px',
                                background: 'rgba(255,255,255,0.1)',
                                borderRadius: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '3rem'
                            }}>
                                📞
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="contact-main">
                <div className="container">
                    <div className="contact-content-grid">
                        {/* Contact Info Sidebar */}
                        <div className="contact-info-sidebar">
                            <h3>If you need to contact us directly, please use the following contact channels:</h3>

                            <div className="contact-methods">
                                <div className="contact-method">
                                    <span className="contact-method-icon">📞</span>
                                    <div className="contact-method-text">
                                        <a href="tel:+919841421608">+91 98414 21608 / 2229 6005 / 08 / 1</a>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <span className="contact-method-icon">📱</span>
                                    <div className="contact-method-text">
                                        <a href="tel:18001036030">1800 103 6030</a>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <span className="contact-method-icon">💬</span>
                                    <div className="contact-method-text">
                                        SMS 'YP' to 56767
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <span className="contact-method-icon">📠</span>
                                    <div className="contact-method-text">
                                        <a href="tel:+913322499009">+91 33 2249 9009 / 9729</a>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <span className="contact-method-icon">✉️</span>
                                    <div className="contact-method-text">
                                        <a href="mailto:info@yashwanthcoatings.com">info@yashwanthcoatings.com</a>
                                    </div>
                                </div>
                            </div>

                            <div className="social-section">
                                <h4>Connect with us on social media</h4>
                                {/* Add social media icons here */}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-grid">
                                    <div className="form-group full-width">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name*"
                                            className="form-input"
                                            required
                                        />
                                    </div>

                                    <div className="form-group full-width">
                                        <input
                                            type="text"
                                            name="contact"
                                            value={formData.contact}
                                            onChange={handleChange}
                                            placeholder="Enter Your Contact No*"
                                            className="form-input"
                                            required
                                        />
                                    </div>

                                    <div className="form-group full-width">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your Email Address*"
                                            className="form-input"
                                            required
                                        />
                                    </div>

                                    <div className="form-group full-width">
                                        <select
                                            name="userType"
                                            value={formData.userType}
                                            onChange={handleChange}
                                            className="form-select"
                                            required
                                        >
                                            <option value="">Are you a ? - Customer, Dealer, Painter, Job Seeker, Others*</option>
                                            <option value="customer">Customer</option>
                                            <option value="dealer">Dealer</option>
                                            <option value="painter">Painter</option>
                                            <option value="jobseeker">Job Seeker</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="form-group full-width">
                                        <select
                                            name="concern"
                                            value={formData.concern}
                                            onChange={handleChange}
                                            className="form-select"
                                            required
                                        >
                                            <option value="">Select Your Concern*</option>
                                            <option value="product">Product Inquiry</option>
                                            <option value="service">Service Request</option>
                                            <option value="complaint">Complaint</option>
                                            <option value="feedback">Feedback</option>
                                        </select>
                                    </div>

                                    <div className="form-group full-width">
                                        <select
                                            name="issue"
                                            value={formData.issue}
                                            onChange={handleChange}
                                            className="form-select"
                                        >
                                            <option value="">Select Your Issue*</option>
                                            <option value="quality">Quality Issue</option>
                                            <option value="delivery">Delivery Issue</option>
                                            <option value="pricing">Pricing Query</option>
                                            <option value="technical">Technical Support</option>
                                        </select>
                                    </div>

                                    <div className="form-group full-width">
                                        <select
                                            name="language"
                                            value={formData.language}
                                            onChange={handleChange}
                                            className="form-select"
                                        >
                                            <option value="">Select Your Language*</option>
                                            <option value="english">English</option>
                                            <option value="tamil">Tamil</option>
                                            <option value="hindi">Hindi</option>
                                        </select>
                                    </div>

                                    <div className="form-group full-width">
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Write a brief, such as 'I want to know more about express painting.'"
                                            className="form-textarea"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-checkbox">
                                    <input
                                        type="checkbox"
                                        name="agreeTerms"
                                        id="agreeTerms"
                                        checked={formData.agreeTerms}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="agreeTerms">
                                        I Agree To All <a href="#terms">Terms And Conditions</a>
                                    </label>
                                </div>

                                <button type="submit" className="submit-btn">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="map-section">
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8267032661705!2d80.2707!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzU3LjciTiA4MMKwMTYnMTQuNSJF!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Yashwanth Colour Coatings Location"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
