import SEO from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/structuredData';
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
    const breadcrumbSchema = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
    ]);

    const services: Service[] = [
        {
            title: "Industrial Painting Services",
            description: "We provide heavy-duty industrial painting solutions designed to protect steel, machinery, and industrial surfaces from corrosion, abrasion, and harsh environmental conditions.",
            image: industrialPaintingImage,
            tags: ["Industrial", "Heavy-Duty"],
            features: [
                "Epoxy industrial coatings",
                "PU enamel & polyurethane coatings",
                "Industrial primers & undercoats",
                "Protective & anti-corrosion systems"
            ],
            idealFor: "Factories, warehouses, machinery, steel structures, industrial floors"
        },
        {
            title: "Automotive Painting Services",
            description: "Our automotive painting services deliver high-gloss enamel finishes for automobiles and metal parts with smooth flow and professional application.",
            image: automotivePaintingImage,
            tags: ["Automotive", "Premium"],
            features: [
                "Synthetic enamel automotive coatings",
                "Metallic & solid colour finishes",
                "Clear coating for gloss enhancement",
                "Professional spray application"
            ],
            idealFor: "Cars, bikes, auto body parts, metal gates, decorative metal items"
        },
        {
            title: "Wood Coating Services",
            description: "We offer premium wood coating services to enhance the beauty, durability, and lifespan of wooden surfaces using melamine and PU coating systems.",
            image: woodCoatingImage,
            tags: ["Wood", "Interior"],
            features: [
                "Melamine glossy & matt finishes",
                "PU clear coatings",
                "Wood sealers & base coats",
                "Smooth sanding & finishing"
            ],
            idealFor: "Doors, furniture, cabinets, wardrobes, interior wooden décor"
        },
        {
            title: "Decorative Painting Services",
            description: "Our decorative painting solutions combine aesthetic appeal with durability, suitable for both interior and exterior applications.",
            image: colourConsultationImage,
            tags: ["Decorative", "Aesthetic"],
            features: [
                "High-gloss enamel coatings",
                "Decorative finishes for metal & wood",
                "Smooth and uniform surface finishing"
            ],
            idealFor: "Commercial spaces, showrooms, metal furniture, decorative surfaces"
        },
        {
            title: "Surface Preparation & Priming",
            description: "Proper surface preparation is the foundation of every long-lasting coating. We ensure professional priming and preparation before applying any finish.",
            image: surfacePreparationImage,
            tags: ["Preparation", "Essential"],
            features: [
                "Surface cleaning & degreasing",
                "Rust removal & sanding",
                "Industrial primers & wood sealers",
                "Quality surface inspection"
            ],
            idealFor: "All coating and painting applications"
        },
        {
            title: "Specialty Coating Services",
            description: "We provide specialty coatings for decorative and functional requirements on industrial metal surfaces.",
            image: industrialPaintingImage,
            tags: ["Specialty", "Custom"],
            features: [
                "Hammertone textured finishes",
                "Specialty industrial enamels",
                "Custom shade & finish solutions"
            ],
            idealFor: "Electrical panels, machinery, metal cabinets, industrial furniture"
        },
        {
            title: "Colour Consultation & Finish Guidance",
            description: "Choosing the right coating system is crucial. Our experts provide professional colour and finish consultation to ensure the best results.",
            image: colourConsultationImage,
            tags: ["Consultation", "Expert"],
            features: [
                "Colour shade selection",
                "Finish recommendations (Gloss / Matt / Texture)",
                "Product & coating system guidance"
            ],
            idealFor: "Industrial, automotive, wood, and decorative projects"
        }
    ];

    return (
        <>
            <SEO
                title="Professional Coating Services - Industrial, Automotive & Wood | Yashwanth Colour Coatings"
                description="Expert coating services in Chennai: Industrial painting, automotive finishing, wood coating, surface preparation, and color consultation. Professional solutions for all your coating needs."
                keywords="industrial painting services, automotive painting chennai, wood coating services, surface preparation, color consultation, professional coating services chennai"
                canonicalUrl="/services"
                structuredData={breadcrumbSchema}
            />
            <div className="services-page">
                <div className="services-container">
                    {/* Page Header - Consistent Design */}
                    <header className="services-header">
                        <h1 className="services-title">Services We Offer</h1>
                        <p className="services-subtitle">
                            Professional coating solutions tailored to your needs
                        </p>
                    </header>

                    {/* Services Grid */}
                    <section className="services-grid">
                        {services.map((service, index) => (
                            <article key={index} className="service-card">
                                <div className="service-card__image">
                                    <img
                                        src={service.image}
                                        alt={`${service.title} - Professional coating service`}
                                        loading="lazy"
                                        width="400"
                                        height="300"
                                    />
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

                                    <button className="service-card__button" aria-label={`Enquire about ${service.title}`}>
                                        Enquire Now
                                    </button>
                                </div>
                            </article>
                        ))}
                    </section>
                </div>
            </div>
        </>
    );
};

export default ServicesPage;

