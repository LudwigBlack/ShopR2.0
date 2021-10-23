import Link from "next/link";
import { useState, useEffect } from "react";
import { LoginUser } from "../components/LoginUser";
import { useUser } from "../contexts/UserProvider";
// import LoginUserPopup from "../components/LoginUserPopup";

import styles from "../styles/Home.module.css";

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [shot, setShot] = useState(true);

  // const [showUserModal, setUserShowModal] = useState(false);
  const userLoggedState = useUser().snacks;

  const item = JSON.parse(window.localStorage.getItem("user"));
  console.log(item);

  const filtered = item.find((product) => product["newCreated"] == true);

  if (filtered) {
    setShot(true);
    console.log("Popup działa");
  } else {
    console.log("Popup NIE działa");
  }

  return (
    <div className={styles.login_page}>
      <div className={styles.login_form_wrapper}>
        {/* {shot ? (
          <LoginUserPopup
            onClose={() => setShowModal(false)}
            show={showModal}
            set={setShot(false)}
          />
        ) : null} */}
        <LoginUser />
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
