import React from "react";

const OrderRow = ({ order, index }) => {
  const { product_name } = order;
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
        <button className="btn btn-error btn-xs">Delete</button>
      </td>
    </tr>
  );
};

export default OrderRow;
