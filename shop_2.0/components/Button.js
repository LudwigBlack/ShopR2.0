import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

function Button({ to, name }) {
  const router = useRouter();
  return (
    <button onClick={() => router.push(to)} className={styles.header_button}>
      {name}
    </button>
  );
}

export default Button;
