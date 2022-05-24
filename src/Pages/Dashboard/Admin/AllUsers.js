import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import UserRow from "./UserRow";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/users").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section>
      <h1 className="mb-5 font-bold text-xl">All Users</h1>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow key={user._id} user={user} index={index}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllUsers;
