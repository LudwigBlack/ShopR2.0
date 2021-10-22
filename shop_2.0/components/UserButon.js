import Link from "next/link";

import { useUser } from "../contexts/UserProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/Home.module.css";

function UserLoggedButton({ to }) {
  const dispatchIsLogged = useUser().dispatch;
  const stateOfUser = useUser().state;

  console.log(stateOfUser);

  const { userName } = stateOfUser;

  function handleCLick() {
    dispatchIsLogged({ type: "UNLOGGED" });
  }
  return (
    <div className={styles.dropdown}>
      <Link href={to}>
        <a className={styles.header_button}>
          <FontAwesomeIcon
            icon={faUserTie}
            size="2x"
            //   className={styles.header_cart_icon}
          />
        </a>
      </Link>
      <div className={styles.dropdown_content}>
        <div>
          <p>{userName}</p>
        </div>
        <Link href={to}>
          <a onClick={handleCLick}>Log out</a>
        </Link>
      </div>
    </div>
  );
}
export default UserLoggedButton;
