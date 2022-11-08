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

export default Contact;
