import React from "react";
import { useNavigate } from "react-router-dom";

const SinglePart = ({ product }) => {
  const {
    _id,
    product_name,
    product_description,
    product_price,
    available_quantity,
    minimum_order_quantity,
  } = product;

  const navigate = useNavigate();

  const handleBuy = () => {
    navigate(`/purchase/${_id}`);
  };

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
        <h2 className="card-title text-primary">{product_name}</h2>
        <p>{product_description}</p>
        <p>Available Quantity : {available_quantity}</p>
        <p>Minimum Order Quantity : {minimum_order_quantity}</p>
        <p className="badge badge-warning p-3 font-bold">
          Price : {product_price}
        </p>
        <div className="card-actions">
          <button onClick={handleBuy} className="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePart;
