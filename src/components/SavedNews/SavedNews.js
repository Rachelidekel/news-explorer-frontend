import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews() {
  return (
    <section className="saved-news">
      <div className="saved-news__container">
        <NewsCardList />
      </div>
    </section>
  );
};

export default SavedNews;
