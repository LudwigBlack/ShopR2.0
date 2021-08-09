import { useSnacks } from "../contexts/SnacksProvider";
import { useDrinks } from "../contexts/DrinksProvider";
import { useSpirits } from "../contexts/SpiritsProvider";

import styles from "../styles/Home.module.css";

export const Form = () => {
  const dispatchSnack = useSnacks().dispatch;
  const stateSnack = useSnacks().state;

  const dispatchDrink = useDrinks().dispatch;
  const stateDrink = useDrinks().state;

  const dispatchSpirit = useSpirits().dispatch;
  const stateSpirit = useSpirits().state;

  let name;
  let price;
  let productType;

  function handleChangeName(e) {
    name = e.target.value;
    console.log(name);
  }

  function handleChangePrice(e) {
    price = e.target.value;
    console.log(price);
  }

  function handleSelect(e) {
    productType = e.target.value;
  }

  function handleSubmit(e) {
    console.log(e);
    e.preventDefault();
    if (productType === "Snacks") {
      const id = Math.max(...stateSnack.map((i) => i.id)) + 1;

      dispatchSnack({ id, name, price, type: "ADD_PRODUCT" });
    } else if (productType === "Drinks") {
    } else if (productType === "Spirits") {
    } else {
      console.log("coś nie działa");
    }
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
      <select onChange={handleSelect}>
        <option>Wybierz rodzaj produktu</option>
        <option value="Snacks">Snacks</option>
        <option value="Drinks">Drinks</option>
        <option value="Spirits">Spirits</option>
      </select>
      <button type="submit">Dodaj produkt</button>
    </form>
  );
};

// export default Form;
