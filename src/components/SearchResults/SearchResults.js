import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';

function SearchResults({isHomePage, cardData}) {
  return (
    <section className="search-results">
      <div className="search-results__container">
        <h2 className="search-results__title">Search results</h2>
        <NewsCardList isHomePage={isHomePage} cardData={cardData} />
        <button className="search-results__button">Show more</button>
      </div>
    </section>
  );
};

export default SearchResults;
