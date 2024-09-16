import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from "./UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signin({ setSigninVisible, setSignupVisible }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { Exitsuser } = useContext(UserContext);
  const [formError, setFormError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const result = Exitsuser(data);
    if (result.success) {
      navigate("/");
      setSigninVisible(false)
    } else {
      setFormError(result.error);
      toast.success(result.error);
    }
  };

  return (
    <>
      {/* full-body */}
      <div className="">
        <div className="container" style={{ height: "50%" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>LOG IN</h1>
            <div className="ui divider"></div>
            <div className="ui form">
              <div className="field">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    // required : true,
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "This is not a valid email",
                    },
                  })}
                />
              </div>
              <p>{errors.email?.message}</p>
              <div className="field">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 4,
                      message: "Password must be more than 4 characters",
                    },
                    maxLength: {
                      value: 10,
                      message: "Password cannot exceed more than 10 characters",
                    },
                  })}
                />
              </div>
              <p>{errors.password?.message}</p>
              <button className="fluid ui button blue">Submit</button>
            </div>
            {formError && <p style={{ color: "red" }}>{formError}</p>}
            <div className="text">
              <span>
                Not a member?{" "}
                <button
                  type="button"
                  className="link-button"
                  onClick={() => {
                    setSigninVisible(false);
                    setSignupVisible(true);
                  }}
                >
                  Sign Up
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Signin;
