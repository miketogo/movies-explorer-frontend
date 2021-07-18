import '../../../index.css';
import './MoviesCard.css';
import React from "react";

import tick from '../../../images/tick-movie.svg'




function MoviesCard(props) {
  const [isCardSaved, setCardSaved] = React.useState(false);
  React.useEffect(() => {
    if(props.savedFilms && props.savedFilms.some(i => i.movieId === props.card.id)){
      setCardSaved(true);
    }
  }, [props.card.id, props.savedFilms]);

  function handleSaveClick() {
    if (isCardSaved) {
      setCardSaved(false)
    } else {
      setCardSaved(true)
    }
    props.onCardSave(props.card, isCardSaved)
  }
  return (
    <div className="movie-card" key={props.card.id}>
      <div className="movie-card__headers">
        <h3 className="movie-card__title">{props.card.nameRU}</h3>
        <p className="movie-card__time">{
          props.card.duration > 60 ? `${props.card.duration / 60 | 0}ч ${props.card.duration % 60}м` :
            `${props.card.duration} минут`
        }</p>
      </div>
      <a className="movie-card__image-link" href={props.card.trailerLink} target="_blank" rel="noreferrer">
        <img className="movie-card__image" alt="Обложка к фильму" src={`https://api.nomoreparties.co${props.card.image.url}`} />
      </a>
      <div className={`movie-card__save ${isCardSaved ? 'movie-card__save_active' : ''}`} onClick={handleSaveClick}>
        <img className={`movie-card__save-tick ${isCardSaved ? "movie-card__save-tick_active" : ""}`} src={tick} alt="Галочка" />
        <p className={`movie-card__save-text ${isCardSaved ? "movie-card__save-text_inactive" : ""}`}>Сохранить</p>
      </div>
    </div>
  );
}

export default MoviesCard;
