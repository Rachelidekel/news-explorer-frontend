import React from "react";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({
  isHomePage,
  isLoggedIn,
  cards,
  savedCards,
  token,
  isMore,
  moreCards,
  tooltipText,
  handleSaveArticleSubmit,
  handleDeleteSavedArticleSubmit,
}) {
  return (
    <ul className="cards">
      {isHomePage
        ? cards.slice(0, 3).map((card) => (
            <li key={card._id}>
              <NewsCard
                id={card._id}
                token={token}
                card={card}
                cardKeywrod={card.keyword}
                isHomePage={isHomePage}
                isLoggedIn={isLoggedIn}
                imageSrc={card.urlToImage}
                cardTitle={card.title}
                cardDate={card.publishedAt}
                cardSubtitle={card.description}
                cardSurce={card.source.name}
                cardLink={card.url}
                tooltipText={tooltipText}
                handleSaveArticleSubmit={handleSaveArticleSubmit}
                handleDeleteSavedArticleSubmit={handleDeleteSavedArticleSubmit}
              />
            </li>
          ))
        : savedCards.map((card) => (
            <li key={card._id}>
              <NewsCard
                id={card._id}
                token={token}
                card={card}
                cardKeywrod={card.keyword}
                isHomePage={isHomePage}
                isLoggedIn={isLoggedIn}
                imageSrc={card.urlToImage}
                cardTitle={card.title}
                cardDate={card.publishedAt}
                cardSubtitle={card.description}
                cardSurce={card.source.name}
                cardLink={card.url}
                tooltipText={tooltipText}
                handleSaveArticleSubmit={handleSaveArticleSubmit}
                handleDeleteSavedArticleSubmit={handleDeleteSavedArticleSubmit}
              />
            </li>
          ))}
      {isMore
        ? moreCards.map((card) => (
            <li key={card._id}>
              <NewsCard
                id={card._id}
                token={token}
                card={card}
                isHomePage={isHomePage}
                isLoggedIn={isLoggedIn}
                imageSrc={card.urlToImage}
                cardTitle={card.title}
                cardDate={card.publishedAt}
                cardSubtitle={card.description}
                cardSurce={card.source.name}
                cardLink={card.url}
                tooltipText={tooltipText}
                handleSaveArticleSubmit={handleSaveArticleSubmit}
                handleDeleteSavedArticleSubmit={handleDeleteSavedArticleSubmit}
              />
            </li>
          ))
        : undefined}
    </ul>
  );
}

export default NewsCardList;
