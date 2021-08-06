import Button from "./Button";
import styles from "../styles/Home.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_buttons_wrapper}>
        <Button to={"/snacks"} name={`Snacks`} />

        <Button to={"/drinks"} name={`Drinks`} />

        <Button to={"/spirits"} name={`Spirits`} />
      </div>
    </header>
  );
}

export default Header;
