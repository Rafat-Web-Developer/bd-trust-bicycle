import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
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
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border border-primary"
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
                  className="input input-bordered"
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
                    Product Price
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="product_price"
                  className="input input-bordered"
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
