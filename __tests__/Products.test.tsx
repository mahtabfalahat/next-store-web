import Products from "@/pages/products";
import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";

test("it should be show empty state", () => {
  const { container } = render(
    <Products allProducts={[]} currentPage={1} totalPages={0} />
  );
  const paragraph = container.querySelector("p");
  expect(paragraph).toBeDefined();
  const contentResult = screen.findByText("no product");
  expect(contentResult).to.exist;
});
