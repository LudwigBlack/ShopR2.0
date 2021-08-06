import styles from "../styles/Home.module.css";

export const CartProduct = ({ name, price }) => {
  //const handleCLick = () => onClickHandler({ id, type: "ADD_PRODUCT" });

  return (
    <div className={styles.productsWrapper}>
      <p>{name}</p>
      <p>{`${price} zł`}</p>
    </div>
  );
};
