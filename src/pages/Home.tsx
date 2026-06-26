import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useShop } from '../context/ShopContext';
import { collections, blogPosts } from '../data';
import { SEO } from '../components/SEO';

const Home = () => {
  const { products } = useShop();
  
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4);
  const newArrivals = products.filter(p => p.isNew).slice(0, 4);

  return (
    <div className="flex flex-col">
      <SEO title="Shadeora Frames – Stylish Spectacles & Eyewear Frames" description="Discover our collection of handcrafted luxury eyewear and sunglasses. Crafted in premium materials for the modern individual." />
      {/* Hero Section */}
      <section className="relative h-[90vh] flex flex-col md:flex-row bg-white border-b border-brand-black/5">
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center gap-6 z-10 bg-white">
          <span className="text-brand-gold font-serif italic text-lg tracking-wide">The Aurora Collection</span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-light leading-none text-brand-black"
          >
            Sculpted in<br/><span className="italic font-bold">Titanium.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-brand-black/60 leading-relaxed max-w-sm"
          >
            Handcrafted in Japan with aerospace-grade materials. Minimal weight, maximum statement.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4"
          >
            <Link 
              to="/shop" 
              className="bg-brand-black text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-black transition-all w-full sm:w-auto text-center"
            >
              Explore Collection
            </Link>
            <Link 
              to="/face-shape-guide" 
              className="border border-brand-black text-brand-black px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-black hover:text-white transition-all w-full sm:w-auto text-center"
            >
              Virtual Try-on
            </Link>
          </motion.div>
        </div>
        
        <div className="w-full md:w-1/2 bg-brand-gray relative flex items-center justify-center">
          <div className="absolute inset-0 z-0">
             <img 
               src="/images/hero_background_1781788308383.jpg" 
               alt="Hero Background" 
               className="w-full h-full object-cover object-center mix-blend-multiply opacity-50"
             />
          </div>
          <div className="w-64 h-64 md:w-80 md:h-80 bg-brand-beige rounded-full flex items-center justify-center shadow-2xl relative z-10 p-8">
            <img 
               src="/images/luxury_sunglasses_1_1781788325262.jpg" 
              alt="Hero product"
              className="w-full h-full object-cover rounded-full mix-blend-multiply"
            />
          </div>
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 text-right z-10 bg-white/80 backdrop-blur-sm p-4 rounded-xl">
            <p className="text-[10px] font-bold tracking-widest text-brand-black/60 uppercase">Model: Aurelia</p>
            <p className="text-xl font-serif italic text-brand-gold">$185.00</p>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 bg-brand-white border-b border-brand-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">Curated Collections</h2>
            <p className="text-brand-black/60 text-sm tracking-wide">Explore our carefully crafted categories.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.map((collection, idx) => (
              <motion.div 
                key={collection.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-96 overflow-hidden rounded-2xl bg-brand-gray border border-transparent hover:border-brand-gold/40 transition-all shadow-sm"
              >
                <img 
                  src={collection.image} 
                  alt={collection.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full transition-transform duration-500 transform group-hover:-translate-y-2">
                  <h3 className="font-serif text-2xl text-white mb-2">{collection.name}</h3>
                  <p className="text-white/80 text-xs mb-4 line-clamp-2 max-w-[80%]">{collection.description}</p>
                  <Link 
                    to={collection.id === 'c1' ? '/shop?category=Prescription%20Frames' : collection.id === 'c2' ? '/shop?category=Sunglasses' : '/shop'} 
                    className="inline-flex items-center px-6 py-2 bg-white text-brand-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-gold transition-colors"
                  >
                    Explore
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-4">Best Sellers</h2>
              <p className="text-brand-black/60 text-sm tracking-wide">Our most loved frames by you.</p>
            </div>
            <Link to="/shop" className="hidden sm:inline-flex items-center px-6 py-2 border border-brand-black text-brand-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-black hover:text-white transition-all">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-brand-black/5">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-10 text-center sm:hidden">
            <Link to="/shop" className="inline-flex items-center text-sm font-medium hover:text-brand-gold">
              View All Best Sellers <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Full Width Banner */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/collection_titanium_1781788424890.jpg" 
            alt="New Arrivals Banner" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-brand-black/40"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="tracking-[0.2em] text-brand-gold text-[10px] font-bold mb-4 uppercase">Introducing</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-white mb-8">Titanium Series</h2>
          <Link 
            to="/shop?category=Prescription%20Frames" 
            className="px-10 py-4 bg-brand-gold text-brand-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all"
          >
            Discover Now
          </Link>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-4">New Arrivals</h2>
              <p className="text-brand-black/60 text-sm tracking-wide">Fresh styles just landed.</p>
            </div>
            <Link to="/shop" className="hidden sm:inline-flex items-center px-6 py-2 border border-brand-black text-brand-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-black hover:text-white transition-all">
              Shop New
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-brand-beige/30 p-6 rounded-2xl">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-brand-black text-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-800">
            <div className="pt-8 md:pt-0 pb-8 md:pb-0 px-6">
              <h3 className="font-serif text-xl font-medium mb-4 text-brand-gold">Free Shipping</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">Enjoy free express shipping on all orders over $150 worldwide.</p>
            </div>
            <div className="py-8 md:py-0 px-6">
              <h3 className="font-serif text-xl font-medium mb-4 text-brand-gold">Handcrafted</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">Every frame is meticulously crafted using premium sustainable materials.</p>
            </div>
            <div className="pt-8 md:pt-0 px-6">
              <h3 className="font-serif text-xl font-medium mb-4 text-brand-gold">30-Day Returns</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">Not the perfect fit? Return them within 30 days, no questions asked.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">The Journal</h2>
            <p className="text-brand-black/60 text-sm tracking-wide">Insights, style guides, and stories.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer flex flex-col gap-4"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-brand-gray border border-transparent group-hover:border-brand-gold/40 transition-all">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-multiply"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[10px] text-brand-gold font-bold tracking-widest uppercase">{post.date}</p>
                  <h3 className="font-serif text-lg font-bold group-hover:text-brand-gold transition-colors mt-1 mb-2">{post.title}</h3>
                  <p className="text-xs text-brand-black/60 leading-relaxed max-w-[90%]">{post.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      {/* Social Section */}
      <section className="py-24">
        <div className="text-center mb-12 px-4">
          <h2 className="font-serif text-3xl md:text-5xl mb-4">Through Your Lens</h2>
          <p className="text-brand-black/60 max-w-2xl mx-auto">
            Tag @AuraEyewear to be featured in our monthly gallery.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          <div className="aspect-square relative overflow-hidden group">
            <img src="/images/social_1_1781789222579.jpg" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Customer styling 1" />
            <div className="absolute inset-0 bg-brand-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-xs font-bold uppercase tracking-widest border-b border-white pb-1">Shop Look</span>
            </div>
          </div>
          <div className="aspect-square relative overflow-hidden group">
            <img src="/images/social_2_1781789235301.jpg" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Customer styling 2" />
            <div className="absolute inset-0 bg-brand-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-xs font-bold uppercase tracking-widest border-b border-white pb-1">Shop Look</span>
            </div>
          </div>
          <div className="aspect-square relative overflow-hidden group">
            <img src="/images/social_3_1781789250549.jpg" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Customer styling 3" />
            <div className="absolute inset-0 bg-brand-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-xs font-bold uppercase tracking-widest border-b border-white pb-1">Shop Look</span>
            </div>
          </div>
          <div className="aspect-square relative overflow-hidden group">
            <img src="/images/social_4_1781789267473.jpg" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Customer styling 4" />
            <div className="absolute inset-0 bg-brand-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-xs font-bold uppercase tracking-widest border-b border-white pb-1">Shop Look</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
