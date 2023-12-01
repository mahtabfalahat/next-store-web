export const ApiRoutes = {
  GetCategory: "/products/category/{:categoryId}",
  GetAllProducts:
    "/products?limit={:limit}&skip={:skip}&select=title,price,description,rating,brand,thumbnail",
  SearchProduct: "products/search?q={:search}",
  GetAllCategories: "/products/categories",
};
