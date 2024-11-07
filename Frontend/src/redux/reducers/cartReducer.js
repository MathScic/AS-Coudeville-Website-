// src/redux/reducers/cartReducer.js
const initialState = {
  items: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const itemToAdd = action.payload;
      const updatedItems = [...state.items, itemToAdd];
      const updatedTotal = updatedItems.reduce(
        (sum, item) => sum + item.prix,
        0
      );
      return {
        ...state,
        items: updatedItems,
        total: updatedTotal,
      };
    case "REMOVE_ITEM":
      const updatedItemsAfterRemove = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      const updatedTotalAfterRemove = updatedItemsAfterRemove.reduce(
        (sum, item) => sum + item.prix,
        0
      );
      return {
        ...state,
        items: updatedItemsAfterRemove,
        total: updatedTotalAfterRemove,
      };
    default:
      return state;
  }
};

export default cartReducer;
