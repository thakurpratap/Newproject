// import "./Shoppage.css";
// import React, { useContext } from "react";
// import { UserContext } from "./UserContext";
// import { Link } from "react-router-dom";

// function Shoppage() {
//   const { data, error, isLoading } = useContext(UserContext);

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <>
//       <div className="items">
//         {data?.products.map((product) => (
//           <div className="item">
//             <Link className="link" to={`/product/${product.id}`}>
//               <img
//                 src={product.images[0]}
//                 alt={""}
//                 style={{
//                   maxWidth: "200px",
//                   maxHeight: "200px",
//                   marginRight: "10px",
//                 }}
//               />
//               <span className="item-rating">Rating: {product.rating}*</span>
//             </Link>
//             <h6>{product.title}</h6>
//             <div className="item-detais">
//               <div className="item-price">Price: ${product.price}</div>
//               <div className="item-discountPercentage">
//                 Discount: {product.discountPercentage}%
//               </div>
//               {/* <div className="item-rating">Rating: {product.rating}*</div> */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Shoppage;







import "./Shoppage.css";
import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

function Shoppage() {
  const { data, error, isLoading } = useContext(UserContext);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Filter products based on the search query
  const filteredProducts = data?.products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query
        />
        <button>Search</button>
      </div>

      <div className="items">
        {filteredProducts?.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="item" key={product.id}>
              <Link className="link" to={`/product/${product.id}`}>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  style={{
                    maxWidth: "200px",
                    maxHeight: "200px",
                    marginRight: "10px",
                  }}
                />
                <span className="item-rating">Rating: {product.rating}*</span>
              </Link>
              <h6>{product.title}</h6>
              <div className="item-details">
                <div className="item-price">Price: ${product.price}</div>
                <div className="item-discountPercentage">
                  Discount: {product.discountPercentage}%
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </>
  );
}

export default Shoppage;

