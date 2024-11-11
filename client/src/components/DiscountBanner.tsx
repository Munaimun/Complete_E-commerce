import { Link } from "react-router-dom";

import Container from "./Container";
import Title from "./Title";

import discountImgOne from "../assets/discountImgOne.png";
import discountImgTwo from "../assets/discountImgTwo.png";
import brandOne from "../assets/brands/brandOne.png";
import brandTwo from "../assets/brands/brandTwo.png";
import brandThree from "../assets/brands/brandThree.png";
import brandFour from "../assets/brands/brandFour.png";
import brandFive from "../assets/brands/brandFive.png";
import brandSix from "../assets/brands/brandSix.png";

const DiscountBanner = () => {
  const popularSearchItems = [
    { title: "Smart Watches", link: "smartWatches" },
    { title: "Headphone", link: "headphones" },
    { title: "Cameras", link: "camerasAndPhotos" },
    { title: "Audio", link: "tvAndAudio" },
    { title: "Laptop & Computers", link: "computersAndLaptop" },
    { title: "Cell Phone", link: "cellPhones" },
  ];

  return (
    <Container>
      <div>
        <Title text="Popular Search" />
        <div className="w-full h-[1px] bg-gray-200 mt-3" />
      </div>

      {/*  The categories buttons */}
      <div className="my-7 flex items-center justify-center flex-wrap gap-4">
        {popularSearchItems.map(({ title, link }) => (
          // the link in the to param will take to the perticular category
          <Link
            key={title}
            to={`/category/${link}`}
            className="border border-gray-300 px-8 py-4 rounded-full capitalize font-medium hover:bg-black hover:text-white duration-200"
          >
            {title}
          </Link>
        ))}
      </div>

      {/*  Dicount Banner */}
      <div className="w-full py-5 mt-12 bg-[#f6f6f6] rounded-lg flex items-center justify-between overflow-hidden">
        <img
          src={discountImgOne}
          alt="Discount Image"
          className="hidden lg:inline-flex h-36"
        />

        {/* banner product name */}
        <div>
          <div className="flex items-center justify-center gap-x-3 text-xl md:text-4xl font-bold">
            <span>Sony Headphone</span>
            <Link
              to={`/product`}
              className="border border-red-600 px-4 py-2 text-xl md:text-3xl text-red-600 rounded-full"
            >
              Discount 20%
            </Link>
          </div>

          <p className="text-sm text-gray-600 font-medium">
            You're out to play or stepping out to make
          </p>
        </div>

        <img
          src={discountImgTwo}
          alt="discount image two"
          className="hidden lg:inline-flex h-36"
        />
      </div>

      {/* brand distribution */}
      <div className="mt-7">
        <p className="font-bold text-2xl animate__animated animate__slideInUp">
          Brands We Distribute
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-7">
          <div className="border border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
            <img
              src={brandOne}
              alt="Brand"
              className="w-36 h-auto group-hover:opacity-50 duration-200"
            />
          </div>

          <div className="border border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
            <img
              src={brandTwo}
              alt="Brand"
              className="w-36 h-auto group-hover:opacity-50 duration-200"
            />
          </div>

          <div className="border border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
            <img
              src={brandThree}
              alt="Brand"
              className="w-36 h-auto group-hover:opacity-50 duration-200"
            />
          </div>

          <div className="border border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
            <img
              src={brandFour}
              alt="Brand"
              className="w-36 h-auto group-hover:opacity-50 duration-200"
            />
          </div>

          <div className="border border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
            <img
              src={brandFive}
              alt="Brand"
              className="w-36 h-auto group-hover:opacity-50 duration-200"
            />
          </div>

          <div className="border border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
            <img
              src={brandSix}
              alt="Brand"
              className="w-36 h-auto group-hover:opacity-50 duration-200"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DiscountBanner;
