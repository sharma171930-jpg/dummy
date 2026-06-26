import React from 'react';
import { SEO } from '../components/SEO';

const Contact = () => {
  return (
    <div className="bg-brand-white min-h-screen py-24 px-4">
      <SEO title="Contact Us & Styling Support | Shadeora Frames" description="Get in touch with the Shadeora Frames support and expert styling team for frame fit advice, custom lens orders, or assistance." />
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-center">Contact Us</h1>
        <p className="text-brand-black/60 text-lg mb-16 text-center max-w-2xl mx-auto">
          We would love to hear from you. Reach out for styling advice, order inquiries, or just to say hello.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-brand-black/5">
            <h2 className="font-serif text-3xl mb-8">Get In Touch</h2>
            <div className="space-y-6 text-sm text-brand-black/80">
              <div>
                <p className="font-bold uppercase tracking-widest text-[10px] text-brand-gold mb-1">Email</p>
                <p>hello@shadeoraframes.com</p>
              </div>
              <div>
                <p className="font-bold uppercase tracking-widest text-[10px] text-brand-gold mb-1">Phone</p>
                <p>+1 (800) 123-4567</p>
              </div>
              <div>
                <p className="font-bold uppercase tracking-widest text-[10px] text-brand-gold mb-1">Store Hours</p>
                <p>Monday - Friday: 10am - 7pm OS</p>
                <p>Saturday: 11am - 5pm OS</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-brand-black/5">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-black mb-2">Name</label>
                <input type="text" className="w-full border-b border-brand-black/20 pb-2 focus:outline-none focus:border-brand-black bg-transparent" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-black mb-2">Email</label>
                <input type="email" className="w-full border-b border-brand-black/20 pb-2 focus:outline-none focus:border-brand-black bg-transparent" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-brand-black mb-2">Message</label>
                <textarea rows={4} className="w-full border-b border-brand-black/20 pb-2 focus:outline-none focus:border-brand-black bg-transparent resize-none"></textarea>
              </div>
              <button className="w-full bg-brand-black text-white uppercase tracking-widest text-[10px] font-bold py-4 rounded-full hover:bg-brand-gold transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
