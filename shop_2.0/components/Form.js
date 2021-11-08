import { useFormik } from "formik";
import { useProducts } from "../contexts/ProductsProvider";

export const Form = () => {
  const dispatchSnacks = useProducts().dispatch;
  const stateSnack = useProducts().snacks;

  const dispatchDrinks = useProducts().dispatch;
  const stateDrink = useProducts().drinks;

  const dispatchSpirits = useProducts().dispatch;
  const stateSpirit = useProducts().spirits;

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      category: "",
    },

    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const dispachCategory = {
    Snacks: dispatchSnacks,
    Drinks: dispatchDrinks,
    Spirits: dispatchSpirits,
  };

  const stateToMap = {
    Snacks: stateSnack,
    Drinks: stateDrink,
    Spirits: stateSpirit,
  };

  const handleSubmit = (values) => {
    const { name, price, category } = values;
    const id = Math.max(...stateToMap[category].map((i) => i.id)) + 1;

    dispachCategory[category]({
      id,
      category,
      name,
      price,
      type: "ADD_PRODUCT",
    });
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Enter product name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <input
        id="price"
        name="price"
        type="number"
        placeholder="Enter product price"
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      <select
        id="category"
        name="category"
        onChange={formik.handleChange}
        value={formik.values.category}
      >
        <option>Wybierz rodzaj produktu</option>
        <option value="Snacks">Snacks</option>
        <option value="Drinks">Drinks</option>
        <option value="Spirits">Spirits</option>
      </select>
      <button type="submit">Dodaj produkt</button>
    </form>
  );
};
