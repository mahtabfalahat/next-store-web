import { ProductSummary } from '@/@types/product-summary.interface';
import { ProductList } from '@/components/productList/productList';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

interface ProductProps {
  allProducts: ProductSummary[];
  currentPage: number;
  totalPages: number;
}

const Products: NextPage<ProductProps> = ({ allProducts, currentPage, totalPages }): JSX.Element => {
  console.log(allProducts)
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
      <ProductList products={allProducts} />

      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`mx-2 p-2 bg-blue-500 text-white rounded ${
              currentPage === index + 1 ? 'bg-blue-700' : ''
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps({ query }: any) {
  const page = parseInt(query.page as string) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;
  const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,all`);
  const data = await res.json();
  const totalPages = Math.ceil(data.total / limit);

  return {
    props: {
      allProducts: data.products || null,
      currentPage: page,
      totalPages: totalPages,
    },
  };
}

export default Products;