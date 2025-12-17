import { lazy, Suspense } from 'react';
import SEO from '../components/SEO';
import { getOrganizationSchema, getWebsiteSchema } from '../utils/structuredData';
import HeroSection from '../components/HeroSection';
import PaintboxShowcase from '../components/PaintboxShowcase';
import KeyProducts from '../components/KeyProducts';

// Lazy load below-the-fold components
const StatsSection = lazy(() => import('../components/StatsSection'));
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs'));
const TestimonialsSection = lazy(() => import('../components/TestimonialsSection'));

const Home = () => {
    // Combine organization and website schemas
    const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [getOrganizationSchema(), getWebsiteSchema()],
    };

    return (
        <>
            <SEO
                title="Yashwanth Colour Coatings - Premium Industrial & Automotive Coatings in Chennai"
                description="Yashwanth Colour Coatings offers premium industrial, automotive, wood and decorative coatings in Chennai. 30+ years of trusted quality. Synthetic enamel paints, spray paints, and powder coating services."
                keywords="colour coatings chennai, industrial coatings, automotive enamel, wood finish, powder coating, synthetic enamel paints, spray paints, PU enamel, epoxy coating, decorative enamels, Chennai paint manufacturer"
                canonicalUrl="/"
                structuredData={structuredData}
            />
            <div>
                <HeroSection />
                <PaintboxShowcase />
                <KeyProducts />
                <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
                    <StatsSection />
                    <WhyChooseUs />
                    <TestimonialsSection />
                </Suspense>
            </div>
        </>
    );
};

export default Home;

