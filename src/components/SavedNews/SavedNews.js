import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({ isHomePage }) {
  return (
    <main className="saved-news">
      <div className="saved-news__container">
        <NewsCardList isHomePage={isHomePage} />
      </div>
    </main>
  );
}

export default SavedNews;
