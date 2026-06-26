import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white/40 flex flex-col font-sans">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-bold tracking-[0.2em] text-brand-gold">SHADEORA</h3>
            <p className="text-white/60 text-xs leading-relaxed max-w-xs">
              Premium eyewear designed for those who see the world differently. Handcrafted luxury for your eyes.
            </p>
            <div className="flex space-x-6 text-white/60">
              <a href="#" className="hover:text-brand-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-brand-gold transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-brand-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-[10px] tracking-widest uppercase mb-6 text-brand-gold">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/shop?category=Sunglasses" className="text-white/40 hover:text-white text-xs transition-colors">Sunglasses</Link></li>
              <li><Link to="/shop?category=Prescription" className="text-white/40 hover:text-white text-xs transition-colors">Prescription</Link></li>
              <li><Link to="/shop?category=BlueLight" className="text-white/40 hover:text-white text-xs transition-colors">Blue Light</Link></li>
              <li><Link to="/collections" className="text-white/40 hover:text-white text-xs transition-colors">Collections</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-[10px] tracking-widest uppercase mb-6 text-brand-gold">Support</h4>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-white/40 hover:text-white text-xs transition-colors">Contact Us</Link></li>
              <li><Link to="/face-shape-guide" className="text-white/40 hover:text-white text-xs transition-colors">Face Shape Guide</Link></li>
              <li><Link to="/services" className="text-white/40 hover:text-white text-xs transition-colors">Our Services</Link></li>
              <li><Link to="/sitemap" className="text-white/40 hover:text-white text-xs transition-colors">Sitemap</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-[10px] tracking-widest uppercase mb-6 text-brand-gold">Newsletter</h4>
            <p className="text-white/60 text-xs mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex border-b border-brand-gold/30 pb-2 transition-colors focus-within:border-brand-gold">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-none outline-none text-[10px] tracking-widest w-full text-white placeholder-white/40"
              />
              <button type="submit" className="text-[10px] font-bold tracking-widest uppercase text-brand-gold hover:text-white transition-colors">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Clean Minimalism bottom bar */}
      <div className="h-12 border-t border-brand-gold/20 flex items-center justify-between px-10 text-[9px] uppercase tracking-widest font-medium w-full">
        <div className="flex gap-6 items-center">
          <p>© {new Date().getFullYear()} SHADEORA FRAMES</p>
          <div className="hidden sm:flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <span className="hidden md:inline">Luxury Eyewear & Vision Accessories</span>
          <div className="flex gap-4 text-white/60">
            <a href="#" className="hover:text-brand-gold transition-colors">INSTAGRAM</a>
            <a href="#" className="hover:text-brand-gold transition-colors">PINTEREST</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
