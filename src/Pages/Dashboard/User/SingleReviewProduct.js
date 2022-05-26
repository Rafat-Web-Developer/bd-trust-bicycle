import React from "react";
import { useNavigate } from "react-router-dom";

const SingleReviewProduct = ({ orderedProduct, index }) => {
  const { _id, product_image, product_name, product_price } = orderedProduct;

  const navigate = useNavigate();

  const handleAddReview = () => {
    navigate(`/checkout/${_id}`);
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={product_image} alt="product_image" />
          </div>
        </div>
      </td>
      <td>{product_name}</td>
      <td>{product_price}</td>
      <td>
        <button onClick={handleAddReview} className="btn btn-primary btn-xs">
          Add Review
        </button>
      </td>
    </tr>
  );
};

export default SingleReviewProduct;
