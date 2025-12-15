import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import './ProductDetailPage.css';

// Import product images
import epoxyCoatingImage from '../assets/Products Page  copy/Epoxy Coating.png';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const [selectedImage, setSelectedImage] = useState(0);

    // Product data (in real app, this would come from API or props)
    const product = {
        id: 'epoxy-industrial-coat',
        name: 'Epoxy Industrial Coat',
        description: 'A high-performance two-component epoxy coating designed for severe industrial environments. Provides excellent resistance to chemicals, abrasion, and impact.',
        category: 'Industrial',
        images: [epoxyCoatingImage, epoxyCoatingImage, epoxyCoatingImage],
        keyFeatures: [
            'Superior chemical resistance',
            'Excellent abrasion resistance',
            'High gloss retention',
            'Suitable for steel and concrete'
        ],
        specifications: {
            'Finish': 'Glossy',
            'Drying Time': '4-8 Hours',
            'Coverage': '10-12 sq.m/liter',
            'Pack Sizes': '1L, 4L, 20L'
        }
    };

    return (
        <div className="product-detail-page">
            <div className="product-detail-container">
                {/* Breadcrumb */}
                <nav className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/products">Products</Link>
                    <span>/</span>
                    <span>{product.name}</span>
                </nav>

                {/* Product Content */}
                <div className="product-detail-content">
                    {/* Left: Images */}
                    <div className="product-images">
                        <div className="product-image-main">
                            <img src={product.images[selectedImage]} alt={product.name} />
                        </div>
                        <div className="product-image-thumbnails">
                            {product.images.map((image, index) => (
                                <button
                                    key={index}
                                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                                    onClick={() => setSelectedImage(index)}
                                >
                                    <img src={image} alt={`${product.name} ${index + 1}`} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Details */}
                    <div className="product-info">
                        {/* Category Badge */}
                        <span className="product-category-badge">{product.category}</span>

                        <h1 className="product-name">{product.name}</h1>
                        <p className="product-description">{product.description}</p>

                        {/* Key Features Only */}
                        <div className="product-section-single">
                            <h3 className="section-title-centered">Key Features</h3>
                            <ul className="features-list">
                                {product.keyFeatures.map((feature, index) => (
                                    <li key={index}>
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA Buttons */}
                        <div className="product-actions">
                            <button className="btn-enquire">
                                Enquire Now
                            </button>
                            <button className="btn-download">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                                </svg>
                                Download Brochure
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
