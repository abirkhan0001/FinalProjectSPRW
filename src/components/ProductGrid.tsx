/*// src/components/ProductGrid/ProductsGrid.tsx
import React from "react";
import ProductCard from "./ProductCard";

interface Product {
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
  end_time: string | null;
}

interface ProductsGridProps {
  products: Product[];
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  return (
    <div>
      
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mt-4">No products available.</p>
      )}
    </div>
  );
};

export default ProductsGrid;
*/


import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

interface Product {
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
  end_time: string | null;
}

interface ProductsGridProps {
  products: Product[];
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  return (
    <div>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="block"
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mt-4">No products available.</p>
      )}
    </div>
  );
};

export default ProductsGrid;

