import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { config } from "../../config";
import { getData } from "../lib";

import Container from "../components/Container";
import Loading from "../components/Loading";
import CategoryFilters from "../components/CategoryFilters";
import ProductCard from "../components/ProductCard";
import { ProductProps } from "../../type";

const Category = () => {
  const [loading, setLoading] = useState(true); // Start with loading = true
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `${config?.baseUrl}/categories/${id}`;

      try {
        const data = await getData(endpoint);
        setProducts(data);
        setLoading(false); // Set loading = false after data is fetched
      } catch (error) {
        console.log(error);
        setLoading(false); // Also stop loading if there is an error
      }
    };
    fetchData();
  }, [id]);

  const formatId = (id: string) => {
    return id
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/(^\w|\s\w)/g, (match) => match.toUpperCase());
  };

  return (
    <div>
      {loading ? (
        <Loading /> // Show Loading while data is being fetched
      ) : (
        <Container>
          <span className="text-4xl text-center font-semibold mb-5">
            {formatId(id!)}{" "}
          </span>

          <div className="flex items-start gap-10">
            <CategoryFilters id={id} />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {products.map((item: ProductProps) => (
                <ProductCard key={item?._id} item={item} />
              ))}
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Category;
