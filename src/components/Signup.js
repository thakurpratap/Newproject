import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from "./UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup({ setSigninVisible, setSignupVisible }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const { addUser } = useContext(UserContext);
  const [formError, setFormError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const result = addUser(data);
    if (result.error) {
      setFormError(result.error);
      toast.success(result.error);
    } else {
      setFormError(null);
      setSignupVisible(false);
      navigate("/");
    }
  };

  return (
    <>
      {/* full-body */}
      <div className="">
        <div className="container" style={{ height: "50%" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Registration </h1>
            <div className="ui divider"></div>
            <div className="ui form">
              <div className="field">
                <label>First name <span style={{color : "red"}}>*</span></label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  {...register("firstname", {
                    required: "Firstname is required",
                    pattern: {
                      value:  /^[a-zA-Z ]*$/,
                      message: "Only alphabets are allowed",
                    },
                    minLength:{
                      value: 4,
                      message: "firstname must be more than 4 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "firstname cannot exceed more than 20 characters",
                    },
                  })}
                />
              </div>
              <p>{errors.firstname?.message}</p>
              {/* {errors?.firstName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )} */}
              <div className="field">
                <label>Last name <span style={{color : "red"}}>*</span></label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  {...register("lastname", {
                    required: "Lastname is required",
                    pattern: {
                      value:  /^[a-zA-Z ]*$/,
                      message: "Only alphabets are allowed",
                    },
                    minLength:{
                      value: 4,
                      message: "Lastname must be more than 4 characters",
                    },
                       maxLength: {
                      value: 10,
                      message: "Lastname cannot exceed more than 10 characters",
                    },
                  })}
                />
              </div>
              <p>{errors.lastname?.message}</p>
              <div className="field">
                <label>Phone number <span style={{color : "red"}}>*</span></label>
                <input
                  // type="number"
                  name="phonenumber"
                  type="tel"
                  placeholder="Phonenumber"
                  {...register("phonenumber", {
                    required: "Phonenumber is required",
                    pattern:{
                      value: /^(0|[6-9]\d*)(\.\d+)?$/,
                      // /^[6-9]\d{9}$/,
                      message : "phone number canot accept 0 to 5 number"
                      // message: "Phone number must be starting with 6, 7, 8, or 9",
                    },
                     // validNumber: (value) => /^[6-9]\d{9}$/.test(value) || "Phone number must be 10 digits",
                      // startsWithInvalidDigit: (value) => !/^[0-5]/.test(value) || "Phone number cannot start with 0 to 5",
                    // pattern: {
                    //   value: /^[0-9]{10}$/,
                    //   message: "Phone number must be 10 digits",
                    // },

                    // minLength: {
                    //   value: 10,
                    //   message: "Phone number must be 10 digits",
                    // },
                    // maxLength: {
                    //   value: 10,
                    //   message: "Phone number cannot exceed more than 10 digits",
                    // },
                  })}
                />
              </div>
              <p>{errors.phonenumber?.message}</p>
              <div className="field">
                <label>Email <span style={{color : "red"}}>*</span></label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      // value: /^\S+@\S+$/i,
                      value :  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "This is not a valid email",
                    },
                  })}
                />
              </div>
              <p>{errors.email?.message}</p>
              <div className="field">
                <label>Password <span style={{color : "red"}}>*</span></label>
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
              {formError && <p style={{ color: "red" }}>{formError}</p>}
              <button className="fluid ui button blue">Submit</button>
            </div>
            <div className="text">
              <span>
                Already have an account?{" "}
                <button
                  type="button"
                  className="link-button"
                  onClick={() => {
                    setSignupVisible(false);
                    setSigninVisible(true);
                  }}
                >
                  Login
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

export default Signup;
