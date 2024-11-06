// src/redux/cartReducer.js
const initialState = {
  items: [], // Liste des produits dans le panier
  total: 0, // Total de la commande
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price, // Ajouter le prix du produit
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id), // Retirer l'article du panier
        total: state.total - action.payload.price, // Soustraire le prix du produit retiré
      };
    default:
      return state;
  }
};

export default cartReducer;
