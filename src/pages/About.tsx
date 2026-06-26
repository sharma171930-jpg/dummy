import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';

const About = () => {
  return (
    <div className="bg-brand-white text-brand-black min-h-screen">
      <SEO title="About Us – Handcrafted Architectural Eyewear | Shadeora Frames" description="Learn about the story, methodology, and uncompromising craftsmanship behind Shadeora Frames. Founded on architectural design principles." />
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center border-b border-brand-black/5">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero_background_1781788308383.jpg" 
            alt="About Us" 
            loading="lazy"
            className="w-full h-full object-cover object-center opacity-80 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-brand-white/10 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl bg-brand-white/90 p-12 rounded-3xl shadow-xl border border-brand-black/5">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl font-light text-brand-black mb-6"
          >
            About Shadeora Frames
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-brand-black/60 font-light tracking-wide uppercase"
          >
            Crafting pure vision through uncompromising luxury.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-4">Foundation</p>
            <h2 className="font-serif text-4xl mb-8">The Vision</h2>
            <p className="text-brand-black/60 leading-relaxed text-sm max-w-2xl mx-auto">
              Founded in 2024, Shadeora emerged from a simple observation: luxury eyewear had become stagnant. We set out to redefine the space by pairing architectural design principles with uncompromising materials. Every frame we produce is a testament to the idea that eyewear is not just a medical necessity, but the most important architectural addition to your face.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="bg-brand-gray p-8 rounded-3xl order-2 md:order-1 relative">
              <div className="absolute top-4 left-4 text-brand-gold font-serif text-6xl opacity-20 hidden md:block">"</div>
              <img 
                src="/images/prescription_frame_1781788365302.jpg" 
                alt="Craftsmanship" 
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl shadow-sm mix-blend-multiply"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-4">Methodology</p>
              <h2 className="font-serif text-4xl mb-8">Uncompromising Craft</h2>
              <p className="text-brand-black/60 text-sm leading-relaxed mb-6">
                We scour the globe for the finest materials—from Italian Mazzucchelli acetate to Japanese aerospace-grade titanium. 
              </p>
              <p className="text-brand-black/60 text-sm leading-relaxed border-l-2 border-brand-gold pl-4">
                Our artisanal process takes over 90 days and 50 painstaking steps from the initial sketch to the final hand-polish. We don't cut corners, because we believe the things you wear on your face should be perfect.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
