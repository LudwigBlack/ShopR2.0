import Button from "./Button";
import styles from "../styles/Home.module.css";

function Header() {
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
          <Button to={"/cart"} name={`Cart`} />
          <Button to={"/login"} name={`Login`} />
        </div>
      </section>
    </nav>
  );
}

export default Header;
