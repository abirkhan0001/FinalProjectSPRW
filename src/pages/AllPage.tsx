import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import type { Category } from "../types/Product";

interface Product {
  id: number;
  title: string;
  price: number;
}

// Categories define
const categories: Category[] = [
  {
      id: 1, title: "Bebidas", slug: "bebidas",
      selectedCategory: null,
      minPrice: ""
  },
  {
      id: 2, title: "Farmacia", slug: "farmacia",
      selectedCategory: null,
      minPrice: ""
  },
  {
      id: 3, title: "Peixaria", slug: "peixaria",
      selectedCategory: null,
      minPrice: ""
  },
];

const AllPage: React.FC = () => {
  const [category, setCategory] = useState<string>("bebidas"); // slug রাখবো
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // API URL তৈরি
  const getApiUrl = (cat: string, min?: string, max?: string) =>
    `https://shop.sprwforge.com/api/v1/all?category=${cat}&sortby=&shipping=&brand=&collection=&rating=0&max=${max || 0}&min=${min || 0}&page=&sidebar_data=false`;

  // API Fetch
  const fetchProducts = async (cat: string, min?: string, max?: string) => {
    setLoading(true);
    try {
      const res = await fetch(getApiUrl(cat, min, max));
      const data = await res.json();
      setProducts(data.data || []);
    } catch (err) {
      console.error("Fetch error:", err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // যখন category পরিবর্তন হবে তখন fetch হবে
  useEffect(() => {
    fetchProducts(category);
  }, [category]);

  // Sidebar থেকে category change হ্যান্ডেল করা
  const handleCategoryClick = (slug: string, id: number) => {
    setCategory(slug);
    setSelectedCategoryId(id);
  };

  // Price filter হ্যান্ডেল
  const handleCategorySelect = (id: number | null, min?: string, max?: string) => {
    if (!id) return;
    const cat = categories.find((c) => c.id === id);
    if (cat) {
      setCategory(cat.slug);
      setSelectedCategoryId(id);
      fetchProducts(cat.slug, min, max);
    }
  };

  return (
    <div className="flex">
      <Sidebar
        categories={categories}
        selectedCategory={selectedCategoryId}
        onCategorySelect={handleCategorySelect}
        onCategoryClick={handleCategoryClick}
        minPrice=""
        maxPrice=""
        setMinPrice={() => {}}
        setMaxPrice={() => {}}
        onPriceFilter={() => {}}
        cat={selectedCategoryId}
      />

      <div className="flex-1 p-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.title} - ${product.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AllPage;
