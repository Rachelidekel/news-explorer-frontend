import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useFormAndValidation } from "../../hooks/UseForm";

function LoginPopup({
  isOpen,
  onClose,
  onRedirect,
  isAuthError,
  onLoginSubmit,
}) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();
  return (
    <PopupWithForm
      title="Sign in"
      name="signin"
      submitText="Sign in"
      redirectText="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      isValid={isValid}
      email={values.email}
      password={values.password}
      onRedirect={onRedirect}
      resetForm={resetForm}
      onLoginSubmit={onLoginSubmit}
      buttonText="sign in"
    >
      <div className="popup__field-container">
        <label className="popup__field-description">Email</label>
        <input
          onChange={handleChange}
          name="email"
          value={values.email || ""}
          autoComplete="off"
          className="popup__field"
          type="email"
          placeholder="Enter email"
          required
        />
        <span
          className={`popup__field-error popup__field-error_type_email ${
            isAuthError ? isAuthError : ""
          }`}
        >
          {errors.email}
        </span>

        <label className="popup__field-description">Password</label>
        <input
          onChange={handleChange}
          name="password"
          value={values.password || ""}
          autoComplete="off"
          className="popup__field"
          type="password"
          placeholder="Enter password"
          required
          minLength="8"
        />
        <span
          className={`popup__field-error popup__field-error_type_password ${
            isAuthError ? isAuthError : ""
          }`}
        >
          {errors.password}
        </span>
      </div>
    </PopupWithForm>
  );
}

export default LoginPopup;
