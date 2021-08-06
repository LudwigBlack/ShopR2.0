import SnacksProvider from "../contexts/SnacksProvider";
import CartProvider from "../contexts/CartProvider";

export const Providers = (props) => {
<<<<<<< Updated upstream
  console.log("shieeeet");
=======
>>>>>>> Stashed changes
  return (
    <SnacksProvider>
      <CartProvider>{props.children}</CartProvider>
    </SnacksProvider>
  );
};
