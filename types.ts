export interface Product {
  id: string;
  name: string;
  category?: string;
  price: string;
  oldPrice?: string;
  image: string;
  badge?: string;
  description?: string;
  rating?: number;
  reviews?: number;
  sku?: string;
  // Rich Content fields for the new layout
  gallery?: string[];
  colors?: { name: string; hex: string; image?: string }[];
  features?: string[];
  specs?: { label: string; value: string }[];
  richDescription?: {
    title: string;
    content: string;
    image: string;
    align: 'left' | 'right' | 'center';
  }[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CollectionItem {
  id: string;
  title: string;
  image: string;
  link: string;
}

export interface Category {
  id: string;
  title: string;
  image: string;
  link: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export type ViewType = 'home' | 'complaint' | 'collection' | 'product' | 'kitchen-landing' | 'bath-landing';