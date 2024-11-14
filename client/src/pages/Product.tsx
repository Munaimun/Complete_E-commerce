import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import _ from "lodash";
import { FaRegEye } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdOutlineStarOutline } from "react-icons/md";

import { config } from "../../config";
import { ProductProps } from "../../type";
import { getData } from "../lib";

import Loading from "../components/Loading";
import Container from "../components/Container";
import PriceTag from "../components/PriceTag";
import FormattedPrice from "../components/FormattedPrice";
import AddToCartBtn from "../components/AddToCartBtn";

import ProductCard from "../components/ProductCard";
import CategoryFilters from "../components/CategoryFilters";

import productPayment from "../assets/payment.webp";

const Product = () => {
  const [productData, setProductData] = useState<ProductProps | null>(null);
  const [allProducts, setAllProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [color, setColor] = useState("");

  const { id } = useParams();

  const endpoint = id
    ? `${config?.baseUrl}/products/${id}`
    : `${config?.baseUrl}/products`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getData(endpoint);

        if (id) {
          setProductData(res);
          setAllProducts([]);
        } else {
          setAllProducts(res);
          setProductData(null);
        }
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, endpoint]); //whenever id get change it will run

  // if productData is true then take the images
  useEffect(() => {
    if (productData) {
      setImgUrl(productData?.images[0]);
      setColor(productData?.colors[0]);
    }
  }, [productData]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {!!id && productData && _.isEmpty(allProducts) ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-start">
                <div className="">
                  {/* {productData?.images?.map((item, index) => (
                    <img
                      key={index}
                      src={item}
                      alt="img"
                      className={`w-24 cursor-pointer opacity-80 hover:opacity-100 duration-300 ${
                        imgUrl === item &&
                        "border border-gray-500 rounded-md opcaity-100"
                      }`}
                      onClick={() => setImgUrl(item)}
                    />
                  ))} */}
                </div>

                <div>
                  <img src={imgUrl} alt="img" />
                </div>
              </div>

              <div className="flex flex-col gap-4 text-start">
                <span className="text-3xl font-bold text-yellow-400">
                  {productData?.name}
                </span>

                <div className="flex items-center justify-between">
                  <PriceTag
                    regularPrice={productData?.regularPrice}
                    discountedPrice={productData?.discountedPrice}
                    className="text-xl"
                  />

                  {/* star icons */}
                  <div className="flex items-center gap-1">
                    <div className="text-base text-red-600 flex items-center">
                      <MdOutlineStarOutline />
                      <MdOutlineStarOutline />
                      <MdOutlineStarOutline />
                      <MdOutlineStarOutline />
                      <MdOutlineStarOutline />
                    </div>
                    <p className="text-base font-semibold">{`(${productData?.reviews} reviews)`}</p>
                  </div>
                </div>

                <p className="flex items-center">
                  <FaRegEye className="mr-1" />{" "}
                  <span className="font-semibold mr-1">
                    {productData?.reviews} people views
                  </span>
                </p>

                <p>
                  You are saving{" "}
                  <span className="text-base font-semibold text-green-500">
                    <FormattedPrice
                      amount={
                        productData?.regularPrice - productData?.discountedPrice
                      }
                    />
                  </span>{" "}
                  upon purchase
                </p>

                <div>
                  {color && (
                    <p>
                      Color:{" "}
                      <span
                        className="font-semibold capitalize"
                        style={{ color: color }}
                      >
                        {color}
                      </span>
                    </p>
                  )}

                  <div className="flex items-center gap-x-3">
                    {productData?.colors.map((item) => (
                      <div
                        key={item}
                        className={`${
                          item === color
                            ? "border border-black p-1 rounded-full"
                            : "border-transparent"
                        }`}
                      >
                        <div
                          className="w-10 h-10 rounded-full cursor-pointer"
                          style={{ backgroundColor: item }}
                          onClick={() => setColor(item)}
                        />
                      </div>
                    ))}
                  </div>

                  {color && (
                    <button
                      className="font-semibold mt-1 flex items-center gap-1 hover:text-red-600 duration-200"
                      onClick={() => setColor("")}
                    >
                      <IoClose /> clear
                    </button>
                  )}

                  <p>
                    Brand:{" "}
                    <span className="font-medium">{productData?.brand}</span>
                  </p>
                  <p>
                    Category:{" "}
                    <span className="font-medium">{productData?.category}</span>
                  </p>
                  <AddToCartBtn
                    product={productData}
                    title="Buy Now"
                    className="bg-black/80 w-20 md:w-40 py-3 text-gray-200 hover:scale-100 hover:text-white duration-200 mt-3"
                  />

                  <div className="bg-[#f7f7f7] p-5 rounded-md flex flex-col gap-2 text-center mt-2">
                    <img
                      src={productPayment}
                      alt="payment"
                      className="w-80 object-cover mx-auto"
                    />
                    <p className="font-semibold">
                      Guaranteed safe & secure checkout
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // SHOWING ALL RODUCTS
            <div className="flex items-start gap-10">
              <CategoryFilters id={id} />
              <div>
                <p className="text-4xl font-semibold mb-5 text-center">
                  Products Collection
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {allProducts.map((item: ProductProps) => (
                    <ProductCard key={item?._id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </Container>
      )}
    </div>
  );
};

export default Product;
