import React from "react";
import NewsCard from "../NewsCard/NewsCard";
//import { data } from "../../utils/data";

function NewsCardList({
  isHomePage,
  isLoggedIn,
  cards,
  handleSaveArticleSubmit,
  handleDeleteSavedArticleSubmit,
}) {
  return (
    <ul className="cards">
      {cards.map((card) => (
        <li key={card._id}>
          <NewsCard
            card={card}
            isHomePage={isHomePage}
            isLoggedIn={isLoggedIn}
            imageSrc={card.urlToImage}
            cardTitle={card.title}
            cardSubtitle={card.descrition}
            cardSurce={card.source.name}
            handleSaveArticleSubmit={handleSaveArticleSubmit}
            handleDeleteSavedArticleSubmit={handleDeleteSavedArticleSubmit}
          />
        </li>
      ))}
    </ul>
  );
}

export default NewsCardList;
