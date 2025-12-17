import { useState } from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Rajesh Kumar",
            role: "Factory Owner",
            review: "Yashwanth Colour Coating provided exceptional industrial painting services for our manufacturing unit. The quality of their epoxy coatings is outstanding and has significantly improved the durability of our machinery.",
            avatar: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=3B82F6&color=fff&size=200&bold=true",
            color: "#3B82F6"
        },
        {
            id: 2,
            name: "Priya Sharma",
            role: "Interior Designer",
            review: "Their decorative painting services transformed our client's home beautifully. The attention to detail and professional finish exceeded our expectations. Highly recommended for premium projects!",
            avatar: "https://ui-avatars.com/api/?name=Priya+Sharma&background=8B5CF6&color=fff&size=200&bold=true",
            color: "#8B5CF6"
        },
        {
            id: 3,
            name: "Arjun Patel",
            role: "Automotive Workshop Owner",
            review: "We've been using their automotive paints for over 3 years. The high-gloss finish and durability are unmatched. Our customers are always satisfied with the quality of work.",
            avatar: "https://ui-avatars.com/api/?name=Arjun+Patel&background=10B981&color=fff&size=200&bold=true",
            color: "#10B981"
        },
        {
            id: 4,
            name: "Sneha Reddy",
            role: "Architect",
            review: "Excellent wood coating solutions! Their melamine and PU coatings have enhanced the beauty of wooden furniture in multiple residential projects. Professional team and timely delivery.",
            avatar: "https://ui-avatars.com/api/?name=Sneha+Reddy&background=F59E0B&color=fff&size=200&bold=true",
            color: "#F59E0B"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <div className="testimonials-content">
                    {/* Left Side - Header */}
                    <div className="testimonials-left">
                        <h2 className="testimonials-main-title">
                            From our <span className="highlight-text">community.</span>
                        </h2>
                        <p className="testimonials-subtitle">
                            Here's what our clients had to say about Yashwanth Colour Coating.
                        </p>

                        {/* Navigation Arrows */}
                        <div className="testimonials-nav">
                            <button className="nav-arrow" onClick={prevSlide} aria-label="Previous testimonial">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>
                            <button className="nav-arrow" onClick={nextSlide} aria-label="Next testimonial">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Testimonial Card */}
                    <div className="testimonials-right">
                        <div className="testimonial-card-wrapper">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.id}
                                    className={`testimonial-card-modern ${index === currentSlide ? 'active' : ''}`}
                                    style={{ backgroundColor: testimonial.color }}
                                >
                                    <div className="quote-icon">
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                                        </svg>
                                    </div>

                                    <p className="testimonial-text">{testimonial.review}</p>

                                    <div className="testimonial-author-info">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="author-avatar-modern"
                                        />
                                        <div className="author-details">
                                            <h4 className="author-name-modern">{testimonial.name}</h4>
                                            <p className="author-role-modern">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
