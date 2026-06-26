import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ChevronRight, Heart, Star, Minus, Plus, ShoppingBag, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import ProductCard from '../components/ProductCard';
import { SEO } from '../components/SEO';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { products, addToCart, toggleWishlist, isInWishlist } = useShop();
  
  const product = products.find(p => p.id === id);
  
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]);
      setSelectedSize(product.sizes[0]);
      setQuantity(1);
      setActiveImage(0);
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <SEO title="Product Not Found | Shadeora Frames" description="The requested eyewear frame could not be found. View our complete catalog of luxury frames." />
        <h2 className="font-serif text-3xl mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-brand-gold hover:underline">Return to Shop</Link>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    // Could add a toast notification here
    alert('Added to cart!');
  };

  // Generate Product JSON-LD Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${product.name} | Shadeora Frames`,
    "image": product.images.map(img => img.startsWith('http') ? img : `https://shadeoraframes.netlify.app${img}`),
    "description": product.description,
    "sku": product.id,
    "mpn": product.id,
    "brand": {
      "@type": "Brand",
      "name": "Shadeora Frames"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://shadeoraframes.netlify.app/product/${product.id}`,
      "priceCurrency": "USD",
      "price": product.price,
      "priceValidUntil": "2027-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Shadeora Frames"
      }
    },
    ...(product.rating > 0 ? {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": product.rating,
        "reviewCount": product.reviews.length || 1,
        "bestRating": "5",
        "worstRating": "1"
      }
    } : {}),
    ...(product.reviews && product.reviews.length > 0 ? {
      "review": product.reviews.map(rev => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": rev.name
        },
        "datePublished": rev.date || "2024-01-01",
        "reviewBody": rev.comment,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": rev.rating,
          "bestRating": "5",
          "worstRating": "1"
        }
      }))
    } : {})
  };

  return (
    <div className="bg-brand-white text-brand-black min-h-screen">
      <SEO 
        title={`${product.name} – Handcrafted ${product.category} | Shadeora Frames`} 
        description={`Purchase the premium handcrafted ${product.name} ${product.category.toLowerCase()}. Features ${Object.entries(product.specifications).map(([k, v]) => `${k}: ${v}`).join(', ')}.`}
        image={product.images[0]}
        type="product"
        schema={productSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Images */}
          <div className="lg:w-1/2 flex flex-col md:flex-row gap-6 h-fit sticky top-32">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-y-auto w-full md:w-24 snap-x">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative flex-shrink-0 w-20 h-24 md:w-24 md:h-32 rounded-2xl overflow-hidden snap-start border-2 transition-all shadow-sm bg-brand-gray ${activeImage === idx ? 'border-brand-gold' : 'border-transparent opacity-60 hover:opacity-100 hover:border-brand-gold/40'}`}
                >
                  <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover mix-blend-multiply" />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-grow aspect-[4/5] bg-brand-gray rounded-3xl overflow-hidden relative border border-brand-black/5 shadow-sm flex items-center justify-center p-8">
              <motion.img 
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-contain mix-blend-multiply"
              />
              <button 
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white shadow-md text-brand-black hover:text-brand-gold transition-colors"
              >
                <Heart className={`w-5 h-5 ${inWishlist ? 'fill-brand-gold text-brand-gold' : 'text-current'}`} />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 flex flex-col pt-8 lg:px-8">
            <p className="text-[10px] uppercase font-bold tracking-widest text-brand-black/40 mb-2">{product.category}</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center space-x-6 mb-8">
              <p className="text-2xl font-serif italic text-brand-gold">${product.price.toFixed(2)}</p>
              {product.rating > 0 && (
                <div className="flex items-center space-x-1 pl-6 border-l border-brand-black/10 text-xs font-bold text-brand-black/60">
                  <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  <span>{product.rating}</span>
                  <span className="font-medium tracking-widest min-w-fit">({product.reviews.length} REVIEWS)</span>
                </div>
              )}
            </div>

            <p className="text-sm text-brand-black/60 leading-relaxed mb-10 max-w-lg">
              {product.description}
            </p>

            <div className="space-y-8 mb-12">
              {/* Color Selection */}
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4 border-b border-brand-black/10 pb-2 flex justify-between">
                  <span>Select Color</span>
                  <span className="text-brand-black/40">{selectedColor}</span>
                </h3>
                <div className="flex items-center space-x-4">
                  {product.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full relative transition-all ${selectedColor === color ? 'ring-2 ring-offset-2 ring-brand-gold scale-110' : 'hover:scale-110 shadow-sm'}`}
                      style={{ backgroundColor: color, border: '1px solid #11111120' }}
                      aria-label={`Color ${color}`}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4 border-b border-brand-black/10 pb-2 flex justify-between">
                  <span>Select Size</span>
                  <button className="text-brand-gold hover:underline">SIZE GUIDE</button>
                </h3>
                <div className="flex items-center gap-3 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-8 py-3 text-[10px] font-bold tracking-widest uppercase rounded-full border transition-all ${
                        selectedSize === size 
                          ? 'border-brand-black bg-brand-black text-white' 
                          : 'border-brand-black/10 text-brand-black hover:border-brand-gold hover:text-brand-gold'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4 border-b border-brand-black/10 pb-2">Quantity</h3>
                <div className="flex items-center border border-brand-black/10 w-fit rounded-full overflow-hidden bg-white">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="p-3 hover:bg-brand-gray transition-colors hover:text-brand-gold text-brand-black"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-[11px] font-bold">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(q => q + 1)}
                    className="p-3 hover:bg-brand-gray transition-colors hover:text-brand-gold text-brand-black"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={handleAddToCart}
                className="flex-grow bg-brand-black text-white py-4 px-8 text-[11px] font-bold tracking-widest uppercase hover:bg-brand-gold hover:text-brand-black transition-all flex justify-center items-center rounded-full shadow-lg"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Specifications Accordion */}
            <div className="border-t border-brand-black/10">
              <details className="group border-b border-brand-black/10 py-5 cursor-pointer" open>
                <summary className="font-bold flex justify-between items-center text-[10px] uppercase tracking-widest list-none hover:text-brand-gold transition-colors">
                  Specifications
                  <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pt-6 pb-2">
                  <ul className="space-y-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <li key={key} className="grid grid-cols-2 text-xs border-b border-brand-black/5 pb-2 last:border-0 last:pb-0">
                        <span className="text-brand-black/60 uppercase tracking-wider text-[9px] font-bold">{key}</span>
                        <span className="font-medium text-brand-black text-right">{value}</span>
                      </li>
                    ))}
                    <li className="grid grid-cols-2 text-xs pt-2">
                       <span className="text-brand-black/60 uppercase tracking-wider text-[9px] font-bold">Best for Face Shapes</span>
                       <span className="font-medium text-brand-black text-right">{product.faceShapes.join(', ')}</span>
                    </li>
                  </ul>
                </div>
              </details>
              
              <details className="group border-b border-brand-black/10 py-5 cursor-pointer">
                <summary className="font-bold flex justify-between items-center text-[10px] uppercase tracking-widest list-none hover:text-brand-gold transition-colors">
                  Shipping & Returns
                  <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pt-4 pb-2 text-xs text-brand-black/60 leading-relaxed max-w-sm">
                  <p className="mb-3"><strong>Free standard shipping</strong> on all orders over $150. Expedited options available at checkout.</p>
                  <p>We accept returns within 30 days of original purchase date. Items must be unworn in original packaging.</p>
                </div>
              </details>
            </div>
            
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-24 bg-brand-gray border-t border-brand-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold mb-10 text-center tracking-wide">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white/50 backdrop-blur-sm shadow-sm p-6 rounded-2xl border border-brand-black/5">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetails;
