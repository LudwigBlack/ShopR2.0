import { useState, useRef } from "react";
import { Product } from "../components/Product";

import { useProducts } from "../contexts/ProductsProvider";
import BuyPopup from "../components/BuyProductPopup";

import styles from "../styles/Home.module.css";

const Snacks = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const snacksState = useProducts().snacks;
  // const handleCLick = () => onClickHandler({ id, type: "ADD_PRODUCT" });

  function playmodal(productName) {
    console.log("Play działa");
    setShowModal(true);
    setName(productName);
  }
  const allProducts = snacksState.map((product) => (
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
      <BuyPopup
        onClose={() => setShowModal(false)}
        show={showModal}
        prod={name}
      />
    </div>
  );
};

export default Snacks;
