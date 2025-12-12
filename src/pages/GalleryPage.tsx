import { useState } from 'react';
import './GalleryPage.css';

interface GalleryImage {
    id: number;
    title: string;
    category: string;
    imageUrl: string;
}

const GalleryPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    const categories = ['All', 'Interior Walls', 'Exterior Walls', 'Wood Finishes', 'Commercial Projects'];

    // Painting and coating related images
    const galleryImages: GalleryImage[] = [
        { id: 1, title: 'Modern Living Room Paint', category: 'Interior Walls', imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800' },
        { id: 2, title: 'Exterior House Coating', category: 'Exterior Walls', imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800' },
        { id: 3, title: 'Bedroom Wall Finish', category: 'Interior Walls', imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800' },
        { id: 4, title: 'Wooden Deck Coating', category: 'Wood Finishes', imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800' },
        { id: 5, title: 'Office Interior Paint', category: 'Commercial Projects', imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800' },
        { id: 6, title: 'Building Facade Paint', category: 'Exterior Walls', imageUrl: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800' },
        { id: 7, title: 'Kitchen Wall Coating', category: 'Interior Walls', imageUrl: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800' },
        { id: 8, title: 'Wood Furniture Finish', category: 'Wood Finishes', imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800' },
        { id: 9, title: 'Dining Room Paint', category: 'Interior Walls', imageUrl: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800' },
        { id: 10, title: 'Commercial Building Exterior', category: 'Commercial Projects', imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800' },
        { id: 11, title: 'Luxury Bedroom Walls', category: 'Interior Walls', imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800' },
        { id: 12, title: 'Wooden Cabinet Finish', category: 'Wood Finishes', imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800' },
        { id: 13, title: 'Home Exterior Paint', category: 'Exterior Walls', imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800' },
        { id: 14, title: 'Office Space Coating', category: 'Commercial Projects', imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800' },
        { id: 15, title: 'Living Area Wall Paint', category: 'Interior Walls', imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800' }
    ];

    const filteredImages = selectedCategory === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

    return (
        <div className="gallery-page">
            <div className="gallery-container">
                {/* Header with consistent design */}
                <div className="gallery-header">
                    <h1 className="gallery-title">Gallery</h1>
                    <p className="gallery-subtitle">
                        Explore our portfolio of completed projects and coating applications
                    </p>
                </div>

                {/* Category Filter */}
                <div className="gallery-filters">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`filter-btn ${selectedCategory === category ? 'filter-btn--active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="gallery-grid">
                    {filteredImages.map((image) => (
                        <div
                            key={image.id}
                            className="gallery-item"
                            onClick={() => setLightboxImage(image.imageUrl)}
                        >
                            <img src={image.imageUrl} alt={image.title} />
                            <div className="gallery-item__overlay">
                                <h3 className="gallery-item__title">{image.title}</h3>
                                <span className="gallery-item__category">{image.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightboxImage && (
                <div className="lightbox" onClick={() => setLightboxImage(null)}>
                    <button className="lightbox__close" onClick={() => setLightboxImage(null)}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <img src={lightboxImage} alt="Gallery" onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </div>
    );
};

export default GalleryPage;
