import Page from "../components/Page";
import { useProducts } from "../contexts/ProductsProvider";

const Spirits = () => {
  const spiritsState = useProducts().spirits;

  return <Page productsState={spiritsState} />;
};

export default Spirits;
