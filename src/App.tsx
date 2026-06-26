/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ShopProvider } from './context/ShopContext';
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import About from './pages/About';
import Collections from './pages/Collections';
import FaceShapeGuide from './pages/FaceShapeGuide';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Sitemap from './pages/Sitemap';

export default function App() {
  return (
    <HelmetProvider>
      <ShopProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/face-shape-guide" element={<FaceShapeGuide />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="*" element={<Home />} /> {/* Fallback for missing pages like faq */}
            </Routes>
          </Layout>
        </Router>
      </ShopProvider>
    </HelmetProvider>
  );
}
