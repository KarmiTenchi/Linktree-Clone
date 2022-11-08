<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import "./Contact.css";

function Contact() {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.first_name) {
      errors.first_name = "First name is required";
    }
    if (!values.last_name) {
      errors.last_name = "Last name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.message) {
      errors.message = "Please enter a message";
    }
    return errors;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 id="form-title">Contact Me</h1>
        <p id="form-subtitle">
          Hi there, contact me to ask me about anything you have in mind.
        </p>
        <div id="name-inputs">
          <div>
            <label for="first_name">First Name</label>
            <br />
            <input
              onChange={handleChange}
              type="text"
              required
              id="first_name"
              placeholder="Enter your first name"
              name="first_name"
              value={formValues.first_name}
            />

            <label className="validation">{formErrors.first_name}</label>
          </div>
          <div>
            <label for="last_name">Last Name</label>
            <br />
            <input
              onChange={handleChange}
              type="text"
              required
              id="last_name"
              placeholder="Enter your last name"
              name="last_name"
              value={formValues.last_name}
            />
            <label className="validation">{formErrors.last_name}</label>
          </div>
        </div>
        <div>
          <label for="email">Email</label>
          <br />
          <input
            onChange={handleChange}
            type="email"
            required
            id="email"
            placeholder="yourname@email.com"
            name="email"
            value={formValues.email}
          />
          <label className="validation">{formErrors.email}</label>
        </div>
        <div>
          <label for="message">Message</label>
          <br />
          <textarea
            onChange={handleChange}
            id="message"
            name="message"
            placeholder="Send me a message, and I'll reply very soon"
            value={formValues.message}
          ></textarea>
          <label className="validation">{formErrors.message}</label>
        </div>
        <div className="wrapper">
          <input
            type="checkbox"
            required
            id="data-confirmation"
            name="data-confirmation"
            value="confirmed"
          />
          <label for="data-confirmation">
            You agree to providing your data to Annette who may contact you.
          </label>
          <br />
        </div>
        <div>
          <input
            type="submit"
            id="btn__submit"
            className="button"
            value="Send Message"
          />
        </div>
      </form>
    </>
  );
}
=======
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
>>>>>>> 78d04080c0be81ecfd6fde795f9743252142668d

export default Contact;
