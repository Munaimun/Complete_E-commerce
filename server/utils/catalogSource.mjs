import { blogsData, categories, highlightsProducts, products } from "../constants/index.mjs";

export const useStaticCatalog = process.env.CATALOG_SOURCE === "constants" || !process.env.DB_HOST;

export { blogsData, categories, highlightsProducts, products };
