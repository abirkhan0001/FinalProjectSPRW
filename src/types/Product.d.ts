/*interface Product {
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
  category_id: number; // TypeScript type এর জন্য
}

// একটি Product অবজেক্ট
const product: Product = {
  id: 1,
  title: "Sample Product",
  slug: "sample-product",
  badge: null,
  selling: 100,
  offered: 80,
  image: "image.png",
  review_count: 5,
  rating: 4.5,
  price: 200,
  end_time: "2025-12-31",
  category_id: 10, // এই লাইনটি বাধ্যতামূলক
};
export default Product;


// types/Product.ts

export const interface Product {
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
  category_id: number; // TypeScript type এর জন্য
}

// উদাহরণ Product object (optional, যদি দরকার হয়)
export const sampleProduct: Product = {
  id: 1,
  title: "Sample Product",
  slug: "sample-product",
  badge: null,
  selling: 100,
  offered: 80,
  image: "image.png",
  review_count: 5,
  rating: 4.5,
  price: 200,
  end_time: "2025-12-31",
  category_id: 10,
};
*/


// types/Product.ts

// Interface ঠিকভাবে declare
// types/Product.ts

// Interface ঠিকভাবে declare





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
  category_id: number; // TypeScript type এর জন্য
}


export interface Category {
  id: number;
  title: string;
  slug: string;
  apiLink: string;
}

interface ChildCategory {
  id: number;
  title: string;
  slug: string;
}

interface Category {
  id: number;
  title: string;
  slug: string;
  in_footer_child: ChildCategory[];
}


// Optional: একটি sample object
export const sampleProduct: Product = {
  id: 1,
  title: "Sample Product",
  slug: "sample-product",
  badge: null,
  selling: 100,
  offered: 80,
  image: "image.png",
  review_count: 5,
  rating: 4.5,
  price: 200,
  end_time: "2025-12-31",
  category_id: 10,
};

interface SuggestedProduct {
  id: string;
  title: string;
  image: string;
  selling?: number;
  price?: number | null;
}
