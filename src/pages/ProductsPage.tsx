import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/structuredData';
import './ProductsPage.css';
import { products as allProducts } from '../data/products';

const ProductsPage = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Industrial', 'Automotive', 'Wood', 'Decorative', 'Primers'];

    const filteredProducts = activeCategory === 'All'
        ? allProducts
        : allProducts.filter(product => product.category === activeCategory);

    const breadcrumbSchema = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
    ]);

    return (
        <>
            <SEO
                title="Premium Paint Products - Industrial, Automotive & Decorative Coatings | Yashwanth Colour Coatings"
                description="Explore our comprehensive range of high-performance coating solutions including industrial paints, automotive enamels, wood finishes, and decorative coatings. Quality products from Chennai's trusted manufacturer."
                keywords="industrial paints, automotive enamel, wood finish, decorative coatings, synthetic enamel, spray paints, PU enamel, epoxy coating, primer paints, Chennai paint products"
                canonicalUrl="/products"
                structuredData={breadcrumbSchema}
            />
            <div className="products-page">
                {/* Page Header - Full Width */}
                <header className="products-header">
                    <h1 className="products-title">Our Products</h1>
                    <p className="products-subtitle">
                        Explore our comprehensive range of high-performance coating solutions.
                    </p>
                </header>

                <div className="products-container">
                    {/* Category Filter Tabs */}
                    <nav className="category-filters" aria-label="Product categories">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`category-filter ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                                aria-pressed={activeCategory === category}
                            >
                                {category}
                            </button>
                        ))}
                    </nav>

                    {/* Products Grid */}
                    <section className="products-grid">
                        {filteredProducts.map((product) => (
                            <Link
                                key={product.id}
                                to={`/products/${product.id}`}
                                className="product-card"
                            >
                                {/* Category Badge */}
                                <div className="product-card__badge">{product.category}</div>

                                <div className="product-card__image">
                                    <img
                                        src={product.images[0]}
                                        alt={`${product.name} - ${product.category} coating`}
                                        loading="lazy"
                                        width="400"
                                        height="300"
                                    />
                                </div>

                                <div className="product-card__content">
                                    <div className="product-card__header">
                                        <h2 className="product-card__name">{product.name}</h2>
                                        <p className="product-card__description">{product.description}</p>
                                    </div>

                                    <div className="product-card__button-wrapper">
                                        <span className="product-card__button">
                                            View Details
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </section>
                </div>
            </div>
        </>
    );
};

export default ProductsPage;

