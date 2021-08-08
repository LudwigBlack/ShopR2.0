import { useReducer, createContext, useContext } from "react";

const drinks = [
  {
    id: 1,
    name: "Coca-Cola",
    price: 3,
  },
  {
    id: 2,
    name: "Pepsi",
    price: 3,
  },
  {
    id: 3,
    name: "Oranżada Czerwona",
    price: 4,
  },
];

const DrinksContext = createContext();

const drinksReducer = (state, action) => {
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
    case "DELETE_PRODUCT":
      return state.filter((product) => product.id !== action.id);
    default:
      throw new Error("Something went wrong!");
  }
};

const DrinksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(drinksReducer, drinks);

  return (
    <DrinksContext.Provider value={{ state, dispatch }}>
      {children}
    </DrinksContext.Provider>
  );
};

export default DrinksProvider;

export const useDrinks = () => useContext(DrinksContext);
