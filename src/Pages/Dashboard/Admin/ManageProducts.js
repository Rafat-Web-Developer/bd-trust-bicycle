import React from "react";

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
            <tr>
              <th>1</th>
              <td>Test</td>
              <td>250</td>
              <td>
                <button className="btn btn-error btn-sm text-white">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageProducts;
