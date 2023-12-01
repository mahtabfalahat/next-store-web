import { TopNavigation } from "./top-navigation";
import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/Button/Button";

export const Header: React.FC = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <header className="dark:border-base-content dark:border-opacity-5">
      <nav className="p-4 text-center text-neutral-700 dark:text-neutral-200 border-gray-200 dark:bg-gray-900 shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex md:order-2 w-72">
            <input
              type="text"
              id="search-navbar"
              className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search your product..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="primary" onClick={handleSearch}>
              Search
            </Button>
          </div>
          <div
            className="items-center justify-between  w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <TopNavigation />
            <div className="relative mt-3 hidden">
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
