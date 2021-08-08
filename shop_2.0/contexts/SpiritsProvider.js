import { useReducer, createContext, useContext } from "react";

const spirits = [
  {
    id: 1,
    name: "Giness",
    price: 10,
  },
  {
    id: 2,
    name: "Mohito Drink",
    price: 6,
  },
  {
    id: 3,
    name: "Perła Chmielowa",
    price: 4,
  },
];

const SpiritsContext = createContext();

const spiritsReducer = (state, action) => {
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

const SpiritsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(spiritsReducer, spirits);

  return (
    <SpiritsContext.Provider value={{ state, dispatch }}>
      {children}
    </SpiritsContext.Provider>
  );
};

export default SpiritsProvider;

export const useSpirits = () => useContext(SpiritsContext);
