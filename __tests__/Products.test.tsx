import Products from "@/pages/products";
import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { ProductSummary } from "@/@types/product-summary.interface";

test("it should be show empty state", () => {
  //1. act
  const allProudcts: ProductSummary[] = [];
  const currentPage = 1;
  const totalPages = 0;
  //2. arrange
  const { container } = render(
    <Products
      allProducts={allProudcts}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
  //3. assert
  const paragraph = container.querySelector("p");
  expect(paragraph).toBeDefined();
  const contentResult = screen.findByText("no product");
  expect(contentResult).to.exist;
});
