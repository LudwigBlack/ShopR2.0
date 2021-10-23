import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/Home.module.css";

function UserButton({ to, toAdmin, toLogout }) {
  return (
    <div className={styles.dropdown}>
      <Link href={to}>
        <a className={styles.header_button}>
          <FontAwesomeIcon
            icon={faUser}
            size="2x"
            //   className={styles.header_cart_icon}
          />
        </a>
      </Link>
      {/* <div className={styles.dropdown_content}>
        <Link href={to}>
          <a>Log out</a>
        </Link>
      </div> */}
    </div>
  );
}
export default UserButton;
