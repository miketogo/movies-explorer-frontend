import '../../../index.css';
import './MoviesCard.css';
import React from "react";
import { Link, withRouter } from 'react-router-dom';
import tick from '../../../images/tick-movie.svg'




function MoviesCard(props) {
  const [isCardSaved, setCardSaved] = React.useState(false);
  function handleCardSave(){
    if (isCardSaved){
      setCardSaved(false)
    } else {
      setCardSaved(true)
    }

  }
  return (
    <div className="movie-card">
      <div className="movie-card__headers">
        <h3 className="movie-card__title">В погоне за Бенкси</h3>
        <p className="movie-card__time">27 минут</p>
      </div>
      <img className="movie-card__image" alt="Обложка к фильму" src="https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4adf61aa-3cb7-4381-9245-523971e5b4c8/600x900"/>
      <div className={`movie-card__save ${isCardSaved ? 'movie-card__save_active': ''}`} onClick={handleCardSave}>
        <img className={`movie-card__save-tick ${isCardSaved ? "movie-card__save-tick_active": ""}`} src={tick} alt="Галочка" />
        <p className={`movie-card__save-text ${isCardSaved ? "movie-card__save-text_inactive": ""}`}>Сохранить</p>
      </div>
    </div>
  );
}

export default MoviesCard;
