import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogType?: string;
    twitterCard?: 'summary' | 'summary_large_image';
    structuredData?: object;
    noindex?: boolean;
}

const SEO = ({
    title = 'Yashwanth Colour Coatings - Premium Industrial & Automotive Coatings in Chennai',
    description = 'Yashwanth Colour Coatings offers premium industrial, automotive, wood and decorative coatings in Chennai. 30+ years of trusted quality. Synthetic enamel paints, spray paints, and powder coating services.',
    keywords = 'colour coatings chennai, industrial coatings, automotive enamel, wood finish, powder coating, synthetic enamel paints, spray paints, PU enamel, epoxy coating, decorative enamels, Chennai paint manufacturer',
    canonicalUrl,
    ogImage = '/logo.jpg',
    ogType = 'website',
    twitterCard = 'summary_large_image',
    structuredData,
    noindex = false,
}: SEOProps) => {
    const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
    const fullCanonicalUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : siteUrl);
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Canonical URL */}
            <link rel="canonical" href={fullCanonicalUrl} />

            {/* Robots */}
            <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={fullCanonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullOgImage} />
            <meta property="og:site_name" content="Yashwanth Colour Coatings" />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:url" content={fullCanonicalUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullOgImage} />

            {/* Additional Meta Tags */}
            <meta name="author" content="Yashwanth Colour Coatings" />
            <meta name="language" content="English" />
            <meta name="geo.region" content="IN-TN" />
            <meta name="geo.placename" content="Chennai" />

            {/* Structured Data (JSON-LD) */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
