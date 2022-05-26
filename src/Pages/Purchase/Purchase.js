import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { useAuthState } from "react-firebase-hooks/auth";

const Purchase = () => {
  const [user, loading] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
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

  if (loading || isLoading) {
    return <Loading></Loading>;
  }

  const onSubmit = async (data) => {
    const checkQuantity = data.quantity;
    if (checkQuantity > product.minimum_order_quantity) {
      const message = (
        <p className="text-error font-bold">
          Invalid quantity !!{" "}
          <small>
            (quantity must be less then or equal of minimum order quantity)
          </small>
        </p>
      );
      setErrorMessage(message);
    } else {
      const order = {
        user_name: data.user_name,
        user_email: data.user_email,
        mobile_number: data.mobile_number,
        product_name: product?.product_name,
        product_id: product_id,
        quantity: data.quantity,
      };
      setErrorMessage("");

      fetch("http://localhost:5000/order", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data?.success) {
            console.log(data);
            toast.error(data?.message);
          } else {
            toast.success(data?.message);
          }
        });
      reset();
    }
  };

  return (
    <main className="m-6">
      <section>
        <h1 className="text-2xl text-primary font-bold my-12 text-center uppercase">
          Purchase <span className="text-error">{product.product_name}</span>
        </h1>
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card flex-shrink-0 w-100 lg:w-6/12 shadow-2xl bg-base-100 border border-primary"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-primary">
                    Your Name
                  </span>
                </label>
                <input
                  readOnly
                  type="text"
                  value={user?.displayName}
                  className="input input-bordered text-primary font-bold"
                  {...register("user_name", {
                    required: {
                      value: true,
                      message: "User name is required.",
                    },
                  })}
                />
                <label className="label">
                  {errors.user_name?.type === "required" && (
                    <span className="label-text-alt font-bold text-error">
                      {errors.user_name.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-primary">
                    Your Email
                  </span>
                </label>
                <input
                  readOnly
                  type="text"
                  value={user?.email}
                  className="input input-bordered text-primary font-bold"
                  {...register("user_email", {
                    required: {
                      value: true,
                      message: "User email is required.",
                    },
                  })}
                />
                <label className="label">
                  {errors.user_email?.type === "required" && (
                    <span className="label-text-alt font-bold text-error">
                      {errors.user_email.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-primary">
                    Mobile Number
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="input input-bordered text-primary font-bold"
                  {...register("mobile_number", {
                    required: {
                      value: true,
                      message: "Mobile Number is required.",
                    },
                  })}
                />
                <label className="label">
                  {errors.mobile_number?.type === "required" && (
                    <span className="label-text-alt font-bold text-error">
                      {errors.mobile_number.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-primary">
                    Quantity{" "}
                    <small className="text-error font-bold">
                      (minimum order quantity is{" "}
                      {product?.minimum_order_quantity})
                    </small>
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="How many products you went."
                  className="input input-bordered text-primary font-bold"
                  {...register("quantity", {
                    required: {
                      value: true,
                      message: "Quantity is required.",
                    },
                  })}
                />
                <label className="label">
                  {errors.quantity?.type === "required" && (
                    <span className="label-text-alt font-bold text-error">
                      {errors.quantity.message}
                    </span>
                  )}
                </label>
              </div>
              {errorMessage}
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary text-white"
                  type="submit"
                  value="Order Now"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Purchase;
