

import type { Category } from "../types/Product";

export interface Props {
  categories: Category[];
  selectedCategory: number | null;
  onCategorySelect: (id: number | null, min?: string, max?: string) => void;
  onCategoryClick: (slug: string, id: number) => void;
  minPrice: string;
  maxPrice: string;
  setMinPrice: React.Dispatch<React.SetStateAction<string>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<string>>;
  onPriceFilter: () => void; // 🔹 parent এর ফাংশন trigger করার জন্য
  cat: number;
}

export default function Sidebar({
  categories,
  selectedCategory,

  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  onPriceFilter,
}: Props) {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleCategoryClick = (_cat: Category) => {
    // 🔹 শুধুমাত্র লিংক খোলার জন্য
    const url = "https://shop.sprwforge.com/api/v1";
    window.open(url, "_blank"); // নতুন ট্যাবে খোলে

    // আগের ফাংশনগুলো বন্ধ (API fetch হবে না)
    // onCategoryClick(cat.slug, cat.id);
    // onCategorySelect(cat.id, minPrice, maxPrice);
  };

  return (
    <div className="lg:w-64 border-r md:w-[220px] pr-3 sticky top-0 h-screen overflow-y-auto">
      {/* Categories */}
      <ul className="mb-6">
        {categories.map(cat => (
          <li
            key={cat.id}
            className={`cursor-pointer py-1 text-[16px] ${
              selectedCategory === cat.id ? "text-[#470096] font-bold" : "text-[#333]"
            }`}
            onClick={() => handleCategoryClick(cat)} // 🔹 শুধুমাত্র এখানে handle
          >
            {cat.title}
          </li>
        ))}
      </ul>

      {/* Price Section */}
      <div className="mt-6">
        <h3 className="font-bold text-[18.75px] text-[#333] mb-2">Price</h3>
        <div className="flex items-center gap-2">
          {/* Min Input */}
          <div className="relative w-20">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[#111] text-[12px] border-r border-gray-300 pr-2 pl-3 py-2 bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec]">€</span>
            <input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={e => setMinPrice(e.target.value)}
              className="w-full border border-gray-300 bg-white rounded-lg px-2 py-1 pl-7 text-xs outline-none h-[36px] placeholder:text-xs"
            />
          </div>

          {/* Max Input */}
          <div className="relative w-20">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[#111] text-[12px] border-r border-gray-300 pr-2 pl-3 py-2 bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec]">€</span>
            <input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={e => setMaxPrice(e.target.value)}
              className="w-full border border-gray-300 bg-white rounded-lg px-2 py-1 pl-7 text-xs outline-none h-[36px] placeholder:text-xs"
            />
          </div>

          {/* Go Button */}
          <button
            onClick={onPriceFilter} // 🔹 parent filter function trigger হবে
            className="bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec] border border-[#bbb] shadow-inner rounded-lg text-xs h-[36px] px-3 transition-all duration-100 ease-in-out hover:from-[#e7e9ec] hover:to-[#f7f8fa] hover:border-gray-400"
          >
            Go
          </button>
        </div>
      </div>
    </div>
  );
}