import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
// import Carousel from "./Carousel";
import Parts from "./Parts";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <>
      <main className="m-6">
        {/* <Carousel></Carousel> */}
        <Banner></Banner>
        <Parts></Parts>
        <BusinessSummary></BusinessSummary>
        <Reviews></Reviews>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Home;
