import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const { order_id } = useParams();
  const [order, setOrder] = useState({});

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

  return (
    <main className="m-6">
      <section className="flex justify-center">
        <div className="card w-100 lg:w-6/12 bg-primary text-primary-content">
          <h2 className="text-2xl text-center text-accent py-3 px-8 font-bold uppercase">
            Complete Your Payment
          </h2>
          <div className="card-body text-center">
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
            <form className="my-14">
              <input
                type="text"
                placeholder="Transaction ID"
                class="input input-bordered w-full max-w-xs text-primary font-bold"
              />
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
