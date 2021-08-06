import SnacksProvider from "../contexts/SnacksProvider";
import CartProvider from "../contexts/CartProvider";

export const Providers = (props) => {
  console.log("shieeeet");
  return (
    <SnacksProvider>
      <CartProvider>{props.children}</CartProvider>
    </SnacksProvider>
  );
};
