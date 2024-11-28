import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

import { IoClose, IoSearchOutline } from "react-icons/io5";
import { FiStar, FiShoppingBag } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa6";

import { config } from "../../config";
import { getData } from "../lib";

import { CategoryProps, ProductProps } from "../../type";

import { auth } from "../lib/firebase";
import { store } from "../lib/store";
import { signOut } from "firebase/auth";

import { UserContext } from "../context/UserContext";

import ProductCard from "./ProductCard";
import logo from "../assets/logo.png";

// all the navigation links
const bottomNavigation = [
  { title: "Home", link: "/" },
  { title: "Shop", link: "/product" },
  { title: "Cart", link: "/cart" },
  { title: "Orders", link: "/orders" },
  { title: "My Account", link: "/profile" },
  { title: "Blog", link: "/blog" },
];

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { cartProduct, favoriteProduct } = store();

  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const totalCartQuantity = cartProduct.reduce(
    (acc, product) => acc + (product.quantity || 1), // defaults to 1 if quantity is not defined
    0
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
        const categoriesEndpoint = `${config?.baseUrl}/categories`;
        const categoriesData = await getData(categoriesEndpoint);
        setCategories(categoriesData);

        // Fetch products
        const productsEndpoint = `${config?.baseUrl}/products`;
        const productsData = await getData(productsEndpoint);
        setProducts(productsData);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = products.filter((item: ProductProps) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredProducts(filtered); // Save the filtered list to state
  }, [searchText, products]);

  const handleSignOut = async () => {
    await signOut(auth);
    setCurrentUser(null);
    navigate("/"); // Redirect to home after logging out
  };

  return (
    <div className="md:sticky bg-white md:top-0 z-50 mx-auto">
      <div className="h-20 flex items-center justify-between px-5 md:px-10">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="w-32" />
        </Link>

        {/* SEARCHBAR */}
        <div className="hidded md:inline-flex max-w-3xl w-full relative">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            placeholder="Search Products"
            className="w-full flex-1 rounded-full text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm px-4 py-2"
          />
          {searchText ? (
            <IoClose
              onClick={() => setSearchText("")}
              className="absolute top-2.5 right-4 text-xl hover:text-red-500 cursor-pointer duration-200"
            />
          ) : (
            <IoSearchOutline className="absolute top-2.5 right-4 text-xl" />
          )}
        </div>

        {/* Searched Product */}
        {searchText && (
          <div className="absolute left-0 top-20 w-full mx-auto max-h-[450px] px-10 py-5 bg-white/30 z-20 overflow-y-scroll cursor-pointer text-black shadow-lg shadow-slate-300 backdrop-filter backdrop-blur-lg border border-white/20 scrollbar-hide">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {filteredProducts?.map((item: ProductProps) => (
                  <ProductCard item={item} setSearchText={setSearchText} />
                ))}
              </div>
            ) : (
              <div className="py-10 w-full flex items-center justify-center border border-gray-600 rounded-md ">
                <p className="text-xl text-red-500">nothing found</p>
                <span className="underline underline-offset-2 decoration-[1px] text-red-500 font-semibold">{`(${searchText})`}</span>
                . Please try again!
              </div>
            )}
          </div>
        )}

        {/* menubar */}
        <div className="flex items-center gap-x-6 sm:text-2xl">
          {/* <Link to={"/profile"}>
            <FiUser className="duration-200 cursor-pointer" />
          </Link> */}
          <Link to={"/favorite"} className="relative block">
            <FiStar className="duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center absolute -top-2 -right-2 text-[9px]  rounded-full w-4 h-4 bg-red-500 text-white">
              {favoriteProduct?.length > 0 ? favoriteProduct?.length : 0}
            </span>
          </Link>

          <Link to={"/cart"} className="relative block">
            <FiShoppingBag className="duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center absolute -top-2 -right-2 text-[9px]  rounded-full w-4 h-4 text-white">
              <span className="inline-flex items-center justify-center absolute -top-1 -right-1 text-[9px] rounded-full w-4 h-4 bg-red-500 text-white">
                {totalCartQuantity > 0 ? totalCartQuantity : "0"}
              </span>
            </span>
          </Link>

          {currentUser ? (
            <Link
              to={"/auth"}
              className="flex items-center justify-center relative h-[20px] sm:h-[40px] w-14 sm:w-20 overflow-hidden sm:border border-gray-950 bg-white text-gray-950 shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-gray-950 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-gray-950 after:duration-100 hover:text-white hover:shadow-gray-950 hover:before:h-2/4 hover:after:h-2/4"
              onClick={handleSignOut}
            >
              <span className="relative text-base z-10">Sign-Out</span>
            </Link>
          ) : (
            <Link
              to={"/auth"}
              className="flex items-center justify-center relative h-[20px] sm:h-[40px] w-14 sm:w-20 overflow-hidden sm:border border-gray-950 bg-white text-gray-950 shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-gray-950 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-gray-950 after:duration-100 hover:text-white hover:shadow-gray-950 hover:before:h-2/4 hover:after:h-2/4"
            >
              <span className="relative text-base z-10">Sign-In</span>
            </Link>
          )}
        </div>
      </div>

      {/* The categories */}
      <div className="shadow-md">
        <div className="py-2 flex items-center gap-5 justify-between  mx-auto px-4 md:px-10">
          <Menu>
            <MenuButton className="inline-flex items-center gap-2 rounded-md border hover:border-gray-950 py-1.5 px-3 font-semibold text-gray-500 hover:text-black">
              select category <FaChevronDown className="text-base mt-1" />
            </MenuButton>
            <Transition
              enter="transition ease-out duration-75"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {/* The anchor bottom end will put the menus in below */}
              <MenuItems
                anchor="bottom end"
                className="w-52 ml-6 origin-top-right rounded-xl border border-white/5 bg-black/50 backdrop-blur-sm p-1 text-white text-sm/6 gap-1 focus:outline-none z-50"
              >
                {categories.map((item: CategoryProps) => (
                  <MenuItem key={item?._id}>
                    <Link
                      to={`/category/${item?._base}`}
                      className="flex w-full items-center gap-2 rounded-lg py-2 px-3 tracking-wide"
                    >
                      <img
                        src={item?.image}
                        alt="categoryImage"
                        className="w-6 h-6 rounded-mt"
                      />
                      {item?.name}
                    </Link>
                  </MenuItem>
                ))}
              </MenuItems>
            </Transition>
          </Menu>

          {bottomNavigation.map(({ title, link }) => (
            <Link
              to={link} //Using {link} to dynamically reference the link value from the bottomNavigation array.
              key={link}
              className="uppercase hidden md:inline-flex text-sm font-semibold text-black hover:text-gray-500 cursor-pointer duration-200 relative overflow-hidden group"
            >
              {title}
              {/* span is for underline hover effect */}
              <span className="inline-flex w-full h-[1px] bg-black absolute bottom-0 left-0 transform -translate-x-[105%] group-hover:translate-x-0 duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
