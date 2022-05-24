import { signOut } from "firebase/auth";
import React from "react";
import auth from "../../../firebase.init";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import AdminRow from "./AdminRow";
import Loading from "../../Shared/Loading";

const AllAdmin = () => {
  const navigate = useNavigate();
  const {
    data: admins,
    isLoading,
    refetch,
  } = useQuery("admins", () =>
    fetch("http://localhost:5000/admins", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/login");
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section>
      <h1 className="mb-5 font-bold text-xl">All Admin</h1>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin, index) => (
              <AdminRow key={admin._id} admin={admin} index={index}></AdminRow>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllAdmin;
