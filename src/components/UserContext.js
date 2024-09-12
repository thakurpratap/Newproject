import React, { createContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  let [users, setUsers] = useState([]); // we are store the data 
  const [currentuser, SetCurrentuser] = useState(null); // []this is for display the current use name 

  const [cart, setCart] = useState([]);

  const addUser = (userData) => {
    // const userExists = users.some(user => user.email === userData.email);
    // console.log('Checking if user exists:', userData);
    
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
    // localStorage.setItem('users', JSON.stringify([...users, userData]))
    // SetCurrentuser([userData]);
    SetCurrentuser(userData);
   
    return { success: true };
  };

  const Exitsuser = (userData) => {
    //  users = JSON.parse(localStorage.getItem('users'))

    // const presentuser = users.some (user => user.firstname === userData.firstname  && user.email === userData.email && user.password === userData.password)
    const presentuser = users.find((user) => user.email === userData.email);
    if (presentuser) {
      if (presentuser.password === userData.password) {
        SetCurrentuser(presentuser);
        // localStorage.setItem('currentuser', JSON.stringify(presentuser))
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
    localStorage.clear();
  };


    //  adding the products to the cart
    const addToCart = (product) => {
      setCart ([...cart, product]);
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
        cart, // Provide cart state
        addToCart, // Provide add to cart function
        setCart,   // Expose setCart
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
