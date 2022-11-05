import React from "react";
import SearchResults from "../SearchResults/SearchResults";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import ReceivingError from "../ReceivingError/ReceivingError";

function Main({
  cards,
  isHomePage,
  isLoggedIn,
  handleSaveArticleSubmit,
  handleDeleteSavedArticleSubmit,
  handleShowMoreClick,
  isReceivingError,
  isNothingFoundOpen,
  isPreloaderOpen,
  moreCards,
}) {
  return (
    <main className="main">
      <SearchResults
        cards={cards}
        moreCards={moreCards}
        isHomePage={isHomePage}
        isLoggedIn={isLoggedIn}
        handleSaveArticleSubmit={handleSaveArticleSubmit}
        handleShowMoreClick={handleShowMoreClick}
        handleDeleteSavedArticleSubmit={handleDeleteSavedArticleSubmit}
      />
      {isReceivingError ? <ReceivingError /> : undefined}

      {isPreloaderOpen ? <Preloader /> : undefined}

      {isNothingFoundOpen ? <NotFoundPage /> : undefined}
      <About />
    </main>
  );
}

export default Main;
