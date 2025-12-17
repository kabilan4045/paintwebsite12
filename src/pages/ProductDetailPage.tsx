import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import './ProductDetailPage.css';
import { getProductById } from '../data/products';
import checkMarkIcon from '../check-mark.png';
import EnquiryModal from '../components/EnquiryModal';

const ProductDetailPage = () => {
    const { productId } = useParams<{ productId: string }>();
    const [selectedImage, setSelectedImage] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Get product data by ID from URL
    const product = productId ? getProductById(productId) : null;

    // If product not found, show error
    if (!product) {
        return (
            <div className="product-detail-page">
                <div className="product-detail-container">
                    <h1>Product Not Found</h1>
                    <p>The product you're looking for doesn't exist.</p>
                    <Link to="/products">Back to Products</Link>
                </div>
            </div>
        );
    }

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
                                        <img src={checkMarkIcon} alt="check" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Ideal Applications */}
                        <div className="product-section-single">
                            <h3 className="section-title-centered">Ideal Applications</h3>
                            <div className="applications-grid">
                                {product.idealApplications.map((application, index) => (
                                    <div key={index} className="application-item">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                        <span>{application}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="product-actions">
                            <button className="btn-enquire" onClick={() => setIsModalOpen(true)}>
                                Enquire Now
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </button>
                            <button className="btn-download">
                                Download Brochure
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enquiry Modal */}
            <EnquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                productName={product.name}
            />
        </div>
    );
};

export default ProductDetailPage;
