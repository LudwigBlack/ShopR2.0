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

  // const handleSubmit = (values) => {
  //   // e.preventDefault();
  //   console.log(values);
  //   const { name, price, category } = values;
  //   if (category === "Snacks") {
  //     const id = Math.max(...stateSnack.map((i) => i.id)) + 1;
  //     dispatchSnack({ id, category, name, price, type: "ADD_PRODUCT" });
  //   } else if (category === "Drinks") {
  //     const id = Math.max(...stateDrink.map((i) => i.id)) + 1;
  //     dispatchDrink({ id, category, name, price, type: "ADD_PRODUCT" });
  //   } else if (category === "Spirits") {
  //     const id = Math.max(...stateSpirit.map((i) => i.id)) + 1;
  //     dispatchSpirit({ id, category, name, price, type: "ADD_PRODUCT" });
  //   } else {
  //     console.log("coś nie działa");
  //   }

  const handleSubmit = (values) => {
    // e.preventDefault();
    // console.log(values);
    const { name, price, category } = values;

    const id = Math.max(category.map((i) => i.id)) + 1;
    dispatch({ id, category, name, price, type: "ADD_PRODUCT" });
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
