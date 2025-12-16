import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsPage.css';
import { products as allProducts } from '../data/products';

const ProductsPage = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Industrial', 'Automotive', 'Wood', 'Decorative', 'Primers'];

    const filteredProducts = activeCategory === 'All'
        ? allProducts
        : allProducts.filter(product => product.category === activeCategory);

    return (
        <div className="products-page">
            {/* Page Header - Full Width */}
            <div className="products-header">
                <h1 className="products-title">Our Products</h1>
                <p className="products-subtitle">
                    Explore our comprehensive range of high-performance coating solutions.
                </p>
            </div>

            <div className="products-container">
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
                        <Link
                            key={product.id}
                            to={`/products/${product.id}`}
                            className="product-card"
                        >
                            {/* Category Badge */}
                            <div className="product-card__badge">{product.category}</div>

                            <div className="product-card__image">
                                <img src={product.images[0]} alt={product.name} />
                            </div>

                            <div className="product-card__content">
                                <div className="product-card__header">
                                    <h2 className="product-card__name">{product.name}</h2>
                                    <p className="product-card__description">{product.description}</p>
                                </div>

                                <div className="product-card__button-wrapper">
                                    <span className="product-card__button">
                                        View Details
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
