import React from "react";
import UserRow from "./UserRow";

const AllUsers = () => {
  return (
    <section>
      <h1 className="mb-5 font-bold text-xl">All Users</h1>
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
            <UserRow></UserRow>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllUsers;
