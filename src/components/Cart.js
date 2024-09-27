import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import "./Cart.css";



function Cart() {
  const { cart, error, isLoading,setCart , updatedCart} = useContext(UserContext);
  // const [number, setNumber] = useState(1)

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

    // Function to remove an item from the cart 
    const handleRemoveItem = (id) => {
      const updatedCart = cart.filter((cartProduct) => cartProduct.id !== id);
      setCart(updatedCart); // Update the cart usestate veriable
    };

  //   const updateQuantity = (id, value) => {
	// 		// cart?.map((item) => item.id === id) &&
	// 		setCart((prev) => prev + value);
	// };

  const updateQuantity = (id, value) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity : item.quantity + value } : item
    )
    // .filter((item) => item.quantity > 0); // Prevent negative quantities
    setCart(updatedCart);
  };

  return (
    <>
      <div className="cartitems">
        <div className="cartitems-formt-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Total</p>
          <p>Quantity</p> 
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
            <p>{cartproduct.brand}</p>
            <p>${cartproduct.price}</p>
            {/* <p>{cartproduct.price}</p> */}
            <p>${(cartproduct.price * cartproduct.quantity).toFixed(2)}</p>
            <div className='counter'>
      <button onClick={() => updateQuantity(cartproduct.id, -1)} disabled={cartproduct.id <= 1}>-</button>
      <p className="quantity">{cartproduct.quantity}</p>
      <button onClick={() => updateQuantity(cartproduct.id, 1)}>+</button>
      </div>
            {/* <p>{cartproduct.quantity}</p> */}
            {/* <img src="" alt="" className="remove-cart-itmes" /> */}
            <button
              onClick={() => handleRemoveItem(cartproduct.id)}
              className="remove-cart-items"
            >
              Remove
            </button>

          </div>
        ))}
        ;
        <hr />
      </div>
    </>
  );
}

export default Cart;
