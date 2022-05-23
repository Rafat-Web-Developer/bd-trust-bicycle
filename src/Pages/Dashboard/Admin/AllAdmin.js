import React from "react";

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
            <tr>
              <th>1</th>
              <td>Test</td>
              <td>test@gmail.com</td>
              <td>
                <button className="btn btn-accent btn-sm text-white">
                  Make User
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllAdmin;
