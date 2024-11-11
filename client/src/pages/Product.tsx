import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import _ from "lodash";

import { config } from "../../config";
import { ProductProps } from "../../type";
import { getData } from "../lib";

import Loading from "../components/Loading";
import Container from "../components/Container";

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
            <div>SingleProduct</div>
          ) : (
            <div>all products</div>
          )}
        </Container>
      )}
    </div>
  );
};

export default Product;
