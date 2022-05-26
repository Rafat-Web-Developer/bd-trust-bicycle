import React, { useState } from "react";
import OrderRow from "./OrderRow";
import Loading from "../../Shared/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import MyOrderDeleteModal from "./MyOrderDeleteModal";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);
  const [orderDeleteData, setOrderDeleteData] = useState({});
  const [showOrderDeleteModal, setShowOrderDeleteModal] = useState(false);

  const navigate = useNavigate();
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`http://localhost:5000/myOrders/${user?.email}`, {
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

  if (loading || isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section>
      <h1 className="mb-5 font-bold text-xl">My Orders</h1>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>price</th>
              <th>Payment Status</th>
              <th>Transaction ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <OrderRow
                key={order._id}
                order={order}
                index={index}
                setOrderDeleteData={setOrderDeleteData}
                setShowOrderDeleteModal={setShowOrderDeleteModal}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
      {showOrderDeleteModal && (
        <MyOrderDeleteModal
          order={orderDeleteData}
          setOrderDeleteData={setOrderDeleteData}
          refetch={refetch}
          setShowOrderDeleteModal={setShowOrderDeleteModal}
        ></MyOrderDeleteModal>
      )}
    </section>
  );
};

export default MyOrders;
