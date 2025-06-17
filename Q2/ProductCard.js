import React from 'react';
const ProductCard = ({ title, price, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <p>{description}</p>
    </div>
  );
};
ProductCard.defaultProps = {
  title: "Unknown Product",
  price: 0,
  description: "No description available."
};
export default ProductCard;
