import  './Shoppage.css'
import React, { useContext } from 'react';
import { UserContext } from './UserContext'
// import Dashboard from './Dashboard';
import { Link } from 'react-router-dom';

function Shoppage() {
  const { data, error, isLoading } = useContext(UserContext);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
    <h1>Shop All Items</h1>
   <div className="items">
{data?.products.map(product => (
  <div className="item">
  <Link className='link' to={`/product/${product.id}`}>
  <img src={product.images[0]} alt={''} style={{ maxWidth: '200px', maxHeight: '200px', marginRight: '10px' }}/>
  {/* <span className='item-rating'>Rating: {product.rating}*</span> */}
  </Link>
   {/* <a href=""><img src={product.images[0]} alt={''} style={{ maxWidth: '200px', maxHeight: '200px', marginRight: '10px' }}/><span>Rating: {product.rating}*</span></a> */}
  <h6>{product.title}</h6>
  
  <div className="item-detais">
    <div className="item-price">
    Price: ${product.price}
    </div>
    <div className="item-discountPercentage">
    Discount: {product.discountPercentage}%
      </div>
      {/* <div className="item-rating">
      Rating: {product.rating}*
      </div> */}
  </div>
</div>
))}
</div>

  </>
  );
}

export default Shoppage;