import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ProductProps } from "../../type";

const CheckoutBtn = ({ products }: { products: ProductProps[] }) => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate()

  const handleCheckout = () => {
      // navigate to checkout page
      navigate("/checkout", { state: { products } });
  };

  return (
    <div className="flex justify-center mt-6">
      {currentUser ? (
        <button
          className="relative rounded-md flex h-10 w-full items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]"
          onClick={handleCheckout}
        >
          <span className="relative z-10">Checkout</span>
        </button>
      ) : (
        <Link
          to="/auth"
          className="relative rounded-md flex h-10 w-full items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]"
        >
          <span className="relative z-10">Login to checkout</span>
        </Link>
      )}
    </div>
  );
};

export default CheckoutBtn;
