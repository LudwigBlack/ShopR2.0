import Page from "../components/Page";
import { useProducts } from "../contexts/ProductsProvider";

const Drinks = () => {
  const drinksState = useProducts().drinks;

  return <Page productsState={drinksState} />;
};

export default Drinks;
