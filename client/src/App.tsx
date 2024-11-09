// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import BannerCategories from "./components/BannerCategories";
import HomeBanner from "./components/HomeBanner";
import HighLights from "./components/HighLights";

function App() {
  return (
    <div className="max-w-screen-xl text-center mx-auto">
      <BannerCategories />
      <HomeBanner />
      <HighLights />
    </div>
  );
}

export default App;
