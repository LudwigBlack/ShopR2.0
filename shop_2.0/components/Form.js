import { useSnacks } from "../contexts/SnacksProvider";

import styles from "../styles/Home.module.css";

export const Form = () => {
  const { dispatch } = useSnacks();
  const { state } = useSnacks();

  let name;
  let price;

  function handleChangeName(e) {
    name = e.target.value;
    console.log(name);
  }

  function handleChangePrice(e) {
    price = e.target.value;
    console.log(price);
  }

  function handleSubmit(e) {
    console.log(e);
    e.preventDefault();
    const id = Math.max(...state.map((i) => i.id)) + 1;

    dispatch({ id, name, price, type: "ADD_PRODUCT" });
    console.log("Submit");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="product name"
        type="text"
        placeholder="Enter product name"
        onChange={handleChangeName}
      />
      <input
        type="number"
        placeholder="Enter product price"
        onChange={handleChangePrice}
      />
      <button type="submit">Dodaj produkt</button>
    </form>
  );
};

// export default Form;
