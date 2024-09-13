import React, { useState } from "react";
import offerbanner3 from "../Assets/ele3.png";
import "./Aboutpage.css";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Aboutpage() {
  const [visible, setVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    toast.success("Form submitted successfully!");
    setVisible(false);
  };

  return (
    <>
      <div className="about-section">
        <h1>About Us</h1>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 carousel-img"
              src={offerbanner3}
              alt="First slide"
            />
          </div>
        </div>

        <div className="about-content">
          <div className="card">
            <h1>Who We Are</h1>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet.
            </h6>
          </div>
          <div className="card">
            <h1>Our Mission</h1>
            <h6>
              Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
              Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
              sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin
              ut ligula vel nunc egestas porttitor.
            </h6>
          </div>
        </div>
        <div className="call-to-action">
          <h1>Want to Know More?</h1>
          <button onClick={() => setVisible(true)} className="btn btn-primary">
            Contact Us
          </button>
          <Dialog
            header="Contact Us"
            visible={visible}
            style={{ width: "40vw" }}
            onHide={() => {
              if (!visible) return;
              setVisible(false);
            }}
          >
            <div className="">
              <div className="container" style={{ height: "20%" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h1>LOG IN</h1>
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
                      <label>Address</label>
                      <input
                        type="text"
                        placeholder="Address"
                        {...register("password", {
                          required: "address is required",
                          minLength: {
                            value: 10,
                            message: "address must be more than 10 words",
                          },
                        })}
                      />
                    </div>
                    <p>{errors.password?.message}</p>
                    <button className="fluid ui button blue">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </Dialog>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Aboutpage;
