import React from "react";
import BusinessSummary from "./BusinessSummary";
import Carousel from "./Carousel";
import Parts from "./Parts";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <main className="m-6">
      <Carousel></Carousel>
      <Parts></Parts>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
    </main>
  );
};

export default Home;
