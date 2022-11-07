import React from "react";
import SearchResults from "../SearchResults/SearchResults";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import ReceivingError from "../ReceivingError/ReceivingError";

function Main({
  token,
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
  isSearchResultOpen,
}) {
  return (
    <main className="main">
      {isSearchResultOpen ? (
        <SearchResults
          token={token}
          cards={cards}
          moreCards={moreCards}
          isHomePage={isHomePage}
          isLoggedIn={isLoggedIn}
          handleSaveArticleSubmit={handleSaveArticleSubmit}
          handleShowMoreClick={handleShowMoreClick}
          handleDeleteSavedArticleSubmit={handleDeleteSavedArticleSubmit}
        />
      ) : undefined}
      {isReceivingError ? <ReceivingError /> : undefined}

      {isPreloaderOpen ? <Preloader /> : undefined}

      {isNothingFoundOpen ? <NotFoundPage /> : undefined}
      <About />
    </main>
  );
}

export default Main;
