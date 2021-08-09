import { useReducer, createContext, useContext } from "react";

const snacks = [
  {
    id: "1",
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
  {
    id: 3,
    category: "Snacks",
    name: "Paluszki słone",
    price: 5,
  },
];

const SnacksContext = createContext();

const snacksReducer = (state, action) => {
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
    case "DELETE_PRODUCT":
      return state.filter((product) => product.id !== action.id);
    default:
      throw new Error("Something went wrong!");
  }
};

const SnacksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(snacksReducer, snacks);

  return (
    <SnacksContext.Provider value={{ state, dispatch }}>
      {children}
    </SnacksContext.Provider>
  );
};

export default SnacksProvider;

export const useSnacks = () => useContext(SnacksContext);
