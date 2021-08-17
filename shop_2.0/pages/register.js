import Link from "next/link";

import styles from "../styles/Home.module.css";

const Register = () => {
  return (
    <div className={styles.login_page}>
      <div className={styles.login_form_wrapper}>
        <form className={styles.login_form}>
          <p>Please Register</p>
          <input placeholder={"E-mail Adress"} />
          <input placeholder={"Username"} />
          <input placeholder={"Password"} />
          <button>Register</button>
          <div className={styles.login_form_div}>
            <p>Already have an account?</p>
            <Link href="/login">
              <a>Log in</a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
