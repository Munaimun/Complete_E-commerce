import { useEffect, useState } from "react";

import { config } from "../../config";
import { getData } from "../lib";

import { BlogProps } from "../../type";

import Container from "../components/Container";
import Title from "../components/Title";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const endPoint = `${config?.baseUrl}/blogs`;

      try {
        const res = await getData(endPoint);
        setBlogs(res);
      } catch (error) {
        console.log("error fetching blogs", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Title text="Our Blog Post" className="" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-7">
        {blogs?.map((item: BlogProps) => (
          <div key={item?._id} className="group text-left cursor-pointer">
            {/* for overflow hidden only the image will get zoom (group-hover:scale-110) */}
            <div className="overflow-hidden">
              <img
                src={item?.image}
                alt="blog image"
                className="w-full h-auto object-cover group-hover:scale-110 duration-300 "
              />
            </div>
            <div className="mt-5">
              <p className="text-sm uppercase font-medium text-gray-500">
                {item?._base}
              </p>

              <p className="text-2xl font-bold line-clamp-1">{item?.title}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Blog;
