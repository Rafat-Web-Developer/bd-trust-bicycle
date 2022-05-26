import React from "react";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const MyOrderDeleteModal = ({
  order,
  setOrderDeleteData,
  refetch,
  setShowOrderDeleteModal,
}) => {
  const { _id, product_name, product_price, quantity } = order;
  const navigate = useNavigate();

  const handleDeleteOrder = () => {
    fetch(`https://young-dawn-47483.herokuapp.com/order/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/login");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setOrderDeleteData({});
        setShowOrderDeleteModal(false);
        refetch();
        toast.success("Product Deleted successfully. Alhamdulillah!!");
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="my_order_delete_modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-xl text-error">
            Are you sure to delete !!
          </h3>
          <div className="py-4 font-bold text-primary">
            <h1 className="text-center my-2">Order Details</h1>
            <p>Product Name = {product_name}</p>
            <p>Product Price = {product_price}</p>
            <p>Quantity = {quantity}</p>
          </div>
          <div className="modal-action">
            <label for="my_order_delete_modal" className="btn btn-primary">
              No
            </label>
            <label
              onClick={handleDeleteOrder}
              className="btn btn-error text-white font-bold"
            >
              Yes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrderDeleteModal;
