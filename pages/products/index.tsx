import { ProductSummary } from "@/@types/product-summary.interface";
import Pagination from "@/components/Pagination/Pagination";
import { ProductList } from "@/components/ProductList/ProductList";
import { NextPage } from "next";
import { useRouter } from "next/router";

interface ProductProps {
  allProducts: ProductSummary[];
  currentPage: number;
  totalPages: number;
}

const Products: NextPage<ProductProps> = ({
  allProducts,
  currentPage,
  totalPages,
}): JSX.Element => {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.push(`/products?page=${page}`);
  };

  return (
    <div className="container mr-auto text-center w-full">
      <div className="text-5xl flex justify-center items-center w-full text-red-800 mr-2 p-6 divide-x-0 ">
        <h1>Products</h1>
        <hr className="my-12 h-0.5 border-t-0 bg-gray opacity-100 dark:opacity-50" />
      </div>
      {allProducts !== null && allProducts.length > 0 ? (
        <>
          <ProductList products={allProducts} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <p>there is no product to show !</p>
      )}
    </div>
  );
};

export async function getServerSideProps({ query }: any) {
  const page = parseInt(query.page as string) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,description,rating,brand,thumbnail`
  );
  const data = await res.json();
  const totalPages = Math.floor(data.total / limit);

  return {
    props: {
      allProducts: data.products || null,
      currentPage: page,
      totalPages: totalPages,
    },
  };
}

export default Products;
