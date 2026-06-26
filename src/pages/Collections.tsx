import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { collections } from '../data';
import { ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';

const Collections = () => {
  return (
    <div className="bg-brand-white min-h-screen">
      <SEO 
        title="Curated Collections – Handcrafted Eyewear | Shadeora Frames" 
        description="Browse through our curated collections of luxury handcrafted spectacles and sunglasses, featuring structural elegance and premium acetate details." 
      />
      {/* Header */}
      <section className="bg-white py-24 px-4 border-b border-brand-black/5 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-4">Curated</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Collections</h1>
          <p className="text-brand-black/60 text-sm tracking-wide max-w-xl mx-auto">
            Discover our meticulously curated collections, grouping frames by their architectural inspiration and intended lifestyle.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-24">
          {collections.map((collection, idx) => (
            <motion.div 
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/5] md:aspect-square bg-brand-gray rounded-3xl overflow-hidden shadow-sm border border-brand-black/5">
                  <img 
                    src={collection.image} 
                    alt={collection.name} 
                    className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col items-start px-4 md:px-12">
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-4">Vol. {idx + 1}</p>
                <h2 className="font-serif text-4xl mb-6">{collection.name}</h2>
                <p className="text-brand-black/60 text-sm leading-relaxed mb-8 max-w-md">
                  {collection.description} Seamlessly blending architectural aesthetics with modern demands, this collection brings forward a bold new look.
                </p>
                <Link 
                  to={collection.id === 'c1' ? '/shop?category=Prescription%20Frames' : collection.id === 'c2' ? '/shop?category=Sunglasses' : '/shop'}
                  className="inline-flex items-center px-8 py-3 bg-brand-black text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-black transition-colors"
                >
                  Explore Collection <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Collections;
