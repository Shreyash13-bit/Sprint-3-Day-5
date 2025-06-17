import React from 'react';
import './ProductCard.css';
const ProductCard = ({ title, price, description }) => {
  const cardStyle = {
    border: '1px solid black',
    padding: '15px',
    margin: '10px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
  };
  return (
    <div style={cardStyle} className="product-card">
      <h2 className="product-title">{title}</h2>
      <p className="product-price">Price: ${price}</p>
      <p className="product-desc">{description}</p>
    </div>
  );
};
ProductCard.defaultProps = {
  title: 'Unknown Product',
  price: 0,
  description: 'No description available.'
};
export default ProductCard;
