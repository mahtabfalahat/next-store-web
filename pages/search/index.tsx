import { useRouter } from "next/router";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ProductSummary } from "@/@types/product-summary.interface";
import { ProductList } from "@/components/ProductList/ProductList";
import { AXIOS } from "@/config/axios";
import { ApiRoutes } from "@/constants/api";

type SearchResultProps = {
  searchResults: ProductSummary[];
};

const SearchResults: React.FC<SearchResultProps> = ({ searchResults }) => {
  const {
    query: { q: search },
  } = useRouter();
  return (
    <div className="container mr-auto text-center w-full">
      <div className="text-5xl flex justify-center items-center w-full text-red-800 mr-2 p-6 divide-x-0 ">
        <h1>Search Results for {search}</h1>
        <hr className="my-12 h-0.5 border-t-0 bg-gray opacity-100 dark:opacity-50" />
      </div>
      {searchResults?.length > 0 ? (
        <>
          <ProductList products={searchResults} />
        </>
      ) : (
        <p>there is no product to show !</p>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query: { q: search },
}: GetServerSidePropsContext) => {
  const res = await AXIOS(
    ApiRoutes.SearchProduct.replace("{:search}", search as string)
  );
  return {
    props: {
      searchResults: res.data.products || null,
    },
  };
};
export default SearchResults;
