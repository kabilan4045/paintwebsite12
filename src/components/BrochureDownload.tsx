import './BrochureDownload.css';

const BrochureDownload = () => {
    const handleDownload = () => {
        // Placeholder for actual PDF download
        console.log('Downloading brochure...');
        // In production: window.open('/path-to-brochure.pdf', '_blank');
    };

    return (
        <div className="brochure-page">
            {/* Hero Header Section */}
            <section className="brochure-hero">
                <div className="brochure-hero__container">
                    <h1 className="brochure-hero__title">Download Our Product Brochure</h1>
                    <p className="brochure-hero__subtitle">
                        Get a complete overview of our industrial, automotive, wood and decorative coating solutions.
                    </p>
                </div>
                <div className="brochure-hero__pattern"></div>
            </section>

            {/* Main Content Container */}
            <div className="brochure-content">
                {/* Main Download Section */}
                <section className="brochure-download">
                    <div className="download-card">
                        <div className="download-card__icon">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 18V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 15L12 18L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h2 className="download-card__title">Download Brochure (PDF)</h2>
                        <p className="download-card__description">
                            All products, specifications, features & application details in one file.
                        </p>
                        <button className="download-card__button" onClick={handleDownload}>
                            <span>Download Now</span>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default BrochureDownload;
