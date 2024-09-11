import React, {useContext} from "react";
import {UserContext} from './UserContext'
import { useParams } from "react-router-dom";
// import { StarRatings } from './react-star-ratings';

function ProductDetails() {

  const {id} = useParams();  //get the product id from the react router dom
const {data} = useContext(UserContext)
// const product =  data?.products.find (p => p.id === parseInt(id))
const product = data?.products.find(p => p.id.toString() === id);

// const findPalette = id => seedPalettes.find(palette => palette.id == id);

if(!product){
  return "product is not find"
}

  return (
    <>
      <h1>ProductDetails</h1>
      <img
        src={product.images[0]}
        alt={""}
        style={{
          maxWidth: "200px",
          maxHeight: "200px",
          marginRight: "10px",
        }}
      />
      <span className="item-rating">Rating: {product.rating}*</span>

      <h6>{product.title}</h6>

<div className="item-detais">
  <div className="item-price">Price: ${product.price}</div>
  <div className="item-discountPercentage">
    Discount: {product.discountPercentage}%
  </div>
  </div>
    </>
  );
}

export default ProductDetails;