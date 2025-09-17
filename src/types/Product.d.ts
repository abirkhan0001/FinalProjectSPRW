


export interface Product {
  id: number;
  title: string;
  slug: string;
  badge: string | null;
  selling: number;
  offered: number;
  image: string;
  review_count: number;
  rating: number;
  price: number | null;
  end_time: string;
  category_id: number;
  description?: string; 
  overview?: string;
   
}

export interface SuggestedProduct {
  id: number | string;
  title: string;
  image: string;
  selling?: number;
  price?: number | null;
}

export interface ChildCategory {
  id: number;
  title: string;
  slug: string;
}

export interface Category {
  id: number;
  title: string;
  slug: string;
  apiLink?: string;
  in_footer_child?: ChildCategory[];
  selectedCategory: number | null
  minPrice: string
}
