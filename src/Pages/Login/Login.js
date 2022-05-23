import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  let errorMessage;
  if (error || gError) {
    errorMessage = (
      <p className="text-error font-bold my-2">
        {error?.message || gError?.message}
      </p>
    );
  }

  if (user || gUser) {
    navigate("/allParts");
  }

  const onSubmit = async (data) => {
    // console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  return (
    <section className="flex justify-center items-center h-screen my-48">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100 border border-primary">
        <form onSubmit={handleSubmit(onSubmit)} className="flex-shrink-0">
          <h1 className="text-xl font-bold text-center my-2 text-primary">
            Login
          </h1>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-primary">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required.",
                  },
                  pattern: {
                    value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                    message: "Provide a valid email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt font-bold text-error">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt font-bold text-error">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-primary">
                  Password
                </span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Email is required.",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must have 6 character.",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt font-bold text-error">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt font-bold text-error">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {errorMessage}
            <div className="form-control mt-6">
              <input
                className="btn btn-primary text-white"
                type="submit"
                value="Login"
              />
            </div>
            <p>
              Create a new account{" "}
              <Link to="/signup" className="text-primary font-bold">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-accent m-5 font-bold"
        >
          Continue with google
        </button>
      </div>
    </section>
  );
};

export default Login;
