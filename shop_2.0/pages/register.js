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
            <p>You don't have an account?</p>
            <p>
              <a href="#">Sing up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
