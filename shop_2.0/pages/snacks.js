import { Product } from "../components/Product";
import { useSnacks } from "../contexts/SnacksProvider";

const Snacks = () => {
  const snacksState = useSnacks();
  // const handleCLick = () => onClickHandler({ id, type: "ADD_PRODUCT" });

  const allProducts = snacksState.state.map((product) => (
    <Product key={product.id} {...product} />
  ));

  return <div>{allProducts}</div>;
};

export default Snacks;
