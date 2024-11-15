import { Link } from "react-router-dom";

import { store } from "../lib/store";

import Container from "../components/Container";
import CartProduct from "../components/CartProduct";

const Card = () => {
  const { cartProduct } = store();

  return (
    <Container>
      {cartProduct?.length > 0 ? (
        <>
          <span className="text-3xl sm:text-4xl font-bold tracking-tight text-blue-950">
            Shopping Cart
          </span>

          <div className="mt-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section className="lg:col-span-7">
              <div className="divide-y divide-gray-200 border-b border-t border-gray-200">
                {cartProduct.map((product) => (
                  <CartProduct key={product?._id} product={product} />
                ))}
              </div>
            </section>
            <section className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:py-6 lg:col-span-5 lg:mt-0 lg:p-8">
              <span className="text-lg font-medium text-gray-900">
                Order summary
              </span>
            </section>
          </div>
        </>
      ) : (
        <div className="bg-white h096 flex flex-col gap-2 items-center justify-center py-5 rounded-lg border border-gray-200 drop-shadow-2xl">
          <span className="text-3xl sm:text-4xl font-bold tracking-tight text-blue-950">
            Shopping Cart
          </span>
          <p className="text-lg max-w-[600px] text-center text-gray-600 tracking-wide leading-6">
            <span className="text-2xl sm:text-4xl text-yellow-400 font-mono">
              Your cart is empty 🥹
            </span>{" "}
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            dolorem tenetur eum, libero odit nemo voluptas repudiandae
            voluptatem, magnam a alias. Rem saepe aspernatur facilis praesentium
            rerum inventore error ut!
          </p>
          <Link
            to={"/product"}
            className="flex items-center justify-center relative h-[20px] sm:h-[50px] w-36 sm:w-40 overflow-hidden border border-gray-950 bg-white text-gray-950 shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-gray-950 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-gray-950 after:duration-100 hover:text-white hover:shadow-gray-950 hover:before:h-2/4 hover:after:h-2/4"
          >
            <span className="relative z-10">Go to Shopping</span>
          </Link>
        </div>
      )}
    </Container>
  );
};

export default Card;
