import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const Services = () => {
  return (
    <div className="bg-brand-white min-h-screen py-24 px-4 text-center">
      <SEO title="Premium Eyewear Services & Consultations | Shadeora Frames" description="Discover the premium custom services offered by Shadeora Frames including complimentary frame adjustments, architectural personal styling, and bespoke vision consultations." />
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">Our Services</h1>
        <p className="text-brand-black/60 text-lg mb-12">
          Experience eyewear, elevated. At Shadeora, we provide exceptional services to ensure the perfect fit and clear vision.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-black/5 flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-2xl mb-4">Personal Styling</h2>
              <p className="text-brand-black/60 text-sm">
                Our expert stylists will help you find the perfect frame shape and color to complement your unique features and wardrobe.
              </p>
            </div>
            <Link to="/face-shape-guide" className="mt-6 text-[10px] font-bold uppercase tracking-widest text-brand-gold hover:text-brand-black transition-colors inline-block">
              Try Face Shape Guide &rarr;
            </Link>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-black/5 flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-2xl mb-4">Frame Adjustments</h2>
              <p className="text-brand-black/60 text-sm">
                Enjoy complimentary, lifetime adjustments to ensure your eyewear fits securely and comfortably, tailored specifically for you.
              </p>
            </div>
            <Link to="/contact" className="mt-6 text-[10px] font-bold uppercase tracking-widest text-brand-gold hover:text-brand-black transition-colors inline-block">
              Schedule Fit &rarr;
            </Link>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-black/5 flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-2xl mb-4">Vision Consultations</h2>
              <p className="text-brand-black/60 text-sm">
                Schedule an in-store consultation to match your current lens prescription with the ideal frame materials and lens index.
              </p>
            </div>
            <Link to="/contact" className="mt-6 text-[10px] font-bold uppercase tracking-widest text-brand-gold hover:text-brand-black transition-colors inline-block">
              Book Appointment &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
