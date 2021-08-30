import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

// function Button({ to, name }) {
//   const router = useRouter();
//   return (
//     <button onClick={() => router.push(to)} className={styles.header_button}>
//       {name}
//     </button>
//   );
// }

function Button({ to, name }) {
  return (
    <Link href={to}>
      <a className={styles.header_button}>{name}</a>
    </Link>
  );
}
export default Button;
