import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading";
import ProductDeleteModal from "./ProductDeleteModal";
import ProductRow from "./ProductRow";

const ManageProducts = () => {
  const [modalData, setModalData] = useState({});
  const [showProductDeleteModal, setShowProductDeleteModal] = useState(false);
  const navigate = useNavigate();
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch("http://localhost:5000/products", {
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
      <h1 className="mb-5 font-bold text-xl">All Products</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Product's Image</th>
              <th>Product's Name</th>
              <th>Product's Price</th>
              <th>AQ</th>
              <th>MOQ</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ProductRow
                key={product._id}
                product={product}
                index={index}
                setShowProductDeleteModal={setShowProductDeleteModal}
                setModalData={setModalData}
              ></ProductRow>
            ))}
          </tbody>
        </table>
      </div>
      {showProductDeleteModal && (
        <ProductDeleteModal
          product={modalData}
          refetch={refetch}
          setShowProductDeleteModal={setShowProductDeleteModal}
          setModalData={setModalData}
        ></ProductDeleteModal>
      )}
    </section>
  );
};

export default ManageProducts;
