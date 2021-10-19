import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import RegisterPopup from "../components/RegisterPopup";

import styles from "../styles/Home.module.css";

const validate = (values) => {
  const errors = {};

  const item = JSON.parse(window.localStorage.getItem("user"));

  function filterStorage(name, value) {
    if (item) {
      const filtered = item.find((product) => product[name] == value);
      if (filtered) {
        return true;
      }
    } else {
      return false;
    }
  }

  if (!values.userName) {
    errors.userName = "Required";
  } else if (values.userName.length > 15) {
    errors.userName = "Must be 15 characters or less";
  } else if (values.userName.length < 3) {
    errors.userName = "Must be 4 character lenght or more";
  } else if (!/^[a-zA-Z0-9]+$/i.test(values.userName)) {
    errors.userName = "User name is invalid";
  } else if (filterStorage("userName", values.userName)) {
    errors.userName = "This login is already used";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 20) {
    errors.password = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  } else if (filterStorage("email", values.email)) {
    errors.email = "This email is already used";
  }

  return errors;
};

const Register = () => {
  //const [person, setPerson] = useState(DEFAULT_PERSON);
  const [name, setName] = useLocalStorage("user", []);
  const [showModal, setShowModal] = useState(false);
  const [shot, setShot] = useState(false);
  const router = useRouter();

  let item;
  let item2;

  if (typeof window !== "undefined") {
    if (typeof window.localStorage.getItem("user") == "null") {
      item = 0;
    } else {
      item = 0;
      //console.log(`window działa ${item}`)
    }
    // item = JSON.parse(window.localStorage.getItem("user")).length;
    //console.log(`window działa ${item}`);
  } else if (typeof window == "null") {
    item = 0;
  }

  // useEffect(() => {
  //   setShowModal(true);
  //   //console.log(showModal);
  // }, [item]);

  function compare(a, b) {
    if (a < b) {
      setShowModal(true);
      console.log(showModal);
    }
  }

  const bool = true;

  const formik = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
      isLogged: "false",
      newCreated: "true",
    },

    validate,
    onSubmit: (values) => {
      // const bool = true;
      // setShowModal(bool);
      setName(name.concat(values));
      //hot(newValue);
      // console.log(showModal);

      // console.log(showModal);
      // router.push("/login");
      // item2 = JSON.parse(window.localStorage.getItem("user")).length;
      // console.log(item, item2);
      // compare(item, item2);
    },
  });

  return (
    <div className={styles.login_page}>
      <div className={styles.login_form_wrapper}>
        <form className={styles.login_form} onSubmit={formik.handleSubmit}>
          <p>Please Register</p>
          <input
            placeholder={"E-mail Adress"}
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
            // value={person.userEmailAddress}
            name="email"
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}{" "}
          <input
            placeholder={"Username"}
            type="text"
            onChange={formik.handleChange}
            value={formik.values.userName}
            // value={person.userName}
            name="userName"
          />
          {formik.errors.userName ? <div>{formik.errors.userName}</div> : null}{" "}
          <input
            placeholder={"Password"}
            type="text"
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            // ref={register}
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

      {shot ? (
        <RegisterPopup onClose={() => setShowModal(false)} show={showModal} />
      ) : null}
    </div>
  );
};

function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default Register;
