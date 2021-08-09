import { useSnacks } from "../contexts/SnacksProvider";
import { useDrinks } from "../contexts/DrinksProvider";
import { useSpirits } from "../contexts/SpiritsProvider";

import styles from "../styles/Home.module.css";

export const AdminProduct = ({ id, dispatch, name, price }) => {
  //const { dispatch } = useSnacks();

  const handleCLick = () => {
    console.log(id);
    dispatch({ id, type: "DELETE_PRODUCT" });
  };
  return (
    <div className={styles.productsWrapper}>
      <p>{name}</p>
      <p>{`${price} zł`}</p>
      <button onClick={handleCLick}>Usuń produkt</button>
    </div>
  );
};
