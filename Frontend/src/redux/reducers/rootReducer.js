import { combineReducers } from "redux";
import boutiqueReducer from "./boutiqueReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  boutique: boutiqueReducer,
  cart: cartReducer,
});

export default rootReducer;
