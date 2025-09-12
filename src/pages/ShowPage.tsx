import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Category, Product } from "../types/Product";
import Sidebar from "../components/Sidebar";
import HomeBackButton from "../components/button/HomeBackButton";

export default function ShopPage() {
  const { slug } = useParams<{ slug: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch Categories (Sidebar)
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("https://shop.sprwforge.com/api/v1/category");
        const data = await res.json();
        setCategories(data.data?.result || []);
      } catch (err) {
        console.error(err);
      }
    }
    fetchCategories();
  }, []);

  // Fetch Products by Category Slug
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://shop.sprwforge.com/api/v1/all?category=${slug}&sortby=&shipping=&brand=&collection=&rating=0&max=0&min=0&page=&sidebar_data=false`
        );
        const data = await res.json();

        if (!data.data.result.data || data.data.result.data.length === 0) {
          const fallbackRes = await fetch("https://shop.sprwforge.com/api/v1");
          const fallbackData = await fallbackRes.json();
          setProducts(fallbackData.data?.result?.data || []);
        } else {
          setProducts(data.data.result.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (slug) fetchProducts();
  }, [slug]);

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="max-w-[1470px] mx-auto flex gap-6 p-6">
      {/* Sidebar */}
      <Sidebar
              categories={categories}
              activeSlug={slug}
              onCategorySelect={(id: number) => {
                  // এখানে তুমি চাইলে setSlug বা অন্য logic দিতে পারো
                  console.log("Selected category ID:", id);
              } } selectedCategory={null}      />

      {/* Products Section */}
      <div className="flex-1">
        <h1 className="flex items-center gap-2 text-[16px] mb-4 capitalize text-[#888888]">
          <HomeBackButton />
          {slug}
        </h1>

        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((p) => (
              <div key={p.id} className="border p-2 rounded bg-white">
                <img
                  src={`https://shop.sprwforge.com/uploads/${p.image}`}
                  alt={p.title}
                  className="w-full h-40 object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
