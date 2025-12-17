import { useState } from 'react';
import './EnquiryModal.css';

interface EnquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
    productName?: string;
}

const EnquiryModal = ({ isOpen, onClose, productName }: EnquiryModalProps) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate sending email
        const emailData = {
            to: 'info@yashwanthcoatings.com',
            subject: `New Enquiry${productName ? ` - ${productName}` : ''}`,
            body: `
                Name: ${formData.name}
                Phone: ${formData.phone}
                Email: ${formData.email}
                ${productName ? `Product/Service: ${productName}` : ''}
            `
        };

        console.log('Email would be sent:', emailData);

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);

            setTimeout(() => {
                setFormData({ name: '', phone: '', email: '' });
                setSubmitSuccess(false);
                onClose();
            }, 2000);
        }, 1000);
    };

    if (!isOpen) return null;

    return (
        <div className="enquiry-modal-overlay" onClick={onClose}>
            <div className="enquiry-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {submitSuccess ? (
                    <div className="success-message">
                        <div className="success-icon">✓</div>
                        <h3>Thank You!</h3>
                        <p>We'll get back to you soon.</p>
                    </div>
                ) : (
                    <div className="modal-content">
                        <h2 className="modal-title">Contact Us</h2>
                        <p className="modal-subtitle">
                            Please write your message and contact information below. We will respond as soon as possible.
                        </p>

                        <form className="enquiry-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your name"
                                className="form-input"
                            />

                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Enter your phone number"
                                className="form-input"
                            />

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter your email"
                                className="form-input"
                            />

                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>

                            <button
                                type="button"
                                className="remind-later-btn"
                                onClick={onClose}
                            >
                                Remind me later
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EnquiryModal;
