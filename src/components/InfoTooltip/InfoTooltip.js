import React from "react";
import Popup from "../Popup/Popup";

function InfoTooltip({ isOpen, onClose, title, onRedirect, redirectText }) {
  return (
    <Popup isOpen={isOpen} onClose={onClose} title="tooltip" name="tooltip">
      <h2 className="popup__tooltip-title">{title}</h2>
      <p className="popup__tooltip-link" onClick={onRedirect}>
        {redirectText}
      </p>
    </Popup>
  );
}

export default InfoTooltip;
