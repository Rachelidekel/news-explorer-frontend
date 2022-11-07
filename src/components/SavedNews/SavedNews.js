import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({ isHomePage, isLoggedIn, savedCards, onDelete, token }) {
  return (
    <main className="saved-news">
      <div className="saved-news__container">
        <NewsCardList
        token={token}
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
