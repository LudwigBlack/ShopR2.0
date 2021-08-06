import { useCart } from "../contexts/CartProvider";
//import { useSnacks } from "../contexts/SnacksProvider";

import styles from "../styles/Home.module.css";

export const Product = ({ id, name, price }) => {
  const dispatch = useCart().dispatch;

  const handleCLick = () => {
    console.log(id, name, price);
    dispatch({ id, type: "ADD_PRODUCT" });
  };
  return (
    <div className={styles.productsWrapper}>
      <p>{name}</p>
      <p>{`${price} zł`}</p>
      <button onClick={handleCLick}>Kup</button>
    </div>
  );
};
