import { useCart } from "../contexts/CartProvider";
//import { useSnacks } from "../contexts/SnacksProvider";

import styles from "../styles/Home.module.css";

// { id, category, name, price }, { setShow }

export const Product = ({ id, category, name, price, setShow }) => {
  const { dispatch } = useCart();

  // Ważna uwaga!!!
  // Przekazujemy setShow i tam jest funkcja playmodal i trzeba
  // wywołać setShow aby wywołać tą funkcję (ciągle się w tym myle)

  const handleCLick = () => {
    dispatch({ id, category, name, price, type: "ADD_PRODUCT" });
  };
  return (
    <div className={styles.productsWrapper}>
      <p>{name}</p>
      <p>{`${price} zł`}</p>
      <div>
        <button
          onClick={() => {
            handleCLick(), setShow(name);
          }}
          // onClick={setShow}
          className={styles.buyButton}
        >
          Kup
        </button>
      </div>
    </div>
  );
};
