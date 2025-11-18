
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  image?: string;
  type?: string;
  publishedAt?: string;
  updatedAt?: string;
  keywords?: string[];
  author?: string;
  noIndex?: boolean;
}

const Seo = ({ 
  title, 
  description, 
  canonicalUrl,
  image = "/lovable-uploads/7af443a2-0eea-46d3-8be1-6ad1aab655af.png",
  type = "website",
  publishedAt,
  updatedAt,
  keywords = [],
  author = "Baker and Davis - Pharmaceutical Distributors & Exporters",
  noIndex = false
}: SeoProps) => {
  const siteName = "Baker and Davis | Baker & Davis | Baker Davis";
  const fullTitle = `${title} | ${siteName}`;
  const siteUrl = "https://bdindia.in";
  const fullCanonical = canonicalUrl ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${siteUrl}${canonicalUrl}`) : `${siteUrl}${window.location.pathname}`;
  
  // Optimize description length for SEO (150-160 characters is ideal)
  const optimizedDescription = description.length > 160 
    ? description.substring(0, 157) + '...' 
    : description;
  
  // Core brand keywords - Prioritized and optimized list
  const brandKeywords = [
    "Baker and Davis",
    "Baker & Davis",
    "Baker Davis",
    "BD India",
    "Baker Davis India",
    "Baker and Davis Mumbai",
    "pharmaceutical distributor Mumbai",
    "medicine exporter India",
    "Baker Davis pharmaceutical",
    "pharmaceutical trading India"
  ];
  
  // Merge brand keywords with page-specific keywords, limit total for performance
  const allKeywords = [...brandKeywords, ...keywords].slice(0, 20);
  const keywordsString = allKeywords.join(', ');
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={optimizedDescription} />
      <meta name="keywords" content={keywordsString} />
      {author && <meta name="author" content={author} />}
      
      {/* Brand-specific meta tags - ALL NAME VARIATIONS */}
      <meta name="company" content="Baker and Davis, Baker & Davis, Baker Davis" />
      <meta name="brand" content="Baker and Davis, Baker & Davis, Baker Davis, BD India, bdindia, Baker India" />
      <meta name="business-name" content="Baker and Davis Pharmaceutical Distributors" />
      <meta name="alternate-names" content="Baker Davis, Davis Baker, Davis and Baker, BD India, Baker India, Baker Davis India, Baker and Davis Mumbai, Baker and Davis India" />
      <meta name="organization" content="Baker and Davis Private Limited" />
      
      {/* Business Type Schema */}
      <meta name="business-type" content="Pharmaceutical Distributor, Trader & Exporter" />
      <meta name="industry" content="Pharmaceutical Distribution & International Trade" />
      <meta name="services" content="Pharmaceutical Distribution, Medicine Export, Global Trading, Pharmaceutical Supply Chain, Medicine Distribution" />
      <meta name="target-audience" content="Pharmaceutical Buyers, Hospitals, Medical Distributors, International Pharmaceutical Traders" />
      
      {/* Location-specific */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Mumbai, Maharashtra, India" />
      <meta name="geo.position" content="19.0760;72.8777" />
      <meta name="ICBM" content="19.0760, 72.8777" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Hreflang for international SEO */}
      <link rel="alternate" hrefLang="en" href={fullCanonical} />
      <link rel="alternate" hrefLang="en-in" href={fullCanonical} />
      <link rel="alternate" hrefLang="en-us" href={fullCanonical} />
      <link rel="alternate" hrefLang="x-default" href={fullCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={optimizedDescription} />
      <meta property="og:image" content={image.startsWith('http') ? image : `${siteUrl}${image}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@BakerDavisIndia" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={optimizedDescription} />
      <meta name="twitter:image" content={image.startsWith('http') ? image : `${siteUrl}${image}`} />
      
      {/* Article Specific (if type is article) */}
      {type === 'article' && publishedAt && <meta property="article:published_time" content={publishedAt} />}
      {type === 'article' && updatedAt && <meta property="article:modified_time" content={updatedAt} />}
      
      {/* Schema.org JSON-LD for Business - Enhanced with all name variations */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Corporation",
          "name": "Baker and Davis",
          "legalName": "Baker and Davis Private Limited",
          "alternateName": [
            "Baker & Davis",
            "Baker Davis", 
            "Davis and Baker",
            "Davis Baker",
            "BD India", 
            "bdindia",
            "Baker India",
            "Baker Davis India",
            "Baker and Davis India",
            "Baker and Davis Mumbai",
            "Baker and Davis Pharmaceuticals",
            "Baker Davis Pharmaceuticals"
          ],
          "url": siteUrl,
          "logo": `${siteUrl}${image}`,
          "image": `${siteUrl}${image}`,
          "description": description,
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
            "contactType": "customer service",
            "telephone": "+91-22-48256677",
            "email": "admin@bdindia.in",
            "availableLanguage": ["English", "Hindi"],
            "areaServed": "Worldwide"
          },
          "sameAs": [
            `${siteUrl}`,
            "https://bdindia.in"
          ],
          "foundingDate": "2003",
          "foundingLocation": {
            "@type": "Place",
            "name": "Mumbai, India"
          },
          "industry": "Pharmaceutical Distribution and Export",
          "knowsAbout": [
            "Pharmaceutical Distribution",
            "Medicine Export",
            "Pharmaceutical Trading",
            "Global Pharmaceutical Supply",
            "Medicine Distribution",
            "Pharmaceutical Logistics"
          ],
          "slogan": "Baker and Davis - Your Trusted Pharmaceutical Partner",
          "brand": {
            "@type": "Brand",
            "name": "Baker and Davis",
            "alternateName": ["Baker & Davis", "Baker Davis", "BD India"]
          },
          "award": ["ISO-9001-2015", "WHO-GMP Certification"]
        })}
      </script>
      
      {/* No Index if specified */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Enhanced robots meta */}
      {!noIndex && <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />}
    </Helmet>
  );
};

export default Seo;
