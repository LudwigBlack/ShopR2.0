import Link from "next/link";
import { useState } from "react";

import { useFormik } from "formik";
import RegisterInput from "../components/InputFromRegister";
import RegisterPopup from "../components/Modals/RegisterPopup";
import useLocalStorage from "../utility/localStorageHook";
import validate from "../utility/validate";

import styles from "../styles/Home.module.css";

const Register = () => {
  const [name, setName] = useLocalStorage("user", []);
  const [showModal, setShowModal] = useState(false);

  let item;

  if (typeof window !== "undefined") {
    if (typeof window.localStorage.getItem("user") == "null") {
      item = 0;
    } else {
      item = 0;
    }
  } else if (typeof window == "null") {
    item = 0;
  }

  const change = () => {
    setShowModal(true);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
      isLogged: "false",
    },

    validate,
    onSubmit: (values) => {
      change(), setName(name.concat(values));
    },
  });

  return (
    <div className={styles.login_page}>
      <div className={styles.login_form_wrapper}>
        <form className={styles.login_form} onSubmit={formik.handleSubmit}>
          <p>Please Register</p>
          <RegisterInput
            place={"E-mail Adress"}
            typo="text"
            change={formik.handleChange}
            valueInput={formik.values.email}
            nameInput="email"
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}{" "}
          <RegisterInput
            place={"Username"}
            typo="text"
            change={formik.handleChange}
            valueInput={formik.values.userName}
            nameInput="userName"
          />
          {formik.errors.userName ? <div>{formik.errors.userName}</div> : null}{" "}
          <RegisterInput
            place={"Password"}
            typo="password"
            change={formik.handleChange}
            valueInput={formik.values.password}
            nameInput="password"
          />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
          <button type="submit">Register</button>
          <div className={styles.login_form_div}>
            <p>Already have an account?</p>
            <Link href="/login">
              <a>Log in</a>
            </Link>
          </div>
        </form>
      </div>

      {showModal ? (
        <RegisterPopup onClose={() => setShowModal(false)} show={showModal} />
      ) : null}
    </div>
  );
};

export default Register;
