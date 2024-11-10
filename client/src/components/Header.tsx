import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

import { CategoryProps } from "../../type";

import { IoClose, IoSearchOutline } from "react-icons/io5";
import { FiUser, FiStar, FiShoppingBag } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa6";

import { config } from "../../config";

import logo from "../assets/logo.png";
import { getData } from "../lib";

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

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/categories`;
      try {
        const data = await getData(endpoint); //getData is defined in another file
        setCategories(data);
      } catch (error) {
        console.log("Errot fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="md:sticky md:top-0 z-50">
      <div className="h-20 flex items-center justify-between px-4 lg:px-0">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="w-32" />
        </Link>

        {/* searchbar */}
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

        {/* menubar */}
        <div className="flex items-center gap-x-6 sm:text-2xl">
          <Link to={"/profile"}>
            <FiUser className="duration-200 cursor-pointer" />
          </Link>
          <Link to={"/favorite"} className="relative block">
            <FiStar className="duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center absolute -top-2 -right-2 text-[9px]  rounded-full w-4 h-4 bg-red-500 text-white">
              0
            </span>
          </Link>
          <Link to={"/cart"} className="relative block">
            <FiShoppingBag className="duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center absolute -top-2 -right-2 text-[9px]  rounded-full w-4 h-4 bg-red-500 text-white">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* The categories */}
      <div className="max-w-screen-xl shadow-xl">
        <div className="py-2 flex items-center gap-5 justify-between  mx-auto px-3">
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
