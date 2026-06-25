export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: ProductCategory;
  description: string;
  images: string[];
  sizes: string[];
  colors: string[];
  featured?: boolean;
  bestSeller?: boolean;
  tags?: string[];
}

export type ProductCategory =
  | "hoodies"
  | "tees"
  | "sweatsuits"
  | "jackets";

export interface CartItem {
  product: Product;
  size: string;
  color: string;
  quantity: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CMSContent {
  hero: {
    headline: string;
    subheadline: string;
    ctaText: string;
    ctaLink: string;
  };
  mission: {
    title: string;
    body: string;
  };
}
