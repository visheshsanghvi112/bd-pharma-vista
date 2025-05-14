
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
  author = "Baker & Davis",
  noIndex = false
}: SeoProps) => {
  const siteName = "Baker & Davis";
  const fullTitle = `${title} | ${siteName}`;
  const siteUrl = "https://bdindia.in";
  const fullCanonical = canonicalUrl ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${siteUrl}${canonicalUrl}`) : `${siteUrl}${window.location.pathname}`;
  
  // Process keywords array into a string
  const keywordsString = keywords.join(', ');
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywordsString && <meta name="keywords" content={keywordsString} />}
      {author && <meta name="author" content={author} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image.startsWith('http') ? image : `${siteUrl}${image}`} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.startsWith('http') ? image : `${siteUrl}${image}`} />
      
      {/* Article Specific (if type is article) */}
      {type === 'article' && publishedAt && <meta property="article:published_time" content={publishedAt} />}
      {type === 'article' && updatedAt && <meta property="article:modified_time" content={updatedAt} />}
      
      {/* No Index if specified */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
};

export default Seo;
