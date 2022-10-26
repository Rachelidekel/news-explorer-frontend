import React from "react";
import { useCards } from "../../contexts/CardsContext";

function SavedNewsHeader() {
  const { data } = useCards();

  const keywords = data.map((card) => card.keyword);
  const uniqueKeywords = [...new Set(keywords)];

  //console.log(uniqueKeywords);

  return (
    <div className="news-header">
      <h1 className="news-header__title">Saved articles</h1>
      <p className="news-header__subtitle">
        You have {data.length} saved articles
      </p>
      <p className="news-header__keywords">
        By keywords:{" "}
        <span className="news-header__keywords-bold">
          {uniqueKeywords.length <= 2
            ? uniqueKeywords.join(", ")
            : uniqueKeywords.slice(0, 2).join(", ") +
              " and " +
              (uniqueKeywords.length - 2) +
              " more"}
        </span>
      </p>
    </div>
  );
}

export default SavedNewsHeader;
