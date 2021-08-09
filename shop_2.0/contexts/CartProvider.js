import { useReducer, createContext, useContext } from "react";

const cart = [
  {
    id: 1,
    category: "Snacks",
    name: "Orzeszki solone",
    price: 8,
  },
  {
    id: 2,
    category: "Snacks",
    name: "Batonik Mars",
    price: 3,
  },
];

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
          category: action.category,
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
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
