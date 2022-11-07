import React, { useState } from "react";
import styles from "../styles/inputField.module.css";

const InputField = ({
  id,
  label,
  error,
  placeholder,
  type,
  textArea,
  gridRow,
  gridColumn,
  value,
  index,
  handleChange,
}) => {
  //   const [input, setInput] = useState("");
  const [errorDisplay, setErrorDisplay] = useState(false);
  const [styling, setStyling] = useState({
    borderStyling: "",
    boxShadowStyling: "",
  });

  //   const handleChange = (e) => {
  //     setInput(e.target.value);
  //   };
  const handleFocus = () => {
    if (errorDisplay) {
      setStyling({
        boxShadowStyling:
          "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FFD3CC",
        borderStyling: "1px solid #F89687",
      });
    }
  };
  const handleBlur = (e) => {
    setErrorDisplay(false);
    setStyling({
      borderStyling: "",
      boxShadowStyling: "",
    });
    if (e.target.value === "") {
      setErrorDisplay(true);
      setStyling({
        borderStyling: "1px solid #F89687",
      });
    }
  };

  return (
    <div
      className={styles.wrapper}
      style={{ gridColumn: gridColumn, gridRow: gridRow }}
    >
      <label htmlFor={id}>{label}</label>
      {!textArea && (
        <input
          name={label}
          id={id}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={(e) => handleChange(e, index)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            border: styling.borderStyling,
            boxShadow: styling.boxShadowStyling,
          }}
        />
      )}
      {textArea && (
        <textarea
          name={label}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleChange(e, index)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            border: styling.borderStyling,
            boxShadow: styling.boxShadowStyling,
          }}
        />
      )}
      {errorDisplay && <span>{error}</span>}
    </div>
  );
};

export default InputField;
