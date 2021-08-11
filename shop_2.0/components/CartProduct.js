import styles from "../styles/Home.module.css";

export const CartProduct = ({ id, name, price }) => {
  //const handleCLick = () => onClickHandler({ id, type: "ADD_PRODUCT" });
  console.log(id, name, price);
  return (
    <div className={styles.productsWrapper}>
      <p>{name}</p>
      <p>{`${price} zł`}</p>
      <p>{item.quantity}</p>
      <p>$ {item.quantity * item.price}</p>
    </div>
  );
};
