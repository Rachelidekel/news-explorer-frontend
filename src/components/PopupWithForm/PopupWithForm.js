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
}) {
  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
      <h2 className={`popup__title popup__title_type_${name}`}>{title}</h2>
      <form action="submit" className="popup__form" name={name} noValidate>
        {children}
        <div className="popup__form-control"></div>
        <button
          className={`popup__form-button popup__form-button_type_${name}`}
          type="submit"
        >
          {buttonText}
        </button>
        <p className="popup__redirect">
          or
          <span className="popup__redirect-link" onClick={onRedirect}>
            {redirectText}
          </span>
        </p>
      </form>
    </Popup>
  );
}

export default PopupWithForm;
