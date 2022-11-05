import React from "react";
import styles from "../styles/checkbox.module.css";

const Checkbox = ({ text, id, gridColumn, value, handleCheckbox }) => {
  return (
    <div className={styles.wrapper} style={{ gridColumn: gridColumn }}>
      <input
        type="checkbox"
        name="Agree to provide data"
        id={id}
        onChange={handleCheckbox}
        checked={value}
      />
      <label htmlFor={id}>{text}</label>
    </div>
  );
};

export default Checkbox;
