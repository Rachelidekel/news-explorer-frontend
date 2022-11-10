import { useState } from "react";
import NewsCardList from "../NewsCardList/NewsCardList";

function SearchResults({
  token,
  isHomePage,
  isLoggedIn,
  cards,
  savedCards,
  handleSaveArticleSubmit,
  handleDeleteSavedArticleSubmit,
  handleShowMoreClick,
  moreCards,
}) {
  const [isMore, setIsMore] = useState(false);

  function handleShowMorePosts() {
    handleShowMoreClick();
    setIsMore(true);
  }

  return (
    <section className="search-results">
      <div className="search-results__container">
        <h2 className="search-results__title">Search results</h2>
        <NewsCardList
          token={token}
          isHomePage={isHomePage}
          cards={cards}
          savedCards={savedCards}
          tooltipText="Sign in to save articles"
          moreCards={moreCards}
          isMore={isMore}
          isLoggedIn={isLoggedIn}
          handleSaveArticleSubmit={handleSaveArticleSubmit}
          handleDeleteSavedArticleSubmit={handleDeleteSavedArticleSubmit}
        />
        {moreCards.length !== cards.length - 3 ? (
          <button
            className="search-results__button"
            onClick={handleShowMorePosts}
          >
            Show more
          </button>
        ) : undefined}
      </div>
    </section>
  );
}

export default SearchResults;
