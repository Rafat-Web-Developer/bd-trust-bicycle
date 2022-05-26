import React from "react";
import { useNavigate } from "react-router-dom";

const OrderRow = ({
  order,
  index,
  setShowOrderDeleteModal,
  setOrderDeleteData,
}) => {
  const {
    _id,
    product_image,
    product_name,
    product_price,
    quantity,
    payment_status,
    transaction_id,
  } = order;

  const navigate = useNavigate();

  const handleOrderDelete = () => {
    setOrderDeleteData(order);
    setShowOrderDeleteModal(true);
  };

  const handlePayButton = () => {
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
      <td>{quantity}</td>
      <td>{!payment_status ? "UNPAID" : "PAID"}</td>
      <td>{!transaction_id ? "NULL" : transaction_id}</td>
      <td>
        {payment_status ? (
          <label
            onClick={handleOrderDelete}
            for="my_order_delete_modal"
            className="btn btn-error btn-xs"
          >
            Delete
          </label>
        ) : (
          <button onClick={handlePayButton} className="btn btn-primary btn-xs">
            Pay
          </button>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
