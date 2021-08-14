//import SnacksProvider from "../contexts/SnacksProvider";
import CartProvider from "../contexts/CartProvider";
import ProductsProvider from "../contexts/ProductsProvider";
//import SpiritsProvider from "../contexts/SpiritsProvider";

const Providers = (props) => {
  return (
    <ProductsProvider>
      <CartProvider>{props.children}</CartProvider>
    </ProductsProvider>
  );
};

export default Providers;
