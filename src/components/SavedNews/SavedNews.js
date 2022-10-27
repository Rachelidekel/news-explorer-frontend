import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews({isHomePage}) {
  return (
    <section className="saved-news">
      <div className="saved-news__container">
        <NewsCardList isHomePage={isHomePage} />
      </div>
    </section>
  );
};

export default SavedNews;
