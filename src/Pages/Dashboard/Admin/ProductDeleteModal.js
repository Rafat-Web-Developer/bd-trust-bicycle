import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const ProductDeleteModal = ({
  product,
  refetch,
  setShowProductDeleteModal,
  setModalData,
}) => {
  const { _id, product_name, product_price } = product;
  const navigate = useNavigate();

  const handleDeleteProduct = () => {
    fetch(`http://localhost:5000/product/${_id}`, {
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
        setModalData({});
        setShowProductDeleteModal(false);
        refetch();
        toast.success("Product Deleted successfully. Alhamdulillah!!");
      });
  };

  return (
    <div>
      <input
        type="checkbox"
        id="product_delete_modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-xl text-error">
            Are you sure to delete {product_name}!!
          </h3>
          <div className="py-4 font-bold text-primary">
            <p>Product Name = {product_name}</p>
            <p>Product Price = {product_price}</p>
          </div>
          <div className="modal-action">
            <label for="product_delete_modal" className="btn btn-primary">
              No
            </label>
            <label
              onClick={handleDeleteProduct}
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

export default ProductDeleteModal;
