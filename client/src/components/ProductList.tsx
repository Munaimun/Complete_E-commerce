import { Link } from "react-router-dom";

import Container from "./Container";
import Title from "./Title";
import Pagination from "./Pagination";

const ProductList = () => {
  return (
    <Container>
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <Title text="Top Selling Products" />

          <Link
            to={"/product"}
            className="before:ease relative md:h-11 md:w-36 flex items-center justify-center overflow-hidden text-white border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-black hover:shadow-black hover:before:-rotate-180"
          >
            <span className="relative z-10">View All Products</span>
          </Link>
        </div>

        <div className="w-full h-[1px] bg-gray-200 mt-3" />
      </div>

      {/* Showing the top selling products with pagination */}
      <Pagination />
    </Container>
  );
};

export default ProductList;
