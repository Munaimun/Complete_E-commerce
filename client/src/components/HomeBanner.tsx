import Container from "./Container";

import homeBanner from "../assets/homeBanner.jpg";
import LinkButton from "./LinkButton";

const HomeBanner = () => {
  return (
    <Container className="relative py-5 overflow-hidden">
      <div className="relative">
        <img
          src={homeBanner}
          alt="Home Banner"
          className="w-full h-full object-cover rounded-md"
        />
        <div className="w-full h-full absolute top-0 left-0 bg-black/20" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center px-10">
        <span className="text-xl md:text-4xl lg:text-6xl text-white font-bold">
          Mi Air Purifier
        </span>
        <p className="text-base  md:text-lg font-semibold leading-6 text-white/90">
          The new tech gift you are wishing for right here.
        </p>
        <LinkButton className="w-44 flex items-center justify-center bg-white text-black hover:bg-black hover:text-white duration-200 mx-auto mt-4" />
      </div>
    </Container>
  );
};

export default HomeBanner;
