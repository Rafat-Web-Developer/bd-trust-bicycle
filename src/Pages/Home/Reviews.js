import React from "react";
import Review from "./Review";

const Reviews = () => {
  return (
    <section className="my-20">
      <h1 className="mb-20 text-3xl text-center uppercase font-bold text-primary">
        Reviews
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Review></Review>
        <Review></Review>
        <Review></Review>
      </div>
    </section>
  );
};

export default Reviews;
