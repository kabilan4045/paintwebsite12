import { useState, useEffect } from 'react';
import './LeadPopup.css';
import painterImage from '../assets/painter-popup.png';

interface LeadPopupProps {
    onClose: () => void;
}

const LeadPopup: React.FC<LeadPopupProps> = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        pincode: '',
        agreeToTerms: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.agreeToTerms) {
            alert('Please agree to the terms and conditions');
            return;
        }

        // Here you can add your form submission logic
        console.log('Form submitted:', formData);

        // For now, just show a success message and close
        alert('Thank you! We will contact you soon.');
        onClose();
    };

    // Prevent body scroll when popup is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="lead-popup-overlay" onClick={onClose}>
            <div className="lead-popup-container" onClick={(e) => e.stopPropagation()}>
                <button className="lead-popup-close" onClick={onClose} aria-label="Close popup">
                    ✕
                </button>

                <div className="lead-popup-content">
                    {/* Left Side - Image */}
                    <div className="lead-popup-image">
                        <img src={painterImage} alt="Yashwanth Colour Coatings Painter" className="popup-painter-image" />
                    </div>

                    {/* Right Side - Form */}
                    <div className="lead-popup-form-section">
                        <div className="lead-popup-logo">
                            <h2>YASHWANTH</h2>
                            <h3>COLOUR COATINGS</h3>
                            <p className="lead-popup-tagline">PAINTING SERVICES</p>
                        </div>

                        <h1 className="lead-popup-title">One Stop For Home Makeover*</h1>
                        <p className="lead-popup-subtitle">Get Free Site Evaluation</p>

                        <form onSubmit={handleSubmit} className="lead-popup-form">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="lead-popup-input"
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                pattern="[0-9]{10}"
                                className="lead-popup-input"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="lead-popup-input"
                            />

                            <input
                                type="text"
                                name="pincode"
                                placeholder="Pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                                required
                                pattern="[0-9]{6}"
                                className="lead-popup-input"
                            />

                            <label className="lead-popup-checkbox">
                                <input
                                    type="checkbox"
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="checkbox-text">
                                    I agree to the terms of Service and Privacy Policy. Yes, I would like to
                                    receive important updates and notifications through calls, sms, or e-mail.
                                </span>
                            </label>

                            <button type="submit" className="lead-popup-submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeadPopup;
