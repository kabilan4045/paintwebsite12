import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const features = [
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                </svg>
            ),
            title: '30+ years of trusted industry experience',
            description: 'Decades of expertise in manufacturing premium quality paints and coatings for diverse applications'
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
            ),
            title: 'Wide range of high-performance coatings',
            description: 'Comprehensive product portfolio covering industrial, automotive, wood, and decorative finishes'
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                </svg>
            ),
            title: 'Consistent quality & smooth application',
            description: 'Superior formulations ensuring uniform coverage, excellent finish, and long-lasting durability'
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            ),
            title: 'Strong technical knowledge and support',
            description: 'Expert guidance and dedicated customer support to help you choose the right coating solution'
        }
    ];

    return (
        <section className="why-choose-us">
            <div className="why-choose-us-container">
                <h2 className="why-choose-us-title">
                    Why Our <span className="gradient-text">Painting Service</span> Is Better Than Others
                </h2>

                <div className="features-list">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-item"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
