import { useState } from 'react';
import './FAQPage.css';

interface FAQItem {
    question: string;
    answer: string;
}

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs: FAQItem[] = [
        {
            question: "What types of coatings do you manufacture?",
            answer: "We offer industrial, automotive, wood, decorative coatings and primers."
        },
        {
            question: "Do your coatings work on metal and wood?",
            answer: "Yes — we have specific product ranges for both."
        },
        {
            question: "Are your products durable?",
            answer: "Yes, all our products are formulated for long-lasting protection and smooth finish."
        },
        {
            question: "Do you provide custom colour options?",
            answer: "Yes, custom shades can be provided based on requirement."
        },
        {
            question: "Do you offer technical guidance?",
            answer: "Absolutely — we help with product selection, surface preparation and application tips."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-page">
            <div className="faq-header">
                <h1 className="faq-title">Frequently Asked Questions</h1>
                <p className="faq-subtitle">
                    Find answers to common questions about our products and services
                </p>
            </div>

            <div className="faq-container">
                <div className="faq-list">{faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item ${openIndex === index ? 'faq-item--open' : ''}`}
                    >
                        <button
                            className="faq-question"
                            onClick={() => toggleFAQ(index)}
                            aria-expanded={openIndex === index}
                        >
                            <span className="faq-question__text">{faq.question}</span>
                            <span className="faq-question__icon">
                                {openIndex === index ? '−' : '+'}
                            </span>
                        </button>

                        <div className={`faq-answer ${openIndex === index ? 'faq-answer--open' : ''}`}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
