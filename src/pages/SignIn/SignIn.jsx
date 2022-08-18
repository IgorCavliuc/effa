import React from "react";
import "./SignIn.css";
import SignInImage from "../../assets/images/dg_1-197-1-min.jpg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    resetField,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="sign-in-content content ">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h1>Sign In</h1>
        {/* Email */}
        <input
          {...register("email", {
            required: "Email is require field!",
            pattern: {
              value:
                /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
              message: "Please enter valid email",
            },
          })}
          type="email"
          placeholder="Email"
        />{" "}
        {errors?.email && (
          <div style={{ color: "#3a48f5" }}>*{errors.email.message}</div>
        )}
        {/* password  */}
        <input
          {...register("password", {
            required: "Password is require field!",
            pattern: {
              value:
                /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
              message:
                "Please enter valid email. String contains at least one number, one special character, at least one Latin letter in lower case, at least one uppercase latin letter, string consists of at least 6 of the above.",
            },
          })}
          type="password"
          placeholder="Password"
        />{" "}
        {errors?.password && (
          <div style={{ color: "#3a48f5" }}>*{errors.password.message}</div>
        )}
        <div className="submit-button">
          <Link to="/profile">
            <button>Submit</button>
          </Link>
          <Link to="/signup"> Sign Up</Link>
        </div>
      </form>
      <div className="sign-in-image">
        <img src={SignInImage}></img>
      </div>
    </div>
  );
}

export default SignIn;
