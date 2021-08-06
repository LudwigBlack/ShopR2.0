import { CartProduct } from "../components/CartProduct";
import { useCart } from "../contexts/CartProvider";

import styles from "../styles/Home.module.css";

const Cart = () => {
  const cartState = useCart();
  // const handleCLick = () => onClickHandler({ id, type: "ADD_PRODUCT" });

  const allProducts = cartState.state.map((product) => (
    <CartProduct key={product.id} {...product} />
  ));

  return (
    <div className={styles.cartPage}>
      <main className={styles.mainWrapper}>
        <header>Nazwa Produktus</header>
        <div className={styles.cartProducts_Wrapper}>
          <div>{allProducts}</div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
