import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';

// Import product images
import autoFineImage from '../assets/Products Page  copy/Auto Fine – Automotive Enamel.png';
import woodCoatImage from '../assets/Products Page  copy/WoodCoat – High Gloss Wood Finish.png';
import puEnamelImage from '../assets/Products Page  copy/PU Enamel.png';
import epoxyCoatingImage from '../assets/Products Page  copy/Epoxy Coating.png';

interface Product {
    id: string;
    name: string;
    description: string;
    features: string[];
    sizes?: string;
    bestFor?: string;
    image: string;
    category: string;
    tags: string[];
}

const ProductsPage = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const products: Product[] = [
        {
            id: 'epoxy-industrial-coat',
            name: "Epoxy Industrial Coat",
            description: "Heavy-duty epoxy coating for industrial machinery, floors and metal surfaces.",
            features: [
                "Corrosion-resistant",
                "Long-lasting protection",
                "Excellent surface hardness"
            ],
            sizes: "1L, 4L, 20L",
            bestFor: "Steel structures, machinery, industrial floors",
            image: epoxyCoatingImage,
            category: "Industrial",
            tags: ["Industrial"]
        },
        {
            id: 'auto-fine-enamel',
            name: "AutoFine Metallic Red",
            description: "Premium metallic finish for automotive bodyworks.",
            features: [
                "UV Protection",
                "Scratch Resistant",
                "Deep Gloss"
            ],
            sizes: "1L, 4L, 20L",
            bestFor: "Cars, bikes, gates, metal parts",
            image: autoFineImage,
            category: "Automotive",
            tags: ["Automotive"]
        },
        {
            id: 'woodcoat-clear-gloss',
            name: "WoodCoat Clear Gloss",
            description: "High-gloss clear polyurethane for wooden furniture.",
            features: [
                "Fast Drying",
                "Water Resistant",
                "Non-Yellowing"
            ],
            sizes: "500ml, 1L, 4L",
            bestFor: "Furniture, doors, wooden surfaces",
            image: woodCoatImage,
            category: "Wood Finishes",
            tags: ["Wood Finishes"]
        },
        {
            id: 'pu-enamel',
            name: "PU Enamel",
            description: "Industrial-grade enamel for superior protection on steel and metal surfaces.",
            features: [
                "High durability",
                "Strong adhesion",
                "Resistant to chemicals & abrasion"
            ],
            sizes: "1L, 4L, 20L",
            image: puEnamelImage,
            category: "Industrial",
            tags: ["Industrial", "Metal"]
        }
    ];

    const categories = ['All', 'Industrial', 'Automotive', 'Wood Finishes', 'Decorative', 'Primers'];

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(product => product.category === activeCategory);

    return (
        <div className="products-page">
            <div className="products-container">
                {/* Page Header */}
                <div className="products-header">
                    <h1 className="products-title">Our Products</h1>
                    <p className="products-subtitle">
                        Explore our comprehensive range of high-performance coating solutions.
                    </p>
                </div>

                {/* Category Filter Tabs */}
                <div className="category-filters">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`category-filter ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="products-grid">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="product-card">
                            {/* Category Badge */}
                            <div className="product-card__badge">{product.category}</div>

                            <div className="product-card__image">
                                <img src={product.image} alt={product.name} />
                            </div>

                            <div className="product-card__content">
                                <div className="product-card__header">
                                    <h2 className="product-card__name">{product.name}</h2>
                                    <p className="product-card__description">{product.description}</p>
                                </div>

                                <div className="product-card__body">
                                    <div className="product-card__tags">
                                        {product.features.slice(0, 3).map((feature, idx) => (
                                            <span key={idx} className="product-card__tag">{feature}</span>
                                        ))}
                                    </div>
                                </div>

                                <Link
                                    to={`/products/${product.id}`}
                                    className="product-card__button"
                                >
                                    View Details
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
