import axios from "axios";

export const fetchProducts = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/api/boutique")
      .then((response) => {
        dispatch({
          type: "FETCH_PRODUCTS_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_PRODUCTS_FAILURE",
          payload: error.message,
        });
      });
  };
};
