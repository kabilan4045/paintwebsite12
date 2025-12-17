// Structured Data (JSON-LD) generators for SEO

export const getOrganizationSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Yashwanth Colour Coatings',
    url: typeof window !== 'undefined' ? window.location.origin : '',
    logo: typeof window !== 'undefined' ? `${window.location.origin}/logo.jpg` : '',
    description: 'Premium manufacturer of industrial, automotive, wood and decorative coatings in Chennai since 1995',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN',
    },
    contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        availableLanguage: ['English', 'Tamil', 'Hindi'],
    },
    sameAs: [
        // Add social media URLs here when available
    ],
    foundingDate: '1995',
    areaServed: {
        '@type': 'Country',
        name: 'India',
    },
});

export const getWebsiteSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Yashwanth Colour Coatings',
    url: typeof window !== 'undefined' ? window.location.origin : '',
    description: 'Premium Industrial & Automotive Coatings in Chennai',
    publisher: {
        '@type': 'Organization',
        name: 'Yashwanth Colour Coatings',
    },
});

export const getProductSchema = (product: {
    name: string;
    description: string;
    image?: string;
    category?: string;
}) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image || '/logo.jpg',
    brand: {
        '@type': 'Brand',
        name: 'Yashwanth Colour Coatings',
    },
    manufacturer: {
        '@type': 'Organization',
        name: 'Yashwanth Colour Coatings',
    },
    category: product.category || 'Paint & Coatings',
});

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: typeof window !== 'undefined' ? `${window.location.origin}${item.url}` : item.url,
    })),
});

export const getLocalBusinessSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Yashwanth Colour Coatings',
    image: typeof window !== 'undefined' ? `${window.location.origin}/logo.jpg` : '',
    '@id': typeof window !== 'undefined' ? window.location.origin : '',
    url: typeof window !== 'undefined' ? window.location.origin : '',
    telephone: '', // Add phone number
    address: {
        '@type': 'PostalAddress',
        streetAddress: '', // Add street address
        addressLocality: 'Chennai',
        addressRegion: 'TN',
        postalCode: '', // Add postal code
        addressCountry: 'IN',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 13.0827, // Chennai coordinates - update with actual location
        longitude: 80.2707,
    },
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
    },
    priceRange: '$$',
});
