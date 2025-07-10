
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
  author = "Baker & Davis - Pharmaceutical Distributors & Exporters",
  noIndex = false
}: SeoProps) => {
  const siteName = "Baker & Davis - Pharmaceutical Distribution & Export";
  const fullTitle = `${title} | ${siteName}`;
  const siteUrl = "https://bdindia.in";
  const fullCanonical = canonicalUrl ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${siteUrl}${canonicalUrl}`) : `${siteUrl}${window.location.pathname}`;
  
  // Core brand keywords - Baker & Davis variations
  const brandKeywords = [
    "Baker & Davis",
    "Baker and Davis", 
    "Baker Davis",
    "Davis and Baker",
    "Davis Baker",
    "BD India",
    "bdindia",
    "Baker India",
    "Baker pharmaceutical India",
    "Davis pharmaceutical India",
    "Baker & Davis India",
    "Baker and Davis pharmaceutical",
    "BD pharmaceutical distributor",
    "Baker Davis exporter",
    "Baker & Davis trader"
  ];
  
  // Merge brand keywords with page-specific keywords
  const allKeywords = [...brandKeywords, ...keywords];
  const keywordsString = allKeywords.join(', ');
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      {author && <meta name="author" content={author} />}
      
      {/* Brand-specific meta tags */}
      <meta name="company" content="Baker & Davis" />
      <meta name="brand" content="Baker and Davis, BD India, bdindia" />
      <meta name="business-name" content="Baker & Davis Pharmaceutical Distributors" />
      <meta name="alternate-names" content="Baker Davis, Davis Baker, BD India, Baker India" />
      
      {/* Business Type Schema */}
      <meta name="business-type" content="Pharmaceutical Distributor, Trader & Exporter" />
      <meta name="industry" content="Pharmaceutical Distribution & International Trade" />
      <meta name="services" content="Pharmaceutical Distribution, Medicine Export, Global Trading" />
      
      {/* Location-specific */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Mumbai, Maharashtra, India" />
      <meta name="geo.position" content="19.0760;72.8777" />
      <meta name="ICBM" content="19.0760, 72.8777" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image.startsWith('http') ? image : `${siteUrl}${image}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@BakerDavisIndia" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.startsWith('http') ? image : `${siteUrl}${image}`} />
      
      {/* Article Specific (if type is article) */}
      {type === 'article' && publishedAt && <meta property="article:published_time" content={publishedAt} />}
      {type === 'article' && updatedAt && <meta property="article:modified_time" content={updatedAt} />}
      
      {/* Schema.org JSON-LD for Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Corporation",
          "name": "Baker & Davis",
          "alternateName": ["Baker and Davis", "Baker Davis", "BD India", "bdindia", "Baker India"],
          "url": siteUrl,
          "logo": `${siteUrl}${image}`,
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra", 
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi"]
          },
          "sameAs": [
            `${siteUrl}`,
            "https://bdindia.in"
          ],
          "founders": [
            {
              "@type": "Person",
              "name": "Baker & Davis Leadership"
            }
          ],
          "industry": "Pharmaceutical Distribution and Export",
          "foundingLocation": "Mumbai, India"
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
