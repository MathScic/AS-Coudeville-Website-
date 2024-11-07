import React from "react";
import "../ProductCard/ProductCard.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartAction";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price} €</p>
      <button onClick={handleToCart}>Ajouter au panier</button>
    </div>
  );
};

export default ProductCard;
