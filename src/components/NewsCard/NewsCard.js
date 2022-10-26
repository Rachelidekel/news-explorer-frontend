import React from 'react';
import savebutton from '../../images/save_icon.svg';
import deletebutton from '../../images/trash_icon.svg';
import { useHomePage} from '../../contexts/HomePageContext';

const NewsCard = ({ card }) => {
  const { homePage } = useHomePage();
  return (
    <article className="card">
      <div
        className="card__image-wrapper">
            <img className='card__image' src={card.image} alt=""/>
        </div>
      <div className="card__text-container">
        <p className="cardcard__date">{card.date}</p>
        <h3 className="card__title">{card.title}</h3>
        <p className="card__subtitle">
          {card.text.length > 150 ? `${card.text.slice(0, 150)}...` : card.text}
        </p>
        <p className="card__source">{card.source}</p>
      </div>
      <button
        className="card__button"
        aria-label={homePage ? 'save article' : 'delete article'}>
            <img className="card__button-icon" src={homePage? savebutton : deletebutton}/> 
      </button>
      {!homePage && <p className="card__keyword">{card.keyword}</p>}
    </article>
  );
};

export default NewsCard;
