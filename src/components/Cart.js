import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import "./Cart.css";

function Cart() {
  const { cart, error, isLoading } = useContext(UserContext);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="cartitems">
        <div className="cartitems-formt-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          {/* <p>Quantity</p> */}
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {cart?.map((cartproduct) => (
          <div className="cartitems-format cartitems-formt-main">
            <img
              src={cartproduct.images[0]}
              alt={""}
              className="carticon-product-icon"
              style={{
                maxHeight: "100px",
                maxWidth: "80px",
              }}
            />
            {/* <img src="" alt="" className="carticon-product-icon" /> */}
            <p>{cartproduct.brand}</p>
            <p>${cartproduct.price}</p>
            {/* <button className="cartitems-quantity">{cartproduct.id}</button> */}
            <p>{cartproduct.price}</p>
            <img src="" alt="" className="remove-cart-itmes" />
          </div>
        ))}
        ;
        <hr />
      </div>
    </>
  );
}

export default Cart;
