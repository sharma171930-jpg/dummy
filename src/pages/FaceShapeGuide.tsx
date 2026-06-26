import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';

const FaceShapeGuide = () => {
  const shapes = [
    {
      id: 'Square',
      name: 'Square',
      description: 'Square faces have strong, angular jawlines and equally wide cheekbones and foreheads.',
      recommendation: 'Round or oval frames soften the angles of a square face.',
      bestMatches: ['Round', 'Oval', 'Cat Eye'],
      image: '/images/face_square_1781788472067.jpg'
    },
    {
      id: 'Round',
      name: 'Round',
      description: 'Round faces feature a wide forehead, full cheeks, and rounded chin.',
      recommendation: 'Angular, rectangular, or geometric shapes add definition and structure.',
      bestMatches: ['Square', 'Wayfarer', 'Geometric'],
      image: '/images/face_round_1781788483393.jpg'
    },
    {
      id: 'Heart',
      name: 'Heart',
      description: 'Heart-shaped faces are widest at the forehead and gradually narrow through to the jawline.',
      recommendation: 'Frames that are wider at the bottom or have thin frames balance the width of the forehead.',
      bestMatches: ['Aviator', 'Round', 'Rimless'],
      image: '/images/face_heart_1781788496433.jpg'
    },
    {
      id: 'Oval',
      name: 'Oval',
      description: 'Oval faces possess balanced proportions with a narrow forehead and jawline.',
      recommendation: 'Lucky you! Most frame shapes look great. Just ensure the frame is as wide as the broadest part of your face.',
      bestMatches: ['Any Shape', 'Square', 'Aviator'],
      image: '/images/face_oval_1781788509955.jpg'
    },
    {
      id: 'Diamond',
      name: 'Diamond',
      description: 'Diamond faces are narrow at the forehead and jawline, with broad cheekbones.',
      recommendation: 'Frames with detailing or distinctive brow lines help emphasize the eyes and soften the cheekbones.',
      bestMatches: ['Cat Eye', 'Oval', 'Horn-Rimmed'],
      image: '/images/face_diamond_1781788524374.jpg'
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I find the best glasses for my face shape?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The key is to choose frames that provide contrast to your facial angles and balance your proportions. Soften angular features with round frames, and add definition to round features with angular frames."
        }
      },
      {
        "@type": "Question",
        "name": "What frames are best for a square face shape?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Round, oval, or cat eye frames soften the strong, angular jawline and broad cheekbones typical of a square face."
        }
      },
      {
        "@type": "Question",
        "name": "What frames look best on a round face?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Angular, rectangular, or geometric frame shapes add definition, structure, and contrast to a wide forehead and full cheeks."
        }
      }
    ]
  };

  return (
    <div className="bg-brand-white min-h-screen">
      <SEO 
        title="Eyewear Face Shape Guide – Find Your Perfect Frame | Shadeora Frames" 
        description="Not sure which frames match your round, square, heart, oval, or diamond face? Read our expert face shape guide to discover your ideal spectacle silhouette."
        schema={faqSchema}
      />
      {/* Header */}
      <section className="bg-white py-24 px-4 border-b border-brand-black/5 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-4">Fit Guide</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Find Your Shape</h1>
          <p className="text-brand-black/60 text-sm tracking-wide max-w-xl mx-auto">
            Eyewear is the most important architectural addition to your face. Let us guide you to the perfect silhouette for your unique features.
          </p>
        </div>
      </section>

      {/* Guide Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-brand-black">
        <div className="flex flex-col gap-16">
          {shapes.map((shape, idx) => (
            <motion.div 
              key={shape.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-12 border border-brand-black/5 shadow-sm flex flex-col md:flex-row gap-12 items-center"
            >
              <div className="w-full md:w-1/3">
                 <div className="aspect-square rounded-full overflow-hidden bg-brand-gray/50 border border-brand-black/10">
                   <img src={shape.image} alt={`${shape.name} face shape`} className="w-full h-full object-cover mix-blend-multiply opacity-80" />
                 </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="font-serif text-3xl mb-4">{shape.name}</h2>
                <p className="text-brand-black/60 text-sm mb-6 max-w-lg">
                  {shape.description}
                </p>
                <div className="bg-brand-beige/50 p-6 rounded-2xl mb-8 border border-brand-black/5">
                  <h3 className="text-[10px] uppercase font-bold tracking-widest text-brand-black mb-2">Our Recommendation</h3>
                  <p className="text-sm font-medium text-brand-black/80">{shape.recommendation}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-[10px] uppercase font-bold tracking-widest text-brand-black/40 mb-3">Best Frame Styles</h3>
                    <div className="flex gap-3 flex-wrap">
                      {shape.bestMatches.map(match => (
                        <span key={match} className="px-4 py-1.5 bg-brand-gray text-brand-black/80 text-[10px] font-bold uppercase tracking-wider rounded border border-brand-black/10">
                          {match}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to={`/shop?shape=${shape.id}`}
                    className="inline-flex items-center px-6 py-3 border border-brand-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-black hover:text-white transition-colors flex-shrink-0"
                  >
                    Shop for {shape.name} <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FaceShapeGuide;
