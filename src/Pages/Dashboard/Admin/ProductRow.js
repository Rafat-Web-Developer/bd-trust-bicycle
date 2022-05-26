import React from "react";

const ProductRow = ({
  product,
  index,
  setShowProductDeleteModal,
  setModalData,
}) => {
  const {
    product_image,
    product_name,
    product_price,
    available_quantity,
    minimum_order_quantity,
  } = product;

  const handleShowModel = () => {
    setModalData(product);
    setShowProductDeleteModal(true);
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="mask mask-squircle w-12 h-12">
            <img src={product_image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{product_name}</td>
      <td>{product_price}</td>
      <td>{available_quantity}</td>
      <td>{minimum_order_quantity}</td>
      <td>
        <label
          onClick={handleShowModel}
          for="product_delete_modal"
          class="btn btn-error btn-sm text-white"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ProductRow;
