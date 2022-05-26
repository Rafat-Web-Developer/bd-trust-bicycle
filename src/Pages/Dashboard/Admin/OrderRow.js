import React from "react";

const OrderRow = ({ order, index }) => {
  const {
    product_image,
    user_name,
    user_email,
    product_name,
    product_price,
    quantity,
    payment_status,
    transaction_id,
    shipment_status,
  } = order;
  return (
    <tr>
      <th>{index}</th>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={product_image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{user_name}</td>
      <td>{user_email}</td>
      <td>{product_name}</td>
      <td>{product_price}</td>
      <td>{quantity}</td>
      <td>{transaction_id}</td>
      <td>{payment_status ? "PAID" : "UNPAID"}</td>
      {payment_status ? (
        <td>{shipment_status ? "shipped" : "pending"}</td>
      ) : (
        <td className="text-error">Payment Not Clear</td>
      )}
      <td>
        {payment_status && (
          <button className="btn btn-primary btn-sm text-white">Confirm</button>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
