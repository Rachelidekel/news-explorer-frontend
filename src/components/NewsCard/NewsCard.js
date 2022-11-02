import { useState } from "react";

function NewsCard({ card, isHomePage }) {
  const [chageBackground, setChangeBackground] = useState(false);

  function handleChageBackground() {
    setChangeBackground(!chageBackground);
  }

  return (
    <article className="card">
      <div className="card__image-wrapper">
        <img className="card__image" src={card.image} alt={card.title} />
      </div>
      <div className="card__text-container">
        <p className="card__date">{card.date}</p>
        <h3 className="card__title">{card.title}</h3>
        <p className="card__subtitle">{card.text}</p>
        <p className="card__source">{card.source}</p>
      </div>
      <button
        className={isHomePage ? "card__button-save" : "card__button-trash"}
        aria-label={isHomePage ? "save article" : "delete article"}
        onClick={handleChageBackground}
        onMouseMove={handleChageBackground}
      ></button>
      {!isHomePage && <p className="card__keyword">{card.keyword}</p>}
    </article>
  );
}

export default NewsCard;
