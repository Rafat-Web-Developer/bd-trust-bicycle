import React from "react";

const ManageOrders = () => {
  return (
    <section>
      <h1 className="mb-5 font-bold text-xl">Manage All Orders</h1>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Product's Name</th>
              <th>Product's Price</th>
              <th>User Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Test</td>
              <td>250</td>
              <td>user@gmail.com</td>
              <td>
                <button className="btn btn-primary btn-sm text-white">
                  Confirm
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageOrders;
