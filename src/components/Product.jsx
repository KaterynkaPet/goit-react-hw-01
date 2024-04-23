// src/components/Product.jsx
import React from "react";

const Product = ({
  name,
  imgUrl = "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640",
  price,
}) => (
  <div>
		<h2>{name}</h2>
    <img src={imgUrl} alt={name} width="480" />
    <p>Price: {price} credits</p>
  </div>
);
export default Product;

// Оголошення
const Card = ({ children }) => {
  return <div>{children}</div>;
};

// Використання
<Card>Text between opening and closing tag</Card>
