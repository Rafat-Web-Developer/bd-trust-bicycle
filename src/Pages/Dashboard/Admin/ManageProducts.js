import React from "react";
import ProductRow from "./ProductRow";

const ManageProducts = () => {
  return (
    <section>
      <h1 className="mb-5 font-bold text-xl">All Products</h1>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Product's Name</th>
              <th>Product's Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <ProductRow></ProductRow>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageProducts;
