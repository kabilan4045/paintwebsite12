import './ProcessSection.css';
import dashedLine from '../dashed.png';

const ProcessSection = () => {
    const steps = [
        {
            number: "Step 1",
            icon: "🏭",
            title: "Consultations with our expert",
            description: "Our team provides professional consultation to understand your coating requirements and recommend the best solutions for your project."
        },
        {
            number: "Step 2",
            icon: "🎨",
            title: "Choose Affordable Package Service",
            description: "Select from our range of coating packages designed to fit your budget while maintaining the highest quality standards."
        },
        {
            number: "Finishing",
            icon: "✓",
            title: "Finishing your project on time",
            description: "We ensure timely completion of your coating project with professional application and quality assurance."
        }
    ];

    return (
        <section className="process-section">
            <div className="process-container">
                <div className="process-header">
                    <p className="process-label">PROCESS</p>
                    <h2 className="process-title">Always on time and never delay a project</h2>
                    <p className="process-subtitle">
                        We follow a systematic approach to ensure your coating projects are completed efficiently and on schedule.
                    </p>
                </div>

                <div className="process-steps">
                    <img src={dashedLine} alt="" className="process-connector" />

                    <div className="steps-grid">
                        {steps.map((step, index) => (
                            <div key={index} className="step-card">
                                <div className="step-badge">{step.number}</div>
                                <div className="step-icon">{step.icon}</div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
