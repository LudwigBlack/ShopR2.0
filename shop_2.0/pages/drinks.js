import { Product } from "../components/Product";
import { useDrinks } from "../contexts/DrinksProvider";

import styles from "../styles/Home.module.css";

const Drinks = () => {
  const drinksState = useDrinks();
  // const handleCLick = () => onClickHandler({ id, type: "ADD_PRODUCT" });

  const allProducts = drinksState.state.map((product) => (
    <Product key={product.id + product.category} {...product} />
  ));

  return (
    <div className={styles.snacksPage}>
      <div className={styles.snacksPage_wrapper}>
        <div>{allProducts}</div>
      </div>
    </div>
  );
};

export default Drinks;
