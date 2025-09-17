
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
        <div className="grid justify-center grid-cols-2 xs:grid-cols-2 mdx:grid-cols-3 xxl:grid-cols-5 gap-5">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="block">
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