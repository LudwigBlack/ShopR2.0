import { useReducer, createContext, useContext } from "react";

const snacks = [
  {
    id: 1,
    name: "Orzeszki solone",
    price: 8,
  },
  {
    id: 2,
    name: "Batonik Mars",
    price: 3,
  },
  {
    id: 3,
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
          name: action.name,
          price: action.price,
        },
      ];
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
