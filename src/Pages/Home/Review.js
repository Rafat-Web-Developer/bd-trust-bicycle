import React from "react";

const Review = () => {
  return (
    <div className="card lg:max-w-96 bg-base-200 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h3>User Name</h3>
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
            checked
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-primary"
            checked
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-primary"
            checked
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
