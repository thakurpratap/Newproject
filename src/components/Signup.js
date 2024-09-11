import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from "./UserContext";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { addUser } = useContext(UserContext);
  const [formError, setFormError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const result = addUser(data);
    if (result.error) {
      setFormError(result.error);
    } else {
      setFormError(null);
      navigate("/");
    }
  };

  return (
    <>
      <div className="full-body">
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Registration </h1>
            <div className="ui divider"></div>
            <div className="ui form">
              <div className="field">
                <label>First name</label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  {...register("firstname", {
                    required: "Firstname is required",
                  })}
                />
              </div>
              <p>{errors.firstname?.message}</p>
              <div className="field">
                <label>Last name</label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  {...register("lastname", {
                    required: "Lastname is required",
                  })}
                />
              </div>
              <p>{errors.lastname?.message}</p>
              <div className="field">
                <label>Phone number</label>
                <input
                  type="text"
                  name="phonenumber"
                  placeholder="Phonenumber"
                  {...register("phonenumber", {
                    required: "Phonenumber is required",
                    minLength: {
                      value: 10,
                      message: "Password must be more than 4 characters",
                    },
                    maxLength: {
                      value: 10,
                      message: "Password cannot exceed more than 10 characters",
                    },
                  })}
                />
              </div>
              <p>{errors.phonenumber?.message}</p>
              <div className="field">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
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
              {formError && <p style={{ color: "red" }}>{formError}</p>}
              <button className="fluid ui button blue">Submit</button>
            </div>
            <div className="text">
              <span>
                Already have an account?{" "}
                <Link className="link" to="/signin">
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
