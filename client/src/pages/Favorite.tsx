import { Link } from "react-router-dom";

import { store } from "../lib/store";

import Container from "../components/Container";
import FavoriteProduct from "../components/FavoriteProduct";

const Favorite = () => {
  const { favoriteProduct } = store();
  return (
    <Container>
      {favoriteProduct?.length > 0 ? (
        <div className="flex flex-col items-center">
          <div className="border-b border-b-gray-300 pb-6">
            <h2 className="text-2xl font-bold tracking-tight text-blue-950 sm:text-3xl">
              Favorite Products
            </h2>
          </div>
          <div className="mt-6 flow-root px-4 sm:mt-10 sm:px-0">
            <div className="-my-6 divide-y divide-gray-200 sm:-my-10">
              {favoriteProduct?.map((product) => (
                <FavoriteProduct key={product?._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto flex max-w-3xl flex-col gap-3 items-center text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Nothing added to Favorite 🤷‍♂️
          </h2>
          <p className="text-lg tracking-wide leading-6 text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            harum ducimus, quod amet pariatur omnis ex dolorem, distinctio
            molestiae aspernatur iste aperiam nostrum tempore accusamus modi
            quos culpa corrupti ea.
          </p>
          <Link
            to={"/product"}
            className="before:ease flex items-center justify-center relative h-12 w-40 overflow-hidden border border-blue-500 text-blue-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32"
          >
            <span className="relative z-10">👉 Add Products 👈</span>
          </Link>
        </div>
      )}
    </Container>
  );
};

export default Favorite;
