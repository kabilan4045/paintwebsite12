In import './ProcessSteps.css';

const ProcessSteps = () => {
    const steps = [
        {
            id: 1,
            title: 'Sign-up for free',
            subtitle: 'site visit',
            icon: '🔍', // Dummy icon - replace with actual icon later
        },
        {
            id: 2,
            title: 'Free colour',
            subtitle: 'consultation',
            icon: '🎨', // Dummy icon - replace with actual icon later
        },
        {
            id: 3,
            title: 'Quotation',
            subtitle: 'approval',
            icon: '📋', // Dummy icon - replace with actual icon later
        },
        {
            id: 4,
            title: 'Painting work',
            subtitle: 'starts',
            icon: '🏠', // Dummy icon - replace with actual icon later
        },
    ];

    return (
        <section className="process-steps">
            <div className="container">
                <h2 className="process-steps__title">Steps of Yashwanth Colour Coatings Service</h2>

                <div className="process-steps__container">
                    {steps.map((step, index) => (
                        <div key={step.id} className="process-step">
                            <div className="process-step__number">{step.id}</div>
                            <div className="process-step__icon-wrapper">
                                <div className="process-step__icon">{step.icon}</div>
                            </div>
                            <h3 className="process-step__title">{step.title}</h3>
                            <p className="process-step__subtitle">{step.subtitle}</p>

                            {/* Connecting Line - Don't show after last step */}
                            {index < steps.length - 1 && (
                                <div className="process-step__connector"></div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="process-steps__footer">
                    <h3 className="process-steps__footer-title">Yashwanth Colour Coatings Service</h3>
                </div>
            </div>
        </section>
    );
};

export default ProcessSteps;
