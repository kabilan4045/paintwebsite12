import { useNavigate } from 'react-router-dom';
import './StatsSection.css';

const StatsSection = () => {
    const navigate = useNavigate();

    const stats = [
        {
            number: '250+',
            label: 'Satisfied Clients',
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            ),
            color: '#EC4899',
            delay: '0s'
        },
        {
            number: '180+',
            label: 'Active Projects',
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
            ),
            color: '#06B6D4',
            delay: '0.1s'
        },
        {
            number: '120+',
            label: 'Industry Solutions',
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
            ),
            color: '#F97316',
            delay: '0.2s'
        },
        {
            number: '15+',
            label: 'Team Members',
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            ),
            color: '#10B981',
            delay: '0.3s'
        }
    ];

    const handleEnquireClick = () => {
        navigate('/contact');
        // Scroll to top of contact page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="stats-section">
            <div className="stats-container">
                <div className="stats-content">
                    <div className="stats-text">
                        <h2 className="stats-title">
                            The Best Paints, the Best <span className="gradient-text">Hands & Your Ideas</span>
                        </h2>
                        <p className="stats-description">
                            With decades of experience in the paint and coating industry, we've built a reputation
                            for excellence. Our commitment to quality and customer satisfaction has made us the
                            preferred choice for thousands of clients across various industries.
                        </p>
                        <button
                            className="stats-cta-button"
                            onClick={handleEnquireClick}
                        >
                            Enquire Now
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <div className="stats-cards">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="stat-card"
                                style={{
                                    '--card-color': stat.color,
                                    animationDelay: stat.delay
                                } as React.CSSProperties}
                            >
                                <div className="stat-icon">
                                    {stat.icon}
                                </div>
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
