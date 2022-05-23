import React from "react";
import OrderRow from "./OrderRow";

const MyOrders = () => {
  return (
    <section>
      <h1 className="mb-5 font-bold text-xl">My Orders</h1>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>price</th>
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

export default MyOrders;
