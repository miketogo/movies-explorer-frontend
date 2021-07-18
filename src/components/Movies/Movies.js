import '../../index.css';
import './Movies.css';
import React from "react";


import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';





function Movies(props) {
  return (
    <>
    <Header handleMenuOpenClick={props.handleMenuOpenClick} loggedIn={props.loggedIn}/>
    {/* <Header handleMenuOpenClick={props.handleMenuOpenClick} isLoggedIn={props.isLoggedIn}/> */}
    <div className="movies">
      <SearchForm getMovies={props.getMovies} handleShortsChange={props.handleShortsChange}/>
      <MoviesCardList films={props.films} isPreloaderVisible={props.isPreloaderVisible} filmsApiErrorMessage={props.filmsApiErrorMessage} onCardSave={props.onCardSave} savedFilms={props.savedFilms}/>
    </div>
    <Footer />
    </>

  );
}

export default Movies;
