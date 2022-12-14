import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useFormAndValidation } from "../../Hooks/UseForm";

function RegisterPopup({
  isOpen,
  onClose,
  onRedirect,
  onRegisterSubmit,
  isAuthError,
}) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  return (
    <PopupWithForm
      title="Sign up"
      name="signup"
      submitText="Sign up"
      redirectText="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onRedirect={onRedirect}
      isValid={isValid}
      email={values.email}
      password={values.password}
      username={values.username}
      onRegisterSubmit={onRegisterSubmit}
      resetForm={resetForm}
      buttonText="sign up"
      isAuthError={isAuthError}
    >
      <div className="popup__field-container">
        <p className="popup__field-description">Email</p>
        <input
          onChange={handleChange}
          name="email"
          value={values.email || ""}
          autoComplete="off"
          className="popup__field popup__field-signup"
          type="email"
          placeholder="Enter email"
          required
        />
        <span
          className={`popup__field-error email-field-error" ${
            isAuthError ? isAuthError : ""
          }`}
        >
          {errors.email}
        </span>
        <p className="popup__field-description">Password</p>
        <input
          onChange={handleChange}
          name="password"
          value={values.password || ""}
          autoComplete="off"
          className="popup__field popup__field-signup"
          type="password"
          placeholder="Enter password"
          required
          minLength="8"
        />
        <span
          className={`popup__field-error password-field-error" ${
            isAuthError ? isAuthError : ""
          }`}
        >
          {errors.password}
        </span>
        <p className="popup__field-description">Username</p>
        <input
          onChange={handleChange}
          name="username"
          value={values.username || ""}
          autoComplete="off"
          className="popup__field popup__field-signup"
          type="text"
          placeholder="Enter your username"
          required
        />
        <span
          className={`popup__field-error text-field-error" ${
            isAuthError ? isAuthError : ""
          }`}
        >
          {errors.username}
        </span>
      </div>
    </PopupWithForm>
  );
}

export default RegisterPopup;
