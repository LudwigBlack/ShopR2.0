import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/Home.module.css";

const IconButton = ({ to }) => {
  return (
    <Link href={to}>
      <a className={styles.header_button}>
        <FontAwesomeIcon icon={faShoppingCart} size="2x" />
      </a>
    </Link>
  );
};
export default IconButton;
