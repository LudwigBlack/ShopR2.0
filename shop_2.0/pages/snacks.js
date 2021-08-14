import { Product } from "../components/Product";
import { useProducts } from "../contexts/ProductsProvider";

import styles from "../styles/Home.module.css";

const Snacks = () => {
  const snacksState = useProducts().snacks;
  // const handleCLick = () => onClickHandler({ id, type: "ADD_PRODUCT" });

  const allProducts = snacksState.map((product) => (
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

export default Snacks;
