import { AdminProduct } from "../components/AdminProduct";
import { useSnacks } from "../contexts/SnacksProvider";
import { Form } from "../components/Form";

import styles from "../styles/Home.module.css";

const Admin = () => {
  const snacksState = useSnacks();
  // const handleCLick = () => onClickHandler({ id, type: "ADD_PRODUCT" });

  const allProducts = snacksState.state.map((product) => (
    <AdminProduct key={product.id} {...product} />
  ));

  return (
    <div className={styles.adminPage}>
      <div className={styles.snacksPage}>
        <div className={styles.snacksPage_wrapper}>
          <div>{allProducts}</div>
        </div>
      </div>
      <div className={styles.snacksPage}>
        <div className={styles.admin_form}>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Admin;
