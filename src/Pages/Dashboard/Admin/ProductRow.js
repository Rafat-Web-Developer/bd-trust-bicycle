import React from "react";

const ProductRow = ({
  product,
  index,
  setShowProductDeleteModal,
  setModalData,
}) => {
  const { product_name, product_price } = product;

  const handleShowModel = () => {
    setModalData(product);
    setShowProductDeleteModal(true);
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{product_name}</td>
      <td>{product_price}</td>
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
