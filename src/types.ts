export type Category = 'Sunglasses' | 'Blue Light Glasses' | 'Prescription Frames' | 'Reading Glasses' | 'Accessories';
export type Gender = 'Men' | 'Women' | 'Unisex';
export type FaceShape = 'Round' | 'Oval' | 'Square' | 'Heart' | 'Diamond';

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  gender: Gender;
  images: string[];
  colors: string[];
  sizes: string[];
  description: string;
  specifications: Record<string, string>;
  reviews: Review[];
  rating: number;
  isNew: boolean;
  isBestSeller: boolean;
  faceShapes: FaceShape[];
}

export interface CartItem {
  id: string; // unique ID for the cart item (product.id + color + size)
  productId: string;
  quantity: number;
  color: string;
  size: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
}
