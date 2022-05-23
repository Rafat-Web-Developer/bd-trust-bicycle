import React from "react";

const OrderRow = () => {
  return (
    <tr>
      <th>1</th>
      <td>Test</td>
      <td>250</td>
      <td>user@gmail.com</td>
      <td>
        <button className="btn btn-primary btn-sm text-white">Confirm</button>
      </td>
    </tr>
  );
};

export default OrderRow;
