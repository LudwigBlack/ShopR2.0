import Button from "./Button";
import IconButton from "./IconButton";
import UserButton from "./LoginButton";
import AdminButton from "./AdminButton";

import { useAdmin } from "../contexts/AdminProvider";

import styles from "../styles/Home.module.css";

// const element = <FontAwesomeIcon icon={faCoffee} />;

function Header() {
  const stateOfAdmin = useAdmin().state;

  return (
    <nav className={styles.navbar}>
      <header className={styles.header}>
        <div className={styles.header_buttons_wrapper}>
          <Button to={"/snacks"} name={`Snacks`} />

          <Button to={"/drinks"} name={`Drinks`} />

          <Button to={"/spirits"} name={`Spirits`} />
        </div>
      </header>
      <section className={styles.section}>
        <div className={styles.section_div}>
          <IconButton to={"/cart"} />
          {/* <Button to={"/cart"} name={`Cart`} /> */}
          {stateOfAdmin ? (
            <AdminButton to={"/login"} toAdmin={"/admin"} />
          ) : (
            <UserButton to={"/login"} />
          )}
        </div>
      </section>
    </nav>
  );
}

export default Header;
