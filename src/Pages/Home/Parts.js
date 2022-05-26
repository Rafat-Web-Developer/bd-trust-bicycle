import { signOut } from "firebase/auth";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import Part from "./Part";

const Parts = () => {
  const navigate = useNavigate();

  const { data: homeProducts, isLoading } = useQuery("homeProducts", () =>
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
    <section className="my-20">
      <h1 className="mb-20 text-3xl text-center uppercase font-bold text-primary">
        Bicycle Parts
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {homeProducts.map((product) => (
          <Part key={product._id} product={product}></Part>
        ))}
      </div>
    </section>
  );
};

export default Parts;
