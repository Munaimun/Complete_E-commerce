import { useEffect, useState } from "react";

import { store } from "../lib/store";
import { ProductProps } from "../../type";

import { twMerge } from "tailwind-merge";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa";

interface Props {
  className?: string;
  title?: string;
  product?: ProductProps;
}

const AddToCartBtn = ({ className, title, product }: Props) => {
  const [existingProduct, setExistingProduct] = useState<ProductProps | null>(
    null
  );

  // taking the functions from store
  const { addToCart, cartProduct, decreaseQuantity } = store();

  useEffect(() => {
    // Check if product is defined before accessing _id
    if (product) {
      const availableItem = cartProduct.find(
        (item) => item?._id === product._id
      );
      setExistingProduct(availableItem || null);
    }
  }, [cartProduct, product]);

  const handleAddToCart = async () => {
    if (product) {
      await addToCart(product);
      toast.success(`${product?.name.slice(0, 10)} added to the cart`);
    } else {
      toast.error("Product is undefined");
    }
  };

  const handleDeletProduct = () => {
    if (existingProduct) {
      if (existingProduct?.quantity > 1) {
        decreaseQuantity(existingProduct?._id);
        toast.success(
          `${existingProduct?.name.slice(0, 10) + "... decreased successfully"}`
        );
      } else {
        toast.error("You can not decrease which is less than 1");
      }
    } else {
      console.log("error from add to cart compo");
    }
  };

  //because of this tailwind merge, every time we give any property to className that will get first priority, and then this classes will work
  const newClassName = twMerge(
    "bg-slate-400 uppercase text-xs py-3 text-center rounded-full font-semibold hover:bg-black hover:text-white hover:scale-105 duration-200 cursor-pointer",
    className
  );

  return (
    <>
      {existingProduct ? (
        <div className="flex self-center items-center justify-center gap-2">
          <button
            className="bg-transparent text-black p-2 border-[1px] text-sm border-gray-200 hover:border-sky-500 rounded-full hover:bg-white duration-200 cursor-pointer"
            onClick={handleDeletProduct}
          >
            <FaMinus />
          </button>
          <p className="text-base font-semibold w-10 text-center">
            {existingProduct?.quantity}
          </p>
          <button
            className="bg-transparent text-black p-2 border-[1px] text-sm border-gray-200 hover:border-sky-500 rounded-full hover:bg-white duration-200 cursor-pointer"
            onClick={handleAddToCart}
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <button onClick={handleAddToCart} className={newClassName}>
          {title ? title : "Add to Cart"}
        </button>
      )}
    </>
  );
};

export default AddToCartBtn;
