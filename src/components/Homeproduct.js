import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
// import './Homeproduct.css'

function Homeproduct() {
  const { data, error, isLoading } = useContext(UserContext);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
         <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
  <div className="items">
  {/* <div className="carousel-item active"> */}
  {/* <div className="d-flex justify-content-center"> */}
        {data?.products.map((product) => (
          <div className="item">
            <Link className="link" to={`/product/${product.id}`}>
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
            </Link>
            <h6>{product.title}</h6>
            <div className="item-detais">
              <div className="item-price">Price: ${product.price}</div>
            </div>
          </div>
        ))}
        </div>
        {/* </div> */}
        {/* </div> */}
</div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> 

{/* <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-center">
              {data?.products.slice(0, 6).map((product) => (
                <div className="item mx-2">
                  <Link className="link" to={`/product/${product.id}`}>
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      style={{
                        minWidth: "200px",
                        maxHeight: "200px",
                        marginRight: "10px",
                      }}
                    />
                    <span className="item-rating">
                      Rating: {product.rating}*
                    </span>
                  </Link>
                  <h6>{product.title}</h6>
                  <div className="item-details">
                    <div className="item-price">Price: ${product.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div> */}
    </>
  )
}

export default Homeproduct
