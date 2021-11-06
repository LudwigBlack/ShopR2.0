import Link from "next/link";

import styles from "../../styles/Home.module.css";

const Button = ({ to, name }) => {
  return (
    <Link href={to}>
      <a className={styles.header_button}>{name}</a>
    </Link>
  );
};
export default Button;
