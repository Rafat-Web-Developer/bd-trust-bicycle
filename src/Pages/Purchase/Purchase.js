import { signOut } from "firebase/auth";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Purchase = () => {
  const { product_id } = useParams();
  const navigate = useNavigate();
  const { data: product, isLoading } = useQuery("products", () =>
    fetch(`http://localhost:5000/product/${product_id}`, {
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
    <main className="m-6">
      <section>
        <h1 className="text-2xl text-primary font-bold my-12 text-center">
          Purchase
        </h1>
        <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://api.lorem.space/image/album?w=400&h=400"
              alt="Album"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Product Name : {product.product_name}</h2>
            <p>Product Description : {product.product_description}</p>
            <p>Available Quantity : {product.available_quantity}</p>
            <p>Minimum Order Quantity : {product.minimum_order_quantity}</p>
            <p>Price : {product.product_price}</p>
            <div class="card-actions justify-start">
              <button class="btn btn-primary">Order Now</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Purchase;
