import './ServicesPage.css';

// Import service images
import industrialPaintingImage from '../assets/Services/Industrial Painting.png';
import automotivePaintingImage from '../assets/Services/Automotive Painting.png';
import woodCoatingImage from '../assets/Services/Wood Coating Services.png';
import colourConsultationImage from '../assets/Services/Colour Consultation.png';
import surfacePreparationImage from '../assets/Services/Surface Preparation & Priming.png';

interface Service {
    title: string;
    description: string;
    image: string;
    tags: string[];
    features: string[];
    idealFor?: string;
}

const ServicesPage = () => {
    const services: Service[] = [
        {
            title: "Industrial Painting",
            description: "Durable coatings for factories, warehouses and machinery.",
            image: industrialPaintingImage,
            tags: ["Industrial", "Commercial"],
            features: [
                "Heavy-duty protective coatings",
                "Corrosion resistance",
                "Long-lasting durability"
            ],
            idealFor: "Factories, warehouses, machinery"
        },
        {
            title: "Automotive Painting",
            description: "High-shine automotive enamel finishing for cars, bikes and metal parts.",
            image: automotivePaintingImage,
            tags: ["Automotive", "Premium"],
            features: [
                "Showroom-quality finish",
                "Weather & scratch resistant",
                "Professional application"
            ],
            idealFor: "Cars, bikes, gates, metal parts"
        },
        {
            title: "Wood Coating Services",
            description: "Premium finishes for doors, furniture and wooden décor.",
            image: woodCoatingImage,
            tags: ["Wood", "Interior"],
            features: [
                "Enhances natural grain",
                "Moisture protection",
                "Rich, glossy finish"
            ],
            idealFor: "Doors, furniture, wooden décor"
        },
        {
            title: "Colour Consultation",
            description: "Guidance to choose the right finish, shade and coating solution.",
            image: colourConsultationImage,
            tags: ["Consultation", "Expert"],
            features: [
                "Professional color matching",
                "Finish recommendations",
                "Custom solutions"
            ],
            idealFor: "All projects requiring expert advice"
        },
        {
            title: "Surface Preparation & Priming",
            description: "Ensuring smooth base and long-lasting results.",
            image: surfacePreparationImage,
            tags: ["Preparation", "Essential"],
            features: [
                "Thorough surface cleaning",
                "Professional priming",
                "Quality assurance"
            ],
            idealFor: "All coating applications"
        }
    ];

    return (
        <div className="services-page">
            <div className="services-container">
                {/* Page Header - Consistent Design */}
                <div className="services-header">
                    <h1 className="services-title">Services We Offer</h1>
                    <p className="services-subtitle">
                        Professional coating solutions tailored to your needs
                    </p>
                </div>

                {/* Services Grid */}
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-card__image">
                                <img src={service.image} alt={service.title} />
                            </div>

                            <div className="service-card__content">
                                <div className="service-card__tags">
                                    {service.tags.map((tag, idx) => (
                                        <span key={idx} className="service-card__tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="service-card__header">
                                    <h2 className="service-card__title">{service.title}</h2>
                                    <p className="service-card__description">{service.description}</p>
                                </div>

                                <div className="service-card__body">
                                    <h3 className="service-card__section-title">What We Provide:</h3>
                                    <ul className="service-card__features">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>

                                    {service.idealFor && (
                                        <div className="service-card__info">
                                            <span className="service-card__label">Ideal For:</span>
                                            <span className="service-card__value">{service.idealFor}</span>
                                        </div>
                                    )}
                                </div>

                                <button className="service-card__button">
                                    Enquire Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
