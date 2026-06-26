import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Product } from '../types';
import { categories } from '../data';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { Filter, ChevronDown, ChevronRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';

const Shop = () => {
  const { products } = useShop();
  const location = useLocation();

  // Create states
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeShape, setActiveShape] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('newest');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Synchronize state with URL search params
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setActiveCategory(queryParams.get('category'));
    setActiveShape(queryParams.get('shape'));
  }, [location.search]);

  const faceShapes = ['Round', 'Oval', 'Square', 'Heart', 'Diamond'];
  const sortOptions = [
    { value: 'newest', label: 'Newest Arrivals' },
    { value: 'price_low', label: 'Price: Low to High' },
    { value: 'price_high', label: 'Price: High to Low' },
    { value: 'popular', label: 'Most Popular' }
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by Category
    if (activeCategory) {
      result = result.filter(p => p.category === activeCategory);
    }

    // Filter by Face Shape
    if (activeShape) {
      result = result.filter(p => p.faceShapes.includes(activeShape as any));
    }

    // Sort
    switch (sortBy) {
      case 'price_low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price_high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'popular':
        result.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
        break;
      case 'newest':
      default:
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return result;
  }, [products, activeCategory, activeShape, sortBy]);

  return (
    <div className="bg-brand-beige min-h-screen text-brand-black">
      <SEO 
        title={`${activeCategory ? `${activeCategory} Collection` : 'All Premium Spectacles & Eyewear Frames'} | Shadeora Frames`}
        description={activeCategory 
          ? `Discover handcrafted ${activeCategory.toLowerCase()} from Shadeora Frames. Architecturally designed frames made with premium materials.` 
          : "Shop our complete catalog of luxury handcrafted spectacles, premium blue light glasses, and architectural sunglasses."}
      />
      {/* Header Banner */}
      <div className="bg-white pb-12 pt-24 px-4 border-b border-brand-black/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4 tracking-wide uppercase">
            {activeCategory || 'All Collections'}
          </h1>
          <p className="text-brand-black/60 font-light max-w-2xl mx-auto text-sm md:text-base">
            Explore our diverse range of meticulously crafted eyewear. Filter by style, shape, or category to find your perfect match.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Mobile Filter Toggle */}
          <div className="md:hidden flex justify-between items-center mb-6 border-b border-brand-black/10 pb-4">
            <button 
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex items-center space-x-2 text-sm font-medium"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
            <div className="relative">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border-none text-sm font-medium pr-6 focus:ring-0 cursor-pointer"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Sidebar */}
          <aside className={`md:w-64 flex-shrink-0 bg-brand-gray border border-brand-black/5 p-6 rounded-2xl ${showMobileFilters ? 'block mb-8' : 'hidden'} md:flex flex-col gap-8 h-fit`}>
            {/* Categories */}
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4 border-b border-brand-black/10 pb-2">Categories</h3>
              <ul className="flex flex-col gap-3 text-[12px] opacity-80 font-medium">
                <li className="flex justify-between items-center">
                  <button 
                    onClick={() => setActiveCategory(null)}
                    className={`flex items-center justify-between w-full text-left transition-colors ${activeCategory === null ? 'text-brand-black font-bold' : 'hover:text-brand-gold'}`}
                  >
                    <span>All Products</span>
                    {activeCategory === null && <Check className="w-3 h-3 text-brand-gold" />}
                  </button>
                </li>
                {categories.map((category) => (
                  <li key={category} className="flex justify-between items-center">
                    <button 
                      onClick={() => setActiveCategory(category)}
                      className={`flex items-center justify-between w-full text-left transition-colors ${activeCategory === category ? 'text-brand-black font-bold' : 'hover:text-brand-gold'}`}
                    >
                      <span>{category}</span>
                      {activeCategory === category && <Check className="w-3 h-3 text-brand-gold" />}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Face Shape */}
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4 border-b border-brand-black/10 pb-2">Face Shape</h3>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <button 
                  onClick={() => setActiveShape(null)}
                  className={`py-2 border rounded transition-all tracking-wider ${activeShape === null ? 'border-brand-black bg-brand-black text-white' : 'border-brand-black/10 hover:bg-white text-brand-black'}`}
                >
                  ANY
                </button>
                {faceShapes.slice(0, 5).map((shape) => (
                  <button 
                    key={shape}
                    onClick={() => setActiveShape(shape)}
                    className={`py-2 border rounded transition-all uppercase tracking-wider ${activeShape === shape ? 'border-brand-black bg-brand-black text-white' : 'border-brand-black/10 hover:bg-white text-brand-black'}`}
                  >
                    {shape}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Clear Filters */}
            {(activeCategory || activeShape) && (
              <div className="mt-auto">
                <button 
                  onClick={() => { setActiveCategory(null); setActiveShape(null); }}
                  className="w-full bg-brand-black text-brand-white py-2 rounded text-[10px] font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-black transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
            
            {!(activeCategory || activeShape) && (
               <div className="mt-auto">
                 <div className="bg-brand-black p-4 rounded-xl text-white text-center">
                   <p className="text-[10px] font-serif italic mb-2">Limited Offer</p>
                   <p className="text-xs font-bold text-brand-gold mb-3">Free Case Included</p>
                   <button className="w-full bg-brand-gold text-brand-black py-2 rounded text-[10px] font-bold uppercase tracking-widest">Claim Now</button>
                 </div>
               </div>
            )}
          </aside>

          {/* Product Grid */}
          <div className="flex-grow flex flex-col gap-6">
            {/* Desktop Sort */}
            <div className="hidden md:flex justify-between items-center pb-4 border-b border-brand-black/10">
              <p className="text-[11px] uppercase tracking-widest font-bold text-brand-black/40">Showing {filteredProducts.length} results</p>
              <div className="flex items-center space-x-2">
                <span className="text-[11px] uppercase tracking-widest font-bold text-brand-black/40">Sort by:</span>
                <div className="relative">
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent border-none text-[11px] uppercase font-bold text-brand-black pr-6 focus:ring-0 cursor-pointer outline-none"
                  >
                    {sortOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
                </div>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-500 font-light text-lg">No products found matching your active filters.</p>
                <button 
                  onClick={() => { setActiveCategory(null); setActiveShape(null); }}
                  className="mt-4 px-6 py-2 bg-brand-black text-white text-sm font-medium rounded-md hover:bg-brand-gold transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-brand-black/5">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Shop;
