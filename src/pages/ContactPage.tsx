import { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        jobPosition: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        // Show success message
        setShowSuccess(true);

        // Reset form
        setFormData({
            fullName: '',
            jobPosition: '',
            email: '',
            phoneNumber: '',
            message: ''
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
            setShowSuccess(false);
        }, 5000);
    };

    return (
        <div className="contact-page">
            {/* Page Header */}
            <div className="contact-page-header">
                <h1 className="contact-page-title">Contact Us</h1>
            </div>

            {/* Get In Touch Section */}
            <section className="contact-hero">
                <div className="contact-hero__container">
                    <div className="contact-hero__grid">
                        <div className="contact-hero__content">
                            <h1 className="contact-hero__title">Get In Touch</h1>
                            <p className="contact-hero__description">
                                We'd love to hear from you! Whether you have questions, need support, or want to learn more about our services, our team is here to help.
                            </p>
                        </div>

                        <div className="info-card">
                            <div className="info-card__icon info-card__icon--location">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
                                </svg>
                            </div>
                            <h3 className="info-card__title">Our Address</h3>
                            <p className="info-card__text">No. 80/1, Door No.1, Govindaswamy Street,</p>
                            <p className="info-card__text">Payasampakkam, Chennai-600052</p>
                        </div>

                        <div className="info-card">
                            <div className="info-card__icon info-card__icon--contact">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
                                </svg>
                            </div>
                            <h3 className="info-card__title">Our Contact Info</h3>
                            <p className="info-card__text">
                                <a href="tel:+919841421608" className="info-card__link">+91 98414 21608</a>
                            </p>
                            <p className="info-card__text">
                                <a href="mailto:suryayashwanth@gmail.com" className="info-card__link">suryayashwanth@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="contact-map">
                <div className="contact-map__container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5891234567890!2d80.2234567!3d13.0123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzQ0LjQiTiA4MMKwMTMnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890&q=Payasampakkam,+Chennai,+Tamil+Nadu+600052"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Yashwanth Colour Coatings Location - Payasampakkam, Chennai"
                    ></iframe>
                    <button className="map-directions-btn" onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=Payasampakkam,Chennai,Tamil+Nadu+600052', '_blank')}>
                        <span>Get Directions</span>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </section>

            {/* Form Section */}
            <section className="contact-form-section">
                <div className="contact-form-section__container">
                    {/* Success Message */}
                    {showSuccess && (
                        <div className="success-message">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Thank you! Your request has been submitted successfully. We'll contact you soon.</span>
                        </div>
                    )}

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="contact-form__grid">
                            {/* Column 1: Title */}
                            <div className="contact-form__title-column">
                                <h2 className="contact-form__title">Book A Free Site Visit</h2>
                                <p className="contact-form__description">
                                    Schedule a free consultation with our experts. We'll visit your site and provide professional recommendations for your coating needs.
                                </p>
                            </div>

                            {/* Column 2: First 2 Fields */}
                            <div className="contact-form__fields-column">
                                <div className="contact-form__field">
                                    <label htmlFor="fullName">Full Name*</label>
                                    <div className="input-wrapper">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor" />
                                        </svg>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            placeholder="Enter your name..."
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="contact-form__field">
                                    <label htmlFor="email">Email Address*</label>
                                    <div className="input-wrapper">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
                                        </svg>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email..."
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Column 3: Second 2 Fields */}
                            <div className="contact-form__fields-column">
                                <div className="contact-form__field">
                                    <label htmlFor="phoneNumber">Phone Number*</label>
                                    <div className="input-wrapper">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor" />
                                        </svg>
                                        <input
                                            type="tel"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            placeholder="Enter your phone number..."
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="contact-form__field">
                                    <label htmlFor="message">Message (Optional)</label>
                                    <div className="input-wrapper">
                                        <input
                                            type="text"
                                            id="message"
                                            name="message"
                                            placeholder="Tell us about your project..."
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form__button-row">
                            <button type="submit" className="contact-form__submit">
                                <span>Book Free Site Visit</span>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
