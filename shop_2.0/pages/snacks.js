import Page from "../components/Page";
import { useProducts } from "../contexts/ProductsProvider";

const Snacks = () => {
  const snacksState = useProducts().snacks;

  return <Page productsState={snacksState} />;
};

export default Snacks;
