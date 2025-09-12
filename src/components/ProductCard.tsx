
import React from "react";
import { LuRefreshCw } from "react-icons/lu";

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

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="flex flex-col items-start">
      {/* Card with image only */}
      <div className="card bg-white rounded-lg overflow-hidden w-full group relative">
        <figure className="h-50 flex items-center justify-center bg-gray-100 relative">
          <img
            src={`https://shop.sprwforge.com/uploads/${product.image}`}
            alt={product.title}
            className="h-full object-contain"
          />
          {/* Icon, hidden by default, shows on hover */}
          <LuRefreshCw className="absolute top-2 right-2 text-xl text-gray-600  opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-800"/>

        </figure>
      </div>

      {/* Title below the card */}
      <h2 className="mt-2 font-bold text-gray-800 text-start">{product.title}</h2>
      
      {/* Optional price */}
      {product.price !== null && (
        <p className="text-gray-600 mt-1">${product.price}</p>
      )}
    </div>
  );
};

export default ProductCard;
