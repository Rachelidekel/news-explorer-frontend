import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function LoginPopup({ isOpen, onClose, onRedirect }) {
  return (
    <PopupWithForm
      title="Sign in"
      name="signin"
      submitText="Sign in"
      redirectText="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onRedirect={onRedirect}
      buttonText="sign in"
    >
      <div className="popup__field-container">
        <label className="popup__field-description">Email</label>
        <input
          name="email"
          autoComplete="off"
          className="popup__field"
          type="email"
          placeholder="Enter email"
          required
        />
        <span className="popup__field-error popup__field-error_type_email"></span>

        <label className="popup__field-description">Password</label>
        <input
          name="password"
          autoComplete="off"
          className="popup__field"
          type="password"
          placeholder="Enter password"
          required
          minLength="8"
        />
        <span className="popup__field-error popup__field-error_type_password"></span>
      </div>
    </PopupWithForm>
  );
}

export default LoginPopup;
