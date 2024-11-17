import { ProductProps } from "../../type";
import { store } from "../lib/store";

const CheckoutBtn = ({ products }: { products: ProductProps[] }) => {
  const { currentUser } = store();

  return (
    <div className="flex justify-center mt-6">
      {currentUser ? (
        <button className="relative rounded-md h-10 w-full overflow-hidden border border-indigo-600 text-indigo-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
          <span className="relative z-10">Checkout</span>
        </button>
      ) : (
        <button className="relative rounded-md flex h-10 w-full items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
          <span className="relative z-10">Login to chekout</span>
        </button>
      )}
    </div>
  );
};

export default CheckoutBtn;
