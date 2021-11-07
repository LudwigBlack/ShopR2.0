import { AdminProduct } from "../components/AdminProduct";
import { useProducts } from "../contexts/ProductsProvider";
import { Form } from "../components/Form";
import Popup from "../components/Modals/AdminPopup";
import { useState } from "react";

import styles from "../styles/Home.module.css";

const Admin = () => {
  const [showModal, setShowModal] = useState(true);

  const snacksState = useProducts().snacks;
  const dispatchSnacks = useProducts().dispatch;

  const drinksState = useProducts().drinks;
  const dispatchDrinks = useProducts().dispatch;

  const spiritsState = useProducts().spirits;
  const dispatchSpirits = useProducts().dispatch;

  const ProductsWrapper = ({ items, dispatchProduct }) => {
    const renderedProducts = items.map((product) => (
      <AdminProduct
        key={product.id + product.category}
        dispatch={dispatchProduct}
        {...product}
      />
    ));
    console.log(renderedProducts);
    return (
      <div className={styles.admin_products_wrapper}>
        <div className={styles.snacksPage_wrapper}>
          <div>{renderedProducts}</div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={styles.adminPage}>
        <ProductsWrapper items={snacksState} dispatchProduct={dispatchSnacks} />
        <ProductsWrapper items={drinksState} dispatchProduct={dispatchDrinks} />
        <ProductsWrapper
          items={spiritsState}
          dispatchProduct={dispatchSpirits}
        />
        <div className={styles.snacksPage}>
          <div className={styles.admin_form}>
            <Form />
          </div>
        </div>
      </div>
      <Popup onClose={() => setShowModal(false)} show={showModal} />
    </>
  );
};

export default Admin;
