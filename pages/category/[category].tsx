// CSR Approch

import { Product, ProductSummary } from "@/@types/product-summary.interface";
import { ProductList } from "@/components/ProductList/ProductList";
import { ApiRoutes } from "@/constants/api";
import useFetch from "@/hooks/useFetch";
import { useRouter } from "next/router";

const CategoryPage: React.FC = (): JSX.Element => {
  const router = useRouter();
  const { category } = router.query;
  const { data } = useFetch<Product>({
    path: ApiRoutes.GetCategory.replace("{:categoryId}", String(category)),
    enable: !!category,
  });
  return (
    <div className="container mr-auto text-center w-full">
      <div className="text-5xl flex justify-center items-center w-full text-red-800 mr-2 p-6 divide-x-0">
        <h1>{`Products - ${category}`}</h1>
        <hr className="my-12 h-0.5 border-t-0 bg-gray opacity-100 dark:opacity-50" />
      </div>
      {data?.products && data?.products?.length > 0 ? (
        <>
          <ProductList products={data?.products} />
        </>
      ) : (
        <p>there is no product to show !</p>
      )}
    </div>
  );
};

export default CategoryPage;
