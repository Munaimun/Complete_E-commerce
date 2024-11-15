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
        <div>
          <span className="text-3xl sm:text-4xl font-bold tracking-tight text-blue-950">
            Shopping Cart
          </span>
          <p>
            Your cart is empty. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facere, dolorem tenetur eum, libero odit nemo
            voluptas repudiandae voluptatem, magnam a alias. Rem saepe
            aspernatur facilis praesentium rerum inventore error ut!
          </p>
          <Link to={"/product"}>Go to Shopping</Link>
        </div>
      )}
    </Container>
  );
};

export default Card;
