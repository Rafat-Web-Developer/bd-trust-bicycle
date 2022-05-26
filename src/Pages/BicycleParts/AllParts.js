import { signOut } from "firebase/auth";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import SinglePart from "./SinglePart";

const AllParts = () => {
  const navigate = useNavigate();

  const { data: products, isLoading } = useQuery("products", () =>
    fetch(`http://localhost:5000/products`, {
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
        <div className="text-center mb-10">
          <h1 className="mb-2 mt-10 text-3xl font-bold text-primary uppercase">
            All Bicycle Parts
          </h1>
          <p className="text-sm uppercase text-muted">You can buy any part</p>
        </div>
        {products.length !== 0 ? (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products?.map((product) => (
              <SinglePart key={product._id} product={product}></SinglePart>
            ))}
          </div>
        ) : (
          <p className="text-center text-error text-2xl font-bold">
            No products available
          </p>
        )}
      </section>
    </main>
  );
};

export default AllParts;
