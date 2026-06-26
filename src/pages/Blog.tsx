import React from 'react';
import { SEO } from '../components/SEO';
import { blogPosts } from '../data';

const Blog = () => {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Shadeora Journal",
    "description": "Thoughts on design, architecture, and finding the perfect eyewear frame.",
    "publisher": {
      "@type": "Organization",
      "name": "Shadeora Frames",
      "logo": "https://shadeoraframes.netlify.app/favicon.svg"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "image": post.image,
      "datePublished": post.date,
      "description": post.excerpt,
      "author": {
        "@type": "Organization",
        "name": "Shadeora Frames"
      }
    }))
  };

  return (
    <div className="bg-brand-white min-h-screen py-24 px-4 text-center">
      <SEO 
        title="The Journal – Eyewear Design & Insights | Shadeora Frames" 
        description="Read our latest insights, architectural fashion styling tips, and news from the world of luxury handcrafted eyewear." 
        schema={blogSchema}
      />
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">The Shadeora Journal</h1>
        <p className="text-brand-black/60 text-lg mb-16 max-w-2xl mx-auto">
          Thoughts on design, architecture, and finding the perfect frame.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <article key={post.id} className="text-left bg-white rounded-3xl overflow-hidden shadow-sm border border-brand-black/5 flex flex-col">
              <div className="aspect-[4/3] bg-brand-gray overflow-hidden">
                <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <time className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-4 block">
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </time>
                <h2 className="font-serif text-2xl mb-4">{post.title}</h2>
                <p className="text-brand-black/60 text-sm mb-6 flex-grow">{post.excerpt}</p>
                <button className="text-[10px] font-bold uppercase tracking-widest text-brand-black group-hover:text-brand-gold transition-colors block mt-auto w-fit">
                  Read Journal
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
