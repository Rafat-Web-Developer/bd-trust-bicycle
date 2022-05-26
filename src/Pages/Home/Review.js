import React from "react";

const Review = ({ review }) => {
  const { product_image, user_name, user_email, rating } = review;
  return (
    <div className="card lg:max-w-96 bg-base-200 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={product_image} alt="product_image" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h3>{user_name}</h3>
        <p>{user_email}</p>
        <p>Rating {rating}</p>
        <div className="rating">
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-primary"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-primary"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-primary"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-primary"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
