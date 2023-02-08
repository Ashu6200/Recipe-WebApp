import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  wish: {
    wishItems: localStorage.getItem("wishItems")
      ? JSON.parse(localStorage.getItem("wishItems"))
      : [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_WISH": {
      const newItem = action.payload;
      const existsItem = state.wish.wishItems.find(
        (item) => item._id === newItem._id
      );
      const wishItems = existsItem
        ? state.wish.wishItems.map((item) =>
          item._id === existsItem._id ? newItem : item
        )
        : [...state.wish.wishItems, newItem];
      localStorage.setItem("wishItems", JSON.stringify(wishItems));
      return {
        ...state,
        wish: {
          ...state.wish,
          wishItems,
        },
      };
    }

    case "REMOVE_FROM_WISH": {
      const wishItems = state.wish.wishItems.filter(
        (item) => item._id !== action.payload._id
      );
      localStorage.setItem("wishItems", JSON.stringify(wishItems));
      return {
        ...state,
        wish: {
          ...state.wish,
          wishItems,
        },
      };
    }

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    state,
    dispatch,
  };

  return <Store.Provider value={value}> {props.children} </Store.Provider>;
}
