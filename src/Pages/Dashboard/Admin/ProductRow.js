import React from "react";

const ProductRow = () => {
  return (
    <tr>
      <th>1</th>
      <td>Test</td>
      <td>250</td>
      <td>
        <button className="btn btn-error btn-sm text-white">Delete</button>
      </td>
    </tr>
  );
};

export default ProductRow;
