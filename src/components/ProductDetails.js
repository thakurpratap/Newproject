import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
// import { StarRatings } from './react-star-ratings';

function ProductDetails() {
  const { id } = useParams(); //get the product id from the react router dom
  const { data, addToCart } = useContext(UserContext);
  // const product =  data?.products.find (p => p.id === parseInt(id))
  const product = data?.products.find((p) => p.id.toString() === id);

  // const findPalette = id => seedPalettes.find(palette => palette.id == id);
  if (!product) {
    return "product is not find";
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <>
      <div className="productdetailsdisplay">
        <div className="productdetaildisplay-left">
          <div className="productimg-list">
            <img src={product.images[1]} alt="" />
          </div>
          <div className="productdisplay-img">
            <img
              src={product.images[0]}
              alt=""
              className="productdisplay-main-img"
            />
          </div>
        </div>

        <div className="productdetaildisplay-right">
          <h1>{product.title}</h1>

          <div className="product-price">
            <div className="price">Price: ${product.price}</div>
            <div className="product-discount">
              {product.discountPercentage}% Off
            </div>
          </div>

          <div className="product-description">{product.description}</div>
          <div className="add-to-card">
            <button onClick={handleAddToCart}>ADD TO CART</button>
            <h6 className="product-category">
              <span>category : {product.category}</span>
            </h6>
            <h6 className="product-category">
              <span>Tag : {product.tags}</span>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
