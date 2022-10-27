import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { data } from "../../utils/data";

function NewsCardList({ isHomePage }) {
  return (
    <ul className="cards">
      {data.map((card) => (
        <li key={card._id}>
          <NewsCard card={card} isHomePage={isHomePage} />
        </li>
      ))}
    </ul>
  );
}

export default NewsCardList;
