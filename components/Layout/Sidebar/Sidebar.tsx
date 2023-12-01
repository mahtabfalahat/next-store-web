"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const Sidebar: React.FC = () => {
  const [showAside, setShowAside] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const router = useRouter();

  const handleToggleAside = () => {
    setShowAside(!showAside);
  };

  const handleCategoryClick = (category: string): void => {
    setSelectedCategory(category);
    setShowAside(false);
    router.push(`/category/${encodeURIComponent(category)}`);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/categories");
        const data = await res.json();
        setCategories(data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <>
      <button
        className="fixed sm:hidden left-0 bg-gray-800 text-black px-3 py-2 rounded-md text-sm font-medium m-4"
        onClick={handleToggleAside}
      >
        Toggle Sidebar
      </button>
      {showAside && (
        <aside className="bg-gray p-4 sm:block lg:w-64 xl:w-72 mr-auto text-center">
          <h2 className="text-lg font-semibold mb-4">Product Categories</h2>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li
                key={category}
                className={`p-5 border-slate-200 rounded-md ${
                  selectedCategory === category
                    ? "bg-primary opacity-70"
                    : "hover:bg-primary hover:opacity-70"
                } shadow-xl`}
              >
                <button
                  className={`text-gray-600 ${
                    selectedCategory === category
                      ? "hover:text-gray-800"
                      : "hover:text-gray-800"
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
