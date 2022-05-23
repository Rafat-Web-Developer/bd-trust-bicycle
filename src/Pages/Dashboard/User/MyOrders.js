import React from "react";

const MyOrders = () => {
  return (
    <section>
      <h1 className="mb-5 font-bold text-xl">All Orders</h1>
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
            <tr>
              <th>1</th>
              <td>
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src="https://api.lorem.space/image/shoes?w=400&h=225"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>Cy Ganderton</td>
              <td>250</td>
              <td>
                <button className="btn btn-error btn-xs">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyOrders;
