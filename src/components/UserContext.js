import React, { createContext, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Fetch data from localStorage on load

  const storeitems = JSON.parse(localStorage.getItem("users")) || [];
  const currentstoreitems = JSON.parse(localStorage.getItem("currentuser")) || null;
  // const contactuserstoredata = JSON.parse(localStorage.getItem('contactuser'))
  // const cartstoreitem = JSON.parse(localStorage.getItem("cart"));

  const [users, setUsers] = useState(storeitems); // we are store the data
  const [currentuser, SetCurrentuser] = useState(currentstoreitems); // []this is for display the current use name
  const [cart, setCart] = useState([]);
  const [contactuser , setContactuser] = useState([]) // contactuserstoredata

  // take the data from localStorage when state changes and set the data in this veriable
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("currentuser", JSON.stringify(currentuser));
  }, [currentuser]);

// useEffect(() =>{
//   localStorage.setItem('contactuser', JSON.stringify(contactuser))
// },[contactuser])

  const addUser = (userData) => {
    const userExists = users.some(
      (user) =>
        // user.firstname === userData.firstname &&
        user.email === userData.email
        //  &&
        // user.password === userData.password
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
    const productcart = cart.find((cartitems) => cartitems.id === product.id )
    // if(productcart){
    //  const updatedProduct = {
    //     ...product,
    //     quantity : product.quantity + 1
    //   }
    //   setCart([...cart, updatedProduct]);
    //   console.log(cart, updatedProduct, "updatedProduct")
    // }else{
    //   setCart([...cart, product]);
    // }
    if (productcart) {
      // Update the product quantity in the cart
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCart(updatedCart);
    } else {
      // Add the product to the cart with an initial quantity of 1
      setCart([...cart,  { ...product, quantity : 1} ]);
    }
  };

  const contactusers = (contactuserdata) =>{
    const contactuserExists = contactuser.some((user) => user.email === contactuserdata.email )
    if(contactuserExists){
      return {error :  "This email ID Already Present"}
    }
    setContactuser([...contactuser, contactuserdata])
    return { success: true };
  }

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
        contactusers,
        setUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};