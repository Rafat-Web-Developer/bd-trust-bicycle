import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ConfirmReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const { review_id } = useParams();
  const [order, setOrder] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://young-dawn-47483.herokuapp.com/order/${review_id}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [review_id]);

  const onSubmit = async (data) => {
    const reviewData = {
      product_id: order?.product_id,
      product_name: order?.product_name,
      product_image: order?.product_image,
      user_name: order?.user_name,
      user_email: order?.user_email,
      rating: data.rating,
    };

    const url = `https://young-dawn-47483.herokuapp.com/addReview/${review_id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Review Failed");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success(
            "Successfully your review is submitted. Alhamdulillah!!"
          );
          reset();
          navigate("/dashboard/addReview");
        }
      });
  };

  return (
    <main className="m-6">
      <section className="flex justify-center">
        <div className="card w-100 lg:w-6/12 bg-primary text-primary-content">
          <h2 className="text-2xl text-center text-accent py-3 px-8 font-bold uppercase">
            Add Review of{" "}
            <span className="text-error">{order?.product_name}</span>
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
              <select
                class="select w-full max-w-xs text-primary"
                {...register("rating", {
                  required: {
                    value: true,
                    message: "Rating is required.",
                  },
                })}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

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

export default ConfirmReview;
