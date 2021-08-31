import Link from "next/link";

import { useAdmin } from "../contexts/AdminProvider";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";

export const LoginUser = () => {
  const router = useRouter();

  const dispatchIsLogged = useAdmin().dispatch;
  const stateOfAdmin = useAdmin().state;

  let userNameInput;
  let password;

  function handleChangeUserName(e) {
    userNameInput = e.target.value;
  }

  function handleChangePassword(e) {
    password = e.target.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    //console.log(userName);
    console.log(password);

    const item = JSON.parse(window.localStorage.getItem("user"));
    console.log(item);
    const userLogged = item.find((user, index) => {
      if (user.userName == userNameInput) {
        return true;
      }
    });

    console.log(userLogged);

    if (userNameInput === "AdminJohn" && password === "admin") {
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
