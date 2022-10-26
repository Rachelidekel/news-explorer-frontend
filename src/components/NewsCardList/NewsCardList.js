import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { useCards } from "../../contexts/CardsContext";

function NewsCardList() {
  const { data } = useCards();
  return (
    <section className="cards">
      <h2 className="cards__title">Search Result</h2>
      <ul className="cards__list">
        {data.map((card) => (
          <li key={card._id}>
            <NewsCard card={card} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default NewsCardList;
