import { createStore, applyMiddleware } from "redux";
import rootReducer from "../redux/reducers/rootReducer";
import { thunk } from "redux-thunk"; // Modification ici

const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // Assure-toi d'utiliser `applyMiddleware` pour appliquer `thunk`
);

export default store;
