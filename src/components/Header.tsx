import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Heart, User, Menu, X, ChevronDown } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { motion, AnimatePresence } from 'motion/react';
import { categories } from '../data';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const { cart, wishlist, products } = useShop();
  const location = useLocation();
  const navigate = useNavigate();

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setShopDropdownOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const searchResults = searchQuery
    ? products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally would route to a search results page, here we can just clear and route if needed, 
    // but the dropdown handles it.
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 border-b border-brand-gold/30 ${
        isScrolled ? 'bg-brand-black/95 backdrop-blur-md py-4' : 'bg-brand-black py-6'
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-brand-gold"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl font-bold tracking-[0.2em] text-brand-gold"
          >
            SHADEORA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-[11px] uppercase tracking-widest font-medium hover:text-brand-gold transition-colors pb-1 border-b border-transparent hover:border-brand-gold">
              Home
            </Link>
            <div
              className="relative group"
              onMouseEnter={() => setShopDropdownOpen(true)}
              onMouseLeave={() => setShopDropdownOpen(false)}
            >
              <Link
                to="/shop"
                className="flex items-center text-[11px] uppercase tracking-widest font-medium hover:text-brand-gold transition-colors py-2 pb-1 border-b border-transparent hover:border-brand-gold"
              >
                Shop <ChevronDown className="w-4 h-4 ml-1" />
              </Link>
              <AnimatePresence>
                {shopDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 top-full pt-4 w-64 text-brand-black"
                  >
                    <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col space-y-3">
                      <Link to="/shop" className="text-sm font-medium hover:text-brand-gold">All Products</Link>
                      <hr className="my-2 border-gray-100" />
                      {categories.map((category) => (
                        <Link
                          key={category}
                          to={`/shop?category=${encodeURIComponent(category)}`}
                          className="text-sm text-gray-600 hover:text-brand-black"
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link to="/services" className="text-[11px] uppercase tracking-widest font-medium hover:text-brand-gold transition-colors pb-1 border-b border-transparent hover:border-brand-gold">
              Services
            </Link>
            <Link to="/blog" className="text-[11px] uppercase tracking-widest font-medium hover:text-brand-gold transition-colors pb-1 border-b border-transparent hover:border-brand-gold">
              Blog
            </Link>
            <Link to="/about" className="text-[11px] uppercase tracking-widest font-medium hover:text-brand-gold transition-colors pb-1 border-b border-transparent hover:border-brand-gold">
              About
            </Link>
            <Link to="/contact" className="text-[11px] uppercase tracking-widest font-medium hover:text-brand-gold transition-colors pb-1 border-b border-transparent hover:border-brand-gold">
              Contact
            </Link>
          </nav>

          {/* Utility Icons */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button 
                className="p-2 text-white hover:text-brand-gold transition-colors"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                {searchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
              </button>
              
              <AnimatePresence>
                {searchOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 top-full mt-2 w-72 md:w-96 bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100 z-50 p-4 text-brand-black"
                  >
                    <form onSubmit={handleSearchSubmit} className="mb-4">
                      <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input 
                          type="text" 
                          autoFocus
                          placeholder="Search for products..." 
                          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-brand-black focus:ring-1 focus:ring-brand-black"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </form>
                    
                    {searchQuery && (
                      <div className="max-h-64 overflow-y-auto">
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Results</p>
                        {searchResults.length > 0 ? (
                          <ul className="space-y-3">
                            {searchResults.map(product => (
                              <li key={product.id}>
                                <Link 
                                  to={`/product/${product.id}`}
                                  className="flex items-center space-x-3 group"
                                  onClick={() => setSearchOpen(false)}
                                >
                                  <div className="w-12 h-12 bg-brand-beige rounded overflow-hidden flex-shrink-0">
                                    <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium group-hover:text-brand-gold transition-colors">{product.name}</h4>
                                    <p className="text-xs text-gray-500">${product.price.toFixed(2)}</p>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-gray-500 py-4">No products found for "{searchQuery}"</p>
                        )}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link to="/wishlist" className="p-2 text-white hover:text-brand-gold transition-colors relative hidden sm:block">
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-gold text-brand-black text-[9px] font-bold px-1.5 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <button className="p-2 text-white hover:text-brand-gold transition-colors hidden sm:block">
              <User className="w-5 h-5" />
            </button>
            <Link to="/cart" className="p-2 text-brand-black bg-brand-gold rounded-full hover:bg-white transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-white border border-brand-black text-brand-black text-[9px] font-bold px-1.5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 bg-brand-beige text-brand-black"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-brand-black/10">
                <span className="font-serif text-2xl font-bold tracking-[0.2em] text-brand-gold">SHADEORA</span>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="w-6 h-6 text-brand-black" />
                </button>
              </div>
              <nav className="flex flex-col space-y-6">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium">Home</Link>
                <Link to="/shop" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium">Shop All</Link>
                <div className="pl-4 flex flex-col space-y-4 border-l-2 border-brand-gray">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      to={`/shop?category=${encodeURIComponent(category)}`}
                      className="text-lg text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
                <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium">Services</Link>
                <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium">Blog</Link>
                <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium">About</Link>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium">Contact</Link>
                <Link to="/wishlist" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium">Wishlist ({wishlist.length})</Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
