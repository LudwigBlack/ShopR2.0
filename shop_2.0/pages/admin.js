import { AdminProduct } from "../components/AdminProduct";
import { useSnacks } from "../contexts/SnacksProvider";
import { useDrinks } from "../contexts/DrinksProvider";
import { useSpirits } from "../contexts/SpiritsProvider";
import { Form } from "../components/Form";

import styles from "../styles/Home.module.css";

const Admin = () => {
  const snacksState = useSnacks();
  const dispatchSnacks = useSnacks().dispatch;

  const drinksState = useDrinks();
  const dispatchDrinks = useDrinks().dispatch;

  const spiritsState = useSpirits();
  const dispatchSpirits = useSpirits().dispatch;

  const snacksProducts = snacksState.state.map((product) => (
    <AdminProduct
      key={product.id + product.category}
      dispatch={dispatchSnacks}
      {...product}
    />
  ));

  const drinksProducts = drinksState.state.map((product) => (
    <AdminProduct
      key={product.id + product.category}
      dispatch={dispatchDrinks}
      {...product}
    />
  ));

  const spiritsProducts = spiritsState.state.map((product) => (
    <AdminProduct
      key={product.id + product.category}
      dispatch={dispatchSpirits}
      {...product}
    />
  ));

  return (
    <div className={styles.adminPage}>
      <div className={styles.admin_products_wrapper}>
        <div className={styles.snacksPage_wrapper}>
          <div>{snacksProducts}</div>
        </div>
      </div>
      <div className={styles.admin_products_wrapper}>
        <div className={styles.snacksPage_wrapper}>
          <div>{drinksProducts}</div>
        </div>
      </div>
      <div className={styles.admin_products_wrapper}>
        <div className={styles.snacksPage_wrapper}>
          <div>{spiritsProducts}</div>
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
