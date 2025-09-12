// src/components/Footer.tsx
import React, { useEffect, useState } from "react";
import Logo from "../assets/download.png"




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

const Footer: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://shop.sprwforge.com/api/v1/common");
        const json = await res.json();

        if (json.data?.categories && Array.isArray(json.data.categories)) {
          setCategories(json.data.categories);
        } else {
          console.error("Categories not found:", json);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <div className="p-4 text-center">Loading footer...</div>;
 

  return (
    <footer className="py-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {categories.map((cat) => (
          <div key={cat.id}>
            <h4 className="font-bold mb-2">{cat.title}</h4>
            {cat.in_footer_child.length > 0 && (
              <ul>
                {cat.in_footer_child.map((child) => (
                  <li key={child.id}>{child.title}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center border-t-2 pt-4 gap-4">
        <img src={Logo} alt="Logo" className="h-[48px] w-[108px]"/>
      </div>
    </footer>
  );
};

export default Footer;




