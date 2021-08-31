import Link from "next/link";
import { useState } from "react";

import styles from "../styles/Home.module.css";

const DEFAULT_PERSON = {
  userEmailAddress: "",
  userName: "",
  password: "",
};

const Register = () => {
  // const person = {
  //   userEmailAdress: "",
  //   userName: "",
  //   password: "",
  // };
  const [person, setPerson] = useState(DEFAULT_PERSON);
  const [name, setName] = useLocalStorage("user", [person]);

  // let userEmailAdress;
  // let userName;
  // let password;

  function handleChangeEmailAdress(e) {
    const userEmailAddress = e.target.value;
    setPerson((prevPerson) => ({
      ...prevPerson,
      userEmailAddress,
    }));
  }

  function handleChangeUserName(e) {
    const userName = e.target.value;
    setPerson((prevPerson) => ({ ...prevPerson, userName }));
  }

  function handleChangePassword(e) {
    const password = e.target.value;
    setPerson((prevPerson) => ({ ...prevPerson, password }));
  }

  // function handleChange(e) {
  //   const { userEmailAddress, userName, password } = e.target.value;

  //   setPerson((prevPerson) => ({
  //     ...prevPerson,
  //     userEmailAddress,
  //     userName,
  //     password,
  //   }));
  // }

  function handleRegisterSubmit(e) {
    e.preventDefault();
    //console.log(person);
    setName(name.concat(person));
    setPerson(DEFAULT_PERSON);
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
            value={person.userEmailAddress}
          />
          <input
            placeholder={"Username"}
            type="text"
            onChange={handleChangeUserName}
            value={person.userName}
          />
          <input
            placeholder={"Password"}
            type="text"
            onChange={handleChangePassword}
            value={person.password}
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
