import { useRouter } from 'next/router';
import { ProductSummary } from '@/@types/product-summary.interface';
import { ProductList } from '@/components/productList/productList';

const SearchResults: React.FC<{ searchResults: ProductSummary[] }> = ({ searchResults }) => {
  const router = useRouter();
  const searchTerm = router.query.q as string;

  return (
    <div className="container mr-auto text-center w-full">
      <div className="text-5xl flex justify-center items-center w-full text-red-800 mr-2 p-6 divide-x-0 ">
        <h1>Search Results for "{searchTerm}"</h1>
        <hr className="my-12 h-0.5 border-t-0 bg-gray opacity-100 dark:opacity-50" />
      </div>
      <ProductList products={searchResults} />
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const searchTerm = query.q as string;
  const res = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`);
  const data = await res.json();
  return {
    props: {
      searchResults:data.products || null,
    },
  };

}

export default SearchResults;