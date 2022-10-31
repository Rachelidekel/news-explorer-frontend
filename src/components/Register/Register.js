import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function RegisterPopup({ isOpen, onClose, onRedirect }) {
  return (
    <PopupWithForm
      title="Sign up"
      name="signup"
      submitText="Sign up"
      redirectText="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onRedirect={onRedirect}
      buttonText="sign up"
    >
      <div className="popup__field-container">
        <p className="popup__field-description">Email</p>
        <input
          name="email"
          autoComplete="off"
          className="popup__field popup__field-signup"
          type="email"
          placeholder="Enter email"
          required
        />
        <div className="popup__error-container">
          <span className="popup__field-error email-field-error"></span>
        </div>
        <p className="popup__field-description">Password</p>
        <input
          name="password"
          autoComplete="off"
          className="popup__field popup__field-signup"
          type="password"
          placeholder="Enter password"
          minLength="8"
          required
        />
        <div className="popup__error-container">
          <span className="popup__field-error password-field-error"></span>
        </div>
        <p className="popup__field-description">Username</p>
        <input
          name="username"
          autoComplete="off"
          className="popup__field popup__field-signup"
          type="text"
          placeholder="Enter your username"
          required
        />
        <div className="popup__error-container">
          <span className="popup__field-error text-field-error"></span>
        </div>
      </div>
    </PopupWithForm>
  );
}

export default RegisterPopup;
