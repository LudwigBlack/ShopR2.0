import { useAdmin } from "../contexts/AdminProvider";
import { useRouter } from "next/router";
import { useState } from "react";
import { useUser } from "../contexts/UserProvider";
import { useFormik } from "formik";
import LoginUserModal from "../components/Modals/LoginUserPopUp";

import styles from "../styles/Home.module.css";

export const LoginUser = () => {
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const dispatchIsLogged = useAdmin().dispatch;

  const dispatchUserLogged = useUser().dispatch;
  const stateOfUser = useUser().state;
  const { userName } = stateOfUser;

  const formik = useFormik({
    initialValues: {
      userNameInput: "",
      password: "",
    },

    onSubmit: (values) => {
      const item = JSON.parse(window.localStorage.getItem("user"));

      const { userNameInput } = values;
      const { password } = values;

      const userLogged = item.find((user) => user.userName == userNameInput);

      if (userLogged) {
        const { userName } = userLogged;
        const payload = {
          isLogged: true,
          userName: userName,
        };
        dispatchUserLogged({ type: "LOGGED_UNLOGGED", payload });
        setShowModal(true);
        return;
      } else {
        console.log(`Didn't find userLogged: ${userLogged}`);
      }

      if (userNameInput === "AdminJohn" && password === "admin") {
        const value = true;
        dispatchIsLogged({ value, type: "LOGGED" });
        router.push("/admin");
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={styles.login_form}>
        <p>Please Log In</p>
        <input
          id="userNameInput"
          name="userNameInput"
          type="text"
          placeholder="UserName"
          onChange={formik.handleChange}
        />
        <input
          id="password"
          name="password"
          type="text"
          placeholder="Password"
          onChange={formik.handleChange}
        />
        <button type="submit">Log In</button>
      </form>
      <LoginUserModal
        onClose={() => setShowModal(false)}
        show={showModal}
        userLogged={userName}
      />
    </>
  );
};
