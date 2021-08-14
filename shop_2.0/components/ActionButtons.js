//import { useRouter } from "next/router";
import { useCart } from "../contexts/CartProvider";
import styles from "../styles/Home.module.css";

function ActionButtons({ keyName }) {
  //console.log(id);
  const { dispatch } = useCart();

  const handleCLick = () => {
    //console.log(id);
    dispatch({ keyName, type: "ADD_QUANTITY" });
  };

  return (
    <div>
      <button onClick={handleCLick}>+</button>
      <button>-</button>
      <button>Usuń produkt</button>
    </div>
  );
}

export default ActionButtons;
