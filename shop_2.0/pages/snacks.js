import { Product } from "../components/Product";
import { useSnacks } from "../contexts/SnacksProvider";

import styles from "../styles/Home.module.css";

const Snacks = () => {
  const snacksState = useSnacks();
  // const handleCLick = () => onClickHandler({ id, type: "ADD_PRODUCT" });

  const allProducts = snacksState.state.map((product) => (
    <Product key={product.id} {...product} />
  ));

  return (
    <div className={styles.snacksPage}>
      <div className={styles.snacksPage_wrapper}>
        <div>{allProducts}</div>
      </div>
    </div>
  );
};

export default Snacks;
