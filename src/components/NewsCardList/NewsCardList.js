import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { useCards } from "../../contexts/CardsContext";

function NewsCardList() {
  const { data } = useCards();
  return (
    <ul className="cards">
      {data.map((card) => (
        <li key={card._id}>
          <NewsCard card={card} />
        </li>
      ))}
    </ul>
  );
}

export default NewsCardList;
