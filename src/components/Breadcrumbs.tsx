import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight } from 'lucide-react';
import { products } from '../data';

interface BreadcrumbsProps {
  customSegments?: { label: string; path: string }[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ customSegments }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // If we are on the homepage, do not render breadcrumbs
  if (location.pathname === '/') {
    return null;
  }

  // Segment formatting helper
  const formatLabel = (segment: string): string => {
    switch (segment.toLowerCase()) {
      case 'shop':
        return 'Shop';
      case 'about':
        return 'About Us';
      case 'services':
        return 'Services';
      case 'blog':
        return 'The Journal';
      case 'contact':
        return 'Contact';
      case 'collections':
        return 'Collections';
      case 'face-shape-guide':
        return 'Face Shape Guide';
      case 'cart':
        return 'Shopping Cart';
      case 'wishlist':
        return 'My Wishlist';
      case 'sitemap':
        return 'Sitemap';
      case 'product':
        return 'Product Details';
      default:
        // Replace dashes/underscores and capitalize words
        return segment
          .replace(/[-_]/g, ' ')
          .replace(/\b\w/g, (char) => char.toUpperCase());
    }
  };

  // Build segments list
  let segments = [{ label: 'Home', path: '/' }];
  
  if (customSegments) {
    segments = [...segments, ...customSegments];
  } else if (pathnames[0] === 'product' && pathnames[1]) {
    // If it's a product page, create rich hierarchy: Home > Shop > Category > Product Name
    const foundProduct = products.find(p => p.id === pathnames[1]);
    segments.push({ label: 'Shop', path: '/shop' });
    if (foundProduct) {
      segments.push({ label: foundProduct.category, path: `/shop?category=${encodeURIComponent(foundProduct.category)}` });
      segments.push({ label: foundProduct.name, path: `/product/${foundProduct.id}` });
    } else {
      segments.push({ label: 'Product Details', path: `/product/${pathnames[1]}` });
    }
  } else {
    let currentPath = '';
    pathnames.forEach((pathname) => {
      currentPath += `/${pathname}`;
      segments.push({
        label: formatLabel(pathname),
        path: currentPath,
      });
    });
  }

  // Construct Google SEO Breadcrumb List Schema
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://shadeoraframes.netlify.app';
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": segments.map((seg, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": seg.label,
      "item": seg.path.startsWith('http') ? seg.path : `${origin}${seg.path}`
    }))
  };

  return (
    <>
      {/* Helmet injects the Breadcrumb schema in <head> */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      {/* Breadcrumb visual navigation bar */}
      <div className="bg-brand-white/80 border-b border-brand-black/5 py-4 px-4 sm:px-6 lg:px-8">
        <nav className="max-w-7xl mx-auto flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-brand-black/50">
          {segments.map((seg, index) => {
            const isLast = index === segments.length - 1;
            return (
              <React.Fragment key={seg.path}>
                {index > 0 && <ChevronRight className="w-3 h-3 text-brand-black/20" />}
                {isLast ? (
                  <span className="text-brand-gold select-none">{seg.label}</span>
                ) : (
                  <Link 
                    to={seg.path} 
                    className="hover:text-brand-black transition-colors"
                  >
                    {seg.label}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Breadcrumbs;
