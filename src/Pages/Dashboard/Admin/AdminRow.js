import React from "react";
import { toast } from "react-toastify";

const AdminRow = ({ admin, index, refetch }) => {
  const { email, role } = admin;
  const makeUser = () => {
    fetch(`http://localhost:5000/admin/user/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an user");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully make an user. Alhamdulillah!!`);
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>{role}</td>
      <td>
        <button onClick={makeUser} className="btn btn-accent btn-sm text-white">
          Make User
        </button>
      </td>
    </tr>
  );
};

export default AdminRow;
