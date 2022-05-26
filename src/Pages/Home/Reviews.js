import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Review from "./Review";

const Reviews = () => {
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch(`https://young-dawn-47483.herokuapp.com/reviews`).then((res) => {
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="my-20">
      <h1 className="mb-20 text-3xl text-center uppercase font-bold text-primary">
        Reviews
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
