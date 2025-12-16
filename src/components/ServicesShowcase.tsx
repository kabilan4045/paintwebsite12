import { Link } from 'react-router-dom';
import './ServicesShowcase.css';

const ServicesShowcase = () => {
    const services = [
        {
            id: 1,
            title: "Industrial Painting",
            description: "Heavy-duty protective coatings for factories, warehouses, and industrial machinery with excellent corrosion resistance.",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
            icon: "🏭"
        },
        {
            id: 2,
            title: "Automotive Painting",
            description: "High-gloss enamel finishes for automobiles and metal parts with smooth flow and professional application.",
            image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80",
            icon: "🚗"
        },
        {
            id: 3,
            title: "Wood Coating",
            description: "Premium melamine and PU coating systems to enhance the beauty and durability of wooden surfaces.",
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
            icon: "🪵"
        }
    ];

    return (
        <section className="services-showcase">
            <div className="services-showcase-container">
                <div className="services-showcase-header">
                    <div className="services-showcase-header-left">
                        <span className="services-badge">🎨 Services</span>
                        <h2 className="services-showcase-title">
                            Our Exclusive <span className="highlight">Painting</span> Services
                        </h2>
                    </div>
                    <Link to="/services" className="view-all-btn">
                        View All →
                    </Link>
                </div>

                <div className="services-showcase-grid">
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            to="/services"
                            className="service-showcase-card"
                        >
                            <div className="service-showcase-image">
                                <img src={service.image} alt={service.title} />
                                <div className="service-showcase-icon">{service.icon}</div>
                            </div>
                            <div className="service-showcase-content">
                                <h3 className="service-showcase-title">{service.title}</h3>
                                <p className="service-showcase-description">{service.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesShowcase;
