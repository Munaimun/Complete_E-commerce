import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getData } from "../lib";
import { config } from "../../config";

import Container from "./Container";
import Title from "./Title";
import { CategoryProps } from "../../type";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/categories`;
      try {
        const data = await getData(endpoint);
        setCategories(data);
        console.log("From categories: ", data);
      } catch (error) {
        console.log("Errot fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <Title text="Popular Categories" />
          <Link
            to={`/category/tvAndAudio`}
            className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56"
          >
            <span className="relative z-10">View All Categories</span>
          </Link>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mt-3" />
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7">
        {categories.map((item: CategoryProps) => (
          <Link
            to={`/category/${item?._base}`}
            key={item?._id}
            className="w-full h-auto relative group overflow-hidden"
          >
            <img
              src={item?.image}
              alt="category item"
              className="w-full h-auto rounded-md group-hover:scale-110 duration-300"
            />
            <div className="absolute bottom-3 w-full text-center">
              <p className="text-sm md:text-base font-bold">{item?.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
