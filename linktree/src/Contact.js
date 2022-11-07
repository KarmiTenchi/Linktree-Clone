import React, { useState } from "react";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import InputField from "./components/InputField";
import styles from "./styles/contact.module.css";

const Contact = () => {
  const inputs = [
    {
      id: "first_name",
      label: "First name",
      error: "Please enter your first name",
      placeholder: "Enter your first name",
      type: "text",
      textArea: false,
      value: "",
    },
    {
      id: "last_name",
      label: "Last name",
      error: "Please enter your last name",
      placeholder: "Enter your last name",
      type: "text",
      textArea: false,
      value: "",
    },
    {
      id: "email",
      label: "Email",
      error: "Please enter your email",
      placeholder: "yourname@email.com",
      type: "email",
      textArea: false,
      gridColumn: "1/3",
      value: "",
    },
    {
      id: "message",
      label: "Message",
      error: "Please enter a message",
      placeholder:
        "Send me a message and I'll reply you as soon as possible...",
      type: "",
      textArea: true,
      gridColumn: "1/3",
      value: "",
    },
  ];
  const [inputValues, setInputValues] = useState(inputs);
  const [checkbox, setCheckbox] = useState(false);

  const formValidation = () => {
    const fieldValidation = inputValues.every((i) => i.value !== "");

    return fieldValidation && checkbox ? false : true;
  };

  const handleChange = (e, index) => {
    const dummyArray = [...inputValues];
    dummyArray[index].value = e.target.value;
    setInputValues(dummyArray);
  };

  const handleCheckbox = (e) => {
    setCheckbox((checkbox) => !checkbox);
  };
  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.wrapper}>
            <h2>Contact Me</h2>
            <p>
              Hi there, contact me to ask me about anything you have in mind.
            </p>
            <form>
              {inputValues.map((i, index) => {
                return (
                  <InputField
                    key={i.id}
                    type={i.type}
                    error={i.error}
                    id={i.id}
                    label={i.label}
                    placeholder={i.placeholder}
                    textArea={i.textArea}
                    gridColumn={i.gridColumn}
                    gridRow={i.gridRow}
                    value={i.value}
                    index={index}
                    handleChange={handleChange}
                  />
                );
              })}
              <Checkbox
                id="agree_to_collect_data"
                text="You agree to providing your data to Annette who may contact you."
                gridColumn="1/3"
                handleCheckbox={handleCheckbox}
                value={checkbox}
              />
              <Button
                id="btn__submit"
                text="Send message"
                gridColumn="1/3"
                marginTop="8px"
                disabled={formValidation()}
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
