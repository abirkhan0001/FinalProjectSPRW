

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface Product {
  id: string;
  title: string;
  description?: string;
  selling?: number;
  price?: number | null;
  image: string;
}

interface ApiSuggestedProduct {
  id: string;
  title: string;
  image: string;
  selling?: number;
  price?: number | null;
}

const BASE_IMAGE_URL = "https://shop.sprwforge.com/uploads/";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [suggestedProducts, setSuggestedProducts] = useState<ApiSuggestedProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);

    const fetchProduct = fetch(
      `https://shop.sprwforge.com/api/v1/product/${id}?id=${id}&user_id=`
    ).then(res => res.json());

    const fetchSuggested = fetch(
      `https://shop.sprwforge.com/api/v1/suggested-products/${id}?page=1`
    ).then(res => res.json());

    Promise.all([fetchProduct, fetchSuggested])
      .then(([productData, suggestedData]) => {
        setProduct({
          id: productData.data.id,
          title: productData.data.title,
          description: productData.data.description || productData.data.overview || "",
          selling: productData.data.selling,
          price: productData.data.price,
          image: productData.data.image
        });

        // Merge suggestion_1 and suggestion_2
        const suggestion1: ApiSuggestedProduct[] = (suggestedData.data.suggestion_1?.data || []).map((p: ApiSuggestedProduct) => ({
          id: p.id,
          title: p.title,
          image: p.image,
          selling: p.selling,
          price: p.price
        }));

        const suggestion2: ApiSuggestedProduct[] = (suggestedData.data.suggestion_2?.data || []).map((p: ApiSuggestedProduct) => ({
          id: p.id,
          title: p.title,
          image: p.image,
          selling: p.selling,
          price: p.price
        }));

        setSuggestedProducts([...suggestion1, ...suggestion2]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!product) return <p className="text-center py-10">Product not found!</p>;

  return (
    <div className="max-w-4xl mx-auto p-5">
      <Link
        to="/"
        className="inline-block mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        ← Back to Products
      </Link>

      {/* Main Product */}
      <div className="bg-white shadow rounded-lg p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={`${BASE_IMAGE_URL}${product.image}`}
          alt={product.title}
          className="w-full h-80 object-contain"
        />
        <div>
          <h1 className="text-2xl font-bold mb-3">{product.title}</h1>
          <p
            className="text-gray-700 mb-4"
            dangerouslySetInnerHTML={{ __html: product.description || "" }}
          />
          <p className="text-3xl font-bold text-[#470096]">€{product.selling}</p>
          <button className="mt-4 bg-[#470096] text-white px-6 py-2 rounded-lg hover:bg-purple-800">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Suggested Products */}
      {suggestedProducts.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">You might also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {suggestedProducts.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="block border p-2 rounded hover:shadow"
              >
                <img
                  src={`${BASE_IMAGE_URL}${p.image}`}
                  alt={p.title}
                  className="w-full h-40 object-contain mb-2"
                />
                <p className="text-sm font-medium">{p.title}</p>
                <p className="text-purple-700 font-bold">€{p.selling}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;


