import Button from "./Button";
import IconButton from "./IconButton";
import UserButton from "./LoginButton";
import AdminButton from "./AdminButton";
import UserLoggedButton from "./UserButon";

import { useAdmin } from "../contexts/AdminProvider";
import { useUser } from "../contexts/UserProvider";

import styles from "../styles/Home.module.css";

function Header() {
  const stateOfAdmin = useAdmin().state;
  const stateOfUser = useUser().state;

  const { isLogged } = stateOfUser;

  let buttonIcon;

  if (stateOfAdmin) {
    buttonIcon = <AdminButton to={"/login"} toAdmin={"/admin"} />;
  } else if (isLogged) {
    buttonIcon = <UserLoggedButton to={"/login"} />;
  } else {
    buttonIcon = <UserButton to={"/login"} />;
  }

  return (
    <nav className={styles.navbar}>
      <header className={styles.header}>
        <div className={styles.logo_wrapper}>
          <img src="\Frame 1.png" />
        </div>
        <div className={styles.header_buttons_wrapper}>
          <Button to={"/snacks"} name={`Snacks`} />

          <Button to={"/drinks"} name={`Drinks`} />

          <Button to={"/spirits"} name={`Spirits`} />
        </div>
      </header>
      <section className={styles.section}>
        <div className={styles.section_div}>
          <IconButton to={"/cart"} />
          {buttonIcon}
        </div>
      </section>
    </nav>
  );
}

export default Header;
