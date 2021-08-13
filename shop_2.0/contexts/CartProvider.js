import { useReducer, createContext, useContext } from "react";

const cart = {
  "1Snacks": {
    id: 1,
    category: "Snacks",
    name: "Orzeszki solone",
    price: 8,
    quantity: 1,
  },
  "2Snacks": {
    id: 2,
    category: "Snacks",
    name: "Batonik Mars",
    price: 3,
    quantity: 1,
  },
};

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_SNACKS":
      return state;
    case "ADD_PRODUCT": {
      const key = action.id + action.category;
      if (!state[key]) {
        return {
          ...state,
          [key]: {
            id: action.id,
            category: action.category,
            name: action.name,
            price: action.price,
            quantity: 1,
          },
        };
      } else {
        return {
          ...state,
          [key]: {
            ...state[key],
            quantity: state[key].quantity + 1,
          },
        };
      }
    }
    default:
      throw new Error("Something went wrong!");
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cart);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
