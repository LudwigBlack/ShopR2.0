//import { useRouter } from "next/router";
import { useCart } from "../contexts/CartProvider";
import styles from "../styles/Home.module.css";

function ActionButtons({ product }) {
  console.log(product);
  const { dispatch } = useCart();

  const handleAddOne = () => {
    //console.log(id);
    dispatch({ product, type: "ADD_QUANTITY" });
  };

  const handleSubstractOne = () => {
    //console.log(id);
    dispatch({ product, type: "SUBSTRACT_QUANTITY" });
  };

  const handleDelete = () => {
    //console.log(id);
    dispatch({ product, type: "DELETE_PRODUCT" });
  };

  return (
    <div className={styles.actionButtonsWrapper}>
      <button onClick={handleAddOne}>+</button>
      <button onClick={handleSubstractOne}>-</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ActionButtons;
