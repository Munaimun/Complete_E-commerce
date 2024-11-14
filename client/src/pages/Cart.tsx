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

          <div>
            <section>
              <div>
                {cartProduct.map((product) => (
                  <CartProduct key={product?._id} product={product} />
                ))}
              </div>
            </section>
            <section></section>
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
