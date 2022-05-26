import React from "react";

const OrderRow = ({
  order,
  index,
  setShowOrderDeleteModal,
  setOrderDeleteData,
}) => {
  const { product_name } = order;

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
      <td>250</td>
      <td>
        <label
          onClick={handleOrderDelete}
          for="my_order_delete_modal"
          class="btn btn-error btn-xs"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default OrderRow;
