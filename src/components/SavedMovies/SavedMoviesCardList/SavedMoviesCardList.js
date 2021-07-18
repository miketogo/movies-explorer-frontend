import '../../../index.css';
import './SavedMoviesCardList.css';
import React from "react";

import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard';
import Preloader from '../../Preloader/Preloader'




function SavedMoviesCardList(props) {
  const [films, setFilms] = React.useState([]);
  // const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);


  React.useEffect(() => {
      setFilms(props.savedFilms)
  }, [props.savedFilms])


  return (
    <section className="saved-movies-card-list">
      {props.isPreloaderVisible && <Preloader />}
      {props.filmsApiErrorMessage && <p className="saved-movies-card-list__not-found">{props.filmsApiErrorMessage}</p>}
      {!props.isPreloaderVisible && props.films && props.films.length <= 0 && <p className="saved-movies-card-list__not-found">Ничего не найдено</p>}
      <div className="saved-movies-card-list__cards">

        {films && films.map((item, i) => (
          <SavedMoviesCard card={item} key={item.id} handleCardDelite={props.handleCardDelite} savedFilms={props.savedFilms}/>
        ))}
      </div>

    </section>
  );
}

export default SavedMoviesCardList;
