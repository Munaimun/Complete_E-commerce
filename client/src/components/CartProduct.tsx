import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import { ProductProps } from "../../type";
import { store } from "../lib/store";

import FormattedPrice from "./FormattedPrice";
import AddToCartBtn from "./AddToCartBtn";

import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

const CartProduct = ({ product }: { product: ProductProps }) => {
  const { removeFromCart } = store();

  const handleRemoveProduct = () => {
    if (product) {
      removeFromCart(product?._id);
      toast.success(`${product?.name.slice(0, 20)} deleted successfully`);
    }
  };

  return (
    <div className="flex py-6 sm:py-10">
      <Link to={`/product/${product?._id}`}>
        <img
          src={product?.images[0]}
          alt="product image"
          className="w-24 h-24 rounded-md object-cover sm:h-48 sm:w-48 border border-cyan-400 hover:border-black duration-300"
        />
      </Link>

      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:pr-0">
          <div className="text-start flex flex-col gap-1 col-span-3">
            <span className="font-semibold w-full">
              {product?.name.slice(0, 80)}
            </span>

            <p className="text-xs">
              Brand: <span className="font-medium">{product?.brand}</span>
            </p>

            <p className="text-xs">
              Category: <span className="font-medium">{product?.category}</span>
            </p>

            {/* PRICES */}
            <div className="flex items-center gap-6 mt-2">
              <p className="font-semibold">
                <FormattedPrice
                  amount={product?.discountedPrice * product?.quantity}
                />
              </p>
              <AddToCartBtn product={product} />
            </div>
          </div>

          {/* THE REMOVE BUTTON */}
          <div className="mt-4 sm:mt-0 sm:pr-9">
            <div className="absolute ring-0 top-0">
              <button
                className="-m2 inline-flex p-2 text-gray-600 hover:text-red-600"
                onClick={handleRemoveProduct}
              >
                <IoClose className="text-xl" />
              </button>
            </div>
          </div>
        </div>
        <div className="text-start">
          {product?.isStock && (
            <p className="mt-4 flex items-center space-x-2 text-sm text-gray-700">
              <FaCheck className="text-lg text-green-500" />{" "}
              <span>In stock</span>
            </p>
          )}
          <p>
            Your are saving{" "}
            <span className="text-sm font-semibold text-green-500">
              <FormattedPrice
                amount={product?.regularPrice - product?.discountedPrice}
              />
            </span>{" "}
            upon purchase
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
