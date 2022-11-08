import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({
  isHomePage,
  isLoggedIn,
  savedCards,
  handleDeleteSavedArticleSubmit,
  token,
}) {
  return (
    <main className="saved-news">
      <div className="saved-news__container">
        <NewsCardList
          token={token}
          isHomePage={isHomePage}
          handleDeleteSavedArticleSubmit={handleDeleteSavedArticleSubmit}
          savedCards={savedCards}
          isLoggedIn={isLoggedIn}
          tooltipText="Remove from saved"
        />
      </div>
    </main>
  );
}

export default SavedNews;
