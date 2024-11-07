import React from "react";
import { useSelector } from "react-redux";

const CartComponent = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  return (
    <div>
      <h2>Votre panier</h2>
      {cartItems.length === 0 ? (
        <p>Le panier est vide</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}€
            </li>
          ))}
        </ul>
      )}
      <p>Total : {total}€</p>
    </div>
  );
};

export default CartComponent;
