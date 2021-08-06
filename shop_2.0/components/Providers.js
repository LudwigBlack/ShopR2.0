import SnacksProvider from "../contexts/SnacksProvider";
import CartProvider from "../contexts/CartProvider";

const Providers = (props) => {
  return (
    <SnacksProvider>
      <CartProvider>{props.children}</CartProvider>
    </SnacksProvider>
  );
};

export default Providers;
