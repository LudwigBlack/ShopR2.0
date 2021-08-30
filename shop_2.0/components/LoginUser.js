import Link from "next/link";

import { useAdmin } from "../contexts/AdminProvider";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";

export const LoginUser = () => {
  const router = useRouter();

  const dispatchIsLogged = useAdmin().dispatch;
  const stateOfAdmin = useAdmin().state;

  let userName;
  let password;

  function handleChangeUserName(e) {
    userName = e.target.value;
  }

  function handleChangePassword(e) {
    password = e.target.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userName);
    console.log(password);

    if (userName === "AdminJohn" && password === "admin") {
      const value = true;
      dispatchIsLogged({ value, type: "LOGGED" });
      router.push("/admin");
    } else {
      console.log("coś nie działa w handleSubmit");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.login_form}>
      <p>Please Log In</p>
      <input
        name="product name"
        type="text"
        placeholder="UserName"
        onChange={handleChangeUserName}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={handleChangePassword}
      />
      <button type="submit">Log In</button>
    </form>
  );
};
