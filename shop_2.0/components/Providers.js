//import SnacksProvider from "../contexts/SnacksProvider";
import CartProvider from "../contexts/CartProvider";
import ProductsProvider from "../contexts/ProductsProvider";
import AdminProvider from "../contexts/AdminProvider";

const Providers = (props) => {
  return (
    <AdminProvider>
      <ProductsProvider>
        <CartProvider>{props.children}</CartProvider>
      </ProductsProvider>
    </AdminProvider>
  );
};

export default Providers;
