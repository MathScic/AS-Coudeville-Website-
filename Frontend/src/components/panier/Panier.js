// src/components/Panier.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/actions/cartActions";

const Panier = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const handleRemoveFromCart = (item) => {
    dispatch(removeItem(item)); // Supprimer l'article du panier
  };

  return (
    <div>
      <h1>Panier</h1>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.nom} - {item.prix}€
                <button onClick={() => handleRemoveFromCart(item)}>
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
          <p>Total : {total}€</p>
        </div>
      )}
    </div>
  );
};

export default Panier;
