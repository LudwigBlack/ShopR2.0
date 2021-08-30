import { CartProduct } from "../components/CartProduct";
import { useCart } from "../contexts/CartProvider";

import styles from "../styles/Home.module.css";

const Cart = () => {
  const cartState = useCart();
  // const handleCLick = () => onClickHandler({ id, type: "ADD_PRODUCT" });

  // const filteredState = new Set();

  // const filteredArr = cartState.state.filter((el) => {
  //   const duplicate = filteredState.has(el.id);
  //   filteredState.add(el.id);
  //   return !duplicate;
  // });

  const allProducts = Object.entries(cartState.state);

  console.log(allProducts);

  const newProducts = allProducts.map((product) => (
    <CartProduct key={product[0]} {...product[1]} />
  ));

  const totalValue = allProducts.reduce(
    (prev, next) => prev + next[1].price,
    0
  );

  //console.log(totalValue);

  return (
    <div className={styles.cartPage}>
      <main className={styles.mainWrapper}>
        <div className={styles.cart_header}>
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Actions</div>
          <div>Total Price</div>
        </div>
        <div className={styles.cartProducts_Wrapper}>
          <div>{newProducts}</div>
        </div>
        <div className={styles.total_value_wrapper}>
          <div>
            <p>Total Cart Value</p>
            <p>{totalValue}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
