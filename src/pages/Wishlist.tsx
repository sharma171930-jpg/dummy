import React from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { Heart, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';

const Wishlist = () => {
  const { wishlist, products } = useShop();

  const wishlistProducts = wishlist
    .map(id => products.find(p => p.id === id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  if (wishlistProducts.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-brand-white px-4 text-brand-black">
        <SEO title="My Wishlist | Shadeora Frames" description="Your wishlist is empty. Save your favorite handcrafted glasses, sunglasses, and frames to view them here." />
        <div className="w-32 h-32 bg-brand-gray rounded-full flex items-center justify-center mb-8 shadow-sm">
          <Heart className="w-12 h-12 text-brand-gold opacity-80" />
        </div>
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Your Wishlist is Empty</h2>
        <p className="text-brand-black/60 mb-10 text-center max-w-md text-sm">
          Save items you love here and view them later. Time to start exploring.
        </p>
        <Link 
          to="/shop" 
          className="px-8 py-4 bg-brand-black text-white text-[10px] uppercase font-bold tracking-widest hover:bg-brand-gold hover:text-brand-black transition-all rounded-full shadow-lg inline-block"
        >
          Explore Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-brand-white min-h-screen py-16 text-brand-black">
      <SEO title="My Saved Wishlist | Shadeora Frames" description="Manage and view your saved premium frames and sunglasses. Keep track of the architectural designs you love from Shadeora." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 pb-6 border-b border-brand-black/10">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2">Your Wishlist</h1>
            <p className="text-brand-black/60 text-sm font-medium tracking-wide uppercase">{wishlistProducts.length} {wishlistProducts.length === 1 ? 'item' : 'items'} saved</p>
          </div>
          <Link to="/shop" className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold hover:text-brand-gold transition-colors padding-y-2 border-b-2 border-transparent hover:border-brand-gold hidden sm:flex">
            Continue Shopping <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white p-6 rounded-3xl border border-brand-black/5 shadow-sm"
        >
          {wishlistProducts.map(product => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              key={product.id}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center sm:hidden">
          <Link to="/shop" className="inline-flex items-center text-sm font-medium hover:text-brand-gold">
            Continue Shopping <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
