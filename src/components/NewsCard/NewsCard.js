import React from "react";
import savebutton from "../../images/save_icon.svg";
import deletebutton from "../../images/trash_icon.svg";

const NewsCard = ({ card, isHomePage }) => {
  return (
    <article className="card">
      <div className="card__image-wrapper">
        <img className="card__image" src={card.image} alt="" />
      </div>
      <div className="card__text-container">
        <p className="card__date">{card.date}</p>
        <h3 className="card__title">{card.title}</h3>
        <p className="card__subtitle">{card.text}</p>
        <p className="card__source">{card.source}</p>
      </div>
      <button
        className="card__button"
        aria-label={isHomePage ? "save article" : "delete article"}
      >
        <img
          className="card__button-icon"
          src={isHomePage ? savebutton : deletebutton}
        />
      </button>
      {!isHomePage && <p className="card__keyword">{card.keyword}</p>}
    </article>
  );
};

export default NewsCard;
