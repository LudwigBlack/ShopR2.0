import SnacksProvider from "../contexts/SnacksProvider";
import CartProvider from "../contexts/CartProvider";
import DrinksProvider from "../contexts/DrinksProvider";
import SpiritsProvider from "../contexts/SpiritsProvider";

const Providers = (props) => {
  return (
    <SnacksProvider>
      <DrinksProvider>
        <SpiritsProvider>
          <CartProvider>{props.children}</CartProvider>
        </SpiritsProvider>
      </DrinksProvider>
    </SnacksProvider>
  );
};

export default Providers;
