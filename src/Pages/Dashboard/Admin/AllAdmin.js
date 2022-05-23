import React from "react";
import AdminRow from "./AdminRow";

const AllAdmin = () => {
  return (
    <section>
      <h1 className="mb-5 font-bold text-xl">All Admin</h1>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <AdminRow></AdminRow>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllAdmin;
