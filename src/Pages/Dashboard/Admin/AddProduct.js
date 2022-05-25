import { signOut } from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // console.log(data);
    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/login");
        }
        return res.json();
      })
      .then((data) => {
        toast.success("Product added successfully. Alhamdulillah!!");
        reset();
      });
  };

  return (
    <section>
      <div className="card w-100 bg-primary text-primary-content">
        <h2 className="text-2xl py-2 px-8 font-bold uppercase">
          Add a new product
        </h2>
        <div className="card-body flex justify-center items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card flex-shrink-0 w-100 lg:w-9/12 shadow-2xl bg-base-100 border border-primary"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-primary">
                    Product's Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="product_name"
                  className="input input-bordered text-primary font-bold"
                  {...register("product_name", {
                    required: {
                      value: true,
                      message: "Product name is required.",
                    },
                  })}
                />
                <label className="label">
                  {errors.product_name?.type === "required" && (
                    <span className="label-text-alt font-bold text-error">
                      {errors.product_name.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-primary">
                    Product Image
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Product image"
                  className="input input-bordered text-primary font-bold"
                  {...register("product_image", {
                    required: {
                      value: true,
                      message: "Product image is required.",
                    },
                  })}
                />
                <label className="label">
                  {errors.product_image?.type === "required" && (
                    <span className="label-text-alt font-bold text-error">
                      {errors.product_image.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-primary">
                    Short Description
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Product description"
                  className="input input-bordered text-primary font-bold"
                  {...register("product_description", {
                    required: {
                      value: true,
                      message: "Product description is required.",
                    },
                  })}
                />
                <label className="label">
                  {errors.product_description?.type === "required" && (
                    <span className="label-text-alt font-bold text-error">
                      {errors.product_description.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-primary">
                    Minimum Order Quantity
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Product minimum order quantity"
                  className="input input-bordered text-primary font-bold"
                  {...register("minimum_order_quantity", {
                    required: {
                      value: true,
                      message: "Product minimum order quantity is required.",
                    },
                  })}
                />
                <label className="label">
                  {errors.minimum_order_quantity?.type === "required" && (
                    <span className="label-text-alt font-bold text-error">
                      {errors.minimum_order_quantity.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-primary">
                    Available Quantity
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="Product available quantity"
                  className="input input-bordered text-primary font-bold"
                  {...register("available_quantity", {
                    required: {
                      value: true,
                      message: "Product available quantity is required.",
                    },
                  })}
                />
                <label className="label">
                  {errors.available_quantity?.type === "required" && (
                    <span className="label-text-alt font-bold text-error">
                      {errors.available_quantity.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-primary">
                    Product Price (per unit price)
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="product_price"
                  className="input input-bordered text-primary font-bold"
                  {...register("product_price", {
                    required: {
                      value: true,
                      message: "Product price is required.",
                    },
                  })}
                />
                <label className="label">
                  {errors.product_price?.type === "required" && (
                    <span className="label-text-alt font-bold text-error">
                      {errors.product_price.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary text-white"
                  type="submit"
                  value="Add Product"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
