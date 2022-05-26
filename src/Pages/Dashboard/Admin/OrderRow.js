import React from "react";
import { toast } from "react-toastify";

const OrderRow = ({ order, index, refetch }) => {
  const {
    _id,
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

  const handleShipmentStatus = () => {
    const url = `http://localhost:5000/order/shipped/${_id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Shipment Error");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Successfully product shipped. Alhamdulillah!!");
          refetch();
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
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
        <td className="text-accent">
          {shipment_status ? "shipped" : "pending"}
        </td>
      ) : (
        <td className="text-error">Payment Not Clear</td>
      )}
      <td>
        {payment_status && !shipment_status && (
          <button
            onClick={handleShipmentStatus}
            className="btn btn-primary btn-sm text-white"
          >
            Shipped
          </button>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
