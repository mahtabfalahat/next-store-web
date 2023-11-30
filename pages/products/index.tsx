import { ProductSummary } from "@/@types/product-summary.interface";
import { ProductList } from "@/components/productList/productList";
import { NextPage } from "next";


type ProductProps={
  allProducts : ProductSummary[]
}
const Products : NextPage<ProductProps> = ({ allProducts }):JSX.Element => {
  return (
    <div className="container mr-auto text-center w-full">
      <div className="text-5xl flex justify-center items-center w-full text-red-800 mr-2 p-6 divide-x-0 ">
        <h1>Products</h1>
        <hr className="my-12 h-0.5 border-t-0 bg-gray opacity-100 dark:opacity-50" />
      </div>
      <ProductList products={allProducts}/>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return {
    props: {
      allProducts:data.products || null,
    },
  };
} 

export default Products; 