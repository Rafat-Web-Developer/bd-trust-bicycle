import React, { useEffect, useState } from "react";
import OrderRow from "./OrderRow";
import Loading from "../../Shared/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const email = user?.email;
    const url = `http://localhost:5000/myOrders/${email}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);

  if (loading) {
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <OrderRow key={order._id} order={order} index={index}></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyOrders;
