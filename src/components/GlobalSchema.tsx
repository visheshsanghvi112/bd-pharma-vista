import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const GlobalSchema = () => {
    const location = useLocation();
    const path = location.pathname;
    const baseUrl = 'https://bdindia.in';

    // Organization Schema (Static) - Comprehensive data for the company
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Baker and Davis",
        "alternateName": [
            "Baker & Davis",
            "BD India",
            "bdindia",
            "Baker and Davis Pharmaceuticals",
            "Baker and Davis Mumbai"
        ],
        "legalName": "Baker and Davis Private Limited",
        "url": baseUrl,
        "logo": `${baseUrl}/lovable-uploads/7af443a2-0eea-46d3-8be1-6ad1aab655af.png`,
        "description": "Baker and Davis (Baker & Davis, BD India) - Trusted pharmaceutical distributor and exporter in Mumbai, Maharashtra, India. Specializing in pharmaceutical distribution, medicine trading, and export services.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "42/44, Babu Genu Road, Shop No. 14, 2nd Floor",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "400002",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-22-48256677",
            "contactType": "customer service",
            "email": "admin@bdindia.in",
            "areaServed": "Worldwide",
            "availableLanguage": ["English", "Hindi"]
        },
        "sameAs": [
            baseUrl,
            "https://www.bdindia.in"
        ],
        "foundingDate": "2017",
        "founders": [
            {
                "@type": "Person",
                "name": "Rashid Yusuf Shaikh"
            }
        ],
        "knowsAbout": [
            "Pharmaceutical Distribution",
            "Medicine Export",
            "Pharmaceutical Trading",
            "Global Pharmaceutical Supply",
            "Medicine Distribution"
        ],
        "slogan": "Baker and Davis - Your Trusted Pharmaceutical Partner",
        "areaServed": {
            "@type": "Place",
            "name": "India and International Markets"
        },
        "makesOffer": {
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": "Pharmaceutical Distribution and Export Services",
                "description": "Baker and Davis provides pharmaceutical distribution, medicine trading, and export services across India and 10+ countries"
            }
        },
        "brand": {
            "@type": "Brand",
            "name": "Baker and Davis",
            "alternateName": ["Baker & Davis", "Baker Davis", "BD India"]
        }
    };

    // Breadcrumb Schema (Dynamic) - Generates breadcrumbs based on current route
    const breadcrumbItems = [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": baseUrl
        }
    ];

    if (path !== '/') {
        const pathSegments = path.split('/').filter(Boolean);
        let currentPath = '';

        pathSegments.forEach((segment, index) => {
            currentPath += `/${segment}`;
            // Format name: "our-story" -> "Our Story"
            const name = segment
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

            breadcrumbItems.push({
                "@type": "ListItem",
                "position": index + 2,
                "name": name,
                "item": `${baseUrl}${currentPath}`
            });
        });
    }

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbSchema)}
            </script>
        </Helmet>
    );
};

export default GlobalSchema;
