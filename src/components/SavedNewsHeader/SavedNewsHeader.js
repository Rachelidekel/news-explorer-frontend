import React from "react";
import { data } from "../../utils/data";

function SavedNewsHeader() {
  const keywords = data.map((card) => card.keyword);
  const uniqueKeywords = [...new Set(keywords)];

  return (
    <div className="news-header">
      <h1 className="news-header__title">Saved articles</h1>
      <p className="news-header__subtitle">
        Racheli, You have {data.length} saved articles
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
