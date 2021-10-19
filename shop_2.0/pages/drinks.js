import { useState, useRef } from "react";
import { Product } from "../components/Product";
import { useProducts } from "../contexts/ProductsProvider";

import BuyPopup from "../components/BuyProductPopup";
import styles from "../styles/Home.module.css";

const Drinks = () => {
  const [showModal, setShowModal] = useState(false);
  const drinksState = useProducts().drinks;
  // const handleCLick = () => onClickHandler({ id, type: "ADD_PRODUCT" });

  function playmodal() {
    console.log("Play działa");
    setShowModal(true);
  }

  const allProducts = drinksState.map((product) => (
    <Product
      key={product.id + product.category}
      {...product}
      setShow={playmodal}
    />
  ));

  return (
    <div className={styles.snacksPage}>
      <div className={styles.products_descritpion}>
        <div>Product name</div>
        <div>Product price</div>
        <div>Click to Buy</div>
      </div>
      <div className={styles.snacksPage_wrapper}>
        <div>{allProducts}</div>
      </div>
      <BuyPopup onClose={() => setShowModal(false)} show={showModal} />
    </div>
  );
};

export default Drinks;
