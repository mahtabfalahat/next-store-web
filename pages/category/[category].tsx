import { ProductList } from "@/components/productList/productList";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CategoryPage: React.FC = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/category/${category}`
        );
        const data = await res.json();
        console.log(data);
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (category) {
      fetchProducts();
    }
  }, [category]);

  return (
      <div className="container mr-auto text-center w-full">
        <div className="text-5xl flex justify-center items-center w-full text-red-800 mr-2 p-6 divide-x-0">
          <h1>{`Products - ${category}`}</h1>
          <hr className="my-12 h-0.5 border-t-0 bg-gray opacity-100 dark:opacity-50" />
        </div>
        <ProductList products={products} />
      </div>
  );
};

export default CategoryPage;
