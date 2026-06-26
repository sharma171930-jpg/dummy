import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
  schema?: Record<string, any>; // Support optional page-specific JSON-LD Schema
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image = '/images/collection_classics_1781788393297.jpg', // Default high-quality fallback image
  type = 'website',
  schema 
}) => {
  const canonicalUrl = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : 'https://shadeoraframes.netlify.app';
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://shadeoraframes.netlify.app';

  // Construct absolute URL for the image if it's relative
  const absoluteImageUrl = image.startsWith('http') 
    ? image 
    : `${typeof window !== 'undefined' ? window.location.origin : 'https://shadeoraframes.netlify.app'}${image}`;

  // Default Organization & Local Website JSON-LD Graph Schema
  const defaultSchemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://shadeoraframes.netlify.app/#organization",
        "name": "Shadeora Frames",
        "url": "https://shadeoraframes.netlify.app",
        "logo": {
          "@type": "ImageObject",
          "url": `${typeof window !== 'undefined' ? window.location.origin : 'https://shadeoraframes.netlify.app'}/favicon.svg`
        },
        "description": "Premium luxury handcrafted spectacles & eyewear frames designed with architectural principles.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-800-123-4567",
          "contactType": "customer service"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://shadeoraframes.netlify.app/#website",
        "url": "https://shadeoraframes.netlify.app",
        "name": "Shadeora Frames",
        "description": "Premium Handcrafted Eyewear & Custom Spectacles",
        "publisher": {
          "@id": "https://shadeoraframes.netlify.app/#organization"
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Shadeora Frames" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />

      {/* Brand & Website Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(defaultSchemaGraph)}
      </script>

      {/* Page-Specific Schema Markup (Product, FAQ, Blog, etc.) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
