import { useState } from "react";

function NewsCard({
  card,
  token,
  cardKeywrod,
  imageSrc,
  cardTitle,
  cardSubtitle,
  cardSurce,
  cardDate,
  cardLink,
  isHomePage,
  isLoggedIn,
  tooltipText,
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

  function handleSaveArticleClick(e) {
    e.preventDefault();
    if (isHomePage && isMarkedArticle === false) {
      handleSaveArticleSubmit(
        cardTitle,
        cardSubtitle,
        cardDate,
        cardSurce,
        cardLink,
        imageSrc,
        token
      );
      if (isLoggedIn) {
        setIsMarkedArticle(true);
        handleChageBackground();
      }
    } else if (isHomePage && isMarkedArticle === true) {
      handleDeleteSavedArticleSubmit(card._id, token);
      setIsMarkedArticle(false);
    }
    if (!isHomePage) {
      handleDeleteSavedArticleSubmit(card._id, token);
    }
  }

  return (
    <a className="card__link" target="_blank" rel="noreferrer" href={cardLink}>
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
        {!isLoggedIn ? (
          <p className="card__tooltip card__item_absolute">{tooltipText}</p>
        ) : undefined}
        {!isHomePage && <p className="card__keyword">{cardKeywrod}</p>}
      </article>
    </a>
  );
}

export default NewsCard;
