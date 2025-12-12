import './ProductsPage.css';

// Import product images
import autoFineImage from '../assets/Products Page  copy/Auto Fine – Automotive Enamel.png';
import woodCoatImage from '../assets/Products Page  copy/WoodCoat – High Gloss Wood Finish.png';
import puEnamelImage from '../assets/Products Page  copy/PU Enamel.png';
import epoxyCoatingImage from '../assets/Products Page  copy/Epoxy Coating.png';

interface Product {
    name: string;
    description: string;
    features: string[];
    sizes?: string;
    bestFor?: string;
    image: string;
    tags: string[];
}

const ProductsPage = () => {
    const products: Product[] = [
        {
            name: "Auto Fine – Automotive Enamel",
            description: "High-gloss enamel designed for smooth, durable finishes on vehicles and metal surfaces.",
            features: [
                "Glossy showroom finish",
                "Scratch & weather resistant",
                "Smooth application"
            ],
            sizes: "1L, 4L, 20L",
            bestFor: "Cars, bikes, gates, metal parts",
            image: autoFineImage,
            tags: ["Automotive", "Enamel"]
        },
        {
            name: "WoodCoat – High Gloss Wood Finish",
            description: "Premium coating for wood that enhances grain and provides long-lasting shine.",
            features: [
                "Rich, glossy finish",
                "Protects against scratches & moisture",
                "Ideal for furniture & doors"
            ],
            sizes: "Standard wood finish pack sizes",
            image: woodCoatImage,
            tags: ["Wood", "Premium"]
        },
        {
            name: "PU Enamel",
            description: "Industrial-grade enamel for superior protection on steel and metal surfaces.",
            features: [
                "High durability",
                "Strong adhesion",
                "Resistant to chemicals & abrasion"
            ],
            image: puEnamelImage,
            tags: ["Industrial", "Metal"]
        },
        {
            name: "Epoxy Coating",
            description: "Heavy-duty coating for industrial machinery, floors and metal surfaces.",
            features: [
                "Corrosion-resistant",
                "Long-lasting protection",
                "Excellent surface hardness"
            ],
            image: epoxyCoatingImage,
            tags: ["Industrial", "Heavy-Duty"]
        }
    ];

    return (
        <div className="products-page">
            <div className="products-container">
                {/* Page Header - Consistent Design */}
                <div className="products-header">
                    <h1 className="products-title">Our Products</h1>
                    <p className="products-subtitle">
                        Premium coating solutions for automotive, wood, and industrial applications
                    </p>
                </div>

                {/* Products Grid */}
                <div className="products-grid">
                    {products.map((product, index) => (
                        <div key={index} className="product-card">
                            <div className="product-card__image">
                                <img src={product.image} alt={product.name} />
                            </div>

                            <div className="product-card__content">
                                <div className="product-card__tags">
                                    {product.tags.map((tag, idx) => (
                                        <span key={idx} className="product-card__tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="product-card__header">
                                    <h2 className="product-card__name">{product.name}</h2>
                                    <p className="product-card__description">{product.description}</p>
                                </div>

                                <div className="product-card__body">
                                    <h3 className="product-card__section-title">Features:</h3>
                                    <ul className="product-card__features">
                                        {product.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>

                                    {product.sizes && (
                                        <div className="product-card__info">
                                            <span className="product-card__label">Sizes:</span>
                                            <span className="product-card__value">{product.sizes}</span>
                                        </div>
                                    )}

                                    {product.bestFor && (
                                        <div className="product-card__info">
                                            <span className="product-card__label">Best For:</span>
                                            <span className="product-card__value">{product.bestFor}</span>
                                        </div>
                                    )}
                                </div>

                                <button className="product-card__button">
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

export default ProductsPage;
