import { Product, BlogPost, Collection, Category } from './types';

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Aurelia Oversized',
    price: 185,
    category: 'Sunglasses',
    gender: 'Women',
    images: [
      '/images/luxury_sunglasses_1_1781788325262.jpg',
      '/images/architect_side_1781789049986.jpg',
      '/images/architect_lifestyle_1781789066720.jpg'
    ],
    colors: ['#111111', '#D4AF37', '#800020'],
    sizes: ['Standard'],
    description: 'The Aurelia Oversized sunglasses offer a dramatic and glamorous silhouette. Crafted from premium acetate with gradient lenses, providing 100% UV protection while making a bold fashion statement.',
    specifications: {
      'Frame Material': 'Premium Acetate',
      'Lens Material': 'CR-39',
      'UV Protection': '100% UVA/UVB',
      'Hinge': '5-barrel metal hinge',
      'Measurements': '55-18-145'
    },
    reviews: [
      { id: 'r1', name: 'Eleanor H.', rating: 5, comment: 'Absolutely beautiful. So chic and the quality is outstanding.', date: '2023-10-12' },
      { id: 'r2', name: 'Sarah M.', rating: 4, comment: 'A bit heavy, but they look so good.', date: '2023-11-05' }
    ],
    rating: 4.5,
    isNew: true,
    isBestSeller: false,
    faceShapes: ['Round', 'Oval', 'Heart']
  },
  {
    id: 'p2',
    name: 'Atlas Aviator',
    price: 210,
    category: 'Sunglasses',
    gender: 'Men',
    images: [
      '/images/titanium_aviator_1781788340011.jpg',
      '/images/aviator_side_1781789082223.jpg'
    ],
    colors: ['#D4AF37', '#111111', '#C0C0C0'],
    sizes: ['Medium', 'Large'],
    description: 'A modern take on the classic aviator. The Atlas features a lightweight titanium frame, double bridge, and polarized lenses. Engineered for maximum comfort and timeless style.',
    specifications: {
      'Frame Material': 'Aerospace-grade Titanium',
      'Lens Material': 'Polarized Polycarbonate',
      'UV Protection': '100% UVA/UVB',
      'Nose Pads': 'Adjustable Silicone',
      'Measurements': '58-15-140'
    },
    reviews: [
      { id: 'r3', name: 'James W.', rating: 5, comment: 'Best aviators I have ever owned. Super light.', date: '2023-09-20' }
    ],
    rating: 5,
    isNew: false,
    isBestSeller: true,
    faceShapes: ['Square', 'Oval', 'Diamond']
  },
  {
    id: 'p3',
    name: 'Cobalt Blue Clear',
    price: 145,
    category: 'Blue Light Glasses',
    gender: 'Unisex',
    images: [
      '/images/blue_light_glasses_1781788352743.jpg',
      '/images/scholar_lifestyle_1781789097000.jpg'
    ],
    colors: ['transparent', '#111111', '#F5F5DC'],
    sizes: ['Standard'],
    description: 'Protect your eyes in style. The Cobalt features advanced blue light filtering technology packed into a minimalist, transparent frame perfect for long hours at the screen.',
    specifications: {
      'Frame Material': 'TR90 Memory Plastic',
      'Lens Technology': 'Blue Light Filtering',
      'Weight': '16g',
      'Measurements': '50-20-140'
    },
    reviews: [],
    rating: 0,
    isNew: true,
    isBestSeller: true,
    faceShapes: ['Round', 'Square', 'Heart', 'Oval']
  },
  {
    id: 'p4',
    name: 'Lumina Round',
    price: 160,
    category: 'Prescription Frames',
    gender: 'Women',
    images: [
      '/images/prescription_frame_1781788365302.jpg',
      '/images/director_lifestyle_1781789111030.jpg'
    ],
    colors: ['#8B4513', '#111111'],
    sizes: ['Small', 'Medium'],
    description: 'Vintage-inspired round frames crafted from hand-polished tortoiseshell acetate. Lumina adds an intellectual edge to any look while accommodating high-index prescription lenses flawlessly.',
    specifications: {
      'Frame Material': 'Italian Acetate',
      'Compatibility': 'Single Vision, Progressive',
      'Measurements': '48-22-140'
    },
    reviews: [
      { id: 'r4', name: 'Chloe T.', rating: 4.8, comment: 'Love the retro vibe. Fit perfectly after adjustment.', date: '2024-01-15' }
    ],
    rating: 4.8,
    isNew: false,
    isBestSeller: false,
    faceShapes: ['Square', 'Diamond', 'Heart']
  },
  {
    id: 'p5',
    name: 'Executive Semi-Rimless',
    price: 195,
    category: 'Prescription Frames',
    gender: 'Men',
    images: [
      '/images/navigator_main_1781789126344.jpg',
      '/images/navigator_lifestyle_1781789141371.jpg'
    ],
    colors: ['#111111', '#000080'],
    sizes: ['Medium', 'Large'],
    description: 'Sleek, professional, and lightweight. The Executive features a semi-rimless design with strong titanium browlines, ideal for the modern corporate environment.',
    specifications: {
      'Frame Material': 'Titanium / Nylon cord',
      'Weight': '14g',
      'Measurements': '54-18-145'
    },
    reviews: [],
    rating: 0,
    isNew: false,
    isBestSeller: false,
    faceShapes: ['Round', 'Oval']
  },
  {
    id: 'p6',
    name: 'Classic Read',
    price: 85,
    category: 'Reading Glasses',
    gender: 'Unisex',
    images: [
      '/images/reading_glasses_1781788378249.jpg'
    ],
    colors: ['#111111', '#8B4513'],
    sizes: ['Standard'],
    description: 'High-quality optical grade readers with anti-reflective coating. Available in multiple magnifications for crystal clear close-up vision.',
    specifications: {
      'Magnifications': '+1.00, +1.50, +2.00, +2.50, +3.00',
      'Measurements': '52-16-140'
    },
    reviews: [],
    rating: 0,
    isNew: false,
    isBestSeller: true,
    faceShapes: ['Oval', 'Round', 'Square', 'Heart', 'Diamond']
  },
  {
    id: 'p7',
    name: 'Leather Glasses Case',
    price: 45,
    category: 'Accessories',
    gender: 'Unisex',
    images: [
      '/images/leather_case_1781788439078.jpg'
    ],
    colors: ['#8B4513', '#111111'],
    sizes: ['One Size'],
    description: 'Protect your investment with our premium full-grain leather case. Features a soft suede interior and magnetic closure.',
    specifications: {
      'Material': 'Full-grain Leather',
      'Closure': 'Hidden Magnetic',
      'Dimensions': '16.5cm x 6.5cm x 4cm'
    },
    reviews: [],
    rating: 0,
    isNew: true,
    isBestSeller: false,
    faceShapes: []
  },
  {
    id: 'p8',
    name: 'Geometric Hex',
    price: 225,
    category: 'Sunglasses',
    gender: 'Unisex',
    images: [
      '/images/geometric_sunglasses_1781788456533.jpg',
      '/images/hexagon_side_1781789158183.jpg'
    ],
    colors: ['#D4AF37', '#C0C0C0'],
    sizes: ['Standard'],
    description: 'Stand out from the crowd with the Hex. A minimalist wireframe design forming a perfect hexagon. Edgy, sophisticated, and incredibly stylish.',
    specifications: {
      'Frame Material': 'Stainless Steel',
      'Lenses': 'Gradient Nylon',
      'Measurements': '51-20-145'
    },
    reviews: [],
    rating: 0,
    isNew: true,
    isBestSeller: false,
    faceShapes: ['Round', 'Oval']
  }
];

export const collections: Collection[] = [
  {
    id: 'c1',
    name: 'The Classics',
    description: 'Timeless silhouettes reimagined for the modern era.',
    image: '/images/collection_classics_1781788393297.jpg'
  },
  {
    id: 'c2',
    name: 'Summer Riviera',
    description: 'Vibrant tints and bold frames for sunny escapades.',
    image: '/images/collection_summer_1781788409514.jpg'
  },
  {
    id: 'c3',
    name: 'Minimalist Titanium',
    description: 'Ultralight, ultra-strong, ultra-sleek.',
    image: '/images/collection_titanium_1781788424890.jpg'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'Finding the Perfect Frame for Your Face Shape',
    excerpt: 'A comprehensive guide to matching our latest designs with your unique facial structure.',
    content: 'Full content goes here...',
    date: '2024-02-10',
    image: '/images/face_round_1781788483393.jpg'
  },
  {
    id: 'b2',
    title: 'The Rise of Titanium in Luxury Eyewear',
    excerpt: 'Why aerospace-grade materials are taking over the optical world.',
    content: 'Full content goes here...',
    date: '2024-01-25',
    image: '/images/collection_titanium_1781788424890.jpg'
  },
  {
    id: 'b3',
    title: 'Blue Light Glasses: Necessity or Trend?',
    excerpt: 'Breaking down the science behind digital eye strain and how our lenses help.',
    content: 'Full content goes here...',
    date: '2023-12-05',
    image: '/images/blue_light_glasses_1781788352743.jpg'
  }
];

export const categories: Category[] = [
  'Sunglasses',
  'Blue Light Glasses',
  'Prescription Frames',
  'Reading Glasses',
  'Accessories'
];
