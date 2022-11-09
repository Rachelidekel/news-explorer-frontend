import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SavedNewsHeader({ savedCards, topOfKeywords }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="news-header">
      <h1 className="news-header__title">Saved articles</h1>
      <p className="news-header__subtitle">
        {currentUser.name}, You have {savedCards.length} saved articles
      </p>
      <p className="news-header__keywords">
        By keywords:&nbsp;
        <span className="news-header__keywords-bold">
          {topOfKeywords.length <= 2
            ? topOfKeywords.join(", ")
            : topOfKeywords.slice(0, 2).join(", ") +
              " and " +
              (topOfKeywords.length - 2) +
              " more"}
        </span>
      </p>
    </div>
  );
}

export default SavedNewsHeader;
