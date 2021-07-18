import '../../../index.css';
import './SavedMoviesCard.css';
import React from "react";

import cross from '../../../images/cross.svg'




function SavedMoviesCard(props) {
  function handleCardDelite() {
    props.handleCardDelite(props.card, true)
  }
  return (
    <div className="saved-movie-card" key={props.card._id}>
      <div className="saved-movie-card__headers">
        <h3 className="saved-movie-card__title">{props.card.nameRU}</h3>
        <p className="saved-movie-card__time">{
          props.card.duration > 60 ? `${props.card.duration / 60 | 0}ч ${props.card.duration % 60}м` :
            `${props.card.duration} минут`
        }</p>
      </div>
      <a className="saved-movie-card__image-link" href={props.card.trailer} target="_blank" rel="noreferrer">
        <img className="saved-movie-card__image" alt="Обложка к фильму" src={props.card.image} />
      </a>
      <div className="saved-movie-card__delite" onClick={handleCardDelite}>
        <img className="saved-movie-card__cross" src={cross} alt="Крестик" />
      </div>
    </div>
  );
}

export default SavedMoviesCard;
