import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineStarOutline } from "react-icons/md";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

import { ProductProps } from "../../type";

import AddToCartBtn from "./AddToCartBtn";
import FormattedPrice from "./FormattedPrice";
import ProductCardSideNav from "./ProductCardSideNav";

interface Props {
  item: ProductProps;
  setSearchText?: any;
}

const ProductCard = ({ item, setSearchText }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // getting the percentage amount
  const percentage =
    ((item?.regularPrice - item?.discountedPrice) / item?.regularPrice) * 100;

  const handleClick = () => {
    navigate(`/product/${item?._id}`);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    setSearchText && setSearchText("");
  };

  return (
    <div className="border border-gray-200 rounded-lg p-1 overflow-hidden hover:border-black delay-200 cursor-pointer">
      <div className="w-full h-60 relative p-2 group">
        <span
          className="bg-black text-cyan-400 absolute left-0 ring-0 w-16 text-xs text-centerpy-1 rounded-md font-semibold inline-block z-10"
          onClick={handleOpen}
        >
          save {percentage.toFixed(0)}%
        </span>
        <img
          onClick={handleClick}
          src={item?.images[0]}
          alt="Product Image"
          className="w-full h-full rounded-md object-cover group-hover:scale-110 duration-300"
        />

        {/* product Cards side nav */}
        <ProductCardSideNav />
      </div>

      <div className="flex flex-col gap-2 px-2 pb-2">
        <span className="text-xs uppercase font-semibold opacity-50">
          {item?.overView}
        </span>
        <span className="text-lg font-bold line-clamp-2">{item?.name}</span>

        {/*  the rating starts */}
        <div className="text-base flex">
          <MdOutlineStarOutline />
          <MdOutlineStarOutline />
          <MdOutlineStarOutline />
          <MdOutlineStarOutline />
        </div>

        <AddToCartBtn className="bg-yellow-300" title="Add to cart" />
      </div>

      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={handleClose}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-black backdrop-blur-2xl z-50 p-6">
                  <DialogTitle
                    as="h3"
                    className="text-base/7 font-medium text-white"
                  >
                    Hurry Up!
                  </DialogTitle>
                  <p className="mt-2 text-sm/6 text-white/50">
                    You are going to save{" "}
                    <span className="text-cyan-400">
                      <FormattedPrice
                        amount={item?.regularPrice - item?.discountedPrice}
                      />{" "}
                    </span>
                    from this product.
                  </p>
                  <p className="text-sm/6 text-white/50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi, consequatur?
                  </p>
                  <div className="mt-4">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                      onClick={handleClose}
                    >
                      Got it, thanks!
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ProductCard;
