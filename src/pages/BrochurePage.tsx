import './BrochurePage.css';

interface Brochure {
    title: string;
    description: string;
    fileSize: string;
}

const BrochurePage = () => {
    const brochures: Brochure[] = [
        {
            title: "Product Catalogue 2024",
            description: "Complete range of our industrial and decorative coatings",
            fileSize: "2.5 MB"
        },
        {
            title: "Industrial Coatings Guide",
            description: "Technical specifications for industrial applications",
            fileSize: "1.8 MB"
        },
        {
            title: "Automotive Coatings",
            description: "Premium automotive paint solutions and finishes",
            fileSize: "1.2 MB"
        },
        {
            title: "Wood Finishes Collection",
            description: "Comprehensive wood coating and finishing products",
            fileSize: "1.5 MB"
        },
        {
            title: "Colour Chart",
            description: "Full colour palette with shade codes and samples",
            fileSize: "3.2 MB"
        },
        {
            title: "Application Guide",
            description: "Step-by-step instructions for surface preparation and application",
            fileSize: "900 KB"
        }
    ];

    const handleDownload = (title: string) => {
        console.log(`Downloading: ${title}`);
        // Add your download logic here
    };

    return (
        <div className="brochure-page">
            <div className="brochure-container">
                <div className="brochure-header">
                    <h1 className="brochure-title">Download Brochures</h1>
                    <p className="brochure-subtitle">
                        Access our comprehensive product catalogues and technical guides
                    </p>
                </div>

                <div className="brochure-grid">
                    {brochures.map((brochure, index) => (
                        <div key={index} className="brochure-card">
                            <div className="brochure-card__icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            <div className="brochure-card__content">
                                <h3 className="brochure-card__title">{brochure.title}</h3>
                                <p className="brochure-card__description">{brochure.description}</p>
                                <span className="brochure-card__size">PDF • {brochure.fileSize}</span>
                            </div>

                            <button
                                className="brochure-card__button"
                                onClick={() => handleDownload(brochure.title)}
                            >
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Download</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrochurePage;

