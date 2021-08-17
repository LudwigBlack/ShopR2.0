import Link from "next/link";
import { LoginUser } from "../components/LoginUser";

import styles from "../styles/Home.module.css";

const Login = () => {
  return (
    <div className={styles.login_page}>
      <div className={styles.login_form_wrapper}>
        <form className={styles.login_form}>
          <p>Please Log In</p>
          <input placeholder={"Username"} />
          <input placeholder={"Password"} />
          <button>Log in</button>
        </form>
        <div className={styles.login_form_div}>
          <p>You don't have an account?</p>
          <Link href="/register">
            <a
              style={{
                marginTop: "15px",
              }}
            >
              Sing up
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
