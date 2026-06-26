import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const Sitemap = () => {
  const sections = [
    {
      title: "Primary Experience",
      links: [
        { label: "Homepage", path: "/" },
        { label: "Shop All Frames", path: "/shop" },
        { label: "Curated Collections", path: "/collections" },
        { label: "Face Shape Fit Guide", path: "/face-shape-guide" }
      ]
    },
    {
      title: "Our Story & Offerings",
      links: [
        { label: "About Shadeora Frames", path: "/about" },
        { label: "Premium Services", path: "/services" },
        { label: "The Journal (Blog)", path: "/blog" },
        { label: "Contact & Support", path: "/contact" }
      ]
    },
    {
      title: "Customer Portal",
      links: [
        { label: "Shopping Cart", path: "/cart" },
        { label: "My Wishlist", path: "/wishlist" }
      ]
    }
  ];

  return (
    <div className="bg-brand-white min-h-screen py-24 px-4">
      <SEO title="Sitemap | Shadeora Frames" description="Navigate through the structure of Shadeora Frames. Discover products, collections, services, and blogs." />
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-center">Sitemap</h1>
        <p className="text-brand-black/60 text-lg mb-16 text-center max-w-xl mx-auto">
          Explore all sections of Shadeora Frames to easily find our handcrafted, architecturally-inspired spectacles and services.
        </p>

        <div className="grid md:grid-cols-3 gap-12 bg-white p-12 rounded-3xl border border-brand-black/5 shadow-sm">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-xl font-bold mb-6 text-brand-gold border-b border-brand-gold/20 pb-2">{section.title}</h2>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path} 
                      className="text-sm text-brand-black/75 hover:text-brand-gold hover:underline transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
