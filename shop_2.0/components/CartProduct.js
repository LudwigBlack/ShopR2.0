import styles from "../styles/Home.module.css";

export const CartProduct = ({ id, name, price, quantity }) => {
  //const handleCLick = () => onClickHandler({ id, type: "ADD_PRODUCT" });
  console.log(id, name, price);
  return (
    <div className={styles.productsWrapper}>
      <p>{name}</p>
      <p>{`${price} zł`}</p>
      <p>{quantity}</p>
      <p>{`${quantity * price} zł`}</p>
    </div>
  );
};
