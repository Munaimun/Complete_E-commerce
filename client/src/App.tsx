// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import BannerCategories from "./components/BannerCategories";
import HomeBanner from "./components/HomeBanner";
import HighLights from "./components/HighLights";
import Categories from "./components/Categories";
import ProductList from "./components/ProductList";
import DiscountBanner from "./components/DiscountBanner";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="text-center mx-auto">
      <BannerCategories />
      <HomeBanner />
      <HighLights />
      <Categories />
      <ProductList />
      <DiscountBanner />
      <Blog />
    </div>
  );
}

export default App;
