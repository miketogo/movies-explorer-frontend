import '../../../index.css';
import './SavedMoviesCard.css';
import React from "react";
import { Link, withRouter } from 'react-router-dom';
import cross from '../../../images/cross.svg'




function SavedMoviesCard(props) {
  function handleCardDelite(){

  }
  return (
    <div className="saved-movie-card">
      <div className="saved-movie-card__headers">
        <h3 className="saved-movie-card__title">В погоне за Бенкси</h3>
        <p className="saved-movie-card__time">27 минут</p>
      </div>
      <img className="saved-movie-card__image" alt="Обложка к фильму" src="https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4adf61aa-3cb7-4381-9245-523971e5b4c8/600x900"/>
      <div className="saved-movie-card__delite" onClick={handleCardDelite}>
        <img className="saved-movie-card__cross" src={cross} alt="Крестик" />
      </div>
    </div>
  );
}

export default SavedMoviesCard;
