import { configureStore } from "@reduxjs/toolkit"; // Importer configureStore de redux-toolkit
import rootReducer from "../redux/reducers"; // Assurez-vous que votre reducer est importé correctement

const store = configureStore({
  reducer: rootReducer, // Utilisation du rootReducer pour combiner tous les reducers
});

export default store;
