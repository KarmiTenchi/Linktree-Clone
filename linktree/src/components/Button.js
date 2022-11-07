import React from "react";
import styles from "../styles/button.module.css";
const Button = ({ text, id, gridColumn, marginTop, disabled }) => {
  return (
    <button
      disabled={disabled}
      type="submit"
      id={id}
      className={styles.button}
      style={{ gridColumn: gridColumn, marginTop: marginTop }}
    >
      {text}
    </button>
  );
};

export default Button;
