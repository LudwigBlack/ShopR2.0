import Button from "./Buttons/Button";
import IconButton from "./Buttons/IconButton";
import UserButton from "./Buttons/LoginButton";
import AdminButton from "./Buttons/AdminButton";
import UserLoggedButton from "./Buttons/UserButon";

import { useAdmin } from "../contexts/AdminProvider";
import { useUser } from "../contexts/UserProvider";

import styles from "../styles/Home.module.css";

const Header = () => {
  const stateOfAdmin = useAdmin().state;
  const stateOfUser = useUser().state;

  const { isLogged } = stateOfUser;

  const whatIcon = () => {
    if (stateOfAdmin) {
      return <AdminButton to={"/login"} toAdmin={"/admin"} />;
    } else if (isLogged) {
      return <UserLoggedButton to={"/login"} />;
    } else {
      return <UserButton to={"/login"} />;
    }
  };

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
          {whatIcon()}
        </div>
      </section>
    </nav>
  );
};

export default Header;
