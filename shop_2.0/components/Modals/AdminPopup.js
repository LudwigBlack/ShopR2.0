import { useState } from "react";
import ReactDOM from "react-dom";
import styles from "../../styles/Home.module.css";

const Popup = ({ show, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(true);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className={styles.popup_wrapper}>
      <div className={styles.popup_div}>
        <div className={styles.popup_header}>
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </div>
        <p>Hello Admin!</p>
        <p>After you finish you work, please remember to logout.</p>
        <div className={styles.popup_body}>{children}</div>
        <button onClick={handleCloseClick}>OK</button>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Popup;
