import React from "react";
import Popup from "../Popup/Popup";

function PopupWithForm({
  name,
  isOpen,
  onClose,
  title,
  children,
  buttonText,
  onRedirect,
  redirectText,
  onRegisterSubmit,
  onLoginSubmit,
  email,
  password,
  username,
  resetForm,
  isValid,
  isAuthError,
}) {
  function handleOnRegister(e) {
    e.preventDefault();
    if (onRegisterSubmit) {
      onRegisterSubmit(email, password, username);
    }
    if (onLoginSubmit) {
      onLoginSubmit(email, password);
    }
    resetForm();
  }

  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
      <h2 className={`popup__title popup__title_type_${name}`}>{title}</h2>
      <form
        action="submit"
        className="popup__form"
        name={name}
        onSubmit={handleOnRegister}
        noValidate
      >
        {children}
        <div className="popup__form-control"></div>
        <span
          className={`popup__submit-error ${isAuthError ? isAuthError : ""}`}
        >
          {isAuthError}
        </span>
        <button
          className={`popup__form-button popup__form-button_type_${name} ${
            !isValid ? `popup__form-button_disabled` : ""
          }`}
          type="submit"
        >
          {buttonText}
        </button>
        <div className="popup__redirect">
          <span>or</span>
          <button
            type="button"
            className="popup__redirect-link"
            onClick={onRedirect}
          >
            {redirectText}
          </button>
        </div>
      </form>
    </Popup>
  );
}

export default PopupWithForm;
