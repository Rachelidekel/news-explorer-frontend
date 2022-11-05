import { useState } from "react";

function NewsCard({
  card,
  imageSrc,
  cardTitle,
  cardSubtitle,
  cardSurce,
  cardKeywrod,
  isHomePage,
  isLoggedIn,
  handleSaveArticleSubmit,
  handleDeleteSavedArticleSubmit,
}) {
  const [changeBackground, setChangeBackground] = useState(false);
  //const [isHover, setIsHover] = useState(false);
  const [isMarkedArticle, setIsMarkedArticle] = useState(false);

  function handleChageBackground() {
    setChangeBackground(!changeBackground);
  }

  //const boxStyle = {
  //backgroundImage: isHover ? `url(${props.hoverBtn})` : `url(${props.inactiveBtn})`
  //};
  //const markedBoxStyle = {
  //backgroundImage: `url(${props.markedBtn})`
  //};

  const modifiedDate = modifyDate();

  function modifyDate() {
    if (card.date) {
      card.publishedAt = card.date;
    }
    const months = [
      { num: "01", name: "January" },
      { num: "02", name: "February" },
      { num: "03", name: "March" },
      { num: "04", name: "April" },
      { num: "05", name: "May" },
      { num: "06", name: "June" },
      { num: "07", name: "July" },
      { num: "08", name: "August" },
      { num: "09", name: "September" },
      { num: "10", name: "October" },
      { num: "11", name: "November" },
      { num: "12", name: "December" },
    ];

    const selectedMonthName = months.find(
      (month) => month.num === `${card.publishedAt.slice(5, 7)}`
    );
    return `${selectedMonthName.name} ${card.publishedAt.slice(
      8,
      10
    )}, ${card.publishedAt.slice(0, 4)}`;
  }

  //const handleMouseEnter = () => {
  //setIsHover(true);
  //};
  //const handleMouseLeave = () => {
  //setIsHover(false);
  //};

  const handleSaveArticleClick = () => {
    if (isHomePage && isMarkedArticle === false) {
      handleSaveArticleSubmit(card);
      if (isLoggedIn) {
        setIsMarkedArticle(true);
        handleChageBackground();
      }
    } else if (isHomePage && isMarkedArticle === true) {
      handleDeleteSavedArticleSubmit(card);
      setIsMarkedArticle(false);
    }
    if (!isHomePage) {
      handleDeleteSavedArticleSubmit(card);
    }
  };

  return (
    <article className="card">
      <div className="card__image-wrapper">
        <img className="card__image" src={imageSrc} alt={cardTitle} />
      </div>
      <div className="card__text-container">
        <p className="card__date">{modifiedDate}</p>
        <h3 className="card__title">{cardTitle}</h3>
        <p className="card__subtitle">{cardSubtitle}</p>
        <p className="card__source">{cardSurce}</p>
      </div>
      <button
        className={isHomePage ? "card__button-save" : "card__button-trash"}
        aria-label={isHomePage ? "save article" : "delete article"}
        onClick={handleSaveArticleClick}
        onMouseMove={handleChageBackground}
      ></button>
      {!isHomePage && <p className="card__keyword">{cardKeywrod}</p>}
    </article>
  );
}

export default NewsCard;
