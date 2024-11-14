import { Link } from "react-router-dom";

import { ProductProps } from "../../type";

const CartProduct = ({ product }: { product: ProductProps }) => {
  return (
    <div className="flex py-6 sm:py-10">
      <Link to={`/product/${product?._id}`}>
        <img
          src={product?.images[0]}
          alt="product image"
          className="w-24 h-24 rounded-md object-cover sm:h-48 sm:w-48 border border-sky-600/30 hover:border-black duration-300"
        />
      </Link>

      <div className="ml-4 flex flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:pr-0">
          <div className="text-start flex flex-col gap-1 col-span-3">
            <span>{product?.name.slice(0, 80)}</span>
            <p>
              Brand: <span>{product?.brand}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
