import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [check, setCheck] = useState(false);
  const name = "Anastasia";

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "firstName") setFirstName(value);

    if (name === "lastName") setLastName(value);

    if (name === "email") setEmail(value);

    if (name === "message") setMessage(value);

    if (name === "agreement") setCheck(true);
  };

  const handleSubmit = (e) => {
    if (firstName && lastName && email && message && check) {
      alert("Form sucessfully submitted");
    } else {
      return;
    }
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setCheck(false);
  };

  return (
    <>
      <div className="container">
        <h1 className="title">Contact Me</h1>
        <p className="title_text">
          Hi there, contact me to ask me about anything you have in mind.
        </p>

        <form>
          <div className="name_field col">
            <div className="firstName col">
              <label htmlFor="firstName">First Name</label>
              <input
                id="first_name"
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => handleInputChange(e)}
                required
              />
            </div>

            <div className="lastName col">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="last_name"
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => handleInputChange(e)}
                required
              />
            </div>
          </div>

          <div className="email col">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="yourname@email.com"
              value={email}
              onChange={(e) => handleInputChange(e)}
              required
            />
          </div>

          <div className="message col">
            <label htmlFor="message">Message</label>
            <textarea
              rows="6"
              cols="35"
              id="message"
              name="message"
              value={message}
              onChange={(e) => handleInputChange(e)}
              placeholder="Send me a message and I'll reply you as soon as possible..."
            ></textarea>
          </div>

          <div className="checkbox">
            <input
              type="checkbox"
              name="agreement"
              value={check}
              onChange={(e) => handleInputChange(e)}
              required
            />
            <label htmlFor="agreement">
              You agree to providing your data to {name}, who may contact you.
            </label>
          </div>

          <button id="btn__submit" onClick={(e) => handleSubmit(e)}>
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
