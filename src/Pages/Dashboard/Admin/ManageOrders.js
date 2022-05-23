import React from "react";
import OrderRow from "./OrderRow";

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
            <OrderRow></OrderRow>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageOrders;
