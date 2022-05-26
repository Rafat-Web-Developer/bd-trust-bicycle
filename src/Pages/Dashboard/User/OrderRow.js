import React from "react";

const OrderRow = ({
  order,
  index,
  setShowOrderDeleteModal,
  setOrderDeleteData,
}) => {
  const { product_name, product_price, payment_status, transaction_id } = order;

  const handleOrderDelete = () => {
    setOrderDeleteData(order);
    setShowOrderDeleteModal(true);
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="mask mask-squircle w-12 h-12">
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Avatar Tailwind CSS Component"
            />
          </div>
        </div>
      </td>
      <td>{product_name}</td>
      <td>{product_price}</td>
      <td>{!payment_status ? "UNPAID" : "PAID"}</td>
      <td>{!transaction_id ? "NULL" : transaction_id}</td>
      <td>
        {payment_status ? (
          <label
            onClick={handleOrderDelete}
            for="my_order_delete_modal"
            class="btn btn-error btn-xs"
          >
            Delete
          </label>
        ) : (
          <button onClick={handleOrderDelete} class="btn btn-primary btn-xs">
            Pay
          </button>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
