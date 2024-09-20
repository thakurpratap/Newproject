import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from "./UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dialog } from "primereact/dialog";

function Signin({ setSigninVisible, setSignupVisible }) {
  const {
    register,
    handleSubmit,
    // reset ,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const { Exitsuser, users } = useContext(UserContext);
  const [forgetPasswordVisible, setForgetPasswordVisible] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [formError, setFormError] = useState(null);

console.log(resetEmail , "resetmail id ");

  const navigate = useNavigate();


  const onSubmit = (data) => {
    const result = Exitsuser(data);
    if (result.success) {
      navigate("/");
      setSigninVisible(false);
      toast.success("successfully login");

    } else {
      setFormError(result.error);
      toast.error(result.error);
    }
  };

  // console.log(users , "passs")
  const handlePasswordReset = () => {
    const user = users.find((u) => u.email === resetEmail);
    // console.log(user , "passs")
    if (user) {
      const newPassword = prompt("Enter your new password:");
      if(newPassword){
        const updatedUsers = users.find((u) => u.password = newPassword );
        const userupdated = []
        userupdated.push(updatedUsers)
         localStorage.setItem('users', JSON.stringify(userupdated)) 
        alert("Password reset successfully!");
        setForgetPasswordVisible(false);
}
    } else {
      alert("No account found with this email address.");
    }
  };

       // Find the user and update their password
    // const updatedUsers = users.map((u) => {
    //   if (u.email === user.email) {
    //     return { ...u, password: newPassword }; // Update the password for the matched user
    //   }
    //   return u; // Return the rest of the users as is
    // });

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
                <label>
                  Email <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    // required : true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
              <button className="fluid ui button blue" style={{marginBottom : "10px"}}>Submit</button>
            </div>
            {formError && <p style={{ color: "red" }}>{formError}</p>}
            {/* Forget Password Section */}
            <span>Forget password?</span>
            <button
              type="button"
              onClick={() => setForgetPasswordVisible(true)}
              className="link-button"
            >
              Click here
            </button>
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

 {/* Forget Password Dialog */}

 {forgetPasswordVisible && (
 <Dialog
        header="Forget Password"
        visible={forgetPasswordVisible}
        style={{ width: "30vw"}}
        onHide={() => setForgetPasswordVisible(false)}
      >
      {/* <div className="forget-password-modal"> */}
      <div className="ui form">
      {/* <h2 style={{marginBottom : "20px"}}>Forget Password</h2> */}
              <div className="field">
                <label>
                Enter your email :
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  // {...register("email", {
                  //   required: "Email is required",
                  //   // required : true,
                  //   pattern: {
                  //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  //     message: "This is not a valid email",
                  //   },
                  // })}
                />
              </div>
              <p>{errors.email?.message}</p>
              <button onClick={handlePasswordReset}>Submit</button>
          <button onClick={() => setForgetPasswordVisible(false)}>Cancel</button>
              </div>
        </Dialog>
      )}
  
    </>
  );
}

export default Signin;






// if (newPassword) {
//   const updatedUsers = users.map((u) =>
//     u.email === resetEmail ? { ...u, password: newPassword } : u
//   );

// const handlePasswordReset = () => {
//   // Find the user by the email entered in the form
//   const user = users.find((u) => u.email === resetEmail);

//   // If user is found, prompt them to enter a new password
//   if (user) {
//     const newPassword = prompt("Enter your new password:");

//     // If they enter a new password, update it in the users list
//     if (newPassword) {
//       const updatedUsers = users.map((u) =>
//         u.email === resetEmail ? { ...u, password: newPassword } : u
//       );

//       // Update the state with the new list of users
//       setUsers(updatedUsers);

//       // Show a success message
//       alert("Password reset successfully!");

//       // Close the reset password form
//       setForgetPasswordVisible(false);
//     }
//   } else {
//     // If no user is found with the email, show an error message
//     alert("No account found with this email address.");
//   }
// };