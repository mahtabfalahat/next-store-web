import React from "react";
import { ProductSummary } from "@/@types/product-summary.interface";
import { ProductCard } from "../ProductCard/ProductCard";

type ProductListProps = {
  products: ProductSummary[];
};
export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-3 m-5 ">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
