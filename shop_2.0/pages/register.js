import Link from "next/link";
import { useState } from "react";

import styles from "../styles/Home.module.css";

const Register = () => {
  const person = {
    userEmailAdress: "",
    userName: "",
    password: "",
  };
  const [name, setName] = useLocalStorage("user", person);

  // let userEmailAdress;
  // let userName;
  // let password;

  function handleChangeEmailAdress(e) {
    person.userEmailAdress = e.target.value;
  }

  function handleChangeUserName(e) {
    person.userName = e.target.value;
  }

  function handleChangePassword(e) {
    person.password = e.target.value;
  }

  function handleRegisterSubmit(e) {
    e.preventDefault();
    //console.log(person);
    setName(person);
  }
  return (
    <div className={styles.login_page}>
      <div className={styles.login_form_wrapper}>
        <form onSubmit={handleRegisterSubmit} className={styles.login_form}>
          <p>Please Register</p>
          <input
            placeholder={"E-mail Adress"}
            type="text"
            onChange={handleChangeEmailAdress}
            // value={name.userEmailAdress}
          />
          <input
            placeholder={"Username"}
            type="text"
            onChange={handleChangeUserName}
            // value={name.userName}
          />
          <input
            placeholder={"Password"}
            type="text"
            onChange={handleChangePassword}
            // value={name.password}
          />
          <button type="submit">Register</button>
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
