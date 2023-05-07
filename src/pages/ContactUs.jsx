import React, { useState } from "react";
import styled from "styled-components";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "") {
      setEmailError(true);
    } else {
      console.log("Email:", email);
      console.log("Message:", message);
      // send message code here
    }
  };

  return (
    <>
    <Styledcontactus>
    <div className="contact-info">
        <h1>Contact Us</h1>
        <p><i className="fas fa-envelope"></i>Email: sce-movie-social@ac.sce.ac.il</p>
        <p><i className="fas fa-map-marker-alt"></i>Address: Haim Nachman Bialik 56, Beer Sheva, 84100, Israel</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
        <div className="p1">
      
    we would love to respond to your queries and help you. <br></br>
    Please feel free to got in touch with us. <br></br>
    <br></br>
        </div>
          <label htmlFor="email" className="form-label">
            Email Address*
          </label>
          <div className="input-group">
            <input
              type="email"
              id="email"
              className={`form-input ${emailError ? "form-input-error" : ""}`}
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && (
              <p className="error-message">Please enter your email address</p>
            )}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            className="form-input"
            value={message}
            onChange={handleMessageChange}
          ></textarea>
        </div>
        <button type="submit" className="form-button">
          Send Message
        </button>
        <br></br>
      </form>
    </Styledcontactus>
      
    </>
  );
};



 

const Styledcontactus = styled.div`
/* Font Awesome Library */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
  max-width: 500px;
}

.form-label {
  margin-bottom: 10px;
  font-size: 18px;
  color: #333;
}

.form-input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
}

.form-input-error {
  border: 1px solid red;
}

.error-message {
  margin-top: 5px;
  color: red;
  font-size: 14px;
}

.form-button {
  background-color: #007bff;
  color: #fff;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.form-button:hover {
  background-color: #0069d9;
}

.contact-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 50px auto;
}

.contact-info h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.contact-info p {
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
}

.contact-info i {
  font-size: 24px;
  color: #007bff;
  margin-right: 10px;
}

`;

export default ContactUs;
