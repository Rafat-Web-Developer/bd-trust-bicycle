import React from "react";

const OrderRow = () => {
  return (
    <tr>
      <th>1</th>
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
      <td>Cy Ganderton</td>
      <td>250</td>
      <td>
        <button className="btn btn-error btn-xs">Delete</button>
      </td>
    </tr>
  );
};

export default OrderRow;
