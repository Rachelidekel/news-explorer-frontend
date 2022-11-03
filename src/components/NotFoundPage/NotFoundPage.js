import React from "react";
import notFoundSmily from "../../images/NotFound_smily.svg";

function NotFoundPage(props) {
  return (
    <section className="not-found-page">
      <div className="not-found-page__image">
        <img
          className="not-fount-page__smily"
          alt="sad smily"
          src={notFoundSmily}
        />
      </div>
      <h2 className="not-found-page__title">Nothing found</h2>
      <p className="not-found-page__text">
        Sorry, but nothing matched your search terms.
      </p>
    </section>
  );
}

export default NotFoundPage;
