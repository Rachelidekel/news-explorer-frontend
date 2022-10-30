import React from "react";
import Popup from "../Popup/Popup";

function PopupWithForm({ name, isOpen, onClose, title, buttonText, children }) {
  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
      <h2 className={`popup__title popup__title_type_${name}`}>{title}</h2>
      <form action="submit" className="popup__form" name={name} noValidate>
        {children}
        <div className="popup__form-control">
          <div className="popup__error-container popup__submit-error">
            <span className="popup__field-error form__field-error"></span>
          </div>
        </div>
        <button
          className={`popup__form-button popup__form-button_type_${name}`}
          type="submit"
        >
          sign in
        </button>
        <p className="popup__redirect">
          <span className="popup__redirect-link"></span>
        </p>
      </form>
    </Popup>
  );
}

export default PopupWithForm;
