
// // // // // import { useState } from "react";
// // // // // import type { Category } from "../types/Product";

// // // // // interface Props {
// // // // //   categories: Category[];
// // // // //   selectedCategory: number | null; // <-- add this
// // // // //   onCategorySelect: (id: number) => void;
// // // // //   activeSlug?: string;
// // // // //    minPrice: string
// // // // // }


// // // // // export default function Sidebar({ categories, onCategorySelect }: Props) {
// // // // //   const [minPrice, setMinPrice] = useState<string>("");
// // // // //   const [maxPrice,setMaxPrice] = useState<string>("");
  

// // // // //   const baseAPI = "https://shop.sprwforge.com/api/v1";

// // // // //   const handleCategoryClick = (cat: Category) => {
// // // // //     onCategorySelect(cat.id);

// // // // //     const params = new URLSearchParams();
// // // // //     params.append("category", cat.slug ?? String(cat.id));
// // // // //     if (minPrice) params.append("min", minPrice);
// // // // //     if (maxPrice) params.append("max", maxPrice);

// // // // //     const apiURL = `${baseAPI}?${params.toString()}`;
// // // // //     window.location.href = apiURL;
// // // // //   };

// // // // //   const handleFilterGo = () => {
// // // // //     const params = new URLSearchParams();
// // // // //     if (minPrice) params.append("min", minPrice);
// // // // //     if (maxPrice) params.append("max", maxPrice);

// // // // //     const apiURL = `${baseAPI}?${params.toString()}`;
// // // // //     window.location.href = apiURL;
// // // // //   };

// // // // //   return (
// // // // //     <div className="lg:w-64 border-r md:w-[220px] pr-3 sticky top-0 h-screen overflow-y-auto">

// // // // //       <ul className="mb-6">
// // // // //         {categories.map((cat) => (
// // // // //           <li
// // // // //             key={cat.id}
// // // // //             className="cursor-pointer py-1 text-[#333333] text-[16px]"
// // // // //             onClick={() => handleCategoryClick(cat)}
// // // // //           >
// // // // //             {cat.title}
// // // // //           </li>
// // // // //         ))}
// // // // //       </ul>

// // // // //       {/* Price Section */}
// // // // //       <div className="mt-6">
// // // // //         <h3 className="font-bold text-[18.75px] text-[#333333] mb-2">Price</h3>
// // // // //         <p className="text-[13.5px] text-[#111111] mb-2">Any price</p>

// // // // //         {/* Min, Max, Go Row */}
// // // // //         <div className="flex items-center gap-2">
// // // // //           {/* Min Input */}
// // // // //           <div className="relative w-20">
// // // // //             <span
// // // // //   className="absolute left-0 top-1/2 -translate-y-1/2 
// // // // //              text-[#111111] text-[12px] 
// // // // //              border-r border-gray-300 
// // // // //              pr-2 pl-3 py-2
             
// // // // //              bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec] 
// // // // //              "
// // // // // >
// // // // //   €
// // // // // </span>

// // // // //             <input
// // // // //               type="number"
// // // // //               placeholder="Min"
// // // // //               value={minPrice}
// // // // //               onChange={(e) => setMinPrice(e.target.value)}
// // // // //               className="w-full border border-gray-300 bg-white rounded-lg px-2 py-1 pl-7 text-xs outline-none h-[36px] placeholder:text-xs"
// // // // //             />
// // // // //           </div>

// // // // //           {/* Max Input */}
// // // // //           <div className="relative w-20">
// // // // //                      <span
// // // // //   className="absolute left-0 top-1/2 -translate-y-1/2 
// // // // //              text-[#111111] text-[12px] 
// // // // //              border-r border-gray-300 
// // // // //              pr-2 pl-3 py-2
             
// // // // //              bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec] 
// // // // //              "
// // // // // >
// // // // //   €
// // // // // </span>
// // // // //             <input
// // // // //               type="number"
// // // // //               placeholder="Max"
// // // // //               value={maxPrice}
// // // // //               onChange={(e) => setMaxPrice(e.target.value)}
// // // // //               className="w-full border border-gray-300 bg-white rounded-lg px-2 py-1 pl-7 text-xs outline-none h-[36px] placeholder:text-xs"
// // // // //             />
// // // // //           </div>

// // // // //           {/* Go Button */}
// // // // //           <button
// // // // //             onClick={handleFilterGo}
// // // // //             className="bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec] border border-[#bbb] shadow-inner rounded-lg text-xs h-[36px] px-3 transition-all duration-100 ease-in-out hover:from-[#e7e9ec] hover:to-[#f7f8fa] hover:border-gray-400"
// // // // //           >
// // // // //             Go
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }




// // // // // import { useState } from "react";
// // // // // import type { Category } from "../types/Product";

// // // // // interface Props {
// // // // //   categories: Category[];
// // // // //   selectedCategory: number | null;
// // // // //   onCategorySelect: (id: number) => void;
// // // // //   activeSlug?: string;
// // // // //   minPrice: string
// // // // // }

// // // // // export default function Sidebar({ categories, onCategorySelect }: Props) {
// // // // //   const [minPrice, setMinPrice] = useState<string>("");
// // // // //   const [maxPrice, setMaxPrice] = useState<string>("");

// // // // //   const baseAPI =
// // // // //     "https://shop.sprwforge.com/api/v1/products?all_categories=true&sidebar_data=true";

// // // // //   // ✅ Category ক্লিক করলে নতুন API কল হবে
// // // // //   const handleCategoryClick = (cat: Category) => {
// // // // //     onCategorySelect(cat.id);

// // // // //     const params = new URLSearchParams();
// // // // //     params.append("all_categories", "true");
// // // // //     params.append("sidebar_data", "true");
// // // // //     params.append("category", cat.slug ?? String(cat.id));

// // // // //     if (minPrice) params.append("min", minPrice);
// // // // //     if (maxPrice) params.append("max", maxPrice);

// // // // //     const apiURL = `${baseAPI}&${params.toString()}`;
// // // // //     window.location.href = apiURL; // ✅ পেজ রিফ্রেশ সহ নতুন ডেটা লোড হবে
// // // // //   };

// // // // //   // ✅ শুধু price filter এর জন্য Go Button
// // // // //   const handleFilterGo = () => {
// // // // //     const params = new URLSearchParams();
// // // // //     params.append("all_categories", "true");
// // // // //     params.append("sidebar_data", "true");

// // // // //     if (minPrice) params.append("min", minPrice);
// // // // //     if (maxPrice) params.append("max", maxPrice);

// // // // //     const apiURL = `${baseAPI}&${params.toString()}`;
// // // // //     window.location.href = apiURL; // ✅ পেজে নতুন ডেটা লোড হবে
// // // // //   };

// // // // //   return (
// // // // //     <div className="lg:w-64 border-r md:w-[220px] pr-3 sticky top-0 h-screen overflow-y-auto">
// // // // //       <ul className="mb-6">
// // // // //         {categories.map((cat) => (
// // // // //           <li
// // // // //             key={cat.id}
// // // // //             className="cursor-pointer py-1 text-[#333333] text-[16px]"
// // // // //             onClick={() => handleCategoryClick(cat)}
// // // // //           >
// // // // //             {cat.title}
// // // // //           </li>
// // // // //         ))}
// // // // //       </ul>

// // // // //       {/* ✅ Price Filter Section */}
// // // // //       <div className="mt-6">
// // // // //         <h3 className="font-bold text-[18.75px] text-[#333333] mb-2">Price</h3>
// // // // //         <p className="text-[13.5px] text-[#111111] mb-2">Any price</p>

// // // // //         <div className="flex items-center gap-2">
// // // // //           {/* Min Input */}
// // // // //           <div className="relative w-20">
// // // // //             <span
// // // // //               className="absolute left-0 top-1/2 -translate-y-1/2 
// // // // //              text-[#111111] text-[12px] 
// // // // //              border-r border-gray-300 
// // // // //              pr-2 pl-3 py-2
// // // // //              bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec]"
// // // // //             >
// // // // //               €
// // // // //             </span>
// // // // //             <input
// // // // //               type="number"
// // // // //               placeholder="Min"
// // // // //               value={minPrice}
// // // // //               onChange={(e) => setMinPrice(e.target.value)}
// // // // //               className="w-full border border-gray-300 bg-white rounded-lg px-2 py-1 pl-7 text-xs outline-none h-[36px] placeholder:text-xs"
// // // // //             />
// // // // //           </div>

// // // // //           {/* Max Input */}
// // // // //           <div className="relative w-20">
// // // // //             <span
// // // // //               className="absolute left-0 top-1/2 -translate-y-1/2 
// // // // //              text-[#111111] text-[12px] 
// // // // //              border-r border-gray-300 
// // // // //              pr-2 pl-3 py-2
// // // // //              bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec]"
// // // // //             >
// // // // //               €
// // // // //             </span>
// // // // //             <input
// // // // //               type="number"
// // // // //               placeholder="Max"
// // // // //               value={maxPrice}
// // // // //               onChange={(e) => setMaxPrice(e.target.value)}
// // // // //               className="w-full border border-gray-300 bg-white rounded-lg px-2 py-1 pl-7 text-xs outline-none h-[36px] placeholder:text-xs"
// // // // //             />
// // // // //           </div>

// // // // //           {/* Go Button */}
// // // // //           <button
// // // // //             onClick={handleFilterGo}
// // // // //             className="bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec] border border-[#bbb] shadow-inner rounded-lg text-xs h-[36px] px-3 transition-all duration-100 ease-in-out hover:from-[#e7e9ec] hover:to-[#f7f8fa] hover:border-gray-400"
// // // // //           >
// // // // //             Go
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }




// // // // import { useState } from "react";
// // // // import type { Category } from "../types/Product";

// // // // interface Props {
// // // //   categories: Category[];
// // // //   selectedCategory: number | null;
// // // //   onCategorySelect: (id: number | null, min?: string, max?: string) => void;
// // // // }

// // // // export default function Sidebar({ categories, selectedCategory, onCategorySelect }: Props) {
// // // //   const [minPrice, setMinPrice] = useState<string>("");
// // // //   const [maxPrice, setMaxPrice] = useState<string>("");

// // // //   const handleCategoryClick = (cat: Category) => {
// // // //     onCategorySelect(cat.id, minPrice, maxPrice);
// // // //   };

// // // //   const handleFilterGo = () => {
// // // //     onCategorySelect(selectedCategory, minPrice, maxPrice);
// // // //   };

// // // //   return (
// // // //     <div className="lg:w-64 border-r md:w-[220px] pr-3 sticky top-0 h-screen overflow-y-auto">
// // // //       <ul className="mb-6">
// // // //         {categories.map((cat) => (
// // // //           <li
// // // //             key={cat.id}
// // // //             className={`cursor-pointer py-1 text-[#333333] text-[16px] ${
// // // //               selectedCategory === cat.id ? "font-bold text-blue-500" : ""
// // // //             }`}
// // // //             onClick={() => handleCategoryClick(cat)}
// // // //           >
// // // //             {cat.title}
// // // //           </li>
// // // //         ))}
// // // //       </ul>

// // // //       {/* ✅ Price Filter Section */}
// // // //       <div className="mt-6">
// // // //         <h3 className="font-bold text-[18.75px] text-[#333333] mb-2">Price</h3>
// // // //         <p className="text-[13.5px] text-[#111111] mb-2">Any price</p>

// // // //         <div className="flex items-center gap-2">
// // // //           {/* Min Input */}
// // // //           <div className="relative w-20">
// // // //             <span
// // // //               className="absolute left-0 top-1/2 -translate-y-1/2 
// // // //              text-[#111111] text-[12px] 
// // // //              border-r border-gray-300 
// // // //              pr-2 pl-3 py-2
// // // //              bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec]"
// // // //             >
// // // //               €
// // // //             </span>
// // // //             <input
// // // //               type="number"
// // // //               placeholder="Min"
// // // //               value={minPrice}
// // // //               onChange={(e) => setMinPrice(e.target.value)}
// // // //               className="w-full border border-gray-300 bg-white rounded-lg px-2 py-1 pl-7 text-xs outline-none h-[36px] placeholder:text-xs"
// // // //             />
// // // //           </div>

// // // //           {/* Max Input */}
// // // //           <div className="relative w-20">
// // // //             <span
// // // //               className="absolute left-0 top-1/2 -translate-y-1/2 
// // // //              text-[#111111] text-[12px] 
// // // //              border-r border-gray-300 
// // // //              pr-2 pl-3 py-2
// // // //              bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec]"
// // // //             >
// // // //               €
// // // //             </span>
// // // //             <input
// // // //               type="number"
// // // //               placeholder="Max"
// // // //               value={maxPrice}
// // // //               onChange={(e) => setMaxPrice(e.target.value)}
// // // //               className="w-full border border-gray-300 bg-white rounded-lg px-2 py-1 pl-7 text-xs outline-none h-[36px] placeholder:text-xs"
// // // //             />
// // // //           </div>

// // // //           {/* Go Button */}
// // // //           <button
// // // //             onClick={handleFilterGo}
// // // //             className="bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec] border border-[#bbb] shadow-inner rounded-lg text-xs h-[36px] px-3 transition-all duration-100 ease-in-out hover:from-[#e7e9ec] hover:to-[#f7f8fa] hover:border-gray-400"
// // // //           >
// // // //             Go
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }




// // // import { useState } from "react";
// // // import type { Category } from "../types/Product";

// // // interface Props {
// // //   categories: Category[];
// // //   selectedCategory: number | null;
// // //   onCategorySelect: (id: number) => void
// // // }

// // // export default function Sidebar({ categories, selectedCategory, onCategorySelect }: Props) {
// // //   const [minPrice, setMinPrice] = useState<string>("");
// // //   const [maxPrice, setMaxPrice] = useState<string>("");

// // //   // Category ক্লিক হলে handleCategorySelect কল হবে
// // //   const handleCategoryClick = (cat: Category) => {
// // //     onCategorySelect(cat.id, minPrice, maxPrice);
// // //   };

// // //   // Go Button ক্লিক হলে শুধুমাত্র price filter করা হবে
// // //   const handleFilterGo = () => {
// // //     onCategorySelect(selectedCategory, minPrice, maxPrice);
// // //   };

// // //   return (
// // //     <div className="lg:w-64 border-r md:w-[220px] pr-3 sticky top-0 h-screen overflow-y-auto">
// // //       {/* Categories */}
// // //       <ul className="mb-6">
// // //         {categories.map((cat) => (
// // //           <li
// // //             key={cat.id}
// // //             className={`cursor-pointer py-1 text-[16px] ${
// // //               selectedCategory === cat.id ? "text-[#470096] font-bold" : "text-[#333333]"
// // //             }`}
// // //             onClick={() => handleCategoryClick(cat)}
// // //           >
// // //             {cat.title}
// // //           </li>
// // //         ))}
// // //       </ul>

// // //       {/* Price Section */}
// // //       <div className="mt-6">
// // //         <h3 className="font-bold text-[18.75px] text-[#333333] mb-2">Price</h3>
// // //         <p className="text-[13.5px] text-[#111111] mb-2">Any price</p>

// // //         <div className="flex items-center gap-2">
// // //           {/* Min Input */}
// // //           <div className="relative w-20">
// // //             <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[#111111] text-[12px] border-r border-gray-300 pr-2 pl-3 py-2 bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec]">
// // //               €
// // //             </span>
// // //             <input
// // //               type="number"
// // //               placeholder="Min"
// // //               value={minPrice}
// // //               onChange={(e) => setMinPrice(e.target.value)}
// // //               className="w-full border border-gray-300 bg-white rounded-lg px-2 py-1 pl-7 text-xs outline-none h-[36px] placeholder:text-xs"
// // //             />
// // //           </div>

// // //           {/* Max Input */}
// // //           <div className="relative w-20">
// // //             <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[#111111] text-[12px] border-r border-gray-300 pr-2 pl-3 py-2 bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec]">
// // //               €
// // //             </span>
// // //             <input
// // //               type="number"
// // //               placeholder="Max"
// // //               value={maxPrice}
// // //               onChange={(e) => setMaxPrice(e.target.value)}
// // //               className="w-full border border-gray-300 bg-white rounded-lg px-2 py-1 pl-7 text-xs outline-none h-[36px] placeholder:text-xs"
// // //             />
// // //           </div>

// // //           {/* Go Button */}
// // //           <button
// // //             onClick={handleFilterGo}
// // //             className="bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec] border border-[#bbb] shadow-inner rounded-lg text-xs h-[36px] px-3 transition-all duration-100 ease-in-out hover:from-[#e7e9ec] hover:to-[#f7f8fa] hover:border-gray-400"
// // //           >
// // //             Go
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }






// // // import { useState } from "react";
// // // import type { Category } from "../types/Product";

// // // export interface Props {
// // //    categories: [];
// // //   selectedCategory: number | null;
// // //   onCategorySelect: (id: number | null, min?: string, max?: string) => void;
// // //   onCategoryClick: (slug: string, id: number) => void;
// // //   minPrice: string;
// // //   maxPrice: string;
// // //   setMinPrice: React.Dispatch<React.SetStateAction<string>>;
// // //   setMaxPrice: React.Dispatch<React.SetStateAction<string>>;
// // //   onPriceFilter: () => void;
// // //   cat: number
// // // }


// // // export default function Sidebar({ categories, selectedCategory, onCategorySelect }: Props) {
// // //   const [minPrice, setMinPrice] = useState<string>("");
// // //   const [maxPrice, setMaxPrice] = useState<string>("");

// // //   // Category ক্লিক হলে handleCategoryClick কল হবে
// // //   const handleCategoryClick = (cat: Category) => {
// // //     onCategorySelect(cat.id, minPrice, maxPrice);
// // //   };

// // //   // Go Button ক্লিক হলে শুধুমাত্র price filter করা হবে
// // //   const handleFilterGo = () => {
// // //     onCategorySelect(selectedCategory, minPrice, maxPrice);
// // //   };

// // //   return (
// // //     <div className="lg:w-64 border-r md:w-[220px] pr-3 sticky top-0 h-screen overflow-y-auto">
// // //       {/* Categories */}
// // //       <ul className="mb-6">
// // //         {categories.map((cat) => (
// // //           <li
// // //             key={cat.id}
// // //             className={`cursor-pointer py-1 text-[16px] ${
// // //               selectedCategory === cat.id ? "text-[#470096] font-bold" : "text-[#333333]"
// // //             }`}
// // //             onClick={() => handleCategoryClick(cat)}
// // //           >
// // //             {cat.title}
// // //           </li>
// // //         ))}
// // //       </ul>

// // //       {/* Price Section */}
// // //       <div className="mt-6">
// // //         <h3 className="font-bold text-[18.75px] text-[#333333] mb-2">Price</h3>
// // //         <p className="text-[13.5px] text-[#111111] mb-2">Any price</p>

// // //         <div className="flex items-center gap-2">
// // //           {/* Min Input */}
// // //           <div className="relative w-20">
// // //             <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[#111111] text-[12px] border-r border-gray-300 pr-2 pl-3 py-2 bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec]">
// // //               €
// // //             </span>
// // //             <input
// // //               type="number"
// // //               placeholder="Min"
// // //               value={minPrice}
// // //               onChange={(e) => setMinPrice(e.target.value)}
// // //               className="w-full border border-gray-300 bg-white rounded-lg px-2 py-1 pl-7 text-xs outline-none h-[36px] placeholder:text-xs"
// // //             />
// // //           </div>

// // //           {/* Max Input */}
// // //           <div className="relative w-20">
// // //             <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[#111111] text-[12px] border-r border-gray-300 pr-2 pl-3 py-2 bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec]">
// // //               €
// // //             </span>
// // //             <input
// // //               type="number"
// // //               placeholder="Max"
// // //               value={maxPrice}
// // //               onChange={(e) => setMaxPrice(e.target.value)}
// // //               className="w-full border border-gray-300 bg-white rounded-lg px-2 py-1 pl-7 text-xs outline-none h-[36px] placeholder:text-xs"
// // //             />
// // //           </div>

// // //           {/* Go Button */}
// // //           <button
// // //             onClick={handleFilterGo}
// // //             className="bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec] border border-[#bbb] shadow-inner rounded-lg text-xs h-[36px] px-3 transition-all duration-100 ease-in-out hover:from-[#e7e9ec] hover:to-[#f7f8fa] hover:border-gray-400"
// // //           >
// // //             Go
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }





// // // import { useState } from "react";
// // // import type { Category } from "../types/Product";

// // // export interface Props {
// // //   categories: Category[]; // আগে [] ছিল, এখন Category[] করলাম
// // //   selectedCategory: number | null;
// // //   onCategorySelect: (id: number | null, min?: string, max?: string) => void;
// // //   onCategoryClick: (slug: string, id: number) => void; // slug + id
// // //   minPrice: string;
// // //   maxPrice: string;
// // //   setMinPrice: React.Dispatch<React.SetStateAction<string>>;
// // //   setMaxPrice: React.Dispatch<React.SetStateAction<string>>;
// // //   onPriceFilter: () => void;
// // //   cat: number;
// // // }

// // // export default function Sidebar({
// // //   categories,
// // //   selectedCategory,
// // //   onCategorySelect,
// // //   onCategoryClick, // এখানে add করলাম
// // // }: Props) {
// // //   const [minPrice, setMinPrice] = useState<string>("");
// // //   const [maxPrice, setMaxPrice] = useState<string>("");

// // //   const handleCategoryClick = (_slug: string, _id: number, cat: Category) => {
// // //     onCategoryClick(cat.slug, cat.id); // slug + id পাঠাচ্ছি
// // //     onCategorySelect(cat.id, minPrice, maxPrice);
// // //   };

// // //   const handleFilterGo = () => {
// // //     onCategorySelect(selectedCategory, minPrice, maxPrice);
// // //   };

// // //   return (
// // //     <div className="lg:w-64 border-r md:w-[220px] pr-3 sticky top-0 h-screen overflow-y-auto">
// // //    {/* Categories */}
// // // <ul className="mb-6">
// // //   {categories.map((cat) => (
// // //     <li
// // //       key={cat.id}
// // //       className={`cursor-pointer py-1 text-[16px] ${
// // //         selectedCategory === cat.id
// // //           ? "text-[#470096] font-bold"
// // //           : "text-[#333333]"}
// // //       `}
// // //       onClick={() => handleCategoryClick(cat.slug, cat.id, cat)} // 🔥 এখানে ৩টা পাঠাচ্ছি
// // //     >
// // //       {cat.title}
// // //     </li>
// // //   ))}
// // // </ul>


// // //       {/* Price Section */}
// // //       <div className="mt-6">
// // //         <h3 className="font-bold text-[18.75px] text-[#333333] mb-2">Price</h3>
// // //         <p className="text-[13.5px] text-[#111111] mb-2">Any price</p>

// // //         <div className="flex items-center gap-2">
// // //           {/* Min Input */}
// // //           <div className="relative w-20">
// // //             <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[#111111] text-[12px] border-r border-gray-300 pr-2 pl-3 py-2 bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec]">
// // //               €
// // //             </span>
// // //             <input
// // //               type="number"
// // //               placeholder="Min"
// // //               value={minPrice}
// // //               onChange={(e) => setMinPrice(e.target.value)}
// // //               className="w-full border border-gray-300 bg-white rounded-lg px-2 py-1 pl-7 text-xs outline-none h-[36px] placeholder:text-xs"
// // //             />
// // //           </div>

// // //           {/* Max Input */}
// // //           <div className="relative w-20">
// // //             <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[#111111] text-[12px] border-r border-gray-300 pr-2 pl-3 py-2 bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec]">
// // //               €
// // //             </span>
// // //             <input
// // //               type="number"
// // //               placeholder="Max"
// // //               value={maxPrice}
// // //               onChange={(e) => setMaxPrice(e.target.value)}
// // //               className="w-full border border-gray-300 bg-white rounded-lg px-2 py-1 pl-7 text-xs outline-none h-[36px] placeholder:text-xs"
// // //             />
// // //           </div>

// // //           {/* Go Button */}
// // //           <button
// // //             onClick={handleFilterGo}
// // //             className="bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec] border border-[#bbb] shadow-inner rounded-lg text-xs h-[36px] px-3 transition-all duration-100 ease-in-out hover:from-[#e7e9ec] hover:to-[#f7f8fa] hover:border-gray-400"
// // //           >
// // //             Go
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }




// // import type { Category } from "../types/Product";

// // export interface Props {
// //   categories: Category[];
// //   selectedCategory: number | null;
// //   onCategorySelect: (id: number | null, min?: string, max?: string) => void;
// //   onCategoryClick: (slug: string, id: number) => void;
// //   minPrice: string;
// //   maxPrice: string;
// //   setMinPrice: React.Dispatch<React.SetStateAction<string>>;
// //   setMaxPrice: React.Dispatch<React.SetStateAction<string>>;
// //   onPriceFilter: () => void; // 🔹 parent এর ফাংশন trigger করার জন্য
// //   cat: number;
// // }

// // export default function Sidebar({
// //   categories,
// //   selectedCategory,
// //   onCategorySelect,
// //   onCategoryClick,
// //   minPrice,
// //   maxPrice,
// //   setMinPrice,
// //   setMaxPrice,
// //   onPriceFilter,
// // }: Props) {

// //   const handleCategoryClick = (cat: Category) => {
// //     onCategoryClick(cat.slug, cat.id);
// //     // Category click করলে সাথে সাথে filter করবে
// //     onCategorySelect(cat.id, minPrice, maxPrice);
// //   };

// //   return (
// //     <div className="lg:w-64 border-r md:w-[220px] pr-3 sticky top-0 h-screen overflow-y-auto">
// //       {/* Categories */}
// //       <ul className="mb-6">
// //         {categories.map(cat => (
// //           <li key={cat.id}
// //             className={`cursor-pointer py-1 text-[16px] ${selectedCategory === cat.id ? "text-[#470096] font-bold" : "text-[#333]"}`}
// //             onClick={() => handleCategoryClick(cat)}>
// //             {cat.title}
// //           </li>
// //         ))}
// //       </ul>

// //       {/* Price Section */}
// //       <div className="mt-6">
// //         <h3 className="font-bold text-[18.75px] text-[#333] mb-2">Price</h3>
// //         <div className="flex items-center gap-2">
// //           {/* Min Input */}
// //           <div className="relative w-20">
// //             <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[#111] text-[12px] border-r border-gray-300 pr-2 pl-3 py-2 bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec]">€</span>
// //             <input
// //               type="number"
// //               placeholder="Min"
// //               value={minPrice}
// //               onChange={e => setMinPrice(e.target.value)}
// //               className="w-full border border-gray-300 bg-white rounded-lg px-2 py-1 pl-7 text-xs outline-none h-[36px] placeholder:text-xs"
// //             />
// //           </div>

// //           {/* Max Input */}
// //           <div className="relative w-20">
// //             <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[#111] text-[12px] border-r border-gray-300 pr-2 pl-3 py-2 bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec]">€</span>
// //             <input
// //               type="number"
// //               placeholder="Max"
// //               value={maxPrice}
// //               onChange={e => setMaxPrice(e.target.value)}
// //               className="w-full border border-gray-300 bg-white rounded-lg px-2 py-1 pl-7 text-xs outline-none h-[36px] placeholder:text-xs"
// //             />
// //           </div>

// //           {/* Go Button */}
// //           <button
// //             onClick={onPriceFilter} // 🔹 parent filter function trigger হবে
// //             className="bg-gradient-to-b from-[#f7f8fa] to-[#e7e9ec] border border-[#bbb] shadow-inner rounded-lg text-xs h-[36px] px-3 transition-all duration-100 ease-in-out hover:from-[#e7e9ec] hover:to-[#f7f8fa] hover:border-gray-400"
// //           >
// //             Go
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }




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



