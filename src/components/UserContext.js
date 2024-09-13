import React, { createContext, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Fetch data from localStorage on load

  const storeitems = JSON.parse(localStorage.getItem("users"));
  const currentstoreitems = JSON.parse(localStorage.getItem("currentuser"));
  // const cartstoreitem = JSON.parse(localStorage.getItem("cart"));

  const [users, setUsers] = useState(storeitems); // we are store the data
  const [currentuser, SetCurrentuser] = useState(currentstoreitems) || null; // []this is for display the current use name
  const [cart, setCart] = useState([]);

  // take the data from localStorage when state changes and set the data in this veriable
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("currentuser", JSON.stringify(currentuser));
  }, [currentuser]);

  const addUser = (userData) => {
    const userExists = users.some(
      (user) =>
        user.firstname === userData.firstname &&
        user.email === userData.email &&
        user.password === userData.password
    );
    if (userExists) {
      return {
        error: "This email ID already exists. Please go to sign-in page.",
      };
    }
    setUsers([...users, userData]);
    SetCurrentuser(userData);
    return { success: true };
  };

  const Exitsuser = (userData) => {
    // const presentuser = users.some (user => user.firstname === userData.firstname  && user.email === userData.email && user.password === userData.password)
    const presentuser = users.find((user) => user.email === userData.email);
    if (presentuser) {
      if (presentuser.password === userData.password) {
        SetCurrentuser(presentuser);
        return { success: true };
      } else {
        return { error: "Incorrect password. Please try again." };
      }
    } else {
      return {
        error:
          "This email ID does not exist. Please go to the Registration page.",
      };
    }
  };
  const logoutUser = () => {
    SetCurrentuser(null);
    // localStorage.removeItem('currentuser');
  };

  //  adding the products to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(
      [...cart, product],
      ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
    );
  };

  const fetchUsers = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryFn: fetchUsers,
  });

  return (
    <UserContext.Provider
      value={{
        users,
        Exitsuser,
        currentuser,
        addUser,
        logoutUser,
        data,
        error,
        isLoading,
        cart,
        addToCart,
        setCart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
