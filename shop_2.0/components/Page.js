import { useState } from "react";
import { Product } from "../components/Product";
import BuyPopup from "../components/Modals/BuyProductPopup";

import styles from "../styles/Home.module.css";

const Page = ({ productsState }) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");

  const playmodal = (productName) => {
    setShowModal(true);
    setName(productName);
  };

  const allProducts = productsState.map((product) => (
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

export default Page;
