import '../../../index.css';
import './MoviesCardList.css';
import React from "react";

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../../Preloader/Preloader'




function MoviesCardList(props) {
  const [films, setFilms] = React.useState([]);
  const  [remainingFilms, setRemainingFilms] = React.useState([]);
  const  [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  // const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  function handleResize() {
    setTimeout(setScreenWidth, 500, window.innerWidth)

    console.log(screenWidth)
    window.removeEventListener('resize', handleResize);
  }

  // window.addEventListener('resize', handleResize);

  React.useEffect(() => {

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  React.useEffect(() => {
    if(screenWidth >= 1279 && props.films  && props.films.length > 12){
      setFilms(props.films.slice(0, 12))
      setRemainingFilms(props.films.slice(12))
    } else
    if(screenWidth >= 767 && window.innerWidth < 1279 && props.films  && props.films.length > 8){
      setFilms(props.films.slice(0, 8))
      setRemainingFilms(props.films.slice(8))
    }
    else
    if( screenWidth < 767 && props.films  && props.films.length > 5){
      setFilms(props.films.slice(0, 5))
      setRemainingFilms(props.films.slice(5))
    } else if(!props.films){
      setRemainingFilms([])
      setFilms([])
    } else{
      setRemainingFilms([])
      setFilms(props.films)
    }
  }, [props.films, screenWidth])

  function handleMoreButton (){
    if(screenWidth > 1279 && remainingFilms ){
      const newFilms = films.concat(remainingFilms.slice(0, 3))
      setRemainingFilms(remainingFilms.slice(3))
      setFilms(newFilms)
    } else
    if( screenWidth < 1279 && remainingFilms ){
      const newFilms = films.concat(remainingFilms.slice(0, 2))
      setRemainingFilms(remainingFilms.slice(2))
      setFilms(newFilms)
    }


  }
  return (
    <section className="movies-card-list">
      {props.isPreloaderVisible && <Preloader />}
      {props.filmsApiErrorMessage && <p className="movies-card-list__not-found">{props.filmsApiErrorMessage}</p>}
      {!props.isPreloaderVisible && props.films && props.films.length <= 0 && <p className="movies-card-list__not-found">Ничего не найдено</p>}
      <div className="movies-card-list__cards">

        {films && films.map((item, i) => (
          <MoviesCard card={item} onCardAdd={props.onCardAdd} onCardRemove={props.onCardRemove} key={item.id} onCardSave={props.onCardSave} savedFilms={props.savedFilms}/>
        ))}
      </div>
      {remainingFilms && remainingFilms.length >= 1 && !props.isPreloaderVisible &&
        <button className="movies-card-list__more" onClick={handleMoreButton}>
          Ещё
        </button>
      }

    </section>

  );
}

export default MoviesCardList;
