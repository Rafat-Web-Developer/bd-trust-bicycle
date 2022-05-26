import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { order_id } = useParams();
  const [order, setOrder] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const url = `http://localhost:5000/order/${order_id}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [order_id]);

  const onSubmit = async (data) => {
    const paymentData = {
      payment_status: true,
      transaction_id: data.transaction_id,
    };

    const url = `http://localhost:5000/order/${order_id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(paymentData),
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Checkout Failed");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(
            "Successfully your payment is completed. Alhamdulillah!!"
          );
          navigate("/dashboard/myOrders");
        }
      });

    reset();
  };

  return (
    <main className="m-6">
      <section className="flex justify-center">
        <div className="card w-100 lg:w-6/12 bg-primary text-primary-content">
          <h2 className="text-2xl text-center text-accent py-3 px-8 font-bold uppercase">
            Complete Your Payment
          </h2>
          <div className="card-body text-center">
            <div className="avatar">
              <div className="w-24 rounded-xl">
                <img src={order?.product_image} alt="product_image" />
              </div>
            </div>
            <h2 className="card-title">
              Product Name :{" "}
              <span className="text-warning font-bold">
                {order?.product_name}
              </span>
            </h2>
            <h2 className="card-title">
              Product Price :{" "}
              <span className="text-warning font-bold">
                ${order?.product_price}
              </span>
            </h2>
            <h2 className="card-title">
              Quantity :{" "}
              <span className="text-warning font-bold">{order?.quantity}</span>
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="my-14">
              <input
                type="text"
                placeholder="Transaction ID"
                className="input input-bordered w-full max-w-xs text-primary font-bold"
                {...register("transaction_id", {
                  required: {
                    value: true,
                    message: "Transaction id is required.",
                  },
                })}
              />
              <div className="mt-3 flex justify-center">
                <label className="label">
                  {errors.transaction_id?.type === "required" && (
                    <span className="label-text-alt font-bold text-error">
                      {errors.transaction_id.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="mt-3 flex justify-center">
                <input
                  className="btn btn-error w-9/12 md:w-4/12 text-white font-bold"
                  type="submit"
                  value="Pay Now"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
