import { useReducer, createContext, useContext } from "react";

const cart = [];

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_SNACKS":
      return state;
    case "ADD_PRODUCT":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          price: action.price,
        },
      ];
    default:
      throw new Error("Something went wrong!");
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cart);

  return (
    <CartProvider.Provider value={{ state, dispatch }}>
      {children}
    </CartProvider.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
