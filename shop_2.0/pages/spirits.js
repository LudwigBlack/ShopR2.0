import { Product } from "../components/Product";
import { useSpirits } from "../contexts//SpiritsProvider";

import styles from "../styles/Home.module.css";

const Spirits = () => {
  const spiritsState = useSpirits();
  // const handleCLick = () => onClickHandler({ id, type: "ADD_PRODUCT" });

  const allProducts = spiritsState.state.map((product) => (
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

export default Spirits;
