// SSR Approch

import { ProductSummary } from "@/@types/product-summary.interface";
import Pagination from "@/components/Pagination/Pagination";
import { ProductList } from "@/components/ProductList/ProductList";
import { AXIOS } from "@/config/axios";
import { ApiRoutes } from "@/constants/api";
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
      {allProducts?.length > 0 ? (
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
  const res = await AXIOS(
    ApiRoutes.GetAllProducts.replace("{:skip}", skip.toString()).replace(
      "{:limit}",
      limit.toString()
    )
  );
  const data = res.data?.products;
  const totalPages = Math.floor(data?.length / limit);
  return {
    props: {
      allProducts: data || null,
      currentPage: page,
      totalPages: totalPages,
    },
  };
}

export default Products;
