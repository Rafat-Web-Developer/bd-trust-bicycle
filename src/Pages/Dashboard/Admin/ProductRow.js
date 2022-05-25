import React from "react";

const ProductRow = ({ product, index, refetch }) => {
  const { product_name, product_price } = product;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{product_name}</td>
      <td>{product_price}</td>
      <td>
        <button className="btn btn-error btn-sm text-white">Delete</button>
      </td>
    </tr>
  );
};

export default ProductRow;
