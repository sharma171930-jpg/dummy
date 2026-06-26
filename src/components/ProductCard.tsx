import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';
import { Heart, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';

const ProductCard = ({ product }: { product: Product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleWishlist, isInWishlist } = useShop();
  const inWishlist = isInWishlist(product.id);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col gap-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[22rem] bg-brand-gray rounded-2xl overflow-hidden flex items-center justify-center border border-transparent group-hover:border-brand-gold/40 transition-all shadow-sm">
        {product.isNew && (
          <div className="absolute top-3 left-3 z-10 bg-brand-black text-white text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded">
            NEW
          </div>
        )}
        {product.isBestSeller && !product.isNew && (
          <div className="absolute top-3 left-3 z-10 bg-brand-gold text-brand-black text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded">
            BESTSELLER
          </div>
        )}
        
        <button 
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product.id);
          }}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white shadow-md text-brand-black hover:text-brand-gold transition-colors opacity-0 group-hover:opacity-100"
        >
          <Heart className={`w-4 h-4 ${inWishlist ? 'fill-brand-gold text-brand-gold' : 'text-current'}`} />
        </button>

        <Link to={`/product/${product.id}`} className="block w-full h-full p-4">
          <img 
            src={isHovered && product.images.length > 1 ? product.images[1] : product.images[0]} 
            alt={product.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain mix-blend-multiply transition-opacity duration-500"
          />
        </Link>

        {/* Quick Add Overlay */}
        <div className="absolute bottom-0 left-0 right-0 hidden md:block">
          <Link 
            to={`/product/${product.id}`}
            className="w-full bg-brand-black text-white py-3 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-brand-gold hover:text-brand-black"
          >
            Quick Add — ${product.price.toFixed(2)}
          </Link>
        </div>
      </div>

      <div className="flex justify-between items-start px-1">
        <Link to={`/product/${product.id}`} className="flex flex-col">
          <p className="text-[10px] uppercase font-bold tracking-widest text-brand-black/40">{product.category}</p>
          <h4 className="text-sm font-serif font-bold group-hover:text-brand-gold transition-colors">{product.name}</h4>
        </Link>
        <div className="flex gap-1 mt-1">
          {product.colors.map((color, idx) => (
            <div 
              key={idx} 
              className="w-3 h-3 rounded-full border border-brand-black/20"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
      <p className="text-xs text-brand-black font-semibold px-1 md:hidden">${product.price.toFixed(2)}</p>
    </motion.div>
  );
};

export default ProductCard;
