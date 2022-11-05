import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({ isHomePage, isLoggedIn, savedCards, onDelete }) {
  return (
    <main className="saved-news">
      <div className="saved-news__container">
        <NewsCardList
          isHomePage={isHomePage}
          onDelete={onDelete}
          savedCards={savedCards}
          isLoggedIn={isLoggedIn}
        />
      </div>
    </main>
  );
}

export default SavedNews;
