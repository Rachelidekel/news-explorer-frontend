import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function RegistrationPopup({ isOpen, onClose, onRedirect }) {
  return (
    <PopupWithForm
      title="Sign up"
      submitText="Sign up"
      redirectText="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onRedirect={onRedirect}
      onRegisterSubmit={onRegisterSubmit}
      isValid={isValid}
      email={values.email}
      password={values.password}
      username={values.username}
      resetForm={resetForm}
      isSingUpError={props.isSingUpError}
    >
      <div className="popup__field-container">
        <label className="popup__field">Email</label>
        <input
          onChange={handleChange}
          name="email"
          value={values.email || ""}
          autoComplete="off"
          className="popup__input"
          type="email"
          placeholder="Enter email"
          required
        />
        <span className="popup__field-error popup__field-error_email">
          {errors.email}
        </span>
        <label className="popup__field">Password</label>
        <input
          onChange={handleChange}
          name="password"
          value={values.password || ""}
          autoComplete="off"
          className="popup__input"
          type="password"
          placeholder="Enter password"
          minLength="8"
          required
        />
        <span className="popup__field-error popup__field-error_password">
          {errors.password}
        </span>
        <label className="popup__field">Username</label>
        <input
          onChange={handleChange}
          name="username"
          value={values.username || ""}
          autoComplete="off"
          className="popup__input"
          type="text"
          placeholder="Enter your username"
          required
        />
        <span className="popup__field-error popup__field-error_username">
          {errors.username}
        </span>
      </div>
    </PopupWithForm>
  );
}

export default RegistrationPopup;
