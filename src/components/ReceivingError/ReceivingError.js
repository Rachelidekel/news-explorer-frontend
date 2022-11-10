import React from "react";

function ReceivingError() {
  return (
    <section className="error-section">
      <div className="error-section__image"></div>
      <h2 className="error-section__title">
        Sorry, something went wrong during the request. There may be a
        connection issue or the server may be down. Please try again later.
      </h2>
    </section>
  );
}

export default ReceivingError;
