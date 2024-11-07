// src/redux/actions/cartActions.js

// Action pour ajouter un produit au panier
export const addItem = (product) => {
  return {
    type: "ADD_ITEM",
    payload: product, // Le produit à ajouter
  };
};

// Action pour supprimer un produit du panier
export const removeItem = (product) => {
  return {
    type: "REMOVE_ITEM",
    payload: product, // Le produit à supprimer
  };
};
