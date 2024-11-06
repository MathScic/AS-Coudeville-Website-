// src/redux/reducers.js
import { combineReducers } from "redux"; // Importer combineReducers
import cartReducer from "./cartReducer"; // Importer ton cartReducer (ou d'autres reducers si nécessaire)

const rootReducer = combineReducers({
  cart: cartReducer, // Ajouter ici tous les reducers pour les différentes parties de ton application
  // Ajoute d'autres reducers au fur et à mesure si tu en as
});

export default rootReducer;
