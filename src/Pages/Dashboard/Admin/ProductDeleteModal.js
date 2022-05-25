import React from "react";

const ProductDeleteModal = ({ product }) => {
  const { product_name, product_price } = product;
  return (
    <div>
      <input type="checkbox" id="product_delete_modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-xl text-error">
            Are you sure to delete {product_name}!!
          </h3>
          <div class="py-4 font-bold text-primary">
            <p>Product Name = {product_name}</p>
            <p>Product Price = {product_price}</p>
          </div>
          <div class="modal-action">
            <label for="product_delete_modal" class="btn btn-primary">
              No
            </label>
            <label
              for="product_delete_modal"
              class="btn btn-error text-white font-bold"
            >
              Yes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDeleteModal;
