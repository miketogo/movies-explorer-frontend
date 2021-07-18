import '../../index.css';
import './SavedMovies.css';
import React from "react";


import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
import SavedMoviesCardList from './SavedMoviesCardList/SavedMoviesCardList';




function SavedMovies(props) {
  return (
    <>
    <Header handleMenuOpenClick={props.handleMenuOpenClick} loggedIn={props.loggedIn}/>
    {/* <Header handleMenuOpenClick={props.handleMenuOpenClick} isLoggedIn={props.isLoggedIn}/> */}
    <div className="movies">
      <SearchForm getMovies={props.getMovies} handleShortsChange={props.handleShortsChange}/>
      <SavedMoviesCardList savedFilms={props.savedFilms} handleCardDelite={props.handleCardDelite}/>
    </div>
    <Footer />
    </>

  );
}

export default SavedMovies;
