import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading";
import SingleReviewProduct from "./SingleReviewProduct";

const AddReview = () => {
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();
  const { data: reviewProducts, isLoading } = useQuery("reviewProducts", () =>
    fetch(`https://young-dawn-47483.herokuapp.com/myOrders/${user?.email}`, {
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
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
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
            {reviewProducts.map((order, index) => (
              <SingleReviewProduct
                key={order._id}
                orderedProduct={order}
                index={index}
              ></SingleReviewProduct>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AddReview;
