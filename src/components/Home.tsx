
// import { useState, useRef, useEffect, useCallback } from "react";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import Sidebar from "../components/Sidebar";
// import ProductGrid from "../components/ProductGrid";
// import type { Category, Product } from "../types/Product";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// interface HomeProps {
//   searchQuery?: string;
// }

// const Home: React.FC<HomeProps> = ({ searchQuery = "" }) => {
//   // Dropdown state
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // Products, categories, filtered products
//   const [, setProducts] = useState<Product[]>([]);
//   const [filtered, setFiltered] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<Category[]>([]);

//   // Pagination & loading
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(() => {
//     const savedPage = localStorage.getItem("currentPage");
//     return savedPage ? parseInt(savedPage, 10) : 1;
//   });
//   const [totalPages, setTotalPages] = useState(1);
//   const itemsPerPage = 30;

//   // Sorting state
//   const [sortOption, setSortOption] = useState("featured");

//   // Price filter state
//   const [minPrice, setMinPrice] = useState<string>("");
//   const [maxPrice, setMaxPrice] = useState<string>("");

//   const toggleDropdown = () => setIsOpen((prev) => !prev);

//   // Save page whenever it changes
//   useEffect(() => {
//     localStorage.setItem("currentPage", page.toString());
//   }, [page]);

//   // Click outside dropdown
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // 🔹 Build URL (with sort + filters)
//   const buildUrl = useCallback((
//     page: number,
//     sortOption: string,
//     categoryId?: number,
//     min?: string,
//     max?: string
//   ) => {
//     let url = `https://shop.sprwforge.com/api/v1/products?`;

//     if (sortOption === "lowToHigh") url += `sortby=price_low_to_high&`;
//     else if (sortOption === "highToLow") url += `sortby=price_high_to_low&`;

//     url += `page=${page}`;

//     if (categoryId) url += `&category_id=${categoryId}`;
//     if (min) url += `&min=${min}`;
//     if (max) url += `&max=${max}`;
//     if (searchQuery) url += `&q=${encodeURIComponent(searchQuery)}`;

//     url += `&orderBy=created_at&orderByType=desc&shipping=&brand=&collection=&rating=0&all_categories=false&sidebar_data=false`;

//     return url;
//   }, [searchQuery]);

//   // 🔹 Category + Price filter function
//   const handleCategorySelect = (id: number | null, min?: string, max?: string) => {
//     setLoading(true);

//     const url = buildUrl(page, sortOption, id ?? undefined, min, max);

//     fetch(url)
//       .then(res => res.json())
//       .then(data => {
//         let productsData: Product[] = data.data.result.data;

//         if (searchQuery) {
//           productsData = productsData.filter((p) =>
//             p.title.toLowerCase().includes(searchQuery.toLowerCase())
//           );
//         }

//         setProducts(productsData);
//         setFiltered(productsData);
//         setTotalPages(data.data.result.last_page);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setLoading(false);
//       });
//   };

//   // 🔹 Products & categories fetch (default load)
//   useEffect(() => {
//     setLoading(true);

//     const url = buildUrl(page, sortOption);

//     fetch(url)
//       .then(res => res.json())
//       .then(data => {
//         let productsData: Product[] = data.data.result.data;

//         if (searchQuery) {
//           productsData = productsData.filter((p) =>
//             p.title.toLowerCase().includes(searchQuery.toLowerCase())
//           );
//         }

//         setProducts(productsData);
//         setFiltered(productsData);
//         setTotalPages(data.data.result.last_page);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setLoading(false);
//       });

//     fetch("https://shop.sprwforge.com/api/v1/products?all_categories=true&sidebar_data=true")
//       .then(res => res.json())
//       .then(json => {
//         const cats: Category[] = json.data?.all_categories || [];
//         setCategories(cats);
//       })
//       .catch(err => console.error("Categories fetch failed:", err));
//   }, [buildUrl, page, searchQuery, sortOption]);

//   // 🔹 Price filter button function
//   const handlePriceFilter = () => {
//     handleCategorySelect(null, minPrice, maxPrice);
//   };

//   if (loading) return <p className="text-center py-10">Loading...</p>;

//   return (
//     <div className="min-h-screen bg-[#F2F5F3]">
//       <div className="border-b">
//         {/* Sorting */}
//         <div className="flex flex-col md:flex-col items-start mx-auto max-w-[1470px] px-4 py-2 gap-2 pt-11">
//           <p className="text-[15px] mb-2">
//             Showing {(page - 1) * itemsPerPage + 1} to {Math.min(page * itemsPerPage, 406)} of 406 results
//           </p>
//           <div>
//             <span className="pr-3 text-[13.5px] hidden md:block">Sort by</span>
//             <div ref={dropdownRef} className="relative inline-block">
//               <div
//                 onClick={toggleDropdown}
//                 className={`flex items-center gap-2 bg-[#e9e9e8] hover:bg-[#F6F4F4] cursor-pointer px-4 py-[9px] rounded-xl transition border ${isOpen ? "border-[#470096]" : "border-gray-300"}`}
//               >
//                 <span>
//                   {sortOption === "lowToHigh" ? "Price low to high" : sortOption === "highToLow" ? "Price high to low" : "Featured"}
//                 </span>
//                 {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
//               </div>

//               {isOpen && (
//                 <ul className="absolute right-0 w-40 bg-white border border-gray-200 rounded-md shadow-md mt-1 z-10">
//                   <li className="p-2 bg-[#f6f6f7] hover:bg-gray-200 cursor-pointer rounded-t-md"
//                       onClick={() => { setSortOption("featured"); setIsOpen(false); }}>Featured</li>
//                   <li className="p-2 hover:bg-gray-200 cursor-pointer"
//                       onClick={() => { setSortOption("lowToHigh"); setIsOpen(false); }}>Price low to high</li>
//                   <li className="p-2 hover:bg-gray-200 cursor-pointer"
//                       onClick={() => { setSortOption("highToLow"); setIsOpen(false); }}>Price high to low</li>
//                 </ul>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex max-w-[1470px] mx-auto px-4 gap-5 pt-4 pb-4">
//         <aside className="lg:w-64 md:w-[220px] flex-shrink-0">
//           <div className="sticky top-28">
//             <Sidebar
//               categories={categories}
//               selectedCategory={null}
//               onCategorySelect={handleCategorySelect}
//               onCategoryClick={(_slug, id) => handleCategorySelect(id, minPrice, maxPrice)}
//               minPrice={minPrice}
//               maxPrice={maxPrice}
//               setMinPrice={setMinPrice}
//               setMaxPrice={setMaxPrice}
//               onPriceFilter={handlePriceFilter}
//               cat={0}
//             />
//           </div>
//         </aside>

//         <main className="flex-1">
//           <ProductGrid products={filtered} />
//         </main>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-end mx-auto max-w-[1470px] p-6 mt-4">
//         <div className="flex items-center border rounded-xl overflow-hidden">
//           <button disabled={page === 1} onClick={() => setPage(prev => prev - 1)}
//                   className="w-9 h-9 border-r flex items-center hover:bg-blue-50 justify-center bg-white text-black disabled:opacity-50">
//             <FaChevronLeft />
//           </button>

//           {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
//             const startPage = Math.floor((page - 1) / 5) * 5 + 1;
//             const pageNum = startPage + i;
//             return pageNum <= totalPages ? (
//               <button key={pageNum} onClick={() => setPage(pageNum)}
//                       className={`w-9 h-9 flex items-center justify-center ${page === pageNum ? "bg-[#470096] text-white font-bold" : "bg-white border-r text-black hover:bg-blue-50"}`}>
//                 {pageNum}
//               </button>
//             ) : null;
//           })}

//           <button disabled={page === totalPages} onClick={() => setPage(prev => prev + 1)}
//                   className="w-9 h-9 flex items-center justify-center hover:bg-blue-50 bg-white text-black disabled:opacity-50">
//             <FaChevronRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;



import { useState, useRef, useEffect, useCallback } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Sidebar from "../components/Sidebar";
import ProductGrid from "../components/ProductGrid";
import type { Category, Product } from "../types/Product";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface HomeProps {
  searchQuery?: string;
}

const Home: React.FC<HomeProps> = ({ searchQuery = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(() => {
    const savedPage = localStorage.getItem("currentPage");
    return savedPage ? parseInt(savedPage, 10) : 1;
  });
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 30;

  const [sortOption, setSortOption] = useState("featured");

  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    localStorage.setItem("currentPage", page.toString());
  }, [page]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const buildUrl = useCallback((
    page: number,
    sortOption: string,
    categoryId?: number,
    min?: string,
    max?: string
  ) => {
    let url = `https://shop.sprwforge.com/api/v1/products?`;

    if (sortOption === "lowToHigh") url += `sortby=price_low_to_high&`;
    else if (sortOption === "highToLow") url += `sortby=price_high_to_low&`;

    url += `page=${page}`;

    if (categoryId) url += `&category_id=${categoryId}`;
    if (min) url += `&min=${min}`;
    if (max) url += `&max=${max}`;
    if (searchQuery) url += `&q=${encodeURIComponent(searchQuery)}`;

    url += `&orderBy=created_at&orderByType=desc&shipping=&brand=&collection=&rating=0&all_categories=false&sidebar_data=false`;

    return url;
  }, [searchQuery]);

  const handleCategorySelect = (id: number | null, min?: string, max?: string) => {
    setLoading(true);

    const url = buildUrl(page, sortOption, id ?? undefined, min, max);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        let productsData: Product[] = data.data.result.data;

        if (searchQuery) {
          productsData = productsData.filter((p) =>
            p.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }

        setProducts(productsData);
        setFiltered(productsData);
        setTotalPages(data.data.result.last_page);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);

    const url = buildUrl(page, sortOption);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        let productsData: Product[] = data.data.result.data;

        if (searchQuery) {
          productsData = productsData.filter((p) =>
            p.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }

        setProducts(productsData);
        setFiltered(productsData);
        setTotalPages(data.data.result.last_page);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });

    fetch("https://shop.sprwforge.com/api/v1/products?all_categories=true&sidebar_data=true")
      .then(res => res.json())
      .then(json => {
        const cats: Category[] = json.data?.all_categories || [];
        setCategories(cats);
      })
      .catch(err => console.error("Categories fetch failed:", err));
  }, [buildUrl, page, searchQuery, sortOption]);

  const handlePriceFilter = () => {
    handleCategorySelect(null, minPrice, maxPrice);
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-[#F2F5F3]">
      <div className="border-b">
        {/* Sorting */}
        <div className="flex flex-col gap-2 pt-11 px-4 mx-auto max-w-[1470px] lg:flex-row lg:justify-between lg:items-center">

          {/* Showing results */}
          <p className="text-[15px] lg:order-1">
            Showing {(page - 1) * itemsPerPage + 1} to {Math.min(page * itemsPerPage, 406)} of 406 results
          </p>

          {/* Featured dropdown */}
          <div className="w-full lg:w-auto lg:order-2">
            <span className="pr-3 text-[13.5px] hidden md:inline">Sort by</span>
            <div ref={dropdownRef} className="relative inline-block lg:w-auto">
              <div
                onClick={toggleDropdown}
                className={`flex items-center gap-2 bg-[#e9e9e8] hover:bg-[#F6F4F4] cursor-pointer px-4 py-[9px] rounded-xl transition border ${isOpen ? "border-[#470096]" : "border-gray-300"}`}
              >
                <span>
                  {sortOption === "lowToHigh"
                    ? "Price low to high"
                    : sortOption === "highToLow"
                    ? "Price high to low"
                    : "Featured"}
                </span>
                {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>

              {isOpen && (
                <ul className="absolute right-0 w-40 bg-white border border-gray-200 rounded-md shadow-md mt-1 z-10">
                  <li className="p-2 bg-[#f6f6f7] hover:bg-gray-200 cursor-pointer rounded-t-md"
                      onClick={() => { setSortOption("featured"); setIsOpen(false); }}>Featured</li>
                  <li className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => { setSortOption("lowToHigh"); setIsOpen(false); }}>Price low to high</li>
                  <li className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => { setSortOption("highToLow"); setIsOpen(false); }}>Price high to low</li>
                  <li className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => { setSortOption("Avg. customer review"); setIsOpen(false); }}>Avg. customer review</li>
                </ul>
              )}
            </div>
          </div>

        </div>
      </div>

      <div className="flex max-w-[1470px] mx-auto px-4 gap-5 pt-4 pb-4">
        <aside className="lg:w-64 md:w-[220px] flex-shrink-0">
          <div className="sticky top-28">
            <Sidebar
              categories={categories}
              selectedCategory={null}
              onCategorySelect={handleCategorySelect}
              onCategoryClick={(_slug, id) => handleCategorySelect(id, minPrice, maxPrice)}
              minPrice={minPrice}
              maxPrice={maxPrice}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
              onPriceFilter={handlePriceFilter}
              cat={0}
            />
          </div>
        </aside>

        <main className="flex-1">
          <ProductGrid products={filtered} />
        </main>
      </div>

      <div className="flex justify-end mx-auto max-w-[1470px] p-6 mt-4">
        <div className="flex items-center border rounded-xl overflow-hidden">
          <button disabled={page === 1} onClick={() => setPage(prev => prev - 1)}
                  className="w-9 h-9 border-r flex items-center hover:bg-blue-50 justify-center bg-white text-black disabled:opacity-50">
            <FaChevronLeft />
          </button>

          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const startPage = Math.floor((page - 1) / 5) * 5 + 1;
            const pageNum = startPage + i;
            return pageNum <= totalPages ? (
              <button key={pageNum} onClick={() => setPage(pageNum)}
                      className={`w-9 h-9 flex items-center justify-center ${page === pageNum ? "bg-[#470096] text-white font-bold" : "bg-white border-r text-black hover:bg-blue-50"}`}>
                {pageNum}
              </button>
            ) : null;
          })}

          <button disabled={page === totalPages} onClick={() => setPage(prev => prev + 1)}
                  className="w-9 h-9 flex items-center justify-center hover:bg-blue-50 bg-white text-black disabled:opacity-50">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;


