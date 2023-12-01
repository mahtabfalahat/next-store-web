import { useState } from "react";
import { useRouter } from "next/router";
import useFetch from "@/hooks/useFetch";
import { ApiRoutes } from "@/constants/api";

export const Sidebar: React.FC = () => {
  const [showAside, setShowAside] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const router = useRouter();
  const { data } = useFetch<string[]>({
    path: ApiRoutes.GetAllCategories,
  });

  const handleToggleAside = () => {
    setShowAside(!showAside);
  };

  const handleCategoryClick = (category: string): void => {
    setSelectedCategory(category);
    setShowAside(false);
    router.push(`/category/${encodeURIComponent(category)}`);
  };

  return (
    <>
      <button
        className="fixed sm:hidden left-0 bg-gray-800 text-black px-3 py-2 rounded-md text-sm font-medium m-4"
        onClick={handleToggleAside}
      >
        Toggle Sidebar
      </button>
      {showAside && (
        <aside className="bg-gray hidden p-4 sm:block lg:w-64 xl:w-72 mr-auto text-center">
          <h2 className="text-lg font-semibold mb-4">Product Categories</h2>
          <ul className="space-y-2">
            {data?.map((category) => (
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
