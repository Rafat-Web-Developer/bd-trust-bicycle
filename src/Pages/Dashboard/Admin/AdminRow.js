import React from "react";

const AdminRow = ({ admin, index }) => {
  const { email, role } = admin;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>{role}</td>
      <td>
        <button className="btn btn-accent btn-sm text-white">Make User</button>
      </td>
    </tr>
  );
};

export default AdminRow;
