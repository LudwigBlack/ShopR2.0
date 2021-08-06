import styles from "../styles/Home.module.css";

export const Product = ({ name, price }) => {
  //const handleCLick = () => onClickHandler({ id, type: "ADD_PRODUCT" });

  return (
    <div className={styles.productsWrapper}>
      <p>{name}</p>
      <p>{`${price} zł`}</p>
      <button>Kup</button>
    </div>
  );
};
